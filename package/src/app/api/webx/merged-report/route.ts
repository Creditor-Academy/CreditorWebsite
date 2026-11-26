import { NextResponse } from "next/server";
import { API_CONFIG } from "@/config/api";
import { requireReportAccess } from "@/lib/adminAuth";

const WEBX_ROUTES = {
  MERGED_REPORT: "/zoom/webinar/merged-report",
};

const withBaseUrl = (path: string) => {
  const normalizedBase = API_CONFIG.BASE_URL?.replace(/\/$/, "") || "";
  return `${normalizedBase}${path}`;
};

type MergedReportRecord = {
  registrant_id: string;
  webinar_id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string | null;
  join_url?: string;
  topic?: string;
  start_time?: string | null;
  registered_at?: string | null;
  joined?: boolean;
  status?: string;
  join_time?: string | null;
  leave_time?: string | null;
  duration?: number | null;
  date?: string;
};

const BACKEND_TIMEOUT_MS = 5000;
const CACHE_TTL_MS = 60_000;

// Short-lived in-memory cache so repeated views don't re-read every S3 object.
let cache: { at: number; data: MergedReportRecord[] } | null = null;

async function fetchZoomData(): Promise<MergedReportRecord[]> {
  try {
    const response = await fetch(withBaseUrl(WEBX_ROUTES.MERGED_REPORT), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      // Fail fast if the WebX backend is unreachable instead of hanging for 10s+
      signal: AbortSignal.timeout(BACKEND_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.warn("Failed to fetch Zoom merged report, continuing with recording registrations only");
      return [];
    }
    const payload = (await response.json()) as { data?: MergedReportRecord[] };
    return Array.isArray(payload?.data) ? payload.data : [];
  } catch (error) {
    console.warn("Error fetching Zoom merged report:", error);
    return [];
  }
}

async function fetchRecordingData(): Promise<MergedReportRecord[]> {
  let recordingData: MergedReportRecord[] = [];
    try {
      const { S3Client, ListObjectsV2Command, GetObjectCommand } = await import("@aws-sdk/client-s3");
      
      const s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        } : undefined,
      });

      const BUCKET = process.env.AWS_S3_BUCKET as string | undefined;
      const RECORDING_REGISTRATIONS_PREFIX = "recording-registrations/";

      if (BUCKET) {
        const listCommand = new ListObjectsV2Command({
          Bucket: BUCKET,
          Prefix: RECORDING_REGISTRATIONS_PREFIX,
        });

        const listResponse = await s3.send(listCommand);
        const keys = listResponse.Contents?.map(obj => obj.Key || "").filter(Boolean) || [];

        // Read files concurrently using Promise.all for faster performance
        const fetchPromises = keys.map(async (key) => {
          try {
            const getCommand = new GetObjectCommand({
              Bucket: BUCKET,
              Key: key,
            });
            const objectResponse = await s3.send(getCommand);
            const bodyString = await objectResponse.Body?.transformToString("utf-8");
            if (bodyString) {
              return JSON.parse(bodyString) as MergedReportRecord;
            }
          } catch (err) {
            console.error(`Error reading recording registration file ${key}:`, err);
          }
          return null;
        });

        const results = await Promise.all(fetchPromises);
        recordingData = results.filter((item): item is MergedReportRecord => item !== null);
      }
    } catch (error) {
      console.warn("Error fetching recording registrations:", error);
    }
  return recordingData;
}

export async function GET(request: Request) {
  const denied = await requireReportAccess(request);
  if (denied) return denied;

  try {
    const url = new URL(request.url);
    const webinarId = url.searchParams.get("webinarId");

    let mergedData: MergedReportRecord[];
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
      mergedData = cache.data;
    } else {
      // Run both sources in parallel instead of one after the other
      const [zoomData, recordingData] = await Promise.all([fetchZoomData(), fetchRecordingData()]);
      mergedData = [...zoomData, ...recordingData];
      cache = { at: Date.now(), data: mergedData };
    }

    // Filter by webinarId if provided
    const filtered = webinarId 
      ? mergedData.filter((record) => record.webinar_id === webinarId) 
      : mergedData;

    return NextResponse.json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error: unknown) {
    console.error("Merged report API error:", error);
    const message = error instanceof Error ? error.message : "Unexpected error while fetching merged report.";
    
    // FIXED: Changed undefined jsonResponse to native NextResponse.json
    return NextResponse.json(
      { success: false, count: 0, data: [], error: message },
      { status: 500 }
    );
  }
}
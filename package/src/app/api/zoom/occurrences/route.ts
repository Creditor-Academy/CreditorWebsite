import { NextRequest, NextResponse } from "next/server";
import { API_CONFIG } from "@/config/api";
import { isLiveWebinarMode } from "@/lib/webinarMode";
import { resolveZoomAccessToken } from "@/lib/zoomAccessToken";

const ZOOM_ROUTES = {
  OCCURRENCES: "/zoom/occurrences",
};

const withBaseUrl = (path: string) => {
  const normalizedBase = API_CONFIG.BASE_URL?.replace(/\/$/, "") || "";
  return `${normalizedBase}${path}`;
};

export interface OccurrenceItem {
  occurrence_id: string;
  date: string;
  time: string;
  start_time: string;
}

export interface OccurrencesResponse {
  webinarId: string;
  occurrences: OccurrenceItem[];
}

const fetchJson = async <T>(url: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data?: T }> => {
  try {
    const response = await fetch(url, init);
    const data = response.ok ? await response.json() : undefined;
    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.error("Fetch error:", error);
    return { ok: false, status: 500 };
  }
};

export async function GET(request: NextRequest) {
  if (!isLiveWebinarMode()) {
    return NextResponse.json(
      { success: false, error: "Live webinar mode is disabled" },
      { status: 409 }
    );
  }

  try {
    const searchParams = request.nextUrl.searchParams;
    const webinarId = searchParams.get("webinar_id");

    if (!webinarId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing webinar_id parameter",
        },
        { status: 400 }
      );
    }

    const accessToken = resolveZoomAccessToken(request.headers.get("authorization"));
    if (!accessToken) {
      return NextResponse.json(
        { success: false, error: "Zoom access token is not configured" },
        { status: 503 }
      );
    }

    const occurrencesUrl = `${withBaseUrl(ZOOM_ROUTES.OCCURRENCES)}?webinar_id=${webinarId}`;

    console.log("[ZOOM] Fetching occurrences:", {
      url: occurrencesUrl,
      webinarId,
    });

    const result = await fetchJson<OccurrencesResponse>(occurrencesUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!result.ok || !result.data) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch occurrences",
        },
        { status: result.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    });
  } catch (error: unknown) {
    console.error("[ZOOM] Occurrences error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch occurrences",
      },
      { status: 500 }
    );
  }
}


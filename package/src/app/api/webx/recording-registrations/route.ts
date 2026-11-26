import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { sendTeamNotificationEmail } from "@/lib/emailService";
import { requireReportAccess } from "@/lib/adminAuth";

// Reuse the same AWS setup pattern as other routes
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : undefined,
});

const BUCKET = process.env.AWS_S3_BUCKET as string | undefined;
const RECORDING_REGISTRATIONS_PREFIX = "recording-registrations/";

interface RecordingRegistration {
  registrant_id: string;
  webinar_id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string | null;
  join_url?: string;
  topic?: string;
  start_time?: string | null;
  registered_at: string;
  joined?: boolean;
  status?: string;
  type: "recording";
}

// POST: Save a recording registration
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 400 });
    }

    const body = await req.json().catch(() => ({}));
    const { email, first_name, last_name, phone_number, webinar_id } = body || {};

    if (!email || !first_name || !last_name) {
      return NextResponse.json({ error: "Missing required fields: email, first_name, last_name" }, { status: 400 });
    }

    const registrant_id = `recording_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const registered_at = new Date().toISOString();

    const registration: RecordingRegistration = {
      registrant_id,
      webinar_id: webinar_id || "recording",
      email: email.toLowerCase(),
      first_name,
      last_name,
      phone_number: phone_number || null,
      join_url: undefined,
      topic: "Previous Session Recording",
      start_time: null,
      registered_at,
      joined: false,
      status: "recording",
      type: "recording",
    };

    if (!BUCKET) {
      console.error("[recording-registrations] LEAD_NOT_SAVED AWS_S3_BUCKET is not set", {
        email: registration.email,
        name: `${first_name} ${last_name}`,
        webinar_id: registration.webinar_id,
        registered_at,
      });
      return NextResponse.json(
        { success: false, error: "We couldn't save your registration. Please try again shortly." },
        { status: 503 }
      );
    }

    const key = `${RECORDING_REGISTRATIONS_PREFIX}${registrant_id}.json`;
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: Buffer.from(JSON.stringify(registration, null, 2)),
      ContentType: "application/json",
      ServerSideEncryption: "AES256",
    }));

    // Email alerts must not undo a registration that was already stored.
    let emailAlert: "sent" | "failed" = "failed";
    try {
      const emailResult = await sendTeamNotificationEmail({
        attendeeName: `${first_name} ${last_name}`,
        attendeeEmail: email,
        attendeePhone: phone_number || undefined,
        meetingLink: undefined,
        sessionDate: registered_at,
        webinarId: webinar_id || "recording",
        sessionType: "pre-recorded",
      });
      if (emailResult.sent) {
        emailAlert = "sent";
        console.log("[recording-registrations] team notification email sent");
      } else {
        console.error(
          "[recording-registrations] EMAIL_ALERT_FAILED registration_saved=true",
          emailResult.reason || "unknown"
        );
      }
    } catch (emailError: unknown) {
      const message = emailError instanceof Error ? emailError.message : String(emailError);
      console.error("[recording-registrations] EMAIL_ALERT_FAILED registration_saved=true", message);
    }

    return NextResponse.json({ 
      success: true,
      emailAlert,
      data: {
        registrant_id,
        join_url: "",
        start_time: registered_at,
        topic: "Previous Session Recording",
      }
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[recording-registrations] LEAD_NOT_SAVED", message);
    return NextResponse.json(
      { success: false, error: "We couldn't save your registration. Please try again." },
      { status: 500 }
    );
  }
}

// GET: Fetch all recording registrations (admin only — contains registrant PII)
export async function GET(req: NextRequest) {
  const denied = await requireReportAccess(req);
  if (denied) return denied;

  try {
    const registrations: RecordingRegistration[] = [];

    if (BUCKET) {
      try {
        const listCommand = new ListObjectsV2Command({
          Bucket: BUCKET,
          Prefix: RECORDING_REGISTRATIONS_PREFIX,
        });

        const listResponse = await s3.send(listCommand);
        const keys = listResponse.Contents?.map(obj => obj.Key || "").filter(Boolean) || [];

        // Fetch each registration file
        for (const key of keys) {
          try {
            const getCommand = new GetObjectCommand({
              Bucket: BUCKET,
              Key: key,
            });
            const objectResponse = await s3.send(getCommand);
            const bodyString = await objectResponse.Body?.transformToString();
            if (bodyString) {
              const registration = JSON.parse(bodyString) as RecordingRegistration;
              registrations.push(registration);
            }
          } catch (err) {
            console.error(`Error reading registration file ${key}:`, err);
          }
        }
      } catch (err) {
        console.error("Error listing recording registrations:", err);
      }
    }

    return NextResponse.json({
      success: true,
      data: registrations,
    });
  } catch (err: any) {
    console.error("Error fetching recording registrations:", err);
    return NextResponse.json({ error: String(err?.message || err) }, { status: 500 });
  }
}


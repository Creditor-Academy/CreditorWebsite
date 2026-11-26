import { NextResponse } from "next/server";
import { API_CONFIG } from "@/config/api";
import { ZoomWebinarRegistrationPayload, ZoomWebinarRegistrationResponse } from "@/services/zoom";
import { sendTeamNotificationEmail } from "@/lib/emailService";
import { resolveZoomAccessToken } from "@/lib/zoomAccessToken";

const WEBX_ROUTES = {
  CONNECT: "/zoom/connect",
  REGISTER_WEBINAR: "/zoom/register-webinar",
};

const withBaseUrl = (path: string) => {
  const normalizedBase = API_CONFIG.BASE_URL?.replace(/\/$/, "") || "";
  return `${normalizedBase}${path}`;
};

const fetchJson = async <T>(url: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data: T | null }> => {
  const response = await fetch(url, init);
  const data = await response
    .json()
    .then((value) => value as T)
    .catch(() => null);

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ZoomWebinarRegistrationPayload;

    // Accept both webinarId (camel) and webinar_id (snake) from the client
    const webinarId =
      payload.webinarId ||
      ((
        payload as {
          webinar_id?: string;
        }
      ).webinar_id ?? undefined);

    // Accept both occurrence_id (snake) and occurrenceId (camel) from the client
    const occurrenceId =
      payload.occurrence_id ||
      ((
        payload as {
          occurrenceId?: string;
        }
      ).occurrenceId ?? undefined);

    if (!webinarId) {
      return NextResponse.json({ success: false, error: "Missing webinar_id" }, { status: 400 });
    }

    const webxRegisterUrl = withBaseUrl(WEBX_ROUTES.REGISTER_WEBINAR);

    console.log("[WEBX] Incoming frontend registration payload:", {
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      phone_number: payload.phone_number,
      webinarId,
      occurrenceId,
    });

    const accessToken = resolveZoomAccessToken(request.headers.get("authorization"));
    if (!accessToken) {
      return NextResponse.json(
        { success: false, error: "Zoom access token is not configured" },
        { status: 503 }
      );
    }

    console.log("[WEBX] Using Zoom access token from", request.headers.get("authorization") ? "request" : "ZOOM_ACCESS_TOKEN");

    const { email, first_name, last_name, phone_number } = payload;

    const webxBody = {
      email,
      first_name,
      last_name,
      // phone_number is sent as a string
      phone_number: phone_number ? String(phone_number) : undefined,
      webinar_id: webinarId,
      occurrence_id: occurrenceId,
    };

    console.log("[WEBX] Calling backend register endpoint:", {
      url: webxRegisterUrl,
      body: webxBody,
    });

    const registerResult = await fetchJson<ZoomWebinarRegistrationResponse | { message?: string }>(webxRegisterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(webxBody),
      cache: "no-store",
    });

    if (!registerResult.ok || !registerResult.data) {
      return NextResponse.json(
        {
          success: false,
          error: (registerResult.data as { message?: string })?.message || "Zoom webinar registration failed, Try again.",
        },
        { status: registerResult.status || 500 }
      );
    }

    const responseData = registerResult.data as ZoomWebinarRegistrationResponse;

    // Treat missing core Zoom fields as a failed registration so the UI doesn't show "success"
    if (!responseData?.registrant_id || !responseData?.join_url) {
      return NextResponse.json(
        {
          success: false,
          error:
            (registerResult.data as { message?: string })?.message ||
            "Webinar registration did not complete correctly on WebX/Zoom.",
          data: registerResult.data,
        },
        { status: 502 }
      );
    }

    // Send team notification email (non-blocking - don't fail registration if email fails)
    console.log("[WEBX] Attempting to send team notification email...");
    console.log("[WEBX] Email data:", {
      attendeeName: `${first_name} ${last_name}`,
      attendeeEmail: email,
      attendeePhone: phone_number || "not provided",
      meetingLink: responseData.join_url,
      sessionDate: responseData.start_time || "not provided",
      occurrenceId: occurrenceId,
    });

    let emailAlert: "sent" | "failed" = "failed";
    try {
      const emailResult = await sendTeamNotificationEmail({
        attendeeName: `${first_name} ${last_name}`,
        attendeeEmail: email,
        attendeePhone: phone_number,
        meetingLink: responseData.join_url,
        sessionDate: responseData.start_time,
        webinarId: webinarId,
        occurrenceId: occurrenceId,
        sessionType: "live",
      });
      if (emailResult.sent) {
        emailAlert = "sent";
        console.log("[WEBX] team notification email sent");
      } else {
        console.error("[WEBX] EMAIL_ALERT_FAILED registration_saved=true", emailResult.reason || "unknown");
      }
    } catch (emailError: unknown) {
      const message = emailError instanceof Error ? emailError.message : String(emailError);
      console.error("[WEBX] EMAIL_ALERT_FAILED registration_saved=true", message);
    }

    return NextResponse.json({ success: true, emailAlert, data: responseData });
  } catch (error: unknown) {
    console.error("WebX register-webinar API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unexpected server error while registering.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}


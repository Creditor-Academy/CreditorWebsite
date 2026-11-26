import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  createAdminSessionValue,
  getAdminApiKey,
  secretsMatch,
} from "@/lib/adminAuth";

/**
 * Exchanges ADMIN_API_KEY for an httpOnly session cookie so the registration
 * report UI can call report endpoints without putting the key in client code.
 */
export async function POST(request: Request) {
  const key = getAdminApiKey();
  const sessionValue = createAdminSessionValue();
  if (!key || !sessionValue) {
    console.error("[admin-auth] ADMIN_API_KEY is not set. Cannot start an admin session.");
    return NextResponse.json(
      { success: false, error: "Admin access is not configured" },
      { status: 503 }
    );
  }

  const body = (await request.json().catch(() => ({}))) as { apiKey?: unknown };
  const provided = typeof body.apiKey === "string" ? body.apiKey.trim() : "";
  if (!secretsMatch(provided, key)) {
    return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, sessionValue, adminSessionCookieOptions());
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", { ...adminSessionCookieOptions(), maxAge: 0 });
  return response;
}

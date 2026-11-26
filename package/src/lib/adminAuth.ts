import { createHash, createHmac, timingSafeEqual } from "crypto";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export const ADMIN_SESSION_COOKIE = "webx_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function sha256(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

/** Length-independent comparison. Empty values never match. */
export function secretsMatch(candidate: string, expected: string): boolean {
  if (!candidate || !expected) return false;
  return timingSafeEqual(sha256(candidate), sha256(expected));
}

export function getAdminApiKey(): string | null {
  const key = process.env.ADMIN_API_KEY?.trim() ?? "";
  return key || null;
}

function sessionSecret(): string | null {
  return process.env.NEXTAUTH_SECRET?.trim() || process.env.SECRET?.trim() || getAdminApiKey();
}

export function createAdminSessionValue(): string | null {
  const key = getAdminApiKey();
  const secret = sessionSecret();
  if (!key || !secret) return null;
  return createHmac("sha256", secret).update(`webx-admin-session:${key}`).digest("hex");
}

export function adminSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

export function readCookie(request: Request, name: string): string | null {
  const raw = request.headers.get("cookie");
  if (!raw) return null;
  for (const part of raw.split(";")) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    if (trimmed.slice(0, eq) === name) {
      return decodeURIComponent(trimmed.slice(eq + 1));
    }
  }
  return null;
}

function bearerToken(header: string | null): string | null {
  const match = header?.match(/^Bearer\s+(.+)$/i);
  const token = match?.[1]?.trim();
  return token || null;
}

function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function presentedCredential(request: Request): boolean {
  if (request.headers.get("x-admin-api-key")?.trim()) return true;
  if (bearerToken(request.headers.get("authorization"))) return true;
  if (readCookie(request, ADMIN_SESSION_COOKIE)) return true;
  return false;
}

async function hasAdminCookie(request: Request): Promise<boolean> {
  const expected = createAdminSessionValue();
  const cookie = readCookie(request, ADMIN_SESSION_COOKIE);
  if (!expected || !cookie) return false;
  return secretsMatch(cookie, expected);
}

async function hasAllowedNextAuthSession(): Promise<boolean> {
  const allowed = adminEmails();
  if (allowed.length === 0) return false;
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();
    return Boolean(email && allowed.includes(email));
  } catch (error) {
    console.error("[admin-auth] NextAuth session check failed", error);
    return false;
  }
}

export async function isReportAuthorized(request: Request): Promise<boolean> {
  const key = getAdminApiKey();
  const headerKey =
    request.headers.get("x-admin-api-key")?.trim() || bearerToken(request.headers.get("authorization"));
  if (key && headerKey && secretsMatch(headerKey, key)) return true;
  if (await hasAdminCookie(request)) return true;
  if (await hasAllowedNextAuthSession()) return true;
  return false;
}

/**
 * Report/admin responses.
 * No credential -> 401. A credential that does not match -> 403.
 * Returns null when the caller may proceed.
 */
export async function requireReportAccess(request: Request): Promise<NextResponse | null> {
  if (await isReportAuthorized(request)) return null;

  if (!getAdminApiKey() && adminEmails().length === 0) {
    console.error(
      "[admin-auth] Rejecting report request. Set ADMIN_API_KEY on the server. Optionally set ADMIN_EMAILS to a comma-separated list of NextAuth user emails."
    );
  }

  const status = presentedCredential(request) ? 403 : 401;
  return NextResponse.json(
    { success: false, error: status === 401 ? "Unauthorized" : "Forbidden" },
    { status }
  );
}

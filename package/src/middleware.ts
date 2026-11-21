import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { canonicalRedirectTarget } from "@/lib/canonical-request";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  // Only an explicit x-forwarded-proto of "http" counts. The socket to Next
  // is http behind nginx even when the browser used https, so falling back
  // to request.nextUrl.protocol would redirect every page forever.
  const target = canonicalRedirectTarget({
    host: request.headers.get("host"),
    forwardedHost: request.headers.get("x-forwarded-host"),
    proto: request.headers.get("x-forwarded-proto"),
    pathname: url.pathname,
    search: url.search,
  });

  if (target) {
    const destination = target.startsWith("http") ? target : new URL(target, request.url);
    return NextResponse.redirect(destination, 301);
  }

  if (url.pathname.startsWith("/signup") || url.pathname.startsWith("/forgot-password")) {
    const token = await getToken({ req: request });
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)",
  ],
};

import { NextRequest, NextResponse } from "next/server";

const APEX = "https://creditoracademy.com";

function toAboutUs(request: NextRequest) {
  const destination = new URL("/about-us", APEX);
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 301);
}

export function GET(request: NextRequest) {
  return toAboutUs(request);
}

export function HEAD(request: NextRequest) {
  return toAboutUs(request);
}

import { NextResponse } from "next/server";

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID?.trim() || "UCl_FM9KmhMA-DV6OTgr42Dw";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY?.trim();
  if (!apiKey) {
    console.error("[youtube-stats] YOUTUBE_API_KEY is not set. Refusing to call the YouTube API.");
    return NextResponse.json({ error: "YouTube stats are not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${apiKey}`
    );
    const data = await res.json();
    const stats = data?.items?.[0]?.statistics;
    if (!res.ok || !stats) {
      console.error("[youtube-stats] YouTube API request failed", res.status);
      return NextResponse.json({ error: "Failed to fetch YouTube stats" }, { status: 502 });
    }

    return NextResponse.json({
      viewCount: parseInt(stats.viewCount, 10),
      subscriberCount: parseInt(stats.subscriberCount, 10),
    });
  } catch (error) {
    console.error("[youtube-stats] YouTube API request failed", error);
    return NextResponse.json(
      { error: "Failed to fetch YouTube stats" },
      { status: 500 }
    );
  }
}

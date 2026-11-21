import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import TrackDetailPage from "@/app/components/learning-paths/track-detail";
import CTA from "@/app/components/shared/cta";
import { CourseSchema } from "@/app/components/seo/CourseSchema";



export const metadata: Metadata = pageMetadata("/become-private/book-smart");

export default function Page() {
  return (
    <main>
            <CourseSchema path="/become-private/book-smart" />
      <Herobanner
        heading="Book Smart"
        desc="Live lessons for <span>Become Private</span> — SOV 101, secured party creditor topics, and status-correction study. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
        buttonText="Join Live Lessons"
      />
      <TrackDetailPage courseId="become-private" track="book-smart" />
      <CTA />
    </main>
  );
}

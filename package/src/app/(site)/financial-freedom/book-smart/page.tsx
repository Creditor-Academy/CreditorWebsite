import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import TrackDetailPage from "@/app/components/learning-paths/track-detail";
import CTA from "@/app/components/shared/cta";
import { CourseSchema } from "@/app/components/seo/CourseSchema";



export const metadata: Metadata = pageMetadata("/financial-freedom/book-smart");

export default function Page() {
  return (
    <main>
            <CourseSchema path="/financial-freedom/book-smart" />
      <Herobanner
        heading="Book Smart"
        desc="Live lessons for <span>Financial Freedom</span> — remedy topics, business credit, and PMA credit lessons. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
        buttonText="Join Live Lessons"
      />
      <TrackDetailPage courseId="financial-freedom" track="book-smart" />
      <CTA />
    </main>
  );
}

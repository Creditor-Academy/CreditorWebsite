import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import TrackDetailPage from "@/app/components/learning-paths/track-detail";
import CTA from "@/app/components/shared/cta";
import { CourseSchema } from "@/app/components/seo/CourseSchema";



export const metadata: Metadata = pageMetadata("/operate-private/street-smart");

export default function Page() {
  return (
    <main>
            <CourseSchema path="/operate-private/street-smart" />
      <Herobanner
        heading="Street Smart"
        desc="Recorded lectures for <span>Operate Private</span> — business trusts, PMAs, and real estate topics on your schedule. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
        buttonText="Access Lectures"
      />
      <TrackDetailPage courseId="operate-private" track="street-smart" />
      <CTA />
    </main>
  );
}

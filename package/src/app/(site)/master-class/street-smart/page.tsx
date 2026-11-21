import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import StreetSmartContent from "@/app/components/master-class/street-smart";
import CTA from "@/app/components/shared/cta";
import { CourseSchema } from "@/app/components/seo/CourseSchema";



export const metadata: Metadata = pageMetadata("/master-class/street-smart");

export default function StreetSmartPage() {
  return (
    <main>
            <CourseSchema path="/master-class/street-smart" />
      <Herobanner
        heading="Street Smart"
        desc="Recorded lectures on demand — study at your pace, replay every module, and build <span>practical mastery</span> on your schedule."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
        buttonText="Access Lectures"
      />
      <StreetSmartContent />
      <CTA />
    </main>
  );
}

import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import ModulesHub from "@/app/components/learning-paths/modules-hub";
import { getCoursePath } from "@/app/components/learning-paths/data";
import CTA from "@/app/components/shared/cta";

const course = getCoursePath("financial-freedom");


export const metadata: Metadata = pageMetadata("/financial-freedom");

export default function FinancialFreedomHubPage() {
  return (
    <main>
      <Herobanner
        heading="Financial Freedom"
        desc="Study remedy topics, business credit lessons, and <span>PMA financial concepts</span> — choose live lessons or recorded lectures. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="/masterclass-membership"
        buttonText="Join Membership"
      />
      <ModulesHub course={course} />
      <CTA />
    </main>
  );
}

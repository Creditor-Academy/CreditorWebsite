import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import ModulesHub from "@/app/components/learning-paths/modules-hub";
import { getCoursePath } from "@/app/components/learning-paths/data";
import CTA from "@/app/components/shared/cta";

const course = getCoursePath("operate-private");


export const metadata: Metadata = pageMetadata("/operate-private");

export default function OperatePrivateHubPage() {
  return (
    <main>
      <Herobanner
        heading="Operate Private"
        desc="Study trusts, PMAs, and real estate topics in <span>Operate Private</span> — choose live lessons or recorded lectures. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="/masterclass-membership"
        buttonText="Join Membership"
      />
      <ModulesHub course={course} />
      <CTA />
    </main>
  );
}

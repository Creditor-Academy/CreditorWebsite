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
        desc="Operate Private. This is where you take command of your life. Understand this: ownership means liability. You need to learn how to own nothing, yet control everything. Your houses, your cars, your businesses, your banking, your family—all of it needs to be private."
        buttonPath="/masterclass-membership"
        buttonText="Join Membership"
      />
      <ModulesHub course={course} />
      <CTA />
    </main>
  );
}

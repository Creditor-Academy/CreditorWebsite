import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import ModulesHub from "@/app/components/learning-paths/modules-hub";
import { getCoursePath } from "@/app/components/learning-paths/data";
import CTA from "@/app/components/shared/cta";
import JsonLdScript from "@/app/components/structured-data/JsonLdScript";
import { courseJsonLd } from "@/lib/courseSeo";

const course = getCoursePath("financial-freedom");


export const metadata: Metadata = pageMetadata("/financial-freedom");

export default function FinancialFreedomHubPage() {
  return (
    <main>
      <JsonLdScript data={courseJsonLd({ name: course.title, description: course.description, path: course.hubPath })} />
      <Herobanner
        heading="Financial Freedom"
        desc="Financial Freedom. Here is the truth most people never learn: the rich are all in debt. Debt is equal to money, and the only purpose of money is to get access to credit. And there is an unlimited amount of credit! We teach you how to get access to it—and that is how you become financially free."
        buttonPath="/masterclass-membership"
        buttonText="Join Membership"
      />
      <ModulesHub course={course} />
      <CTA />
    </main>
  );
}

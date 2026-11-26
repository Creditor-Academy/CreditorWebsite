import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { Herobanner } from "@/app/components/shared/hero-banner";
import ModulesHub from "@/app/components/learning-paths/modules-hub";
import { getCoursePath } from "@/app/components/learning-paths/data";
import CTA from "@/app/components/shared/cta";
import JsonLdScript from "@/app/components/structured-data/JsonLdScript";
import { courseJsonLd } from "@/lib/courseSeo";

const course = getCoursePath("become-private");


export const metadata: Metadata = pageMetadata("/become-private");

export default function BecomePrivateHubPage() {
  return (
    <main>
      <JsonLdScript data={courseJsonLd({ name: course.title, description: course.description, path: course.hubPath })} />
      <Herobanner
        heading="Become Private"
        desc="You step out of the public chaos and claim your identity back! Stop operating as a public liability, start standing up for your rights and liberties, and begin your pursuit of happiness. Becoming private is all about exercising your right to be left alone!"
        buttonPath="/masterclass-membership"
        buttonText="Join Membership"
      />
      <ModulesHub course={course} />
      <CTA />
    </main>
  );
}

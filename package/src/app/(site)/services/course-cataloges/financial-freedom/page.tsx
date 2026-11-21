import { Herobanner } from "@/app/components/shared/hero-banner";
import Cards from "@/app/components/private/cards";
import CourseFeatures from "@/app/components/private/course-feature";
import CourseDetail from "@/app/components/private/course-detail";
import Contact from "@/app/components/shared/cta";
import Offer from "@/app/components/become/appointment";
// import Event from "@/app/components/home/event";
import HowItWorks from "@/app/components/private/works";

import WebinarBootcamp from "@/app/components/shared/WebinarBootcamp";

import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { CourseSchema } from "@/app/components/seo/CourseSchema";

export const metadata: Metadata = pageMetadata("/services/course-cataloges/financial-freedom");

export default function FinancialFreedomPage() {
  getAllProjects();
  return (
    <main>
            <CourseSchema path="/services/course-cataloges/financial-freedom" />
      <Herobanner
        heading="Financial Freedom"
        desc="Study <span>Financial Freedom</span> credit and remedy topics. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
      />
      <CourseDetail />
      <WebinarBootcamp
        title="Financial Freedom"
        imageSrc="/images/webinar/financial/financial.webp"
        description="This bootcamp teaches credit, remedy, and asset-organization topics. It does not promise income, funding, or a score."
        features={[
          { title: "Credit Topics", description: "Lessons on how business credit profiles are described.", iconName: "wealth" },
          { title: "Study Topics", description: "Questions the class raises about private financial records.", iconName: "investing" },
          { title: "Legacy Topics", description: "How the lessons describe long-term planning concepts.", iconName: "legacy" },
        ]}
      />
      <CourseFeatures />
      <Cards />
      <HowItWorks />
      <Offer />
      {/* <Event /> */}
      <Contact />
    </main>
  );
}

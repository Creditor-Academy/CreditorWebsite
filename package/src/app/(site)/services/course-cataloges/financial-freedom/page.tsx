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

export const metadata: Metadata = pageMetadata("/services/course-cataloges/financial-freedom");

export default function FinancialFreedomPage() {
  getAllProjects();
  return (
    <main>
      <Herobanner
        heading="Financial Freedom"
        desc="Here is the truth most people never learn: the rich are all in debt. Debt is equal to money, and the only purpose of money is to get access to credit. And there is an unlimited amount of credit! We teach you how to get access to it—and that is how you become financially free."
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

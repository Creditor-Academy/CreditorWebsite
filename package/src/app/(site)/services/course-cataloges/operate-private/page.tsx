import { Herobanner as HeroBanner } from "@/app/components/shared/hero-banner";
import BecomeIntro from "@/app/components/operate/card";
import Intro2 from "@/app/components/operate/intro";
import Appointment from "@/app/components/operate/Appointment";
import Contact from "@/app/components/shared/cta";
// import Event from "@/app/components/home/event";
import HowItWorks from "@/app/components/operate/works";
import Cards from "@/app/components/operate/cards";

import WebinarBootcamp from "@/app/components/shared/WebinarBootcamp";

import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata: Metadata = pageMetadata("/services/course-cataloges/operate-private");

export default function Page() {
  getAllProjects();
  return (
    <main>
      <HeroBanner
        heading="Operate Private"
        desc="Study <span>Operate Private</span> trusts, PMAs, and recordkeeping. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
        buttonPath="https://creditor-academy.lmsathena.com/signup"
      />
      <Intro2 />
      <WebinarBootcamp
        title="Operate Private"
        imageSrc="/images/webinar/operate/becomeoperate.webp"
        description="This bootcamp teaches trust, PMA, and privacy topics. It does not advise avoiding tax or other legal duties."
        features={[
          { title: "Operations Topics", description: "How the lessons describe day-to-day private business records.", iconName: "tactical" },
          { title: "Asset Topics", description: "How the course discusses organizing assets. Results vary.", iconName: "shield" },
          { title: "Banking Topics", description: "How the lessons describe business banking questions.", iconName: "banking" },
        ]}
      />
      <BecomeIntro />
      <Cards />
      <HowItWorks />
      <Appointment />
      {/* <Event /> */}
      <Contact />
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { GrokBotShape } from "../grok-bot-shapes";

interface CourseItem {
  name: string;
  desc: string;
}

interface CourseCardData {
  id: string;
  title: string;
  subtitle: string;
  headerBg: string;
  subtitleColor: string;
  bots: {
    id: string;
    index: number;
  }[];
  courses: CourseItem[];
  learnMoreUrl: string;
}

const COURSE_CARDS: CourseCardData[] = [
  {
    id: "become",
    title: "Become Private",
    subtitle: "Establish your standing and correct your status.",
    headerBg: "linear-gradient(135deg, #0284c7 0%, #026fe2 100%)",
    subtitleColor: "text-blue-100",
    bots: [
      { id: "spc", index: 22 },
      { id: "status-correction", index: 23 },
      { id: "taxes", index: 24 },
      { id: "admin-proc", index: 25 },
    ],
    courses: [
      { name: "Secured Party Creditor", desc: "UCC Article 9 & commercial redemption" },
      { name: "Status Correction", desc: "SOV 101 & state national standing" },
      { name: "Taxes", desc: "Statutory rules & non-resident alien filing" },
      { name: "Administrative Procedure", desc: "Commercial affidavits & notice timeline" },
    ],
    learnMoreUrl: "/services/course-cataloges/become-private",
  },
  {
    id: "operate",
    title: "Operate Private",
    subtitle: "Run your affairs through private structures.",
    headerBg: "#0e223d",
    subtitleColor: "text-slate-300",
    bots: [
      { id: "business-trust", index: 26 },
      { id: "pma", index: 27 },
      { id: "asset-protection", index: 28 },
    ],
    courses: [
      { name: "Business Trust", desc: "Unincorporated trust, EIN & private banking" },
      { name: "Private Membership Association", desc: "PMA bylaws, member agreements & rules" },
      { name: "Asset Protection", desc: "Shielding real estate, wealth & family legacy" },
      { name: "Private Operations Framework", desc: "Daily administration & compliance steps" },
    ],
    learnMoreUrl: "/services/course-cataloges/operate-private",
  },
  {
    id: "freedom-courses",
    title: "Financial Freedom",
    subtitle: "Build and leverage credit the private way.",
    headerBg: "linear-gradient(135deg, #059669 0%, #0d9488 42%, #0284c7 100%)",
    subtitleColor: "text-emerald-100",
    bots: [
      { id: "credit-repair", index: 29 },
      { id: "business-credit", index: 30 },
    ],
    courses: [
      { name: "Credit Repair", desc: "FCRA consumer laws & dispute strategy" },
      { name: "Business Credit", desc: "Tier 1–4 vendor lines with no personal guarantee" },
      { name: "Credit Card Stacking", desc: "0% intro APR capital & high-limit leverage" },
      { name: "Private Capital Mastery", desc: "Cash flow structuring & wealth acceleration" },
    ],
    learnMoreUrl: "/services/course-cataloges/financial-freedom",
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="relative bg-[#f8fafc] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with Refined Weight & Proportions */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#026fe2] bg-blue-50 border border-blue-100 mb-3 shadow-xs">
            Premium Courses
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#102a43] tracking-tight leading-snug mb-2">
            Explore our premium courses.
          </h2>
          <p className="text-slate-500 text-sm sm:text-[15px] font-normal max-w-lg">
            Three pillars. Every bot. One membership.
          </p>
        </div>

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {COURSE_CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="scroll-mt-28 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Header with Consistent Smooth Wave Bottom Curve */}
              <div
                className="relative text-white overflow-hidden"
                style={{ background: card.headerBg }}
              >
                <div className="pt-6 sm:pt-7 px-6 sm:px-7">
                  <h3 className="text-xl sm:text-[23px] font-bold text-white tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className={`text-xs sm:text-[13px] mt-1.5 leading-snug font-normal ${card.subtitleColor}`}>
                    {card.subtitle}
                  </p>

                  {/* Grok Bot Avatars Row */}
                  <div className="flex items-center gap-2.5 sm:gap-3 mt-5 mb-2.5">
                    {card.bots.map((bot) => (
                      <div
                        key={bot.id}
                        className="transition-transform duration-200 hover:scale-110 drop-shadow-md"
                      >
                        <GrokBotShape
                          id={bot.id}
                          index={bot.index}
                          size={38}
                          animated
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smooth Wave Divider between Colored Header and White Body */}
                <div className="w-full overflow-hidden leading-none block -mb-0.5">
                  <svg
                    viewBox="0 0 400 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-6 sm:h-7.5 block"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,10 C120,28 260,28 400,8 L400,30 L0,30 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>

              {/* Card Body (Rich, balanced & informative) */}
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 pt-4 bg-white">
                {/* Course List with Clear Descriptors (Eliminates blank feeling) */}
                <ul className="flex flex-col gap-3.5 sm:gap-4">
                  {card.courses.map((course) => (
                    <li key={course.name} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#026fe2] shrink-0 mt-1.5" />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-semibold text-slate-800 leading-snug">
                          {course.name}
                        </span>
                        <span className="text-[12px] text-slate-500 leading-tight mt-0.5">
                          {course.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons: Learn more & Contact Sales */}
                <div className="flex items-center gap-3 pt-6 mt-auto">
                  <Link
                    href={card.learnMoreUrl}
                    className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-full bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-[0.98]"
                  >
                    Learn more
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 font-bold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
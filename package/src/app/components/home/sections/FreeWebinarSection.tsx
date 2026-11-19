"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles, Video, Users2 } from "lucide-react";

export default function FreeWebinarSection() {
  const faqItems = [
    {
      tag: "No Cost",
      icon: Sparkles,
      question: "Is this really free?",
      answer: "Yes, 100% free with no obligations. Watch the full session without putting down a credit card.",
    },
    {
      tag: "45 Minutes",
      icon: Clock,
      question: "How long is the webinar?",
      answer: "45 minutes packed with actionable insights on business trusts, asset protection, and sovereignty.",
    },
    {
      tag: "On Demand",
      icon: Video,
      question: "Will there be a replay?",
      answer: "Yes, registered members receive instant replay access so you can review anytime at your own pace.",
    },
    {
      tag: "Audience",
      icon: Users2,
      question: "Who is this for?",
      answer: "Business owners, entrepreneurs, families, and individuals looking to operate with privacy and security.",
    },
  ];

  const highlights = [
    "Step outside the public system, as the course teaches it",
    "Limit liability and protect your personal & business assets",
    "Work toward true financial privacy and sovereignty",
  ];

  return (
    <div className="relative w-full">
      {/* Main Free Webinar Section in Clean Light Shade (#f0f7ff / #f8fafc) */}
      <section
        id="webinar"
        className="relative bg-gradient-to-b from-[#f0f7ff] via-[#f5f9ff] to-[#f8fafc] text-slate-800 py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 overflow-hidden"
      >
        {/* Subtle decorative glow accents for modern depth */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Context & Action */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#026fe2] bg-blue-50 border border-blue-200/80 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#026fe2] animate-pulse" />
                Free Webinar • 45 Minutes
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#102a43] tracking-tight leading-[1.15] mb-4">
                Become and Operate Private
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
                Save your seat. Learn the framework we teach so you can step toward life outside the public system, lower everyday risk to what you own, and move toward true financial sovereignty.
              </p>

              {/* Key Bullet Points */}
              <ul className="flex flex-col gap-3.5 w-full mb-7">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm sm:text-[15px] text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-[#026fe2] shadow-2xs">
                      <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 7.5 5.5 10.5 11.5 3.5" />
                      </svg>
                    </span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button & Sub-label */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/webinar"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-[0.98]"
                >
                  Claim Your Free Webinar Seat
                  <ArrowRight size={17} />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pl-1">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Instant replay access</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Balanced Bento FAQ Cards */}
            <div className="lg:col-span-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {faqItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.question}
                      className="bg-white rounded-2xl p-5 sm:p-5.5 shadow-sm border border-slate-200/90 hover:border-blue-200 hover:shadow-md flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[#026fe2] text-[11px] font-bold uppercase tracking-wider border border-blue-100/80">
                            {item.tag}
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#026fe2] flex items-center justify-center">
                            <Icon size={13} />
                          </div>
                        </div>
                        <h3 className="text-[#102a43] text-[15px] font-bold leading-snug mb-1.5">
                          {item.question}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
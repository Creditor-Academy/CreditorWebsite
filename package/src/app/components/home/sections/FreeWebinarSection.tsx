"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function FreeWebinarSection() {
  const pillars = [
    {
      number: "01",
      title: "Become Private",
      desc: "Status correction, identity reclamation & exercising your right to be left alone.",
      icon: ShieldCheck,
      href: "/services/course-cataloges/become-private",
    },
    {
      number: "02",
      title: "Operate Private",
      desc: "Own nothing yet control everything with business trusts, PMAs & private banking.",
      icon: Building2,
      href: "/services/course-cataloges/operate-private",
    },
    {
      number: "03",
      title: "Financial Freedom",
      desc: "Leverage debt like the wealthy, unlock credit access & achieve true sovereignty.",
      icon: TrendingUp,
      href: "/services/course-cataloges/financial-freedom",
    },
  ];

  return (
    <div className="relative w-full">
      {/* 2-Column Section with Elegant Soft Blue Background */}
      <section
        id="webinar"
        className="relative bg-gradient-to-b from-[#f0f7ff] via-[#f5f9ff] to-[#f8fafc] text-slate-800 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 overflow-hidden"
      >
        {/* Subtle decorative glow accents for modern depth */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Column: Heading, Narrative Text & Golden CTA Button */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#026fe2] bg-blue-50 border border-blue-200/80 mb-5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#026fe2] animate-pulse" />
                Free Webinar • 45 Minutes
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#102a43] tracking-tight leading-tight mb-5">
                Become and Operate Private
              </h2>

              {/* Narrative Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
                Most people sleepwalk through life letting someone else dictate their future. It’s time to wake up, raise your standards, and take massive control of your education.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                If you’re ready to see everything we do at <span className="text-slate-900 font-medium">Creditor Academy</span>, this is your moment to join our free webinar.
              </p>

              {/* Golden Website-Style CTA Button & Sub-label */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/webinar"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-200 shadow-md shadow-amber-500/20 active:scale-[0.98]"
                >
                  Register for Free Webinar
                  <ArrowRight size={17} />
                </Link>
                {/* <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pl-1">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Instant replay access included</span>
                </div> */}
              </div>
            </div>

            {/* Right Column: Three Pillars (Shifted from Left to Balance the Section) */}
            <div className="lg:col-span-6 w-full flex flex-col justify-center">
              <div className="bg-white/70 backdrop-blur-xs rounded-3xl p-6 sm:p-7 border border-blue-100/90 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#102a43] mb-4">
                  In this power packed webinar, we are walking you straight through all three pillars of the academy:
                </p>

                <div className="flex flex-col gap-3">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <Link
                        key={pillar.title}
                        href={pillar.href}
                        className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#026fe2] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#026fe2] transition-colors">
                              {pillar.title}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                              Pillar {pillar.number}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-1">
                            {pillar.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >
    </div >
  );
}

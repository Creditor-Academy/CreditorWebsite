"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { GrokBotShape } from "../grok-bot-shapes";

export default function MasterclassSection() {
  const steps = [
    {
      num: "01",
      title: "Business Trust & Bank Account",
      desc: "Formation and paperwork, done right.",
    },
    {
      num: "02",
      title: "Merchant Processing",
      desc: "Collect card payments & invoicing",
    },
    {
      num: "03",
      title: "Business credit",
      desc: "Build your D-U-N-S profile.",
    },
  ];

  const benefits = [
    "Live classes, Monday to Friday",
    "Q&A with PaulMichael",
    "Step-by-step SOP templates",
    "Private community",
    "Grok Bot guide, 24/7",
    "Member discounts on advanced courses",
  ];

  const weekdays = ["M", "T", "W", "T", "F"];

  return (
    <div id="masterclass" className="scroll-mt-20 relative w-full overflow-hidden bg-[#f8fafc]">
      {/* Top Wave Transition from Light Slate into Dark Navy */}
      <div className="w-full overflow-hidden leading-none bg-[#f8fafc]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14 block -mb-0.5"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,55 1080,55 1440,0 L1440,60 L0,60 Z"
            fill="#08172c"
          />
        </svg>
      </div>

      {/* Main Masterclass Section: 2-Column SaaS Layout */}
      <section
        className="relative text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08172c]"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Grok Bot at top, Badges, Headline, Weekdays & 3 Step Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Top-Left: Masterclass Grok Bot Component */}
                <div className="inline-flex items-center gap-3.5 sm:gap-4 mb-6">
                  <div className="shrink-0 flex items-center justify-center">
                    <GrokBotShape id="masterclass" size={54} animated />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg leading-tight">
                      Masterclass Grok Bot
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-tight mt-1 font-normal">
                      Your AI guide. Ask anything, 24/7.
                    </p>
                  </div>
                </div>

                {/* Badges: MASTERCLASS | LIVE DAILY */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/15 border border-sky-400/30">
                    Masterclass
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                    Live Daily
                  </span>
                </div>

                {/* Headline: Clean Manrope font-bold matching other sections */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14] mb-4">
                  Three steps to{" "}
                  <span className="text-[#38bdf8]">Operate<br className="hidden sm:block" />Private.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-lg">
                  Daily live classes, ready-made templates, and an AI guide that answers any time.
                </p>

                {/* Weekday Badges: M T W T F Live, every weekday */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-1.5">
                    {weekdays.map((day, idx) => (
                      <span
                        key={idx}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#026fe2] text-white font-bold text-xs sm:text-[13px] flex items-center justify-center shadow-xs"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm font-medium">
                    Live, every weekday
                  </span>
                </div>

                {/* 3 Step Cards: 01 Trust, 02 Private identity, 03 Business credit */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="bg-[#0b1f36] border border-sky-500/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-start transition-all duration-200 hover:border-sky-400/40 hover:-translate-y-0.5 shadow-sm"
                    >
                      <span className="text-sky-400 text-xs font-bold mb-1.5 block">
                        {step.num}
                      </span>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Benefits Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0b1f36] border border-sky-500/20 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between h-full">
                <div>
                  {/* Top Header: Member rate | LOCKED IN */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-slate-300 text-xs font-medium">
                      Member rate
                    </span>
                    <span className="border border-sky-400/40 text-sky-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Locked In
                    </span>
                  </div>

                  {/* Big Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-none">
                      $69
                    </span>
                    <span className="text-sm font-semibold text-slate-300 ml-1">
                      /month
                    </span>
                  </div>

                  {/* Crossed-out Price & Savings Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs text-slate-400 line-through">
                      $147
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                      Save $78 every month
                    </span>
                  </div>

                  {/* Checklist of 6 Benefits */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200">
                        <Check size={14} className="text-[#38bdf8] shrink-0" strokeWidth={3} />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Join Masterclass CTA Button & Subtext */}
                <div>
                  <Link
                    href="/masterclass-membership"
                    className="w-full py-3.5 rounded-2xl bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-[0.98]"
                  >
                    Join Masterclass
                    <ArrowRight size={17} />
                  </Link>
                  {/* <p className="text-[11.5px] text-slate-400 text-center mt-3 font-normal">
                    New members pay $147. Join now and keep $69.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Wave Transition into Light Slate of CoursesSection */}
      <div className="w-full overflow-hidden leading-none bg-[#08172c]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14 block -mb-0.5"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,55 1080,55 1440,0 L1440,60 L0,60 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </div>
  );
}

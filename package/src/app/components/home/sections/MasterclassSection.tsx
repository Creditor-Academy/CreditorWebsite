"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrokBotShape } from "../grok-bot-shapes";

export default function MasterclassSection() {
  const comparisonFeatures = [
    { name: "Ask questions any time", free: true, member: true },
    { name: "See the 3-step plan", free: true, member: true },
    { name: "Step-by-step help with letters", free: false, member: true },
    { name: "Weekly private class passes", free: false, member: true },
    { name: "Live classes Mon–Fri @ 2 PM Pacific", free: false, member: true },
  ];

  return (
    <div id="masterclass" className="scroll-mt-20 relative w-full overflow-hidden bg-white">
      {/* ========================================================= */}
      {/* PART 1: MASTERCLASS GROK BOT SECTION                      */}
      {/* ========================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#026fe2] bg-blue-100/70 border border-blue-200/80 mb-6">
            MASTERCLASS MEMBERSHIP
          </div>

          {/* Clean Masterclass Bot Logo */}
          <div className="mb-6 flex items-center justify-center">
            <div className="w-[100px] h-[100px] flex items-center justify-center drop-shadow-[0_12px_24px_rgba(234,64,69,0.22)]">
              <GrokBotShape id="masterclass" size={100} animated={false} />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#102a43] tracking-tight leading-[1.15] mb-3">
            Have questions? <br className="hidden sm:inline" />
            <span className="text-[#026fe2]">Ask our Masterclass Bot.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            It answers your questions any time and shows you how to Operate Private, step by step.
          </p>

          {/* Red CTA Button */}
          <div className="w-full max-w-md mx-auto mb-4">
            <Link
              href="/masterclass-membership"
              className="flex flex-col items-center justify-center w-full py-4 px-8 rounded-full bg-[#EA4045] hover:bg-[#d8353a] text-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] text-center"
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                Talk to the Masterclass Bot
              </span>
              <span className="text-xs sm:text-sm text-white/90 font-medium mt-0.5">
                Free &middot; No card needed.
              </span>
            </Link>
          </div>

          {/* Secondary Link */}
          <div className="text-sm sm:text-base text-slate-600 font-medium mb-10">
            Ready now?{" "}
            <Link
              href="/masterclass-membership"
              className="text-[#026fe2] hover:text-[#025ec0] font-semibold underline underline-offset-4 decoration-blue-300 hover:decoration-[#026fe2] transition-colors"
            >
              Join for $69/month &rsaquo;
            </Link>
          </div>

          {/* 3-Step Membership Journey Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl py-4 px-4 shadow-xs flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-lg font-bold text-[#102a43] leading-none mb-1.5">
                1
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Ask the bot for free
              </span>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl py-4 px-4 shadow-xs flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-lg font-bold text-[#102a43] leading-none mb-1.5">
                2
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Join for $69/a month
              </span>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl py-4 px-4 shadow-xs flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-lg font-bold text-[#102a43] leading-none mb-1.5">
                3
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Unlock member help
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PART 2: THREE COURSE CARDS SECTION (Navy Gradient)        */}
      {/* ========================================================= */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white text-center"
        style={{
          background: "linear-gradient(160deg, #0a1e3f 0%, #102a43 45%, #14234b 100%)",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="text-xs sm:text-sm md:text-base font-bold text-[#f2b632] tracking-[4px] uppercase mb-3">
            CREDITOR ACADEMY MASTERCLASS
          </div>

          {/* Serif Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] mb-2"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The Highest Form of Sovereignty Is Independence.
          </h2>

          {/* Subtitle */}
          <div
            className="text-xl sm:text-2xl md:text-3xl italic text-[#f2b632] mb-12 sm:mb-14"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your Three-Step Plan
          </div>

          {/* 3 Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-14 max-w-5xl mx-auto">
            {/* Card 1: Step 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)] border-t-[5px] border-[#f2b632] flex flex-col group transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src="/images/masterclass/step1.jpg"
                  alt="Step 1 - Private Business Foundation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="py-4 sm:py-5 px-6 flex flex-col items-center justify-center bg-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#486581] mb-1">
                  Normally
                </span>
                <div className="relative inline-block text-4xl sm:text-5xl font-black text-[#00C972] leading-none tracking-tight">
                  $1,497
                  <span
                    className="absolute left-[-8%] right-[-8%] top-1/2 -translate-y-1/2 h-[3.5px] bg-[#e53935] -rotate-[14deg] rounded-full pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Step 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)] border-t-[5px] border-[#f2b632] flex flex-col group transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src="/images/masterclass/step2.jpg"
                  alt="Step 2 - The Merchant Setup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="py-4 sm:py-5 px-6 flex flex-col items-center justify-center bg-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#486581] mb-1">
                  Normally
                </span>
                <div className="relative inline-block text-4xl sm:text-5xl font-black text-[#00C972] leading-none tracking-tight">
                  $997
                  <span
                    className="absolute left-[-8%] right-[-8%] top-1/2 -translate-y-1/2 h-[3.5px] bg-[#e53935] -rotate-[14deg] rounded-full pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Step 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)] border-t-[5px] border-[#f2b632] flex flex-col group transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src="/images/masterclass/step3.jpg"
                  alt="Step 3 - Business Credit Launchpad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="py-4 sm:py-5 px-6 flex flex-col items-center justify-center bg-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#486581] mb-1">
                  Normally
                </span>
                <div className="relative inline-block text-4xl sm:text-5xl font-black text-[#00C972] leading-none tracking-tight">
                  $797
                  <span
                    className="absolute left-[-8%] right-[-8%] top-1/2 -translate-y-1/2 h-[3.5px] bg-[#e53935] -rotate-[14deg] rounded-full pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary & Main CTA */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="text-xl sm:text-2xl md:text-[26px] font-semibold text-white mb-2">
              All 3 bought separately come to{" "}
              <span className="relative inline-block text-[#00C972] font-black mx-1">
                $3,291
                <span
                  className="absolute left-[-10%] right-[-10%] top-1/2 -translate-y-1/2 h-[3px] bg-[#e53935] -rotate-[14deg] rounded-full pointer-events-none"
                  aria-hidden="true"
                />
              </span>
              .
            </div>

            <div className="text-lg sm:text-xl md:text-2xl text-[#cbd5e1] mb-8 font-normal">
              Get all 3 plus live classes for
            </div>

            <Link
              href="/masterclass-membership"
              className="inline-flex items-center justify-center bg-[#f2b632] hover:bg-[#e5a822] text-[#0f1b3d] font-black text-xl sm:text-2xl md:text-[26px] px-8 sm:px-14 py-4 sm:py-5 rounded-full shadow-[0_8px_24px_rgba(242,182,50,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center leading-tight"
            >
              $69/month &nbsp;&middot;&nbsp; Join the Masterclass
            </Link>

            <div className="text-xs sm:text-sm md:text-base text-[#cbd5e1] mt-6 max-w-2xl leading-relaxed text-center font-normal">
              Live classes Monday–Friday at 2 PM Pacific. $69/month is locked for members who join by Dec 25, 2026 ($147/month after).
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PART 3: FREE BOT VS. MEMBER COMPARISON SECTION            */}
      {/* ========================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6 sm:mb-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#102a43] tracking-tight">
              Free Bot <span className="font-normal text-slate-400 text-xl sm:text-2xl">vs.</span> Member
            </h3>
          </div>

          {/* Elevated Comparison Card with Warm Gold Theme & Soft Slate */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.07)] overflow-hidden">
            {/* Header: Exact 52% | 20% | 28% Column Allocation */}
            <div className="flex items-stretch h-14 select-none border-b border-slate-200/80">
              {/* Feature Space in Clean Off-White */}
              <div className="w-[52%] bg-slate-50/90 flex items-center px-6 sm:px-8 border-r border-slate-200/70">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  Plan Details
                </span>
              </div>

              {/* Free Header in Soft Light Slate */}
              <div className="w-[20%] bg-slate-100/90 flex items-center justify-center border-r border-slate-200/70">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                  Free
                </span>
              </div>

              {/* Member Header in Masterclass Gold */}
              <div className="w-[28%] bg-[#f2b632] flex items-center justify-center px-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f1b3d] text-center">
                  Member $69/mo
                </span>
              </div>
            </div>

            {/* Feature Rows: Matching 52% | 20% | 28% Column Allocation */}
            <div className="divide-y divide-slate-100">
              {comparisonFeatures.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center hover:bg-slate-50/70 transition-colors"
                >
                  {/* Feature Title (52%) */}
                  <div className="w-[52%] py-3.5 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm md:text-[15px] font-medium text-slate-800 leading-snug border-r border-slate-100">
                    {row.name}
                  </div>

                  {/* Free Status (20% - Centered under FREE) */}
                  <div className="w-[20%] py-3.5 sm:py-4 flex items-center justify-center text-center border-r border-slate-100">
                    {row.free ? (
                      <svg
                        className="w-5 h-5 text-[#00C972]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className="text-slate-300 font-semibold text-lg select-none leading-none">
                        &mdash;
                      </span>
                    )}
                  </div>

                  {/* Member Status (28% - Centered under MEMBER, warm gold tint) */}
                  <div className="w-[28%] py-3.5 sm:py-4 flex items-center justify-center text-center bg-amber-50/20">
                    {row.member ? (
                      <svg
                        className="w-5 h-5 text-[#00C972]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className="text-slate-300 font-semibold text-lg select-none leading-none">
                        &mdash;
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* In-Table Action Footer to Complete the Card */}
            <div className="flex items-center py-3.5 px-6 sm:px-8 bg-slate-50/80 border-t border-slate-200/80">
              <div className="w-[52%] text-xs text-slate-500 font-medium hidden sm:block">
                Start free with AI guidance or join daily live classes.
              </div>
              <div className="w-full sm:w-[48%] flex items-center justify-end">
                <Link
                  href="/masterclass-membership"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-[#f2b632] hover:bg-[#e5a822] text-[#0f1b3d] font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
                >
                  Join for $69/month &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Legal / Bot Footnote */}
          <p className="text-center text-xs sm:text-sm text-slate-500 mt-4 italic font-normal">
            The bot is for education only. You write and send your own letters.
          </p>
        </div>
      </section>
    </div>
  );
}

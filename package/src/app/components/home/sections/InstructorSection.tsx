"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Play } from "lucide-react";

export default function InstructorSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-20">
        {/* Open Instructor Showcase (No outer card container) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Modern Square Portrait Frame with Offset Plate */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Subtle offset backdrop accent card */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl bg-gradient-to-br from-[#026fe2]/15 via-blue-100/50 to-slate-200/40 -z-10" />

              {/* Main Photo Card - clean square with soft rounded corners */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_20px_40px_rgba(15,27,61,0.08)]">
                <Image
                  src="/images/paul/paulmichael.webp"
                  alt="PaulMichael Rowland - Founder of Creditor Academy"
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Floating Bottom Status Pill */}
              {/* <div className="absolute -bottom-4 left-6 right-6 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl py-2.5 px-4 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Live Instructor
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#026fe2] uppercase tracking-wider">
                  Mon – Fri
                </span>
              </div> */}
            </div>
          </div>

          {/* Right Column: Instructor Bio & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-4 lg:pt-0">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#026fe2] bg-[#e6f1fc] mb-3.5">
              Meet your instructor
            </span>

            <div className="flex items-center gap-2.5 mb-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102a43] tracking-tight leading-tight">
                PaulMichael Rowland
              </h2>
              <CheckCircle2 size={24} className="text-[#026fe2] shrink-0" />
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[#026fe2] mb-5">
              Founder of Creditor Academy
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              PaulMichael teaches private asset protection, business setup, and clear money plans. He takes hard, behind-the-scenes ideas and turns them into steps you can follow. His goal is to help everyday students untangle the hard parts and take back control of what they are building. The Creditor Academy Grok Bots use that same course material, in plain words, so you can learn between classes too.
            </p>

            {/* Credibility Key Highlights */}
            {/* <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Private Education Association Specialist",
                "Daily Interactive Q&A Classes",
                "Grok Bot Curriculum Creator",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-[13px] font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#026fe2]" />
                  {badge}
                </span>
              ))}
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/founder"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-slate-700 text-[#102a43] hover:bg-[#102a43] hover:text-white font-semibold text-sm transition-all duration-200 shadow-xs"
              >
                About PaulMichael
              </Link>
              <Link
                href="/webinar"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#026fe2] hover:bg-[#025ec0] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/15"
              >
                <Play size={14} className="fill-white" />
                Watch Free Webinar
              </Link>
            </div>
          </div>
        </div>

        {/* Featured YouTube Live Broadcast */}
        <div className="pt-6 border-t border-slate-100">
          <div className="bg-[#f0f7ff] border border-blue-100 rounded-3xl p-6 sm:p-7 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-rose-600 bg-white border border-rose-200/80">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                  Live Broadcast
                </span>
                <span className="text-xs text-slate-500 font-medium">Monday – Friday</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#102a43] tracking-tight mb-2">
                Today&apos;s Featured YouTube Live
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Join our instructors in real time for live training, community Q&amp;A, and deep dives into operating in the private.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 shrink-0">
              <a
                href="https://youtube.com/@creditoracademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

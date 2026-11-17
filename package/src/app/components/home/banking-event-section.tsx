"use client";

import React from "react";
import Link from "next/link";
import { Landmark, Check, ExternalLink, PlayCircle, ShieldCheck, Sparkles, TrendingUp, HelpCircle } from "lucide-react";

export default function BankingEventSection() {
  const tags = [
    { title: "Private Banking Secrets", icon: Landmark, desc: "Direct mechanisms of non-statutory private banking accounts." },
    { title: "Asset Protection", icon: ShieldCheck, desc: "Legal insulation through pure private trust indentures." },
    { title: "Wealth Building", icon: TrendingUp, desc: "Generational capital accumulation outside public jurisdiction." },
    { title: "Expert Guidance", icon: HelpCircle, desc: "Step-by-step counsel from experienced sovereign educators." },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] border border-[#026fe2]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={15} />
            Exclusive Orientation
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Exclusive Private Banking Event
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-[1.65] font-normal">
            Join our special Private Banking event and take control of your financial future.
          </p>
        </div>

        {/* Four Clean Structured Tag Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {tags.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-[#026fe2]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center mb-4 border border-blue-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#102a43] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2e8f0] flex items-center gap-1.5 text-[11px] font-semibold text-[#026fe2]">
                  <Check size={13} strokeWidth={2.8} />
                  <span>Verified Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@creditoracademy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-8 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors shadow-sm"
          >
            <span>Watch on YouTube</span>
            <ExternalLink size={15} />
          </a>

          <Link
            href="/webinar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] border-2 border-[#026fe2] text-[#026fe2] font-bold rounded-full px-8 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors"
          >
            <PlayCircle size={18} />
            <span>Watch the Free Recorded Webinar</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

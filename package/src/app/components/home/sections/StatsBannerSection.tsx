"use client";

import React from "react";

const STATS_DATA = [
  {
    value: "10",
    label: "Grok Bots across every course path",
  },
  {
    value: "Mon–Fri",
    label: "Live classes with instructors",
  },
  {
    value: "Lifetime",
    label: "Access to recorded lessons on Athena LMS",
  },
  {
    value: "45 min",
    label: "Free webinar to start with",
  },
];

export default function StatsBannerSection() {
  return (
    <div className="relative z-30 -mt-10 sm:-mt-12 -mb-10 sm:-mb-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
      {/* Sleek, refined stats strip bridging Hero and Grok Bots Section */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(15,27,61,0.08)] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STATS_DATA.map((item, index) => (
          <div
            key={item.label}
            className={`px-5 py-4 sm:px-6 sm:py-5 lg:py-5.5 flex flex-col justify-center transition-colors duration-200 hover:bg-slate-50/80 ${
              index !== 0 ? "lg:border-l border-slate-200/80" : ""
            } ${
              index % 2 !== 0 ? "sm:border-l sm:border-slate-200/80 lg:border-l" : ""
            } ${
              index >= 2 ? "border-t sm:border-t-0 border-slate-200/80" : ""
            }`}
          >
            <b className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#102a43] tracking-tight leading-tight mb-1 tabular-nums">
              {item.value}
            </b>
            <span className="text-slate-500 text-xs sm:text-[13px] leading-snug font-normal">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

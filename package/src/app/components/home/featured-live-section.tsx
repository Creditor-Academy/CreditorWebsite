"use client";

import React from "react";
import { Radio, ExternalLink, Play, Clock, Users, Shield } from "lucide-react";

export default function FeaturedLiveSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <Radio size={16} />
              <span>YouTube Live • Today at 2:00 PM PST</span>
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
              Today&apos;s Featured YouTube Live
            </h2>

            {/* Description */}
            <p className="text-[#475569] text-base sm:text-lg leading-[1.65] font-normal max-w-[65ch] mx-auto">
              Join our interactive live broadcast with founder PaulMichael Rowland. Learn direct sovereign strategies, participate in open Q&amp;A, and break down complex asset protection workflows in real time.
            </p>

            {/* Features Row */}
            <div className="pt-2 pb-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-[#475569]">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0]">
                <Clock size={15} className="text-[#026fe2]" />
                <span>Today at 2:00 PM PST</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0]">
                <Users size={15} className="text-[#026fe2]" />
                <span>Interactive Live Q&amp;A</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0]">
                <Shield size={15} className="text-[#026fe2]" />
                <span>Private Asset Frameworks</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 flex justify-center">
              <a
                href="https://www.youtube.com/@creditoracademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-8 py-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors shadow-sm"
              >
                <Play size={18} className="fill-current" />
                <span>Watch on YouTube</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

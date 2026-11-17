"use client";

import React from "react";
import Image from "next/image";
import { Award, Shield, CheckCircle2 } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            <Award size={15} />
            Meet Your Instructor
          </span>
        </div>

        {/* Card Frame */}
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Instructor Portrait */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[#026fe2] to-[#38bdf8] shadow-lg">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 border-4 border-white">
                  <Image
                    src="https://res.cloudinary.com/jup2hjfk/image/upload/v1785733640/Paul_o8ocl3.avif"
                    alt="PaulMichael Rowland"
                    fill
                    sizes="(max-width: 640px) 192px, 224px"
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8fafc] border border-[#e2e8f0] text-xs font-semibold text-[#102a43]">
                <Shield size={13} className="text-[#026fe2]" />
                Creditor Academy Founder
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102a43] tracking-tight leading-tight">
                  PaulMichael Rowland
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#026fe2] mt-1">
                  Founder of Creditor Academy
                </p>
              </div>

              {/* Approved Paragraph */}
              <p className="text-[#475569] text-base leading-[1.65] font-normal max-w-[65ch]">
                He specializes in private asset protection, complex business structuring, and bulletproof financial blueprints. By packaging raw institutional mechanics into highly actionable frameworks, Paul helps everyday students untangle complexity to establish unshakeable wealth control.
              </p>

              <div className="pt-3 border-t border-[#e2e8f0] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#475569]">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Unincorporated Business Trusts</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Sovereign Standing &amp; PMAs</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Private Asset Protection</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 size={15} className="text-[#026fe2] shrink-0" />
                  <span>Elite Commercial Business Credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

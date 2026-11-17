"use client";

import React from "react";
import { MessageSquareQuote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Olivia",
      role: "Student",
      quote:
        "Creditor Academy helped me understand credit scores and save thousands. The learning experience was simple yet powerful.",
    },
    {
      name: "Henry",
      role: "Entrepreneur",
      quote:
        "The practical courses transformed how I manage my business credit. Highly recommend for anyone serious about finance.",
    },
    {
      name: "Charlotte",
      role: "Working Professional",
      quote:
        "I now feel confident managing loans and personal finance. The content is practical and easy to follow.",
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            <MessageSquareQuote size={15} />
            Member Experiences
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            What Our Members Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Authentic feedback from learners applying Creditor Academy principles.
          </p>
        </div>

        {/* Three Verbatim Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-[#026fe2]/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center mb-5">
                  <MessageSquareQuote size={20} />
                </div>
                <p className="text-[#475569] text-base leading-[1.65] font-normal italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#102a43]">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#64748b] font-medium">
                    {t.role}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#026fe2]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

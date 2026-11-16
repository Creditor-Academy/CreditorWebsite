"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between the Free Webinar, individual courses, and Membership?",
      a: "The Free Webinar is a 45-minute on-demand foundation class that introduces core concepts with zero commitment. Individual courses provide targeted deep-dives into specific subjects. The Masterclass Membership provides all-inclusive access to all 3 core tracks, weekly live interactive classes, direct instructor Q&A, verified legal templates, and our private PMA community.",
    },
    {
      q: "How do I access my courses after enrolling?",
      a: "All enrolled students receive instant login credentials to their dedicated student portal. You can immediately access your video curriculum, module slide decks, and document templates anytime on mobile, tablet, or desktop.",
    },
    {
      q: "Do I need previous legal or financial experience to participate?",
      a: "No. Our curriculum is specifically organized into structured, step-by-step video lessons and practical workshops so everyday entrepreneurs, business owners, and beginners can follow along without any prior legal or financial background.",
    },
    {
      q: "Does this training cover personal status and business operations?",
      a: "Yes. Our three tracks cover the full spectrum: 'Become Private' addresses personal standing and status correction; 'Operate Private' covers Unincorporated Business Trusts and PMAs; and 'Financial Freedom' guides both personal credit restoration and building $200k+ in business credit.",
    },
    {
      q: "What is the cancellation or subscription policy for the membership?",
      a: "The Masterclass Membership is completely flexible with pay-as-you-go billing. You can cancel your subscription anytime with a single click inside your account portal without penalties or contracts.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Context, Big Narrative & Support Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#026fe2] mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102a43] tracking-tight leading-tight mb-4">
              Clear answers to common questions.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Everything you need to know about our webinar, courses, membership access, and learning format.
            </p>

            {/* Support Help Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center">
                  <MessageCircle size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#102a43]">
                    Have a specific question?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Our team is here to assist you.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Not sure which curriculum or track is right for your goals? Reach out to our admissions team directly.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#026fe2] hover:text-[#025ec0] transition-colors group"
              >
                <span>Contact Admissions</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Accordion Items */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#026fe2]/40 shadow-md shadow-blue-500/5 ring-1 ring-[#026fe2]/20"
                      : "bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                  >
                    <span
                      className={`font-bold text-base sm:text-lg transition-colors ${
                        isOpen ? "text-[#026fe2]" : "text-[#102a43]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-blue-50 text-[#026fe2] rotate-180"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <ChevronDown size={16} strokeWidth={2.2} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100/80">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* USEFUL RESOURCES - High-End Horizontal Editorial Showcase (No Side-by-Side Boxes) */}
        <div className="pt-16 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#026fe2] mb-2.5">
              LEARNING MATERIALS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102a43] tracking-tight mb-2">
              Useful resources. Practical next steps.
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our published sovereign field manuals and practical self-audits.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* 1. Featured eBook Showcase (Wide Horizontal Feature with 3D Books) */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-8 sm:p-10 lg:p-12 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left (7 cols): Content & Bullet Perks */}
                <div className="lg:col-span-7">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#102a43] bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-3.5">
                    Sovereign Publications
                  </span>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#102a43] mb-3 tracking-tight">
                    eBook & Field Manuals Library
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Explore comprehensive published field manuals on private status correction, business trust indenture drafting, and Private Membership Association bylaws.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#026fe2] shrink-0" />
                      <span>Verified trust indentures & sovereign administrative templates</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#026fe2] shrink-0" />
                      <span>Case law precedents, filing protocols & lawful standing frameworks</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#026fe2] shrink-0" />
                      <span>Instant digital access on mobile, tablet, and desktop</span>
                    </div>
                  </div>

                  <Link
                    href="/ebooks"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#102a43] hover:bg-[#026fe2] text-white text-sm font-bold shadow-md shadow-slate-900/10 transition-all duration-200"
                  >
                    <span>Explore eBooks & Field Manuals</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Right (5 cols): Generous 3D Books Showcase */}
                <div className="lg:col-span-5 flex items-center justify-center py-4 lg:py-0">
                  <div className="relative flex items-center justify-center">
                    
                    {/* Background glow behind books */}
                    <div className="absolute w-48 h-48 bg-blue-100 rounded-full blur-2xl pointer-events-none -z-10" />

                    {/* Book 1 */}
                    <div className="relative w-32 h-44 sm:w-36 sm:h-52 rounded-xl overflow-hidden shadow-2xl -rotate-6 transition-all duration-300 group-hover:-rotate-12 group-hover:-translate-x-2 shrink-0 border border-slate-200/60">
                      <Image
                        src="/images/books/king_of_the_case_book_cover_1782105815041_0gufy68q3rbr.png"
                        alt="King of the Case Book Cover"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 128px, 144px"
                      />
                    </div>

                    {/* Book 2 (Overlapping) */}
                    <div className="relative w-32 h-44 sm:w-36 sm:h-52 rounded-xl overflow-hidden shadow-2xl rotate-6 -ml-8 transition-all duration-300 group-hover:rotate-12 group-hover:translate-x-2 shrink-0 border border-slate-200/60">
                      <Image
                        src="/images/books/black_and_gold_financial_ebook_cover_1777024294338_cwvol7dk0z9.png"
                        alt="Financial Edition Book Cover"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 128px, 144px"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* 2. Business Credit Checklist (Companion Horizontal Action Strip) */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 border border-blue-100/90 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:border-blue-200 transition-all">
              <div className="flex items-start sm:items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center shrink-0 border border-blue-200/80">
                  <FileCheck size={22} strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#026fe2] bg-blue-50 px-2 py-0.5 rounded">
                      Interactive Tool
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Free Self-Audit</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#102a43] mb-0.5">
                    Business Credit Readiness Checklist
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Audit your entity structuring, commercial bureau registrations, and tier qualifications before applying.
                  </p>
                </div>
              </div>

              <Link
                href="/documentation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#026fe2] hover:bg-[#025ec0] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all shrink-0"
              >
                <span>Read Free Guide</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

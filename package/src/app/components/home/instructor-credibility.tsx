import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstructorCredibility() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Clean Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[1024/972] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/90 border border-slate-200/80 bg-white">
              <Image
                src="/images/home/paulmichael-instructor.webp"
                alt="PaulMichael Rowland"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Focused, Short & High-Impact (Dedicated to Founder PaulMichael) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-2">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#026fe2] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-5 h-0.5 bg-[#026fe2] rounded-full" />
              <span>MEET YOUR INSTRUCTOR</span>
            </div>
            
            {/* Instructor Name */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102a43] tracking-tight leading-[1.08] mb-2.5">
              PaulMichael Rowland
            </h2>

            {/* Founder Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-3">
              Founder &amp; Lead Educator · Creditor Academy
            </p>

            {/* Short Focused Bio */}
            <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed font-normal mb-6 max-w-xl">
              Specializing in private business trusts, PMA structures, and sovereign wealth frameworks to help you protect assets and operate privately.
            </p>

            {/* Clean Typographic Stats Strip (2 Founder Stats) */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 py-5 border-y border-slate-200/90 my-2 w-full max-w-md">
              
              {/* Stat 1 */}
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#102a43] tracking-tight">
                  10+<span className="text-[#026fe2]">Yrs</span>
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  Private Wealth
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Trust &amp; Status Law
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-l border-slate-200 pl-6 sm:pl-8">
                <div className="text-2xl sm:text-3xl font-black text-[#102a43] tracking-tight">
                  1,000<span className="text-[#026fe2]">+</span>
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  Active Alumni
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Students &amp; Graduates
                </div>
              </div>

            </div>

            {/* Single Action Button (Only Meet PaulMichael) */}
            <div className="mt-6">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#102a43] hover:bg-[#026fe2] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] group"
              >
                <span>Meet PaulMichael</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

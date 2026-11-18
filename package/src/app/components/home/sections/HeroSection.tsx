"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    const params = new URLSearchParams({
      first_name: firstName.trim(),
      email: email.trim(),
      mode: "recording",
    });
    router.push(`/webinar?${params.toString()}`);
  };

  return (
    <section
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white text-slate-900"
      id="top"
    >
      {/* Background Accent with Lifestyle photo & Sunset Skyline */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/jup2hjfk/image/upload/v1784883256/lifestylebg_l9rhch.png"
          alt="Lifestyle Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-55"
        />
        {/* Soft luminous transition to clean light background for hero content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/85 to-white" />

        {/* Dark Top Gradient on top of the overlay to make header logo & white text sharply visible */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-[#071329]/95 via-[#071329]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-2">
            <p className="text-xs sm:text-[13px] font-bold text-[#026fe2] uppercase tracking-[0.18em] mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              PRACTICAL BUSINESS &amp; FINANCIAL EDUCATION
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] font-bold tracking-tight text-[#102a43] leading-[1.08] mb-6">
              <span className="block">Business Trusts.</span>
              <span className="block">Asset Protection.</span>
              <span className="block">Business Credit.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 max-w-xl font-normal leading-relaxed mb-8">
              Understand the concepts. Compare your options.
              <br className="hidden sm:inline" /> Choose your next step with a Grok Bot by your side.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/services/course-cataloges"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-slate-700/80 text-slate-800 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                Explore Courses
              </Link>
              <a
                href="#bots"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-[#026fe2] text-white font-semibold text-sm hover:bg-[#025ec0] transition-all duration-200 shadow-md"
              >
                Meet Your Grok Bots
              </a>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
              Clear curriculum. Thoughtful guidance. Education first.
            </p>
          </div>

          {/* RIGHT COLUMN: Free class card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start w-full lg:pl-2">
            <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl shadow-slate-300/40 border border-slate-200/90 overflow-hidden">
              <div className="bg-[#102a43] px-5 py-3.5 flex items-center gap-3 text-white">
                <div className="w-7 h-7 rounded-full bg-[#026fe2] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Play size={13} className="fill-white translate-x-0.5 text-white" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-100">
                  FREE · 45-MINUTE RECORDED CLASS
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h2 className="text-xl sm:text-[22px] font-bold text-[#102a43] mb-1 tracking-tight">
                  Start with a free class
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-normal">
                  Get an introduction before choosing a learning path.
                </p>

                <form onSubmit={handleHeroSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="hero-first-name"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      First name
                    </label>
                    <input
                      id="hero-first-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/80 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#026fe2]/30 focus:border-[#026fe2] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Email address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/80 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#026fe2]/30 focus:border-[#026fe2] transition-all bg-white"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-4 rounded-xl bg-[#026fe2] hover:bg-[#025ec0] text-white font-semibold text-sm transition-colors shadow-sm active:scale-[0.99] cursor-pointer"
                    >
                      {loading ? "Preparing Access..." : "Watch Free Training"}
                    </button>
                  </div>

                  <div className="pt-0.5 text-center">
                    <p className="text-xs text-slate-500">
                      No phone number needed to start.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

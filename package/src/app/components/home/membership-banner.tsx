import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export default function MembershipBanner() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#081e36] via-[#0c2b4d] to-[#071a2e] text-white overflow-hidden shadow-2xl">
      
      {/* Top Luminous Highlight Border Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-80"
      />
      {/* Bottom Subtle Divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px bg-white/10"
      />

      {/* Ambient Radial Spotlight Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(2,111,226,0.28),transparent_70%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent High-Impact Horizontal Masterclass Feature */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Glowing Icon Anchor + Prominent Editorial Typography */}
          <div className="flex items-start sm:items-center gap-5 sm:gap-6">
            
            {/* High-Impact Community Icon Container with Cyan Glow */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#026fe2]/30 via-sky-500/20 to-transparent border border-[#38bdf8]/40 shadow-lg shadow-[#026fe2]/25 flex items-center justify-center text-[#38bdf8] shrink-0">
              <Users size={28} strokeWidth={2} />
            </div>

            {/* Vertical Hairline Divider */}
            <div className="hidden sm:block w-px h-14 bg-white/20 shrink-0" />

            {/* Main Feature Content */}
            <div className="flex flex-col text-left">
              {/* Category Eyebrow with Indicator Light */}
              <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold uppercase tracking-[0.2em] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>ALL-ACCESS MEMBERSHIP</span>
              </div>

              {/* Title with Gradient Text Accent */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-white leading-tight">
                Keep learning with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300">
                  Masterclass Membership
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-normal mt-1 max-w-2xl">
                Review live-class access, community benefits, and membership terms in one place.
              </p>
            </div>

          </div>

          {/* Right: Prominent Cyan/Blue Action Button */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <Link
              href="/masterclass-membership"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#026fe2] via-[#0284c7] to-[#38bdf8] hover:from-[#025ec2] hover:to-[#0274af] text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 active:scale-[0.99] group"
            >
              <span>View Membership &amp; Pricing</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

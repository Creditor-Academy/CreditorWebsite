import Link from "next/link";
import { ArrowRight, Video, Compass, Users } from "lucide-react";

export default function HowLearningWorks() {
  const steps = [
    {
      number: "01",
      icon: Video,
      title: "Watch the Free Webinar",
      description:
        "Start with our 45-minute on-demand masterclass to understand private status, business trusts, and credit mechanics.",
      actionText: "Watch Webinar",
      actionHref: "/webinar",
      badge: "Step 01",
    },
    {
      number: "02",
      icon: Compass,
      title: "Choose Your Track",
      description:
        "Select the curriculum you need: Become Private (Status Correction), Operate Private (Trusts & PMAs), or Financial Freedom (Credit).",
      actionText: "Explore Courses",
      actionHref: "/services/course-cataloges",
      badge: "Step 02",
    },
    {
      number: "03",
      icon: Users,
      title: "Join Masterclass Membership",
      description:
        "Get weekly live interactive classes, direct mentor Q&A, and full access to our verified legal document and trust indenture vault.",
      actionText: "View Membership",
      actionHref: "/masterclass-membership",
      badge: "Step 03",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#026fe2] mb-2">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a43] tracking-tight mb-2">
            Three simple steps to get started.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            From your introductory webinar to full operational execution.
          </p>
        </div>

        {/* 3 Straightforward Horizontal Rows */}
        <div className="space-y-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm hover:shadow-md hover:border-[#026fe2]/40 transition-all duration-200 group cursor-pointer"
              >
                {/* Left: Number + Icon + Content */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center font-extrabold font-mono text-base shrink-0 border border-blue-100/80 group-hover:bg-[#026fe2] group-hover:text-white transition-colors duration-200">
                    {item.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#026fe2] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <Icon size={14} className="text-slate-400 group-hover:text-[#026fe2] transition-colors" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#102a43] mb-1 group-hover:text-[#026fe2] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Calm CTA by default, highlights into primary button on hover */}
                <div className="sm:pl-4 sm:border-l sm:border-slate-100 shrink-0">
                  <Link
                    href={item.actionHref}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100/80 border border-slate-200/80 group-hover:bg-[#026fe2] group-hover:text-white group-hover:border-[#026fe2] group-hover:shadow-md group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-200"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

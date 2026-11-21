import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import { pageMetadata } from "@/lib/pageSeo";
import { FOUNDER_BIOS, founderPersonJsonLd } from "@/lib/structuredData";
import { JsonLd } from "@/app/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata("/founder");

export default function FounderPage() {
  return (
    <main>
      <JsonLd data={founderPersonJsonLd()} />
      <Herobanner
        heading="PaulMichael Rowland"
        desc="Founder and CEO of <span>Creditor Academy</span>."
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#026fe2]">Founder &amp; CEO</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#102a43] tracking-tight">
              PaulMichael Rowland
            </h2>
            {FOUNDER_BIOS.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-700 text-[#102a43] font-semibold text-sm"
              >
                About Creditor Academy
              </Link>
              <Link
                href="/webinar"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#026fe2] text-white font-semibold text-sm"
              >
                Watch the free webinar
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/paul/paulmichael.webp"
              alt="PaulMichael Rowland, founder of Creditor Academy"
              width={480}
              height={480}
              className="w-72 h-72 rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}

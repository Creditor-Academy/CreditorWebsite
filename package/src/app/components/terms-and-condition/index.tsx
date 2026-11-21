"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaUser,
  FaLock,
  FaCreditCard,
  FaBan,
  FaCopyright,
  FaTools,
  FaBalanceScale,
  FaSignOutAlt,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
  FaBook,
  FaSearch,
  FaCheck,
  FaQuestionCircle,
  FaShieldAlt,
  FaFileContract,
  FaMoneyBillWave,
  FaRobot,
  FaExclamationTriangle,
  FaHandshake
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SectionItem {
  icon: React.ReactElement;
  title: string;
}

export default function TermsAndCondition() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [readSections, setReadSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sectionElements = document.querySelectorAll("[data-section]");

      sectionElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          setActiveSection(index);
          setTimeout(() => {
            setReadSections((prev) => new Set(prev).add(index));
          }, 800);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sectionElement = document.querySelector(`[data-section="${index}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setReadSections((prev) => new Set(prev).add(index));
    }
  };

  const sections: SectionItem[] = [
    { icon: <FaInfoCircle />, title: "Plain-English Summary" },
    { icon: <FaFileContract />, title: "1. Who We Are and What These Terms Cover" },
    { icon: <FaCheck />, title: "2. Acceptance of These Terms" },
    { icon: <FaUser />, title: "3. Eligibility" },
    { icon: <FaTools />, title: "4. What We Offer" },
    { icon: <FaExclamationTriangle />, title: "5. No Promises of Results" },
    { icon: <FaShieldAlt />, title: "6. CROA and Related State Laws" },
    { icon: <FaUser />, title: "7. Your Responsibilities" },
    { icon: <FaMoneyBillWave />, title: "8. Prices, Billing, Refunds, and Cancellation" },
    { icon: <FaLock />, title: "9. Your Account and Security" },
    { icon: <FaBook />, title: "10. License to Use Our Materials" },
    { icon: <FaCopyright />, title: "11. Our Intellectual Property" },
    { icon: <FaFileContract />, title: "12. Your Content and the Letters You Write" },
    { icon: <FaTools />, title: "13. Credit Reports and Third-Party Services" },
    { icon: <FaLock />, title: "14. Privacy" },
    { icon: <FaBan />, title: "15. Acceptable Use" },
    { icon: <FaEnvelope />, title: "16. Electronic Records, Signatures, and Communications" },
    { icon: <FaExclamationTriangle />, title: "17. Disclaimers of Warranties" },
    { icon: <FaBalanceScale />, title: "18. Limitation of Liability" },
    { icon: <FaShieldAlt />, title: "19. Indemnification" },
    { icon: <FaGavel />, title: "20. Dispute Resolution" },
    { icon: <FaBalanceScale />, title: "21. Governing Law" },
    { icon: <FaSignOutAlt />, title: "22. Suspension and Termination" },
    { icon: <FaSyncAlt />, title: "23. Changes to Our Offerings and to These Terms" },
    { icon: <FaInfoCircle />, title: "24. State-Specific Notices" },
    { icon: <FaBook />, title: "25. Miscellaneous" },
    { icon: <FaEnvelope />, title: "26. Contact Us" }
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = (readSections.size / sections.length) * 100;

  const gradientHeaderColors = [
    "from-blue-600 to-indigo-600",
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-purple-500 to-purple-600",
    "from-sky-500 to-blue-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-blue-600 to-purple-600",
    "from-teal-500 to-emerald-600",
    "from-slate-700 to-slate-900",
    "from-blue-500 to-indigo-600",
    "from-purple-600 to-pink-600",
    "from-sky-600 to-blue-700",
    "from-indigo-600 to-purple-700",
    "from-blue-600 to-sky-600",
    "from-red-500 to-rose-600",
    "from-blue-500 to-teal-600",
    "from-amber-600 to-red-600",
    "from-purple-600 to-indigo-700",
    "from-teal-600 to-blue-600",
    "from-blue-700 to-indigo-800",
    "from-indigo-500 to-blue-600",
    "from-slate-600 to-slate-800",
    "from-purple-500 to-blue-600",
    "from-teal-500 to-indigo-600",
    "from-blue-600 to-purple-600",
    "from-blue-700 to-indigo-700"
  ];

  return (
    <section className="min-h-screen bg-[#f3f4fd] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400/10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-400/10 -translate-x-1/2 pointer-events-none" />

      {/* Fixed top progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-sky-500 to-purple-600"
          style={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 py-12 md:py-20 text-gray-800">
        {/* Header Card */}
        <motion.header
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-gray-100"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-purple-500/10 pointer-events-none" />

          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creditor Academy Terms of Service
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-gray-600">
              Please read these terms carefully. By accessing or using Creditor Academy&apos;s website and
              services you agree to be bound by these Terms of Service.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 shrink-0 text-base" />
                <div className="text-sm text-blue-800">
                  <p>
                    <strong>Effective date:</strong> November 18, 2026 · <strong>Last updated:</strong> November 18, 2026
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Estimated reading time: 15–20 minutes · WCAG 2.2 AA Compliance Target
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Entity Notice (Strict Compliance: Imperium Group DBA Creditor Academy, No Inc/LLC) */}
            <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
              <strong>Seller Entity:</strong> Imperium Group, a business trust, doing business as Creditor Academy · 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States · Contact: counselor@creditoracademy.com · (425) 400-9246 (9:00 AM–5:00 PM Eastern Time).
            </div>
          </div>
        </motion.header>

        {/* Table of Contents Card */}
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="text-blue-500 text-xl" />
            <h2 className="text-2xl font-semibold">Table of Contents</h2>
          </div>

          {/* Search Box */}
          <div className="mb-6">
            <div
              className={`flex items-center border rounded-xl transition-all duration-200 max-w-md ${
                isSearchFocused
                  ? "ring-2 ring-blue-500 border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <FaSearch className="ml-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sections (e.g. dispute, refund, cancel, ai)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full py-3 px-3 bg-transparent outline-none text-sm text-gray-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 text-gray-400 hover:text-gray-600:text-gray-200"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Reading progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Reading progress</span>
              <span className="text-sm text-gray-500 font-mono">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Sections List in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const originalIndex = sections.findIndex((s) => s.title === section.title);
                const isActive = activeSection === originalIndex;
                return (
                  <button
                    key={originalIndex}
                    onClick={() => scrollToSection(originalIndex)}
                    className={`flex items-center w-full gap-3 py-2.5 px-3.5 rounded-xl transition-all duration-150 text-left text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm font-semibold border-l-4 border-blue-500"
                        : "hover:bg-gray-100:bg-gray-700 text-gray-700"
                    }`}
                    title={section.title}
                  >
                    <span className="text-blue-500 shrink-0 text-base">{section.icon}</span>
                    <span className="flex-1 truncate">{section.title}</span>
                    {readSections.has(originalIndex) && (
                      <FaCheck className="text-green-500 text-xs shrink-0" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="col-span-full text-center py-4 text-gray-500 text-sm">
                No sections matching &quot;{searchQuery}&quot;
              </div>
            )}
          </div>

          {/* Help note */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-start gap-2.5">
            <FaQuestionCircle className="text-blue-500 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-gray-600">
              Use the search bar to quickly find specific terms. Green checkmarks indicate sections you&apos;ve already read.
            </p>
          </div>
        </motion.div>

        {/* Section Cards */}
        <div className="space-y-10">
          {/* Section 0: Plain-English Summary */}
          <motion.div
            data-section={0}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[0]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaInfoCircle /> Plain-English Summary (not a substitute for the full Terms)
              </h3>
              {readSections.has(0) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-gray-900">Here are the key points before you read the details:</p>
              <ul className="space-y-3 pl-2">
                <li>
                  <strong className="text-gray-900">What you get.</strong> Education about credit: the Creditor Academy Masterclass membership (live online classes and online courses), the I Want Remedy Now online course, and one-on-one consultations. The Masterclass also includes Education-Only AI Assistants at no extra charge. We teach. You decide what to do, and if you choose to dispute anything, you write and send your own letters. AI Assistants teach and give blank sample templates; they never write letters about your accounts. See <Link href="/ai-notice" className="text-blue-600 underline">Education-Only AI Assistants</Link> and <Link href="/ai-assistants-terms" className="text-blue-600 underline">AI Assistants Terms</Link>.
                </li>
                <li>
                  <strong className="text-gray-900">What we do not do.</strong> We do not dispute anything for you. We do not contact credit bureaus or creditors for you. We do not promise results. Our staff and our AI Assistants do not write your letters, send, file, apply, sign in to your accounts, or contact anyone for you.
                </li>
                <li>
                  <strong className="text-gray-900">What we do not promise.</strong> We do not promise your credit score will go up, that any item will be removed or changed, or that you will be approved for credit. Accurate and timely information generally cannot be removed from a credit report. Many members see no change at all.
                </li>
                <li>
                  <strong className="text-gray-900">Honesty is required.</strong> Dispute only information you believe in good faith is inaccurate, incomplete, outdated, unverifiable, or the result of identity theft. Never make false statements or use a &quot;CPN,&quot; EIN, or any other number in place of your Social Security number.
                </li>
                <li>
                  <strong className="text-gray-900">Price.</strong> The Masterclass is $69 per month for members who join by December 25, 2026, and they keep that price as long as they stay members. Members who join after that date pay the regular price of $147 per month. Prices include any sales tax. I Want Remedy Now is $400 one time. Consultations are $200 per hour. See Section 8.
                </li>
                <li>
                  <strong className="text-gray-900">You can cancel.</strong> You have 3 business days after signing your Member Contract to cancel and get back anything you paid. After that, you can cancel your membership online at any time, without anyone&apos;s approval. See Sections 6 and 8.
                </li>
                <li>
                  <strong className="text-gray-900">You pay after, not before.</strong> We never charge you during your 3-business-day cancellation period, and we bill the Masterclass at the end of each month for service already provided.
                </li>
                <li>
                  <strong className="text-gray-900">No refunds, with exceptions.</strong> All fees are non-refundable, except as stated in Section 8.8 or where the law requires a refund.
                </li>
                <li>
                  <strong className="text-gray-900">Your rights stay yours.</strong> Nothing in these Terms waives any right you have under the Credit Repair Organizations Act or any other law that cannot be waived by contract. Nothing limits your right to dispute a charge with your card issuer or bank, to complain to a government agency, or to post an honest review. No membership document, PMA document, or other document takes away any right you have under consumer protection law.
                </li>
                <li>
                  <strong className="text-gray-900">Disputes with us.</strong> Contact us first. If we can&apos;t fix it, either of us may take the dispute to the Council of the Creditor Academy Private Membership Association for free, informal resolution. You keep your right to go to court, to use small claims court, and to complain to government agencies. See Section 20.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 1 */}
          <motion.div
            data-section={1}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[1]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaFileContract /> 1. Who We Are and What These Terms Cover
              </h3>
              {readSections.has(1) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>1.1 Who we are.</strong> &quot;Creditor Academy,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; mean Imperium Group, a business trust, doing business as Creditor Academy, located at 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States. Imperium Group acts through its trustee.
              </p>
              <p>
                <strong>1.2 Who you are.</strong> &quot;You&quot; and &quot;your&quot; mean the individual who signs up for, buys, or uses any of our offerings for their own personal, family, or household purposes.
              </p>
              <p>
                <strong>1.3 What these Terms cover.</strong> These Terms of Service (&quot;Terms&quot;) govern your use of our website at creditoracademy.com, the Creditor Academy Masterclass membership, our live online classes, our online courses (including those on the Athena LMS learning platform at creditor-academy.lmsathena.com), the I Want Remedy Now course, one-on-one consultations, the Creditor Academy AI Assistants, and related communications and support (together, our &quot;Offerings&quot;).
              </p>
              <div className="space-y-3 pt-2">
                <p><strong>1.4 Related documents.</strong> The following documents are part of these Terms:</p>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Document</th>
                        <th className="py-2.5 px-4 font-semibold">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="py-2 px-4">Privacy Policy</td><td className="py-2 px-4"><Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">California Privacy Notice</td><td className="py-2 px-4"><Link href="/privacy/california" className="text-blue-600 underline">California Privacy Notice</Link></td></tr>
                      <tr><td className="py-2 px-4">Pricing Details</td><td className="py-2 px-4"><Link href="/pricing-terms" className="text-blue-600 underline">Pricing Details</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">Refund Policy</td><td className="py-2 px-4"><Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link></td></tr>
                      <tr><td className="py-2 px-4">Billing Terms</td><td className="py-2 px-4"><Link href="/billing-terms" className="text-blue-600 underline">Billing Terms</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">Cancellation Policy</td><td className="py-2 px-4"><Link href="/cancellation-policy" className="text-blue-600 underline">Cancellation Policy</Link></td></tr>
                      <tr><td className="py-2 px-4">Events and Live Classes Terms</td><td className="py-2 px-4"><Link href="/events-terms" className="text-blue-600 underline">Events and Live Classes Terms</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">Acceptable Use Policy</td><td className="py-2 px-4"><Link href="/acceptable-use" className="text-blue-600 underline">Acceptable Use Policy</Link></td></tr>
                      <tr><td className="py-2 px-4">Cookie Policy</td><td className="py-2 px-4"><Link href="/cookies" className="text-blue-600 underline">Cookie Policy</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">General Disclaimer</td><td className="py-2 px-4"><Link href="/disclaimer" className="text-blue-600 underline">General Disclaimer</Link></td></tr>
                      <tr><td className="py-2 px-4">Electronic Records and Signatures Consent</td><td className="py-2 px-4"><Link href="/e-sign-consent" className="text-blue-600 underline">Electronic Records and Signatures Consent</Link></td></tr>
                      <tr className="bg-gray-50/50"><td className="py-2 px-4">Education-Only AI Assistants</td><td className="py-2 px-4"><Link href="/ai-notice" className="text-blue-600 underline">Education-Only AI Assistants</Link></td></tr>
                      <tr><td className="py-2 px-4">AI Assistants Terms</td><td className="py-2 px-4"><Link href="/ai-assistants-terms" className="text-blue-600 underline">AI Assistants Terms</Link></td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500">
                  When you buy any of our Offerings, these CROA documents also apply (see Section 6): the <Link href="/credit-file-rights" className="text-blue-600 underline">Consumer Credit File Rights Under State and Federal Law</Link> disclosure, the <Link href="/member-contract" className="text-blue-600 underline">Member Contract</Link>, and the <Link href="/notice-of-cancellation" className="text-blue-600 underline">Notice of Cancellation</Link>. How we work, and what we do and do not do, is explained in <Link href="/our-approach" className="text-blue-600 underline">How Creditor Academy Works</Link> and <Link href="/help/what-we-do" className="text-blue-600 underline">Help: What Creditor Academy Does and Doesn&apos;t Do</Link>.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <p><strong>1.5 How these documents fit together.</strong></p>
                <p className="pl-4"><strong>(a) The only terms.</strong> These Terms, the documents listed in Section 1.4, and the CROA documents are the terms between you and us for our Offerings. Terms published for any other product, platform, or website do not apply to our Offerings.</p>
                <p className="pl-4"><strong>(b) Which document wins.</strong> If these documents conflict: first, the Member Contract and the CROA disclosures control; then these Terms; then our policies and the other documents in Section 1.4. In every case, (i) any document that gives you a right required by law controls over anything that would limit that right, and (ii) a more specific policy (for example, the Refund Policy) controls over these Terms on its own subject only to the extent it gives you greater rights.</p>
                <p className="pl-4"><strong>(c) Your consumer rights are protected.</strong> No membership document, PMA document, or other document takes away any right you have under consumer protection law.</p>
              </div>
              <p>
                <strong>1.6 Creditor Academy and the PMA.</strong> Our Offerings are sold by Creditor Academy. References to &quot;the PMA&quot; mean the Creditor Academy Private Membership Association. Creditor Academy sells and provides all of our Offerings, and your contract for them is with Creditor Academy only. You keep every right the law gives you.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            data-section={2}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[2]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaCheck /> 2. Acceptance of These Terms
              </h3>
              {readSections.has(2) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>2.1 How you agree.</strong> You agree to these Terms when you check the box at checkout stating that you agree to them and complete your purchase. Simply browsing our public website is not agreement to these Terms, except that Sections 11, 15, 17, 18, 20, and 21 apply to anyone who uses our public website, to the extent the law allows.</p>
              <p><strong>2.2 Read before agreeing.</strong> We make these Terms and the related documents available for you to read before you agree. You can print or save this page at any time.</p>
              <p><strong>2.3 Order of signup.</strong> Before you buy, you will receive the Consumer Credit File Rights Under State and Federal Law disclosure, before you are asked to sign any contract. You will then be asked to sign the Member Contract. We will not provide any paid service, and we will not charge you, until the contract is signed and your 3-business-day cancellation period has ended. See Section 6.</p>
              <p><strong>2.4 If you do not agree.</strong> If you do not agree to these Terms, do not sign up for or use our Offerings.</p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            data-section={3}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[3]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaUser /> 3. Eligibility
              </h3>
              {readSections.has(3) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>3.1 Age.</strong> You must be at least 18 years old (or the age of legal majority where you live, if higher). Our Offerings are not directed to children, and we do not knowingly collect personal information from children under 13 (Children&apos;s Online Privacy Protection Act, 15 U.S.C. 6501 et seq.; 16 CFR part 312). See our Privacy Policy.</p>
              <p><strong>3.2 Location.</strong> Our Offerings are available only to individuals located in the 50 U.S. states and the District of Columbia.</p>
              <p><strong>3.3 Personal use only.</strong> You may use our Offerings only for yourself and your own credit information. You may not use them to prepare disputes, letters, or strategies for anyone else (including a spouse, family member, friend, or client), and you may not use your membership to run a credit repair, credit consulting, or similar business. See Section 7 and our Acceptable Use Policy.</p>
              <p><strong>3.4 Legal capacity.</strong> You confirm that you can form a binding contract, that the law does not bar you from using our Offerings, and that we have not previously ended your membership for violating these Terms.</p>
              <p><strong>3.5 Accurate identity.</strong> You must sign up using your true legal name and accurate contact information.</p>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            data-section={4}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[4]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaTools /> 4. What We Offer
              </h3>
              {readSections.has(4) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>4.1 Overview.</strong> Creditor Academy provides self-help education about credit, business credit, and related money topics. We do not make a plan for your property, business, or taxes. Our Offerings may change over time as described in Section 23.</p>
              <div className="space-y-2">
                <p><strong>4.2 Creditor Academy Masterclass (monthly membership).</strong> The Masterclass includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>live online classes Monday through Friday at 2:00 PM Pacific Time; and</li>
                  <li>access to Creditor Academy courses on the Athena LMS learning platform (creditor-academy.lmsathena.com).</li>
                </ul>
                <p className="text-sm">Live classes are held inside the Athena LMS platform. They are also covered by our <Link href="/events-terms" className="text-blue-600 underline">Events and Live Classes Terms</Link>.</p>
                <p className="text-sm">
                  <strong>AI Assistants.</strong> The Masterclass also includes Education-Only AI Assistants at no extra charge. They turn on after your 3-business-day cancellation period ends. They teach, list steps, and give blank sample templates. They never write letters or complaints about your accounts, never send, file, or apply for anything, never sign in to your accounts, and never contact anyone for you. See our <Link href="/ai-notice" className="text-blue-600 underline">Education-Only AI Assistants</Link> and <Link href="/ai-assistants-terms" className="text-blue-600 underline">AI Assistants Terms</Link>.
                </p>
              </div>
              <p><strong>4.3 I Want Remedy Now (online course).</strong> A one-time-purchase online course. You have access for as long as your Masterclass membership stays active. Cancelling your Masterclass membership also ends your access to the I Want Remedy Now course.</p>
              <p><strong>4.4 One-on-one consultations.</strong> Private educational sessions with our staff, billed by the hour. Consultations are held on Google Meet. If a consultation is missed, you are not charged, and you can rebook. Consultations are general education, not legal or financial advice.</p>
              <div className="space-y-2">
                <p><strong>4.5 What our classes and courses teach.</strong> Our classes and courses explain credit basics, credit reports, the dispute process under federal law, and related topics. They teach you how to write your own dispute letters if you choose to. If you dispute anything:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>You get and read your own credit reports (see Section 13);</li>
                  <li>You decide whether any item is inaccurate, incomplete, outdated, unverifiable, or the result of identity theft;</li>
                  <li>You write, review, and approve every letter, in your own words (you may start from a blank sample template, but you fill in your own true facts);</li>
                  <li>You sign and send (or submit online) any dispute yourself, to the recipients you choose; and</li>
                  <li>You track and respond to any replies you receive.</li>
                </ul>
              </div>
              <p>
                <strong>4.6 What we do not do.</strong> Our staff do not dispute anything on your behalf. We do not contact credit bureaus, creditors, data furnishers, debt collectors, or anyone else for you. We do not write, send, or mail letters, make calls, or submit online disputes or complaints for you, and we do not act as your agent, representative, or attorney-in-fact. Our AI Assistants don&apos;t either. They also never sign in to your accounts or apply for credit for you. We do not promise results (see Section 5).
              </p>
              <p>
                <strong>4.7 What our Offerings are not.</strong> Our Offerings, including our AI Assistants, are education. AI can be wrong, so check official sources. They are not legal, financial, tax, investment, or asset protection advice, and they do not create an attorney-client, fiduciary, or advisory relationship. We are not a law firm, a debt settlement or debt management company, a lender, or a credit bureau. We are not affiliated with Equifax, Experian, TransUnion, or any card issuer. See our <Link href="/disclaimer" className="text-blue-600 underline">General Disclaimer</Link>.
              </p>
              <p>
                <strong>4.8 Your free rights.</strong> You do not need to buy anything to dispute inaccurate information on your credit reports. Under federal law you can dispute inaccurate or incomplete information directly with credit bureaus (15 U.S.C. 1681i(a)) and, in many cases, with the company that furnished the information (15 U.S.C. 1681s-2(a)(8); 12 CFR 1022.43), at no cost. You can get free copies of your credit reports at AnnualCreditReport.com (15 U.S.C. 1681j). See <Link href="/fcra-rights" className="text-blue-600 underline">Your Rights Under the FCRA</Link> and <Link href="/help/disputing-on-your-own" className="text-blue-600 underline">Help: Disputing on Your Own</Link>.
              </p>

              {/* 4.9 CALLOUT BOX (Exact ALL CAPS / Bold text preserved) */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-900 text-sm leading-relaxed">
                <strong>4.9 AI Assistants.</strong> You are talking with AI, not a person. AI Assistants give general education only. They are not legal, tax, financial, or credit repair services, and they create no attorney-client, fiduciary, or advisory relationship. AI can be wrong, incomplete, or out of date, so check everything before you act. You alone decide, and you write, sign, send, and are responsible for everything. AI Assistants never send, file, or contact anyone for you, and they never pick a trust, company, card, or loan for you. No result is guaranteed. To use them, you check a separate, unchecked box agreeing to our <Link href="/ai-assistants-terms" className="underline font-semibold">AI Assistants Terms</Link> and <Link href="/ai-notice" className="underline font-semibold">Education-Only AI Assistants</Link> notice. Those AI Terms are part of these Terms. They cover AI disclosure, outside AI providers, logging, ownership of what you type and what the AI says, and our right to change, limit, or stop any AI Assistant.
              </div>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            data-section={5}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[5]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaExclamationTriangle /> 5. No Promises of Results
              </h3>
              {readSections.has(5) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <div className="space-y-2">
                <p><strong>5.1 No guarantees.</strong> We do not promise, guarantee, or imply that our Offerings will:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>raise your credit score by any amount or at all;</li>
                  <li>remove, delete, change, or suppress any information on your credit reports;</li>
                  <li>get you approved for any loan, credit card, lease, housing, job, insurance, or other product or benefit;</li>
                  <li>&quot;discharge,&quot; cancel, or wipe out any debt; or</li>
                  <li>produce any result within any time frame.</li>
                </ul>
                <p className="text-sm">This applies to our AI Assistants too. No AI Assistant will promise any of these results.</p>
              </div>
              <p>
                <strong>5.2 Accurate information generally stays.</strong> Accurate, timely, and verifiable information generally cannot be removed from a credit report before the end of the reporting period the law allows (in most cases up to 7 years, and up to 10 years for certain bankruptcies, under 15 U.S.C. 1681c(a)). Nobody can lawfully remove accurate, timely information just because you want it removed.
              </p>
              <p>
                <strong>5.3 Results vary.</strong> Outcomes depend on the facts of your credit file, the responses of credit bureaus and furnishers, your own financial behavior, and many things we do not control. Many members see no change in their credit reports or scores.
              </p>
              <p>
                <strong>5.4 Testimonials and examples.</strong> A member story describes what happened to one person in that person&apos;s situation. Expect your own outcome to differ. Where we show a story, we will say next to it what members can generally expect (16 CFR 255.2(b)), and we will disclose any payment or other connection between us and the person (16 CFR 255.5). See our <Link href="/disclaimer" className="text-blue-600 underline">General Disclaimer</Link>.
              </p>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            data-section={6}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[6]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaShieldAlt /> 6. Credit Repair Organizations Act (CROA) and Related State Laws
              </h3>
              {readSections.has(6) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>6.1 Why this section matters.</strong> The federal Credit Repair Organizations Act, 15 U.S.C. 1679 et seq., protects consumers who buy services sold to improve a credit record, credit history, or credit rating, or that give advice or assistance about doing so. Creditor Academy provides self-help education, and we follow CROA&apos;s consumer protections for every purchase.
              </p>
              <div className="space-y-2">
                <p><strong>6.2 Documents you will receive.</strong> Before you pay for or receive any paid service:</p>
                <div className="space-y-2 text-sm pl-4">
                  <p><strong>(a) Disclosure first.</strong> We will give you the written statement &quot;Consumer Credit File Rights Under State and Federal Law&quot; required by 15 U.S.C. 1679c(a), as a separate document, before you sign any contract with us. See <Link href="/credit-file-rights" className="text-blue-600 underline">Consumer Credit File Rights</Link>.</p>
                  <p><strong>(b) Written contract.</strong> You will be asked to sign a written and dated Member Contract with the terms required by 15 U.S.C. 1679d, including the total amount of all payments, a full and detailed description of the services, an estimate of when the services will be performed (or how long it will take), and a clear statement of your right to cancel. The <Link href="/member-contract" className="text-blue-600 underline">Member Contract</Link> is part of these Terms.</p>
                  <p><strong>(c) Notice of Cancellation.</strong> You will receive a <Link href="/notice-of-cancellation" className="text-blue-600 underline">Notice of Cancellation</Link> form you can use to cancel, and copies of the signed contract and all disclosures, as required by 15 U.S.C. 1679e(c).</p>
                </div>
              </div>
              <p>
                <strong>6.3 3-business-day right to cancel.</strong> You may cancel the Member Contract without penalty or obligation at any time before midnight of the 3rd business day after the date you sign it (15 U.S.C. 1679e(a)). If you cancel, you get back everything you paid. We will not provide any service that requires payment, and we will not charge you, during this cancellation period. How to cancel, and how business days are counted, are explained in the Member Contract and the Notice of Cancellation.
              </p>
              <p>
                <strong>6.4 No payment before service.</strong> We will not charge or receive any money for any service before that service is fully performed (15 U.S.C. 1679b(b)). That is why the Masterclass is billed in arrears, as described in Section 8.2.
              </p>
              <p>
                <strong>6.5 Non-waiver.</strong> Nothing in these Terms waives or limits any right you have under the Credit Repair Organizations Act or any other law that cannot be waived by contract. Any waiver of CROA protections is void (15 U.S.C. 1679f), and we will not ask you to give one. Section 20.5 also applies.
              </p>
              <p>
                <strong>6.6 Our commitments.</strong> Consistent with 15 U.S.C. 1679b(a)(1)–(4), we will not make, and our materials will not advise you to make, any untrue or misleading statement to a credit bureau or creditor. We will not advise you to change your identification to hide accurate information. We will not make untrue or misleading statements about our Offerings.
              </p>
              <p>
                <strong>6.7 Your remedies.</strong> CROA gives consumers civil remedies, including actual damages, possible punitive damages, and attorney&apos;s fees (15 U.S.C. 1679g). The Federal Trade Commission and state attorneys general may enforce CROA (15 U.S.C. 1679h). A CROA claim may generally be brought within 5 years of the violation (15 U.S.C. 1679i). Federal law does not override your state&apos;s laws on this subject unless they conflict, and then only to the extent of the conflict (15 U.S.C. 1679j).
              </p>
              <p>
                <strong>6.8 Disputes sent directly to furnishers.</strong> Federal rules may allow a company that reports information to credit bureaus to decline to investigate a dispute sent directly to it if the dispute was prepared by, or sent on a form supplied by, a credit repair organization (12 CFR 1022.43(b)(2)). You always keep the right to dispute directly with the credit bureaus (15 U.S.C. 1681i), and you may write your own letter in your own words at any time.
              </p>
              <p>
                <strong>6.9 State law.</strong> Some states have credit services laws that give consumers more rights, such as more disclosures or longer cancellation periods. If you live in one of those states, you keep those rights, and additional terms in Section 24 or in the Member Contract may apply.
              </p>
            </div>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            data-section={7}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[7]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaUser /> 7. Your Responsibilities
              </h3>
              {readSections.has(7) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>7.1 Accurate information.</strong> Give us accurate, current, and complete information, and update it when it changes.</p>
              <p>
                <strong>7.2 Good-faith disputes only.</strong> Use what you learn from us only to dispute information you believe, in good faith and after reviewing your own records, is inaccurate, incomplete, outdated, unverifiable, or the result of identity theft. You agree not to: (a) dispute information you know or believe is accurate and complete; (b) claim an account is not yours, or that you did not authorize it, when it is yours or you did authorize it; (c) file, or threaten to file, a false identity theft report, police report, or FTC IdentityTheft.gov report; (d) send the same or nearly the same dispute again and again without new information, or send disputes meant to overwhelm or harass a credit bureau or furnisher (credit bureaus may treat these as frivolous or irrelevant under 15 U.S.C. 1681i(a)(3)); (e) make any untrue or misleading statement to any credit bureau, creditor, furnisher, debt collector, lender, or government agency; or (f) sign another person&apos;s name, or send any letter in another person&apos;s name.
              </p>
              <p>
                <strong>7.3 No identity changes.</strong> You agree not to get, use, or present a &quot;credit privacy number,&quot; &quot;credit profile number,&quot; &quot;CPN,&quot; &quot;secondary credit number,&quot; employer identification number (EIN), individual taxpayer identification number (ITIN), or any other number in place of your own Social Security number to get credit, hide accurate information, or create a new credit identity. You agree not to try &quot;file segregation&quot; or any other scheme to create a new credit identity. These practices may be illegal. Nothing we teach recommends or supports them.
              </p>
              <p><strong>7.4 Review everything.</strong> You are responsible for every letter and statement you send, and for making sure it is true, accurate, and right for your situation.</p>
              <p><strong>7.5 Your own decisions.</strong> You make your own financial decisions, including whether to dispute any item and whether to apply for credit. You remain responsible for paying your debts on time.</p>
              <p><strong>7.6 Follow the law.</strong> Use our Offerings only in ways that follow all applicable laws.</p>
              <p><strong>7.7 Acceptable use.</strong> Follow our <Link href="/acceptable-use" className="text-blue-600 underline">Acceptable Use Policy</Link>.</p>
            </div>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            data-section={8}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[8]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaMoneyBillWave /> 8. Prices, Billing, Refunds, and Cancellation
              </h3>
              {readSections.has(8) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="text-sm">
                This section summarizes our payment terms. Full details are in our <Link href="/pricing-terms" className="text-blue-600 underline">Pricing Details</Link>, <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link>, <Link href="/billing-terms" className="text-blue-600 underline">Billing Terms</Link>, and <Link href="/cancellation-policy" className="text-blue-600 underline">Cancellation Policy</Link>. If those documents give you more rights than this summary, they control.
              </p>
              <div className="space-y-3">
                <p><strong>8.1 Prices.</strong> All prices are in U.S. dollars and include any sales tax (see Section 8.5).</p>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Offering</th>
                        <th className="py-2.5 px-4 font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-2.5 px-4 font-medium">Creditor Academy Masterclass</td>
                        <td className="py-2.5 px-4">$69 per month (sale price through December 25, 2026). Regular price: $147 per month.</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="py-2.5 px-4 font-medium">I Want Remedy Now</td>
                        <td className="py-2.5 px-4">$400, one time</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium">One-on-one consultation</td>
                        <td className="py-2.5 px-4">$200 per hour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">
                  If you join at the $69 sale price on or before December 25, 2026, you keep $69 per month after that date for as long as you stay a member. Members who join after December 25, 2026 pay the regular price of $147 per month.
                </p>
                <p className="text-sm">
                  Before we ask for your payment information, we will clearly show you the total price, how often you will be charged, and all other material terms (15 U.S.C. 8403(1); Cal. Bus. &amp; Prof. Code 17602(a)). We will get your express, affirmative consent before charging you (15 U.S.C. 8403(2)).
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <p><strong>8.2 When you are charged.</strong> We never charge you during your 3-business-day cancellation period, and never before a service is fully performed.</p>
                <div className="space-y-2 pl-4 text-sm">
                  <p><strong>(a) Masterclass: billed in arrears.</strong> You are charged once a month on your signup anniversary date (the same day of the month you signed up), for the month of service just completed, never in advance. Your first charge happens one month after you sign up. It covers only the days from your Service Start Date (the day after your 3-business-day cancellation period ends) to that date, prorated, so you never pay for the cancellation period. If your signup date doesn&apos;t exist in a month (for example, the 31st), we charge on the last day of that month. If you cancel partway through a month, you keep access until the end of the monthly period you are in, and your final charge, made after that period ends, covers only that last period. If you&apos;d rather end your access right away, tell us when you cancel, and your final charge will cover only the days up to that date (prorated).</p>
                  <p><strong>(b) I Want Remedy Now.</strong> We charge the $400 fee only after the whole course has been made available in your account (see the Member Contract, Section 4.4) and never during your 3-business-day cancellation period.</p>
                  <p><strong>(c) Consultations.</strong> You are charged after a consultation is held, not before. A missed consultation is not charged. You pay only for the time the consultation actually lasts, in 15-minute blocks ($50 per block), rounded down. A session never runs past the time you booked unless you agree.</p>
                </div>
              </div>

              <p>
                <strong>8.3 Automatic renewal.</strong> Your Masterclass membership renews automatically each month until you cancel, and we charge your payment method on file at the end of each month as described in Section 8.2(a). You can stop future charges at any time as described in Section 8.7. We will give you at least 30 days&apos; notice before any price increase takes effect, and you may cancel before it does. If we make any other material change to the renewal terms, we will clearly tell you about the change and how to cancel (Cal. Bus. &amp; Prof. Code 17602(g)).
              </p>

              <p>
                <strong>8.4 Payment method.</strong> You authorize us and our payment processor, Tilled, Inc. (&quot;Tilled&quot;), to charge your chosen payment method for the amounts described above. Creditor Academy charges will appear on your card statement as <strong>&quot;IMPERIUM GROUP&quot;</strong>, so you can recognize them. Imperium Group is our legal name, and Creditor Academy is the name we do business under. It is not a separate company. Keep your payment information current. If a charge fails, we will tell you and retry it up to 3 times over 7 days, as described in our Billing Terms. If all retries fail, your access is paused until payment is made. Pausing access does not cancel your membership.
              </p>

              <p><strong>8.5 Taxes.</strong> Our prices include any sales tax. Nothing is added at checkout.</p>
              <p><strong>8.6 Prices can change.</strong> We may change prices going forward only. A change never applies to a service period or service already provided, and we will give you at least 30 days&apos; advance notice, with the right to cancel before the new price applies (see Section 8.3). The $69 price lock comes first: if you joined at $69 per month, your price stays $69 per month for as long as your membership continues without a break, and no price-change notice can raise it.</p>
              <p>
                <strong>8.7 Cancellation.</strong> You may cancel your membership at any time online using the cancel button in your LMS account (see our <Link href="/cancellation-policy" className="text-blue-600 underline">Cancellation Policy</Link>, Section 2.1), by email to counselor@creditoracademy.com, by phone at (425) 400-9246, or by any other method in our Cancellation Policy. If you signed up online, you can always cancel online, without calling or emailing anyone and without extra steps (Cal. Bus. &amp; Prof. Code 17602(d); 15 U.S.C. 8403(3)). Cancelling stops future charges and needs no one&apos;s approval. Cancelling the Masterclass membership also ends access to the I Want Remedy Now course. No PMA document or other document limits your right to cancel, including your 3-business-day cancellation right in Section 6.3. We will send you a confirmation of your cancellation.
              </p>
              <div className="space-y-2">
                <p><strong>8.8 Refunds.</strong> All fees are non-refundable, except as stated below or where the law requires a refund. You will get a full refund:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>(a) 3-business-day cancellation. If you cancel within 3 business days after signing your Member Contract, you get back everything you paid (and we do not charge anything during that period anyway).</li>
                  <li>(b) Charges made in error. We refund in full any duplicate charge, wrong amount, charge made after your cancellation took effect, charge made during the cancellation period, or charge for a period not yet completed.</li>
                  <li>(c) Refunds required by law. We give any refund that applicable law requires, including under CROA (15 U.S.C. 1679e) and state law.</li>
                </ul>
                <p className="text-sm">Because the Masterclass is billed after each month of service, you are never charged for a month you have not received. See our <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link>.</p>
              </div>
              <p>
                <strong>8.9 Your right to dispute charges is not limited.</strong> Nothing in these Terms limits any right you have to dispute a charge with your card issuer, bank, or payment provider, including under the Fair Credit Billing Act (15 U.S.C. 1666 et seq.), the Electronic Fund Transfer Act (15 U.S.C. 1693 et seq.), or card network rules. We encourage you to contact us first at counselor@creditoracademy.com or (425) 400-9246 so we can try to fix the problem quickly, but you do not have to. We will not suspend, cancel, limit, or otherwise penalize you for disputing a charge.
              </p>
            </div>
          </motion.div>

          {/* Section 9 */}
          <motion.div
            data-section={9}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[9]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaLock /> 9. Your Account and Security
              </h3>
              {readSections.has(9) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>9.1 One account per person.</strong> You may have only one account, for your personal use only.</p>
              <p><strong>9.2 Login details.</strong> Keep your password and other login details private. Do not share your account with anyone. If multi-factor authentication is offered, we recommend turning it on.</p>
              <p><strong>9.3 Unauthorized access.</strong> Tell us promptly at counselor@creditoracademy.com if you think someone else has accessed your account. We will work with you to secure it. You are not responsible for activity caused by our own security failures.</p>
              <p><strong>9.4 Sensitive information.</strong> You may share sensitive information with us, such as details from your credit reports. Our security practices are described in <Link href="/security" className="text-blue-600 underline">Security and Compliance</Link> and our Privacy Policy. Do not share information about other people unless it appears in your own credit reports. Never type full Social Security numbers, card numbers, account numbers, passwords, or login codes into an AI Assistant, and black them out on anything you upload.</p>
            </div>
          </motion.div>

          {/* Section 10 */}
          <motion.div
            data-section={10}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[10]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaBook /> 10. License to Use Our Materials
              </h3>
              {readSections.has(10) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>10.1 Limited license.</strong> As long as you follow these Terms and pay any fees due, we give you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use our classes, courses, and materials for your own personal, non-commercial purposes about your own credit.</p>
              <p><strong>10.2 Restrictions.</strong> Except as these Terms or the law expressly allow, you may not: (a) copy, record, modify, translate, or create derivative works of our classes, courses, or materials (other than the letters you write for your own use, see Section 12); (b) sell, resell, rent, share, or otherwise make our Offerings available to anyone else; (c) reverse engineer, decompile, or disassemble any part of our website or learning platform, except where the law expressly allows it despite this restriction; (d) remove proprietary notices; (e) use our Offerings to build a competing product; or (f) access our website or learning platform by automated means.</p>
            </div>
          </motion.div>

          {/* Section 11 */}
          <motion.div
            data-section={11}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[11]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaCopyright /> 11. Our Intellectual Property
              </h3>
              {readSections.has(11) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>11.1 Ownership.</strong> Our website, classes, courses, lessons, videos, text, graphics, sample letters and other materials, and the &quot;Creditor Academy&quot; name and logos, are owned by us or our licensors and are protected by copyright, trademark, and other laws. Except for the limited license in Section 10, we do not give you any rights in them.</p>
              <p><strong>11.2 Feedback.</strong> If you send us suggestions or feedback, we may use them without any obligation to you. We will not publicly name you as the source without your permission.</p>
              <p><strong>11.3 Copyright complaints.</strong> If you believe content on our website or in our Offerings infringes your copyright, please report the claimed infringement to us at counselor@creditoracademy.com.</p>
              <p><strong>11.4 Other companies&apos; marks.</strong> Equifax, Experian, TransUnion, and the names of card issuers and other companies are trademarks of their owners. We use them only to identify those companies. Their use does not mean they endorse or are affiliated with us.</p>
            </div>
          </motion.div>

          {/* Section 12 */}
          <motion.div
            data-section={12}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[12]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaFileContract /> 12. Your Content and the Letters You Write
              </h3>
              {readSections.has(12) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>12.1 What &quot;Your Content&quot; means.</strong> &quot;Your Content&quot; means information and materials you give us, post, or upload, including information you share in classes, consultations, or on our learning platform.</p>
              <p><strong>12.2 You own your letters.</strong> You own the dispute letters and other documents you write, including any you write using what you learned from us. You may use them for any lawful purpose about your own credit. If you use sample language from our classes, courses, or AI Assistants&apos; blank templates, we give you a permanent, royalty-free license to use that language in letters about your own credit. Our materials themselves remain ours (Section 11).</p>
              <p><strong>12.3 License to us.</strong> You give us a limited, non-exclusive, royalty-free license to store, process, display, and transmit Your Content only as needed to provide, secure, and support our Offerings for you, to comply with law, and as described in our Privacy Policy. We do not claim ownership of Your Content. We may use de-identified, combined information that can&apos;t reasonably identify you to improve our classes and courses. We never use your credit information or AI chats to train AI models.</p>
              <p><strong>12.4 Your responsibility.</strong> You are responsible for Your Content, including its accuracy and legality. You confirm you have the right to share it.</p>
              <p><strong>12.5 How long we keep it.</strong> We keep Your Content until you ask us to delete it or we no longer need it to provide our Offerings, whichever comes first. When you ask, we delete it, except for records the law requires us to keep longer (for example, records required by CROA, state law, or the Telemarketing Sales Rule, 16 CFR 310.5; tax and payment records; and records needed for legal claims). See our Privacy Policy.</p>
            </div>
          </motion.div>

          {/* Section 13 */}
          <motion.div
            data-section={13}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[13]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaTools /> 13. Credit Reports and Third-Party Services
              </h3>
              {readSections.has(13) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>13.1 Credit reports.</strong> Our Offerings do not include credit monitoring or pulling your credit reports. You get your own reports. Our AI Assistants do not sign in to, read, or watch your credit, email, bank, card, or CFPB accounts. You can get free copies from each nationwide credit bureau at AnnualCreditReport.com.</p>
              <p><strong>13.2 Third-party services.</strong> We use outside companies to provide our Offerings, including the Athena LMS learning platform for our live classes and online courses, Google Meet (Google LLC) for consultations, Google Workspace (Google LLC) for email, Google Analytics (Google LLC) for website analytics, Tilled for payments, and the service providers that run and host our AI Assistants. These companies may have their own terms and privacy policies. We choose them with care and describe what data we share with them in our Privacy Policy.</p>
              <p><strong>13.3 Links.</strong> Our website and materials may link to other websites. We do not control them and are not responsible for their content or practices.</p>
            </div>
          </motion.div>

          {/* Section 14 */}
          <motion.div
            data-section={14}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[14]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaLock /> 14. Privacy
              </h3>
              {readSections.has(14) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Our <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link> explains how we collect, use, share, and protect personal information. California residents should also read our <Link href="/privacy/california" className="text-blue-600 underline">California Privacy Notice</Link>. Our use of cookies is described in our <Link href="/cookies" className="text-blue-600 underline">Cookie Policy</Link>. Only Creditor Academy holds member data. The PMA does not receive or hold member information. We use Google Analytics to understand how our website is used. We do not use advertising pixels or advertising cookies, and we do not sell or share your personal information for cross-context behavioral advertising. We do not link your Creditor Academy account or data with accounts of any other product or platform unless we first give you a new notice describing that use, the use fits the purposes we disclosed, and any other company involved is bound by a written contract (Cal. Civ. Code 1798.100).
              </p>
            </div>
          </motion.div>

          {/* Section 15 */}
          <motion.div
            data-section={15}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[15]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaBan /> 15. Acceptable Use
              </h3>
              {readSections.has(15) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Follow our <Link href="/acceptable-use" className="text-blue-600 underline">Acceptable Use Policy</Link>. Among other things, it prohibits using our Offerings for anyone other than yourself, false or bad-faith disputes, identity manipulation, recording or sharing our classes or courses without permission, scraping, harassment, illegal activity, unauthorized security testing, and misusing AI Assistants (see <Link href="/ai-assistants-terms" className="text-blue-600 underline">AI Assistants Terms</Link>, Section 7).
              </p>
            </div>
          </motion.div>

          {/* Section 16 */}
          <motion.div
            data-section={16}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[16]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaEnvelope /> 16. Electronic Records, Signatures, and Communications
              </h3>
              {readSections.has(16) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>16.1 Consent.</strong> When you agree to these Terms, you are also asked to review and agree to our separate <Link href="/e-sign-consent" className="text-blue-600 underline">Electronic Records and Signatures Consent</Link>. It explains your right to paper copies, how to withdraw consent, and the hardware and software you need.</p>
              <p><strong>16.2 CROA documents.</strong> If you consent, the CROA disclosure, the Member Contract, and the Notice of Cancellation may be given to you electronically and signed by checking a box at checkout, along with these Terms, receipts, and other notices. If you do not consent, we will provide paper documents. Email counselor@creditoracademy.com or call (425) 400-9246, and we will mail you the CROA disclosure, the Member Contract, and two copies of the Notice of Cancellation for free. You sign the contract and mail it back to our address in Section 26. Your 3-business-day cancellation period starts when you sign, and no service starts or is charged until it ends.</p>
              <p><strong>16.3 Notices to you.</strong> We may send you notices by email to the address on your account, through our learning platform, or by posting on our website. An email notice is treated as received 24 hours after we send it, unless we learn delivery failed. Keep your email address current. Any marketing email we send will identify us, include our postal address, and give you a working way to unsubscribe (15 U.S.C. 7704(a)(3)–(5)).</p>
              <p><strong>16.4 Notices to us.</strong> Send legal notices to Imperium Group, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States, or by email to counselor@creditoracademy.com.</p>
            </div>
          </motion.div>

          {/* Section 17 */}
          <motion.div
            data-section={17}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[17]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaExclamationTriangle /> 17. Disclaimers of Warranties
              </h3>
              {readSections.has(17) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              {/* 17.1 ALL CAPS Box */}
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-500 font-bold text-gray-900 text-sm leading-relaxed">
                17.1 As is. TO THE FULLEST EXTENT THE LAW ALLOWS, AND EXCEPT AS EXPRESSLY STATED IN THESE TERMS OR IN THE MEMBER CONTRACT, OUR OFFERINGS, INCLUDING OUR AI ASSISTANTS AND EVERYTHING THEY SAY, ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; WE DISCLAIM IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ACCURACY, AND ANY WARRANTIES FROM COURSE OF DEALING OR USAGE OF TRADE.
              </div>

              <p><strong>17.2 No warranty of results.</strong> We do not warrant that our Offerings will produce any particular result, including any change to your credit reports or scores (see Section 5).</p>
              <p><strong>17.3 No warranty of accuracy.</strong> We do not warrant that our classes, courses, consultations, materials, or AI Assistant answers and sample templates will be complete, current, or right for your situation.</p>
              <p><strong>17.4 Availability.</strong> We do not warrant that our website, live classes, or learning platform will be uninterrupted, secure, or error-free, though we work to keep them available and secure.</p>

              {/* 17.5 ALL CAPS Box */}
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-500 font-bold text-gray-900 text-sm leading-relaxed">
                17.5 Assumption of risk and release. YOU UNDERSTAND THAT EDUCATION AND AI ANSWERS CAN BE WRONG, AND THAT YOU ALONE DECIDE WHAT TO DO. TO THE FULLEST EXTENT THE LAW ALLOWS, YOU ACCEPT THE RISK OF ACTING ON WHAT YOU LEARN, AND YOU RELEASE US, OUR TRUSTEE, STAFF, AND AGENTS FROM CLAIMS ARISING FROM YOUR OWN DECISIONS, FROM ANY DOCUMENT YOU CHOOSE TO WRITE, SIGN, SEND, OR SUBMIT, AND FROM HOW OTHERS RESPOND TO IT. <span className="font-normal block mt-1">This release does not cover any right or remedy under CROA, any other right the law doesn&apos;t let you give up, our fraud, gross negligence, or willful misconduct, death or personal injury caused by our negligence, or any refund owed to you.</span>
              </div>

              <p><strong>17.6 Limits of this section.</strong> Some states do not allow the exclusion of implied warranties, so some of these exclusions may not apply to you. Nothing in these Terms waives or limits any right you have under the Credit Repair Organizations Act or any other law that cannot be waived by contract. This section does not disclaim any warranty or statement that federal or state law prohibits us from disclaiming.</p>
            </div>
          </motion.div>

          {/* Section 18 */}
          <motion.div
            data-section={18}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[18]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaBalanceScale /> 18. Limitation of Liability
              </h3>
              {readSections.has(18) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              {/* 18.1 ALL CAPS Box */}
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-500 font-bold text-gray-900 text-sm leading-relaxed">
                18.1 Excluded damages. TO THE FULLEST EXTENT THE LAW ALLOWS, NEITHER WE NOR OUR TRUSTEE, STAFF, OR AGENTS WILL BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST OPPORTUNITIES, OR DENIED CREDIT, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR OFFERINGS, INCLUDING OUR AI ASSISTANTS, EVEN IF TOLD SUCH DAMAGES WERE POSSIBLE.
              </div>

              {/* 18.2 ALL CAPS Box */}
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-500 font-bold text-gray-900 text-sm leading-relaxed">
                18.2 Cap. TO THE FULLEST EXTENT THE LAW ALLOWS, OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR OFFERINGS, INCLUDING OUR AI ASSISTANTS, WILL NOT BE MORE THAN THE GREATER OF (A) THE FEES YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM OR (B) $100.
              </div>

              <div className="space-y-2">
                <p><strong>18.3 Exceptions.</strong> Sections 18.1 and 18.2 do not apply to, and do not limit:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>(a) any right or remedy you have under the Credit Repair Organizations Act, 15 U.S.C. 1679 et seq., including actual damages, punitive damages, and attorney&apos;s fees under 15 U.S.C. 1679g;</li>
                  <li>(b) any right or remedy under any other federal or state law that cannot be limited or waived by contract, including consumer protection, automatic renewal, privacy, and state credit services laws;</li>
                  <li>(c) liability for our gross negligence, willful misconduct, or fraud;</li>
                  <li>(d) liability for death or personal injury caused by our negligence; or</li>
                  <li>(e) any refund owed to you under these Terms, the Refund Policy, or law.</li>
                </ul>
              </div>
              <p><strong>18.4 State differences.</strong> Some states do not allow limiting or excluding certain damages. In those states, our liability is limited only to the extent the law allows.</p>
            </div>
          </motion.div>

          {/* Section 19 */}
          <motion.div
            data-section={19}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[19]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaShieldAlt /> 19. Indemnification
              </h3>
              {readSections.has(19) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>19.1 Narrow indemnity.</strong> To the extent the law allows, you agree to repay us for reasonable losses, including reasonable attorney&apos;s fees, that we actually incur because of a claim by someone else (not a claim by you) arising from: (a) your intentional or knowingly false statements to a credit bureau, creditor, or other third party; (b) your intentional misuse of our Offerings, including our AI Assistants, in violation of Section 7.2, Section 7.3, the Acceptable Use Policy, or the AI Assistants Terms; (c) your infringement of someone else&apos;s intellectual property in Your Content; (d) false information you knowingly give us or anyone else; or (e) any letter, dispute, complaint, filing, or other document you choose to send or submit, to the extent the claim is about content you wrote or chose to include.
              </p>
              <p>
                <strong>19.2 Limits.</strong> This indemnity does not apply to any claim to the extent caused by our own acts or omissions, our materials used as intended, or our violation of law. It does not require you to repay us for any claim you bring against us, and it does not limit any right you have under CROA or any other law that cannot be waived by contract.
              </p>
              <p>
                <strong>19.3 Process.</strong> We will promptly tell you about any claim, let you take part in the defense with a lawyer of your choice at your expense, and not settle any claim that puts an obligation on you without your consent.
              </p>
            </div>
          </motion.div>

          {/* Section 20 - DISPUTE RESOLUTION (PRESERVES <a id="disputes"></a> ANCHOR) */}
          <motion.div
            id="disputes"
            data-section={20}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-400 hover:shadow-xl transition-shadow"
          >
            <a id="disputes" className="sr-only">Dispute Resolution Anchor</a>
            <div className={`bg-gradient-to-r ${gradientHeaderColors[20]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaGavel /> 20. Dispute Resolution
              </h3>
              {readSections.has(20) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>20.1 Resolving disputes.</strong> If you have a problem with us, please contact us first at <a href="mailto:counselor@creditoracademy.com" className="text-blue-600 underline font-semibold">counselor@creditoracademy.com</a> or <a href="tel:+14254009246" className="text-blue-600 underline font-semibold">(425) 400-9246</a> so we can try to fix it. If we can&apos;t, either of us may refer the dispute to the Council of the Creditor Academy Private Membership Association (the &quot;PMA Council&quot;) for informal resolution. To use it, email counselor@creditoracademy.com with &quot;PMA Council&quot; in the subject and describe the problem. We aim to answer within 30 days. If we don&apos;t, or you&apos;re not satisfied, you may use any other option in this Section. Taking part in the PMA Council process is free to you. You may have a lawyer help you, and you may take part personally.
              </p>
              <p>
                <strong>20.2 Your legal rights are not limited.</strong> The PMA Council process does not waive or limit any right you have under federal or state law. In particular, any waiver of your rights under the Credit Repair Organizations Act is void (15 U.S.C. 1679f). Nothing in these Terms stops you from: filing a complaint with the Consumer Financial Protection Bureau, the Federal Trade Commission, your state attorney general, or any other government agency; bringing a claim in small claims court where you live; or bringing a claim in court where the law gives you that right. If you are not satisfied with the PMA Council&apos;s decision, or if the law does not allow a dispute to be required to go to the PMA Council first, you may go to court. Any court case that is not in small claims court where you live will be in the state or federal courts located in Laramie County, Wyoming, unless the law of your state gives you the right to sue where you live.
              </p>
              <div className="space-y-2">
                <p><strong>20.3 Other points.</strong></p>
                <div className="space-y-1 pl-4 text-sm">
                  <p><strong>(a) Time limits paused.</strong> Any deadline for bringing a claim (including the 5-year period under 15 U.S.C. 1679i) is paused while we are trying to resolve the dispute informally or through the PMA Council.</p>
                  <p><strong>(b) Everyday requests.</strong> You may cancel, ask for a refund, or dispute a charge with your card issuer at any time. These do not need to go through the PMA Council.</p>
                  <p><strong>(c) Legal process.</strong> We respond to subpoenas, court orders, and other lawful requests, including from regulators, as described in our Privacy Policy.</p>
                  <p><strong>(d) You may speak freely.</strong> We do not ask members to sign any confidentiality pledge, &quot;covenant of silence,&quot; or similar promise about their dealings with us. No document, including any PMA document, limits your right to talk about your experience with us.</p>
                </div>
              </div>

              {/* 20.4 JURY TRIAL AND CLASS ACTION WAIVER (Exact ALL CAPS preserved) */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-900 text-sm leading-relaxed">
                <strong className="block font-bold text-amber-950 mb-1">
                  20.4 JURY TRIAL AND CLASS ACTION WAIVER
                </strong>
                TO THE EXTENT THE LAW ALLOWS, YOU AND WE EACH GIVE UP THE RIGHT TO A JURY TRIAL, AND EACH OF US MAY BRING CLAIMS ONLY AS AN INDIVIDUAL, NOT AS A PLAINTIFF OR CLASS MEMBER IN A CLASS OR REPRESENTATIVE ACTION. This waiver does not apply to any claim under the Credit Repair Organizations Act (which allows class actions, 15 U.S.C. 1679g(a)(2)(B), and whose protections can&apos;t be waived, 15 U.S.C. 1679f), to any other claim where the law doesn&apos;t allow this waiver, or to small claims court. If a court finds this waiver can&apos;t be enforced for a claim, that claim goes forward in court without it.
              </div>

              <div className="space-y-2 pt-2">
                <p><strong>20.5 Rights you keep.</strong> Nothing in these Terms or in any other document waives or limits:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>(a) your rights under the Credit Repair Organizations Act (any waiver is void under 15 U.S.C. 1679f);</li>
                  <li>(b) your rights under the Fair Credit Reporting Act, 15 U.S.C. 1681 et seq.;</li>
                  <li>(c) your rights under the consumer protection, credit services, automatic renewal, and privacy laws of your state;</li>
                  <li>(d) your right to complain to, or cooperate with, any government agency; or</li>
                  <li>(e) your right to post an honest review of us or our Offerings (Consumer Review Fairness Act, 15 U.S.C. 45b).</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 21 */}
          <motion.div
            data-section={21}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[21]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaBalanceScale /> 21. Governing Law
              </h3>
              {readSections.has(21) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>21.1 Wyoming law.</strong> These Terms are governed by the laws of the State of Wyoming and applicable federal law, without regard to conflict-of-law rules. However, you keep the protections of the consumer protection, credit services, automatic renewal, and privacy laws of the state where you live wherever they cannot be waived by contract or give you more protection. You may always use small claims court where you live.
              </p>
              <p>
                <strong>21.2 CROA is federal and cannot be waived.</strong> The Credit Repair Organizations Act is a federal law. The choice of Wyoming law does not change whether or how it applies, and its protections cannot be waived (15 U.S.C. 1679f). Federal law does not override your state&apos;s laws on this subject unless they conflict, and then only to the extent of the conflict (15 U.S.C. 1679j).
              </p>
            </div>
          </motion.div>

          {/* Section 22 */}
          <motion.div
            data-section={22}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[22]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaSignOutAlt /> 22. Suspension and Termination
              </h3>
              {readSections.has(22) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>22.1 By you.</strong> You may cancel your membership at any time as described in Section 8.7.</p>
              <p><strong>22.2 By us.</strong> We may suspend or end your access if: (a) you seriously break these Terms or the Acceptable Use Policy; (b) we reasonably believe your use involves fraud, knowingly false disputes, identity manipulation, or other illegal activity, or creates a security risk; (c) the law or a government order requires it; or (d) we stop offering the Offering. If a payment fails, we pause your access as described in Section 8.4; a failed payment alone does not end your membership. Where reasonable and lawful, we will give you advance notice and a chance to fix the problem. Disputing a charge with your card issuer or bank is never a reason for us to suspend or end your access (Section 8.9).</p>
              <p><strong>22.3 Effect.</strong> When your membership ends, your license ends. We will not charge you for any period or service we have not provided.</p>
              <p><strong>22.4 Survival.</strong> Sections that by their nature should continue after termination will continue, including Sections 5, 8.8, 8.9, 11, 12.2, 12.5, 17, 18, 19, 20, 21, 24, and 25.</p>
              <p><strong>22.5 Rights not affected.</strong> Termination does not affect any right you have under CROA (including any right to a refund or to cancel) or any other law that cannot be waived by contract.</p>
            </div>
          </motion.div>

          {/* Section 23 */}
          <motion.div
            data-section={23}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[23]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaSyncAlt /> 23. Changes to Our Offerings and to These Terms
              </h3>
              {readSections.has(23) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>23.1 Changes to our Offerings.</strong> We may add, change, or remove classes, courses, or other features to improve our Offerings, meet legal requirements, or for other legitimate reasons. If we remove something important you are paying for, we will tell you in advance where practical, and you may cancel.</p>
              <p><strong>23.2 Changes to these Terms.</strong> We may update these Terms from time to time. If a change is material, we will give you at least 30 days&apos; notice by email before it takes effect. Changes apply only going forward. They will not apply to any dispute that arose, or any service period that began, before the change took effect. If you do not agree to a change, you may cancel before it takes effect, and you will not be bound by it.</p>
              <p><strong>23.3 Past versions.</strong> We will keep past versions of these Terms and send a copy to anyone who asks at counselor@creditoracademy.com.</p>
            </div>
          </motion.div>

          {/* Section 24 */}
          <motion.div
            data-section={24}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[24]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaInfoCircle /> 24. State-Specific Notices
              </h3>
              {readSections.has(24) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>24.1 California residents.</strong> Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at Department of Consumer Affairs, Consumer Information Center, 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834 or by telephone at (800) 952-5210 (TTY: 711 or 1-800-735-2929). You may contact us at counselor@creditoracademy.com, (425) 400-9246, or 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009. Our prices are listed in Section 8.1. California residents also have the rights described in our <Link href="/privacy/california" className="text-blue-600 underline">California Privacy Notice</Link>.
              </p>
              <p>
                <strong>24.2 New Jersey residents.</strong> Some provisions of these Terms, including the disclaimers in Section 17, the limitation of liability in Section 18, and the indemnity in Section 19, apply only &quot;to the fullest extent the law allows.&quot; They do not apply to New Jersey residents to the extent New Jersey law prohibits them, and nothing in these Terms limits any right New Jersey law gives you that cannot be waived by contract. If any part of these Terms is void or can&apos;t be enforced under New Jersey law, it does not apply to New Jersey residents, and the rest of these Terms still applies.
              </p>
              <p>
                <strong>24.3 States with credit services laws.</strong> If you live in a state with a credit services law, you keep every right that law gives you, including any longer cancellation period. If your state&apos;s law requires a specific notice, we will give it to you before you sign.
              </p>
              <p>
                <strong>24.4 Automatic renewal notices.</strong> We follow the automatic renewal laws of the state where you live. That includes the clear checkout disclosures and consent in our Billing Terms, online cancellation, the yearly reminder (<Link href="/billing-terms" className="text-blue-600 underline">Billing Terms Section 8</Link>), and notice before any price change or other material change (Billing Terms Section 9).
              </p>
              <p>
                <strong>24.5 Other states.</strong> If your state gives you rights in addition to those in these Terms, you keep those rights.
              </p>
            </div>
          </motion.div>

          {/* Section 25 */}
          <motion.div
            data-section={25}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[25]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaBook /> 25. Miscellaneous
              </h3>
              {readSections.has(25) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>25.1 Entire agreement.</strong> These Terms, the documents listed in Section 1.4, the Member Contract, and the CROA disclosures are the entire agreement between you and us about our Offerings and replace any earlier agreements on the same subject. Section 1.5 explains which document controls in a conflict.</p>
              <p><strong>25.2 Severability.</strong> If any part of these Terms is found unenforceable, it will be limited only as much as needed, and the rest stays in effect.</p>
              <p><strong>25.3 No waiver by us.</strong> If we do not enforce a provision, we can still enforce it later.</p>
              <p><strong>25.4 Assignment.</strong> You may not transfer these Terms without our written consent. We may transfer these Terms as part of a merger, acquisition, reorganization, or sale of assets, or by operation of law, as long as the new company agrees to these Terms and your rights are not reduced. We will tell you about any transfer.</p>
              <p><strong>25.5 Events beyond our control.</strong> We are not liable for delays or failures caused by events beyond our reasonable control. This does not excuse any refund owed to you or any duty under CROA or other law that cannot be waived.</p>
              <p><strong>25.6 Relationship.</strong> These Terms do not create an agency, partnership, joint venture, employment, fiduciary, or attorney-client relationship between you and us.</p>
              <p><strong>25.7 Headings and wording.</strong> Headings are for convenience only. &quot;Including&quot; means &quot;including without limitation.&quot;</p>
              <p><strong>25.8 Language.</strong> These Terms are written in English. If we ever sell to you mainly in another language, we will give you translated contracts and disclosures where the law requires it (for example, Cal. Civ. Code 1632).</p>
              <p><strong>25.9 Sanctions.</strong> You may not use our Offerings if you are on a U.S. government restricted-party list.</p>
              <p><strong>25.10 Accessibility.</strong> We aim to meet WCAG 2.2 Level AA. If you need these Terms in another format, contact us. See our <Link href="/accessibility" className="text-blue-600 underline">Accessibility Statement</Link>.</p>
              <p><strong>25.11 No reliance on other statements.</strong> You agree you are not relying on any statement, promise, or claim of results that is not in these Terms, the documents listed in Section 1.4, or your Member Contract, including anything said in a class, chat, AI Assistant answer, video, ad, social media post, or phone call. Nothing anyone says can add a promise of results. This does not limit any claim for fraud or any right under CROA.</p>
              <p><strong>25.12 Survival.</strong> Sections 5, 7, 10 through 12, and 17 through 25 keep applying after your membership ends, to the extent the law allows.</p>
              <p><strong>25.13 Rights that can&apos;t be waived.</strong> Nothing in these Terms limits any right the law says you can&apos;t give up.</p>
            </div>
          </motion.div>

          {/* Section 26 */}
          <motion.div
            data-section={26}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${gradientHeaderColors[26]} p-5 text-white flex justify-between items-center`}>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <FaEnvelope /> 26. Contact Us
              </h3>
              {readSections.has(26) && (
                <span className="text-xs bg-white/20 py-1 px-2.5 rounded-full flex items-center gap-1 font-medium">
                  <FaCheck className="text-xs" /> Read
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="font-bold text-gray-900 text-base">Imperium Group, doing business as Creditor Academy</p>
              <p>2232 Dell Range Blvd, Suite 303</p>
              <p>Cheyenne, WY 82009, United States</p>
              <p><strong>Email:</strong> <a href="mailto:counselor@creditoracademy.com" className="text-blue-600 underline">counselor@creditoracademy.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+14254009246" className="text-blue-600 underline">(425) 400-9246</a></p>
              <p><strong>Hours:</strong> 9:00 AM–5:00 PM Eastern Time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

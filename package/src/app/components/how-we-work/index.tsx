"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaShieldAlt,
  FaBook,
  FaSearch,
  FaCheck,
  FaQuestionCircle,
  FaBan,
  FaBalanceScale,
  FaHandshake,
  FaUser,
  FaEnvelope,
  FaFileContract,
  FaMoneyBillWave,
  FaDollarSign,
  FaExclamationTriangle
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SectionItem {
  icon: React.ReactElement;
  title: string;
}

export default function HowWeWork() {
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
    { icon: <FaDollarSign />, title: "1. What We Sell & Pricing" },
    { icon: <FaUser />, title: "2. You Do the Work (Self-Help)" },
    { icon: <FaBan />, title: "3. What We Don't Do" },
    { icon: <FaShieldAlt />, title: "4. Your Protections Under CROA" },
    { icon: <FaExclamationTriangle />, title: "5. No Promises About Results" },
    { icon: <FaFileContract />, title: "6. You Can Do This Without Us, For Free" },
    { icon: <FaBan />, title: "7. What We Will Never Do" },
    { icon: <FaHandshake />, title: "8. Private Membership Association (PMA)" },
    { icon: <FaBalanceScale />, title: "9. State Law & Which Document Controls" },
    { icon: <FaEnvelope />, title: "10. Questions, Complaints & Contact" }
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = (readSections.size / sections.length) * 100;

  const gradientHeaderColors = [
    "from-blue-600 to-indigo-600",
    "from-indigo-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-teal-600 to-emerald-600",
    "from-amber-600 to-orange-600",
    "from-blue-500 to-teal-600",
    "from-red-600 to-rose-600",
    "from-slate-700 to-slate-900",
    "from-indigo-600 to-blue-700",
    "from-teal-600 to-blue-600"
  ];

  return (
    <section className="min-h-screen bg-[#f3f4fd] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400/10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-400/10 -translate-x-1/2 pointer-events-none" />

      {/* Top progress bar */}
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
              How Creditor Academy Works (CROA Statement)
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-gray-600">
              Imperium Group, a business trust, doing business as Creditor Academy (&quot;Creditor Academy,&quot; &quot;we,&quot; &quot;us&quot;), offers self-help education for people who want to understand and manage their own credit. You do the work. We teach. Because what we teach is about your credit, we follow the federal Credit Repair Organizations Act (CROA), 15 U.S.C. 1679 et seq., for everything we sell.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 shrink-0 text-base" />
                <div className="text-sm text-blue-800">
                  <p>
                    <strong>Effective date:</strong> November 18, 2026 · <strong>Last updated:</strong> November 18, 2026
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    WCAG 2.2 AA Compliance Target · 15 U.S.C. 1679 et seq. (CROA)
                  </p>
                </div>
              </div>
            </div>

            {/* Seller Entity Notice */}
            <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
              <strong>Seller Entity:</strong> Imperium Group, a business trust, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States. Creditor Academy sells and provides all Offerings. The PMA does not hold any member information. Only Creditor Academy does.
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
                placeholder="Search how we work sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full py-2.5 px-3 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Reading progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Reading progress
              </span>
              <span className="text-xs font-bold text-blue-600">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Sections List in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const originalIndex = sections.findIndex((s) => s.title === section.title);
                const isSelected = activeSection === originalIndex;
                const isRead = readSections.has(originalIndex);

                return (
                  <button
                    key={originalIndex}
                    onClick={() => scrollToSection(originalIndex)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
                      isSelected
                        ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm"
                        : "border-gray-100 bg-gray-50/70 hover:bg-blue-50/70 hover:border-blue-200 text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="text-blue-500 shrink-0 text-base">{section.icon}</span>
                      <span className="truncate">{section.title}</span>
                    </div>
                    {isRead && <FaCheck className="text-green-500 text-xs shrink-0" />}
                  </button>
                );
              })
            ) : (
              <p className="col-span-3 text-center py-4 text-sm text-gray-500">
                No matching sections found for &quot;{searchQuery}&quot;.
              </p>
            )}
          </div>

          <div className="mt-6 p-3 bg-gray-50 rounded-xl flex items-center gap-2 text-xs text-gray-500">
            <FaQuestionCircle className="text-blue-500 shrink-0" />
            <span>
              Use the search bar to find specific topics. Green checkmarks indicate sections you have scrolled past.
            </span>
          </div>
        </motion.div>

        {/* SECTION 1 */}
        <div data-section="0" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[0]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaDollarSign /> 1. What we sell &amp; Pricing
            </h2>
            {readSections.has(0) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-base">Creditor Academy Masterclass</h3>
                <p>
                  A monthly membership. It includes live online classes Monday through Friday at 2:00 PM Pacific Time, plus access to Creditor Academy courses on the Athena LMS learning platform (creditor-academy.lmsathena.com). Live classes are held inside the Athena LMS platform.
                </p>
                <p className="text-blue-700 font-semibold">
                  Price: $69 per month (sale price through December 25, 2026). If you join at $69, you keep $69 per month for as long as you stay a member. Members who join after December 25, 2026 pay the regular price of $147 per month.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 text-base">I Want Remedy Now Course</h3>
                <p>
                  An online course. <strong>Price: $400, one time.</strong> You have access for as long as your Masterclass membership stays active. Cancelling the Masterclass membership also ends access to the I Want Remedy Now course.
                </p>
                <h4 className="font-bold text-gray-900 pt-1">One-on-one Consultations</h4>
                <p>
                  Held on Google Meet. <strong>Price: $200 per hour.</strong> If a consultation is missed, it is not charged, and you can rebook.
                </p>
              </div>
            </div>

            <p>
              <strong>Education-Only AI Assistants:</strong> Included with the Masterclass at no extra charge. They turn on after your 3-business-day cancellation period ends. They teach and give blank sample templates. See <Link href="/ai-notice" className="text-blue-600 underline">Education-Only AI Assistants</Link> and <Link href="/ai-assistants-terms" className="text-blue-600 underline">AI Assistants Terms</Link>.
            </p>
            <div className="p-4 bg-blue-50 rounded-xl text-xs space-y-1 text-blue-900 border-l-4 border-blue-500">
              <p>Prices include any sales tax. Nothing is added at checkout. Charges show on your card statement as <strong>&quot;IMPERIUM GROUP.&quot;</strong> Imperium Group is our legal name, and Creditor Academy is the name we do business under. It is not a separate company.</p>
              <p>We give you 30 days&apos; notice before any price change, and you may cancel before the new price applies. If you joined at $69, your $69 price stays for as long as your membership continues. See <Link href="/pricing-terms" className="underline font-semibold">Pricing Details</Link> for full terms.</p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div data-section="1" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[1]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaUser /> 2. You do the work (Self-Help)
            </h2>
            {readSections.has(1) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>You get your own credit reports and read them.</li>
              <li>You decide whether anything on them looks inaccurate, incomplete, or outdated.</li>
              <li>You decide whether to dispute an item, and you write and approve any letter, in your own words. Our classes, courses, and AI Assistants teach you how and give blank sample templates. They never write your letters for you.</li>
              <li>You send your disputes yourself, by mail or online, to the credit bureaus or companies you choose.</li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div data-section="2" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[2]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBan /> 3. What we don&apos;t do
            </h2>
            {readSections.has(2) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>We don&apos;t dispute anything on your behalf.</li>
              <li>We don&apos;t contact credit bureaus, creditors, or collectors for you.</li>
              <li>We don&apos;t write, send, or submit letters, disputes, or complaints for you. Neither do our AI Assistants.</li>
              <li>We don&apos;t, and our AI Assistants don&apos;t, sign in to your accounts, watch your email, or apply for credit for you.</li>
              <li>We don&apos;t take sign-ups or payments over the phone. Our phone line is for support only.</li>
              <li>We don&apos;t act as your representative or agent.</li>
              <li>We don&apos;t provide legal, tax, or individual financial advice, and we don&apos;t make asset protection or business plans for you.</li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div data-section="3" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[3]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaShieldAlt /> 4. Your protections under CROA
            </h2>
            {readSections.has(3) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
              <p><strong>You get a separate statement of your rights before you sign anything (15 U.S.C. 1679c):</strong> Before you sign up, we give you a separate document called Consumer Credit File Rights Under State and Federal Law. It explains your right to dispute errors yourself, for free.</p>
              <p><strong>You get a written contract (15 U.S.C. 1679d):</strong> Your Member Contract states what you are buying, what it costs, and that we make no guarantees about results.</p>
              <p><strong>You have 3 business days to cancel, for any reason (15 U.S.C. 1679e):</strong> You can cancel without penalty or obligation before midnight of the 3rd business day after you sign. We give you a Notice of Cancellation form. You can also cancel by email or in writing. If you cancel in this period, you get back everything you paid. Services start only after this period ends, and we charge nothing during it.</p>
              <p><strong>You don&apos;t pay until the service has been provided (15 U.S.C. 1679b(b)):</strong> We bill in arrears. For the Masterclass, we charge on each monthly anniversary of your signup date, for the month just completed. You pay for service already provided, never in advance. There are no setup fees, deposits, or upfront payments. Cancelling stops future charges.</p>
              <p><strong>Your rights can&apos;t be waived:</strong> Any waiver of your rights under CROA is void (15 U.S.C. 1679f). No membership document, PMA document, or other document takes away any right you have under consumer protection law. You may always complain to the FTC, the CFPB, or your state attorney general.</p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div data-section="4" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[4]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaExclamationTriangle /> 5. No promises about results
            </h2>
            {readSections.has(4) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p>
              We can&apos;t change what&apos;s in your credit report. Only the credit bureaus and the companies that report information can do that. No one can legally remove accurate, current, and verifiable information from your credit report. We don&apos;t promise that any item will be corrected or removed, or that your score will go up. Many people see no change at all.
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div data-section="5" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[5]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaFileContract /> 6. You can do this without us, for free
            </h2>
            {readSections.has(5) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p>
              You have the right to dispute inaccurate information with the credit bureaus at no cost, under the Fair Credit Reporting Act. You can get free credit reports at AnnualCreditReport.com. Our classes and courses are education, not a requirement.
            </p>
          </div>
        </div>

        {/* SECTION 7 */}
        <div data-section="6" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[6]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBan /> 7. What we will never do
            </h2>
            {readSections.has(6) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p>These commitments follow 15 U.S.C. 1679b(a)(1)–(4) and (b). We will never:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Advise you to make a false or misleading statement to a credit bureau or creditor.</li>
              <li>Suggest that you use a &quot;CPN,&quot; a new identity, or any number other than your own Social Security number to hide your credit history.</li>
              <li>Misrepresent what we sell.</li>
              <li>Charge you before the service has been fully provided.</li>
            </ul>
          </div>
        </div>

        {/* SECTION 8 */}
        <div data-section="7" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[7]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaHandshake /> 8. Private Membership Association (PMA)
            </h2>
            {readSections.has(7) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p>
              Creditor Academy sells and provides all of our Offerings, and your contract for them is with Creditor Academy only. The PMA does not hold any member information. Only Creditor Academy does.
            </p>
            <p>
              No membership document, PMA document, or other document takes away any right you have under consumer protection law.
            </p>
          </div>
        </div>

        {/* SECTION 9 */}
        <div data-section="8" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[8]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBalanceScale /> 9. State law &amp; Which document controls
            </h2>
            {readSections.has(8) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p><strong>State law:</strong> Some states have their own credit services laws. You keep any rights those laws give you.</p>
            <p><strong>Which document controls:</strong> Your Member Contract and the CROA disclosures control first, then the Terms of Service, then our other policies. Any document that gives you a right required by law controls over anything that limits it.</p>
          </div>
        </div>

        {/* SECTION 10 */}
        <div data-section="9" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[9]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaEnvelope /> 10. Questions, complaints &amp; Contact
            </h2>
            {readSections.has(9) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p><strong>Email:</strong> counselor@creditoracademy.com</p>
              <p><strong>Phone:</strong> (425) 400-9246, 9:00 AM–5:00 PM Eastern Time</p>
              <p><strong>Mail:</strong> Imperium Group, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States</p>
            </div>
            <p>
              If we can&apos;t fix a problem, see how disputes are resolved in our <Link href="/terms" className="text-blue-600 underline font-medium">Terms of Service</Link>. You may also contact the Federal Trade Commission (ReportFraud.ftc.gov), the Consumer Financial Protection Bureau (consumerfinance.gov/complaint), or your state attorney general at any time.
            </p>
            <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-900 border border-blue-200">
              <strong>Related pages:</strong> <Link href="/credit-file-rights" className="underline">Consumer Credit File Rights</Link> · <Link href="/member-contract" className="underline">Member Contract</Link> · <Link href="/notice-of-cancellation" className="underline">Notice of Cancellation</Link> · <Link href="/terms" className="underline">Terms of Service</Link> · <Link href="/refund-policy" className="underline">Refund Policy</Link>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-xs text-gray-500">
          <span>Imperium Group DBA Creditor Academy · How Creditor Academy Works (CROA Statement)</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-blue-600 hover:underline font-semibold"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </section>
  );
}

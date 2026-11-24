"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Logo from "../logo";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const close = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", close);
    }

    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const logout = () => {
    localStorage.removeItem("user");
    signOut();
    setUser(null);
    router.push("/services_page/tradeline-exchange");
  };

  // Sleek, reduced font-weight per user request (font-medium instead of bold/thick)
  const navLinkClass = `px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 select-none ${sticky
    ? "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
    : "text-white/95 hover:text-white hover:bg-white/10"
    }`;

  const chevronClass = `transition-transform duration-200 ${sticky ? "text-slate-500" : "text-white/80"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${sticky ? "pt-3 px-4 sm:px-6" : "pt-0 px-0"
        }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${sticky
          ? "max-w-6xl bg-white/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-2xl px-6 py-2 border border-slate-200/70"
          : "max-w-7xl px-4 sm:px-6 py-4 bg-transparent border-none shadow-none"
          }`}
      >
        <nav className="h-14 sm:h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <Logo sticky={sticky} />
          </div>

          {/* DESKTOP MENU - Reduced font weight & working hover dropdowns */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Masterclass */}
            <Link href="/masterclass-membership" className={navLinkClass}>
              Masterclass
            </Link>

            {/* 2. Free Webinar (Renamed from Free Training per user request) */}
            <Link href="/webinar" className={navLinkClass}>
              Free Webinar
            </Link>

            {/* 3. eBooks */}
            <Link href="/ebooks" className={navLinkClass}>
              eBooks
            </Link>

            {/* 4. Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("courses")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "courses" ? null : "courses")
                }
                className={`flex items-center gap-1.5 ${navLinkClass}`}
              >
                Courses
                <ChevronDown
                  size={14}
                  className={`${chevronClass} ${activeDropdown === "courses" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Zero-gap hover bridge */}
              <div
                className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 z-50 ${activeDropdown === "courses"
                  ? "opacity-100 visible pointer-events-auto translate-y-0"
                  : "opacity-0 invisible pointer-events-none -translate-y-1"
                  }`}
              >
                <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5">
                  {[

                    ["Become Private", "/services/course-cataloges/become-private"],
                    ["Operate Private", "/services/course-cataloges/operate-private"],
                    ["Financial Freedom", "/services/course-cataloges/financial-freedom"],
                    ["All Course Catalogs", "/services/course-cataloges"],
                  ].map(([title, url]) => (
                    <Link
                      key={title}
                      href={url}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3.5 py-2.5 rounded-xl text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "services" ? null : "services")
                }
                className={`flex items-center gap-1.5 ${navLinkClass}`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`${chevronClass} ${activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Zero-gap hover bridge */}
              <div
                className={`absolute top-full left-0 pt-2 w-52 transition-all duration-200 z-50 ${activeDropdown === "services"
                  ? "opacity-100 visible pointer-events-auto translate-y-0"
                  : "opacity-0 invisible pointer-events-none -translate-y-1"
                  }`}
              >
                <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-2 flex flex-col gap-0.5">
                  {[
                    ["Website Services", "/services/website-service"],
                    ["Course Catalogs", "/services/course-cataloges"],

                  ].map(([title, url]) => (
                    <Link
                      key={title}
                      href={url}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3.5 py-2.5 rounded-xl text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Blog */}
            <Link href="/Blogs" className={navLinkClass}>
              Blog
            </Link>

            {/* 7. Contact */}
            <Link href="/contact-us" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* RIGHT ACTION BUTTONS: Sign Up (Amber) & Sign In (Indigo) matching Image 8 & 9 */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="https://creditor-academy.lmsathena.com/signup"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-semibold text-sm transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              Sign Up
            </Link>

            <Link
              href="https://creditor-academy.lmsathena.com/login"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold text-sm transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              Sign In
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-1.5"
              aria-label="Open menu"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${sticky
                  ? "bg-slate-100 text-slate-800 border-slate-200"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
              >
                ☰
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <Logo sticky={true} />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-slate-400 hover:text-slate-800 transition"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Navigation Links for Mobile */}
              <div className="flex flex-col gap-1">
                <Link
                  href="/masterclass-membership"
                  onClick={() => setMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                >
                  Masterclass
                </Link>

                <Link
                  href="/webinar"
                  onClick={() => setMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                >
                  Free Webinar
                </Link>

                <Link
                  href="/ebooks"
                  onClick={() => setMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                >
                  eBooks
                </Link>

                {/* Mobile Courses Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === "courses" ? null : "courses"
                      )
                    }
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                  >
                    <span>Courses</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform ${openMobileDropdown === "courses" ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openMobileDropdown === "courses" && (
                    <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-slate-100 ml-4 my-1">
                      {[

                        ["Become Private", "/services/course-cataloges/become-private"],
                        ["Operate Private", "/services/course-cataloges/operate-private"],
                        ["Financial Freedom", "/services/course-cataloges/financial-freedom"],
                        ["All Course Catalogs", "/services/course-cataloges"],

                      ].map(([title, url]) => (
                        <Link
                          key={title}
                          href={url}
                          onClick={() => setMenuOpen(false)}
                          className="px-3 py-2 rounded-lg text-slate-600 font-normal text-sm hover:text-indigo-600 hover:bg-slate-50 transition"
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === "services" ? null : "services"
                      )
                    }
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform ${openMobileDropdown === "services" ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openMobileDropdown === "services" && (
                    <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-slate-100 ml-4 my-1">
                      {[
                        ["Website Services", "/services/website-service"],
                        ["Course Catalogs", "/services/course-cataloges"],

                      ].map(([title, url]) => (
                        <Link
                          key={title}
                          href={url}
                          onClick={() => setMenuOpen(false)}
                          className="px-3 py-2 rounded-lg text-slate-600 font-normal text-sm hover:text-indigo-600 hover:bg-slate-50 transition"
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Blog Link */}
                <Link
                  href="/Blogs"
                  onClick={() => setMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                >
                  Blog
                </Link>

                <Link
                  href="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-800 font-medium text-base hover:bg-slate-50 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="https://creditor-academy.lmsathena.com/signup"
                className="w-full py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-semibold text-sm text-center shadow-sm transition"
              >
                Sign Up
              </Link>
              <Link
                href="https://creditor-academy.lmsathena.com/login"
                className="w-full py-3 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold text-sm text-center shadow-sm transition"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

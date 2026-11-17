"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../logo";
import { User, Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const scroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    const handleDirection = () => {
      const currentY = window.scrollY;
      lastScrollY.current = currentY;
      setShowHeader(true);
    };

    window.addEventListener("scroll", handleDirection);

    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("scroll", handleDirection);
    };
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", close);
    }

    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  const navLinks = [
    { name: "Masterclass", href: "#masterclass" },
    { name: "Free Webinar", href: "#webinar" },
    { name: "Courses", href: "#learning-paths" },
    { name: "Bots", href: "#bots" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${sticky ? "pt-3 px-4 sm:px-6" : "pt-2 px-4 sm:px-6"}`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          sticky
            ? "max-w-6xl bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-200/80 rounded-2xl px-5 sm:px-6"
            : "max-w-7xl bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xs rounded-2xl px-4 sm:px-6"
        }`}
      >
        <nav className={`${sticky ? "h-16" : "h-18"} flex items-center justify-between gap-4`}>
          {/* Previous Branded Logo */}
          <Logo sticky={true} />

          {/* Previous Desktop Navigation UI with updated fields */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-[#026fe2] hover:bg-blue-50/80 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://creditor-academy.lmsathena.com/login"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-700 hover:text-[#026fe2] hover:bg-slate-100 font-bold text-sm transition-all duration-200"
            >
              <User size={16} />
              <span>Sign In</span>
            </Link>

            <Link
              href="https://creditor-academy.lmsathena.com/signup"
              className="hidden sm:inline-flex items-center justify-center bg-[#026fe2] hover:bg-[#025ec0] text-white text-sm font-bold rounded-full px-6 py-2.5 shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all duration-200"
            >
              Join Masterclass
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#026fe2] hover:bg-slate-100 focus:outline-none"
              aria-label="Open menu"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 bg-white text-slate-800">
                <Menu size={20} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-xs animate-fade-in">
          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <Logo sticky={true} />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-1 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-[#026fe2] hover:bg-blue-50/70 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer Action Buttons */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href="https://creditor-academy.lmsathena.com/login"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
              >
                <User size={16} />
                <span>Sign In</span>
              </Link>

              <Link
                href="https://creditor-academy.lmsathena.com/signup"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-colors"
              >
                <span>Join Masterclass</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

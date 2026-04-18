"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏏</span>
            <Link
              href="/"
              className="text-xl font-bold font-nunito tracking-tight"
            >
              <span className="text-white">Cricket</span>
              <span className="text-[#e86c1e]">ExpertPro</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 desktop-nav">
            <Link href="/" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            {isHome ? (
              <>
                <a href="#how-to-play" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  How to Play
                </a>
              </>
            ) : (
              <Link href="/#how-to-play" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                How to Play
              </Link>
            )}
            <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex">
            {isHome ? (
              <a href="#game" className="bg-gradient-to-r from-[#f97316] to-[#e86c1e] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(232,108,30,0.4)] transition-all hover:-translate-y-0.5">
                Play Now
              </a>
            ) : (
              <Link href="/#game" className="bg-gradient-to-r from-[#f97316] to-[#e86c1e] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(232,108,30,0.4)] transition-all hover:-translate-y-0.5">
                Play Now
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-white/5 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md">
              Home
            </Link>
            {isHome ? (
              <a href="#how-to-play" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md">
                How to Play
              </a>
            ) : (
              <Link href="/#how-to-play" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md">
                How to Play
              </Link>
            )}
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md">
              Contact
            </Link>
            <div className="pt-4 px-3">
              {isHome ? (
                <a href="#game" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-[#f97316] to-[#e86c1e] text-white px-6 py-3 rounded-full font-bold">
                  Play Now
                </a>
              ) : (
                <Link href="/#game" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-[#f97316] to-[#e86c1e] text-white px-6 py-3 rounded-full font-bold">
                  Play Now
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

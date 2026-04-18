"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cricketexpertpro_cookie_consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cricketexpertpro_cookie_consent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[40] bg-[#1a1a1a] border-t border-white/10 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/80">
          We use cookies and localStorage (like your best score) to ensure you get the best experience on our arcade site. 
          By continuing to play, you agree to our{" "}
          <Link href="/cookies" className="text-[#e86c1e] underline hover:text-[#f97316]">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-[#e86c1e] underline hover:text-[#f97316]">
            Privacy Policy
          </Link>.
        </div>
        <button
          onClick={acceptCookies}
          className="shrink-0 bg-[#e86c1e] hover:bg-[#f97316] text-white px-6 py-2 rounded-lg font-bold transition-colors w-full sm:w-auto"
        >
          Got it, let&apos;s play!
        </button>
      </div>
    </div>
  );
}

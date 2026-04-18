"use client";

import { GeoLocale } from "@/lib/geo-content";

interface CTASectionProps {
  locale: GeoLocale;
}

export default function CTASection({ locale }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] relative flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl rounded-[32px] bg-gradient-to-br from-[#e86c1e] to-[#c2410c] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(232,108,30,0.2)]">
        
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black font-nunito text-white mb-6 leading-tight">
            {locale.ctaHeadline}
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            {locale.ctaSubline}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#game" 
              className="bg-white text-[#e86c1e] px-8 py-4 rounded-xl font-black text-lg hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Play Cricket ExpertPro
            </a>
            <a 
              href="/about" 
              className="bg-black/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/30 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-white/70 font-bold tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span> 4.9/5 Average Rating
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎮</span> 100% Free
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔒</span> Secure Local Save
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

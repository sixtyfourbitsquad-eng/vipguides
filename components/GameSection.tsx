"use client";

import dynamic from "next/dynamic";

const CricketGame = dynamic(() => import("./CricketGame"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-[#121212] flex flex-col items-center justify-center animate-pulse border border-white/10 rounded-b-xl">
      <div className="w-12 h-12 border-4 border-[#e86c1e]/30 border-t-[#e86c1e] rounded-full animate-spin mb-4"></div>
      <p className="text-white/60 font-bold tracking-widest uppercase text-sm">Loading Cricket ExpertPro...</p>
    </div>
  ),
});

export default function GameSection() {
  return (
    <section id="game" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#e86c1e]/10 border border-[#e86c1e]/30 rounded-full text-[#e86c1e] text-xs font-bold tracking-wider uppercase mb-4">
            PLAY NOW — FREE
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-nunito mb-8">
            Cricket <span className="text-[#e86c1e]">ExpertPro</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider text-white/50">
            <span className="bg-white/5 px-4 py-2 rounded border border-white/10">Browser Game</span>
            <span className="bg-white/5 px-4 py-2 rounded border border-white/10">Local Saves</span>
            <span className="bg-white/5 px-4 py-2 rounded border border-white/10">No Registration</span>
            <span className="bg-white/5 px-4 py-2 rounded border border-white/10">Keyboard / Touch</span>
          </div>
        </div>

        <div className="relative rounded-[16px] overflow-hidden border border-white/5 bg-[#121212] flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          {/* Fake Browser Chrome */}
          <div className="h-12 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-4 justify-between">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            
            <div className="bg-[#0a0a0a] text-white/40 text-xs px-24 py-1.5 rounded-md border border-white/5 hidden sm:block truncate text-center max-w-md w-full">
              Cricket ExpertPro — browser game
            </div>
            
            <div className="shrink-0 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Instant Play</span>
            </div>
          </div>

          {/* The Game */}
          <div className="relative w-full aspect-[4/3] md:aspect-video bg-[#0a0a0a]">
            <CricketGame />
          </div>
        </div>

      </div>
    </section>
  );
}

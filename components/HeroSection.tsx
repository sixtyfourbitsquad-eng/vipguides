"use client";

import { useEffect, useRef } from "react";
import { GeoLocale } from "@/lib/geo-content";

interface HeroSectionProps {
  locale: GeoLocale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let ballX = 0;
    let ballY = 0;
    let time = 0;

    const render = () => {
      // Clear
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw "pitch"
      ctx.fillStyle = "#2a3b2a";
      ctx.fillRect(50, canvas.height - 150, canvas.width - 100, 150);

      // Pitch lines
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(100, canvas.height - 150);
      ctx.lineTo(100, canvas.height);
      ctx.moveTo(canvas.width - 100, canvas.height - 150);
      ctx.lineTo(canvas.width - 100, canvas.height);
      ctx.stroke();

      // Batsman placeholder
      ctx.fillStyle = "#e86c1e";
      ctx.fillRect(110, canvas.height - 100, 20, 60);
      // Bat
      ctx.fillStyle = "#fff";
      ctx.save();
      ctx.translate(120, canvas.height - 60);
      ctx.rotate(Math.sin(time * 0.05) * 0.5 - 0.5);
      ctx.fillRect(0, -30, 5, 40);
      ctx.restore();

      // Ball path
      ballX = canvas.width - 120 - ((time * 4) % (canvas.width - 200));
      ballY = canvas.height - 80 - Math.abs(Math.sin(time * 0.1) * 30);
      
      // Draw Ball
      ctx.fillStyle = "#ff4444";
      ctx.beginPath();
      ctx.arc(ballX, ballY, 5, 0, Math.PI * 2);
      ctx.fill();

      // HUD overlay
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "bold 16px Arial";
      ctx.fillText("SCORE: 247", 20, 30);
      
      // Watermark
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("DEMO PREVIEW", canvas.width / 2, canvas.height / 2);
      ctx.textAlign = "left";

      time++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#e86c1e] rounded-full blur-[150px] opacity-[0.07] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#e86c1e] text-sm font-bold tracking-wide uppercase mb-6">
              {locale.heroBadge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-nunito leading-tight mb-6">
              The Ultimate <br/>
              <span className="text-[#e86c1e] relative inline-block">
                Cricket
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#e86c1e]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
              <br className="hidden md:block"/> ExpertPro!
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              {locale.heroSubline}
            </p>

            <ul className="flex flex-col sm:flex-row gap-4 mb-10 text-sm text-white/80 font-semibold">
              {locale.trustStats.map((stat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#e86c1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {stat}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#game" 
                className="bg-gradient-to-r from-[#f97316] to-[#e86c1e] text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:shadow-[0_0_20px_rgba(232,108,30,0.4)] transition-all hover:-translate-y-1"
              >
                Play Now — Free
              </a>
              <a 
                href="#how-to-play" 
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white/10 transition-colors"
              >
                How to Play
              </a>
            </div>
          </div>

          {/* Right Column: Fake Browser Demo */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e86c1e]/20 to-transparent rounded-[20px] blur-xl opacity-50"></div>
            
            <div className="relative rounded-[16px] overflow-hidden border border-white/10 bg-[#121212] flex flex-col shadow-2xl">
              {/* Browser Chrome */}
              <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-grow flex justify-center">
                  <div className="bg-[#0a0a0a] text-white/40 text-xs px-24 py-1 rounded-md border border-white/5">
                    Cricket ExpertPro — demo
                  </div>
                </div>
              </div>

              {/* Demo Canvas wrapper */}
              <div className="relative aspect-video bg-[#0a0a0a]">
                <canvas 
                  ref={canvasRef} 
                  width={600} 
                  height={337} 
                  className="w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-1 rounded border border-orange-500/30">
                  Demo animation
                </div>
              </div>
            </div>

            <p className="text-center text-white/40 text-sm mt-4 tracking-wide">
              Animated preview — scroll down to play
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

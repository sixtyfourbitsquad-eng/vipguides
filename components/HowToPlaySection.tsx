export default function HowToPlaySection() {
  const steps = [
    { num: "01", title: "Wait for the Pitch", desc: "Watch the bowler's hand. The ball follows a specific trajectory marked on the pitch." },
    { num: "02", title: "Time Your Swing", desc: "Wait until the ball reaches the hitting zone. The closer to perfectly timed, the higher the score." },
    { num: "03", title: "Score Runs", desc: "Perfect timing equals a 6! Early or late swings get 4, 2, or 0. Missing loses a wicket." },
    { num: "04", title: "Build Combos", desc: "Don&apos;t miss! Consecutive hits build a multiplier that supercharges your total score." },
  ];

  return (
    <section id="how-to-play" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-nunito mb-6">
            How to <span className="text-[#e86c1e]">Play</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            It takes seconds to learn but a lifetime to master. Here is your roadmap to becoming a Cricket ExpertPro.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-white/5 absolute -top-6 -left-4 font-nunito group-hover:text-[#e86c1e]/10 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10 glass-panel p-6 h-full flex flex-col pt-8">
                <div className="w-10 h-10 rounded-full bg-[#e86c1e] text-white flex items-center justify-center font-bold mb-4 shrink-0 shadow-[0_0_15px_rgba(232,108,30,0.4)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold font-nunito mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed flex-grow">{step.desc}</p>
              </div>
              
              {/* Connector dot (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-white/10 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Controls strip */}
        <div className="glass-panel p-8 max-w-4xl mx-auto text-center mb-12 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
          <h3 className="text-[#e86c1e] font-bold text-sm tracking-wider uppercase mb-6">Controls</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 rounded-lg border-2 border-white/20 flex items-center justify-center text-xl font-bold mb-3 bg-white/5 shadow-inner">
                Space
              </div>
              <span className="text-sm text-white/70 font-medium">Desktop</span>
            </div>
            <div className="text-white/20 font-bold text-xl hidden sm:block">OR</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-2xl mb-3 bg-white/5 shadow-inner">
                👆
              </div>
              <span className="text-sm text-white/70 font-medium">Mobile / Tap</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#game" 
            className="inline-block bg-white text-[#0a0a0a] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e86c1e] hover:text-white transition-all hover:-translate-y-1"
          >
            I&apos;m ready, let&apos;s play
          </a>
        </div>

      </div>
    </section>
  );
}

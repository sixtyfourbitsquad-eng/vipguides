export default function FeaturesSection() {
  const features = [
    { title: "Precision Timing", desc: "Master the exact millisecond to hit boundaries. Your reflexes rule the pitch.", icon: "⏱️" },
    { title: "Massive Combos", desc: "Chain perfect hits together to multiply your score astronomically.", icon: "🔥" },
    { title: "Infinite Levels", desc: "The bowler never tires. How long can you survive at the crease?", icon: "📈" },
    { title: "Local High Scores", desc: "Compete against yourself. Your best scores are saved securely in your browser.", icon: "🏆" },
    { title: "Mobile Optimized", desc: "Play seamlessly on your phone, tablet, or desktop with perfect touch controls.", icon: "📱" },
    { title: "Instant Play", desc: "No downloads, no registration, no waiting. Jump straight into the action.", icon: "⚡" },
  ];

  return (
    <section id="features" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-nunito mb-6">
            Everything you need for the <span className="text-[#e86c1e]">perfect innings</span>
          </h2>
          <p className="text-lg text-white/60">
            Cricket ExpertPro is built for speed, performance, and pure arcade fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hero-grid">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_30px_rgba(232,108,30,0.1)] hover:border-[#e86c1e]/30 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#e86c1e]/10 group-hover:scale-110 transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-nunito text-white mb-3 group-hover:text-[#e86c1e] transition-colors">{f.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

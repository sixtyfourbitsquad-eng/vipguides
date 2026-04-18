export default function ExperienceSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e86c1e]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-black font-nunito mb-6 leading-tight">
              An Authentic Arcade <br/>
              <span className="text-[#e86c1e]">Cricket Experience</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We&apos;ve stripped away the complex rules to focus on the pure joy of batting. Perfect your stance, watch the ball trajectory, and swing at the exact right millisecond.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Smooth 60FPS canvas rendering",
                "Physics-based ball trajectories",
                "Adaptive difficulty scaling",
                "Rewarding visual feedback and particle effects"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#e86c1e]/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#e86c1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-[#e86c1e] mb-1">3</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-wider">Wickets</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#e86c1e] mb-1">∞</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-wider">Combos</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#e86c1e] mb-1">6</div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-wider">Max Runs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-6">
              <div className="glass-panel p-6 flex items-center gap-6 translate-x-0 lg:-translate-x-12">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center text-3xl shrink-0 border border-green-500/30">
                  🏏
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">The Perfect Hit</h3>
                  <p className="text-sm text-white/50 leading-relaxed">Wait for the exact moment the ball crosses the crease to hit a maximum 6 runs.</p>
                </div>
              </div>

              <div className="glass-panel p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center text-3xl shrink-0 border border-orange-500/30">
                  🔥
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">Combo Multipliers</h3>
                  <p className="text-sm text-white/50 leading-relaxed">String together consecutive hits without missing to multiply your score.</p>
                </div>
              </div>

              <div className="glass-panel p-6 flex items-center gap-6 translate-x-0 lg:-translate-x-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center text-3xl shrink-0 border border-blue-500/30">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-white">Adaptive Speed</h3>
                  <p className="text-sm text-white/50 leading-relaxed">As your score increases, the bowler gets faster. Test the limits of your reaction time.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

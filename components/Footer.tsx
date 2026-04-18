import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏏</span>
              <div className="text-xl font-bold font-nunito tracking-tight">
                <span className="text-white">Cricket</span>
                <span className="text-[#e86c1e]">ExpertPro</span>
              </div>
            </div>
            <p className="text-sm text-white/50 mb-6">
              The premier free browser-based arcade cricket game. Test your timing, set high scores, 
              and experience the thrill of the pitch instantly.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e86c1e] transition-colors cursor-pointer">
                <span className="text-xs">𝕏</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e86c1e] transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">PLAY</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/#game" className="hover:text-[#e86c1e] transition-colors">Play Now</Link></li>
              <li><Link href="/#how-to-play" className="hover:text-[#e86c1e] transition-colors">How to Play</Link></li>
              <li><Link href="/#game" className="hover:text-[#e86c1e] transition-colors">Your best score</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">INFO</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-[#e86c1e] transition-colors">About Us</Link></li>
              <li><Link href="/#features" className="hover:text-[#e86c1e] transition-colors">Features</Link></li>
              <li><Link href="/contact" className="hover:text-[#e86c1e] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">LEGAL</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/privacy-policy" className="hover:text-[#e86c1e] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-[#e86c1e] transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#e86c1e] transition-colors">Disclaimer</Link></li>
              <li><Link href="/cookies" className="hover:text-[#e86c1e] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            For entertainment purposes only. Not affiliated with any official cricket leagues.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Footer from "./Footer";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  updatedAt?: string;
}

export default function LegalLayout({ children, title, updatedAt }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Mini Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏏</span>
            <span className="font-bold font-nunito tracking-tight text-white hidden sm:inline">
              Cricket<span className="text-[#e86c1e]">ExpertPro</span>
            </span>
          </Link>
          <Link 
            href="/#game" 
            className="bg-[#e86c1e] hover:bg-[#f97316] text-white px-5 py-2 rounded-full font-bold text-sm transition-colors"
          >
            Play Now
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-[#e86c1e] uppercase tracking-wider font-bold text-xs mb-2">Legal Information</div>
            <h1 className="text-3xl md:text-5xl font-bold font-nunito mb-4">{title}</h1>
            {updatedAt && <p className="text-white/40 text-sm">Last updated: {updatedAt}</p>}
          </div>

          <div className="prose prose-invert prose-orange max-w-none">
            <style dangerouslySetInnerHTML={{ __html: `
              .prose-orange a { color: #e86c1e; text-decoration: underline; }
              .prose-orange a:hover { color: #f97316; }
              .prose-orange h2 { color: white; margin-top: 2em; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5em; }
              .prose-orange h3 { color: white; margin-top: 1.5em; }
              .prose-orange p { color: rgba(255,255,255,0.8); line-height: 1.7; margin-bottom: 1.5em; }
              .prose-orange ul { color: rgba(255,255,255,0.8); list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.5em; }
              .prose-orange li { margin-bottom: 0.5em; }
              .prose-orange strong { color: white; }
            ` }} />
            {children}
          </div>
        </div>
      </main>

      {/* Mini Legal Footer links */}
      <div className="bg-[#1a1a1a] py-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/privacy-policy" className="hover:text-[#e86c1e]">Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-[#e86c1e]">Terms of Use</Link>
          <Link href="/disclaimer" className="hover:text-[#e86c1e]">Disclaimer</Link>
          <Link href="/cookies" className="hover:text-[#e86c1e]">Cookie Policy</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

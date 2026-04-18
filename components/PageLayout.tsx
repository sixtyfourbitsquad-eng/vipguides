
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  badge: string;
}

export default function PageLayout({ children, title, badge }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#e86c1e] text-xs font-bold tracking-wider uppercase mb-4">
              {badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-nunito mb-6">{title}</h1>
          </div>

          <div className="prose prose-invert prose-orange max-w-none glass-panel p-8 md:p-12">
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

      <Footer />
    </div>
  );
}

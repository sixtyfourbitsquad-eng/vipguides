import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-black font-nunito text-white/5 mb-4 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl text-[#e86c1e]">
            Out!
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-white/60 mb-10 max-w-md">
          Looks like you hit the ball out of the stadium. We can't find the page you're looking for.
        </p>
        <Link 
          href="/" 
          className="bg-[#e86c1e] hover:bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

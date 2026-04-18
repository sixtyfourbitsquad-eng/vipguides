import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cricketexpertpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Cricket ExpertPro",
    default: "Cricket ExpertPro | Free Browser Cricket Game",
  },
  description: "Play Cricket ExpertPro, the ultimate free browser-based cricket batting timing game. No downloads, no registration, just pure cricket action.",
  keywords: ["cricket", "game", "browser game", "batting", "timing game", "cricket expertpro"],
  robots: "index, follow",
  openGraph: {
    title: "Cricket ExpertPro | Free Browser Cricket Game",
    description: "Play Cricket ExpertPro, the ultimate free browser-based cricket batting timing game.",
    url: SITE_URL,
    siteName: "Cricket ExpertPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket ExpertPro",
    description: "Play the ultimate free browser-based cricket batting timing game.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cricket ExpertPro",
    "url": SITE_URL,
    "description": "Free browser-based cricket batting timing game.",
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏏</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${nunito.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}

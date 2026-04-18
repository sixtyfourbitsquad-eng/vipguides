import { getGeo } from "@/lib/geo";
import { getLocaleForGeo } from "@/lib/geo-content";

import MobileBanner from "@/components/MobileBanner";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExperienceSection from "@/components/ExperienceSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import GameSection from "@/components/GameSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  const geo = getGeo();
  const locale = getLocaleForGeo(geo);

  return (
    <main data-geo-country={geo.country} data-geo-region={geo.region}>
      <MobileBanner />
      <CookieConsent />
      <Navbar />
      
      <HeroSection locale={locale} />
      <FeaturesSection />
      <ExperienceSection />
      <HowToPlaySection />
      <GameSection />
      <CTASection locale={locale} />
      
      <Footer />
    </main>
  );
}

export type GeoLocale = {
  regionKey: string;
  heroBadge: string;
  heroSubline: string;
  trustStats: string[];
  ctaHeadline: string;
  ctaSubline: string;
};

const locales: Record<string, GeoLocale> = {
  "south-asia": {
    regionKey: "south-asia",
    heroBadge: "The #1 Browser Cricket Game",
    heroSubline: "Experience the thrill of the pitch directly in your browser. Master your timing, build combos, and become the ultimate Cricket ExpertPro.",
    trustStats: ["Free to Play forever", "No annoying downloads", "Instant browser access"],
    ctaHeadline: "Ready to step up to the crease?",
    ctaSubline: "Join thousands of players already mastering their timing.",
  },
  "uk-ie": {
    regionKey: "uk-ie",
    heroBadge: "The Ultimate Cricket Timing Game",
    heroSubline: "Test your reflexes and timing in this authentic cricket batting experience. Play free, right here in your browser.",
    trustStats: ["100% Free Entertainment", "Browser-based action", "No installation required"],
    ctaHeadline: "Ready to face the bowler?",
    ctaSubline: "Start playing Cricket ExpertPro instantly.",
  },
  "americas": {
    regionKey: "americas",
    heroBadge: "Premier Browser Cricket Experience",
    heroSubline: "Discover the world of cricket through an exciting arcade timing game. Hit boundaries without any downloads.",
    trustStats: ["Free to Play arcade", "Play on any device", "No registration needed"],
    ctaHeadline: "Step up to bat!",
    ctaSubline: "Experience the global phenomenon of cricket batting.",
  },
  "oceania": {
    regionKey: "oceania",
    heroBadge: "Ultimate Browser Cricket",
    heroSubline: "Smash boundaries and build massive combos in the best free cricket batting game for your browser.",
    trustStats: ["100% Free to Play", "Instant Action", "No downloads needed"],
    ctaHeadline: "Ready to hit a six?",
    ctaSubline: "Jump into the action and set your high score.",
  },
  "mena": {
    regionKey: "mena",
    heroBadge: "The Elite Cricket Experience",
    heroSubline: "Master the art of batting in this premium free-to-play browser game. Perfect your timing and claim your high score.",
    trustStats: ["Completely Free", "Play instantly", "Premium web experience"],
    ctaHeadline: "Start your innings now",
    ctaSubline: "The bowler is waiting. Are you ready?",
  },
  "global": {
    regionKey: "global",
    heroBadge: "The Premium Cricket Browser Game",
    heroSubline: "Experience an intense timing-based arcade cricket game right in your browser. No downloads, just pure action.",
    trustStats: ["Free Arcade Game", "No Downloads", "Play Anywhere"],
    ctaHeadline: "Ready to play?",
    ctaSubline: "Jump into Cricket ExpertPro for free.",
  }
};

export function getLocaleForGeo({ country }: { country: string }): GeoLocale {
  const code = country.toUpperCase();
  
  if (["IN", "PK", "BD", "LK", "NP", "AF"].includes(code)) {
    return locales["south-asia"];
  }
  if (["GB", "IE"].includes(code)) {
    return locales["uk-ie"];
  }
  if (["US", "CA", "BR", "AR", "MX"].includes(code)) {
    return locales["americas"];
  }
  if (["AU", "NZ"].includes(code)) {
    return locales["oceania"];
  }
  if (["AE", "SA", "QA", "OM", "KW", "BH"].includes(code)) {
    return locales["mena"];
  }
  if (["DE", "FR", "IT", "ES", "NL"].includes(code)) {
    return locales["global"]; // could be mapped to europe if distinct needed
  }
  
  return locales["global"];
}

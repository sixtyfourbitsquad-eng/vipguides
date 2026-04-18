import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1a1a1a",
        accent: {
          DEFAULT: "#e86c1e",
          bright: "#f97316",
        },
        border: "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "accent-glow": "0 0 20px rgba(232, 108, 30, 0.3)",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
export default config;

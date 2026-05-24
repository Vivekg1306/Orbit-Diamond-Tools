import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#0a2540",
        navyDeep: "#061a30",
        steel: "#2563eb",
        steelDark: "#1d4ed8",
        sky: "#e0ecff",
        slate50: "#f8fafc",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
        slate500: "#64748b",
        slate700: "#334155",
        // legacy tokens kept so unchanged components still compile
        ink: "#0a2540",
        midnight: "#0a2540",
        cream: "#0a2540",
        gold: "#2563eb",
        goldMuted: "#1d4ed8",
        brand: "#0a2540",
        accent: "#2563eb",
        slateLine: "rgba(10,37,64,0.10)",
      },
      fontFamily: {
        sans: [
          "'Inter'",
          "'Segoe UI'",
          "system-ui",
          "-apple-system",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        display: [
          "'Inter'",
          "'Segoe UI'",
          "system-ui",
          "-apple-system",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        spinSlow: "spinSlow 30s linear infinite",
        marquee: "marquee 30s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

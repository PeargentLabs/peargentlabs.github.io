import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peargent: {
          green: "#98c11e", // Pear-like green from the image
          "green-dim": "#6f8f14",
          "green-light": "#b8e32b",
          dark: "#0a0a0a",
          card: "rgba(255, 255, 255, 0.03)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-serif)"],
        instrument: ["var(--font-instrument)"],
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle, #333 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;

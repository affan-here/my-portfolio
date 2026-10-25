import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#08080a",
        "dark-surface": "#111215",
        "dark-surface-card": "#131418",
        "dark-surface-hover": "#16181d",
        "dark-border": "#22252c",
        "dark-border-light": "#2e323b",
        "crimson-accent": "#ff2b4e",
        "crimson-hover": "#ff1438",
        "crimson-dark": "#850d21",
        "crimson-glow": "rgba(255, 43, 78, 0.22)",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

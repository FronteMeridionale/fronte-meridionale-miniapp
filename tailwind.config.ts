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
        background: "#0B0B0F",
        "electric-blue": "#2563EB",
        "dark-purple": "#7C3AED",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.12) 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.37)",
        glow: "0 0 24px rgba(37,99,235,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

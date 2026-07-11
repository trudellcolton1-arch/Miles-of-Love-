import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4fb",
          100: "#d9e6f5",
          200: "#b3cdea",
          300: "#84acd9",
          400: "#4f83c2",
          500: "#2d61a3",
          600: "#1e4a85",
          700: "#173a6a",
          800: "#122e54",
          900: "#0d2340",
          950: "#081830",
        },
        teal: {
          50: "#effaf8",
          100: "#d4f1ec",
          200: "#a9e3db",
          300: "#77cec3",
          400: "#4bb4a8",
          500: "#33998e",
          600: "#277b73",
          700: "#23635d",
          800: "#204f4b",
          900: "#1e423f",
        },
        sky: {
          50: "#f1f8fd",
          100: "#e0f0fa",
          200: "#bce0f4",
          300: "#7ec4e8",
          400: "#48a8d8",
          500: "#228cc4",
          600: "#1470a6",
          700: "#125a86",
          800: "#134c6f",
          900: "#15405d",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d7",
          200: "#f4dfae",
          300: "#edc87b",
          400: "#e9b44c",
          500: "#e19a2b",
          600: "#c87e21",
          700: "#a6611e",
          800: "#874d1f",
          900: "#6f401d",
        },
        cream: "#faf8f4",
        ink: "#2e3a48",
        moss: {
          100: "#e2f3e8",
          300: "#a5d9b8",
          500: "#6fbf8f",
          700: "#3f8f63",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(13, 35, 64, 0.10)",
        lift: "0 16px 40px -12px rgba(13, 35, 64, 0.18)",
        glow: "0 0 48px -8px rgba(233, 180, 76, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        paper: "#fbfaf6",
        mist: "#edf5f1",
        oxford: "#123c69",
        teal: "#1b7666",
        moss: "#6d8463"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(18, 60, 105, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

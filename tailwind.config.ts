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
        primary: {
          DEFAULT: '#000000', // Hitam - kekuatan industri
        },
        accent: {
          DEFAULT: '#2E8B57', // Sea Green - ketelitian & kualitas authentic
          light: '#3FA368',
          dark: '#256B45',
        },
      },
    },
  },
  plugins: [],
};

export default config;

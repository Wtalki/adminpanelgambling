import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"] ,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe7ff",
          200: "#bcd3ff",
          300: "#8ab6ff",
          400: "#5393ff",
          500: "#2d6cff",
          600: "#1d54f4",
          700: "#1742d2",
          800: "#1937a9",
          900: "#1a3285"
        }
      }
    }
  },
  plugins: [forms, typography]
};

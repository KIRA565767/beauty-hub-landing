/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#161618",
        concrete: "#222224",
        dusty: "#EAEAEA",
        orange: "#C84B31",
        copper: "#B87333",
        mineral: "#8E8E93",
      },
      fontFamily: {
        display: ["Anton", "Space Grotesk", "Impact", "Arial Narrow", "sans-serif"],
        sans: ["Inter", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        editorial: "0 28px 90px rgba(12, 12, 13, 0.42)",
      },
    },
  },
  plugins: [],
};

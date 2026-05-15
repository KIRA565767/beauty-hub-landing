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
        terminal: "0 28px 120px rgba(22, 22, 24, 0.52)",
      },
    },
  },
  plugins: [],
};

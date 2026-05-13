/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        oxblood: "#160604",
        "oxblood-soft": "#1E0A07",
        amber: "#F39A1F",
        "amber-soft": "#FFAA2A",
        cream: "#F3E8C9",
        "cream-soft": "#F6EEDB",
        archive: "#E9E2BC",
        "dark-text": "#1B120E",
        burnt: "#7A2508",
        brown: "#3A180D",
        rust: "#6C2A0D",
        "muted-orange": "#B86208",
        stone: "#E6D8CA",
        sage: "#7F8F7A",
      },
      fontFamily: {
        serif: ["Georgia", "ui-serif", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

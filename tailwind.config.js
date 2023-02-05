module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        merriweather: ["var(--font-merriweather)"],
      },

      colors: {
        "light-brown": "#704010",
        "dark-brown": "#21201F",
        "dark-alt": "#2E2C2A",
        "pearl-white": "#FFFBF8",
        "cream-white": "#FDF1E7",
        "gold-yellow": "#DE9A58",
      },
    },
  },
  plugins: [],
};

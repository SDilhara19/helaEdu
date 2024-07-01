export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0A6CF5",
        yellow: "#F5A711",
        white: "#FFFFFF",
        black: "#000000",
      },
      screens: {
        mw: { max: "800px" },
      },
    },
  },

  plugins: [require("daisyui")],

  darkMode: "class", // Enable dark mode support
};

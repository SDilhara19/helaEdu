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
    },
  },

  plugins: [
    require("daisyui"),

    // require("nightwind")
  ],

  darkMode: "class", // Enable dark mode support
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue" : "#0A6CF5",
        'yellow' : '#F5A711',
        'white' : '#FFFFFF',
        'black' : '#1F2937'
      },
      fontSize: {
        'header1': '2.5rem', // 40px
        'header2': '3rem', // 48px
        'header3': '2.5rem', // 40px
        'header4': '1.75rem', // 28px
        'text': '2.5rem', // 40px
        '1': '1.25rem'
      },
    },
  },

  plugins: [require("daisyui")],
};

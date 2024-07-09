/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      flex: {
        'my-1' : '1 0 auto',
        'my-0' : '0 0 auto'
      }
    },
    colors: {
      bg: "#FBF8EC",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      fblack: "#414141",
      green: "#70C05B",
      grey: "#606060",
      orange: "#FF6633",
      orange2: "#FF5520",
      silver: "#c1baba",
      "bubble-gum": "#ff77e9",
      button: "#F3F2F1",
      sr: "#F3F2F1",
      footer: "#F9F4E2"
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
}

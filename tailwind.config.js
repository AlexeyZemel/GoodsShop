/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      bg: "#FBF8EC",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      green: "#70C05B",
      grey: "#606060",
      orange: "#FF6633",
      orange2: "#FF5520",
      silver: "#414141",
      "bubble-gum": "#ff77e9",
      button: "#F3F2F1",
      sr: "#F3F2F1"
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
}

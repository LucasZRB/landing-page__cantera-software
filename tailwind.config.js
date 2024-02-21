/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_green: "#48B95D",
        green_hover: "#98e594",
        green_focus: "#008a5e",
        pure_white: "#ffffff",
        white_hover: "#e9f2e9",
        section1: "#EDEBF0",
        section2: "#E9F2E9",
        section3: "#F7F7F7",
        blue_title: "#00425E",
        black_text: "#000000"
      },
    },
    fontFamily: {
      'montserrat': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [], 
}

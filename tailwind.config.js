/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Yellow:"#FEE400",
        Black:"#222021",
        Grey:"#D6D7DD",
        Smoke_White:"#F8F8F8",
        White:"#FEFEFE"
    },
    fontFamily: {
      libre: ['"Libre Baskerville"', 'serif'], // تعريف الخط الأول
      Montserrat: ['Montserrat', 'sans-serif'],     // تعريف الخط الثاني
    },
  },
  plugins: [],
}}
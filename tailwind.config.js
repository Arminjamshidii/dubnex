/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlack:'#131414',
      },
      width:{
        customW1440:"1440px"
      },
      fontFamily: {
        iransans: ['iransans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}



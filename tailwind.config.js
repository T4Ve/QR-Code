/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Outfit','sans-serif']
      },
      colors:{
        LightRed: 'hsl(0, 100%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        LightGray: 'hsl(212, 45%, 89%)',
        GrayishBlue: 'hsl(220, 15%, 55%)',
        DarkBlue: 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}

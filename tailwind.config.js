/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      sm: ['1.2rem', { lineHeight: '1.7rem' }],
      '4.5xl': ['2.6rem', { lineHeight: '2.8rem' }],
    },
    extend: {
      backgroundImage: {
        'schoolImage':
          "linear-gradient(to bottom, rgba(255,255,255,0) 95%, rgba(255,255,255,1)), url('/SchoolFrontweb.jpg')",
      },
      colors: {
        'fadedyellow': '#E7B22E',
        'darkgray': '#413E38',
        'offwhite': '#E9E5D7',
        'midgray': '#A19694',
        'intergray': '#5D5852',
        'royalpurple': '#6143B7'
      },
      fontWeight: {
        'incrediblybold': '1000'
      },
    },
  },
  plugins: [],
}

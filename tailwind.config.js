/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'schoolImage':
          "linear-gradient(to bottom, rgba(255,255,255,0) 95%, rgba(255,255,255,1)), url('/SchoolFrontweb.png')",
      },
    },
  },
  plugins: [],
}

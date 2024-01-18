/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#FFA200',
        primaryGray: '#CDCDCD',
        primaryGreen: '#1FCD64',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        landing: ['Cinzel', 'serif'],
        cursived: ['Great Vibes','cursive'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerBackground': "url('../images/BG5.jpg')",
      },
      height: {
        '1xl': '30rem',
        '2xl': '35rem',
      }
    },
  },
  plugins: [],
}


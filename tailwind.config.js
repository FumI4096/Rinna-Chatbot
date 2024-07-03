/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBackgroundOne': "url('../images/BG1.jpg')",
        'heroBackgroundTwo': "url('../images/BG5.jpg')"
      },
      height: {
        '1xl': '30rem',
        '2xl': '35rem',
      },
      fontSize: {
        'base': '1rem',
      },
      backgroundColor: {
        'gray1': 'rgb(166,166,166)',
        'violet-custom-1': '#383838',
        'gray-custom-1': '#181818'
      }

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBackgroundOne': "url('../images/BG1.jpg')",
        'heroBackgroundTwo': "url('../images/BG5.jpg')",
      },
      height: {
        '1xl': '30rem',
        '2xl': '35rem',
      },
      fontSize: {
        'base': '1rem',
        'custom-size-1': '1.6rem',
      },
      backgroundColor: {
        'gray1': 'rgb(166,166,166)',
        'violet-custom-1': '#383838',
        'gray-custom-1': '#181818',
      },
      fontFamily: {
        'anton': ["Anton SC", "sans-serif"],
        'oxygen': ["oxygen", "sans-serif"],
        'pm': ["Permanent Marker", "cursive"],
        'fjalla': ["Fjalla One", "sans-serif"],
        'baskerville': ["Baskervville SC", "serif"]
      },
      letterSpacing: {
        'custom-spacing-1': '0.25rem'
      },
      colors: {
        'gray-custom-2': 'rgb(60, 60, 60)',
        'gray-custom-3': 'rgb(70, 70, 70)',
        'gray-custom-4': 'rgb(100, 100, 100)'
      },
    }
  },
  plugins: [],
}


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#121212"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

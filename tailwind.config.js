const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pur': '#d45e31',
      },
      fontFamily: {
        sans: ['Abhaya Libre', ...defaultTheme.fontFamily.sans],
        fancy: ['Kunstler Script'],
      },
      fontSize: {
        sm: '3px',
        base: '3px',
        xl: '20px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
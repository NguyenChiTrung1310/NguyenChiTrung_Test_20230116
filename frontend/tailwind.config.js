/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        notoSan: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF963C',
          300: '#FFCC21',
          500: '#EA6C00',
        },
        secondary: {
          DEFAULT: '#8FE9D0',
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        gray: {
          400: '#777777',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase, theme, addUtilities }) {
      addComponents({
        '.primary-300-400': {
          background: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        },
      });
    }),
  ],
};

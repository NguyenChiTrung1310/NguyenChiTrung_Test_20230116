/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        tablet: '960px',
        xl: '1280px',
        xs_max: { max: '449px' },
        sm_max: { max: '639px' },
        md_max: { max: '767px' },
        tablet_max: { max: '959px' },
        xl_max: { max: '1279px' },
      },
      fontFamily: {
        inter: ['Inter'],
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
          'opacity-15': 'rgba(255,255,255,0.15)',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase, theme, addUtilities }) {
      addComponents({
        '.bg-primary-300-400': {
          background: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        },
        '.bg-btn-primary-300-400': {
          background:
            'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        },
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.container': {
          maxWidth: '100%',
          width: '100%',
          margin: 'auto',
          padding: '0 20px',
          '@screen lg': {
            maxWidth: '960px',
            width: '100%',
            padding: 0,
          },
        },
        '.container-xl': {
          maxWidth: '100%',
          width: '100%',
          margin: 'auto',
          padding: '0 20px',
          '@screen xl': {
            maxWidth: '1280px',
            width: '100%',
            padding: 0,
          },
        },
      });
      addBase({
        p: {
          fontSize: '16px',
          lineHeight: '23px',
          fontStyle: 'normal',
          fontWeight: 300,
        },
      });
    }),
  ],
};

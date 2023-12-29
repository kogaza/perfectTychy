/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '3.5xl': ['2rem', '2.25rem'],
        '4.5xl': ['2.5rem', '2.75rem'],
        '5.5xl': ['3.5rem', '3.75rem'],
      },
      fontFamily: {
        plusJakartaSans: 'Plus Jakarta Sans',
      },
      colors: {
        perfect: {
          bgdark: 'var(--color-perfect-bgdark)',
          bgfooter: 'var(--color-perfect-bgfooter)',
          bgnav: 'var(--color-perfect-bgnav)',
          bgaside: 'var(--color-perfect-bgaside)',
          bglightGreen: 'var(--color-perfect-bglightGreen)',
          whiteText: 'var(--color-perfect-whiteText)',
          grayNavText: 'var(--color-perfect-grayNavText)',
          greenText: 'var(--color-perfect-greenText)',
          contrastText: 'var(--color-perfect-contrastText)',
          scrollUpFill: 'var(--color-perfect-scrollUpFill)',
          contrastGreen: 'var(--color-perfect-contrastGreen)',
          contrastGreenHover: 'var(--color-perfect-contrastGreenHover)',
          hoverDark: 'var(--color-perfect-hoverDark)',
          contrastColor: 'var(--color-perfect-contrastColor)',
          borderButton: 'var(--color-perfect-borderButton)',
          bgButton: 'var(--color-perfect-bgButton)',
          mainWhite: 'var(--color-perfect-mainWhite)',
          bgMainFilter: 'var(--color-perfect-bgMainFilter)',
        },
      },
      boxShadow: {
        modal: '0 4px 30px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

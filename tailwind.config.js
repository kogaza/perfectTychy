/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
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
          bgdark: '#ffffff',
          bgfooter: '#0f211e',
          bgnav: '#ffffff',
          bgaside: '#ffffff',
          bglightGreen: '#f6fffe',
          whiteText: '#ffffff',
          grayNavText: '#727480',
          greenText: '#017141',
          contrastText: '#24283a',
          scrollUpFill: '#0f211e',
          contrastGreen: '#0f211e',
          contrastGreenHover: '#0f211ee6',
          hoverDark: '#0000000d',
          contrastColor: '#000000',
          borderButton: '#f16c20',
          bgButton: '#f16c2180',
          mainWhite: '#ffffff',
          bgMainFilter: '#00506a80',
        },
      },
      boxShadow: {
        modal: '0 4px 30px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.absolute-important': {
          position: 'absolute !important',
        },
      }
      addUtilities(newUtilities)
    }
  ]
};

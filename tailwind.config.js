const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan
      },
      fontFamily: {
        serif: ['Georgia']
      }
    },
    screens: {
      sm: '640px',
      md: '865px',
      lg: '1024px',
      xl: '1280px'
    },
    animation: {
      shine: 'shine 1s'
    },
    keyframes: {
      shine: {
        '100%': { left: '125%' }
      }
    }
  },
  variants: {},
  plugins: []
};

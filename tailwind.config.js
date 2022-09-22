const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan
      },
      fontFamily: {
        'serif': ['Georgia'] 
      },
    },
    screens: {
      sm: '640px',
      md: '865px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  variants: {},
  plugins: []
};

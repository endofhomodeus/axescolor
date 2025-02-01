/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        // ...other breakpoints
      },
      animation: {
        'gradient-slow': 'gradient 8s linear infinite',
        'gradient-slow-reverse': 'gradient-reverse 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { transform: 'translate(0%, 0%)' },
          '50%': { transform: 'translate(25%, 25%)' },
        },
        'gradient-reverse': {
          '0%, 100%': { transform: 'translate(0%, 0%)' },
          '50%': { transform: 'translate(-25%, -25%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};

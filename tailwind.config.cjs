/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        quicksand: {
          50: '#faf6f7',
          100: '#f5eeef',
          200: '#ecdfe1',
          300: '#dcc5c8',
          400: '#c7a5aa',
          500: '#b58b92',
          600: '#976771',
          700: '#7d535d',
          800: '#6a4751',
          900: '#5c3f48',
        },
      },
    },
  },
  plugins: [],
};

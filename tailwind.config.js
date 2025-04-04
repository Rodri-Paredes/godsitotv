/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#2D1B69',
          800: '#3B2282',
          700: '#4C2BA3',
        },
        fuchsia: {
          700: '#A21CAF',
          600: '#C026D3',
          500: '#D946EF',
        },
      },
    },
  },
  plugins: [],
};
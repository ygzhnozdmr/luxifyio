/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2f5',
          100: '#d8dce6',
          200: '#b4bdcd',
          300: '#8c99b3',
          400: '#6b7a9a',
          500: '#546180',
          600: '#424c65',
          700: '#32394c',
          800: '#232733',
          900: '#151619',
        },
        gold: {
          50: '#fdf7e9',
          100: '#f7e8c3',
          200: '#f1d99d',
          300: '#ebca76',
          400: '#e5bb50',
          500: '#d6a73a',
          600: '#a8852e',
          700: '#7a6221',
          800: '#4c3e15',
          900: '#1e1908',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        grow: 'grow 2.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
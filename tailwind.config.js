/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-900': '#0a192f',
        'navy-800': '#112240',
        'gold-300': '#ffd700',
        'gold-400': '#ffed4a',
      },
    },
  },
  plugins: [],
} 
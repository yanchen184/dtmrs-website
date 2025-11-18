/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dtm-red': '#CC0000',
        'dtm-blue': '#0066CC',
        'dtm-dark': '#1a1a1a',
      },
      clipPath: {
        'trapezoid': 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)',
      },
    },
  },
  plugins: [],
}

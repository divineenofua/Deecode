/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html', "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkMode: {
          background:'#1a202c',
          text:'#e2e8f0',
        },
        lightMode: {
          background:'#ffffff',
          text: '#333333',
        }
      }
    },
  },
  plugins: [],
}

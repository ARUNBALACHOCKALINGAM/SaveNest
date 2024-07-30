/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5a287d',
        secondary: '#f2eaf9',
      },
      fontFamily: {
        ios: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [],
}
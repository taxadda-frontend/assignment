/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          "primary-color": "var(--primary-color)",
          "primary-theme":"var(--primary-theme)",
          "primary-text":"var(--primary-text)",
          "primary-theme-light":"var(--primary-theme-light)"
      }
    },
  },
  plugins: [],
}

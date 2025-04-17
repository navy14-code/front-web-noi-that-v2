/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00927c',
        'secondary-color': '#EAF0F1',
        'primary1-color': '#2C3335',
      },
    },
  },
  plugins: [],
}
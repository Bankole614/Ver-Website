/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
    },
  },
}
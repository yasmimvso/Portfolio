/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15202B',
        secondary: '#34495E',
        tertiary: '#F1C40F',
        quaternary: '#E74C3C',
        quinary: '#2ECC71',
      }
    },
  },
  plugins: [],
}


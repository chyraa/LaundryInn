/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c3d5b',
          light: '#2f77a8',
          dark: '#113241'
        },
        secondary: {
          DEFAULT: '#f7f9fb',
          dark: '#e9eaeb'
        }
      },
      fontFamily: {
        'sans': ['IM Fell Great Primer', 'serif'],
      },
    },
  },
  plugins: [],
  // Ini penting: biarkan CSS kustom Anda tetap bekerja bersama Tailwind
  important: true,
}
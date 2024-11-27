/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "montserrat": ["Montserrat", "sans-serif"],
        "worksans": ["Work Sans", "sans-serif"],
      },
      "colors": {
        "primary-color": "#0FF1F6",
        "secondary-color": "#14BCB2",
        "bg-color": "#002228",
      }
    },
  },
  plugins: [],
}
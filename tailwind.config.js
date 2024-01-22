/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "syne": "Syne",
      },
      backgroundImage: {
        "main": "url('/public/image/background.png')",
        "grad": "url('/public/image/gradient.png')",
      }
    },
  },
  plugins: [],
}


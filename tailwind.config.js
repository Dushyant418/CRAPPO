/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ('Inter'),
        'Rubik': ('Rubik')
      },
      boxShadow: {
        'card-shadow': '-1px 1px 6px 0px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}
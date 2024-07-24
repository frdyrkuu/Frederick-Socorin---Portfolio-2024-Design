/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html", "./templates/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Maragasa: ["Maragasa", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

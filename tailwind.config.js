/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'base': '#2a2d31',
        'base-darker': '#34343d',
        'highlight': '#1982ff',
        'highlighter': '#98c6ff',

      }

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'base': '#34363d',
        'base-darker': '#2a2b31',
        'base-even-darker': '#23242a',
        'highlight': '#1982ff',
        'highlighter': '#98c6ff',

      }

    },
  },
  plugins: [],
}


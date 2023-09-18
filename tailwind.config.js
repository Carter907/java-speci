/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'base': '#312e2a',
        'base-darker': '#3d3a34',
        'highlight': '#1982ff',
        'highlighter': '#98c6ff',

      }

    },
  },
  plugins: [],
}


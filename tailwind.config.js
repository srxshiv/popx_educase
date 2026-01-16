/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'popx-purple': '#6e44ff',
        'popx-purple-dark': '#5a34d2',
        'popx-blue': '#3b26f5',
        'popx-gray-bg': '#f7f7f7fb',
        'popx-gray-light': '#f3f2f2',
        'popx-gray-text': '#7c7979',
      },
    },
  },
  plugins: [],
}

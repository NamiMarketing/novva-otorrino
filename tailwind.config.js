/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      colors: {
        'orange-theme': '#FF8A57',
        'bege': '#E3DED8;',
        'bege2': '#C1BBB3',
        'bege3': '#7A7169',
        'blue-theme': '#193259',
        'text': '#4B3F44',
        'cinza': '#E3DED8'
      }
    },
    fontFamily: {
      'serif': ['Montserrat'],
      'sans': ['"Nunito Sans"'],
    }
  },
  plugins: [],
}


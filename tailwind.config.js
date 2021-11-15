const menuColor = {
  "white": '#fff',
  "gold": '#c59d5f',
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: menuColor,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

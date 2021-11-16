const BirthdayReminder = {
  'pink': '#f28ab2',
  
}

const menuColor = {
  "white": '#fff',
  "gold": '#c59d5f',
}

const tabsColor = {
  "primaryDark": "#2caeba",
  "primaryDarker": "hsl(184, 91%, 17%)",
  "secondaryLight": "hsl(184, 80%, 74%)",
  "secondaryLighter": "hsl(186, 100%, 94%)",
  "fontDarker": "hsl(209, 61%, 16%)",
  "fontDark": "hsl(209, 34%, 30%)",
  "fontLight": "hsl(210, 22%, 49%)",
  "FontLighter": "hsl(212, 33%, 89%)"
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        menuColor,
        tabsColor,
      },
      gridTemplateColumns: {
        'auto': 'auto 1fr'
      },
      boxShadow: {
        tsm: "0 2px #2caeba",
        tmd: "-2px 0 #2caeba"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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

const sliderColor = {
  "primary": "hsl(21, 62%, 45%)",
  'secondary': "hsl(210, 22%, 49%)",
  "ternary": "hsl(209, 34%, 30%)"
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BirthdayReminder,
        menuColor,
        tabsColor,
        sliderColor
      },
      gridTemplateColumns: {
        'auto': 'auto 1fr'
      },
      boxShadow: {
        lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        darkShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        tsm: "0 2px #2caeba",
        tmd: "-2px 0 #2caeba"
      },
      spacing: {
        "50": "50%",
        "100": "100%",
      },
      height: {
        "450": "450px",
        "80vw": "80vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "880": "880px"
      },
      maxWidth: {
        "880": "880px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

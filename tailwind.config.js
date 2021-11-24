const BirthdayReminder = {
  "pink": "#f28ab2",
}

const menuColor = {
  "white": "#fff",
  "gold": "#c59d5f",
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
  "secondary": "hsl(210, 22%, 49%)",
  "ternary": "hsl(209, 34%, 30%)"
}

const accordionColor = {
  "red": "#b4345c",
  "purple": "#4b145b",
  "grey": "#eae6eb"
}

const reviewsColor = {
  "primaryDark": "hsl(205, 86%, 17%)",
  "primaryLight": "hsl(205, 78%, 60%)",
  "secondaryDark": "hsl(205, 90%, 76%)",
  "secondarySecondary": "hsl(205, 100%, 96%)",
}

const toursColor = {
  "primary": "hsl(205, 78%, 60%)",
  "secondary": "hsl(205, 100%, 96%)",
  "red": "hsl(360, 67%, 44%)",
}

const loremColor = {
  "primary": "hsl(205, 86%, 17%)",
  "secondary": "hsl(205, 78%, 60%)",
  "ternary": "hsl(205, 100%, 96%)",
  "ternary2": "hsl(210, 31%, 80%)"
}

const colorGenerator = {
  "primary": "hsl(205, 78%, 60%)",
  "secondary": "hsl(209, 61%, 16%)",
  "ternary": "hsl(360, 67%, 44%)",
}
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        BirthdayReminder,
        menuColor,
        tabsColor,
        sliderColor,
        accordionColor,
        reviewsColor,
        toursColor,
        loremColor,
        colorGenerator
      },
      gridTemplateColumns: {
        "auto": "auto 1fr",
        "2501fr": "250px 1fr",
        "color": "repeat(auto-fit, minmax(223.33px, 1fr))"
      },
      gridTemplateRows: {
        "color": "repeat(auto-fit, minmax(96px, 1fr))"
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
      width: {
        "150": "150px",
        "450": "450px",
        "80vw": "80vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "880": "880px"
      },
      minWidth: {
        "2": "2rem"
      },
      maxWidth: {
        "880": "880px"
      },
      borderRadius: {
        "50": "50%"
      },
      minHeight: {
        "vhminus100": "calc(100vh - 100px)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require("tailwindcss/colors");
const palette = {
  card: "#DDFFE7",
  hover: "#98D7C2",
  buttons: "#167D7F",
  background: "#29A0B1",
};
const modalColor = {
  primaryDark: "hsl(205, 86%, 17%)",
  primaryLight: "hsl(205, 78%, 60%)",
  greyDark: "hsl(209, 34%, 30%)",
  greyDarker: "hsl(211, 39%, 23%)",
  greyLight: "hsl(210, 22%, 49%)",
  greyLighter: "hsl(209, 28%, 39%)",
  greyWhite: "hsl(210, 36%, 96%)",
};

const cocktail = {
  primaryLight: "#d4e6a5",
  primaryColor: "#47612e",
  primaryDark: "#c02c03",
  offWhite: "#f7f7f7",
  mainBG: "#f1f5f8",
  mainOverlay: "rgba(35, 10, 36, 0.4)",
  mainBlack: "#222",
  mainGrey: "#ececec",
  darkGrey: "#afafaf",
  mainRed: "#bd0303",
};

const cart = {
  primary: "#2680c0",
  primaryLight: "hsl(205, 84%, 74%)",
  primaryDark: "hsl(205, 100%, 21%)",
  grey: "#617d98",
};

const stripeColor = {
  dark: "hsl(209, 61%, 16%)",
  normal: "hsl(210, 22%, 49%)",
  light: "hsl(210, 36%, 96%)",
};

const BirthdayReminder = {
  pink: "#f28ab2",
};

const menuColor = {
  white: "#fff",
  gold: "#c59d5f",
};

const tabsColor = {
  primaryDark: "#2caeba",
  primaryDarker: "hsl(184, 91%, 17%)",
  secondaryLight: "hsl(184, 80%, 74%)",
  secondaryLighter: "hsl(186, 100%, 94%)",
  fontDarker: "hsl(209, 61%, 16%)",
  fontDark: "hsl(209, 34%, 30%)",
  fontLight: "hsl(210, 22%, 49%)",
  FontLighter: "hsl(212, 33%, 89%)",
};

const sliderColor = {
  primary: "hsl(21, 62%, 45%)",
  secondary: "hsl(210, 22%, 49%)",
  ternary: "hsl(209, 34%, 30%)",
};

const accordionColor = {
  red: "#b4345c",
  purple: "#4b145b",
  grey: "#eae6eb",
};

const reviewsColor = {
  primaryDark: "hsl(205, 86%, 17%)",
  primaryLight: "hsl(205, 78%, 60%)",
  secondaryDark: "hsl(205, 90%, 76%)",
  secondarySecondary: "hsl(205, 100%, 96%)",
};

const toursColor = {
  primary: "hsl(205, 78%, 60%)",
  secondary: "hsl(205, 100%, 96%)",
  red: "hsl(360, 67%, 44%)",
};

const loremColor = {
  primary: "hsl(205, 86%, 17%)",
  secondary: "hsl(205, 78%, 60%)",
  ternary: "hsl(205, 100%, 96%)",
  ternary2: "hsl(210, 31%, 80%)",
};

const colorGenerator = {
  primary: "hsl(205, 78%, 60%)",
  secondary: "hsl(209, 61%, 16%)",
  ternary: "hsl(360, 67%, 44%)",
};

const navbarColor = {
  primary1: "hsl(205, 86%, 17%)",
  primary5: "hsl(205, 78%, 60%)",
  primary7: "hsl(205, 90%, 76%)",
  primary8: "hsl(205, 86%, 81%)",
  grey3: "hsl(209, 34%, 30%)",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        colorGenerator,
        navbarColor,
        modalColor,
        stripeColor,
        cart,
        cocktail,
        palette,
        colors,
      },
      gridTemplateColumns: {
        auto: "auto 1fr",
        "2501fr": "250px 1fr",
        color: "repeat(auto-fit, minmax(223.33px, 1fr))",
        auto1FRauto: "auto 1fr auto",
        "2FR3FR": "2fr 3fr",
      },
      gridTemplateRows: {
        auto: "auto 1fr",
        color: "repeat(auto-fit, minmax(96px, 1fr))",
      },
      boxShadow: {
        lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        darkShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        tsm: "0 2px #2caeba",
        tmd: "-2px 0 #2caeba",
      },
      spacing: {
        50: "50%",
        100: "100%",
      },
      height: {
        450: "450px",
        "80vw": "80vw",
        "90vw": "90vw",
        "95vw": "95vw",
        880: "880px",
      },
      width: {
        150: "150px",
        450: "450px",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
        880: "880px",
      },
      minWidth: {
        2: "2rem",
      },
      maxWidth: {
        880: "880px",
        1170: "1170px",
        40: "40rem",
      },
      borderRadius: {
        50: "50%",
      },
      minHeight: {
        vhminus100: "calc(100vh - 100px)",
      },
      zIndex: {
        1: "1",
        "-1": "-1",
        2: "2",
        3: "3",
      },
      scale: {
        1: "1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

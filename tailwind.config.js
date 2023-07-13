/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      "black-70": "rgba(0, 0, 0, 0.70)",

      primaryColor: "#5454C0",
      secondaryColor: "#FF862F",
      successColor: "#2CC672",
      errorColor: "#FF5858",
      warningColor: "#FF9F43",
      infoColor: "#54A0FF",
      alertColor: "#FECA57",

      black: "#181A20",
      blackHigh: "#171727",
      blackSemi: "#616161",
      blackMid: "#757575",
      blackReg: "#20232C",
      blackLow: "#9E9E9E",
      blackLight: "rgba(189 ,189 ,189,0.25)",

      fade: "#BDBDBD",
      fadeHigh: "#E0E0E0",
      fadeSemi: "#EEEEEE",
      fadeMid: "#F5F5F5",
      fadeLow: "#FFFFFF",

      // text colors
      white: "#fff",
      blackText: "#272730",
      disabled: "#C2C2CF",
      blackbg: "#121224",
      navyDark: "#282546",
      navyMid: "#212035",
      navyLight: "#393672",
      navyLow: "#2B2949",

      blueMid: "#828ED8",
      blueLight: "#CDD2F0",

      slateDark: "#555568",
      slateHigh: "#ECEEFF",
      slateSemi: "#A0A1BB",
      slateMid: "#D5D5E0",
      slateLow: "#EEEEF4",
      slateLight: "rgba(85, 85, 104,0.25)",

      navbarBg: "rgba(255,255,255,0.42)",
      darkNavbarBg: "rgb(19 22 24 / 42%)",
    },

    backgroundImage: {
      lightGradient:
        "linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0.28) 100%)",
      pinkGradient: "linear-gradient(to bottom, #C91876 0%, #EF46A0 100%)",
      grayGradient:
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, #E7E8FF 100%)",
      blackGradient:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
      blueGradient: "linear-gradient(to bottom, #6C43E8 0%, #3D1E9A 100%)",
      darkGradient: "linear-gradient(to bottom, #151930 0%, #0F0F14 100%)",
      // images
      heroDarkBg: "url('./Assets/Images/hero-dark.png')",
      heroLightBg: "url('./Assets/Images/hero-light.png')",
    },

    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
    },

    extend: {
      boxShadow: {
        15: "0px 9px 40px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};

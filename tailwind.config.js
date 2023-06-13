/** @type {import('tailwindcss').Config} */

const customColors = {
  lightGreen: {
    DEFAULT: "hsl(152, 76%, 78%)",
  },
  gray: {
    DEFAULT: "hsl(0, 0%, 95%)",
    100: "hsl(0, 0%, 50%)",
    150: "hsl(0, 0%, 35%)",
    200: "hsl(0, 0%, 94%)",
    250: "hsl(0, 0%, 97%)",
    300: "hsl(0, 0%, 95%)",
  },
  primary:{
    100: "hsl(186, 66%, 73%)",

    150: "hsl(186, 66%, 10%)",
    200: "hsl(186, 66%, 20%)",
    250: "hsl(186, 66%, 30%)",
    350: "hsl(186, 66%, 40%)",
    400: "hsl(186, 66%, 50%)",
    450: "hsl(186, 66%, 60%)",
    500: "hsl(186, 66%, 70%)",
    550: "hsl(186, 66%, 80%)",
    600: "hsl(186, 66%, 90%)",
  },
  primaryBlue: {
    DEFAULT: "#468DDF",
    100: "#A5EDFD",
    150: "#97E4FF",
    200: "#18C2FF",
    250: "#18C3FF",
    300: "#84CCED",
    350: "#84CCED",
    400: "#55A3FF",
    450: "#49F2FD",
    500: "#1B54E8",
    550: "#468DDF",
    600: "#468DDF",
    650: "#2069BF",
    700: "#66FCF1",
    750: "#163B9A",
    800: "#0C245F",
    850: "#174D8C",
    900: "hsl(212, 72%, 20%)",
    1000: "#8bdee7"
  },
  blue: {
    DEFAULT: "#2596BE",
    "def-transparent": "hsl(196, 67%, 45%, 80%)",

    50: "#00BCFF",
    100: "#2596BE",
    150: "#196580",
    200: "#3E75DF",
    250: "#1223BA",
    300: "#203c8c",
    350: "#a5d0cf",
  },
  border: {
    DEFAULT: "#FFF3F3",
  },
  green: {
    DEFAULT: "hsl(110, 67%, 30%)",
    100: "#028A0F",
    150: "#004B49",
    // 200: "#08f26e",
    // 200: "#07da63",
    200: "#06c258",
  },
  pink: {
    DEFAULT: "#FF33A4",
    "def-transparent": "hsl(327, 98%, 26%, 90%)",

    50: "#EB90A7",
    100: "#FA008A",
    150: "#FB31FF",
    200: "#830149",
    250: "#C7006E",
    300: "#B03060",
  },
  transparent: "transparent",
  orange: {
    DEFAULT: "#D76525",
  },
  red: {
    DEFAULT: "hsl(359, 100%, 42%)",
    100: "#FF5349",
    110: "hsl(3, 100%, 65%)",

    150: "#FF281B",
    200: "#EC0D00",
    250: "#BE0A00",
    300: "#900800",
    350: "#620500",
  },
  black: {
    DEFAULT: "#000000",
  },
  white: {
    DEFAULT: "#ffffff",
    50: "hsl(0, 0%, 92%)",
    "transparent-15": "hsl(0, 0%, 100%, 0.15)",
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      zeroToXl: { max: "1280px" },
      xs: { min: "350px" },
      sm: { min: "640px" },
      smToXl: { min: "640px", max: "1280px" },

      "max-sm": {
        max: "640px",
      },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      "max-md": {
        max: "768px",
      },
      smToLg: { min: "640px", max: "1024px" },
      lg: { min: "1024px" },
      "max-lg": { max: "1024px" },
      smToXl: { min: "640px", max: "1280px" },

      xl: { min: "1280px" },

      "2xl": { min: "1536px" },
      "max-3xl": {
        max: "1800px",
      },
      "3xl": { min: "1800px" },
    },
    colors: customColors,
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    container: {
      center: true,
    },
    extend: {
      primaryBlue: customColors.primaryBlue,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "min(100% - 2rem, 1300px);",
        },
      });
      
    },
    require("tailwind-scrollbar"),
  ],
};

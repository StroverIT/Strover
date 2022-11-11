/** @type {import('tailwindcss').Config} */

const customColors = {
  lightGreen: {
    DEFAULT: "hsl(152, 76%, 78%)",
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
  },
  blue: {
    DEFAULT: "#2596BE",
    50: "#00BCFF",
    100: "#2596BE",
    150: "#196580",
    200: "#3E75DF",
    250: "#1223BA",
    300: "#203c8c",
  },
  border: {
    DEFAULT: "#FFF3F3",
  },
  pink: {
    DEFAULT: "#FF33A4",
    50: "#EB90A7",
    100: "#FA008A",
    150: "#FB31FF",
    200: "#830149",
    250: "#C7006E",
  },
  transparent: "transparent",
  orange: {
    DEFAULT: "#D76525",
  },
  red: {
    DEFAULT: "#DD0004",
  },
  black: {
    DEFAULT: "#000000",
  },
  white: {
    DEFAULT: "#ffffff",
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
      "max-sm": {
        max: "640px",
      },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      smToLg: { min: "640px", max: "1024px" },
      lg: { min: "1024px" },
      "max-lg": { max: "1024px" },
      smToXl: { min: "640px", max: "1280px" },

      xl: { min: "1280px" },

      "2xl": { min: "1536px" },
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

/** @type {import('tailwindcss').Config} */

const customColors = {
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
  },
  black: {
    DEFAULT: "#00000",
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
      xs: { min: "350px" },
      sm: { min: "640px" },
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
  ],
};
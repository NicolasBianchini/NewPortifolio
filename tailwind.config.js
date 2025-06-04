import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#FFF5F5",
            100: "#FED7D7",
            200: "#FEB2B2",
            300: "#FC8181",
            400: "#F56565",
            500: "#E53E3E", // Main red primary color
            600: "#C53030",
            700: "#9B2C2C",
            800: "#822727",
            900: "#63171B",
            DEFAULT: "#E53E3E",
            foreground: "#FFFFFF"
          },
          secondary: {
            50: "#FFF5F7",
            100: "#FCEEF3",
            200: "#FAD1E1",
            300: "#F8B4D0",
            400: "#F687B3",
            500: "#ED64A6", // Secondary color (pink)
            600: "#D53F8C",
            700: "#B83280",
            800: "#97266D",
            900: "#702459",
            DEFAULT: "#ED64A6",
            foreground: "#FFFFFF"
          }
        }
      },
      dark: {
        colors: {
          primary: {
            50: "#63171B",
            100: "#822727",
            200: "#9B2C2C",
            300: "#C53030",
            400: "#E53E3E",
            500: "#F56565",
            600: "#FC8181",
            700: "#FEB2B2",
            800: "#FED7D7",
            900: "#FFF5F5",
            DEFAULT: "#F56565",
            foreground: "#FFFFFF"
          },
          secondary: {
            50: "#702459",
            100: "#97266D",
            200: "#B83280",
            300: "#D53F8C",
            400: "#ED64A6",
            500: "#F687B3",
            600: "#F8B4D0",
            700: "#FAD1E1",
            800: "#FCEEF3",
            900: "#FFF5F7",
            DEFAULT: "#F687B3",
            foreground: "#FFFFFF"
          }
        }
      }
    }
  })]
};
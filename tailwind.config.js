/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      red: "#DF5656",
      gray: {
        900: "#1B1D23",
        700: "#60636D",
        600: "#7D828F",
        300: "#C8CCD8",
        100: "#EEEFF4",
      },
    },
    fontFamily: {
      spartan: ['"League Spartan"', "sans-serif"],
    },
    fontSize: {
      base: ["1.125rem", { fontWeight: "500", lineHeight: "1.5rem", letterSpacing: "0px" }],
      lg: ["2rem", { fontWeight: "700", lineHeight: "2.5rem", letterSpacing: "0px" }],
      xl: ["4.5rem", { fontWeight: "700", lineHeight: "4rem", letterSpacing: "-0.125rem" }],
      "2xl": ["6rem", { fontWeight: "700", lineHeight: "5rem", letterSpacing: "-0.125rem" }],
      "3xl": ["15.625rem", { fontWeight: "700", lineHeight: "12.5rem", letterSpacing: "-0.3125rem" }],
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px",
      }
    },
  },
  plugins: [],
};

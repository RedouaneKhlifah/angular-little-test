/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray : "#777777",
        main : '#9E78CF',
        LightGray  : '#1D1825',
        darkGray : "#15101C"
      },
      fontFamily: {
        // font
      },
      dropShadow: {
        "black-sm": ["0 2px 4px rgb(0 0 0 / 0.5)"],
        "inset-black-sm": "inset 0 2px 4px rgba(0, 0, 0, 1)",
      },
      boxShadow: {},
      screens: {
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "xl-max": { max: "1279px" },
        "2xl-max": { max: "1535px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}
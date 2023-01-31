/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xm': {'max': '40.625em'},
        'sm': {'max': '56.25em'},
        "lg": {'max': '75em'},
      },
    },
    colors: {
        "primaryColor": "var(--primaryColor)",
        "secondaryColor": "var(--secondaryColor)",
        "primaryColorDarker": "var(--primaryColorDarker)",
        "overlayColor": "var(--overlayColor)",
        "lightColor": "var(--lightColor)",
        "grayColor": "var(--grayColor)",
        "fontColor": "var(--fontColor)",

        // "primaryColor": "#404f49",
        // "primaryColorDarker": "#2d2d2d",
        // "secondaryColor": "#381f32",
        // "overlayColor": "#4a3b47",
        // "lightColor": "#d9d9d9",
        // "grayColor": "#707070",
        // "fontColor": "#ffffff",
        "sectionMargin":"3.5rem 2.5rem",
      },
  },
}

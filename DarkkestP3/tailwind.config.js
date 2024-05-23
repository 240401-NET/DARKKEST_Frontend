/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white" : "#F8F8FF",
        "primary-black" : "#2c2c2c",
        "primary-grey" : "#cccccc",
        "primary-green" : "#006a18",
        "secondary-black" : "#818181",
        "secondary-green":"#00ae56",
        "third-green" : "#E6FFED",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      screens : {
        xs : "480px",
        sm : "768px",
        md: "1070px",
      }
    },
  },
  plugins: [],
}
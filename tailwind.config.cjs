const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // This is just an example of how we can get some of the colors from the
        // Tailwind's default color palette, otherwise the "orange" and "teal"
        // are already added again to Tailwind v3 since they were not in v2.
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.sky,
      },
    },
  },
  plugins: [],
}

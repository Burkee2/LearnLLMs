/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        h1: "2.25rem",
      },
      fontWeight: {
        h1: "bold",
      },
      lineHeight: {
        h1: "2.5rem",
        double: "2rem",
      },
      letterSpacing: {
        h1: "0.05em",
      },
    },
  },
  plugins: [],
};

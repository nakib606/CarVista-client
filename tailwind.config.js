/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FA3736",
      },
      fontFamily: {
        logo: "'Cairo Play', sans-serif",
        // logo: "'Lobster Two', sans-serif;",
      },
    },
  },
  plugins: [require("daisyui")],
};

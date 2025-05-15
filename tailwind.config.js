/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    background: {
      "react-image": "url('./images/weather.png')",
    },
    extend: {
      colors: {
        "dark-purple": "var(--color-dark-purple)",
        "semi-dark-purple": "var(--color-semi-dark-purple)",
        "light-purple": "var(--color-light-purple)",
        yellow: "var(--color-yellow)",
      },
    },
  },
  plugins: [],
};

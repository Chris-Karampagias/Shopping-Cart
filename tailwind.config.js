/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        showRight: {
          "0%": { transform: "translateX(800px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        showLeft: {
          "0%": { transform: "translateX(-800px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "show-right": "showRight 1s linear forwards ",
        "show-left": "showLeft 1s linear forwards",
      },
    },
  },
  plugins: [],
};

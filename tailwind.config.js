/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BB5A2",

          accent: "#E8F2EE",

          "varient-two": "#F1DFDF",

          "varient-three": "#DFE1F1",

          "varient-four": "#DFEAF1",
          "base-200": "#F8F8F8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

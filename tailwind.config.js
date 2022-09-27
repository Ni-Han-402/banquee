/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BB5A2",

          "varient-one": "#E8F2EE",

          "varient-two": "#F1DFDF",

          "varient-three": "#DFE1F1",

          "varient-four": "#DFEAF1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

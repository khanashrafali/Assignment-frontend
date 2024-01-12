/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "my-shadow": "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        "card-shadow": "0 20px 30px 0 rgba(28, 40, 44, 0.2)",
        "button-shadow": "0 0px 0px 0px rgb(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};

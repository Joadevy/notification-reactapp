/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(1, 90%, 64%)",
          blue: "hsl(219, 85%, 26%)",
        },
        neutral: {
          "dark-brown": "hsl(25, 47%, 15%)",
          "gray-blue": "hsl(219, 14%, 63%)",
          "gray-blue-100": "hsl(211, 68%, 94%)",
          "gray-blue-200": "hsl(205, 33%, 90%)",
          "light-gray-blue": "hsl(210, 60%, 98%)",
          "dark-gray-blue": "hsl(219, 12%, 42%)",
          "dark-blue": "hsl(224, 21%, 14)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          primary: "#1da1f2",

          border: "rgb(0 ,0, 0.38)",
        },
      },
  },
  plugins: [require("@tailwindcss/forms")],
};

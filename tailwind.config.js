module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        hover: "rgba(0,0,0, 0.03)",
        hoverDark: "rgba(255,255,255, 0.03)",
        border: "rgb(0 ,0, 0.38)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

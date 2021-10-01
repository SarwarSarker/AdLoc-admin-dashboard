module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        pinkSoft: "#EDC7B7",
        wheat: "#EEE2DC",
        blue2: "#697184",
        bgDark1: "#141414",
        bgDark2: "#232326",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

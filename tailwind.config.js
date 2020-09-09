module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Berkshire Swash"],
      },
      fontSize: {
        "2xs": "0.6rem",
      },
    },
  },
  variants: { backgroundColor: ["responsive", "hover", "focus", "active"] },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}

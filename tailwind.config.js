module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit_400Regular"],
        outfitMedium: ["Outfit_500Medium"],
        outfitSemiBold: ["Outfit_600SemiBold"],
        outfitBold: ["Outfit_700Bold"],
      },
    },
  },
  plugins: [],
};
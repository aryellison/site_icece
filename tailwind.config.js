/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      fontFamily: {
        "kumbh-sans": ['"Kumbh Sans"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        gloock: ["Gloock", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "dark-green": "#314421",
        "light-gray": "#D1D5DB",
        "yellow-50": "#D8D8BF",
        "neutral-600": "#525252",
        "neutral-800": "#262626",
        "light-greenish-white": "#F8FFF8",
        "neutral-500": "#737373",
        "grey-400": "#9CA3AF",
        "gray-50": "#F9FAFB",
        "gray-300": "#D1D5DB",
        "gray-700": "#374151",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

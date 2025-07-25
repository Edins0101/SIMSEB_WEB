/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [{ pattern: /ring-(red|green|blue|yellow|purple)-(400|500|600)/ }],
  // tailwind.config.js
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.25s ease",
      },
    },
  },
  plugins: [],
};

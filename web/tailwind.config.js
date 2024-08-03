import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3068D0",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        ring: {
          '0%': { transform: 'rotate(-15deg)' },
          '2%': { transform: 'rotate(15deg)' },
          '4%': { transform: 'rotate(-18deg)' },
          '6%': { transform: 'rotate(18deg)' },
          '8%': { transform: 'rotate(-22deg)' },
          '10%': { transform: 'rotate(22deg)' },
          '12%': { transform: 'rotate(-18deg)' },
          '14%': { transform: 'rotate(18deg)' },
          '16%': { transform: 'rotate(-12deg)' },
          '18%': { transform: 'rotate(12deg)' },
          '20%': { transform: 'rotate(0deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '80%': { transform: 'translateX(-2px) rotate(-5deg)', transition: 'transform 1s ease-in' },
          '100%': { transform: 'translateX(0) rotate(0deg)', transition: 'transform 0.3s ease-out' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        ring: 'ring 2s ease infinite',
        slide: 'slide 1s ease-in-out infinite',
      },
    },
  },
  corePlugins: {
    // To prevent tailwind styles from conflicting with Naive UI styles
    preflight: false
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            'animation-delay': value,
          };
        },
      }, {
        values: theme('transitionDelay'),
      });
    }),
  ],
};
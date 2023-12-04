/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        // SSR rendering issue https://github.com/tailwindlabs/tailwindcss/discussions/3113#discussioncomment-218172
        // TODO: potentiall mv public/* to src/assets/* and use relative path
        hero: "url('/public/banner.png')",
        main: "url('/public/Background.jpg')",
        about: "url('/public/aboutpage-bg.png')",
        services: "url('/public/servicespage-bg.jpg')",
        contact: "url('/public/contactpage-bg.jpg')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#CDA274",
          200: "#292F36",
          300: "#F4F0EC",
          400: "#E2E2E2",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};

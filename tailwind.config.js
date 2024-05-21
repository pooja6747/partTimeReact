/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: "#ff8412",
        gray: {
          "100": "rgba(255, 255, 255, 0.7)",
          "200": "rgba(255, 255, 255, 0.01)",
          "300": "rgba(255, 255, 255, 0.05)",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        darkslateblue: {
          "100": "#2b275a",
          "200": "rgba(43, 39, 90, 0.7)",
          "300": "rgba(43, 39, 90, 0.5)",
        },
        gainsboro: {
          "100": "#d9d9e3",
          "200": "#d9d9d9",
        },
        sandybrown: "#ffa047",
        chocolate: "#cc5200",
        ghostwhite: "#f3f2fd",
      },
      spacing: {},
      fontFamily: {
        "kumbh-sans": "'Kumbh Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "11xl": "30px",
        "6xl": "25px",
        "21xl": "40px",
        "16xl": "35px",
        "8xl-5": "27.5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      smi: "13px",
      xs: "12px",
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      mini: "15px",
      "3xs-4": "9.4px",
      "5xl": "24px",
      "7xs": "6px",
      inherit: "inherit",
    },
    screens: {
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
      mq346: {
        raw: "screen and (max-width: 346px)",
      },
      mq344: {
        raw: "screen and (max-width: 344px)",
      },
      mq319: {
        raw: "screen and (max-width: 319px)",
      },
      mq260: {
        raw: "screen and (max-width: 260px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

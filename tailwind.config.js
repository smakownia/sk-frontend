/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        DEFAULT: "1280px",
      },
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.5rem",
      full: "999px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#FFF4ED",
          100: "#FFE5D4",
          200: "#FFC7A8",
          300: "#FFA071",
          400: "#FF7F50",
          500: "#FE4711",
          600: "#EF2D07",
          700: "#C61C08",
          800: "#9D190F",
          900: "#7E1810",
        },
        neutral: {
          10: "#F9FAFB",
          50: "#EFEFEF",
          100: "#E3E3E3",
          200: "#C8C8C8",
          300: "#A4A4A4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#474747",
          800: "#383838",
          900: "#313131",
        },
      },
    },
  },
  plugins: [require("postcss-import")],
};

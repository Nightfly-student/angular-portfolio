/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          2: "#101012",
          3: "#16161a",
        },
        paper: {
          DEFAULT: "#f1f0ec",
          2: "#e8e7e1",
        },
        accent: {
          DEFAULT: "#ff6a1a",
          soft: "rgba(255, 106, 26, 0.14)",
        },
      },
      fontFamily: {
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F1F5F9",
        dark: "#18181B",
        peach: "#FCD5CE",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "steel-gray": {
          50: "#f4f4f5",
          100: "#e9e9ea",
          200: "#c8c7cb",
          300: "#a7a5ac",
          400: "#66626e",
          DEFAULT: "#241e30",
          600: "#201b2b",
          700: "#1b1724",
          800: "#16121d",
          900: "#120f18",
        },
      },
    },
  },
  plugins: [],
};

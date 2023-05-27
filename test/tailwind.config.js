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
        "gun-powder": {
          50: "#f6f6f9",
          100: "#edecf2",
          200: "#d8d6e1",
          300: "#b5b2c7",
          400: "#8c88a8",
          500: "#6d698e",
          600: "#595475",
          700: "#444059", //default page connexion et inscription
          800: "#3f3b51",
          900: "#383545",
          950: "#25232e",
        },
      },
    },
  },
  plugins: [],
};

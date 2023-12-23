/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
    },
    colors: {
      black: "rgba(4, 5, 15, 0.40)",
      brown: '#645D5D',
      white: '#ffffff',
      blue: '#5CB7FE',
     
    },
    screens: {
      sm: { max: "700px" },
      md: "700px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'hsl(75, 94%, 57%)',
        customGrey: 'hsl(0, 0%, 20%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};

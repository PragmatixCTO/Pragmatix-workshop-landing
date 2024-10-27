/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0D98B9',
          dark: '#264B78',
        },
        secondary: {
          teal: '#06B6B6',
          blue: '#3A6EA5',
        },
        accent: {
          yellow: '#F0C808',
          coral: '#E85F5C',
        },
        neutral: {
          light: '#F4F4F4',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
}
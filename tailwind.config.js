/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Example: Adjust the `md` breakpoint to 850px
        'md': '1000px',
      },
    },
  },
  plugins: [],
}


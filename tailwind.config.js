/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { fontFamily:{'Sora':['Sora']},
  extend: {},
},
  plugins: [require("daisyui")],
}


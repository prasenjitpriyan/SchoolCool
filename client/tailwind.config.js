/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      "royalBlue": '#002366',
      "logo": "#E6E4A5"
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require("daisyui")],
}


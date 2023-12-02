/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary' : ['Poly'],
        'secondary' : ['Clicker Script'],
        'main' : ['Poppins']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
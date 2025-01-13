/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '10rem',
        sm: '20rem',
        lg: '40rem',
        xl: '50rem',
        '2xl': '60rem',
      },
      center: true,
    },
  },
  plugins: [],
}


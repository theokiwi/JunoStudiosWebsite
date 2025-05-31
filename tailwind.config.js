export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-dye': 'hsla(212, 67%, 26%, 1)',
        'ucla-blue': 'hsla(210, 45%, 46%, 1)',
        'marian-blue': 'hsla(219, 45%, 30%, 1)',
        'lapis-lazuli': 'hsla(207, 68%, 37%, 1)',
        'coral-pink': 'hsla(6, 67%, 71%, 1)',
        'melon': 'hsla(7, 77%, 76%, 1)',
        'pale-dogwood': 'hsla(12, 38%, 77%, 1)',
        'rosy-brown': 'hsla(12, 37%, 64%, 1)',
      },
    },
  },
  plugins: [],
}
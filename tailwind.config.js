/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '55rem',
        '100': '100vw',
      },
      lineHeight: {
        'extra-loose': '0.9rem',
      },
      hight: {
        'fullH': '100vh',
      }

    },
  },
  plugins: [],
}


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#017371",
        secondary: "#0E87CC",
        tertiary: "#56FCA2",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '128': '40rem',
        '256': '80rem',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}

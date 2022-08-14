module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      colors: {
        primary: '#AA3C3F',
        secondary: '#64ffda',
        backColor: '#0E192D'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('inner', '& > *');
    },
    require('@tailwindcss/line-clamp'),
  ],
}

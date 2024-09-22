/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "main-theme": "#11E7EE",
        'custom-gray': '#3F4248',
        'custom-light-gray': '#2B6B71',
        'custom-teal': '#11E7EE',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(63, 66, 72, 0.8), rgba(253, 202, 56, 0.8))',
      },
      height: {
        '27': '27rem',
      },
    },
  },
  variants: {},
  plugins: [],
};

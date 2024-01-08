/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'desktop' : '1240px',
      'tablet' : '600px'
    },
    fontFamily: {
      'nanum_800' : ['nanum_800'],
      'nanum_400' : ['nanum_400'],
      'paybooc_500' : ['paybooc_500'],
      'paybooc_700' : ['paybooc_700'],
      'paybooc_800' : ['paybooc_800'],
    }
  },
  plugins: [],
}
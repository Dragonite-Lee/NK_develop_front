/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'desktop_header' : '1440px',
      'desktop' : '1240px',
      'tablet_header_change' : '1040px',
      'tablet_change' : '768px',
      'tablet' : '600px',
      'mobile' : '280px'
    },
    fontFamily: {
      'nanum_700' : ['nanum_700'],
      'nanum_400' : ['nanum_400'],
      'paybooc_500' : ['paybooc_500'],
      'paybooc_700' : ['paybooc_700'],
    },
    colors: {
      'main1' : '#536FF4',
      'main2' : '#789AF4',
      'main3' : '#88BFFE',
      'main4' : '#EDF4FC',
      'homework1' : '#E24E4A',
      'homework2' : '#DE6A57',
      'homework3' : '#DB8D5C',
      'notification1' : '#8DDB76',
      'notification2' : '#B7DB76',
      'notification3' : '#DCDA77',
      'management1' : '#5E80DB',
      'management2' : '#5EA6DB',
      'management3' : '#AAAAAA',
      'success' : '#63C714',
      'information' : '#2D9AFF',
      'warning' : '#F5A020',
      'warning2' : '#EA9619',
      'error' : '#F6403F',
      'black' : '#212121',
      'grayDark' : '#4C4C4E',
      'grey' : '#969699',
      'grayLight' : '#D1D1D6',
      'border' : '#F1F1F5',
      'white1' : '#F9F9FC',
      'whiteTotal' : '#FFFFFF'
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor: "rgb(94,166,219) white",
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(94,166,219)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        },
        ".scrollbar-medium" : {
          "&::-webkit-scrollbar" : {
            width: "10px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(217,217,217)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ]
}
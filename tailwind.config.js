/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        main_green: '#48B95D',
        green_hover: '#98e594',
        green_focus: '#008a5e',
        pure_white: '#ffffff',
        white_hover: '#e9f2e9',
        section1: '#EDEBF0',
        section2: '#E9F2E9',
        section3: '#F7F7F7',
        blue_title: '#00425E',
        black_text: '#000000',
        bluck_check: '#01CEDA'
      },
      keyframes: {
        loading: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        loading: 'loading 1.75s ease infinite'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

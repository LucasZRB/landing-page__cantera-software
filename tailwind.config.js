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
      },
      spacing: {
        'ct-margins': '8.438rem',
        'ct-min': '17.5rem',
        'ct-max': '80rem'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    fontSize: {
      'ct-sm': [
        'clamp(0.875rem, 0.8461538461538461rem + 0.1282051282051282vw, 1rem)',
        {
          lineHeight: '1.25rem',
          fontWeight: '400'
        }
      ],
      'ct-base': [
        'clamp(1rem, 0.9423076923076923rem + 0.2564102564102564vw, 1.25rem)',
        {
          lineHeight: '1.5rem',
          fontWeight: '400'
        }
      ],
      'ct-heading': [
        'clamp(1.5rem, 1.2692307692307692rem + 1.0256410256410255vw, 2.5rem)',
        {
          lineHeight: '1.75rem',
          fontWeight: '600'
        }
      ],
      'ct-sub-title': [
        'clamp(1.5rem, 1.2692307692307692rem + 1.0256410256410255vw, 2.5rem)',
        {
          lineHeight: '2.5rem',
          fontWeight: '700'
        }
      ],
      'ct-main-title': [
        'clamp(1.875rem, 1.4423076923076923rem + 1.9230769230769231vw, 3.75rem)',
        {
          lineHeight: '1',
          fontWeight: '700'
        }
      ]
    }
  },
  plugins: [require('flowbite/plugin')]
};

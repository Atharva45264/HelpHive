/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/purple.jpg')", 
      },
      colors: {
        primary: {
          light: '#d1c4e9',
          DEFAULT: '#7e57c2',
          dark: '#5e35b1',
        },
      },
    },
  },
  plugins: [],
};

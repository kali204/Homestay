/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        redleaf: '#C62C11',       // Primary deep red
        redleaf2: '#B01805',      // Darker red accent
        'redleaf-light': '#FBE6E1',  // Very light red/pinkish for text and backgrounds
      },
    },
  },
  plugins: [],
};

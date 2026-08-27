/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        'cream-warm': '#F5F1E8',
        forest: {
          DEFAULT: '#2C4A3B',
          dark: '#1E3329',
          deep: '#152620',
          light: '#3D6451',
        },
        terracotta: {
          DEFAULT: '#C17767',
          dark: '#A85F50',
          light: '#D49080',
        },
        gold: '#B89968',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
};

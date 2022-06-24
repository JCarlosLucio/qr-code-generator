/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/background.svg')",
        'dark-hero-pattern': "url('/src/dark-background.svg')",
      },
    },
  },
  plugins: [],
};

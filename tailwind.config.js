/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      display: ['"Press Start 2P"'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/background.svg')",
        'dark-hero-pattern': "url('/src/dark-background.svg')",
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': '#FFFFFF',
          'base-200': '#FFFFFF',
          'base-content': '#000000',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'base-100': '#000000',
          'base-200': '#000000',
          'base-300': '#111111',
          'base-content': '#FFFFFF',
        },
      },
    ],
  },
};

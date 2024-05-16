/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#233691',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        md: '798px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

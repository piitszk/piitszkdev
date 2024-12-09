/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
          accent: '#6366f1',
        },
        dark: {
          bg: '#18181b',
          text: '#ffffff',
          accent: '#818cf8',
        },
      },
    },
  },
  plugins: [],
};
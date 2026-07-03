/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          sidebar: '#FFF3F8',
          'sidebar-border': '#F4B6CF',
          navy: '#FDF2F8',
          'hero-blue': '#BE185D',
          blue: '#BE185D',
          cyan: '#F9A8D4',
          'blue-light': '#EC4899',
          background: '#FFFDFB',
          card: '#FFFFFF',
          ink: '#211C2F',
          muted: '#6F6675',
          border: '#F4B6CF',
          warning: '#EC4899',
        }
      }
    },
  },
  plugins: [],
}

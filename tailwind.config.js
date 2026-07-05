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
          sidebar: '#FFF9D8',
          'sidebar-border': '#E8DDA8',
          navy: '#FFFFFF',
          'hero-blue': '#8A6508',
          blue: '#B8860B',
          cyan: '#D6A72A',
          'blue-light': '#F2C94C',
          background: '#FFFFF0',
          card: '#FFFDF8',
          ink: '#2A2418',
          muted: '#7A6A3A',
          border: '#E8DDA8',
          warning: '#B8860B',
        }
      }
    },
  },
  plugins: [],
}

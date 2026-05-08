/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        command: {
          950: '#050711',
          900: '#08101e',
          800: '#101a2d',
          700: '#18243a',
        },
        signal: {
          cyan: '#8df1ff',
          teal: '#14b8a6',
          rose: '#ff78b8',
          gold: '#ffd166',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(141, 241, 255, .18)',
        panel: '0 24px 80px rgba(0, 0, 0, .28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',
          'bg-secondary': '#0A0A0A',
          card: '#111111',
          'card-hover': '#171717',
         orange: '#FF6A00',
          gold: '#FFB000',
          'bright-orange': '#FF7A00',
          text: '#F5F5F5',
          'secondary-text': '#A1A1A1',
          'muted-text': '#666666',
          border: '#242424',
          'strong-border': '#333333',
          magenta: '#D63384',
          pink: '#FF6B9D',
          accent: '#FF6A00',
          navy: '#111111',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

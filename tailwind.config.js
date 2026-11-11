/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        steel: {
          950: '#0a0a0c',
          900: '#111215',
          850: '#16181d',
          800: '#1c1f26',
          700: '#282c37',
          600: '#3c4250',
          500: '#555d70',
          400: '#7e889e',
          300: '#a6b0c3',
          200: '#d0d6e2',
          100: '#eef1f6',
        },
        forge: {
          amber: '#f59e0b',
          crimson: '#ef4444',
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

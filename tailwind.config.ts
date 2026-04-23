import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:     '#0A0A0A',
        paper:   '#F2F0EB',
        crimson: {
          DEFAULT: '#E4001B',
          dark:    '#B8001A',
          light:   '#FF1A33',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft':    '0 8px 40px -8px rgba(0,0,0,0.18)',
        'soft-lg': '0 20px 60px -12px rgba(0,0,0,0.25)',
        'card':    '0 2px 20px -4px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config

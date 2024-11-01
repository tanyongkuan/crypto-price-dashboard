import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        positive: { DEFAULT: '#08bf7f' },
        negative: {
          DEFAULT: '#BF3726'
        },
        warning: { DEFAULT: '#f2c037', hover: '#F9D36A' },
        black: { DEFAULT: '#00000080', dark: 'white' },
        white: {
          DEFAULT: 'white',
          dark: '#212a37'
        }
        // background: 'var(--background)',
        // foreground: 'var(--foreground)'
      }
    }
  },
  plugins: []
}
export default config

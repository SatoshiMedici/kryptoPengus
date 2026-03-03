import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        glacier: '#E8F1F5',
        frost: '#F3F8FA',
        'pale-ice': '#D6E6ED',
        'ice-edge': '#B8CED8',
        teal: '#4DA2B0',
        'beak-orange': '#E87D3E',
        gold: '#C9A84C',
        'alert-red': '#DA3633',
        'deep-navy': '#0D1117',
        slate: '#4A5568',
        muted: '#8B949E',
      },
      fontFamily: {
        pixel: ['Silkscreen', 'cursive'],
        terminal: ['VT323', 'monospace'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'waddle': 'waddle 0.6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'drift': 'drift 20s linear infinite',
        'bob': 'bob 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        waddle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drift: {
          '0%': { transform: 'translateY(-10vh) translateX(0)' },
          '100%': { transform: 'translateY(110vh) translateX(20px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-4px) rotate(1deg)' },
          '75%': { transform: 'translateY(2px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

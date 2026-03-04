import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dev-black': '#0D0D0D',
        'dev-navy': '#111827',
        'dev-cyan': '#00D4FF',
        'dev-violet': '#7B2FBE',
        'dev-orange': '#EA580C',
        'dev-lime': '#A3E635',
        'dev-card': 'rgba(255,255,255,0.04)',
        'dev-card-hover': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        clash: ['var(--font-clash)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'typewriter': 'typewriter 3s steps(30) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #00D4FF40' },
          '50%': { boxShadow: '0 0 60px #00D4FFaa' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

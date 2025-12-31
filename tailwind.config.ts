/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        paper: '#ffffff',
        ink: '#111111',
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
        },
        sage: {
          50: '#F5F7F6',
          100: '#E6EBE8',
          200: '#D4DDD9',
          500: '#8DA399',
          600: '#6B8274',
          900: '#2C3E30',
        },
        clay: {
          100: '#FAF7F5',
          500: '#B08D70',
          900: '#523E2A',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
      }
    }
  },
  plugins: [],
}

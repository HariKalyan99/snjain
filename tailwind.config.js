/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141212',
          900: '#141212',
          800: '#1d1a1a',
          700: '#2a2626',
        },
        red: {
          DEFAULT: '#FF372F',
          600: '#e62820',
          500: '#FF372F',
        },
        steel: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#D9D9D9',
          400: '#8A8A8A',
          600: '#4B4B4B',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        '8xl': '1600px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

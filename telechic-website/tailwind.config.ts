import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: '#E6F2F0',
            100: '#CCE5E0',
            200: '#A9CBC4',
            300: '#7FB3A8',
            400: '#609E91',
            500: '#0A6A56',
            600: '#085A49',
            700: '#074A3C',
            800: '#053A2F',
            900: '#042A22',
          },
          red: {
            50: '#FCEBE8',
            100: '#F9D7D1',
            200: '#F2AFA3',
            300: '#E98775',
            400: '#C67564',
            500: '#A82B11',
            600: '#8F250E',
            700: '#761F0C',
            800: '#5D1909',
            900: '#441207',
          },
        },
        sand: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E7E3DE',
          300: '#D9D3CB',
          400: '#CBC3B8',
          500: '#BDB3A5',
          600: '#9E9485',
          700: '#7F7665',
          800: '#605745',
          900: '#413925',
        },
        ink: '#131715',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-pressed': 'var(--color-primary-pressed)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia'],
        arabic: ['var(--font-arabic)', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        sm: '10px',
        DEFAULT: '14px',
        md: '14px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(19, 23, 21, 0.04), 0 1px 3px rgba(19, 23, 21, 0.08)',
        card: '0 4px 12px rgba(19, 23, 21, 0.06), 0 2px 6px rgba(19, 23, 21, 0.1)',
        elevated: '0 8px 24px rgba(19, 23, 21, 0.08), 0 4px 12px rgba(19, 23, 21, 0.12)',
      },
      transitionDuration: {
        '200': '200ms',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
        'sparkle': 'sparkle 600ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-press': 'scalePress 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        scalePress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.dir-rtl': {
          direction: 'rtl',
        },
        '.dir-ltr': {
          direction: 'ltr',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;

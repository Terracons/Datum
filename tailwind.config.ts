import type { Config } from 'tailwindcss';

/**
 * DATUM reads as instrumentation, not jobsite: near-white field, deep ink,
 * and an accent that doubles as the pass/fail data colour.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAFAFA',
          raised: '#FFFFFF',
          sunken: '#F1F3F5',
        },
        ink: {
          950: '#08090B',
          900: '#111418',
          800: '#1B2026',
          700: '#39424D',
          600: '#4E5865',
          500: '#66707B',
          400: '#858F9B',
          300: '#AFB7C1',
          200: '#D3D8DE',
          100: '#E5E9ED',
          50: '#F1F3F5',
        },
        signal: {
          pass: '#00A86B',
          'pass-ink': '#00764B',
          'pass-wash': '#E6F6EF',
          deviation: '#C98A00',
          'deviation-ink': '#8A5D00',
          'deviation-wash': '#FBF2DE',
          deficiency: '#C8382C',
          'deficiency-ink': '#9E2A20',
          'deficiency-wash': '#FBEBE9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: ['clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem)', { lineHeight: '1.45' }],
        sm: ['clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem)', { lineHeight: '1.55' }],
        base: ['clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)', { lineHeight: '1.7' }],
        lg: ['clamp(1.125rem, 1.07rem + 0.28vw, 1.25rem)', { lineHeight: '1.6' }],
        xl: ['clamp(1.3125rem, 1.24rem + 0.4vw, 1.5rem)', { lineHeight: '1.2' }],
        '2xl': ['clamp(1.625rem, 1.5rem + 0.7vw, 2.0625rem)', { lineHeight: '1.12' }],
        '3xl': ['clamp(2.0625rem, 1.83rem + 1.2vw, 2.875rem)', { lineHeight: '1.06' }],
        '4xl': ['clamp(2.625rem, 2.15rem + 2.4vw, 4rem)', { lineHeight: '1.02' }],
        '5xl': ['clamp(3.25rem, 2.4rem + 4.3vw, 5.75rem)', { lineHeight: '0.96' }],
      },
      maxWidth: {
        container: '1400px',
        content: '1200px',
        measure: '68ch',
      },
      borderRadius: { sm: '2px', DEFAULT: '3px', lg: '6px' },
      spacing: { 13: '3.25rem', section: '8rem' },
      boxShadow: {
        panel: '0 1px 2px rgba(17, 20, 24, 0.04), 0 8px 24px -12px rgba(17, 20, 24, 0.14)',
        lift: '0 2px 4px rgba(17, 20, 24, 0.05), 0 18px 40px -20px rgba(17, 20, 24, 0.22)',
      },
    },
  },
  plugins: [],
};

export default config;

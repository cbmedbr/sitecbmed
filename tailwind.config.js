/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Marca CBMed — rgb(27, 168, 131) = #1BA883 ──────────────────────
        brand: {
          50:  '#edfaf6',
          100: '#d0f3e9',
          200: '#a3e7d6',
          300: '#6dd4be',
          400: '#39bea6',
          500: '#1ba883',   // cor primária exata — rgb(27, 168, 131)
          600: '#148f6e',
          700: '#107258',
          800: '#0d5a46',
          900: '#094a3a',
        },
        // ── Dourado do logo ─────────────────────────────────────────────────
        gold: {
          400: '#d4b96a',
          500: '#c9a84c',
        },
        // ── Textos — slate escuro, nunca preto absoluto ──────────────────────
        ink: {
          DEFAULT: '#1E293B',   // slate-800
          light:   '#475569',   // slate-600
          muted:   '#94A3B8',   // slate-400
        },
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,5vw,4rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem,4vw,3rem)',     { lineHeight: '1.08', letterSpacing: '-0.025em'}],
        'display-md': ['clamp(1.5rem,3vw,2.25rem)',{ lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgb(0 0 0 / .06), 0 1px 2px -1px rgb(0 0 0 / .04)',
        'card-md': '0 4px 16px 0 rgb(0 0 0 / .08)',
        'card-lg': '0 8px 32px 0 rgb(0 0 0 / .10)',
        'brand':   '0 4px 20px 0 rgb(27 168 131 / .25)',
      },
    },
  },
  plugins: [],
}

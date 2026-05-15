/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Marca CBMed — escala numérica (mantida) ────────────────────────
        brand: {
          50:  '#edfaf6',
          100: '#d0f3e9',
          200: '#a3e7d6',
          300: '#6dd4be',
          400: '#39bea6',
          500: '#1ba883',
          600: '#148f6e',
          700: '#107258',
          800: '#0d5a46',
          900: '#094a3a',
        },
        // ── Dourado do logo (mantida) ───────────────────────────────────────
        gold: {
          400: '#d4b96a',
          500: '#c9a84c',
        },
        // ── Textos — slate escuro (mantida) ────────────────────────────────
        ink: {
          DEFAULT: '#1E293B',
          light:   '#475569',
          muted:   '#94A3B8',
        },
        // ── Backgrounds estruturais ─────────────────────────────────────────
        forest: '#0d2d1f',   // verde escuro — CTAs, headers, footer
        cream:  '#f0ede6',   // creme off-white — seções alternadas
        navy:   '#0a1628',   // tinta escura — para-medicos hero, S08
        // ── Tokens semânticos v2 ────────────────────────────────────────────
        'brand-deep':         'var(--brand-deep)',
        'brand-accent':       'var(--brand-accent)',
        'brand-accent-light': 'var(--brand-accent-light)',
        surface: {
          base:           'var(--surface-base)',
          elevated:       'var(--surface-elevated)',
          'brand-subtle': 'var(--surface-brand-subtle)',
          dark:           'var(--surface-dark)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          'on-brand': 'var(--text-on-brand)',
          'on-dark':  'var(--text-on-dark)',
        },
        border: {
          subtle:  'var(--border-subtle)',
          default: 'var(--border-default)',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'ui-serif', 'serif'],
        mono:  ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // ── Escala legada (mantida para compatibilidade) ────────────────────
        'display-xl': ['clamp(2.5rem,5vw,4rem)',    { lineHeight: '1.05', letterSpacing: '-0.03em'  }],
        'display-lg': ['clamp(2rem,4vw,3rem)',      { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        // ── Escala tipográfica v2 ───────────────────────────────────────────
        'display':  ['clamp(3.5rem,6vw,5rem)',      { lineHeight: '1.0',  letterSpacing: '-0.03em'  }],
        'h1':       ['clamp(2.5rem,4.5vw,3.75rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        'h2':       ['clamp(2rem,3.5vw,2.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h3':       ['1.75rem',                     { lineHeight: '1.3',  letterSpacing: '-0.005em' }],
        'h4':       ['1.25rem',                     { lineHeight: '1.4',  letterSpacing: '0'        }],
        'body-lg':  ['1.125rem',                    { lineHeight: '1.6',  letterSpacing: '0'        }],
        'body-md':  ['1rem',                        { lineHeight: '1.5',  letterSpacing: '0'        }],
        'body-sm':  ['0.875rem',                    { lineHeight: '1.5',  letterSpacing: '0'        }],
        'caption':  ['0.75rem',                     { lineHeight: '1.4',  letterSpacing: '0.05em'   }],
      },
      borderRadius: {
        'sm':  '0.5rem',
        'md':  '0.75rem',
        'lg':  '1rem',
        'xl':  '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgb(0 0 0 / .06), 0 1px 2px -1px rgb(0 0 0 / .04)',
        'card-md': '0 4px 16px 0 rgb(0 0 0 / .08)',
        'card-lg': '0 8px 32px 0 rgb(0 0 0 / .10)',
        'brand':   '0 4px 20px 0 rgb(27 168 131 / .25)',
        'warm':    '0 4px 20px 0 rgb(201 168 76 / .20)',
      },
    },
  },
  plugins: [],
}

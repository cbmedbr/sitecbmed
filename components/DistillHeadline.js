'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  { text: 'Proporcionamos',                  colored: false },
  { text: 'Qualidade de Vida',               colored: true  },
  { text: 'através da Cannabis Medicinal',   colored: false },
]

export default function DistillHeadline() {
  const prefersReduced = useReducedMotion()
  const [state, setState] = useState('hidden') // 'hidden' | 'animated' | 'instant'

  useEffect(() => {
    if (sessionStorage.getItem('hero-distill-done') || prefersReduced) {
      setState('instant')
      return
    }

    Promise.race([
      document.fonts.ready,
      new Promise(r => setTimeout(r, 1500))
    ]).then(() => {
      setState('animated')
      sessionStorage.setItem('hero-distill-done', '1')
    })
  }, [prefersReduced])

  return (
    <h1 className="font-serif text-display font-semibold text-ink mb-6">
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className={`block${line.colored ? ' text-brand-500' : ''}`}
          initial={{ opacity: 0, y: 24 }}
          animate={state === 'hidden' ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
          transition={
            state === 'animated'
              ? { duration: 0.65, ease: 'easeOut', delay: i * 0.12 }
              : { duration: 0 }
          }
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  )
}

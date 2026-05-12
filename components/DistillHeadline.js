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
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('hero-distill-done') || prefersReduced) return

    const start = () => {
      setAnimate(true)
      sessionStorage.setItem('hero-distill-done', '1')
    }

    Promise.race([
      document.fonts.ready,
      new Promise(r => setTimeout(r, 1500))
    ]).then(start)
  }, [prefersReduced])

  return (
    <h1 className="font-serif text-display font-semibold text-ink mb-6">
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className={`block${line.colored ? ' text-brand-500' : ''}`}
          initial={animate ? { opacity: 0, y: 24 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.12 }}
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  )
}

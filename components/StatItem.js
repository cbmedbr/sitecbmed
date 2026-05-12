'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function parseStat(valor) {
  const match = valor.match(/^([\d.]+)(\+?)(.*)$/)
  if (match) {
    const num = parseInt(match[1].replace(/\./g, ''), 10)
    if (!isNaN(num) && num > 0) return { num, suffix: match[2] + match[3], hasCount: true }
  }
  return { num: null, suffix: null, hasCount: false }
}

const DURATION = 1500
const easeOut = t => 1 - Math.pow(1 - t, 3)

export default function StatItem({ valor, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const prefersReduced = useReducedMotion()

  const { num, suffix, hasCount } = parseStat(valor)

  const [displayed, setDisplayed] = useState(hasCount ? '0' : valor)
  const [bouncing, setBouncing] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Repeat visit: skip animation, show final value immediately
  useEffect(() => {
    if (sessionStorage.getItem('stats-animated')) {
      if (hasCount) setDisplayed(num.toLocaleString('pt-BR'))
      setHasAnimated(true)
    }
  }, [])

  // Count-up on first enter viewport
  useEffect(() => {
    if (!isInView || hasAnimated) return

    if (!hasCount || prefersReduced) {
      if (hasCount) setDisplayed(num.toLocaleString('pt-BR'))
      setHasAnimated(true)
      sessionStorage.setItem('stats-animated', '1')
      return
    }

    const start = performance.now()
    let frame

    const tick = now => {
      const t = Math.min((now - start) / DURATION, 1)
      setDisplayed(Math.floor(easeOut(t) * num).toLocaleString('pt-BR'))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplayed(num.toLocaleString('pt-BR'))
        setBouncing(true)
        setHasAnimated(true)
        sessionStorage.setItem('stats-animated', '1')
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, hasAnimated, prefersReduced])

  return (
    <div ref={ref} className="py-2">
      <motion.div
        animate={bouncing ? { scale: [1, 1.08, 0.97, 1.02, 1] } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl md:text-3xl font-mono font-bold tabular-nums"
      >
        {displayed}{hasCount ? suffix : ''}
      </motion.div>
      <div className="text-brand-100 text-sm mt-0.5">{label}</div>
    </div>
  )
}

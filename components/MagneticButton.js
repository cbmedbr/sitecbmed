'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ href, className, children, ...props }) {
  const ref = useRef(null)
  const [isPointer, setIsPointer] = useState(false)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 400, damping: 30 })
  const y = useSpring(rawY, { stiffness: 400, damping: 30 })

  useEffect(() => {
    setIsPointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  function onMouseMove(e) {
    if (!isPointer) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.25)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.25)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </motion.a>
  )
}

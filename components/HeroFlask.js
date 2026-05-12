'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function HeroFlask() {
  const ref = useRef(null)
  const [isPointer, setIsPointer] = useState(false)
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    setIsPointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  function onMouseMove(e) {
    if (!isPointer) return
    const rect = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2)
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2)
    rawRotateY.set(dx * 8)
    rawRotateX.set(-dy * 8)
  }

  function onMouseLeave() {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className="relative w-full max-w-xs mx-auto"
      style={{ perspective: '800px' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div ref={ref} style={{ rotateX, rotateY }}>
        <Image
          src="/produto-hero.png"
          alt="Frasco CBMed conta-gotas"
          width={465}
          height={514}
          className="w-full h-auto drop-shadow-[0_32px_48px_rgba(13,90,70,0.20)]"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

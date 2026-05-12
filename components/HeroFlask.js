'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroFlask() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      className="relative w-full max-w-xs mx-auto"
    >
      <Image
        src="/produto-hero.png"
        alt="Frasco CBMed conta-gotas"
        width={465}
        height={514}
        className="w-full h-auto drop-shadow-[0_32px_48px_rgba(13,90,70,0.20)]"
        priority
      />
    </motion.div>
  )
}

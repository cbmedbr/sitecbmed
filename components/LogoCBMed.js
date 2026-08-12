import Image from 'next/image'

// Proporção real do asset (1948x901, recortado no conteúdo — sem margem morta)
const ASPECT = 1948 / 901

export default function LogoCBMed({ className = '', height = 48 }) {
  const width = Math.round(height * ASPECT)

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Image
        src="/logo-cbmed.avif"
        alt="CBMed — CannaBio Medicinal"
        fill
        sizes={`${width}px`}
        className="object-contain"
        priority
      />
    </div>
  )
}

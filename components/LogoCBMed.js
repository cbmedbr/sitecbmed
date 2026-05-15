import Image from 'next/image'

export default function LogoCBMed({ className = '', dropSize = 48 }) {
  const height = dropSize
  const width = Math.round(dropSize * 3.0)

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Image
        src="/logo-cbmed.png"
        alt="CBMed"
        fill
        sizes={`${width}px`}
        className="object-contain"
        priority
      />
    </div>
  )
}

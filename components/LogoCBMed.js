import Image from 'next/image'

export default function LogoCBMed({ className = '', dropSize = 48 }) {
  const height = dropSize
  const width  = Math.round(dropSize * 3.0)

  return (
    <Image
      src="/logo-cbmed.png"
      alt="CBMed"
      width={width}
      height={height}
      style={{ width: 'auto', height: 'auto' }}
      className={className}
      priority
    />
  )
}

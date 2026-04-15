/**
 * Logo oficial CBMed
 * Usa /public/logo-cbmed.png (PNG com fundo transparente)
 * Props:
 *   dropSize  — altura da imagem em px (default 48)
 *   className — classes extras no wrapper
 */
export default function LogoCBMed({ className = '', dropSize = 48 }) {
  const height = dropSize
  const width  = Math.round(dropSize * 3.0) // proporção original ~3:1

  return (
    <img
      src="/logo-cbmed.png"
      alt="CBMed"
      width={width}
      height={height}
      style={{ height: height + 'px', width: 'auto', display: 'block' }}
      className={className}
    />
  )
}

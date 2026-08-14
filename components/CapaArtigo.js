import Image from 'next/image'

/**
 * Capa de card de artigo. O contrato do n8n não inclui imagem, então o
 * fallback é a regra, não a exceção: um bloco tipográfico nas cores da
 * marca (verde escuro → teal), com a inicial do título em serifa.
 * Artigos migrados do site antigo mantêm `image` no frontmatter.
 */
export default function CapaArtigo({ artigo, sizes, priority = false, className = '' }) {
  if (artigo.image) {
    return (
      <Image
        src={artigo.image}
        alt=""
        fill
        className={`object-cover ${className}`}
        sizes={sizes}
        priority={priority}
      />
    )
  }

  const inicial = (artigo.title || 'C').trim().charAt(0).toUpperCase()

  return (
    <div
      aria-hidden
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0d2d1f] via-[#11402c] to-brand-600 select-none ${className}`}
    >
      <span className="font-serif text-6xl md:text-7xl font-semibold text-cream/90 leading-none">
        {inicial}
      </span>
      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-300">
        {artigo.category}
      </span>
    </div>
  )
}

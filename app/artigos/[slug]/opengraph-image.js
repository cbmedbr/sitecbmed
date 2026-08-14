import { ImageResponse } from 'next/og'
import { getArtigoBySlug } from '../../../lib/artigos'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'CBMed · Artigos'

// Cores da marca: verde escuro (forest) + creme + teal.
const FOREST = '#0d2d1f'
const CREME = '#f0ede6'
const TEAL = '#1BA883'

export default async function Image({ params }) {
  const { slug } = await params
  const artigo = getArtigoBySlug(slug)
  const titulo = artigo?.title ?? 'Artigos sobre Cannabis Medicinal'
  const categoria = artigo?.category ?? 'Artigo'

  // Título muito longo diminui o corpo para não estourar o quadro.
  const tamanhoTitulo = titulo.length > 60 ? 56 : 68

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: FOREST,
          backgroundImage: `radial-gradient(circle at 85% 15%, rgba(27,168,131,0.25), transparent 55%)`,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              backgroundColor: TEAL,
              color: CREME,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '10px 22px',
              borderRadius: 999,
            }}
          >
            {categoria}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            color: CREME,
            fontSize: tamanhoTitulo,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {titulo}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: CREME }}>
            CBMed{' '}
            <span style={{ color: TEAL, margin: '0 14px' }}>·</span> Artigos
          </div>
          <div style={{ display: 'flex', width: 88, height: 10, backgroundColor: TEAL, borderRadius: 999 }} />
        </div>
      </div>
    ),
    { ...size }
  )
}

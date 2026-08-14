import Link from 'next/link'
import { getAllArtigos, formatarData } from '../lib/artigos'
import CapaArtigo from './CapaArtigo'

const tagColor = {
  'Saúde Mental': 'bg-brand-50 text-brand-600',
  'Regulatório':  'bg-amber-50 text-amber-700',
  'Neurologia':   'bg-sky-50 text-sky-700',
  'Ciência':      'bg-emerald-50 text-emerald-700',
}

function Tag({ categoria }) {
  const cls = tagColor[categoria] ?? 'bg-brand-50 text-brand-600'
  return (
    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full select-none ${cls}`}>
      {categoria}
    </span>
  )
}

function Meta({ data, readingTime }) {
  return (
    <p className="font-mono text-xs text-ink-muted">
      {formatarData(data)} · {readingTime} min
    </p>
  )
}

export default function ArticlesSection() {
  // Os 3 mais recentes de content/artigos/ — artigo novo do n8n entra sozinho.
  const [hero, ...secundarios] = getAllArtigos().slice(0, 3)

  if (!hero) return null

  return (
    <section className="py-20 bg-[#F0EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500 block mb-3">
              INSIGHTS CLÍNICOS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-tight">
              Conhecimento que respalda decisões
            </h2>
            <p className="text-ink-light text-base mt-2">
              Evidências científicas sobre Cannabis Medicinal, curadas para a prática clínica.
            </p>
          </div>
          <Link href="/artigos" className="text-brand-500 hover:text-brand-600 font-semibold text-sm hidden sm:inline-flex items-center gap-1 transition-colors shrink-0">
            Ver todos os artigos →
          </Link>
        </div>

        {/* Hero article */}
        <Link
          href={`/artigos/${hero.slug}`}
          className="group flex flex-col lg:flex-row gap-8 mb-10 bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full lg:w-[55%] aspect-[3/2] lg:aspect-auto lg:min-h-[360px] shrink-0">
            <CapaArtigo
              artigo={hero}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-12">
            <Tag categoria={hero.category} />
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-ink mt-4 mb-4 leading-tight group-hover:text-brand-600 transition-colors">
              {hero.title}
            </h3>
            <p className="text-ink-light text-base leading-relaxed mb-6 line-clamp-3">
              {hero.description}
            </p>
            <Meta data={hero.date} readingTime={hero.readingTime} />
            <span className="mt-6 text-brand-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Ler artigo completo →
            </span>
          </div>
        </Link>

        {/* Cards secundários */}
        {secundarios.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secundarios.map(artigo => (
              <Link
                key={artigo.slug}
                href={`/artigos/${artigo.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[16/9]">
                  <CapaArtigo
                    artigo={artigo}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <Tag categoria={artigo.category} />
                  <h3 className="font-serif text-xl font-semibold text-ink mt-3 mb-3 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                    {artigo.title}
                  </h3>
                  <p className="text-ink-light text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {artigo.description}
                  </p>
                  <Meta data={artigo.date} readingTime={artigo.readingTime} />
                  <span className="mt-4 text-brand-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler artigo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile CTA */}
        <div className="text-center mt-8 sm:hidden">
          <Link href="/artigos" className="btn-secondary text-sm">Ver todos os artigos</Link>
        </div>

      </div>
    </section>
  )
}

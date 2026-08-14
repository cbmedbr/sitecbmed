import Link from 'next/link'
import InternalPageHero from './InternalPageHero'
import MagneticButton from './MagneticButton'
import ArtigoCard from './ArtigoCard'

/**
 * Miolo compartilhado entre /artigos (página 1) e /artigos/pagina/[n]:
 * hero curto da seção, grid responsivo de cards e navegação de páginas.
 * Fundo creme #f0ede6 (token `cream`), conforme o sistema de fundos por seção.
 */

function LinkPagina({ n }) {
  return n === 1 ? '/artigos' : `/artigos/pagina/${n}`
}

function NavPaginas({ pagina, totalPaginas }) {
  if (totalPaginas <= 1) return null

  const numeros = Array.from({ length: totalPaginas }, (_, i) => i + 1)

  return (
    <nav aria-label="Páginas de artigos" className="mt-12 flex items-center justify-center gap-2">
      {pagina > 1 && (
        <Link
          href={LinkPagina({ n: pagina - 1 })}
          rel="prev"
          className="px-4 h-10 inline-flex items-center rounded-xl border border-ink/15 text-ink text-sm font-semibold hover:border-brand-400 hover:text-brand-600 transition-colors"
        >
          ← Anterior
        </Link>
      )}

      {numeros.map(n => (
        <Link
          key={n}
          href={LinkPagina({ n })}
          aria-current={n === pagina ? 'page' : undefined}
          className={`w-10 h-10 inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
            n === pagina
              ? 'bg-brand-500 text-white'
              : 'border border-ink/15 text-ink hover:border-brand-400 hover:text-brand-600'
          }`}
        >
          {n}
        </Link>
      ))}

      {pagina < totalPaginas && (
        <Link
          href={LinkPagina({ n: pagina + 1 })}
          rel="next"
          className="px-4 h-10 inline-flex items-center rounded-xl border border-ink/15 text-ink text-sm font-semibold hover:border-brand-400 hover:text-brand-600 transition-colors"
        >
          Próxima →
        </Link>
      )}
    </nav>
  )
}

export default function ListagemArtigos({ artigos, pagina, totalPaginas }) {
  return (
    <>
      <InternalPageHero
        eyebrow="BASE DE CONHECIMENTO"
        title="Artigos sobre Cannabis Medicinal"
        subtitle="Conteúdo educativo produzido a partir de estudos indexados no PubMed: ciência, regulamentação ANVISA e evidências clínicas, para pacientes e profissionais de saúde."
        bg="caramelo"
        image="/hero-artigos.png"
      />

      <section className="py-14 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pagina > 1 && (
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-8">
              Página {pagina} de {totalPaginas}
            </p>
          )}

          {artigos.length === 0 ? (
            <div className="card border-dashed border-2 border-ink/10 bg-white/50 p-12 text-center">
              <h2 className="font-serif font-semibold text-ink text-xl mb-2">Novos artigos em breve</h2>
              <p className="text-ink-muted text-sm">Estamos preparando os primeiros conteúdos desta seção.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artigos.map((artigo, i) => (
                <ArtigoCard key={artigo.slug} artigo={artigo} priority={pagina === 1 && i < 3} />
              ))}
            </div>
          )}

          <NavPaginas pagina={pagina} totalPaginas={totalPaginas} />
        </div>
      </section>

      {/* CTA institucional — sem promessa terapêutica */}
      <section className="py-14 bg-forest">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif font-semibold text-white text-2xl mb-3">Dúvidas sobre o processo regulatório?</h2>
          <p className="text-white/70 mb-6">Nossa equipe orienta pacientes e médicos prescritores sobre o acesso legal via RDC 660.</p>
          <MagneticButton href="/contato" className="btn-primary">
            Falar com a equipe
          </MagneticButton>
        </div>
      </section>
    </>
  )
}

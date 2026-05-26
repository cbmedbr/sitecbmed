import Image from 'next/image'
import Link from 'next/link'
import { artigos, getArtigoPorSlug, getArtigosRecentes, formatarData } from '../../../lib/artigos'
import { notFound } from 'next/navigation'
import InternalPageHero from '../../../components/InternalPageHero'

export async function generateStaticParams() {
  return artigos.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const artigo = getArtigoPorSlug(params.slug)
  if (!artigo) return {}
  return {
    title: `${artigo.titulo} | CBMed`,
    description: artigo.resumo,
  }
}

// ─── Renderizador de seção ────────────────────────────────────────────────────
function Secao({ secao }) {
  switch (secao.tipo) {
    case 'intro':
      return (
        <p className="text-lg text-ink-light leading-relaxed mb-8 font-light border-l-4 border-brand-400 pl-5">
          {secao.conteudo}
        </p>
      )
    case 'h2':
      return (
        <div className="mb-6">
          <h2 className="font-serif font-semibold text-ink text-xl md:text-2xl mb-4">{secao.titulo}</h2>
          {secao.conteudo && secao.conteudo.split('\n\n').map((p, i) => (
            <p key={i} className="text-ink-light leading-relaxed mb-3">{p}</p>
          ))}
        </div>
      )
    case 'paragrafo':
      return <p className="text-ink-light leading-relaxed mb-6">{secao.conteudo}</p>
    case 'lista':
      return (
        <ul className="space-y-3 mb-8">
          {secao.itens.map((item, i) => {
            const [bold, ...rest] = item.split(':')
            const temBold = item.includes(':') && bold.length < 60
            return (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  {i + 1}
                </div>
                <span className="text-ink-light leading-relaxed text-sm md:text-base">
                  {temBold ? (
                    <><strong className="text-ink">{bold}:</strong>{rest.join(':')}</>
                  ) : item}
                </span>
              </li>
            )
          })}
        </ul>
      )
    case 'citacao':
      return (
        <blockquote className="my-8 bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl p-6">
          <p className="text-ink italic leading-relaxed mb-3 text-lg">{secao.conteudo}</p>
          {secao.fonte && (
            <cite className="text-brand-600 text-sm font-semibold not-italic">{secao.fonte}</cite>
          )}
        </blockquote>
      )
    case 'referencias':
      return (
        <div className="mt-10 pt-8 border-t border-ink/10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-muted mb-4">Referências</h3>
          <ol className="space-y-2">
            {secao.itens.map((ref, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                <span className="font-bold text-brand-400 shrink-0">[{i + 1}]</span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      )
    default:
      return null
  }
}

export default function ArtigoPage({ params }) {
  const artigo = getArtigoPorSlug(params.slug)
  if (!artigo) notFound()

  const relacionados = getArtigosRecentes(3).filter(a => a.slug !== artigo.slug).slice(0, 2)

  return (
    <>
      <InternalPageHero
        eyebrow="ARTIGO"
        title={artigo.titulo}
        subtitle={artigo.subtitulo}
        bg="caramelo"
      />

      {/* ── Corpo do artigo ── */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted font-mono mb-10">
            <span>{artigo.autor}</span>
            <span>·</span>
            <span>{formatarData(artigo.data)}</span>
            <span>·</span>
            <span>{artigo.tempoLeitura} de leitura</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Conteúdo principal */}
            <article className="lg:col-span-2">
              {/* Imagem de capa */}
              <div className="relative rounded-2xl overflow-hidden mb-10 bg-brand-50 h-64 md:h-80">
                <Image
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              {/* Seções */}
              <div className="prose-custom">
                {artigo.secoes.map((secao, i) => (
                  <Secao key={i} secao={secao} />
                ))}
              </div>

              {/* Rodapé do artigo */}
              <div className="mt-10 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-sm text-ink-muted font-mono">
                  Publicado em {formatarData(artigo.data)} · Equipe Científica CBMed
                </div>
                <Link href="/artigos" className="btn-ghost text-sm">
                  ← Voltar para artigos
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Aviso clínico — mantém bg-amber-50 intencional */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <div>
                    <h3 className="font-bold text-amber-800 text-sm mb-1">Aviso Clínico</h3>
                    <p className="text-amber-700 text-xs leading-relaxed">
                      Este artigo tem finalidade educativa e informativa. Não substitui avaliação e prescrição médica individualizada. Consulte sempre um profissional de saúde habilitado.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA acolhimento */}
              <div className="bg-white border border-ink/10 rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-ink mb-2">Precisa de orientação?</h3>
                <p className="text-ink-light text-sm mb-4 leading-relaxed">
                  Nossa equipe especializada está pronta para esclarecer dúvidas e iniciar o seu acolhimento.
                </p>
                <Link href="/acolhimento" className="btn-primary w-full justify-center text-sm py-3">
                  Iniciar Acolhimento
                </Link>
                <Link href="/para-medicos" className="btn-outline w-full justify-center text-sm py-2.5 mt-2">
                  Sou Médico Prescritor
                </Link>
              </div>

              {/* Artigos relacionados */}
              {relacionados.length > 0 && (
                <div>
                  <h3 className="font-mono text-ink text-sm font-bold uppercase tracking-widest mb-4">Leia também</h3>
                  <div className="space-y-4">
                    {relacionados.map(rel => (
                      <Link key={rel.slug} href={`/artigos/${rel.slug}`}>
                        <div className="group flex gap-3 p-4 rounded-xl border border-ink/10 hover:border-brand-200 hover:bg-brand-50/30 transition-colors">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-brand-50 shrink-0">
                            <Image
                              src={rel.imagem}
                              alt={rel.titulo}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wide text-brand-500">{rel.categoria}</span>
                            <p className="text-ink text-sm font-medium leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">{rel.titulo}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

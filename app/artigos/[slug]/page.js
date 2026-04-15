import Link from 'next/link'
import { artigos, getArtigoPorSlug, getArtigosRecentes, formatarData } from '../../../lib/artigos'
import { notFound } from 'next/navigation'

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
        <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light border-l-4 border-brand-400 pl-5">
          {secao.conteudo}
        </p>
      )
    case 'h2':
      return (
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{secao.titulo}</h2>
          {secao.conteudo && secao.conteudo.split('\n\n').map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-3">{p}</p>
          ))}
        </div>
      )
    case 'paragrafo':
      return <p className="text-gray-600 leading-relaxed mb-6">{secao.conteudo}</p>
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
                <span className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {temBold ? (
                    <><strong className="text-gray-800">{bold}:</strong>{rest.join(':')}</>
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
          <p className="text-gray-700 italic leading-relaxed mb-3 text-lg">{secao.conteudo}</p>
          {secao.fonte && (
            <cite className="text-brand-600 text-sm font-semibold not-italic">— {secao.fonte}</cite>
          )}
        </blockquote>
      )
    case 'referencias':
      return (
        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Referências</h3>
          <ol className="space-y-2">
            {secao.itens.map((ref, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
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
      {/* ── Hero do artigo ── */}
      <section className="hero-clean py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            <Link href="/artigos" className="hover:text-brand-600 transition-colors">Artigos</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-gray-600 truncate max-w-xs">{artigo.titulo}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="badge mb-5">{artigo.categoria}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {artigo.titulo}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">{artigo.subtitulo}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                {artigo.autor}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {formatarData(artigo.data)}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {artigo.tempoLeitura} de leitura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corpo do artigo ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Conteúdo principal */}
            <article className="lg:col-span-2">
              {/* Imagem de capa */}
              <div className="rounded-2xl overflow-hidden mb-10 bg-brand-50 h-64 md:h-80">
                <img
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Seções */}
              <div className="prose-custom">
                {artigo.secoes.map((secao, i) => (
                  <Secao key={i} secao={secao} />
                ))}
              </div>

              {/* Rodapé do artigo */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-400">
                  Publicado em {formatarData(artigo.data)} · Equipe Científica CBMed
                </div>
                <Link href="/artigos" className="btn-ghost text-sm">
                  ← Voltar para artigos
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Aviso clínico */}
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
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Precisa de orientação?</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
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
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">Leia também</h3>
                  <div className="space-y-4">
                    {relacionados.map(rel => (
                      <Link key={rel.slug} href={`/artigos/${rel.slug}`}>
                        <div className="group flex gap-3 p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors">
                          <div className="w-14 h-14 rounded-lg overflow-hidden bg-brand-50 shrink-0">
                            <img src={rel.imagem} alt={rel.titulo} className="w-full h-full object-cover"/>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wide text-brand-500">{rel.categoria}</span>
                            <p className="text-gray-800 text-sm font-medium leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">{rel.titulo}</p>
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

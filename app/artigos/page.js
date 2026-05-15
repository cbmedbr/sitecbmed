import Image from 'next/image'
import Link from 'next/link'
import { artigos, formatarData } from '../../lib/artigos'

export const metadata = {
  title: 'Artigos Científicos | CBMed',
  description: 'Base de conhecimento CBMed: artigos técnicos sobre Cannabis Medicinal, CBD, regulamentação ANVISA e evidências clínicas atualizadas.',
}

export default function Artigos() {
  const recentes    = artigos.slice(0, 1)[0]
  const demais      = artigos.slice(1)

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-clean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="section-divider"/>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Base de Conhecimento
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Artigos científicos, análises regulatórias e evidências clínicas sobre Cannabis Medicinal — produzidos pela equipe técnica CBMed para pacientes e profissionais de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* ── Artigo em destaque ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-6">Artigo em destaque</p>
          <Link href={`/artigos/${recentes.slug}`}>
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Imagem */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-brand-50">
                <Image
                  src={recentes.imagem}
                  alt={recentes.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {recentes.categoria}
                </span>
              </div>
              {/* Conteúdo */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <span>{formatarData(recentes.data)}</span>
                  <span>·</span>
                  <span>{recentes.tempoLeitura} de leitura</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                  {recentes.titulo}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{recentes.resumo}</p>
                <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm">
                  Ler artigo completo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Demais artigos ── */}
      <section className="py-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Todos os artigos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demais.map(artigo => (
              <Link key={artigo.slug} href={`/artigos/${artigo.slug}`}>
                <div className="group card h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden bg-brand-50">
                    <Image
                      src={artigo.imagem}
                      alt={artigo.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-white text-brand-600 text-xs font-bold px-2.5 py-1 rounded-full border border-brand-100">
                      {artigo.categoria}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span>{formatarData(artigo.data)}</span>
                      <span>·</span>
                      <span>{artigo.tempoLeitura}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors flex-1">
                      {artigo.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {artigo.resumo}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold mt-auto">
                      Ler artigo
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Card "em breve" para incentivar retorno */}
            <div className="card flex flex-col items-center justify-center p-8 text-center border-dashed border-2 border-gray-200 bg-gray-50/50 min-h-[300px]">
              <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-700 mb-2">Novo artigo em breve</h3>
              <p className="text-gray-400 text-sm">Publicamos novos conteúdos científicos toda semana. Volte em breve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-brand-50 border-t border-brand-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Tem dúvidas sobre Cannabis Medicinal?</h2>
          <p className="text-gray-500 mb-6">Nossa equipe especializada está disponível para orientar pacientes e médicos prescritores.</p>
          <Link href="/acolhimento" className="btn-primary">
            Iniciar Acolhimento
          </Link>
        </div>
      </section>
    </>
  )
}

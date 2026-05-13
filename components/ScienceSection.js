import Link from 'next/link'

const citacoes = [
  {
    num: '¹',
    texto: 'Cannabidiol significantly reduced seizure frequency in patients with Dravet syndrome — median reduction of 38.9% vs 13.3% placebo.',
    fonte: 'New England Journal of Medicine, 2021',
  },
  {
    num: '²',
    texto: 'CBD adjunctive therapy resulted in greater reduction in drop-seizure frequency than placebo in patients with Lennox-Gastaut syndrome.',
    fonte: 'Lancet Neurology, 2019',
  },
  {
    num: '³',
    texto: 'Cannabidiol was associated with significantly reduced anxiety scores in patients with social anxiety disorder in a randomized controlled trial.',
    fonte: 'JAMA, 2019',
  },
]

const coaItems = [
  'Cannabidiol (CBD) ≥99%',
  'THC <0,3%',
  'Metais pesados: ausente',
  'Pesticidas: ausente',
]

const IconCheck = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
  </svg>
)

export default function ScienceSection() {
  return (
    <section className="py-20 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Coluna esquerda: editorial */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500 block mb-4">
              BASE CIENTÍFICA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-8 leading-tight">
              A ciência por trás do tratamento
            </h2>

            <div className="space-y-5 mb-6">
              {citacoes.map((c, i) => (
                <blockquote key={i} className="border-l-2 border-brand-300 pl-4">
                  <p className="text-sm text-ink-light leading-relaxed font-mono">
                    <span className="text-brand-500 font-bold mr-1">{c.num}</span>
                    {c.texto}
                  </p>
                  <cite className="block mt-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-500 not-italic">
                    {c.fonte}
                  </cite>
                </blockquote>
              ))}
            </div>

            <Link href="/ciencia" className="btn-ghost px-0 text-sm inline-flex mb-10">
              Ver estudos completos →
            </Link>

            <div className="border-t border-slate-200 pt-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted block mb-4">
                Certificado de Análise (COA)
              </span>
              <ul className="space-y-2.5 mb-5">
                {coaItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3"/>
                    </span>
                    <span className="font-mono text-xs text-ink-light">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-ghost px-0 text-sm inline-flex">
                Baixar COA →
              </a>
            </div>
          </div>

          {/* Coluna direita: molécula */}
          <div className="flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md mx-auto"
            >
              <source src="/molecula-cbd.webm" type="video/webm" />
            </video>
          </div>

        </div>
      </div>
    </section>
  )
}

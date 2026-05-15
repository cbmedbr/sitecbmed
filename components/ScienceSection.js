import Link from 'next/link'
import MoleculeCBD from './MoleculeCBD'

const citacoes = [
  {
    num: '¹',
    texto: 'O canabidiol reduziu significativamente a frequência de crises em pacientes com síndrome de Dravet — redução mediana de 38,9% vs 13,3% no placebo.',
    fonte: 'New England Journal of Medicine, 2021',
  },
  {
    num: '²',
    texto: 'A terapia adjuvante com CBD resultou em maior redução na frequência de crises atônicas do que o placebo em pacientes com síndrome de Lennox-Gastaut.',
    fonte: 'Lancet Neurology, 2019',
  },
  {
    num: '³',
    texto: 'O canabidiol foi associado a redução significativa nos escores de ansiedade em pacientes com transtorno de ansiedade social em ensaio clínico randomizado.',
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
    <section className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Coluna esquerda: editorial */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-400 block mb-4">
              BASE CIENTÍFICA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-8 leading-tight">
              A ciência por trás do tratamento
            </h2>

            <div className="space-y-4 mb-6">
              {citacoes.map((c, i) => (
                <blockquote key={i} className="bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-2xl p-5">
                  <p className="text-sm text-white/75 leading-relaxed font-mono">
                    <span className="text-brand-400 font-bold mr-1">{c.num}</span>
                    {c.texto}
                  </p>
                  <cite className="block mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-400 not-italic">
                    {c.fonte}
                  </cite>
                </blockquote>
              ))}
            </div>

            <Link href="/ciencia" className="text-brand-400 hover:text-brand-300 text-sm font-semibold inline-flex items-center gap-1 mb-10 transition-colors">
              Ver estudos completos →
            </Link>

            <div className="border-t border-white/15 pt-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-4">
                Certificado de Análise (COA)
              </span>
              <ul className="space-y-2.5 mb-5">
                {coaItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3"/>
                    </span>
                    <span className="font-mono text-xs text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-brand-400 hover:text-brand-300 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                Baixar COA →
              </a>
            </div>
          </div>

          {/* Coluna direita: molécula CBD interativa */}
          <div className="flex items-center justify-center h-full">
            <MoleculeCBD size={320} />
          </div>

        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { WHATSAPP_DR } from '../../lib/constants'
import InternalPageHero from '../../components/InternalPageHero'
import MagneticButton from '../../components/MagneticButton'
import { Brain, Activity, Layers, FlaskConical } from 'lucide-react'

export const metadata = {
  title: 'Ciência',
  description: 'Base científica sobre canabinoides e Cannabis Medicinal. Estudos clínicos, mecanismos de ação e referências para médicos prescritores.',
}

const estudos = [
  { titulo: 'CBD e Epilepsia Refratária',       referencia: 'Devinsky O. et al. — New England Journal of Medicine (2017)',    resumo: 'Ensaio clínico randomizado demonstrou redução de 36,5% nas convulsões em pacientes com Síndrome de Dravet tratados com cannabidiol oral. Nível de evidência A.', tags: ['Epilepsia', 'Pediatria', 'Nível A'], cor: 'brand' },
  { titulo: 'Canabinoides na Dor Crônica',       referencia: 'Aviram J. et al. — Journal of Pain Research (2017)',            resumo: 'Revisão sistemática de 71 estudos demonstrou que canabinoides reduzem significativamente dor crônica neuropática, com boa tolerabilidade a longo prazo.', tags: ['Dor Neuropática', 'Crônica', 'Revisão Sistemática'], cor: 'blue' },
  { titulo: 'CBD no Transtorno de Ansiedade',    referencia: 'Blessing E.M. et al. — Neurotherapeutics (2015)',               resumo: 'Revisão de estudos clínicos sugere potencial terapêutico do CBD em múltiplas formas de ansiedade, incluindo TEPT e TOC, sem efeitos sedativos relevantes.', tags: ['Ansiedade', 'TEPT', 'Nível B'], cor: 'purple' },
  { titulo: 'Cannabis e Qualidade do Sono',      referencia: 'Shannon S. et al. — The Permanente Journal (2019)',             resumo: 'Estudo clínico com 72 adultos mostrou que CBD reduziu ansiedade em 79,2% dos casos e melhorou o sono em 66,7% na primeira avaliação mensal.', tags: ['Sono', 'Ansiedade', 'Nível B'], cor: 'indigo' },
  { titulo: 'CBD no Espectro Autista (TEA)',     referencia: 'Barchel D. et al. — Frontiers in Neurology (2019)',             resumo: 'Estudo prospectivo com 53 crianças com autismo mostrou melhora em comportamento (61%), comunicação (47%) e ansiedade (39%) com uso de óleo de cannabis.', tags: ['Autismo', 'TEA', 'Pediatria'], cor: 'teal' },
  { titulo: 'Esclerose Múltipla e Canabinoides', referencia: 'Zajicek J. et al. — The Lancet (2003)',                         resumo: 'Ensaio clínico randomizado com 630 pacientes demonstrou efeitos positivos na espasticidade, dor e qualidade de vida em pacientes com esclerose múltipla.', tags: ['Esclerose Múltipla', 'Espasticidade', 'Nível B'], cor: 'orange' },
]

const mecanismos = [
  { titulo: 'Sistema Endocanabinoide',          texto: 'O CBD age modulando o sistema endocanabinoide (SEC), composto pelos receptores CB1 e CB2, endocanabinoides endógenos e enzimas metabólicas. O SEC regula funções como dor, inflamação, humor, sono e neuroproteção.', icone: Brain },
  { titulo: 'Ação nos Receptores CB1 e CB2',    texto: 'Diferente do THC, o CBD tem baixa afinidade pelos receptores CB1 e CB2, modulando-os indiretamente. Isso explica a ausência de efeitos psicoativos e o perfil de segurança favorável.', icone: Activity },
  { titulo: 'Efeito Entourage (Full Spectrum)', texto: 'Formulações Full Spectrum contêm o espectro completo de canabinoides (CBD, CBG, CBC, CBDA), terpenos e flavonoides. A interação sinérgica entre esses compostos potencializa os efeitos terapêuticos.', icone: Layers },
  { titulo: 'Farmacocinética e Dosagem',        texto: 'A biodisponibilidade sublingual do CBD é de 13–19%. Meia-vida de eliminação: 18–32 horas. A titulação gradual (dose baixa → ajuste conforme resposta) é o protocolo padrão recomendado.', icone: FlaskConical },
]

const corMap = {
  brand:  { bg: 'bg-brand-50',  border: 'border-brand-100',  tag: 'bg-brand-100 text-brand-700'  },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   tag: 'bg-blue-100 text-blue-700'    },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', tag: 'bg-purple-100 text-purple-700'},
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', tag: 'bg-indigo-100 text-indigo-700'},
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   tag: 'bg-teal-100 text-teal-700'   },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', tag: 'bg-orange-100 text-orange-700'},
}

export default function Ciencia() {
  return (
    <>
      {/* Hero */}
      <InternalPageHero
        eyebrow="BASE CIENTÍFICA"
        title="A ciência por trás do CBD"
        subtitle="Evidências clínicas, mecanismos de ação e referências peer-reviewed para médicos prescritores e pacientes."
        bg="caramelo"
      />

      {/* Mecanismos */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Farmacologia</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">Como o CBD atua no organismo</h2>
            <p className="section-subtitle mx-auto text-ink-light">
              Mecanismos fisiológicos que fundamentam os efeitos terapêuticos dos canabinoides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mecanismos.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-50 rounded-xl p-2 inline-flex shrink-0">
                    <m.icone size={24} className="text-brand-500" />
                  </div>
                  <h3 className="font-serif font-semibold text-ink">{m.titulo}</h3>
                </div>
                <p className="text-ink-light text-sm leading-relaxed">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estudos clínicos */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Literatura Revisada por Pares</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">Estudos clínicos de referência</h2>
            <p className="section-subtitle mx-auto text-ink-light">
              Publicações científicas que fundamentam o uso clínico de CBD nas principais condições tratadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estudos.map((e, i) => {
              const c = corMap[e.cor]
              return (
                <div key={i} className={`rounded-2xl p-7 border flex flex-col ${c.bg} ${c.border}`}>
                  <h3 className="font-serif font-semibold text-ink mb-1">{e.titulo}</h3>
                  <p className="font-mono text-xs text-ink-muted italic mb-4">{e.referencia}</p>
                  <p className="text-ink-light text-sm leading-relaxed flex-1 mb-5">{e.resumo}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map(tag => (
                      <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-ink-muted mt-8">
            As referências acima são para fins informativos e educativos. A indicação terapêutica é de competência exclusiva do médico prescritor.
          </p>
        </div>
      </section>

      {/* RDC 660 */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Marco Regulatório</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">A RDC 660 explicada</h2>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-10">
            <p className="text-ink-light leading-relaxed mb-5">
              A <strong>Resolução da Diretoria Colegiada nº 660</strong>, publicada pela ANVISA em 2022, regulamenta a importação por pessoa física de produtos à base de Cannabis para uso próprio mediante prescrição médica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                'Permite importação individual (sem fins comerciais)',
                'Exige prescrição médica de profissional habilitado',
                'Produto deve ter autorização no país de origem',
                'THC limitado a 0,2% em produtos para uso contínuo',
                'Processo conduzido pelo paciente ou representante legal',
                'Autorização válida para cada importação solicitada',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-ink-light">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-ink-muted text-sm">
              A CBMed assessora todo esse processo, garantindo conformidade e agilidade em cada etapa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Médico? Acesse nosso canal exclusivo</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Disponibilizamos material técnico adicional, protocolos de prescrição e suporte direto para médicos parceiros CBMed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-4 px-8 text-base">
              Canal do Médico Prescritor
            </MagneticButton>
            <Link href="/para-medicos" className="inline-flex items-center gap-2 border-2 border-white/20 text-white/80 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-base">
              Área para Médicos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

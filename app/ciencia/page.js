import Link from 'next/link'
import { WHATSAPP_DR } from '../../lib/constants'

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
  { titulo: 'Sistema Endocanabinoide', texto: 'O CBD age modulando o sistema endocanabinoide (SEC), composto pelos receptores CB1 e CB2, endocanabinoides endógenos e enzimas metabólicas. O SEC regula funções como dor, inflamação, humor, sono e neuroproteção.' },
  { titulo: 'Ação nos Receptores CB1 e CB2', texto: 'Diferente do THC, o CBD tem baixa afinidade pelos receptores CB1 e CB2, modulando-os indiretamente. Isso explica a ausência de efeitos psicoativos e o perfil de segurança favorável.' },
  { titulo: 'Efeito Entourage (Full Spectrum)', texto: 'Formulações Full Spectrum contêm o espectro completo de canabinoides (CBD, CBG, CBC, CBDA), terpenos e flavonoides. A interação sinérgica entre esses compostos potencializa os efeitos terapêuticos.' },
  { titulo: 'Farmacocinética e Dosagem', texto: 'A biodisponibilidade sublingual do CBD é de 13–19%. Meia-vida de eliminação: 18–32 horas. A titulação gradual (dose baixa → ajuste conforme resposta) é o protocolo padrão recomendado.' },
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
      <section className="bg-gradient-to-br from-gray-950 via-brand-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 bg-white/10 text-brand-200 border border-white/10">Base Científica</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              A ciência por trás do <span className="text-brand-400">CBD</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Evidências clínicas, mecanismos de ação e referências peer-reviewed para médicos prescritores e pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mecanismos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Farmacologia</span>
            <h2 className="section-title mb-4">Como o CBD atua no organismo</h2>
            <p className="section-subtitle mx-auto">
              Mecanismos fisiológicos que fundamentam os efeitos terapêuticos dos canabinoides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mecanismos.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                  <h3 className="font-bold text-gray-900">{m.titulo}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estudos clínicos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Literatura Revisada por Pares</span>
            <h2 className="section-title mb-4">Estudos clínicos de referência</h2>
            <p className="section-subtitle mx-auto">
              Publicações científicas que fundamentam o uso clínico de CBD nas principais condições tratadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estudos.map((e, i) => {
              const c = corMap[e.cor]
              return (
                <div key={i} className={`rounded-2xl p-7 border flex flex-col ${c.bg} ${c.border}`}>
                  <h3 className="font-bold text-gray-900 mb-1">{e.titulo}</h3>
                  <p className="text-xs text-gray-400 italic mb-4">{e.referencia}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{e.resumo}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map(tag => (
                      <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            As referências acima são para fins informativos e educativos. A indicação terapêutica é de competência exclusiva do médico prescritor.
          </p>
        </div>
      </section>

      {/* RDC 660 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-3">Marco Regulatório</span>
            <h2 className="section-title mb-4">A RDC 660 explicada</h2>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-5">
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
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              A CBMed assessora todo esse processo, garantindo conformidade e agilidade em cada etapa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Médico? Acesse nosso canal exclusivo</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Disponibilizamos material técnico adicional, protocolos de prescrição e suporte direto para médicos parceiros CBMed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-4 px-8 text-base">
              Canal do Médico Prescritor
            </a>
            <Link href="/para-medicos" className="inline-flex items-center gap-2 border-2 border-white/20 text-gray-200 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-base">
              Área para Médicos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

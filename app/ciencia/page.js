import Link from 'next/link'
import { WHATSAPP_DR } from '../../lib/constants'
import InternalPageHero from '../../components/InternalPageHero'
import MagneticButton from '../../components/MagneticButton'
import { Brain, Activity } from 'lucide-react'
import { buildMetadata } from '../../lib/seo'

export const metadata = buildMetadata({
  title: 'Evidências científicas sobre o canabidiol (CBD)',
  description: 'Base científica sobre canabinoides e Cannabis Medicinal. Estudos clínicos, mecanismos de ação e referências para médicos prescritores.',
  path: '/ciencia',
})

// Cada estudo foi conferido no PubMed (23/11/2026). Resumo, tipo e limitação
// seguem o resumo publicado; não acrescentar número que não esteja nele.
const estudos = [
  {
    titulo: 'CBD na síndrome de Dravet',
    referencia: 'Devinsky O, Cross JH, Laux L, et al. Trial of Cannabidiol for Drug-Resistant Seizures in the Dravet Syndrome. N Engl J Med. 2017;376(21):2011-2020.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28538134/',
    resumo: 'Com 120 crianças e jovens adultos com síndrome de Dravet e crises resistentes a medicamentos, o canabidiol somado ao tratamento habitual reduziu mais a frequência de crises convulsivas do que o placebo, e teve mais eventos adversos.',
    tipo: 'Ensaio clínico randomizado, duplo-cego, controlado por placebo.',
    limitacao: 'Houve mais eventos adversos e mais desistências no grupo do canabidiol, e o estudo foi financiado pelo fabricante.',
    tags: ['Epilepsia', 'Pediatria'], cor: 'brand',
  },
  {
    titulo: 'CBD nos transtornos de ansiedade',
    referencia: 'Blessing EM, Steenkamp MM, Manzanares J, Marmar CR. Cannabidiol as a Potential Treatment for Anxiety Disorders. Neurotherapeutics. 2015;12(4):825-836.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26341731/',
    resumo: 'A revisão reuniu estudos pré-clínicos, experimentais em humanos, clínicos e epidemiológicos. Os estudos pré-clínicos apoiam o CBD em vários transtornos de ansiedade, como TEPT e TOC, em uso agudo.',
    tipo: 'Revisão da literatura.',
    limitacao: 'Em humanos, os dados se limitam a uso agudo, com poucos estudos em pacientes. Os autores pedem estudos de uso contínuo.',
    tags: ['Ansiedade', 'TEPT'], cor: 'purple',
  },
  {
    titulo: 'CBD, ansiedade e sono',
    referencia: 'Shannon S, Lewis N, Lee H, Hughes S. Cannabidiol in Anxiety and Sleep: A Large Case Series. Perm J. 2019;23:18-041.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30624194/',
    resumo: 'Em 72 adultos atendidos em uma clínica psiquiátrica, com CBD somado ao tratamento habitual, os escores de ansiedade caíram no primeiro mês em 79,2% dos pacientes. Os de sono melhoraram em 66,7%, mas oscilaram ao longo do tempo.',
    tipo: 'Série de casos retrospectiva, feita a partir de prontuários.',
    limitacao: 'Não há grupo de comparação. Os autores dizem que são necessários estudos controlados.',
    tags: ['Ansiedade', 'Sono'], cor: 'indigo',
  },
  {
    titulo: 'Esclerose múltipla e canabinoides',
    referencia: 'Zajicek J, Fox P, Sanders H, et al. Cannabinoids for treatment of spasticity and other symptoms related to multiple sclerosis (CAMS study): multicentre randomised placebo-controlled trial. Lancet. 2003;362(9395):1517-1526.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14615106/',
    resumo: 'Com 630 pessoas com esclerose múltipla, o estudo comparou extrato oral de cannabis, THC e placebo. Não houve efeito sobre a espasticidade medida pela escala de Ashworth, o desfecho principal. Os participantes relataram melhora de espasticidade e dor.',
    tipo: 'Ensaio clínico randomizado, controlado por placebo.',
    limitacao: 'O desfecho principal foi negativo, e parte dos pacientes percebeu se recebia o tratamento ativo. O estudo não testou CBD isolado.',
    tags: ['Esclerose Múltipla', 'Espasticidade'], cor: 'orange',
  },
]

const mecanismos = [
  { titulo: 'Sistema Endocanabinoide',          texto: 'O CBD age modulando o sistema endocanabinoide (SEC), composto pelos receptores CB1 e CB2, endocanabinoides endógenos e enzimas metabólicas. O SEC regula funções como dor, inflamação, humor, sono e neuroproteção.', icone: Brain },
  { titulo: 'Ação nos Receptores CB1 e CB2',    texto: 'Diferente do THC, o CBD tem baixa afinidade pelos receptores CB1 e CB2, modulando-os indiretamente. Isso explica a ausência de efeitos psicoativos.', icone: Activity },
]

const corMap = {
  brand:  { bg: 'bg-brand-50',  border: 'border-brand-100',  tag: 'bg-brand-100 text-brand-700'  },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', tag: 'bg-purple-100 text-purple-700'},
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', tag: 'bg-indigo-100 text-indigo-700'},
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
        bg="forest"
      />

      {/* Mecanismos */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Farmacologia</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">Como o CBD atua no organismo</h2>
            <p className="section-subtitle mx-auto text-ink-light">
              Como o canabidiol interage com o organismo.
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
              Cada estudo traz a referência completa, o link do PubMed, o tipo de estudo e a principal limitação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {estudos.map((e, i) => {
              const c = corMap[e.cor]
              return (
                <div key={i} className={`rounded-2xl p-7 border flex flex-col ${c.bg} ${c.border}`}>
                  <h3 className="font-serif font-semibold text-ink mb-1">{e.titulo}</h3>
                  <p className="font-mono text-xs text-ink-muted italic mb-1">{e.referencia}</p>
                  <a href={e.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-brand-700 underline underline-offset-2 mb-4 self-start">
                    Ver no PubMed
                  </a>
                  <p className="text-ink-light text-sm leading-relaxed mb-3">{e.resumo}</p>
                  <p className="text-ink text-xs leading-relaxed flex-1 mb-5">
                    <strong>Tipo de estudo:</strong> {e.tipo} <strong>Limitação principal:</strong> {e.limitacao}
                  </p>
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
              {/* Só itens sustentados pelo artigo o-que-e-a-rdc-660. */}
              {[
                'Importação por pessoa física, para uso próprio',
                'Exige prescrição de profissional legalmente habilitado',
                'Pedido feito pelo paciente, pelo responsável legal ou por procurador (Art. 3º)',
                'Produto de fabricante regularizado no país de origem (Art. 4º)',
                'Cadastro válido por 2 anos, com várias importações (Arts. 8º e 10)',
                'Uso pessoal: o produto não pode ser repassado nem vendido (Arts. 15 e 16)',
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
              A CBMed orienta o paciente em cada etapa desse processo. Veja o{' '}
              <Link href="/artigos/o-que-e-a-rdc-660" className="text-brand-600 underline underline-offset-2">guia completo da RDC 660</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Médico? Acesse nosso canal exclusivo</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Disponibilizamos material técnico adicional, orientação sobre os requisitos da receita e suporte direto para médicos parceiros CBMed.
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

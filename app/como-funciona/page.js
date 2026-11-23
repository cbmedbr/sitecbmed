import Image from 'next/image'
import Link from 'next/link'
import { Check, X } from 'lucide-react'
import InternalPageHero from '../../components/InternalPageHero'
import MagneticButton from '../../components/MagneticButton'
import JsonLd from '../../components/JsonLd'
import { WHATSAPP } from '../../lib/constants'
import { DOCUMENTOS, ETAPAS } from '../../lib/processo'
import { FAQ_COMO_FUNCIONA as faq } from '../../lib/faq'
import { grafo, faqSchema } from '../../lib/schema'
import { buildMetadata } from '../../lib/seo'

export const metadata = buildMetadata({
  title: 'Como funciona a assessoria de importação pela RDC 660',
  description: 'O que a CBMed faz e não faz, o passo a passo da importação pela RDC 660/2022, documentos, prazos e validades. A CBMed não vende produtos e não prescreve.',
  path: '/como-funciona',
})

const faz = [
  'Orienta os documentos.',
  'Cuida do cadastro e do pedido de autorização na Anvisa, em nome do paciente.',
  'Acompanha a importação até a entrega.',
]

const naoFaz = [
  'Não prescreve.',
  'Não vende produto.',
  'Não indica produto, concentração nem dose.',
]

// Só prazos que já constam nos artigos de 26/10/2026, com a mesma referência.
// A linha da entrega é o texto que estava na FAQ de /acolhimento.
const prazos = [
  { item: 'Receita médica',         texto: 'Vale 6 meses a partir da emissão.',                                  fonte: 'RDC 660/2022, Art. 7º, § 5º' },
  { item: 'Cadastro na Anvisa',     texto: 'Vale 2 anos e permite várias importações nesse período.',            fonte: 'RDC 660/2022, Arts. 8º e 10' },
  { item: 'Renovação do cadastro',  texto: 'Exige uma nova receita.',                                             fonte: 'RDC 660/2022, Art. 9º' },
  { item: 'Autorização da Anvisa',  texto: 'Segundo o gov.br, a etapa de receber a autorização leva até 10 dias corridos, e o tempo estimado do serviço é de até 20 dias corridos.', fonte: 'gov.br, serviço oficial' },
  { item: 'Entrega',                texto: 'Em até 20 dias após a autorização da ANVISA.',                       fonte: 'Prazo informado pela CBMed' },
]

export default function ComoFunciona() {
  return (
    <>
      <JsonLd data={grafo(faqSchema(faq, '/como-funciona'))} />

      <InternalPageHero
        eyebrow="COMO FUNCIONA"
        title="Como funciona a assessoria da CBMed"
        subtitle="A CBMed é uma assessoria de importação. Ajudamos o paciente com receita a importar o produto prescrito pela RDC 660/2022, do cadastro na Anvisa até a entrega."
        bg="forest"
      />

      {/* 1 e 2 — O que faz e o que não faz */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-5">O que a CBMed faz</h2>
            <ul className="space-y-3">
              {faz.map(t => (
                <li key={t} className="flex items-start gap-3 text-ink-light leading-relaxed">
                  <Check size={20} className="text-brand-500 shrink-0 mt-0.5" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ink/10">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-5">O que a CBMed não faz</h2>
            <ul className="space-y-3">
              {naoFaz.map(t => (
                <li key={t} className="flex items-start gap-3 text-ink-light leading-relaxed">
                  <X size={20} className="text-ink-muted shrink-0 mt-0.5" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 — Passo a passo */}
      <section className="py-20 bg-[#F0EDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink text-center mb-12">Passo a passo</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {ETAPAS.map(e => (
              <li key={e.n} className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-sm">
                <div className="font-mono text-2xl font-bold text-ink/10 leading-none shrink-0 w-8 text-center pt-1" aria-hidden>
                  {e.n}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-ink mb-1">{e.titulo}</h3>
                  <p className="text-ink-light text-sm leading-relaxed">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 — Documentos necessários */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink text-center mb-12">Documentos necessários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCUMENTOS.map(doc => (
              <div key={doc.numero} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full aspect-[5/3] bg-navy">
                  <Image src={doc.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif font-semibold text-ink text-lg mb-2 leading-tight">{doc.titulo}</h3>
                  <p className="text-ink-light text-sm leading-relaxed mb-5 flex-1">{doc.descricao}</p>
                  <span className={`self-start text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide ${
                    doc.obrigatorio ? 'bg-brand-100 text-brand-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {doc.obrigatorio ? 'Obrigatório' : 'Recomendado'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Prazos e validades */}
      <section className="py-20 bg-[#F0EDE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink text-center mb-12">Prazos e validades</h2>
          <dl className="bg-white rounded-2xl divide-y divide-ink/10 shadow-sm">
            {prazos.map(p => (
              <div key={p.item} className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
                <dt className="font-serif font-semibold text-ink">{p.item}</dt>
                <dd className="sm:col-span-2">
                  <p className="text-ink-light text-sm leading-relaxed">{p.texto}</p>
                  <p className="font-mono text-xs text-ink-muted mt-1">{p.fonte}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-center text-sm text-ink-muted mt-6">
            Detalhes da norma no guia{' '}
            <Link href="/artigos/o-que-e-a-rdc-660" className="text-brand-600 underline underline-offset-2">o que é a RDC 660</Link>.
          </p>
        </div>
      </section>

      {/* 6 — Perguntas frequentes */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink text-center mb-12">Perguntas frequentes</h2>
          <div className="space-y-3">
            {faq.map(item => (
              <details key={item.pergunta} className="group bg-white border border-ink/10 rounded-2xl open:border-brand-200 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-serif font-semibold text-ink text-sm [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <svg className="w-4 h-4 shrink-0 text-brand-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-ink-light text-sm leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Sobre o produto prescrito */}
      <section className="py-16 bg-[#F0EDE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-ink/10 p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-3">Sobre o produto prescrito</h2>
            <p className="text-ink-light leading-relaxed">
              O produto, a concentração e a dose são definidos pelo médico na receita. As informações técnicas do produto prescrito são enviadas diretamente ao paciente que já tem receita e ao médico prescritor que solicitar.
            </p>
          </div>
        </div>
      </section>

      {/* 8 — Contato */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-8">Ficou com alguma dúvida?</h2>
          <MagneticButton href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-base py-4 px-8 inline-flex items-center gap-2.5">
            Falar com o acolhimento
          </MagneticButton>
        </div>
      </section>
    </>
  )
}

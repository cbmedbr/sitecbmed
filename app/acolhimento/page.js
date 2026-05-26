'use client'

import { useState } from 'react'
import Image from 'next/image'
import InternalPageHero from '../../components/InternalPageHero'
import { ChevronDown } from 'lucide-react'
import { WHATSAPP } from '../../lib/constants'

const documentos = [
  { titulo: 'Prescrição Médica',        descricao: 'Receituário com nome do produto, concentração (mg), posologia, via de administração, CID, assinatura e CRM do prescritor.', obrigatorio: true,  image: '/icon-prescricao.png',  numero: '01' },
  { titulo: 'Documento com Foto',        descricao: 'RG, CNH ou Passaporte do paciente. Cópia digitalizada legível (frente e verso quando houver).', obrigatorio: true,  image: '/icon-documento.png',   numero: '02' },
  { titulo: 'Comprovante de Residência', descricao: 'Conta de água, luz, telefone ou bancária com nome do paciente e endereço. Emitida nos últimos 90 dias.', obrigatorio: true,  image: '/icon-residencia.png',  numero: '03' },
  { titulo: 'Relatório Médico',          descricao: 'Relatório clínico com diagnóstico, histórico e justificativa terapêutica. Recomendado.', obrigatorio: false, image: '/icon-relatorio.png',   numero: '04' },
]

const faq = [
  { pergunta: 'Quanto tempo leva o processo completo?',             resposta: 'Em até 30 dias após a autorização da ANVISA. A CBMed monitora cada etapa e mantém você informado em tempo real.' },
  { pergunta: 'O produto pode ser entregue em qualquer cidade?',    resposta: 'Sim. Atendemos pacientes em todo o território nacional. A entrega é feita no endereço informado na documentação.' },
  { pergunta: 'Qual é o papel da CBMed no processo?',              resposta: 'Somos a assessoria estratégica: organizamos a documentação, submetemos à ANVISA, coordenamos a importação e acompanhamos a entrega. Não vendemos produtos diretamente.' },
  { pergunta: 'Preciso renovar a autorização a cada pedido?',       resposta: 'Sim. Cada importação requer uma nova autorização ANVISA. A CBMed gerencia todo o processo de renovação com agilidade.' },
  { pergunta: 'Ainda não tenho prescrição. Como proceder?',         resposta: 'Nossa equipe conecta você a médicos parceiros habilitados para avaliação e emissão da prescrição adequada ao seu caso.' },
]

const etapas = [
  { n:'01', titulo:'Primeiro Contato',      texto:'Entre em contato via WhatsApp. Nossa equipe realiza triagem inicial, entende o seu caso e explica todo o processo sem custo.' },
  { n:'02', titulo:'Avaliação Médica',       texto:'Se você ainda não tem prescrição, conectamos você a um médico parceiro habilitado para avaliação clínica remota ou presencial.' },
  { n:'03', titulo:'Envio da Documentação', texto:'Nossa equipe orienta na coleta de documentos e verifica tudo antes de submeter à ANVISA, evitando indeferimentos.' },
  { n:'04', titulo:'Autorização ANVISA',     texto:'Submetemos o processo e acompanhamos o status junto à agência. Prazo médio: 10 a 20 dias úteis após documentação completa.' },
  { n:'05', titulo:'Importação dos EUA',     texto:'Autorizado o processo, o produto é despachado diretamente do laboratório nos EUA para o endereço do paciente no Brasil.' },
  { n:'06', titulo:'Entrega e Acompanhamento', texto:'Produto recebido em domicílio com rastreamento completo. Nossa equipe continua disponível para suporte pós-entrega.' },
]

export default function Acolhimento() {
  const [aberto, setAberto] = useState(null)

  return (
    <>
      {/* Hero */}
      <InternalPageHero
        eyebrow="ACOLHIMENTO"
        title="Acolhimento Especializado"
        subtitle="Do primeiro contato à entrega do produto, acompanhamos cada etapa com cuidado, clareza e segurança jurídica."
        image="/hero-acolhimento.png"
      />

      {/* Etapas */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-4">Como funciona o acolhimento</h2>
            <p className="section-subtitle mx-auto text-ink-light">Um processo desenhado para ser simples para o paciente e rigoroso na conformidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {etapas.map((e, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-sm">
                <div className="font-mono text-2xl font-bold text-ink/10 leading-none shrink-0 w-8 text-center pt-1">
                  {e.n}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-ink mb-1">{e.titulo}</h3>
                  <p className="text-ink-light text-sm leading-relaxed">{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="relative overflow-hidden py-20 bg-navy">
        <Image src="/bg-checklist.png" alt="" fill sizes="100vw" className="object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/30" />
        <div className="relative max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 text-brand-300 px-3 py-1 rounded-full mb-3">Documentação Necessária</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">O que você precisa reunir</h2>
            <p className="section-subtitle mx-auto text-white/70">
              Nossa equipe orienta e verifica cada documento, mas é útil já ter estes em mãos para agilizar o processo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl xl:max-w-[1500px] mx-auto">
            {documentos.map((doc, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  doc.obrigatorio
                    ? 'border-2 border-brand-400/30 hover:border-brand-400 shadow-xl shadow-brand-400/5 hover:shadow-2xl hover:shadow-brand-400/20'
                    : 'border-2 border-amber-400/30 hover:border-amber-400 shadow-xl shadow-amber-400/5 hover:shadow-2xl hover:shadow-amber-400/20'
                }`}
              >
                <div className="relative w-full aspect-[5/3] bg-navy overflow-hidden">
                  <Image src={doc.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
                  <span className="absolute top-4 right-5 font-mono text-xs font-bold text-white/50 tracking-widest backdrop-blur-sm bg-white/5 px-2 py-1 rounded">
                    {doc.numero}
                  </span>
                </div>
                <div className={`h-1 w-full transition-all duration-500 ${
                  doc.obrigatorio
                    ? 'bg-gradient-to-r from-brand-400/0 via-brand-400/80 to-brand-400/0 group-hover:via-brand-500'
                    : 'bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0 group-hover:via-amber-500'
                }`} />
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif font-semibold text-ink text-xl mb-3 leading-tight">{doc.titulo}</h3>
                  <p className="text-ink-light text-sm leading-relaxed mb-6 flex-1">{doc.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide ${
                      doc.obrigatorio ? 'bg-brand-100 text-brand-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${doc.obrigatorio ? 'bg-brand-500' : 'bg-amber-500'}`}></span>
                      {doc.obrigatorio ? 'Obrigatório' : 'Recomendado'}
                    </span>
                    <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      doc.obrigatorio ? 'text-brand-500' : 'text-amber-500'
                    }`}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mx-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Enviar documentos pelo WhatsApp
            </a>
            <p className="text-xs text-white/50 mt-3">Envio seguro e confidencial. Dados tratados conforme a LGPD.</p>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">Dúvidas frequentes</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-ink/10 rounded-2xl overflow-hidden bg-white">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-50/40 transition-colors"
                  onClick={() => setAberto(aberto === i ? null : i)}
                  aria-expanded={aberto === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-serif font-semibold text-ink text-sm">{item.pergunta}</span>
                  <ChevronDown size={20} className={`text-brand-500 shrink-0 transition-transform ${aberto === i ? 'rotate-180' : ''}`} />
                </button>
                {aberto === i && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="px-6 pb-5 pt-3 text-ink-light text-sm leading-relaxed border-t border-ink/5"
                  >
                    {item.resposta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

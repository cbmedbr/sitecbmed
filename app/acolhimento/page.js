'use client'

import { useState } from 'react'
import { WHATSAPP } from '../../lib/constants'

const documentos = [
  { titulo: 'Prescrição Médica',         descricao: 'Receituário com nome do produto, concentração (mg), posologia, via de administração, CID, assinatura e CRM do prescritor.', obrigatorio: true  },
  { titulo: 'Documento com Foto',         descricao: 'RG, CNH ou Passaporte do paciente. Cópia digitalizada legível (frente e verso quando houver).', obrigatorio: true  },
  { titulo: 'Comprovante de Residência',  descricao: 'Conta de água, luz, telefone ou bancária com nome do paciente e endereço. Emitida nos últimos 90 dias.', obrigatorio: true  },
  { titulo: 'Relatório Médico',           descricao: 'Relatório clínico com diagnóstico, histórico e justificativa terapêutica. Recomendado — agiliza a aprovação ANVISA em até 40%.', obrigatorio: false },
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
      <section className="bg-gradient-to-br from-gray-950 via-brand-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 bg-white/10 text-brand-200 border border-white/10">Início do processo</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Acolhimento <span className="text-brand-400">Especializado</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Do primeiro contato à entrega do produto — acompanhamos cada etapa com cuidado, clareza e segurança jurídica.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base py-4 px-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Iniciar Acolhimento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Como funciona o acolhimento</h2>
            <p className="section-subtitle mx-auto">Um processo desenhado para ser simples para o paciente e rigoroso na conformidade.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {etapas.map((e, i) => (
              <div key={i} className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-500 text-white rounded-xl flex items-center justify-center text-sm font-extrabold shrink-0">
                  {e.n}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{e.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Documentação Necessária</span>
            <h2 className="section-title mb-4">O que você precisa reunir</h2>
            <p className="section-subtitle mx-auto">
              Nossa equipe orienta e verifica cada documento — mas é útil já ter estes em mãos para agilizar o processo.
            </p>
          </div>

          <div className="space-y-4">
            {documentos.map((doc, i) => (
              <div key={i} className={`rounded-2xl p-6 border flex items-start gap-5 bg-white ${
                doc.obrigatorio ? 'border-gray-200 shadow-sm' : 'border-dashed border-gray-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 text-sm ${
                  doc.obrigatorio ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-400'
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{doc.titulo}</h3>
                    {doc.obrigatorio ? (
                      <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Obrigatório</span>
                    ) : (
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Recomendado</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{doc.descricao}</p>
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
            <p className="text-xs text-gray-400 mt-3">Envio seguro e confidencial. Dados tratados conforme a LGPD.</p>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Dúvidas frequentes</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setAberto(aberto === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm">{item.pergunta}</span>
                  <svg className={`w-5 h-5 text-brand-500 shrink-0 transition-transform ${aberto === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {aberto === i && (
                  <div className="px-6 pb-5 pt-3 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
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

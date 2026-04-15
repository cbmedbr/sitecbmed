import Link from 'next/link'
import { WHATSAPP } from '../../lib/constants'

export const metadata = {
  title: 'Sobre a CBMed',
  description: 'Conheça a CBMed — assessoria especializada em Cannabis Medicinal, baseada em Florianópolis/SC e conforme a RDC 660 da ANVISA.',
}

const pilares = [
  { titulo: 'Legalidade',     texto: 'Operamos exclusivamente dentro do marco regulatório brasileiro, seguindo a RDC 660 da ANVISA e toda a legislação vigente.', cor: 'bg-brand-100 text-brand-700' },
  { titulo: 'Ciência',        texto: 'Nossas indicações são baseadas em evidências científicas e conduzidas por profissionais de saúde habilitados.',              cor: 'bg-blue-100 text-blue-700'  },
  { titulo: 'Empatia',        texto: 'Cada paciente é único. Escutamos, acolhemos e construímos juntos o melhor caminho para o tratamento.',                       cor: 'bg-violet-100 text-violet-700'},
  { titulo: 'Transparência',  texto: 'Nenhuma surpresa no processo. Informamos cada etapa, custo e prazo antes de qualquer decisão.',                             cor: 'bg-amber-100 text-amber-700' },
]

const faq = [
  { pergunta: 'O uso de Cannabis Medicinal é legal no Brasil?',           resposta: 'Sim. A ANVISA regulamenta a importação e o uso de produtos à base de cannabis por meio da RDC 660, desde que haja prescrição médica e autorização do órgão. A CBMed auxilia todo esse processo.' },
  { pergunta: 'Preciso de receita médica para ter acesso ao óleo de CBD?', resposta: 'Sim, é necessária prescrição de médico habilitado. Nossa assessoria conecta você aos profissionais adequados e cuida de toda a documentação junto à ANVISA.' },
  { pergunta: 'Quanto tempo leva o processo de acesso ao produto?',        resposta: 'Em até 30 dias após a autorização da ANVISA. Nossa equipe agiliza cada etapa para garantir o menor prazo possível.' },
  { pergunta: 'Vocês atendem pacientes de fora de Santa Catarina?',        resposta: 'Sim! Embora nossa sede seja em Florianópolis/SC, realizamos atendimentos remotos para pacientes de todo o Brasil com a mesma qualidade e atenção.' },
]

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-brand-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 bg-white/10 text-brand-200 border border-white/10">Nossa história</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Sobre a <span className="text-brand-400">CBMed</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nascemos da convicção de que o acesso à Cannabis Medicinal deve ser seguro, humanizado e dentro da lei. Nossa missão é remover as barreiras burocráticas e técnicas que separam pacientes de um tratamento eficaz.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e números */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem somos</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                A CBMed é uma empresa de assessoria estratégica especializada em Cannabis Medicinal, com sede em Florianópolis, Santa Catarina. Atuamos como ponte entre pacientes, médicos prescritores e os entes regulatórios da ANVISA.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Nossa equipe é composta por profissionais com formação nas áreas de saúde, direito regulatório e consultoria de acesso a tratamentos inovadores. Cada membro é capacitado para orientar com precisão técnica e cuidado humano.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Desde a nossa fundação, já auxiliamos mais de 3.800 pacientes a obterem acesso legal ao Óleo de CBD com importação dos EUA, em concentrações de 1500 mg, 3000 mg e 6000 mg, todos aprovados pela ANVISA conforme a RDC 660.
              </p>

              {/* RDC 660 destaque */}
              <div className="mt-8 flex items-start gap-4 bg-brand-50 border border-brand-100 rounded-2xl p-5">
                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-brand-800 mb-1">Conformidade com a RDC 660</h3>
                  <p className="text-brand-700 text-sm leading-relaxed">
                    A Resolução da Diretoria Colegiada 660 da ANVISA regulamenta a importação e uso de produtos derivados de Cannabis no Brasil. Toda a nossa operação é estruturada para garantir conformidade total com esta norma.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { valor: '3.800+', label: 'Pacientes assessorados' },
                { valor: '1.600+', label: 'Médicos parceiros'      },
                { valor: 'RDC 660', label: 'Conformidade ANVISA'   },
                { valor: 'FLN/SC',  label: 'Base de operações'     },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-7 text-center">
                  <div className="text-3xl font-extrabold text-brand-600 mb-1">{item.valor}</div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Nossos pilares</h2>
            <p className="section-subtitle mx-auto">
              Os princípios inegociáveis que guiam cada decisão e cada atendimento na CBMed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4 ${p.cor}`}>
                  {p.titulo[0]}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Perguntas frequentes</h2>
            <p className="section-subtitle mx-auto">Tire suas principais dúvidas sobre o processo e a legalidade.</p>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </span>
                  {item.pergunta}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-7">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para dar o primeiro passo?</h2>
          <p className="text-brand-50 mb-8 text-lg">Entre em contato e inicie o seu acolhimento especializado agora mesmo.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-brand-700 font-semibold px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors shadow-md">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Acolhimento pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

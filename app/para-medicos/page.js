import Link from 'next/link'
import { WHATSAPP_DR } from '../../lib/constants'
import MagneticButton from '../../components/MagneticButton'
import SeloAnvisa from '../../components/SeloAnvisa'

export const metadata = {
  title: 'Para Médicos',
  description: 'Suporte completo para médicos prescritores de Cannabis Medicinal. CBMed cuida de toda a burocracia da RDC 660 enquanto você foca no cuidado clínico.',
}

const beneficios = [
  {
    titulo: 'Prescrição Orientada',
    texto: 'Modelos de receituário e orientações técnicas para conformidade total com a RDC 660, evitando indeferimentos.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  },
  {
    titulo: 'Gestão Logística Total',
    texto: 'Após a prescrição, a CBMed assume: documentação ANVISA, importação, rastreamento e entrega. Zero burocracia para o médico.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
  },
  {
    titulo: 'Material Científico',
    texto: 'Artigos, estudos clínicos e revisões sistemáticas sobre canabinoides para embasar suas prescrições com evidências atuais.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    titulo: 'Acompanhamento do Paciente',
    texto: 'Monitoramos a adesão ao tratamento e reportamos intercorrências logísticas, mantendo o médico informado sobre cada caso.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
  },
  {
    titulo: 'Canal Exclusivo',
    texto: 'Linha de comunicação direta entre o médico prescritor e nossa equipe especializada — sem filas, com respostas ágeis.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
  },
  {
    titulo: 'Segurança Jurídica',
    texto: 'Nossa equipe regulatória garante conformidade com a legislação vigente em cada etapa, protegendo médico e paciente.',
    icone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  },
]

const indicacoes = [
  { condicao: 'Epilepsia Refratária',       evidencia: 'Nível A', destaque: true  },
  { condicao: 'Transtorno de Ansiedade',    evidencia: 'Nível B', destaque: false },
  { condicao: 'Dor Crônica Neuropática',    evidencia: 'Nível B', destaque: false },
  { condicao: 'Distúrbios do Sono',         evidencia: 'Nível B', destaque: false },
  { condicao: 'TDAH',                       evidencia: 'Nível C', destaque: false },
  { condicao: 'Suporte Oncológico',         evidencia: 'Nível B', destaque: false },
  { condicao: 'Esclerose Múltipla',         evidencia: 'Nível B', destaque: false },
  { condicao: 'Autismo (TEA)',              evidencia: 'Nível C', destaque: false },
]

export default function ParaMedicos() {
  return (
    <>
      {/* Hero editorial premium */}
      <section className="relative bg-[#0a1628] text-white overflow-hidden">
        {/* Watermark selo */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.06] pointer-events-none select-none hidden lg:block">
          <SeloAnvisa size={480} colorStroke="#1ba883" />
        </div>

        {/* Grid de linhas — textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#1ba883 1px, transparent 1px), linear-gradient(90deg, #1ba883 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Coluna texto */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-400 mb-5">
                Canal Exclusivo · 1.600+ Prescritores
              </p>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Área do Médico{' '}
                <span className="text-brand-400">Prescritor</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                A CBMed transforma a sua prescrição em acesso real para o paciente. Cuidamos de toda a operação regulatória e logística — você foca no diagnóstico e no cuidado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <MagneticButton
                  href={WHATSAPP_DR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base py-4 px-8"
                >
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Acessar Canal do Médico
                </MagneticButton>
                <MagneticButton
                  href="/ciencia"
                  className="btn-secondary text-base py-4 px-8"
                >
                  Material Científico
                </MagneticButton>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3">
                {['1.600+ médicos parceiros', 'Suporte jurídico-regulatório', 'Processo 100% legal'].map(item => (
                  <span key={item} className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-gray-300 text-sm font-semibold px-4 py-2 rounded-full">
                    <svg className="w-3.5 h-3.5 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Coluna selo — visível lg+ */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Glow radial */}
                <div className="absolute inset-0 rounded-full bg-brand-500/10 blur-3xl scale-150 pointer-events-none" />
                <SeloAnvisa size={320} colorStroke="#1ba883" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fluxo do ponto de vista do médico */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-brand-100 text-sm font-semibold uppercase tracking-widest mb-8">
            O fluxo do ponto de vista do prescritor
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { n:'01', titulo:'Você prescreve', texto:'Emite o receituário conforme a RDC 660. Fornecemos modelo padronizado e orientações.' },
              { n:'02', titulo:'CBMed opera', texto:'Recebemos a prescrição, organizamos toda a documentação e submetemos à ANVISA.' },
              { n:'03', titulo:'Paciente recebe', texto:'Produto entregue em domicílio em até 30 dias. Você recebe relatório de conclusão.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-400/40 rounded-2xl p-7">
                <div className="text-4xl font-extrabold text-brand-100 mb-2">{item.n}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.titulo}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">O que oferecemos ao prescritor</h2>
            <p className="section-subtitle mx-auto">
              Suporte técnico, operacional e científico para uma atuação eficiente e segura com Cannabis Medicinal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-5">
                  {b.icone}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicações terapêuticas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Baseado em Evidências</span>
            <h2 className="section-title mb-4">Indicações terapêuticas reconhecidas</h2>
            <p className="section-subtitle mx-auto">
              Condições com suporte científico para uso de CBD, conforme literatura revisada por pares.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {indicacoes.map((item, i) => (
              <div key={i} className={`rounded-xl p-5 flex items-center justify-between gap-3 border ${
                item.destaque
                  ? 'bg-brand-500 border-brand-400 text-white'
                  : 'bg-white border-gray-100 text-gray-800'
              }`}>
                <span className={`text-sm font-medium ${item.destaque ? 'text-white' : 'text-gray-700'}`}>
                  {item.condicao}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                  item.destaque ? 'bg-brand-400 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.evidencia}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Nível de evidência baseado no Oxford Centre for Evidence-Based Medicine (OCEBM).
          </p>
          <div className="text-center mt-6">
            <Link href="/ciencia" className="btn-outline text-sm">
              Acessar base científica completa →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Torne-se um médico parceiro CBMed</h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Junte-se aos 1.600+ prescritores que contam com o suporte completo da CBMed para oferecer aos seus pacientes o melhor acesso à Cannabis Medicinal no Brasil.
          </p>
          <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base py-4 px-10 mx-auto">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Canal exclusivo no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { WHATSAPP, WHATSAPP_DR, PHONE_DISPLAY } from '../lib/constants'
import { getArtigosRecentes } from '../lib/artigos'
import MagneticButton from '../components/MagneticButton'
import HeroFlask from '../components/HeroFlask'
import StatItem from '../components/StatItem'
import ProductCard from '../components/ProductCard'
import ScienceSection from '../components/ScienceSection'
// ─── Dados ───────────────────────────────────────────────────────────────────
const produtos = [
  {
    mg: '1500 mg',
    sub: 'Protocolo Inicial',
    tipo: 'CBD Full Spectrum',
    descricao: 'Indicado para início do protocolo terapêutico. Alta tolerabilidade, titulação gradual e eficácia documentada em ansiedade e distúrbios do sono.',
    indicacoes: ['Ansiedade', 'Insônia', 'Dor leve'],
    destaque: false,
    img: '/produto-1500.png',
  },
  {
    mg: '3000 mg',
    sub: 'Protocolo Intermediário',
    tipo: 'CBD Full Spectrum',
    descricao: 'Formulação Full Spectrum mais prescrita pelos médicos parceiros da CBMed. Evidência clínica robusta em epilepsia, dor neuropática e ansiedade severa.',
    indicacoes: ['Epilepsia', 'Ansiedade severa', 'Dor neuropática'],
    destaque: true,
    img: '/produto-3000.png',
  },
  {
    mg: '6000 mg',
    sub: 'Protocolo Intensivo',
    tipo: 'CBD Full Spectrum',
    descricao: 'Alta concentração para condições neurológicas complexas e protocolos intensivos. Exige acompanhamento médico especializado.',
    indicacoes: ['Neurologia', 'Oncologia', 'Dor refratária'],
    destaque: false,
    img: '/produto-6000.png',
  },
  {
    mg: 'CBD 5% + CBG 5%',
    sub: 'Fórmula Combinada',
    tipo: 'CBD + CBG Full Spectrum',
    descricao: 'Combinação sinérgica de 1500 mg de CBD e 1500 mg de CBG. O CBG potencializa os efeitos anti-inflamatórios e neuroprotetores, ampliando o espectro terapêutico.',
    indicacoes: ['Inflamação', 'Neuroproteção', 'Ansiedade', 'Dor crônica'],
    destaque: false,
    img: '/produto-cbg.png',
  },
]

const fluxoRDC = [
  { etapa: '01', titulo: 'Prescrição Médica',      texto: 'Médico emite receituário conforme a RDC 660 — CID, dosagem, via de administração e CRM.' },
  { etapa: '02', titulo: 'Documentação ANVISA',    texto: 'CBMed organiza e submete toda a documentação para autorização de importação.' },
  { etapa: '03', titulo: 'Importação do Uruguai',  texto: 'Produto despachado diretamente pelo laboratório no Uruguai com rastreamento completo.' },
  { etapa: '04', titulo: 'Entrega em até 30 dias', texto: 'Recebimento em domicílio com documentação aduaneira regularizada.' },
]

// ─── Ícones inline reutilizáveis ─────────────────────────────────────────────
const IconWA = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
)

const IconCheck = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
  </svg>
)


// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const artigos = getArtigosRecentes(3)

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — Split layout Premium HealthTech
      ══════════════════════════════════════════════════════ */}
      <section className="bg-surface-base border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Texto ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-2 mb-7">
                <svg className="w-3.5 h-3.5 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Aprovado ANVISA</span>
                <span className="text-brand-300 select-none">·</span>
                <span className="font-mono text-xs font-semibold text-brand-600">RDC 660</span>
                <span className="text-brand-300 select-none">·</span>
                <span className="text-xs font-semibold text-brand-600">Importação Uruguai</span>
              </div>

              <h1 className="font-serif text-display font-semibold text-ink mb-6">
                Proporcionamos{' '}
                <span className="text-brand-500">Qualidade de Vida</span>
                {' '}através da Cannabis Medicinal
              </h1>

              <p className="text-lg text-ink-light leading-relaxed max-w-lg mb-10">
                Assessoria estratégica especializada, do primeiro contato ao recebimento em domicílio.
                Acesso legal via RDC 660 para{' '}
                <strong className="text-ink font-semibold">3.800+ pacientes</strong> e suporte a{' '}
                <strong className="text-ink font-semibold">1.600+ médicos prescritores</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <MagneticButton href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-base py-4 px-8">
                  <IconWA />
                  Sou Paciente
                </MagneticButton>
                <MagneticButton href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-base py-4 px-8">
                  Sou Médico
                </MagneticButton>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3">
                {['Aprovação ANVISA', 'RDC 660 Compliant', 'Importação Uruguai', 'Entrega em até 30 dias'].map(item => (
                  <span key={item} className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold px-4 py-2 rounded-full">
                    <IconCheck className="w-4 h-4 shrink-0"/>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Frasco premium SVG ── */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-xs">
                <HeroFlask />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NÚMEROS — strip teal
      ══════════════════════════════════════════════════════ */}
      <section className="bg-brand-500 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white text-center">
            {[
              { valor: '3.800+',  label: 'Pacientes assessorados' },
              { valor: '1.600+',  label: 'Médicos parceiros'      },
              { valor: 'até 30d', label: 'Prazo de entrega'       },
              { valor: 'RDC 660', label: 'Conformidade ANVISA'    },
            ].map((item, i) => (
              <StatItem key={i} valor={item.valor} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUTOS — cards brancos com imagem âmbar
      ══════════════════════════════════════════════════════ */}
      <section id="produtos" className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label block mb-3">Full Spectrum até 0,3% THC · Importação Uruguai</span>
            <h2 className="section-title mb-4">Nosso Catálogo</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Produtos aprovados pela ANVISA, importados do Uruguai via RDC 660. A indicação é sempre do médico prescritor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {produtos.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          <p className="text-center text-sm text-ink-muted mt-6">
            * A concentração é determinada pelo médico prescritor após avaliação clínica individualizada.
          </p>
          <div className="text-center mt-5">
            <Link href="/produtos" className="btn-ghost">
              Ver fichas técnicas completas →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BANNER MACRO — gota de óleo dourado (w-full)
      ══════════════════════════════════════════════════════ */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {/* Foto Macro: conta-gotas de vidro com gota de óleo dourado translúcido */}
        <img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=80"
          alt="Frasco âmbar de óleo de CBD com conta-gotas em luz natural quente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="section-label text-brand-300 block mb-2">Qualidade garantida</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white max-w-sm leading-tight">
              Entrega garantida em até 30 dias após autorização ANVISA
            </h3>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SEÇÃO 06 — Base Científica + molécula CBD
      ══════════════════════════════════════════════════════ */}
      <ScienceSection />

      {/* ══════════════════════════════════════════════════════
          PARA MÉDICOS — split layout
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-brand-50">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Médico prescritor em jaleco branco"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-500 text-white rounded-2xl p-5 shadow-brand">
                <div className="text-3xl font-extrabold">1.600+</div>
                <div className="text-brand-100 text-sm">médicos parceiros</div>
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2">
              <div className="section-divider mb-4"/>
              <span className="section-label block mb-3">Canal do Médico Prescritor</span>
              <h2 className="section-title mb-5">
                Suporte completo para você,{' '}
                <span className="text-brand-500">Dr(a).</span>
              </h2>
              <p className="text-ink-light leading-relaxed mb-6">
                A CBMed cuida de toda a burocracia da RDC 660 — documentação, autorização ANVISA, importação e entrega em até 30 dias — para que você foque no que importa: o cuidado clínico.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Material científico baseado em evidências atualizadas',
                  'Suporte na elaboração da prescrição conforme RDC 660',
                  'Acompanhamento logístico pós-prescrição',
                  'Canal direto de comunicação médico–CBMed',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink-light">
                    <div className="w-5 h-5 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3"/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Canal WhatsApp Médico
                </a>
                <Link href="/para-medicos" className="btn-secondary">
                  Área do Prescritor →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FLUXO RDC 660 — linha do tempo
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label block mb-3">Processo</span>
            <h2 className="section-title mb-4">Fluxo de Acesso via RDC 660</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Do primeiro contato ao recebimento em domicílio — processo claro, legal e totalmente assistido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fluxoRDC.map((item, i) => (
              <div key={i} className="relative">
                {i < fluxoRDC.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-brand-200"/>
                )}
                <div className="card p-7 text-center hover:shadow-card-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-brand-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-extrabold">
                    {item.etapa}
                  </div>
                  <h3 className="font-bold text-ink mb-2 text-sm">{item.titulo}</h3>
                  <p className="text-ink-light text-sm leading-relaxed">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ARTIGOS — prévia do blog
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-divider mb-4"/>
              <h2 className="section-title">Base de Conhecimento</h2>
              <p className="text-ink-light mt-2">Artigos científicos atualizados semanalmente.</p>
            </div>
            <Link href="/artigos" className="btn-ghost hidden sm:inline-flex">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artigos.map(artigo => (
              <Link key={artigo.slug} href={`/artigos/${artigo.slug}`} className="group card flex flex-col overflow-hidden hover:shadow-card-md transition-all hover:-translate-y-1">
                <div className="h-44 overflow-hidden bg-brand-50">
                  <img
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-brand-500">{artigo.categoria}</span>
                    <span className="text-slate-200">·</span>
                    <span className="text-xs text-ink-muted">{artigo.tempoLeitura}</span>
                  </div>
                  <h3 className="font-bold text-ink text-sm leading-snug mb-2 flex-1 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {artigo.titulo}
                  </h3>
                  <span className="text-xs text-brand-500 font-semibold flex items-center gap-1 mt-2">
                    Ler artigo
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/artigos" className="btn-secondary text-sm">Ver todos os artigos</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para iniciar o tratamento?
          </h2>
          <p className="text-brand-100 text-lg mb-10 leading-relaxed">
            Nossa equipe em Florianópolis/SC está disponível para conduzir todo o processo com segurança, agilidade e empatia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-brand-600 font-bold px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors shadow-md text-base">
              <IconWA />
              Acolhimento pelo WhatsApp
            </a>
            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-base">
              Sou Médico Prescritor
            </a>
          </div>
          <p className="text-brand-200 text-sm mt-6">{PHONE_DISPLAY} · Seg–Sex 8h às 18h · Florianópolis/SC</p>
        </div>
      </section>
    </>
  )
}

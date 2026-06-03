import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP, WHATSAPP_DR, PHONE_DISPLAY } from '../lib/constants'
import MagneticButton from '../components/MagneticButton'
import { Shield } from 'lucide-react'
import StatItem from '../components/StatItem'
import ProductCard from '../components/ProductCard'
import ScienceSection from '../components/ScienceSection'
import MedicalSection from '../components/MedicalSection'
import RdcSection from '../components/RdcSection'
import ArticlesSection from '../components/ArticlesSection'
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

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — Split layout Premium HealthTech
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-gray-950">
        {/* Background image fullscreen */}
        <Image
          src="/hero-products.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/10" />

        {/* Conteúdo */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">


            <h1 className="font-serif text-display-lg font-semibold text-white mb-4 select-none">
              Proporcionamos{' '}
              <span className="text-brand-400">Qualidade de Vida</span>
              {' '}através da Cannabis Medicinal
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-lg mb-10">
              Assessoria estratégica especializada, do primeiro contato ao recebimento em domicílio.
              Acesso legal via RDC 660 para{' '}
              <strong className="text-white font-semibold">3.800+ pacientes</strong> e suporte a{' '}
              <strong className="text-white font-semibold">1.600+ médicos prescritores</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <MagneticButton href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-8">
                <IconWA />
                Sou Paciente
              </MagneticButton>
              <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-base backdrop-blur-sm">
                Sou Médico
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3">
              {['Aprovação ANVISA', 'Importação Uruguai', 'Entrega em até 30 dias'].map(item => (
                <span key={item} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-brand-300 text-sm font-semibold px-4 py-2 rounded-full select-none">
                  <IconCheck className="w-4 h-4 shrink-0"/>
                  {item}
                </span>
              ))}
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
      <section id="produtos" className="py-20 bg-cream">
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
        <Image
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=80"
          alt="Frasco âmbar de óleo de CBD com conta-gotas em luz natural quente"
          fill
          className="object-cover"
          sizes="100vw"
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
          SEÇÃO 07 — Canal Médico
      ══════════════════════════════════════════════════════ */}
      <MedicalSection />

      {/* ══════════════════════════════════════════════════════
          SEÇÃO 08 — Anatomia do Produto Regulado
      ══════════════════════════════════════════════════════ */}
      <RdcSection />

      <ArticlesSection />

      {/* ══════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F0EDE6]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">
            Pronto para iniciar o tratamento?
          </h2>
          <p className="text-ink-light text-lg mb-10 leading-relaxed">
            Nossa equipe em Florianópolis/SC está disponível para conduzir todo o processo com segurança, agilidade e empatia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-600 transition-colors shadow-md text-base">
              <IconWA />
              Acolhimento pelo WhatsApp
            </a>
            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink/20 text-ink hover:bg-ink/5 font-semibold px-8 py-4 rounded-xl transition-colors text-base">
              Sou Médico Prescritor
            </a>
          </div>
          <p className="text-ink-muted text-sm mt-6">{PHONE_DISPLAY} · Seg–Sex 8h às 18h · Florianópolis/SC</p>
        </div>
      </section>
    </>
  )
}

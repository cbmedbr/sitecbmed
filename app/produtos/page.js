import Link from 'next/link'
import { WHATSAPP } from '../../lib/constants'
import InternalPageHero from '../../components/InternalPageHero'
import Image from 'next/image'
import { CheckCircle, ShieldCheck, Info } from 'lucide-react'

export const metadata = {
  title: 'Nossos Produtos',
  description: 'Catálogo CBMed — Óleos Full Spectrum até 0,3% THC, importados do Uruguai conforme RDC 660. CBD 1500mg, 3000mg, 6000mg e CBD+CBG.',
}

const produtos = [
  {
    mg: '1500 mg',
    nome: 'CBD Full Spectrum 1500mg',
    sub: 'Importação Uruguai · Protocolo Inicial',
    tipo: 'CBD Full Spectrum · até 0,3% THC',
    img: '/produto-1500.png',
    corBadge: 'bg-white/20 text-white',
    destaque: false,
    descricao: 'Formulação Full Spectrum indicada para pacientes em início de protocolo terapêutico. Concentração calibrada para alta tolerabilidade, permitindo titulação gradual conforme orientação médica.',
    composicao: 'Óleo de cânhamo Full Spectrum, canabidiol (CBD), óleo veicular MCT (triglicerídeo de cadeia média), vitamina E. THC ≤ 0,3%.',
    indicacoes: ['Ansiedade leve a moderada', 'Distúrbios do sono', 'Dor crônica leve', 'Bem-estar geral'],
    dosagem: 'Conforme prescrição médica. Geralmente 5 a 20 mg/dia em doses fracionadas.',
  },
  {
    mg: '3000 mg',
    nome: 'CBD Full Spectrum 3000mg',
    sub: 'Importação Uruguai · Protocolo Intermediário',
    tipo: 'CBD Full Spectrum · até 0,3% THC',
    img: '/produto-3000.png',
    corBadge: 'bg-white/20 text-white',
    destaque: true,
    descricao: 'Concentração intermediária, padrão mais prescrito pelos médicos parceiros da CBMed. Evidência clínica robusta em epilepsia, dor neuropática e ansiedade severa.',
    composicao: 'Óleo de cânhamo Full Spectrum, canabidiol (CBD), CBG, CBC, terpenos naturais, óleo veicular MCT, vitamina E. THC ≤ 0,3%.',
    indicacoes: ['Epilepsia e crises convulsivas', 'Ansiedade severa / TEPT', 'Dor neuropática', 'Esclerose múltipla'],
    dosagem: 'Conforme prescrição médica. Geralmente 20 a 50 mg/dia em doses fracionadas.',
  },
  {
    mg: '6000 mg',
    nome: 'CBD Full Spectrum 6000mg',
    sub: 'Importação Uruguai · Protocolo Intensivo',
    tipo: 'CBD Full Spectrum · até 0,3% THC',
    img: '/produto-6000.png',
    corBadge: 'bg-white/20 text-white',
    destaque: false,
    descricao: 'Alta concentração para protocolos terapêuticos intensivos. Para condições neurológicas complexas, dores refratárias e suporte oncológico. Exige acompanhamento médico especializado.',
    composicao: 'Óleo de cânhamo Full Spectrum de alta concentração, CBD, CBG, CBDA, CBC, terpenos naturais, óleo veicular MCT, vitamina E. THC ≤ 0,3%.',
    indicacoes: ['Neurologia complexa', 'Oncologia (suporte)', 'Dor refratária', 'Autismo severo (TEA)'],
    dosagem: 'Conforme prescrição médica especializada. Titulação obrigatória e gradual.',
  },
  {
    mg: 'CBD 5% + CBG 5%',
    nome: 'CBD + CBG Full Spectrum',
    sub: 'Importação Uruguai · Fórmula Combinada',
    tipo: 'CBD + CBG Full Spectrum · até 0,3% THC',
    img: '/produto-cbg.png',
    corBadge: 'bg-white/20 text-white',
    destaque: false,
    descricao: 'Combinação sinérgica de 1500 mg de CBD e 1500 mg de CBG em um único frasco. O CBG (canabigero) potencializa os efeitos anti-inflamatórios e neuroprotetores, ampliando o espectro terapêutico.',
    composicao: 'Óleo de cânhamo Full Spectrum, canabidiol (CBD) 1500 mg, canabigero (CBG) 1500 mg, terpenos naturais, óleo veicular MCT, vitamina E. THC ≤ 0,3%.',
    indicacoes: ['Inflamação crônica', 'Neuroproteção', 'Ansiedade e humor', 'Dor crônica'],
    dosagem: 'Conforme prescrição médica. Dose inicial 10 a 20 mg/dia (CBD+CBG combinados), com titulação gradual.',
  },
]

const qualidade = [
  { label: 'Full Spectrum',         descricao: 'Espectro completo de canabinoides, terpenos e flavonoides para o efeito entourage.' },
  { label: 'Aprovado ANVISA',       descricao: 'Autorizado para importação por pessoa física, conforme RDC 660/2022.' },
  { label: 'THC ≤ 0,3%',            descricao: 'Todos os produtos dentro dos limites legais estabelecidos pela ANVISA.' },
  { label: 'Rastreabilidade Total', descricao: 'Origem documentada da matéria-prima ao produto finalizado.' },
]

export default function Produtos() {
  return (
    <>
      {/* Hero */}
      <InternalPageHero
        eyebrow="NOSSOS PRODUTOS"
        title="Óleos Full Spectrum de Canabinoides"
        subtitle="Quatro produtos Full Spectrum até 0,3% THC. Importados do Uruguai com aprovação ANVISA e acessíveis via RDC 660."
        image="/hero-produtos.png"
      />

      {/* Selos de qualidade */}
      <section className="bg-forest py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {qualidade.map((d, i) => (
              <div key={i} className="text-center px-2">
                <div className="font-bold text-white text-sm">{d.label}</div>
                <div className="text-white/60 text-xs mt-0.5 hidden sm:block">{d.descricao}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards detalhados */}
      <section className="relative py-20 overflow-hidden">
        {/* Fundo imagem da seção */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/85" />
        </div>

        {/* Container dos cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {produtos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl border bg-white/[0.08] backdrop-blur-xl ${
              p.destaque ? 'border-brand-400/60 shadow-2xl' : 'border-white/15 shadow-lg'
            }`}>
              {p.destaque && (
                <div className="absolute top-0 left-8 z-20">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-b-full shadow">
                    Mais prescrito pelos médicos parceiros
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-8 md:p-10 items-center">
                {/* Identidade */}
                <div className="lg:col-span-5 flex gap-5 items-center">
                  {/* Frasco coluna fixa */}
                  <div className="w-36 md:w-44 shrink-0 flex items-center justify-center">
                    <Image src={p.img} alt={p.nome} width={180} height={300} className="object-contain drop-shadow-2xl w-full h-auto" />
                  </div>
                  {/* Dados ao lado do frasco */}
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-center text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 leading-[1.4] ${p.corBadge}`}>
                      {p.sub}
                    </span>
                    <div className="font-mono tabular-nums text-3xl font-bold text-white leading-none mb-1">{p.mg}</div>
                    <div className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-3">{p.tipo}</div>
                    <p className="text-white/70 text-[13px] leading-relaxed">{p.descricao}</p>
                  </div>
                </div>

                {/* Ficha técnica */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-5">
                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Composição</h3>
                    <p className="text-white/80 text-sm">{p.composicao}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Posologia</h3>
                    <p className="text-white/80 text-sm">{p.dosagem}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <ShieldCheck size={16} className="text-brand-400 shrink-0" />
                    Aprovado ANVISA · RDC 660 · Importação Uruguai
                  </div>
                </div>

                {/* Indicações + CTA */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Principais indicações</h3>
                  <ul className="space-y-2 mb-7">
                    {p.indicacoes.map(ind => (
                      <li key={ind} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle size={16} className="text-brand-400 shrink-0" />
                        {ind}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className={`self-center inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-colors ${
                      p.destaque ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-white text-ink hover:bg-white/90'
                    }`}>
                    Solicitar Assessoria
                  </a>
                  <p className="text-xs text-white/40 text-center mt-2 self-center">Exige prescrição médica</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aviso regulatório */}
      <section className="py-12 bg-surface-base">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <Info size={32} className="text-brand-500 mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-ink mb-3">Aviso Regulatório</h3>
            <p className="text-ink-light text-sm leading-relaxed max-w-2xl mx-auto">
              Os produtos desta página são importados por pessoa física mediante autorização da ANVISA, conforme RDC 660/2022. A CBMed atua exclusivamente como assessoria estratégica — não realiza vendas diretas. A indicação da concentração e posologia é de competência exclusiva do médico prescritor, após avaliação clínica individualizada.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

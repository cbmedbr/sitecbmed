import Link from 'next/link'
import { WHATSAPP } from '../../lib/constants'

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
    corBadge: 'bg-gray-100 text-gray-700',
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
    corBadge: 'bg-brand-100 text-brand-700',
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
    corBadge: 'bg-gray-100 text-gray-700',
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
    corBadge: 'bg-violet-100 text-violet-700',
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
      <section className="bg-gradient-to-br from-gray-950 via-brand-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 bg-white/10 text-brand-200 border border-white/10">Linha CBMed</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Óleos <span className="text-brand-400">Full Spectrum</span> de Canabinoides
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Quatro produtos Full Spectrum até 0,3% THC. Importados do Uruguai com aprovação ANVISA e acessíveis via RDC 660.
            </p>
          </div>
        </div>
      </section>

      {/* Selos de qualidade */}
      <section className="bg-brand-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {qualidade.map((d, i) => (
              <div key={i} className="text-center px-2">
                <div className="font-bold text-white text-sm">{d.label}</div>
                <div className="text-brand-100 text-xs mt-0.5 hidden sm:block">{d.descricao}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards detalhados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {produtos.map((p, i) => (
            <div key={i} className={`relative rounded-3xl border-2 p-8 md:p-10 ${
              p.destaque ? 'border-brand-400 shadow-xl' : 'border-gray-200 shadow-sm'
            }`}>
              {p.destaque && (
                <div className="absolute -top-4 left-8">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    Mais prescrito pelos médicos parceiros
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Identidade */}
                <div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${p.corBadge}`}>
                    {p.sub}
                  </span>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                      <img src={p.img} alt={p.nome} className="h-24 w-auto object-contain" />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-brand-600 mb-0.5">{p.mg}</div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{p.tipo}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.descricao}</p>
                </div>

                {/* Ficha técnica */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Composição</h3>
                    <p className="text-gray-600 text-sm">{p.composicao}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Posologia</h3>
                    <p className="text-gray-600 text-sm">{p.dosagem}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    Aprovado ANVISA · RDC 660 · Importação Uruguai
                  </div>
                </div>

                {/* Indicações + CTA */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Principais indicações</h3>
                  <ul className="space-y-2 mb-7">
                    {p.indicacoes.map(ind => (
                      <li key={ind} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                        {ind}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors block ${
                      p.destaque ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                    Solicitar Assessoria para este Produto
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-2">Exige prescrição médica</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aviso regulatório */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <svg className="w-8 h-8 text-brand-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="font-bold text-gray-900 mb-3">Aviso Regulatório</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              Os produtos desta página são importados por pessoa física mediante autorização da ANVISA, conforme RDC 660/2022. A CBMed atua exclusivamente como assessoria estratégica — não realiza vendas diretas. A indicação da concentração e posologia é de competência exclusiva do médico prescritor, após avaliação clínica individualizada.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

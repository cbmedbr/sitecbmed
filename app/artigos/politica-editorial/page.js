import Link from 'next/link'
import { buildMetadata } from '../../../lib/seo'
import { BookOpen, Search, ShieldCheck, Stethoscope } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Política Editorial',
  description:
    'Como a CBMed produz seu conteúdo educativo: critérios de fontes científicas, base em estudos indexados no PubMed e conformidade com as resoluções RDC 327/2019 e RDC 660/2022 da ANVISA.',
  path: '/artigos/politica-editorial',
})

const criterios = [
  {
    icone: <Search size={24} className="text-brand-500" />,
    titulo: 'Base em estudos indexados',
    texto:
      'Todo artigo produzido sob esta política parte de publicações indexadas no PubMed — revisões, revisões sistemáticas e ensaios clínicos publicados em periódicos revisados por pares. Cada fonte é listada ao final do artigo, com link direto para a publicação original.',
  },
  {
    icone: <BookOpen size={24} className="text-brand-500" />,
    titulo: 'Critérios de seleção de fontes',
    texto:
      'Priorizamos revisões e ensaios clínicos recentes, de periódicos com corpo editorial reconhecido. Não usamos como fonte primária conteúdo de blogs, imprensa leiga ou material promocional. Quando a evidência é preliminar, o texto diz isso explicitamente — "estudos sugerem", "pesquisas investigam".',
  },
  {
    icone: <Stethoscope size={24} className="text-brand-500" />,
    titulo: 'O que este conteúdo não é',
    texto:
      'Nenhum artigo desta seção constitui aconselhamento médico, recomendação de tratamento ou orientação de uso de qualquer produto. Os artigos produzidos sob esta política não publicam dosagens, protocolos individuais nem promessas terapêuticas. A decisão sobre qualquer tratamento cabe exclusivamente a um profissional de saúde habilitado, em avaliação individualizada.',
  },
  {
    icone: <ShieldCheck size={24} className="text-brand-500" />,
    titulo: 'Conformidade regulatória',
    texto:
      'O conteúdo é produzido em conformidade com a RDC 327/2019 da ANVISA, que disciplina a comunicação sobre produtos de Cannabis ao público, e com a RDC 660/2022, que regulamenta a importação por pessoa física mediante prescrição médica e autorização da agência.',
  },
]

export default function PoliticaEditorial() {
  return (
    <div className="bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

        <nav aria-label="Trilha de navegação" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-ink-muted">
            <li><Link href="/" className="hover:text-brand-600 transition-colors">Início</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/artigos" className="hover:text-brand-600 transition-colors">Artigos</Link></li>
            <li aria-hidden>›</li>
            <li aria-current="page" className="text-ink">Política Editorial</li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500 block mb-3">
            TRANSPARÊNCIA
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-tight mb-4">
            Política Editorial
          </h1>
          <p className="text-ink-light leading-relaxed">
            A seção de artigos da CBMed existe para tornar a ciência da Cannabis Medicinal e o marco
            regulatório brasileiro compreensíveis para pacientes e profissionais de saúde. Esta página
            descreve como esse conteúdo é produzido — e os limites que ele respeita. A política vale
            integralmente para os artigos publicados a partir de agosto de 2026; o acervo anterior
            está em revisão editorial gradual para adequação plena a estes critérios.
          </p>
        </header>

        <div className="space-y-5">
          {criterios.map((c, i) => (
            <section key={i} className="bg-white border border-ink/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-brand-50 rounded-xl p-3 shrink-0" aria-hidden>{c.icone}</div>
              <div>
                <h2 className="font-serif font-semibold text-ink text-lg mb-2">{c.titulo}</h2>
                <p className="text-ink-light text-sm leading-relaxed">{c.texto}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-5 text-xs text-amber-800 leading-relaxed">
          <strong className="font-bold">Aviso importante:</strong> o conteúdo educativo deste site não
          substitui consulta, diagnóstico ou acompanhamento médico. Produtos à base de canabidiol exigem
          prescrição de profissional habilitado e autorização da ANVISA, conforme a RDC 660/2022.
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-500 transition-colors"
          >
            ← Voltar para os artigos
          </Link>
        </div>

      </div>
    </div>
  )
}

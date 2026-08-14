import { notFound, redirect } from 'next/navigation'
import { getAllArtigos, ARTIGOS_POR_PAGINA } from '../../../../lib/artigos'
import ListagemArtigos from '../../../../components/ListagemArtigos'
import { buildMetadata } from '../../../../lib/seo'

// Paginação estática da listagem: /artigos é a página 1;
// este segmento só existe a partir da página 2.
export const dynamicParams = false

function totalPaginas() {
  return Math.max(1, Math.ceil(getAllArtigos().length / ARTIGOS_POR_PAGINA))
}

export async function generateStaticParams() {
  const total = totalPaginas()
  // total === 1 → nenhum parâmetro gerado; com dynamicParams=false,
  // qualquer /artigos/pagina/x responde 404.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ n: String(i + 2) }))
}

export async function generateMetadata({ params }) {
  const { n } = await params
  return buildMetadata({
    title: `Artigos sobre Cannabis Medicinal — página ${n}`,
    description:
      'Base de conhecimento CBMed: artigos educativos sobre Cannabis Medicinal, CBD, regulamentação ANVISA e evidências científicas, produzidos a partir de estudos indexados no PubMed.',
    path: `/artigos/pagina/${n}`,
  })
}

export default async function PaginaArtigos({ params }) {
  const { n } = await params
  const pagina = Number(n)

  if (!Number.isInteger(pagina) || pagina < 1) notFound()
  if (pagina === 1) redirect('/artigos')

  const todos = getAllArtigos()
  const total = totalPaginas()
  if (pagina > total) notFound()

  const inicio = (pagina - 1) * ARTIGOS_POR_PAGINA

  return (
    <ListagemArtigos
      artigos={todos.slice(inicio, inicio + ARTIGOS_POR_PAGINA)}
      pagina={pagina}
      totalPaginas={total}
    />
  )
}

import { getAllArtigos, ARTIGOS_POR_PAGINA } from '../../lib/artigos'
import ListagemArtigos from '../../components/ListagemArtigos'
import { buildMetadata } from '../../lib/seo'

// Sem '| CBMed' — o template do root layout já anexa o sufixo.
export const metadata = buildMetadata({
  title: 'Artigos sobre Cannabis Medicinal',
  description:
    'Base de conhecimento CBMed: artigos educativos sobre Cannabis Medicinal, CBD, regulamentação ANVISA e evidências científicas, produzidos a partir de estudos indexados no PubMed.',
  path: '/artigos',
})

export default function Artigos() {
  const todos = getAllArtigos()
  const totalPaginas = Math.max(1, Math.ceil(todos.length / ARTIGOS_POR_PAGINA))

  return (
    <ListagemArtigos
      artigos={todos.slice(0, ARTIGOS_POR_PAGINA)}
      pagina={1}
      totalPaginas={totalPaginas}
    />
  )
}

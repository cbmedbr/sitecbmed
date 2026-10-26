import { buildMetadata } from '../../lib/seo'
import JsonLd from '../../components/JsonLd'
import { grafo, faqSchema } from '../../lib/schema'
import { FAQ_ACOLHIMENTO } from '../../lib/faq'

// Sem pipe no título: o template do root já anexa ' | CBMed', e um segundo pipe
// deixava o título com três segmentos ("Como Funciona | Acolhimento | CBMed").
export const metadata = buildMetadata({
  title: 'Como importar óleo de CBD com autorização da ANVISA',
  description: 'Passo a passo para importar óleo de CBD pela RDC 660: documentos, autorização da ANVISA e prazos. Assessoria CBMed do início ao fim.',
  path: '/acolhimento',
})

// A page é 'use client'; o JSON-LD é emitido aqui, no layout servidor, para
// não entrar no bundle do navegador nem no payload RSC.
export default function AcolhimentoLayout({ children }) {
  return (
    <>
      <JsonLd data={grafo(faqSchema(FAQ_ACOLHIMENTO, '/acolhimento'))} />
      {children}
    </>
  )
}

import { buildMetadata } from '../../lib/seo'
import JsonLd from '../../components/JsonLd'
import { grafo, faqSchema } from '../../lib/schema'
import { FAQ_ACOLHIMENTO } from '../../lib/faq'

// Travessão em vez de pipe: o template do root já usa ' | CBMed', e um segundo
// pipe deixava o título com três segmentos ("Como Funciona | Acolhimento | CBMed").
export const metadata = buildMetadata({
  title: 'Acolhimento — Como Funciona',
  description: 'Entenda o processo de acolhimento CBMed: da primeira consulta à entrega do óleo de CBD. Assessoria completa conforme RDC 660 ANVISA.',
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

import { buildMetadata } from '../../lib/seo'

// Travessão em vez de pipe: o template do root já usa ' | CBMed', e um segundo
// pipe deixava o título com três segmentos ("Como Funciona | Acolhimento | CBMed").
export const metadata = buildMetadata({
  title: 'Acolhimento — Como Funciona',
  description: 'Entenda o processo de acolhimento CBMed: da primeira consulta à entrega do óleo de CBD. Assessoria completa conforme RDC 660 ANVISA.',
  path: '/acolhimento',
})

export default function AcolhimentoLayout({ children }) {
  return children
}

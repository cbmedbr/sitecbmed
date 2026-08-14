import { buildMetadata } from '../../lib/seo'

export const metadata = buildMetadata({
  title: 'Contato',
  description: 'Entre em contato com a CBMed. Assessoria especializada em Cannabis Medicinal, atendimento pelo WhatsApp ou formulário.',
  path: '/contato',
})

export default function ContatoLayout({ children }) {
  return children
}

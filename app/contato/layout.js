import { buildMetadata } from '../../lib/seo'

export const metadata = buildMetadata({
  title: 'Fale com a CBMed pelo WhatsApp ou e-mail',
  description: 'Entre em contato com a CBMed. Assessoria especializada em Cannabis Medicinal, atendimento pelo WhatsApp ou formulário.',
  path: '/contato',
})

export default function ContatoLayout({ children }) {
  return children
}

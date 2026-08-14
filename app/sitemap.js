import { artigos } from '../lib/artigos'
import { absoluteUrl } from '../lib/site'

// `atualizadoEm` é mantido à mão de propósito: usar a data do build faria todas as
// URLs mudarem de lastmod a cada deploy, e o Google aprende a ignorar sitemaps assim.
const ROTAS = [
  { path: '/',             prioridade: 1.0, frequencia: 'weekly',  atualizadoEm: '2026-08-13' },
  { path: '/acolhimento',  prioridade: 0.9, frequencia: 'monthly', atualizadoEm: '2026-08-13' },
  { path: '/produtos',     prioridade: 0.9, frequencia: 'monthly', atualizadoEm: '2026-08-13' },
  { path: '/para-medicos', prioridade: 0.8, frequencia: 'monthly', atualizadoEm: '2026-08-13' },
  { path: '/artigos',      prioridade: 0.7, frequencia: 'weekly',  atualizadoEm: '2026-08-13' },
  { path: '/ciencia',      prioridade: 0.7, frequencia: 'monthly', atualizadoEm: '2026-08-13' },
  { path: '/sobre',        prioridade: 0.6, frequencia: 'yearly',  atualizadoEm: '2026-08-13' },
  { path: '/contato',      prioridade: 0.5, frequencia: 'yearly',  atualizadoEm: '2026-08-13' },
]

// 'YYYY-MM-DD' vira meia-noite UTC, que em BRT é o dia anterior às 21h.
// Fixar meio-dia em -03:00 evita o lastmod sair um dia atrasado.
const paraData = ymd => new Date(`${ymd}T12:00:00-03:00`)

export default function sitemap() {
  const estaticas = ROTAS.map(r => ({
    url: absoluteUrl(r.path),
    lastModified: paraData(r.atualizadoEm),
    changeFrequency: r.frequencia,
    priority: r.prioridade,
  }))

  // Artigo novo em lib/artigos.js entra aqui sozinho.
  const posts = artigos.map(a => ({
    url: absoluteUrl(`/artigos/${a.slug}`),
    lastModified: paraData(a.data),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...estaticas, ...posts]
}

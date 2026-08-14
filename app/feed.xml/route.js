import { getAllArtigos, dataISO } from '../../lib/artigos'
import { SITE_NAME, absoluteUrl } from '../../lib/site'

// RSS 2.0 dos 20 artigos mais recentes — template string puro, sem lib.
// Gerado estaticamente no build; artigo novo entra no próximo deploy do n8n.
export const dynamic = 'force-static'

const escapar = s =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

export async function GET() {
  const artigos = getAllArtigos().slice(0, 20)

  const itens = artigos
    .map(a => {
      const url = absoluteUrl(`/artigos/${a.slug}`)
      return `    <item>
      <title>${escapar(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(dataISO(a.date)).toUTCString()}</pubDate>
      <category>${escapar(a.category)}</category>
      <description>${escapar(a.description)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapar(`${SITE_NAME} · Artigos`)}</title>
    <link>${absoluteUrl('/artigos')}</link>
    <description>Conteúdo educativo sobre Cannabis Medicinal, CBD e regulamentação ANVISA, produzido a partir de estudos indexados no PubMed.</description>
    <language>pt-BR</language>
    <atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml"/>
${itens}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}

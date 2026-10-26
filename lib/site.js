// ─── Identidade e URL canônica do site ───────────────────────────────────────
// Fonte única para tudo que precisa da URL absoluta: sitemap, robots, canonical,
// OpenGraph e JSON-LD. Antes disso o domínio estava hardcoded em app/layout.js.

export const SITE_URL  = 'https://cbmed.com.br'
export const SITE_NAME = 'CBMed'
export const SITE_LANG = 'pt-BR'
export const SITE_LOCALE = 'pt_BR'

export const SITE_TITLE_DEFAULT = 'CBMed | Assessoria em Cannabis Medicinal e Óleo de CBD'
export const SITE_DESCRIPTION =
  'Assessoria para o acesso legal ao óleo de CBD: documentação, autorização da ANVISA (RDC 660) e acompanhamento da importação.'

export const OG_IMAGE = '/og-image.jpg'
export const INSTAGRAM = 'https://www.instagram.com/cbmed.br'

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

import {
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_LOCALE,
  OG_IMAGE,
  absoluteUrl,
} from './site'

/**
 * Monta o objeto `metadata` completo de uma rota: canonical, OpenGraph e Twitter.
 *
 * Existe para que as 11 rotas não repitam o mesmo bloco de ~25 linhas — e,
 * principalmente, para que nenhuma esqueça o canonical.
 *
 * @param {object}   o
 * @param {string}  [o.title]          Sem sufixo — o template do root já anexa ' | CBMed'.
 *                                     Omitir mantém o title.default do root (caso da home).
 * @param {string}   o.description
 * @param {string}   o.path            Caminho com barra inicial. Ex: '/produtos'
 * @param {string}  [o.image]          Default: OG_IMAGE
 * @param {'website'|'article'} [o.type]
 * @param {string}  [o.publishedTime]  ISO 8601
 * @param {string}  [o.modifiedTime]   ISO 8601
 * @param {string[]}[o.authors]
 * @param {string}  [o.section]        Categoria editorial (artigos)
 */
export function buildMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
}) {
  const url = absoluteUrl(path)

  // O template '%s | CBMed' do root só se aplica a metadata.title — não ao
  // openGraph.title. Por isso o sufixo é montado à mão aqui.
  const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE_DEFAULT

  // Só declara dimensões para a imagem padrão, que é 1200x630 por construção.
  // Imagens próprias (heros de artigo) têm proporções variadas — declarar 1200x630
  // nelas faria as redes sociais renderizarem recorte errado.
  const ogImage =
    image === OG_IMAGE
      ? { url: image, width: 1200, height: 630, alt: title || SITE_NAME }
      : { url: image, alt: title || SITE_NAME }

  const openGraph = {
    type,
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    url,
    title: ogTitle,
    description,
    images: [ogImage],
  }

  if (type === 'article') {
    if (publishedTime) openGraph.publishedTime = publishedTime
    if (modifiedTime)  openGraph.modifiedTime  = modifiedTime
    if (authors)       openGraph.authors       = authors
    if (section)       openGraph.section       = section
  }

  const metadata = {
    description,
    // metadataBase (root layout) resolve o relativo para absoluto.
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [image],
    },
  }

  // Só define title quando informado — omitir deixa o title.default do root valer.
  if (title) metadata.title = title

  return metadata
}

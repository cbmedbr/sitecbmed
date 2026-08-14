import { SITE_URL, SITE_NAME, SITE_LANG, INSTAGRAM, absoluteUrl } from './site'
import { WHATSAPP_NUMBER, EMAIL } from './constants'

// @id estáveis para os nós se referenciarem entre si dentro do @graph.
export const ORG_ID     = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

/**
 * Organization — deliberadamente NÃO é LocalBusiness nem MedicalBusiness.
 *
 * LocalBusiness e derivados exigem `address` para validar, e endereço e CNPJ
 * foram removidos do site a pedido do cliente. Sem address, o Google descarta.
 *
 * E MedicalBusiness afirmaria que a entidade presta serviço médico — o que é
 * falso e contradiz o próprio disclaimer do site: a CBMed é assessoria, não
 * prescreve e não vende. Declarar isso em dado estruturado seria pior que não
 * declarar nada.
 */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: 'CBMed CannaBio Medicinal',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo-cbmed.png'),
      width: 2684,
      height: 1331,
    },
    image: absoluteUrl('/og-image.jpg'),
    description:
      'Assessoria estratégica para o acesso legal a produtos de Cannabis Medicinal no Brasil, ' +
      'conforme a RDC 660/2022 da ANVISA. A CBMed não comercializa produtos e não realiza ' +
      'prescrição médica: atua na orientação, na documentação e no acompanhamento do processo ' +
      'de importação por pessoa física, mediante prescrição de médico habilitado.',
    sameAs: [INSTAGRAM],
    areaServed: { '@type': 'Country', name: 'Brasil' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: `+${WHATSAPP_NUMBER}`, // sempre de constants, nunca hardcoded
        email: EMAIL,
        areaServed: 'BR',
        availableLanguage: ['Portuguese'],
      },
    ],
    knowsAbout: [
      'Cannabis medicinal',
      'Canabidiol (CBD)',
      'RDC 660/2022 ANVISA',
      'Importação de produtos derivados de Cannabis por pessoa física',
    ],
  }
}

/**
 * WebSite — sem `potentialAction`/SearchAction de propósito: o site não tem
 * busca interna, e declarar uma que não existe é markup falso.
 */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: SITE_LANG,
    publisher: { '@id': ORG_ID },
  }
}

export function faqSchema(faq, path) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    inLanguage: SITE_LANG,
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: f.resposta },
    })),
  }
}

/**
 * Article — não MedicalWebPage.
 *
 * MedicalWebPage carrega semântica de revisão clínica (`reviewedBy`,
 * `lastReviewed`). O autor atual é "Equipe Científica CBMed", uma organização
 * sem credencial nomeada. Declarar MedicalWebPage sem um revisor real seria
 * markup vazio; com um inventado, seria falso. Quando houver médico revisor
 * com CRM, vale reavaliar.
 */
export function articleSchema(artigo) {
  const url = absoluteUrl(`/artigos/${artigo.slug}`)
  const publicadoEm = `${artigo.data}T09:00:00-03:00`
  const minutos = parseInt(artigo.tempoLeitura, 10)
  const referencias = artigo.secoes?.find(s => s.tipo === 'referencias')?.itens ?? []

  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: artigo.titulo,
    description: artigo.resumo,
    image: [absoluteUrl(artigo.imagemHero)],
    datePublished: publicadoEm,
    dateModified: publicadoEm,
    author: { '@type': 'Organization', name: artigo.autor, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    inLanguage: SITE_LANG,
    articleSection: artigo.categoria,
    isAccessibleForFree: true,
    ...(Number.isFinite(minutos) ? { timeRequired: `PT${minutos}M` } : {}),
    ...(referencias.length ? { citation: referencias } : {}),
  }
}

/** Empacota os nós num único bloco @graph, com os @id resolvíveis entre si. */
export function grafo(...nos) {
  return { '@context': 'https://schema.org', '@graph': nos.filter(Boolean) }
}

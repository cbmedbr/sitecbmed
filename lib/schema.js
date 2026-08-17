import { SITE_URL, SITE_NAME, SITE_LANG, INSTAGRAM, absoluteUrl } from './site'
import { WHATSAPP_NUMBER, EMAIL, CNPJ, RAZAO_SOCIAL } from './constants'

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
    // `name` é a marca (como o público busca); `legalName` é a razão social.
    name: SITE_NAME,
    legalName: RAZAO_SOCIAL,
    alternateName: 'CBMed CannaBio Medicinal',
    // taxID com o CNPJ: identifica a CBMed como pessoa jurídica real e
    // verificável, o que ajuda o Google a consolidar a entidade.
    taxID: CNPJ,
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

// Não há articleSchema aqui: a migração dos artigos para MDX trouxe o próprio
// JSON-LD em app/artigos/[slug]/page.js, com Article + BreadcrumbList + FAQPage
// por artigo, alimentado pelo frontmatter. Duplicar aqui só criaria duas fontes
// de verdade para o mesmo nó.

/** Empacota os nós num único bloco @graph, com os @id resolvíveis entre si. */
export function grafo(...nos) {
  return { '@context': 'https://schema.org', '@graph': nos.filter(Boolean) }
}

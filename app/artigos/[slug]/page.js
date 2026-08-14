import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  getAllArtigos,
  getArtigoBySlug,
  getRelatedArtigos,
  formatarData,
  dataISO,
} from '../../../lib/artigos'
import { buildMetadata } from '../../../lib/seo'
import { SITE_NAME, absoluteUrl } from '../../../lib/site'
import { mdxComponents } from '../../../components/MdxComponents'
import ArtigoCard from '../../../components/ArtigoCard'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllArtigos().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const artigo = getArtigoBySlug(slug)
  if (!artigo) return {}

  const metadata = buildMetadata({
    title: artigo.title,
    description: artigo.description,
    path: `/artigos/${artigo.slug}`,
    type: 'article',
    publishedTime: dataISO(artigo.date),
    modifiedTime: dataISO(artigo.updated),
    authors: ['Equipe CBMed'],
    section: artigo.category,
  })

  if (artigo.keywords.length) metadata.keywords = artigo.keywords
  if (artigo.tags.length) metadata.openGraph.tags = artigo.tags

  // A imagem OG deste artigo vem do arquivo opengraph-image.js do segmento.
  // Imagens declaradas explicitamente aqui teriam precedência sobre a convenção
  // de arquivo, então removemos ambas: o og:image gerado (1200x630 com o título)
  // assume, e o twitter:image herda dele.
  delete metadata.openGraph.images
  delete metadata.twitter.images

  return metadata
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function jsonLdArtigo(artigo) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artigo.title,
    description: artigo.description,
    datePublished: dataISO(artigo.date),
    dateModified: dataISO(artigo.updated),
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Organization',
      name: 'Equipe CBMed',
      url: absoluteUrl('/artigos/politica-editorial'),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo-cbmed.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/artigos/${artigo.slug}`),
    },
  }
  if (artigo.keywords.length) ld.keywords = artigo.keywords.join(', ')
  if (artigo.sources.length) ld.citation = artigo.sources.map(s => s.url)
  return ld
}

function jsonLdBreadcrumb(artigo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Artigos', item: absoluteUrl('/artigos') },
      { '@type': 'ListItem', position: 3, name: artigo.title, item: absoluteUrl(`/artigos/${artigo.slug}`) },
    ],
  }
}

function jsonLdFaq(artigo) {
  if (!artigo.faq.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: artigo.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

function JsonLd({ data }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Corpo MDX ────────────────────────────────────────────────────────────────
// compileMDX dentro de try/catch: um artigo do n8n com sintaxe MDX inválida
// (ex.: um `<` solto no texto) degrada para texto sem formatação com warning,
// em vez de derrubar o build de todo o site.
async function CorpoArtigo({ artigo }) {
  try {
    const { content } = await compileMDX({
      source: artigo.content,
      components: mdxComponents,
      options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
    })
    return content
  } catch (e) {
    console.warn(`[artigos] ${artigo.slug}: falha ao compilar MDX (${e.message}) — exibindo texto sem formatação`)
    return (
      <div className="text-ink-light leading-relaxed whitespace-pre-wrap">{artigo.content}</div>
    )
  }
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default async function ArtigoPage({ params }) {
  const { slug } = await params
  const artigo = getArtigoBySlug(slug)
  if (!artigo) notFound()

  const relacionados = getRelatedArtigos(artigo.slug, artigo.tags, 3)
  const atualizado = artigo.updated !== artigo.date

  return (
    <>
      <JsonLd data={jsonLdArtigo(artigo)} />
      <JsonLd data={jsonLdBreadcrumb(artigo)} />
      <JsonLd data={jsonLdFaq(artigo)} />

      <div className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

          {/* Breadcrumb */}
          <nav aria-label="Trilha de navegação" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-ink-muted">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Início</Link></li>
              <li aria-hidden>›</li>
              <li><Link href="/artigos" className="hover:text-brand-600 transition-colors">Artigos</Link></li>
              <li aria-hidden>›</li>
              <li aria-current="page" className="text-ink line-clamp-1">{artigo.title}</li>
            </ol>
          </nav>

          {/* Cabeçalho */}
          <header className="mb-10">
            <span className="inline-block bg-brand-50 text-brand-600 border border-brand-100 font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {artigo.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-tight mb-5">
              {artigo.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted font-mono">
              <span>
                Publicado em <time dateTime={artigo.date}>{formatarData(artigo.date)}</time>
              </span>
              {atualizado && (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Atualizado em <time dateTime={artigo.updated}>{formatarData(artigo.updated)}</time>
                  </span>
                </>
              )}
              <span aria-hidden>·</span>
              <span>{artigo.readingTime} min de leitura</span>
            </div>
          </header>

          {/* Corpo MDX */}
          <article>
            <CorpoArtigo artigo={artigo} />
          </article>

          {/* Referências científicas */}
          {artigo.sources.length > 0 && (
            <section aria-labelledby="referencias-titulo" className="mt-12 pt-8 border-t border-ink/10">
              <h2 id="referencias-titulo" className="font-mono text-sm font-bold uppercase tracking-widest text-ink mb-5">
                Referências científicas
              </h2>
              <ol className="space-y-3 list-decimal pl-5 marker:text-brand-500 marker:font-bold">
                {artigo.sources.map((fonte, i) => (
                  <li key={i} className="text-sm text-ink-light leading-relaxed pl-1">
                    <a
                      href={fonte.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 font-medium underline decoration-brand-300 underline-offset-2 hover:text-brand-500 transition-colors"
                    >
                      {fonte.title}
                    </a>
                    {fonte.year && <span className="text-ink-muted"> · {fonte.year}</span>}
                    {fonte.type && (
                      <span className="ml-2 inline-block bg-brand-50 text-brand-600 font-mono text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full align-middle">
                        {fonte.type}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Perguntas frequentes */}
          {artigo.faq.length > 0 && (
            <section aria-labelledby="faq-titulo" className="mt-12 pt-8 border-t border-ink/10">
              <h2 id="faq-titulo" className="font-serif text-2xl font-semibold text-ink mb-6">
                Perguntas frequentes
              </h2>
              <div className="space-y-3">
                {artigo.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-ink/10 rounded-2xl open:border-brand-200 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <svg
                        className="w-4 h-4 shrink-0 text-brand-500 transition-transform group-open:rotate-180"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <p className="px-5 pb-5 text-ink-light text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Autoria */}
          <div className="mt-12 bg-white border border-ink/10 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0 font-serif font-semibold text-lg" aria-hidden>
              CB
            </div>
            <div>
              <p className="font-semibold text-ink">Equipe CBMed</p>
              <p className="text-ink-light text-sm leading-relaxed mt-0.5">
                Conteúdo educativo produzido a partir de estudos indexados no PubMed.{' '}
                <Link href="/artigos/politica-editorial" className="text-brand-600 font-medium underline decoration-brand-300 underline-offset-2 hover:text-brand-500 transition-colors">
                  Conheça nossa política editorial
                </Link>.
              </p>
            </div>
          </div>

          {/* Disclaimer médico */}
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-5 text-xs text-amber-800 leading-relaxed">
            <strong className="font-bold">Aviso importante:</strong> este conteúdo tem caráter exclusivamente
            informativo e educacional, e não substitui consulta, diagnóstico ou acompanhamento com profissional
            de saúde habilitado. Produtos à base de canabidiol exigem prescrição médica e autorização da ANVISA,
            conforme a RDC 660/2022.
          </div>

          {/* Leia também */}
          {relacionados.length > 0 && (
            <section aria-labelledby="relacionados-titulo" className="mt-14">
              <h2 id="relacionados-titulo" className="font-mono text-sm font-bold uppercase tracking-widest text-ink mb-6">
                Leia também
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relacionados.map(rel => (
                  <ArtigoCard key={rel.slug} artigo={rel} />
                ))}
              </div>
            </section>
          )}

          {/* CTA institucional discreto */}
          <div className="mt-14 bg-forest rounded-3xl p-8 text-center">
            <h2 className="font-serif font-semibold text-white text-xl mb-2">
              Dúvidas sobre o acesso legal via RDC 660?
            </h2>
            <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
              Nossa equipe orienta pacientes e médicos prescritores em todas as etapas do processo regulatório.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Falar com a equipe
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

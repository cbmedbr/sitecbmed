/**
 * ─────────────────────────────────────────────────────────────
 *  Base de Artigos CBMed — fonte: content/artigos/*.mdx
 *
 *  Os artigos são arquivos MDX commitados pela automação (n8n)
 *  em content/artigos/. O frontmatter segue o contrato:
 *
 *  title, description, slug, date, updated, category,
 *  tags[], keywords[], sources[{title,url,year,type}],
 *  faq[{q,a}], readingTime, draft
 *
 *  Tolerância a erro é regra: artigo com frontmatter inválido é
 *  IGNORADO com console.warn — nunca derruba o build inteiro.
 * ─────────────────────────────────────────────────────────────
 */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'artigos')

// Paginação da listagem /artigos (página 1) e /artigos/pagina/[n].
export const ARTIGOS_POR_PAGINA = 12

// Campos sem os quais a página do artigo não se sustenta.
const OBRIGATORIOS = ['title', 'description', 'slug', 'date']

function valido(data, arquivo) {
  for (const campo of OBRIGATORIOS) {
    if (!data[campo] || typeof data[campo] !== 'string' || !data[campo].trim()) {
      console.warn(`[artigos] ${arquivo}: campo obrigatório "${campo}" ausente — artigo ignorado`)
      return false
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    console.warn(`[artigos] ${arquivo}: date "${data.date}" fora do formato YYYY-MM-DD — artigo ignorado`)
    return false
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
    console.warn(`[artigos] ${arquivo}: slug "${data.slug}" não é kebab-case — artigo ignorado`)
    return false
  }
  return true
}

// Normaliza um frontmatter válido: todo campo opcional ganha default seguro,
// para as páginas nunca precisarem de optional chaining defensivo.
function normalizar(data, content) {
  const lista = v => (Array.isArray(v) ? v.filter(Boolean) : [])
  const fontes = lista(data.sources).filter(s => s && s.title && s.url)
  const faq = lista(data.faq).filter(f => f && f.q && f.a)

  // readingTime ausente: estima por contagem de palavras (~200 wpm).
  const readingTime =
    typeof data.readingTime === 'number' && data.readingTime > 0
      ? Math.round(data.readingTime)
      : Math.max(1, Math.round(content.trim().split(/\s+/).length / 200))

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    slug: data.slug.trim(),
    date: data.date,
    updated: /^\d{4}-\d{2}-\d{2}$/.test(data.updated || '') ? data.updated : data.date,
    category: (data.category || 'Artigo').toString().trim(),
    tags: lista(data.tags).map(String),
    keywords: lista(data.keywords).map(String),
    sources: fontes,
    faq,
    readingTime,
    // Fora do contrato do n8n, mas usado pelos artigos migrados do site:
    // imagem de card opcional. Ausente → as páginas usam fallback da marca.
    image: typeof data.image === 'string' ? data.image : null,
    content,
  }
}

let _cache = null

export function getAllArtigos() {
  if (_cache) return _cache

  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn(`[artigos] diretório ${CONTENT_DIR} não existe — nenhum artigo publicado`)
    _cache = []
    return _cache
  }

  const artigos = []
  for (const arquivo of fs.readdirSync(CONTENT_DIR)) {
    if (!arquivo.endsWith('.mdx')) continue
    try {
      const bruto = fs.readFileSync(path.join(CONTENT_DIR, arquivo), 'utf8')
      const { data, content } = matter(bruto)
      if (data.draft === true) continue
      if (!valido(data, arquivo)) continue
      artigos.push(normalizar(data, content))
    } catch (e) {
      console.warn(`[artigos] ${arquivo}: falha ao ler/parsear (${e.message}) — artigo ignorado`)
    }
  }

  // Slug duplicado: mantém o mais recente, avisa sobre o descartado.
  const porSlug = new Map()
  for (const a of artigos) {
    const existente = porSlug.get(a.slug)
    if (!existente) { porSlug.set(a.slug, a); continue }
    const fica = a.date >= existente.date ? a : existente
    const sai  = fica === a ? existente : a
    console.warn(`[artigos] slug duplicado "${a.slug}": mantendo ${fica.date}, ignorando ${sai.date}`)
    porSlug.set(a.slug, fica)
  }

  _cache = [...porSlug.values()].sort((a, b) => (a.date < b.date ? 1 : -1))
  return _cache
}

export function getArtigoBySlug(slug) {
  return getAllArtigos().find(a => a.slug === slug) ?? null
}

/**
 * Relacionados por interseção de tags; completa com os mais recentes
 * quando a interseção não preenche as n vagas.
 */
export function getRelatedArtigos(slug, tags = [], n = 3) {
  const outros = getAllArtigos().filter(a => a.slug !== slug)
  const setTags = new Set((tags || []).map(t => String(t).toLowerCase()))

  const pontuados = outros
    .map(a => ({ a, pontos: a.tags.filter(t => setTags.has(String(t).toLowerCase())).length }))
    .sort((x, y) => y.pontos - x.pontos || (x.a.date < y.a.date ? 1 : -1))

  const relacionados = pontuados.filter(p => p.pontos > 0).map(p => p.a)
  for (const a of outros) {
    if (relacionados.length >= n) break
    if (!relacionados.includes(a)) relacionados.push(a)
  }
  return relacionados.slice(0, n)
}

// ─── Datas ────────────────────────────────────────────────────────────────────
// 'YYYY-MM-DD' puro vira meia-noite UTC — em BRT isso é o dia ANTERIOR às 21h.
// Ancorar ao meio-dia de -03:00 mantém o dia certo em qualquer timezone de build.
const paraData = ymd => new Date(`${ymd}T12:00:00-03:00`)

export function formatarData(ymd) {
  return paraData(ymd).toLocaleDateString('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo',
  })
}

// ISO 8601 com offset explícito, para JSON-LD e openGraph published/modified time.
export function dataISO(ymd) {
  return `${ymd}T09:00:00-03:00`
}

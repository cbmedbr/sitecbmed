import Link from 'next/link'
import CapaArtigo from './CapaArtigo'
import { formatarData } from '../lib/artigos'

/**
 * Card padrão da listagem /artigos e das páginas de paginação.
 * Campos do contrato n8n: title, description, category, date, readingTime.
 */
export default function ArtigoCard({ artigo, priority = false }) {
  return (
    <Link href={`/artigos/${artigo.slug}`} className="group h-full">
      <article className="card h-full flex flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden bg-brand-50">
          <CapaArtigo
            artigo={artigo}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-white text-brand-600 text-xs font-bold px-2.5 py-1 rounded-full border border-brand-100">
            {artigo.category}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
            <time dateTime={artigo.date} className="font-mono">{formatarData(artigo.date)}</time>
            <span aria-hidden>·</span>
            <span className="font-mono">{artigo.readingTime} min de leitura</span>
          </div>
          <h2 className="font-serif font-semibold text-ink mb-2 leading-snug group-hover:text-brand-600 transition-colors">
            {artigo.title}
          </h2>
          <p className="text-ink-light text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {artigo.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold mt-auto">
            Ler artigo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}

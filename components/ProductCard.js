import { WHATSAPP } from '../lib/constants'

export default function ProductCard({ mg, sub, tipo, descricao, indicacoes, destaque, img }) {
  return (
    <div className={`relative card flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md ${
      destaque ? 'ring-2 ring-brand-400' : ''
    }`}>
      <div className="h-48 bg-white flex items-center justify-center overflow-hidden border-b border-slate-100">
        <img
          src={img}
          alt={`Óleo Full Spectrum CBD ${mg}`}
          className="h-full w-full object-contain p-4"
        />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-500 mb-1.5">{sub}</div>
        {destaque && (
          <span className="inline-flex self-start items-center gap-1.5 bg-gold-500/10 border border-gold-400/40 text-gold-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            ★ Mais prescrito
          </span>
        )}
        <div className="font-serif text-3xl font-semibold text-ink mb-1">{mg}</div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-4">{tipo} · até 0,3% THC · Importação Uruguai</div>
        <p className="text-sm text-ink-light leading-relaxed mb-5 flex-1">{descricao}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {indicacoes.map(ind => (
            <span key={ind} className="badge">{ind}</span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-5">
          <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          Aprovado ANVISA · RDC 660
        </div>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className={destaque ? 'btn-primary justify-center' : 'btn-secondary justify-center'}>
          Solicitar Assessoria
        </a>
      </div>
    </div>
  )
}

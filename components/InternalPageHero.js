const bgs = {
  caramelo: 'bg-surface-base',
  creme:    'bg-cream',
}

export default function InternalPageHero({ eyebrow, title, subtitle, bg = 'caramelo' }) {
  return (
    <section className={`${bgs[bg] ?? bgs.caramelo} py-20 md:py-28`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-ink-light text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

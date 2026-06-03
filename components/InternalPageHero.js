import Image from 'next/image'

const bgs = {
  caramelo: 'bg-surface-base',
  creme:    'bg-cream',
  forest:   'bg-forest',
}

export default function InternalPageHero({ eyebrow, title, subtitle, bg = 'caramelo', image }) {
  if (image) {
    return (
      <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-gray-950">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-gray-950/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          {eyebrow && (
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-300 mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-5 max-w-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    )
  }

  const isDark = bg === 'forest'

  return (
    <section className={`${bgs[bg] ?? bgs.caramelo} py-20 md:py-28`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className={`font-mono text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-brand-400' : 'text-brand-500'}`}>
            {eyebrow}
          </p>
        )}
        <h1 className={`font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5 ${isDark ? 'text-white' : 'text-ink'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${isDark ? 'text-white/75' : 'text-ink-light'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

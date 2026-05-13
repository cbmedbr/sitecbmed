import Image from 'next/image'

export default function RdcSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* Textura: gradiente radial verde sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,168,131,0.05) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card glassmorphism */}
        <div
          className="rounded-3xl px-6 py-12 lg:px-12 lg:py-16"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-400 block mb-4">
              TRANSPARÊNCIA REGULATÓRIA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              Cada frasco é um produto auditado
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Da farmácia uruguaia ao paciente brasileiro — rastreabilidade completa
            </p>
          </div>

          {/* Frasco central com float CSS */}
          <div className="flex items-center justify-center">
            <style>{`
              @keyframes floatBottle {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-6px); }
              }
              .bottle-float {
                animation: floatBottle 5s ease-in-out infinite;
              }
            `}</style>
            <div className="bottle-float w-48 md:w-64 lg:w-72 drop-shadow-[0_32px_48px_rgba(27,168,131,0.25)]">
              <Image
                src="/produto-hero.png"
                alt="Frasco CBMed — produto auditado e rastreável"
                width={465}
                height={514}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

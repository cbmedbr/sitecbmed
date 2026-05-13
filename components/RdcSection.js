import Image from 'next/image'

const anotacoesEsquerda = [
  { titulo: 'Aprovado ANVISA', sub: 'RDC 660' },
  { titulo: 'Vidro âmbar', sub: 'UV-protect' },
]

const anotacoesDireita = [
  { titulo: 'Importação Uruguai', sub: 'certificada' },
  { titulo: 'COA por lote', sub: 'rastreável' },
]

const anotacoesMobile = [
  'Aprovado ANVISA · RDC 660',
  'Importação Uruguai certificada',
  'Vidro âmbar UV-protect',
  'COA por lote rastreável',
]

const Dot = () => (
  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
)

const DashLine = () => (
  <svg style={{ flex: 1, minWidth: 16 }} height="2" preserveAspectRatio="none">
    <line
      x1="0" y1="1" x2="100%" y2="1"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
  </svg>
)

export default function RdcSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      <style>{`
        @keyframes floatBottle {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .bottle-float { animation: floatBottle 5s ease-in-out infinite; }
      `}</style>

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

          {/*
            DESKTOP — grid 3 colunas:
            [1fr] col esquerda · [auto] frasco · [1fr] col direita
            items-stretch: cols laterais tomam a altura do frasco →
            justify-around distribui as 2 anotações em ~25% e ~75% da altura.
          */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-stretch gap-0">

            {/* Coluna esquerda */}
            <div className="flex flex-col justify-around py-8">
              {anotacoesEsquerda.map((a, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-right shrink-0 max-w-[180px] pr-3">
                    <div className="text-white text-sm font-semibold leading-snug">{a.titulo}</div>
                    <div className="text-white/50 font-mono text-xs mt-0.5">{a.sub}</div>
                  </div>
                  <DashLine />
                  <Dot />
                </div>
              ))}
            </div>

            {/* Coluna central: frasco */}
            <div className="flex items-center justify-center px-10">
              <div className="bottle-float w-64 drop-shadow-[0_32px_48px_rgba(27,168,131,0.25)]">
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

            {/* Coluna direita */}
            <div className="flex flex-col justify-around py-8">
              {anotacoesDireita.map((a, i) => (
                <div key={i} className="flex items-center">
                  <Dot />
                  <DashLine />
                  <div className="text-left shrink-0 max-w-[180px] pl-3">
                    <div className="text-white text-sm font-semibold leading-snug">{a.titulo}</div>
                    <div className="text-white/50 font-mono text-xs mt-0.5">{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* MOBILE — frasco + lista vertical */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="bottle-float w-48 drop-shadow-[0_24px_36px_rgba(27,168,131,0.25)] mb-10">
              <Image
                src="/produto-hero.png"
                alt="Frasco CBMed — produto auditado e rastreável"
                width={465}
                height={514}
                className="w-full h-auto"
                priority={false}
              />
            </div>
            <ul className="space-y-3 w-full max-w-xs">
              {anotacoesMobile.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  <span className="text-white/75 text-sm font-mono">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

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
        @keyframes floatBottleHover {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .bottle-float { animation: floatBottle 5s ease-in-out infinite; }
        .bottle-wrapper { transition: transform 0.3s ease; }
        .bottle-wrapper:hover { transform: scale(1.05); }
        .bottle-wrapper:hover .bottle-float {
          animation: floatBottleHover 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Grade papel-timbrado */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Pontos de luz turquesa — off-center */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 40% 40% at 20% 30%, rgba(27,168,131,0.10) 0%, transparent 100%)',
            'radial-gradient(ellipse 35% 35% at 80% 70%, rgba(27,168,131,0.08) 0%, transparent 100%)',
          ].join(', '),
        }}
      />

      {/* Selo ANVISA gigante — canto inferior direito */}
      <div aria-hidden className="pointer-events-none absolute bottom-[-40px] right-[-40px] w-[380px] h-[380px] opacity-[0.045]">
        <svg viewBox="0 0 200 200" width="380" height="380" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="92" fill="none" stroke="white" strokeWidth="3"/>
          <circle cx="100" cy="100" r="82" fill="none" stroke="white" strokeWidth="1"/>
          {[0,45,90,135,180,225,270,315].map(deg => (
            <line key={deg} x1="100" y1="6" x2="100" y2="16"
              stroke="white" strokeWidth="2"
              transform={`rotate(${deg} 100 100)`}/>
          ))}
          <circle cx="100" cy="100" r="65" fill="none" stroke="white" strokeWidth="2"/>
          <text x="100" y="82" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="2">ANVISA</text>
          <text x="100" y="97" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" letterSpacing="1">RDC 660</text>
          <line x1="65" y1="104" x2="135" y2="104" stroke="white" strokeWidth="0.8"/>
          <text x="100" y="116" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">REGISTRO</text>
          <text x="100" y="127" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">LEGAL</text>
          <text x="100" y="148" textAnchor="middle" fill="white" fontSize="7" fontFamily="monospace">● APROVADO ●</text>
        </svg>
      </div>

      {/* Carimbos espalhados */}
      <div aria-hidden className="pointer-events-none absolute top-[12%] left-[5%] font-mono text-white text-xs font-bold uppercase tracking-widest opacity-[0.06] rotate-[-15deg]">APROVADO</div>
      <div aria-hidden className="pointer-events-none absolute top-[60%] left-[3%] font-mono text-white text-[10px] uppercase tracking-widest opacity-[0.05] rotate-[-8deg]">Lote: 2024.10.A</div>
      <div aria-hidden className="pointer-events-none absolute top-[25%] right-[4%] font-mono text-white text-xs font-bold uppercase tracking-widest opacity-[0.06] rotate-[12deg]">RDC 660</div>
      <div aria-hidden className="pointer-events-none absolute bottom-[20%] left-[8%] font-mono text-white text-[10px] uppercase tracking-widest opacity-[0.05] rotate-[6deg]">AUTORIZADO</div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card glassmorphism */}
        <div
          className="rounded-3xl px-6 py-12 lg:px-12 lg:py-16 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.22)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)',
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
            <p className="text-white/70 text-base md:text-lg max-w-sm mx-auto leading-relaxed text-balance">
              Da farmácia uruguaia ao paciente brasileiro: rastreabilidade completa
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
            <div className="flex flex-col justify-center gap-16 py-4 min-w-0">
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
            <div className="flex items-center justify-center px-6">
              <div className="bottle-wrapper">
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
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col justify-center gap-16 py-4 min-w-0">
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
            <div className="bottle-wrapper">
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

import SeloRdc660 from './SeloRdc660'

// Sem imagem de produto nem carimbos de aprovação: a seção fala da norma e
// do serviço, não de um produto.
const anotacoesEsquerda = [
  { titulo: 'Anvisa', sub: 'Autorização em nome do paciente' },
]

const anotacoesDireita = [
  { titulo: 'Prescrição médica', sub: 'Sempre obrigatória' },
]

const anotacoesMobile = [
  'Anvisa · Autorização em nome do paciente',
  'Prescrição médica · Sempre obrigatória',
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

      {/* Selo gigante — canto inferior direito */}
      <div aria-hidden className="pointer-events-none absolute bottom-[-40px] right-[-40px] opacity-[0.045]">
        <SeloRdc660 size={380} colorStroke="white" />
      </div>

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
              Importação regular, do cadastro à entrega
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-md mx-auto leading-relaxed text-balance">
              A autorização da Anvisa é pedida em nome do paciente, sempre com prescrição médica.
            </p>
          </div>

          {/* DESKTOP — [1fr] anotação · [auto] selo · [1fr] anotação */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-stretch gap-0">

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

            <div className="flex items-center justify-center px-6">
              <SeloRdc660 size={256} colorStroke="#1ba883" />
            </div>

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

          {/* MOBILE — selo + lista vertical */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="mb-10">
              <SeloRdc660 size={192} colorStroke="#1ba883" />
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

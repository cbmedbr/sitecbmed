import Link from 'next/link'
import MoleculeCBD from './MoleculeCBD'

// Só a chamada para /ciencia: resultado de estudo com número não aparece na
// home (orientação da Anvisa sobre publicidade de cannabis).
export default function ScienceSection() {
  return (
    <section className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Coluna esquerda: editorial */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-400 block mb-4">
              BASE CIENTÍFICA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Ciência com fonte e com limites
            </h2>
            <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
              Reunimos estudos publicados sobre o canabidiol, cada um com a referência completa, o tipo de estudo e a principal limitação.
            </p>

            <Link href="/ciencia" className="text-brand-400 hover:text-brand-300 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
              Ver a base científica →
            </Link>
          </div>

          {/* Coluna direita: molécula CBD interativa */}
          <div className="flex flex-col items-center justify-center gap-2">
            <MoleculeCBD size={400} />
            <div className="text-center select-none cursor-default">
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-1">Canabidiol</p>
              <p className="font-mono text-sm font-bold text-brand-400">
                C<sub>21</sub>H<sub>30</sub>O<sub>2</sub>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

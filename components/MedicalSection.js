import Link from 'next/link'
import { FileCheck, Shield, Package, MessageCircle } from 'lucide-react'
import { WHATSAPP_DR } from '../lib/constants'

const stats = [
  { valor: '1.600+', label: 'médicos parceiros' },
  { valor: '30 dias', label: 'prazo de entrega' },
  { valor: 'RDC 660', label: 'conformidade ANVISA' },
]

const beneficios = [
  {
    icon: FileCheck,
    titulo: 'Laudos COA por lote',
    texto: 'Acesse o certificado de análise de cada lote com rastreabilidade completa.',
  },
  {
    icon: Shield,
    titulo: 'Suporte RDC 660',
    texto: 'Orientação regulatória completa para prescrição legal via importação.',
  },
  {
    icon: Package,
    titulo: 'Rastreamento logístico',
    texto: 'Acompanhe cada etapa do processo após a prescrição.',
  },
  {
    icon: MessageCircle,
    titulo: 'Canal direto',
    texto: 'Linha exclusiva médico–CBMed para dúvidas clínicas e protocolos.',
  },
]

const IconWA = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
)

export default function MedicalSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">

          {/* Coluna esquerda: headline + CTA */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500 block mb-4">
              CANAL DO PRESCRITOR
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-ink mb-5 leading-tight">
              Prescreva com segurança regulatória e suporte clínico completo
            </h2>
            <p className="text-ink-light leading-relaxed mb-8 max-w-lg">
              A CBMed cuida de toda a burocracia da RDC 660 — documentação, autorização ANVISA, importação e entrega em até 30 dias — para que você foque no que importa: o cuidado clínico.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_DR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <IconWA />
                Canal WhatsApp Médico
              </a>
              <Link href="/para-medicos" className="btn-secondary">
                Área do Prescritor →
              </Link>
            </div>

            {/* Stat strip */}
            <div className="mt-10 pt-8 border-t border-ink/10 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-extrabold text-ink">{s.valor}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: grid 2×2 de benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beneficios.map(({ icon: Icon, titulo, texto }, i) => (
              <div key={i} className="card p-5 hover:shadow-card-md transition-shadow flex flex-col">
                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-ink text-sm mb-1.5">{titulo}</h3>
                <p className="text-ink-light text-xs leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { WHATSAPP, WHATSAPP_DR, PHONE_DISPLAY, EMAIL } from '../lib/constants'
import LogoCBMed from './LogoCBMed'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d2d1f] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Marca — 2 colunas ── */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <LogoCBMed dropSize={80} />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-5">
              Assessoria estratégica para acesso seguro e legal ao Óleo de CBD. Importação via RDC 660 da ANVISA. Conformidade total e atendimento humanizado.
            </p>

            {/* Badge ANVISA */}
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs mb-4">
              <svg className="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span className="text-gray-400">Aprovado <span className="text-white font-semibold">ANVISA · RDC 660</span></span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <svg className="w-3.5 h-3.5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Florianópolis, SC — Brasil
            </div>
          </div>

          {/* ── Navegação ── */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/para-medicos', label: 'Para Médicos' },
                { href: '/produtos',     label: 'Nossos Produtos' },
                { href: '/acolhimento',  label: 'Acolhimento' },
                { href: '/ciencia',      label: 'Ciência' },
                { href: '/sobre',        label: 'Sobre a CBMed' },
                { href: '/contato',      label: 'Contato' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contato ── */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-400 transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="text-gray-600 text-xs">Seg–Sex · 8h às 18h</li>
            </ul>

            <a
              href={WHATSAPP_DR}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 bg-brand-900/50 border border-brand-800 text-brand-400 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-brand-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              Canal do Médico Prescritor
            </a>
          </div>

          {/* ── Certificações ── */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Certificações</h3>
            <div className="space-y-3">
              {[
                { label: 'ANVISA',       sub: 'Produtos aprovados' },
                { label: 'RDC 660/2022', sub: 'Conformidade total' },
                { label: 'Importação Uruguai', sub: 'Padrão internacional' },
                { label: 'Full Spectrum', sub: 'Formulação premium' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"/>
                  <div>
                    <span className="text-xs font-semibold text-gray-300">{item.label}</span>
                    <span className="text-gray-600 text-xs"> · {item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-700">
          <span>© {year} CBMed Assessoria em Cannabis Medicinal. Todos os direitos reservados.</span>
          <span>Florianópolis/SC · CNPJ: 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  )
}

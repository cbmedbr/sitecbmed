import Link from 'next/link'
import { WHATSAPP, WHATSAPP_DR, PHONE_DISPLAY, EMAIL } from '../lib/constants'
import LogoCBMed from './LogoCBMed'
import { Shield, Phone, Mail, MapPin, CheckCircle, Stethoscope } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Marca — 4 colunas */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <LogoCBMed dropSize={72} />
            </div>

            <p className="font-serif text-base text-white/70 leading-relaxed max-w-xs mb-6 italic">
              Assessoria estratégica para acesso seguro e legal ao Óleo de CBD via RDC 660 ANVISA.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-xs mb-5">
              <Shield size={14} className="text-brand-400 shrink-0" />
              <span className="text-white/60">Aprovado <span className="text-white font-semibold">ANVISA · RDC 660</span></span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <MapPin size={14} className="text-brand-500 shrink-0" />
              <span className="font-mono">Florianópolis, SC — Brasil</span>
            </div>
          </div>

          {/* Navegação — 2 colunas */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/para-medicos', label: 'Para Médicos' },
                { href: '/produtos',     label: 'Produtos' },
                { href: '/acolhimento',  label: 'Acolhimento' },
                { href: '/ciencia',      label: 'Ciência' },
                { href: '/sobre',        label: 'Sobre' },
                { href: '/contato',      label: 'Contato' },
                { href: '/artigos',      label: 'Artigos' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato — 3 colunas */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">Contato</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/60 hover:text-brand-400 transition-colors">
                  <Phone size={14} className="text-brand-500 shrink-0" />
                  <span className="font-mono">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-white/60 hover:text-brand-400 transition-colors">
                  <Mail size={14} className="text-brand-500 shrink-0" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/40 text-xs">
                <span className="w-3.5 shrink-0"/>
                <span className="font-mono">Seg–Sex · 8h às 18h</span>
              </li>
            </ul>

            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all">
              <Stethoscope size={14} className="text-brand-400" />
              Canal do Médico Prescritor
            </a>
          </div>

          {/* Certificações — 3 colunas */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">Certificações</h3>
            <div className="space-y-3">
              {[
                { label: 'ANVISA',             sub: 'Produtos aprovados'   },
                { label: 'RDC 660/2022',       sub: 'Conformidade total'   },
                { label: 'Importação Uruguai', sub: 'Padrão internacional' },
                { label: 'Full Spectrum',      sub: 'Formulação premium'   },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-brand-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white/80">{item.label}</span>
                    <span className="text-white/40"> · {item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha de social + bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-brand-400 hover:border-white/30 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-brand-400 hover:border-white/30 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4 text-xs text-white/40">
            <span>© {year} CBMed Assessoria em Cannabis Medicinal.</span>
            <span className="hidden md:inline text-white/20">·</span>
            <span className="font-mono">CNPJ 64.853.460/0001-45</span>
          </div>
        </div>

        <p className="text-center text-[11px] text-white/30 mt-8 max-w-2xl mx-auto leading-relaxed">
          Este site não realiza prescrição médica. Produtos sujeitos à prescrição e autorização ANVISA — RDC 327/2019.
        </p>
      </div>
    </footer>
  )
}

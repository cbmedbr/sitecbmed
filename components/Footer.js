import Link from 'next/link'
import { WHATSAPP, WHATSAPP_DR, PHONE_DISPLAY, EMAIL, CNPJ, RAZAO_SOCIAL } from '../lib/constants'
import LogoCBMed from './LogoCBMed'
import { Shield, Phone, Mail, CheckCircle, Stethoscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Marca — 4 colunas */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <LogoCBMed height={43} />
            </div>

            <p className="font-serif text-base text-white/70 leading-relaxed max-w-xs mb-6 italic">
              Assessoria para importação legal de produtos de cannabis prescritos, conforme a RDC 660/2022.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-xs mb-5">
              <Shield size={14} className="text-brand-400 shrink-0" />
              <span className="text-white/60">Importação regular · <span className="text-white font-semibold">RDC 660/2022</span></span>
            </div>
          </div>

          {/* Navegação — 2 colunas */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/para-medicos', label: 'Para Médicos' },
                { href: '/como-funciona', label: 'Como funciona' },
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
                <span className="font-mono">Seg–Sex · 8h às 17h</span>
              </li>
            </ul>

            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all">
              <Stethoscope size={14} className="text-brand-400" />
              Canal do Médico Prescritor
            </a>
          </div>

          {/* Como atuamos — 3 colunas. Não são certificações: nada aqui
              pode sugerir produto aprovado ou registrado pela Anvisa. */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-5">Como atuamos</h3>
            <div className="space-y-3">
              {[
                { label: 'RDC 660/2022',      sub: 'Importação por pessoa física' },
                { label: 'Anvisa',            sub: 'Autorização em nome do paciente' },
                { label: 'Prescrição médica', sub: 'Sempre obrigatória' },
                { label: 'Assessoria',        sub: 'Do cadastro à entrega' },
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
            <a href="https://www.instagram.com/cbmed.br" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
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
            <span>© {RAZAO_SOCIAL} — Assessoria em Cannabis Medicinal.</span>
            <span className="font-mono">CNPJ {CNPJ}</span>
          </div>
        </div>

        <p className="text-center text-[11px] text-white/30 mt-8 max-w-2xl mx-auto leading-relaxed">
          Este site não realiza prescrição médica. A CBMed é uma assessoria de importação e não vende produtos. Os produtos derivados de cannabis importados por pessoa física pela RDC 660/2022 dependem de prescrição médica e de autorização da Anvisa para cada paciente, e não têm qualidade, segurança e eficácia avaliadas pela Anvisa.
        </p>
      </div>
    </footer>
  )
}

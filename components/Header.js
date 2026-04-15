'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { WHATSAPP, WHATSAPP_DR } from '../lib/constants'
import LogoCBMed from './LogoCBMed'

// ── Links de cada universo ─────────────────────────────────────────────────
const pacienteLinks = [
  { href: '/acolhimento', label: 'Como funciona' },
  { href: '/produtos',    label: 'Nossos Produtos' },
  { href: '/artigos',     label: 'Artigos & Ciência' },
]
const prescritoresLinks = [
  { href: '/para-medicos', label: 'Área do Prescritor' },
  { href: '/ciencia',      label: 'Evidências Clínicas' },
]

// ── Ícone WhatsApp ─────────────────────────────────────────────────────────
const IconWA = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
)

// ── Dropdown reutilizável ──────────────────────────────────────────────────
function Dropdown({ label, links, icon, pathname }) {
  const [open, setOpen] = useState(false)
  const hasActive = links.some(l => pathname === l.href || pathname.startsWith(l.href + '/'))

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
        hasActive ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
      }`}>
        {icon}
        {label}
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-1 w-52 z-50">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-card-lg py-2">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                pathname === link.href
                  ? 'text-brand-600 font-semibold bg-brand-50'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60 shrink-0"/>
              {link.label}
            </Link>
          ))}
        </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* ── Logo ── */}
          <Link href="/" aria-label="CBMed — página inicial" className="shrink-0">
            <LogoCBMed dropSize={80} />
          </Link>

          {/* ── Nav central: dois universos ── */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Separador visual B2C */}
            <div className="flex items-center gap-1 pr-3 border-r border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">Pacientes</span>
              <Dropdown
                label="Área para Pacientes"
                links={pacienteLinks}
                pathname={pathname}
                icon={
                  <svg className="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                }
              />
            </div>

            {/* Separador visual B2B */}
            <div className="flex items-center gap-1 pl-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">Prescritores</span>
              <Dropdown
                label="Área para Prescritores"
                links={prescritoresLinks}
                pathname={pathname}
                icon={
                  <svg className="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                }
              />
            </div>

            {/* Links avulsos */}
            {[
              { href: '/sobre',   label: 'Sobre' },
              { href: '/contato', label: 'Contato' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-50 text-brand-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTAs laterais ── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-sm py-2.5 px-4">
              Sou Médico
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-4">
              <IconWA />
              Sou Paciente
            </a>
          </div>

          {/* ── Hamburger mobile ── */}
          <button className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {/* ── Menu mobile ── */}
        {mobileOpen && (
          <div className="lg:hidden pb-5 pt-3 border-t border-slate-100">
            <p className="section-label px-4 mb-2">Pacientes</p>
            {pacienteLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-xl">{l.label}</Link>
            ))}
            <p className="section-label px-4 mt-4 mb-2">Prescritores</p>
            {prescritoresLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-xl">{l.label}</Link>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-2">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="btn-primary justify-center text-sm">
                <IconWA /> Sou Paciente
              </a>
              <a href={WHATSAPP_DR} target="_blank" rel="noopener noreferrer"
                className="btn-secondary justify-center text-sm">
                Sou Médico Prescritor
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

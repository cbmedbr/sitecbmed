'use client'

import { useState } from 'react'
import { WHATSAPP, PHONE_DISPLAY, EMAIL } from '../../lib/constants'

export default function Contato() {
  const [form, setForm]     = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
  const [enviado, setEnviado]   = useState(false)
  const [enviando, setEnviando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviando(true)
    // Conecte a um backend ou serviço (Resend, EmailJS etc.)
    setTimeout(() => { setEnviando(false); setEnviado(true) }, 1500)
  }

  const InfoItem = ({ icon, label, valor, href, destaque }) => (
    <div className="flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${destaque ? 'bg-brand-100 text-brand-600' : 'bg-gray-100 text-gray-500'}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</div>
        {href ? (
          <a href={href} target={destaque ? '_blank' : undefined} rel="noopener noreferrer"
            className={`font-medium mt-0.5 hover:underline ${destaque ? 'text-brand-600' : 'text-gray-700'}`}>
            {valor}
          </a>
        ) : (
          <div className="text-gray-700 font-medium mt-0.5">{valor}</div>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-brand-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge mb-5 bg-white/10 text-brand-200 border border-white/10">Fale conosco</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Entre em contato</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Estamos prontos para esclarecer suas dúvidas e iniciar o seu acolhimento especializado. A forma mais rápida é pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Faixa WhatsApp */}
      <section className="bg-brand-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-bold text-lg">Resposta mais rápida pelo WhatsApp</p>
            <p className="text-brand-100 text-sm">Nossa equipe responde em até 2 horas em dias úteis.</p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white text-brand-700 font-bold px-7 py-3.5 rounded-xl hover:bg-brand-50 transition-colors shadow-md whitespace-nowrap">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Envie uma mensagem</h2>
              <p className="text-gray-500 text-sm mb-8">Prefere escrever? Respondemos em até 24h úteis.</p>

              {enviado ? (
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-2">Mensagem recebida!</h3>
                  <p className="text-brand-600 mb-4">Nossa equipe entrará em contato em breve.</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline">
                    Ou fale agora pelo WhatsApp
                  </a>
                  <div className="mt-5">
                    <button onClick={() => { setEnviado(false); setForm({ nome:'', email:'', telefone:'', assunto:'', mensagem:'' }) }}
                      className="text-sm text-gray-400 hover:text-gray-600">
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nome">
                        Nome completo <span className="text-red-500">*</span>
                      </label>
                      <input id="nome" name="nome" type="text" required value={form.nome} onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-gray-800 placeholder-gray-400 text-sm"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="telefone">WhatsApp</label>
                      <input id="telefone" name="telefone" type="tel" value={form.telefone} onChange={handleChange}
                        placeholder="(48) 9 9982-2057"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-gray-800 placeholder-gray-400 text-sm"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-gray-800 placeholder-gray-400 text-sm"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="assunto">Assunto</label>
                    <select id="assunto" name="assunto" value={form.assunto} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-gray-800 text-sm bg-white">
                      <option value="">Selecione um assunto</option>
                      <option value="acolhimento">Quero iniciar meu acolhimento</option>
                      <option value="produto">Dúvida sobre os produtos</option>
                      <option value="processo">Como funciona o processo?</option>
                      <option value="anvisa">Questões regulatórias (ANVISA / RDC 660)</option>
                      <option value="medico">Sou médico prescritor</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mensagem">
                      Mensagem <span className="text-red-500">*</span>
                    </label>
                    <textarea id="mensagem" name="mensagem" rows={5} required value={form.mensagem} onChange={handleChange}
                      placeholder="Conte brevemente sobre o seu caso ou dúvida..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-gray-800 placeholder-gray-400 resize-none text-sm"/>
                  </div>
                  <button type="submit" disabled={enviando}
                    className="w-full py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm">
                    {enviando ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Seus dados são tratados com total sigilo, conforme a LGPD.</p>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Outras formas de contato</h2>
              <div className="space-y-5 mb-10">
                <InfoItem
                  destaque
                  label="WhatsApp"
                  valor={PHONE_DISPLAY}
                  href={WHATSAPP}
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.144.566 4.155 1.548 5.897L.057 23.082a.75.75 0 00.92.921l5.255-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.358l-.355-.21-3.668 1.035 1.051-3.596-.23-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>}
                />
                <InfoItem
                  label="E-mail"
                  valor={EMAIL}
                  href={`mailto:${EMAIL}`}
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                />
                <InfoItem
                  label="Localização"
                  valor="Florianópolis, Santa Catarina"
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                />
                <InfoItem
                  label="Horário"
                  valor="Segunda a Sexta, 8h às 18h"
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Nota importante</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      A CBMed atua como assessoria estratégica. Não realizamos vendas diretas de produtos. Todo o processo de prescrição e acesso é conduzido por médicos habilitados e em conformidade com a RDC 660 da ANVISA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

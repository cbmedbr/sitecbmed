'use client'
import { useState, useRef } from 'react'

const IconUpload = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
  </svg>
)

const IconCheck = () => (
  <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
  </svg>
)

const IconFile = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
  </svg>
)

export default function UploadPortal() {
  const [nome, setNome]   = useState('')
  const [email, setEmail] = useState('')
  const [arquivos, setArquivos] = useState({
    prescricao:  null,
    documento:   null,
    comprovante: null,
  })
  const [enviado, setEnviado]   = useState(false)
  const [erro, setErro]         = useState('')

  const refPrescricao  = useRef(null)
  const refDocumento   = useRef(null)
  const refComprovante = useRef(null)

  const handleArquivo = (campo) => (e) => {
    const file = e.target.files[0]
    if (file) setArquivos(prev => ({ ...prev, [campo]: file }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErro('')

    if (!nome.trim()) { setErro('Por favor, informe seu nome.'); return }
    if (!email.trim()) { setErro('Por favor, informe seu e-mail.'); return }
    if (!arquivos.prescricao)  { setErro('Anexe a Prescrição Médica.'); return }
    if (!arquivos.documento)   { setErro('Anexe o Documento com Foto.'); return }
    if (!arquivos.comprovante) { setErro('Anexe o Comprovante de Residência.'); return }

    const subject = encodeURIComponent(`CBMed – Documentação de ${nome.trim()}`)
    const body    = encodeURIComponent(
`Olá, equipe CBMed!

Meu nome é ${nome.trim()} e meu e-mail de contato é ${email.trim()}.

Estou enviando minha documentação para iniciar o processo de importação via RDC 660:

• Prescrição Médica: ${arquivos.prescricao.name}
• Documento com Foto: ${arquivos.documento.name}
• Comprovante de Residência: ${arquivos.comprovante.name}

Por favor, confirme o recebimento e oriente os próximos passos.

Obrigado(a)!`
    )

    window.location.href = `mailto:contato@cbmed.com.br?subject=${subject}&body=${body}`
    setEnviado(true)
  }

  const campos = [
    {
      key:   'prescricao',
      label: 'Prescrição Médica',
      hint:  'PDF, JPG ou PNG · até 5 MB',
      ref:   refPrescricao,
    },
    {
      key:   'documento',
      label: 'Documento com Foto (RG / CNH)',
      hint:  'PDF, JPG ou PNG · até 5 MB',
      ref:   refDocumento,
    },
    {
      key:   'comprovante',
      label: 'Comprovante de Residência',
      hint:  'PDF, JPG ou PNG · emitido nos últimos 90 dias',
      ref:   refComprovante,
    },
  ]

  if (enviado) {
    return (
      <div className="bg-white rounded-3xl shadow-card-lg border border-slate-100 p-8 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-bold text-ink text-lg">Seu e-mail foi preparado!</h3>
        <p className="text-ink-light text-sm leading-relaxed max-w-xs">
          Seu cliente de e-mail foi aberto com a mensagem preenchida.
          <strong className="text-ink"> Não esqueça de anexar os 3 arquivos</strong> antes de enviar.
        </p>
        <div className="bg-slate-50 rounded-xl p-4 text-left w-full space-y-2">
          {campos.map(c => (
            <div key={c.key} className="flex items-center gap-2 text-sm text-ink-light">
              <IconCheck />
              <span>{arquivos[c.key]?.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => { setEnviado(false); setNome(''); setEmail(''); setArquivos({ prescricao: null, documento: null, comprovante: null }) }}
          className="btn-ghost text-sm"
        >
          Enviar novamente
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card-lg border border-slate-100 p-8">
      <h3 className="font-bold text-ink text-lg mb-1">Documentação para início</h3>
      <p className="text-ink-muted text-sm mb-7">Preencha os dados e selecione seus arquivos.</p>

      <div className="space-y-4">
        {/* Nome */}
        <div>
          <label className="label">Nome completo <span className="text-brand-500">*</span></label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Ex: Maria da Silva"
            className="input"
          />
        </div>

        {/* E-mail */}
        <div>
          <label className="label">E-mail <span className="text-brand-500">*</span></label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Ex: maria@email.com"
            className="input"
          />
        </div>

        {/* Uploads */}
        {campos.map(({ key, label, hint, ref }) => (
          <div key={key}>
            <label className="label">
              {label} <span className="text-brand-500">*</span>
            </label>
            <input
              ref={ref}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleArquivo(key)}
            />
            {arquivos[key] ? (
              /* Arquivo selecionado */
              <button
                type="button"
                onClick={() => ref.current?.click()}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 border-brand-400 bg-brand-50/40 text-left transition-colors hover:bg-brand-50"
              >
                <div className="text-brand-500"><IconFile /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">{arquivos[key].name}</p>
                  <p className="text-xs text-ink-muted">Clique para trocar o arquivo</p>
                </div>
                <IconCheck />
              </button>
            ) : (
              /* Zona de upload vazia */
              <button
                type="button"
                onClick={() => ref.current?.click()}
                className="upload-zone w-full"
              >
                <div className="text-brand-400"><IconUpload /></div>
                <p className="text-sm font-medium text-ink-light">
                  Arraste o arquivo ou{' '}
                  <span className="text-brand-500 font-semibold">clique para selecionar</span>
                </p>
                <p className="text-xs text-ink-muted">{hint}</p>
              </button>
            )}
          </div>
        ))}

        {/* Erro */}
        {erro && (
          <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2.5">{erro}</p>
        )}

        {/* Submit */}
        <button type="submit" className="btn-primary w-full justify-center mt-2 py-4">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Enviar documentação
        </button>

        <p className="text-center text-xs text-ink-muted">
          Seus dados são tratados com sigilo e em conformidade com a LGPD.
        </p>
      </div>
    </form>
  )
}

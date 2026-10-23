'use client'
import { useEffect, useRef, useState } from 'react'

// A 3Dmol (~157 KB) só carrega quando a seção chega perto da tela, e a molécula
// só gira enquanto está visível. Antes ela carregava junto com a home e girava
// em WebGL o tempo todo, mesmo fora da tela — no PageSpeed a home não ficava
// ociosa nunca (TBT de até 6 s).
// A estrutura (PubChem CID 644019, canabidiol) é servida de /public em vez de
// ser baixada do PubChem a cada visita.
export default function MoleculeCBD({ size = 320 }) {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let viewer = null
    let cancelled = false
    let iniciado = false
    let visivel = false
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const atualizarGiro = () => {
      if (!viewer || semMovimento) return
      if (visivel) viewer.spin('y', 0.5)
      else viewer.spin(false)
    }

    const init = async () => {
      try {
        const mod = await import('3dmol')
        const $3Dmol = mod.default || mod
        const resposta = await fetch('/molecula-cbd.sdf')
        if (!resposta.ok) throw new Error(`SDF ${resposta.status}`)
        const sdf = await resposta.text()
        if (cancelled || !containerRef.current) return

        viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: 'rgba(0,0,0,0)',
          backgroundAlpha: 0,
          antialias: true,
        })
        viewer.addModel(sdf, 'sdf')
        viewer.setStyle({}, {
          stick: { radius: 0.18, colorscheme: 'cyanCarbon' },
          sphere: { scale: 0.22 }
        })
        viewer.setBackgroundColor(0x000000, 0)
        viewer.zoomTo()
        viewer.render()
        atualizarGiro()
        setLoaded(true)
      } catch (e) {
        console.error('Erro carregando 3dmol:', e)
        setError(true)
      }
    }

    // Monta a ~300px de entrar na tela; depois disso só liga e desliga o giro.
    const observer = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting
      if (visivel && !iniciado) {
        iniciado = true
        init()
      } else {
        atualizarGiro()
      }
    }, { rootMargin: '300px' })
    observer.observe(el)

    return () => {
      cancelled = true
      observer.disconnect()
      try { if (viewer) viewer.spin(false) } catch {}
    }
  }, [])

  useEffect(() => {
    const wrapper = containerRef.current?.parentElement
    if (!wrapper) return

    const handler = (e) => {
      e.preventDefault()
      e.stopPropagation()
      window.scrollBy({ top: e.deltaY, behavior: 'auto' })
    }

    wrapper.addEventListener('wheel', handler, { capture: true, passive: false })
    return () => wrapper.removeEventListener('wheel', handler, { capture: true })
  }, [])

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ width: '100%', height: '100%' }}
      />
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs font-mono">
          carregando molécula...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs font-mono text-center px-4">
          C₂₁H₃₀O₂ · Cannabidiol
        </div>
      )}
    </div>
  )
}

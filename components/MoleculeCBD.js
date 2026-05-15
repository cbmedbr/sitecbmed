'use client'
import { useEffect, useRef, useState } from 'react'

export default function MoleculeCBD({ size = 320 }) {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    let viewer = null
    let cancelled = false

    const init = async () => {
      try {
        const $3Dmol = (await import('3dmol')).default || (await import('3dmol'))
        if (cancelled || !containerRef.current) return

        viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: 'rgba(0,0,0,0)',
          backgroundAlpha: 0,
          antialias: true,
        })

        $3Dmol.download('cid:644019', viewer, { multimodel: false }, () => {
          if (cancelled) return
          viewer.setStyle({}, {
            stick: { radius: 0.18, colorscheme: 'cyanCarbon' },
            sphere: { scale: 0.22 }
          })
          viewer.setBackgroundColor(0x000000, 0)
          viewer.zoomTo()
          viewer.render()
          viewer.spin('y', 0.5)
          setLoaded(true)
        })
      } catch (e) {
        console.error('Erro carregando 3dmol:', e)
        setError(true)
      }
    }

    init()

    return () => {
      cancelled = true
      try { if (viewer) viewer.spin(false) } catch {}
    }
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

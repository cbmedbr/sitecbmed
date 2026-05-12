export default function HeroFlask() {
  return (
    <svg
      viewBox="0 0 240 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hf-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#D4B96A"/>
          <stop offset="100%" stopColor="#A8893D"/>
        </linearGradient>
        <linearGradient id="hf-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1BA883" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#0D5A46" stopOpacity="0.95"/>
        </linearGradient>
        <clipPath id="hf-clip">
          <path d="M80,92 L160,92 L160,316 Q160,332 144,332 L96,332 Q80,332 80,316 Z"/>
        </clipPath>
        <filter id="hf-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>

      {/* Sombra projetada */}
      <ellipse cx="120" cy="352" rx="44" ry="9"
        fill="#0D5A46" fillOpacity="0.14" filter="url(#hf-shadow)"/>

      {/* Corpo do frasco — vidro */}
      <path d="M80,92 L160,92 L160,316 Q160,332 144,332 L96,332 Q80,332 80,316 Z"
        fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>

      {/* Líquido interno — clipado ao corpo */}
      <g clipPath="url(#hf-clip)">
        <rect x="80" y="169" width="80" height="163" fill="url(#hf-liquid)"/>
        <path d="M80,169 Q120,163 160,169"
          fill="none" stroke="#39BEA6" strokeOpacity="0.5" strokeWidth="1.5"/>
      </g>

      {/* Gargalo */}
      <path d="M92,68 L148,68 L160,92 L80,92 Z"
        fill="white" fillOpacity="0.10" stroke="white" strokeOpacity="0.20" strokeWidth="0.8"/>

      {/* Pipeta — corpo (desenhada antes da tampa para ficar "dentro") */}
      <line x1="120" y1="54" x2="120" y2="316"
        stroke="#1BA883" strokeOpacity="0.40" strokeWidth="3"/>

      {/* Anel separador tampa/gargalo */}
      <rect x="92" y="65" width="56" height="3" fill="#8B6914"/>

      {/* Tampa — corpo */}
      <path d="M92,65 L92,26 Q92,20 120,18 Q148,20 148,26 L148,65 Z"
        fill="url(#hf-gold)"/>

      {/* Tampa — highlight lateral */}
      <rect x="94" y="24" width="4" height="37" rx="2"
        fill="#E8C86A" fillOpacity="0.60"/>

      {/* Tampa — ranhuras esquerda */}
      <line x1="97"  y1="28" x2="97"  y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="100" y1="28" x2="100" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="103" y1="28" x2="103" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="106" y1="28" x2="106" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>

      {/* Tampa — ranhuras direita */}
      <line x1="134" y1="28" x2="134" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="137" y1="28" x2="137" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="140" y1="28" x2="140" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>
      <line x1="143" y1="28" x2="143" y2="62" stroke="#8B6914" strokeOpacity="0.45" strokeWidth="0.8"/>

      {/* Pipeta — bulbo (sobre a tampa) */}
      <ellipse cx="120" cy="48" rx="7" ry="9" fill="#C9A84C" fillOpacity="0.85"/>

      {/* Pipeta — ponta inferior */}
      <circle cx="120" cy="316" r="2" fill="#1BA883" fillOpacity="0.50"/>

      {/* Reflexo A — faixa vertical longa */}
      <rect x="84" y="100" width="6" height="180" rx="3"
        fill="white" fillOpacity="0.30"/>

      {/* Reflexo B — ponto de luz especular */}
      <ellipse cx="92" cy="112" rx="8" ry="14"
        fill="white" fillOpacity="0.55" transform="rotate(-15 92 112)"/>
    </svg>
  )
}

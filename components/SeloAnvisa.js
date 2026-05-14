export default function SeloAnvisa({ size = 240, colorStroke = '#1ba883' }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="92" fill="none" stroke={colorStroke} strokeWidth="3"/>
      <circle cx="100" cy="100" r="82" fill="none" stroke={colorStroke} strokeWidth="1"/>
      {[0,45,90,135,180,225,270,315].map(deg => (
        <line key={deg} x1="100" y1="6" x2="100" y2="16"
          stroke={colorStroke} strokeWidth="2"
          transform={`rotate(${deg} 100 100)`}/>
      ))}
      <circle cx="100" cy="100" r="65" fill="none" stroke={colorStroke} strokeWidth="2"/>
      <text x="100" y="82" textAnchor="middle" fill={colorStroke} fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="2">ANVISA</text>
      <text x="100" y="97" textAnchor="middle" fill={colorStroke} fontSize="9" fontFamily="monospace" letterSpacing="1">RDC 660</text>
      <line x1="65" y1="104" x2="135" y2="104" stroke={colorStroke} strokeWidth="0.8"/>
      <text x="100" y="116" textAnchor="middle" fill={colorStroke} fontSize="8" fontFamily="monospace">REGISTRO</text>
      <text x="100" y="127" textAnchor="middle" fill={colorStroke} fontSize="8" fontFamily="monospace">LEGAL</text>
      <text x="100" y="148" textAnchor="middle" fill={colorStroke} fontSize="7" fontFamily="monospace">● APROVADO ●</text>
    </svg>
  )
}

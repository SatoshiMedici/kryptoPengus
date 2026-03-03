'use client'

type Variant = 'default' | 'teal' | 'orange' | 'gold' | 'shadow' | 'ghost' | 'inverted'

const VARIANTS: Record<Variant, { body: string; face: string; beak: string }> = {
  default:  { body: '#0D1117', face: '#F0F0F0', beak: '#E87D3E' },
  teal:     { body: '#4DA2B0', face: '#F0F0F0', beak: '#E87D3E' },
  orange:   { body: '#E87D3E', face: '#FFF5E6', beak: '#C9A84C' },
  gold:     { body: '#C9A84C', face: '#FFF8E1', beak: '#E87D3E' },
  shadow:   { body: '#0D1117', face: '#0D1117', beak: '#E87D3E' },
  ghost:    { body: '#B8CED8', face: '#E8F1F5', beak: '#4DA2B0' },
  inverted: { body: '#E6EDF3', face: '#F0F0F0', beak: '#E87D3E' },
}

interface PenguIconProps {
  size?: number
  variant?: Variant
  className?: string
}

export default function PenguIcon({ size = 32, variant = 'default', className = '' }: PenguIconProps) {
  const colors = VARIANTS[variant]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
      className={className}
      aria-label="Pengu icon"
    >
      {/* Head outer */}
      <rect x="4" y="1" width="8" height="9" fill={colors.body} />
      <rect x="3" y="2" width="1" height="7" fill={colors.body} />
      <rect x="12" y="2" width="1" height="7" fill={colors.body} />

      {/* Face */}
      <rect x="5" y="3" width="6" height="6" fill={colors.face} />

      {/* Eyes */}
      <rect x="6" y="4" width="1" height="2" fill="#1a1a2e" />
      <rect x="9" y="4" width="1" height="2" fill="#1a1a2e" />

      {/* Beak */}
      <rect x="7" y="6" width="2" height="1" fill={colors.beak} />

      {/* Body */}
      <rect x="4" y="10" width="8" height="5" fill={colors.body} />

      {/* Belly */}
      <rect x="5" y="10" width="6" height="4" fill={colors.face} />

      {/* Feet */}
      <rect x="3" y="15" width="3" height="1" fill={colors.beak} />
      <rect x="10" y="15" width="3" height="1" fill={colors.beak} />
    </svg>
  )
}

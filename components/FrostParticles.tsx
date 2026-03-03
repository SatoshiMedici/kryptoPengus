'use client'

import { useMemo } from 'react'

interface Particle {
  id: number
  left: string
  size: number
  opacity: number
  duration: string
  delay: string
}

export default function FrostParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      opacity: 0.15 + Math.random() * 0.15,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${-Math.random() * 20}s`,
    }))
  }, [count])

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-ice-edge animate-drift"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

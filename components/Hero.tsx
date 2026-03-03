'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PenguIcon from './PenguIcon'
import FrostParticles from './FrostParticles'
import Button from './Button'
import { SOCIAL_LINKS } from '@/lib/constants'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      aria-label="Hero"
    >
      {/* Background layer 1: radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, #E8F1F5 0%, #D6E6ED 70%)',
        }}
        aria-hidden="true"
      />

      {/* Background layer 2: grid */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />

      {/* Background layer 3: frost particles */}
      <FrostParticles count={18} />

      {/* Background layer 4: noise */}
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      {/* Ambient decorative pengus (very subtle) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <PenguIcon
          size={24}
          variant="ghost"
          className="absolute top-[15%] left-[8%] opacity-[0.06] rotate-[-12deg]"
        />
        <PenguIcon
          size={20}
          variant="ghost"
          className="absolute top-[25%] right-[12%] opacity-[0.05] rotate-[8deg]"
        />
        <PenguIcon
          size={16}
          variant="ghost"
          className="absolute bottom-[30%] left-[15%] opacity-[0.04] rotate-[-5deg]"
        />
        <PenguIcon
          size={22}
          variant="ghost"
          className="absolute bottom-[20%] right-[8%] opacity-[0.05] rotate-[15deg]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16">
        {/* Pengu icon */}
        <div
          className={`transition-all duration-700 ${
            loaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <PenguIcon size={80} className="animate-float" />
        </div>

        {/* Title */}
        <h1
          className={`font-pixel font-bold text-deep-navy tracking-wider mt-8 transition-all duration-700 ${
            loaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            textShadow: '0 2px 8px rgba(13,17,23,0.06)',
            transitionDelay: '150ms',
          }}
        >
          KRYPTO PENGUS
        </h1>

        {/* Tagline */}
        <p
          className={`font-pixel text-sm md:text-base text-beak-orange tracking-[0.3em] mt-3 transition-all duration-700 ${
            loaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          THE LONG WADDLE
        </p>

        {/* Description */}
        <p
          className={`font-body text-base md:text-lg text-slate max-w-lg text-center leading-relaxed mt-6 transition-all duration-700 ${
            loaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          3,333 pixelated penguins waddling toward greatness on Sui Network.
          No roadmap. Just a direction.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ${
            loaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Button href={SOCIAL_LINKS.twitter} variant="primary" external>
            JOIN THE WADDLE
          </Button>
          <Button href="/lore" variant="secondary">
            READ THE LORE
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown
          size={24}
          className="text-ice-edge animate-bounce"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

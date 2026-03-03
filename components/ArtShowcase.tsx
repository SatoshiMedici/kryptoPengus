'use client'

import ScrollReveal from './ScrollReveal'
import PenguIcon from './PenguIcon'

const SHOWCASE_PENGUS: Array<{
  variant: 'default' | 'teal' | 'orange' | 'gold' | 'shadow' | 'ghost'
  label: string
}> = [
  { variant: 'default', label: 'Classic' },
  { variant: 'teal', label: 'Frost' },
  { variant: 'orange', label: 'Ember' },
  { variant: 'gold', label: 'Gilded' },
  { variant: 'shadow', label: 'Shadow' },
  { variant: 'default', label: 'OG' },
  { variant: 'teal', label: 'Arctic' },
  { variant: 'ghost', label: 'Phantom' },
  { variant: 'orange', label: 'Flame' },
  { variant: 'gold', label: 'Crown' },
]

export default function ArtShowcase() {
  return (
    <section
      id="collection"
      className="bg-frost py-24 relative"
      aria-labelledby="collection-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center">
          <span className="font-pixel text-[10px] text-teal tracking-[0.2em] uppercase">
            The Collection
          </span>
          <h2
            id="collection-heading"
            className="font-pixel text-2xl md:text-3xl text-deep-navy mt-2"
          >
            3,333 UNIQUE PENGUS
          </h2>
          <p className="font-body text-sm text-muted mt-3">
            every trait hand-crafted. every combination unique.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mt-12">
          {SHOWCASE_PENGUS.map((pengu, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="group bg-glacier rounded-2xl border border-ice-edge p-3 transition-all duration-300 hover:scale-[1.03] hover:border-beak-orange hover:shadow-lg hover:shadow-beak-orange/10 cursor-pointer">
                <div className="aspect-square flex items-center justify-center bg-pale-ice/30 rounded-xl">
                  <PenguIcon
                    size={64}
                    variant={pengu.variant}
                    className="pixelated transition-transform duration-300 group-hover:animate-waddle"
                  />
                </div>
                <p className="font-pixel text-[9px] text-muted text-center mt-2 tracking-wider">
                  {pengu.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={700} className="text-center mt-8">
          <p className="font-body text-sm text-muted italic">
            no factions. no hierarchy. rarity is emergent, not assigned.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

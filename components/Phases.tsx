import { Footprints, Zap, Compass } from 'lucide-react'
import PenguIcon from './PenguIcon'
import ScrollReveal from './ScrollReveal'

const PHASES = [
  {
    number: 1,
    title: 'THE WADDLE BEGINS',
    variant: 'teal' as const,
    icon: Footprints,
    status: 'IN PROGRESS',
    statusColor: 'bg-teal/10 text-teal',
    items: [
      'Art completion — all 3,333 unique Pengus',
      'Twitter community launch',
      'Smart contract development on Sui',
      'Whitelist allocation',
    ],
  },
  {
    number: 2,
    title: 'MINT DAY',
    variant: 'orange' as const,
    icon: Zap,
    status: 'COMING SOON',
    statusColor: 'bg-gold/10 text-gold',
    items: [
      'Whitelist mint — 2 SUI',
      'Public mint — 3 SUI',
      'TradePort listing',
      'Full collection reveal',
    ],
  },
  {
    number: 3,
    title: 'KEEP WADDLING',
    variant: 'gold' as const,
    icon: Compass,
    status: 'FUTURE',
    statusColor: 'bg-muted/10 text-muted',
    items: [
      'Holder-only community',
      'Collaborations with Sui projects',
      'Community governance tools',
      'Whatever the waddle decides',
    ],
  },
]

export default function Phases() {
  return (
    <section
      id="phases"
      className="bg-frost py-24"
      aria-labelledby="phases-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center">
          <span className="font-pixel text-[10px] text-teal tracking-[0.2em] uppercase">
            The Plan
          </span>
          <h2
            id="phases-heading"
            className="font-pixel text-2xl md:text-3xl text-deep-navy mt-2"
          >
            NO ROADMAP. JUST PHASES.
          </h2>
        </ScrollReveal>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {PHASES.map((phase, i) => (
            <ScrollReveal key={phase.number} delay={i * 150}>
              <div className="bg-glacier rounded-2xl border border-ice-edge p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-ice-edge/50 hover:border-ice-edge/0">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-6">
                  <PenguIcon size={36} variant={phase.variant} />
                  <span
                    className={`font-pixel text-[9px] tracking-wider px-3 py-1.5 rounded-full ${phase.statusColor}`}
                  >
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-pixel text-sm text-deep-navy mb-1">
                  PHASE {phase.number}
                </h3>
                <p className="font-pixel text-[11px] text-beak-orange tracking-wider mb-6">
                  {phase.title}
                </p>

                {/* Items */}
                <ul className="space-y-3 mt-auto">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-slate"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ice-edge mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

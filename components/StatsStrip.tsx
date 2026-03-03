import ScrollReveal from './ScrollReveal'

const STATS = [
  { value: '3,333', label: 'Total Supply' },
  { value: '3 SUI', label: 'Mint Price' },
  { value: 'Sui', label: 'Network' },
  { value: '5%', label: 'Creator Royalty' },
]

export default function StatsStrip() {
  return (
    <section
      className="bg-pale-ice py-8 border-y border-ice-edge"
      aria-label="Collection statistics"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div
                className={`text-center ${
                  i < STATS.length - 1
                    ? 'md:border-r md:border-ice-edge'
                    : ''
                }`}
              >
                <p className="font-terminal text-3xl md:text-4xl text-deep-navy">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] text-muted uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

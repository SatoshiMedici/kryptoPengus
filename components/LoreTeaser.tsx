import Link from 'next/link'
import PenguIcon from './PenguIcon'
import ScrollReveal from './ScrollReveal'

export default function LoreTeaser() {
  return (
    <section className="bg-glacier py-24 relative" aria-labelledby="lore-heading">
      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <PenguIcon size={280} variant="ghost" className="opacity-[0.03]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <span className="font-pixel text-[10px] text-teal tracking-[0.2em] uppercase">
            The Story
          </span>
          <h2 id="lore-heading" className="font-pixel text-2xl md:text-3xl text-deep-navy mt-2">
            WADDLING TOWARD GREATNESS
          </h2>
        </ScrollReveal>

        {/* Orange divider */}
        <ScrollReveal delay={150}>
          <div className="w-16 h-0.5 bg-beak-orange mx-auto my-8" />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <blockquote className="font-body text-lg text-deep-navy italic leading-relaxed">
            &ldquo;They didn&apos;t know where they were going. They just knew
            they weren&apos;t stopping.&rdquo;
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="font-body text-base text-slate leading-relaxed mt-8">
            3,333 pixelated penguins saw something on the horizon — something
            cold, something fast, something that felt right — and they started
            walking toward it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="font-body text-lg text-deep-navy italic mt-8">
            &ldquo;The waddle is the point.&rdquo;
          </p>
        </ScrollReveal>

        <ScrollReveal delay={750}>
          <Link
            href="/lore"
            className="inline-block font-pixel text-xs text-beak-orange mt-10 hover:underline underline-offset-4 transition-all duration-200"
          >
            READ THE FULL LORE &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

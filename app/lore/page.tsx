import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PenguIcon from '@/components/PenguIcon'
import Button from '@/components/Button'
import { SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The Long Waddle — Krypto Pengus Lore',
  description:
    'The story of 3,333 pixelated penguins and a direction. Read the full lore of Krypto Pengus.',
}

export default function LorePage() {
  return (
    <>
      <Navbar />
      <main className="bg-glacier min-h-screen">
        <article className="max-w-2xl mx-auto px-6 py-24 pt-28">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-beak-orange transition-colors mb-12"
          >
            &larr; Back
          </Link>

          {/* Header */}
          <div className="text-center">
            <PenguIcon size={48} className="mx-auto animate-float" />
            <h1
              className="font-pixel font-bold text-deep-navy mt-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              THE LONG WADDLE
            </h1>
            <p className="font-body text-base text-muted mt-3">
              The story of 3,333 penguins and a direction
            </p>

            {/* Orange divider */}
            <div className="w-16 h-0.5 bg-beak-orange mx-auto my-10" />
          </div>

          {/* Lore content */}
          <div className="font-body text-lg text-slate leading-[2] text-center space-y-8">
            <p className="italic text-deep-navy">
              They didn&apos;t know where they were going.
              <br />
              They just knew they weren&apos;t stopping.
            </p>

            <p>
              There was no announcement. No whitepaper. No influencer told them
              to do it. One day, 3,333 pixelated penguins just started walking.
            </p>

            <p>
              Some say the first Pengu saw something on the horizon — something
              cold, something fast, something that hummed with the energy of a
              chain that could do 300,000 transactions per second for less than
              a penny each. It looked like the future. Or at least, it looked
              like somewhere worth waddling to.
            </p>

            <p>
              The others followed. Not because they were told to. Not because
              there was a roadmap. But because penguins waddle. That&apos;s what
              they do. And when one starts moving, the rest figure it&apos;s
              probably worth finding out where.
            </p>

            <p>
              They call it Sui now. The destination. Though honestly, most of
              them still can&apos;t see it clearly. Doesn&apos;t matter. The
              waddle is the point. The act of moving forward when you don&apos;t
              have a plan, when you don&apos;t have funding, when you don&apos;t
              have anything except 3,333 other degens in tuxedos walking the
              same direction.
            </p>

            <p>
              Some carry things in their beaks — cold wallets, pills of
              questionable origin, half-finished vapes. Some wear crowns. Some
              wear ski masks. One of them is literally a skeleton. Nobody
              questions it. In the waddle, you&apos;re accepted as you are.
            </p>

            <p>
              There are no factions. No hierarchy. The Pengu with the gold skin
              and the halo is no more important than the one in the bath robe
              with drunk eyes. They&apos;re all just walking. They&apos;re all
              just here.
            </p>

            <p className="italic text-deep-navy font-medium text-xl">
              No roadmap. Just a direction.
            </p>

            <p className="italic text-deep-navy">
              And the stubbornness to keep going.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6">
            <p className="font-pixel text-sm text-deep-navy">
              Join the waddle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={SOCIAL_LINKS.twitter} variant="primary" external>
                FOLLOW ON TWITTER
              </Button>
              <Button href="/" variant="secondary">
                BACK TO HOME
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

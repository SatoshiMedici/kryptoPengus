'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const FAQS = [
  {
    q: 'What is Krypto Pengus?',
    a: '3,333 unique pixelated penguin NFTs on the Sui blockchain. Each is a one-of-a-kind pixel art character with randomized traits — different skins, outfits, eyes, headwear, and beak accessories. No two are alike.',
  },
  {
    q: 'Why Sui?',
    a: 'Transaction fees under $0.01, no gas wars, and the Kiosk standard means our 5% creator royalty is enforced at the protocol level — no marketplace can skip it. The Sui community is one of the most active in crypto right now.',
  },
  {
    q: 'How much does it cost to mint?',
    a: 'Whitelist: 2 SUI. Public: 3 SUI. Gas on Sui is fractions of a cent. You\'ll need a Sui-compatible wallet like Sui Wallet or Suiet.',
  },
  {
    q: 'Are some Pengus rarer than others?',
    a: 'Every Pengu is equal — no factions, no tiers, no hierarchy. Rarity comes from trait combinations. Some combos are statistically less common, but no Pengu is "better" than another. We waddle together.',
  },
  {
    q: 'What about the 1/1s?',
    a: 'A small number of hand-crafted Pengus honoring the founders of Sui Network. Gifted, not sold — a tribute to the chain we build on.',
  },
  {
    q: 'Is there a token?',
    a: 'No. No staking, no DeFi, no token. We\'re an art and community project. If something like that ever happens, it\'s because the community wants it.',
  },
  {
    q: 'Who\'s behind this?',
    a: 'A small team building in public on Sui. Follow the journey on Twitter.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`bg-frost rounded-xl border px-6 py-5 mb-3 transition-colors duration-300 ${
        isOpen ? 'border-beak-orange/30' : 'border-ice-edge'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-body text-sm md:text-base font-medium text-deep-navy">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm text-slate leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-glacier py-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <span className="font-pixel text-[10px] text-teal tracking-[0.2em] uppercase">
            Questions
          </span>
          <h2
            id="faq-heading"
            className="font-pixel text-2xl md:text-3xl text-deep-navy mt-2"
          >
            FAQ
          </h2>
        </ScrollReveal>

        {FAQS.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <FAQItem
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

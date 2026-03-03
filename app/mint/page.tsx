import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PenguIcon from '@/components/PenguIcon'
import Button from '@/components/Button'
import { SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mint — Krypto Pengus',
  description: 'Minting coming soon. 3,333 pixelated penguins on Sui Network.',
}

export default function MintPage() {
  return (
    <>
      <Navbar />
      <main className="bg-glacier min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <PenguIcon size={80} className="mx-auto animate-float" />

          <h1 className="font-pixel font-bold text-2xl md:text-3xl text-deep-navy mt-8">
            MINTING SOON
          </h1>

          <p className="font-body text-base text-slate mt-4 max-w-sm mx-auto">
            The waddle is almost ready. Follow us on Twitter for mint
            announcements.
          </p>

          <div className="mt-10">
            <Button href={SOCIAL_LINKS.twitter} variant="primary" external>
              FOLLOW FOR UPDATES
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

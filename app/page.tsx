import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ArtShowcase from '@/components/ArtShowcase'
import LoreTeaser from '@/components/LoreTeaser'
import StatsStrip from '@/components/StatsStrip'
import Phases from '@/components/Phases'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ArtShowcase />
        <LoreTeaser />
        <StatsStrip />
        <Phases />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

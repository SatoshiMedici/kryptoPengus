import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kryptopengus.com'),
  title: 'Krypto Pengus — The Long Waddle | 3,333 NFTs on Sui',
  description:
    '3,333 pixelated penguins waddling toward greatness on Sui Network. No roadmap. Just a direction.',
  openGraph: {
    title: 'Krypto Pengus — The Long Waddle',
    description:
      '3,333 pixelated penguins waddling toward greatness on Sui Network.',
    images: ['/images/og-image.png'],
    url: 'https://kryptopengus.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kryptoPengus',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=VT323&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-glacier text-deep-navy">
        {children}
      </body>
    </html>
  )
}

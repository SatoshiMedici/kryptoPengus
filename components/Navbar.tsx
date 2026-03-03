'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import PenguIcon from './PenguIcon'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? 'bg-frost/90 backdrop-blur-lg border-b border-ice-edge shadow-sm'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Krypto Pengus home"
        >
          <PenguIcon
            size={32}
            className="transition-transform duration-300 group-hover:animate-waddle"
          />
          <span className="font-pixel text-sm text-deep-navy tracking-wide">
            KRYPTO PENGUS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-body text-[13px] font-medium relative transition-colors duration-200 ${
                link.highlight
                  ? 'text-beak-orange'
                  : 'text-slate hover:text-beak-orange'
              } after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-beak-orange after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}

          {/* Connect Wallet button */}
          <span
            className="font-pixel text-[11px] bg-beak-orange text-white px-5 py-2.5 rounded-lg cursor-not-allowed opacity-60 select-none"
            title="Coming soon"
            aria-disabled="true"
          >
            Connect Wallet
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-deep-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-deep-navy/30 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-frost shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col pt-20 px-8`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-lg py-3 border-b border-ice-edge transition-colors ${
                link.highlight
                  ? 'text-beak-orange font-semibold'
                  : 'text-deep-navy hover:text-beak-orange'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <span
            className="mt-6 font-pixel text-[11px] bg-beak-orange text-white px-5 py-3 rounded-lg cursor-not-allowed opacity-60 text-center select-none"
            aria-disabled="true"
          >
            Connect Wallet
          </span>

          <div className="flex gap-6 mt-8 justify-center">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-beak-orange transition-colors"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

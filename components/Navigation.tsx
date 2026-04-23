'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Navigation() {
  const { lang, toggleLang } = useLanguage()
  const t = translations[lang].nav
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#works', label: t.works },
    { href: '/about',  label: t.about },
    { href: '/contact', label: t.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[2px] ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-xl border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          href="/"
          data-hover
          className="font-display italic text-xl text-white hover:text-crimson transition-colors duration-300 tracking-tight"
        >
          mstr<span className="text-crimson not-italic">.</span>site
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              className="relative text-[12px] font-bold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-crimson group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* 言語切替 */}
          <button
            onClick={toggleLang}
            data-hover
            className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest px-3.5 py-1.5 border border-zinc-700 hover:border-crimson hover:text-crimson transition-all duration-300 text-zinc-500"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-zinc-700'}>EN</span>
            <span className="text-zinc-800 text-[9px]">|</span>
            <span className={lang === 'ja' ? 'text-white' : 'text-zinc-700'}>JP</span>
          </button>
        </div>

        {/* ── Mobile right ── */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            data-hover
            className="text-[10px] font-bold px-3 py-1.5 border border-zinc-700 text-zinc-400 tracking-widest"
          >
            {lang === 'en' ? 'EN' : 'JP'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-hover
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ink border-b border-white/8 px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

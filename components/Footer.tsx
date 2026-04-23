'use client'

import Link from 'next/link'
import { Github, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t   = translations[lang].footer
  const nav = translations[lang].nav

  return (
    <footer className="bg-ink border-t-2 border-t-crimson">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <Link href="/" data-hover className="font-display italic text-2xl text-white hover:text-crimson transition-colors">
              mstr<span className="text-crimson not-italic">.</span>site
            </Link>
            <p className="mt-4 text-zinc-600 text-xs leading-loose max-w-xs">{t.tagline}</p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="p-2.5 border border-zinc-800 hover:border-crimson hover:text-crimson text-zinc-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href="mailto:info@mstr.site"
                data-hover
                className="p-2.5 border border-zinc-800 hover:border-crimson hover:text-crimson text-zinc-600 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-700 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {[
                { href: '/#works', label: nav.works },
                { href: '/about', label: nav.about },
                { href: '/contact', label: nav.contact },
                { href: '/privacy-policy', label: nav.privacy },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-hover
                    className="text-xs text-zinc-600 hover:text-white transition-colors font-semibold tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Works */}
          <div>
            <h3 className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-700 mb-5">
              Works
            </h3>
            <ul className="space-y-3.5">
              {[
                { href: 'https://dcmb.mstr.site/', label: 'ドットコムマスターBASIC' },
                { href: 'https://japanese.mstr.site/', label: 'Japanese mstr' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className="text-xs text-zinc-600 hover:text-white transition-colors font-semibold tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-zinc-700">{t.rights}</p>
          <p className="text-[10px] text-zinc-700">
            Built with <span className="text-zinc-500">Next.js</span> &{' '}
            <span className="text-zinc-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

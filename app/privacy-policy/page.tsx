'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage()
  const t = translations[lang].privacy

  return (
    <div className="min-h-screen bg-ink text-paper pt-32 pb-28">
      <div className="max-w-3xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-10">
          <span className="block w-5 h-px bg-crimson" />
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-600">Legal</span>
        </div>

        <h1
          className="font-display italic font-bold text-white leading-none mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          {t.title}
        </h1>
        <p className="text-zinc-700 text-xs mb-12 tracking-wide">{t.lastUpdated}</p>

        <div className="w-full h-px bg-white/8 mb-12" />

        <p className="text-zinc-500 text-sm leading-loose mb-12">{t.intro}</p>

        <div className="space-y-10">
          {t.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-bold text-white mb-3 tracking-tight">{section.title}</h2>
              <p className="text-zinc-600 text-sm leading-loose">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/8">
          <Link
            href="/"
            data-hover
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(timer)
  }, [])

  const fade = (delay: string) =>
    `transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink pb-16 pt-24">

      {/* ── 赤い上部アクセントライン ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-crimson z-10" />

      {/* ── 背景グリッド ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[25, 50, 75].map((p) => (
          <div key={p} className="absolute left-0 right-0 border-t border-white/[0.03]" style={{ top: `${p}%` }} />
        ))}
        <div className="absolute top-0 bottom-0 left-6 border-l border-white/[0.05]" />
        <div className="absolute top-0 bottom-0 right-6 border-r border-white/[0.05]" />
      </div>

      {/* ── 赤い縦ストライプ（左） ── */}
      <div
        className={`absolute left-0 top-0 w-1 bg-crimson transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`}
        style={{ transitionDelay: '0.3s' }}
      />


      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* ── ラベル ── */}
        <div
          className={`mb-6 flex items-center gap-4 ${fade('0s')}`}
          style={{ transitionDelay: '0.05s' }}
        >
          {/* 赤い小さいスクエア */}
          <span className="block w-2 h-2 bg-crimson" />
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-600">
            Portfolio — {new Date().getFullYear()}
          </span>
        </div>

        {/* ── 巨大名前 ── */}
        <div className="overflow-hidden mb-1">
          <h1
            className={`font-display italic font-bold text-white leading-[0.85] tracking-tight transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
            }`}
            style={{
              fontSize: 'clamp(3rem, 13vw, 12rem)',
              transitionDelay: '0.08s',
            }}
          >
            LILY
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={`font-display italic font-bold leading-[0.85] tracking-tight transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
            }`}
            style={{
              fontSize: 'clamp(3rem, 13vw, 12rem)',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(242,240,235,0.22)',
              transitionDelay: '0.18s',
            }}
          >
            NAGASAWA
          </h1>
        </div>

        {/* ── 赤いセパレーター ── */}
        <div
          className={`h-px bg-crimson mb-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.42s' }}
        />

        {/* ── 下段 ── */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-end ${fade('0s')}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <div>
            {/* 赤い小さいバー + タイトル */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-4 h-[1.5px] bg-crimson" />
              <p className="text-[9px] font-black tracking-[0.35em] uppercase text-crimson">
                {t.title}
              </p>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              {t.description}
            </p>
          </div>

          <div className="flex items-end gap-6">
            <Link
              href="/#works"
              data-hover
              className="group inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white text-xs font-black tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-300"
            >
              {t.cta}
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/about"
              data-hover
              className="text-xs font-black tracking-[0.15em] uppercase text-zinc-700 hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-0.5"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/* ── 右: 回転サークル ── */}
      <div
        className={`absolute right-8 md:right-16 top-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: '0.72s' }}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 animate-float">
          <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fill="rgba(228,0,27,0.45)" fontSize="8" fontWeight="700" letterSpacing="2.5">
              <textPath href="#circ">
                LILY ✦ WEB DEVELOPER ✦ CREATOR ✦ NEXT.JS ✦{' '}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-crimson animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* ── スクロールインジケーター ── */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.1s' }}
      >
        <span className="text-[8px] tracking-[0.4em] uppercase">{t.scroll}</span>
        <ArrowDown size={12} className="animate-bounce" />
      </div>
    </section>
  )
}

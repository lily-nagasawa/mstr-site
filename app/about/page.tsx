'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = translations[lang].about
  const header = useReveal()
  const reveals = [useReveal(), useReveal(), useReveal()]
  const stack   = useReveal()
  const sections = [t.section1, t.section2, t.section3]

  return (
    <div className="min-h-screen bg-ink text-paper pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── ラベル ── */}
        <div className="flex items-center gap-3 mb-16">
          <span className="block w-5 h-px bg-crimson" />
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-600">
            {t.title}
          </span>
        </div>

        {/* ── プロフィールヘッダ ── */}
        <div
          ref={header.ref}
          className={`grid grid-cols-1 md:grid-cols-5 gap-12 mb-24 reveal ${header.visible ? 'visible' : ''}`}
        >
          {/* アバター */}
          <div className="md:col-span-2">
            <div className="aspect-square max-w-xs bg-zinc-900 border border-white/8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-20 h-20 border border-white/20 flex items-center justify-center mb-3">
                <span className="font-display italic text-4xl font-bold text-white/30">L</span>
              </div>
              {/* 赤い角飾り */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-crimson" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-crimson" />
              <span className="text-zinc-700 text-[9px] tracking-widest uppercase">
                replace with photo
              </span>
            </div>
          </div>

          {/* 情報 */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <h1
              className="font-display italic font-bold text-white leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {t.name}
            </h1>
            <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-5">{t.role}</p>

            <div className="flex items-center gap-2 text-zinc-600 text-xs mb-10">
              <MapPin size={12} />
              <span>{t.location}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-ink text-xs font-black tracking-widest uppercase hover:bg-crimson hover:text-white transition-colors duration-300"
              >
                <Github size={13} /> {t.links.github}
              </a>
              <a
                href="mailto:info@mstr.site"
                data-hover
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-400 text-xs font-black tracking-widest uppercase hover:border-crimson hover:text-crimson transition-all duration-300"
              >
                <Mail size={13} /> {t.links.mail}
              </a>
            </div>
          </div>
        </div>

        {/* ── セパレーター ── */}
        <div className="w-full h-px bg-white/8 mb-24" />

        {/* ── セクション本文 ── */}
        <div className="space-y-20">
          {sections.map((section, i) => (
            <div
              key={section.label}
              ref={reveals[i].ref}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 reveal ${reveals[i].visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="md:col-span-1 pt-1">
                <span className="text-[10px] font-black tracking-[0.3em] text-crimson">{section.label}</span>
              </div>
              <div className="md:col-span-11">
                <h2 className="text-lg md:text-xl font-bold text-white mb-5 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-zinc-500 leading-loose text-sm max-w-2xl">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── スタック ── */}
        <div
          ref={stack.ref}
          className={`mt-24 pt-12 border-t border-white/8 reveal ${stack.visible ? 'visible' : ''}`}
        >
          <p className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-700 mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel', 'HTML / CSS', 'Git'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-zinc-800 text-zinc-500 text-xs font-bold tracking-wide hover:border-crimson hover:text-crimson transition-all duration-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const ITEMS_EN = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'React',
  'Web Developer', 'Creator', 'Yokohama · Japan',
  'UI / UX Design', 'Responsive Web', 'Open to Work',
]
const ITEMS_JA = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'React',
  'Webデベロッパー', 'クリエイター', '横浜・日本',
  'UI / UX デザイン', 'レスポンシブ対応', 'お仕事募集中',
]

export default function Marquee() {
  const { lang } = useLanguage()
  const items = lang === 'ja' ? ITEMS_JA : ITEMS_EN
  const track = [...items, ...items, ...items, ...items]

  return (
    <div className="overflow-hidden bg-crimson py-3.5 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-white text-[10px] font-black tracking-[0.25em] uppercase px-6"
          >
            <span className="text-white/50 text-xs leading-none">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

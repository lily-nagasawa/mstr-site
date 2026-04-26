'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

const GAP = 24

export default function WorksCarousel() {
  const { lang } = useLanguage()
  const t = translations[lang].works

  const [cardWidth, setCardWidth] = useState(460)
  const [isDragging, setIsDragging] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const [hasDragged, setHasDragged] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)

  // Refs for synchronous drag logic — avoids stale-closure issues with React state
  const isDraggingRef   = useRef(false)
  const dragStartRef    = useRef({ x: 0, translate: 0 })
  const translateXRef   = useRef(0)
  const maxTranslateRef = useRef(0)
  const cardWidthRef    = useRef(460)
  const itemCountRef    = useRef(t.items.length)

  const itemCount    = t.items.length
  const maxTranslate = -(itemCount - 1) * (cardWidth + GAP)

  // Keep refs in sync with derived values
  useEffect(() => { maxTranslateRef.current = maxTranslate }, [maxTranslate])
  useEffect(() => { cardWidthRef.current    = cardWidth    }, [cardWidth])
  useEffect(() => { itemCountRef.current    = itemCount    }, [itemCount])

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setCardWidth(Math.min(300, window.innerWidth - 56))
      else if (window.innerWidth < 1024) setCardWidth(380)
      else                               setCardWidth(460)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Non-passive touchmove — all logic via refs so no stale closures
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const handler = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      e.preventDefault()
      const clientX = e.touches[0].clientX
      const diff    = clientX - dragStartRef.current.x
      if (Math.abs(diff) > 6) setHasDragged(true)
      let next = dragStartRef.current.translate + diff
      if (next > 50)                         next = 50 * Math.tanh(next / 100)
      if (next < maxTranslateRef.current - 50) next = maxTranslateRef.current - 50 * Math.tanh((maxTranslateRef.current - next) / 100)
      translateXRef.current = next
      setTranslateX(next)
    }
    el.addEventListener('touchmove', handler, { passive: false })
    return () => el.removeEventListener('touchmove', handler)
  }, [])

  const snapTo = useCallback(
    (index: number) => {
      const c    = Math.max(0, Math.min(itemCountRef.current - 1, index))
      const newX = -c * (cardWidthRef.current + GAP)
      setActiveIndex(c)
      translateXRef.current = newX
      setTranslateX(newX)
    },
    []
  )

  // Mouse drag — uses state (React events are synchronous, no timing issue)
  const [dragStart, setDragStart] = useState({ x: 0, translate: 0 })

  const startMouseDrag = useCallback(
    (clientX: number) => {
      setIsDragging(true)
      setHasDragged(false)
      setDragStart({ x: clientX, translate: translateX })
    },
    [translateX]
  )

  const moveMouseDrag = useCallback(
    (clientX: number) => {
      if (!isDragging) return
      const diff = clientX - dragStart.x
      if (Math.abs(diff) > 6) setHasDragged(true)
      let next = dragStart.translate + diff
      if (next > 50)                next = 50 * Math.tanh(next / 100)
      if (next < maxTranslate - 50) next = maxTranslate - 50 * Math.tanh((maxTranslate - next) / 100)
      translateXRef.current = next
      setTranslateX(next)
    },
    [isDragging, dragStart, maxTranslate]
  )

  const endMouseDrag = useCallback(
    (clientX: number) => {
      if (!isDragging) return
      setIsDragging(false)
      const diff    = clientX - dragStart.x
      const step    = cardWidth + GAP
      const current = Math.round(-dragStart.translate / step)
      const target  = Math.abs(diff) > 55
        ? diff < 0 ? current + 1 : current - 1
        : Math.round(-translateXRef.current / step)
      snapTo(target)
    },
    [isDragging, dragStart, cardWidth, snapTo]
  )

  // Touch drag — uses refs so it works before React re-renders
  const startTouchDrag = useCallback((clientX: number) => {
    isDraggingRef.current  = true
    dragStartRef.current   = { x: clientX, translate: translateXRef.current }
    setIsDragging(true)
    setHasDragged(false)
  }, [])

  const endTouchDrag = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)
    const diff    = clientX - dragStartRef.current.x
    const step    = cardWidthRef.current + GAP
    const current = Math.round(-dragStartRef.current.translate / step)
    const target  = Math.abs(diff) > 55
      ? diff < 0 ? current + 1 : current - 1
      : Math.round(-translateXRef.current / step)
    snapTo(target)
  }, [snapTo])

  return (
    <section
      ref={sectionRef}
      id="works"
      className={`py-28 md:py-36 bg-paper transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* ── 赤いトップボーダー ── */}
      <div className="w-full h-[2px] bg-crimson mb-16" />

      {/* ── ヘッダ ── */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-2 h-2 bg-crimson" />
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-500">
              Selected Works
            </span>
          </div>
          <h2
            className="font-display italic font-bold text-ink tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            {t.title}
          </h2>
        </div>
        <p className="text-zinc-400 text-xs flex items-center gap-2 select-none font-black tracking-widest uppercase">
          <span>←</span>
          <span>{t.drag}</span>
          <span>→</span>
        </p>
      </div>

      {/* ── カルーセル ── */}
      <div
        ref={carouselRef}
        className="overflow-hidden pl-6 md:pl-[max(1.5rem,(100vw-80rem)/2+1.5rem)]"
        onMouseDown={(e) => { e.preventDefault(); startMouseDrag(e.clientX) }}
        onMouseMove={(e) => moveMouseDrag(e.clientX)}
        onMouseUp={(e) => endMouseDrag(e.clientX)}
        onMouseLeave={() => isDragging && endMouseDrag(dragStart.x)}
        onTouchStart={(e) => startTouchDrag(e.touches[0].clientX)}
        onTouchEnd={(e) => endTouchDrag(e.changedTouches[0].clientX)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        >
          {t.items.map((item, i) => (
            <WorkCard
              key={i}
              item={item}
              visitText={t.visit}
              isDragging={isDragging}
              hasDragged={hasDragged}
              cardWidth={cardWidth}
              isActive={i === activeIndex}
              index={i}
            />
          ))}
          <div style={{ width: 40, flexShrink: 0 }} aria-hidden />
        </div>
      </div>

      {/* ── ドット ── */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {t.items.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            data-hover
            className={`transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 h-1.5 bg-crimson'
                : 'w-1.5 h-1.5 bg-zinc-300 hover:bg-zinc-500'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

/* ── WorkCard ── */

interface WorkCardProps {
  item: { title: string; subtitle: string; description: string; url: string; tag: string; image: string }
  visitText: string
  isDragging: boolean
  hasDragged: boolean
  cardWidth: number
  isActive: boolean
  index: number
}

function WorkCard({ item, visitText, isDragging, hasDragged, cardWidth, isActive, index }: WorkCardProps) {
  const handleClick = (e: React.MouseEvent) => { if (hasDragged) e.preventDefault() }
  const imgHeight = Math.round(cardWidth * 0.65)

  return (
    <div
      className="flex-shrink-0 bg-white overflow-hidden group"
      style={{
        width: cardWidth,
        opacity: isActive ? 1 : 0.7,
        transition: 'opacity 0.5s ease',
        boxShadow: isActive
          ? '0 24px 60px -12px rgba(0,0,0,0.18)'
          : '0 4px 16px -4px rgba(0,0,0,0.08)',
      }}
    >
      {/* ── 画像 (全体がリンク) ── */}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        draggable={false}
        data-hover
        className="relative block overflow-hidden bg-zinc-100"
        style={{ height: imgHeight }}
        aria-label={`Visit ${item.title}`}
      >
        <Image
          src={item.image}
          alt={`Preview of ${item.title}`}
          fill
          sizes={`${cardWidth}px`}
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
        />

        {/* ホバー時のオーバーレイ */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />

        {/* 赤タグ */}
        <div className="absolute top-0 left-0 bg-crimson text-white text-[8px] font-black tracking-[0.25em] uppercase px-3 py-1.5">
          {item.tag}
        </div>
      </a>

      {/* ── コンテンツ ── */}
      <div className="p-6 border-t-2 border-t-crimson">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-black tracking-[0.35em] text-crimson">{`0${index + 1}`}</span>
          <span className="block w-8 h-px bg-zinc-200" />
        </div>
        <h3 className="font-bold text-ink text-base leading-snug">{item.title}</h3>
        <p className="text-crimson text-xs font-bold tracking-wide mt-1">{item.subtitle}</p>
        <p className="text-zinc-400 text-xs mt-3 leading-relaxed line-clamp-2">{item.description}</p>

        <div className="mt-5 pt-4 border-t border-zinc-100">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            draggable={false}
            data-hover
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-ink hover:text-crimson transition-colors duration-200 group/link"
          >
            {visitText}
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

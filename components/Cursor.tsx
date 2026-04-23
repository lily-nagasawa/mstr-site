'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let hovering = false
    let clicking = false
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const onOver = (e: MouseEvent) => {
      hovering = !!(e.target as HTMLElement)?.closest('a, button, [data-hover]')
    }
    const onDown = () => { clicking = true }
    const onUp   = () => { clicking = false }

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      const size = clicking ? 18 : hovering ? 56 : 34
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - size / 2}px, ${ry - size / 2}px)`
        ringRef.current.style.width  = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.borderColor = hovering ? '#E4001B' : 'rgba(242,240,235,0.5)'
        ringRef.current.style.backgroundColor = hovering ? 'rgba(228,0,27,0.07)' : 'transparent'
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot — mix-blend-difference で背景色に合わせて自動反転 */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9998] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9997]"
        style={{
          willChange: 'transform, width, height',
          transition:
            'width 0.22s cubic-bezier(0.16,1,0.3,1), height 0.22s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, background-color 0.2s',
        }}
      />
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.classList.add('loading')

    let current = 0
    const timer = setInterval(() => {
      const step = Math.random() * 14 + 4
      current = Math.min(100, current + step)
      setProgress(Math.floor(current))
      if (current >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          setLeaving(true)
          document.body.classList.remove('loading')
          setTimeout(() => setGone(true), 750)
        }, 350)
      }
    }, 55)

    return () => {
      clearInterval(timer)
      document.body.classList.remove('loading')
    }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
        leaving ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Logo */}
      <p className="font-display text-white text-3xl italic mb-20 select-none tracking-tight">
        mstr<span className="text-crimson not-italic">.</span>site
      </p>

      {/* Label */}
      <p className="text-zinc-600 text-[9px] tracking-[0.5em] uppercase mb-5 select-none font-sans">
        Now Loading
      </p>

      {/* Bar */}
      <div className="w-48 h-px bg-zinc-800 relative">
        <div
          className="absolute inset-y-0 left-0 bg-crimson"
          style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
        />
      </div>

      {/* Percentage */}
      <p className="text-zinc-700 text-[10px] font-mono mt-3 tabular-nums select-none">
        {String(progress).padStart(3, '0')}
      </p>
    </div>
  )
}

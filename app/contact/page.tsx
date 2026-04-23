'use client'

import { useState } from 'react'
import { Mail, MapPin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await new Promise((r) => setTimeout(r, 1200))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-crimson transition-colors duration-200 text-sm font-medium'

  return (
    <div className="min-h-screen bg-ink text-paper pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── ラベル ── */}
        <div className="flex items-center gap-3 mb-14">
          <span className="block w-5 h-px bg-crimson" />
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-zinc-600">
            {t.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* 左: 情報 */}
          <div className="lg:col-span-2">
            <h1
              className="font-display italic font-bold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {t.subtitle}
            </h1>
            <p className="text-zinc-600 text-sm leading-loose mb-12">{t.description}</p>

            <div className="space-y-5">
              {[
                { icon: <Mail size={14} />, label: 'info@mstr.site', href: 'mailto:info@mstr.site' },
                { icon: <MapPin size={14} />, label: 'Yokohama, Japan' },
                { icon: <Github size={14} />, label: 'GitHub', href: 'https://github.com' },
              ].map(({ icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-hover
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 border border-zinc-800 group-hover:border-crimson flex items-center justify-center text-zinc-600 group-hover:text-crimson transition-all duration-300">
                      {icon}
                    </div>
                    <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors tracking-wide">
                      {label}
                    </span>
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-zinc-800 flex items-center justify-center text-zinc-700">
                      {icon}
                    </div>
                    <span className="text-xs text-zinc-700 tracking-wide">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* 右: フォーム */}
          <div className="lg:col-span-3">
            <div className="border border-zinc-800 p-8 md:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <CheckCircle size={36} className="text-crimson" />
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xs">
                    {t.form.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[9px] font-black tracking-[0.35em] uppercase text-zinc-600 mb-2">
                      {t.form.name}
                    </label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.form.namePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-black tracking-[0.35em] uppercase text-zinc-600 mb-2">
                      {t.form.email}
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[9px] font-black tracking-[0.35em] uppercase text-zinc-600 mb-2">
                      {t.form.message}
                    </label>
                    <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder={t.form.messagePlaceholder} className={`${inputClass} resize-none`} />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-crimson text-xs">
                      <AlertCircle size={14} />
                      <span>{t.form.error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    data-hover
                    className="w-full flex items-center justify-center gap-3 bg-crimson hover:bg-crimson-dark disabled:bg-zinc-800 text-white text-xs font-black tracking-[0.25em] uppercase py-4 transition-colors duration-300"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t.form.sending}
                      </>
                    ) : (
                      <><Send size={13} /> {t.form.submit}</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

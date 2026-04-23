import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import Cursor from '@/components/Cursor'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lily Nagasawa — Web Developer / Creator',
    template: '%s | Lily Nagasawa',
  },
  description:
    'Portfolio of Lily Nagasawa, a Web Developer and Creator based in Yokohama, Japan. Building modern, responsive web experiences with Next.js and Tailwind CSS.',
  keywords: ['Web Developer', 'Portfolio', 'Next.js', 'Tailwind CSS', 'Yokohama', 'Japan'],
  authors: [{ name: 'Lily Nagasawa' }],
  creator: 'Lily Nagasawa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mstr.site',
    siteName: 'mstr.site',
    title: 'Lily Nagasawa — Web Developer / Creator',
    description: 'Portfolio of Lily Nagasawa, a Web Developer and Creator based in Yokohama, Japan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lily Nagasawa — Web Developer / Creator',
    description: 'Portfolio of Lily Nagasawa, a Web Developer and Creator based in Yokohama, Japan.',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'XsFSrFzroR55YqxPZd4fHnVO__Jnkslm6WYel241WRQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ink text-paper font-sans">
        <LanguageProvider>
          <GoogleAnalytics />
          <LoadingScreen />
          <Cursor />
          {/* 全ページ共通: 赤いトップライン */}
          <div className="fixed top-0 left-0 right-0 h-[2px] bg-crimson z-[60] pointer-events-none" />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

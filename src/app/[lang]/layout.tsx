import '../globals.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DesktopNav, MobileNav } from '@/components/NavLinks'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ThemeToggle from '@/components/ThemeToggle'
import { profile } from '@/data/portfolio'
import { isLocale, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

// Both languages are prerendered at build time; any other first segment is a 404
export const dynamicParams = false
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Omit<LayoutProps, 'children'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return {
    title: { default: `${profile.name} — ${profile.role}`, template: `%s · ${profile.name}` },
    description: getDictionary(lang).meta.description,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])) },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fb' },
    { media: '(prefers-color-scheme: dark)', color: '#121318' },
  ],
}

// Runs before first paint so the saved theme applies without a flash. Dark is the default.
const themeScript = `try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}`

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative flex min-h-screen flex-col overflow-x-clip">
        <div aria-hidden className="page-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem]" />

        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href={`/${lang}`} className="flex min-w-0 items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
                AB
              </span>
              <span className="hidden truncate md:inline">{profile.name}</span>
            </Link>
            <div className="flex items-center gap-2">
              <DesktopNav lang={lang} labels={t.nav} />
              <LanguageSwitcher lang={lang} label={t.nav.language} />
              <ThemeToggle label={t.nav.toggleTheme} />
              <MobileNav lang={lang} labels={t.nav} />
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-grow px-4 py-10 sm:px-6 sm:py-16">{children}</main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
            <p>
              © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
            </p>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
              {profile.email}
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}

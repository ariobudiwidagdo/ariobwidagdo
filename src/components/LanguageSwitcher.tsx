'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALE_COOKIE, locales, withLocale, type Locale } from '@/i18n/config'

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname()

  // Remember the choice so "/" sends the visitor back to the same language next time
  const remember = (locale: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`
  }

  return (
    <div role="group" aria-label={label} className="flex h-9 items-center rounded-full border bg-card p-0.5 text-xs font-semibold">
      {locales.map((locale) => {
        const active = locale === lang
        return (
          <Link
            key={locale}
            href={withLocale(pathname, locale)}
            hrefLang={locale}
            scroll={false}
            onClick={() => remember(locale)}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
              active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {locale}
          </Link>
        )
      })}
    </div>
  )
}

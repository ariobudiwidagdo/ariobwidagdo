export const locales = ['en', 'id'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

/** Text that exists in every supported language */
export type Localized = Record<Locale, string>

export const LOCALE_COOKIE = 'NEXT_LOCALE'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Swap (or add) the locale prefix of a pathname, e.g. /en/projects → /id/projects */
export function withLocale(pathname: string, locale: Locale) {
  const segments = pathname.split('/')
  if (isLocale(segments[1] ?? '')) segments[1] = locale
  else segments.splice(1, 0, locale)
  return segments.join('/').replace(/\/$/, '') || `/${locale}`
}

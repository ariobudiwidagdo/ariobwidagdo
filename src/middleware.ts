import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, LOCALE_COOKIE, withLocale, type Locale } from '@/i18n/config'

// Sends locale-less URLs (e.g. "/" or "/projects") to the visitor's language:
// the language they picked before (cookie), else their browser language, else English.
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  if (saved && isLocale(saved)) return saved

  const accepted = request.headers.get('accept-language') ?? ''
  for (const part of accepted.split(',')) {
    const lang = part.split(';')[0].trim().slice(0, 2).toLowerCase()
    if (isLocale(lang)) return lang
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isLocale(pathname.split('/')[1] ?? '')) return

  const url = request.nextUrl.clone()
  url.pathname = withLocale(pathname, pickLocale(request))
  return NextResponse.redirect(url)
}

export const config = {
  // Skip API routes, Next internals and files with an extension (favicon, images…)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

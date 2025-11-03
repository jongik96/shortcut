import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const url = request.nextUrl.clone();

  // Handle legacy routes without locale that don't exist
  const legacyRoutes: Record<string, string> = {
    '/mac': '/os',
    '/windows': '/os',
    '/word': '/office/word',
    '/excel': '/office/excel',
    '/powerpoint': '/office/powerpoint',
  };

  // Check if pathname is a legacy route
  if (legacyRoutes[pathname]) {
    const locale = getLocale(request) || defaultLocale;
    const redirectPath = `/${locale}${legacyRoutes[pathname]}/`;
    const redirectUrl = new URL(redirectPath, request.url);
    // Preserve query parameters
    redirectUrl.search = request.nextUrl.search;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}` && pathname !== `/${locale}/`
  );

  // Redirect if there is no locale (301 permanent redirect for SEO)
  if (pathnameIsMissingLocale) {
    // Get locale from Accept-Language header or use default
    const locale = getLocale(request) || defaultLocale;

    // Ensure trailing slash for consistency
    const newPath = `/${locale}${pathname === '/' ? '' : pathname}${pathname.endsWith('/') || pathname === '/' ? '' : '/'}`;
    
    const redirectUrl = new URL(newPath, request.url);
    // Preserve query parameters
    redirectUrl.search = request.nextUrl.search;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Ensure trailing slash for all locale routes (except root)
  const currentLocale = getLocale(request) || defaultLocale;
  if (pathname.startsWith(`/${currentLocale}/`)) {
    // Don't redirect if it's the root locale path or already has trailing slash
    if (pathname !== `/${currentLocale}` && 
        pathname !== `/${currentLocale}/` &&
        !pathname.endsWith('/')) {
      const redirectUrl = new URL(`${pathname}/`, request.url);
      // Preserve query parameters
      redirectUrl.search = request.nextUrl.search;
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  return NextResponse.next();
}

function getLocale(request: NextRequest): string | undefined {
  // Get the preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) return defaultLocale;

  // Parse accept-language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [locale, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1] || '1');
      return { locale: locale.split('-')[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first matching locale
  for (const { locale } of languages) {
    if (locales.includes(locale as typeof locales[number])) {
      return locale;
    }
  }

  return defaultLocale;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};

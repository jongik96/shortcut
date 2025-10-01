import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

export const dynamic = 'force-static'

const baseUrl = 'https://learnshortcuts.dev'
const lastModified = new Date('2025-09-28')

const routes = [
  '',
  '/os',
  '/office',
  '/office/excel',
  '/office/word',
  '/office/powerpoint',
  '/google',
  '/google/docs',
  '/google/sheets',
  '/google/slides',
  '/browser',
  '/browser/chrome',
  '/browser/safari',
  '/browser/edge',
  '/adobe',
  '/adobe/photoshop',
  '/adobe/illustrator',
  '/others',
  '/others/slack',
  '/others/discord',
  '/guide',
  '/about',
  '/privacy',
  '/contact',
  '/bookmark',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  // 각 언어별로 모든 라우트 생성
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      })
    })
  })

  return sitemap
}

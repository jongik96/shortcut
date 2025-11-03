import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnshortcuts.dev';
  const lastModified = new Date('2025-09-28');

  // 모든 페이지 경로 정의
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
    '/bookmark',
    '/contact',
  ];

  // 각 경로에 대해 모든 언어 버전 생성
  const sitemapEntries: MetadataRoute.Sitemap = routes.flatMap((route) => {
    // 각 언어별 URL과 대체 언어 링크 생성
    return locales.map((locale) => {
      // trailing slash 추가 (root는 제외)
      const path = route === '' ? '' : `${route}/`;
      const url = `${baseUrl}/${locale}${path}`;
      
      // 우선순위 결정
      let priority = 0.8;
      if (route === '') priority = 1.0;
      else if (route === '/os' || route.startsWith('/office')) priority = 0.9;
      else if (route === '/privacy') priority = 0.6;
      else if (route === '/contact') priority = 0.7;
      
      // 변경 빈도 결정
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';
      if (route === '/privacy' || route === '/about' || route === '/guide' || route === '/contact') {
        changeFrequency = 'monthly';
      }

      return {
        url,
        lastModified,
        changeFrequency,
        priority,
        // 대체 언어 링크 (hreflang) - trailing slash 포함
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => {
              const altPath = route === '' ? '' : `${route}/`;
              return [l, `${baseUrl}/${l}${altPath}`];
            })
          ),
        },
      };
    });
  });

  return sitemapEntries;
}

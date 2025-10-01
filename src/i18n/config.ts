export const locales = ['ja', 'en', 'ko', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ja';

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
  ko: '한국어',
  ar: 'العربية'
};

// RTL 언어 확인
export const isRTL = (locale: Locale): boolean => {
  return locale === 'ar';
};

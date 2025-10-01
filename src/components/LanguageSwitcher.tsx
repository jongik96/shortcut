'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { useLocaleContext } from '@/contexts/LocaleContext';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale: currentLocale } = useLocaleContext();

  const changeLanguage = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments.shift();
    }
    
    // Add new locale
    const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
        aria-label="言語を選択"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
      </button>
      
      {/* 간격을 없애기 위해 mt-0으로 변경하고 before 요소로 연결 */}
      <div className="absolute right-0 mt-0 pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-lg border">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => changeLanguage(locale)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLocale === locale ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

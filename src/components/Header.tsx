'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Star } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useLocaleContext } from '@/contexts/LocaleContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.nav;
  const pathname = usePathname();
  const { favorites } = useFavorites();

  // locale을 포함한 경로 생성
  const getLocalePath = (path: string) => `/${locale}${path}`;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - 최대한 왼쪽으로 */}
          <div className="flex items-center flex-shrink-0">
            <Link href={getLocalePath('/')} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              📚 LearnShortcuts
            </Link>
          </div>
          
          {/* Software Navigation - 중앙에 크고 검정색 글자로 */}
          <nav className="hidden md:flex space-x-8 mx-auto">
            <Link 
              href={getLocalePath('/os')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/os') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.os}
            </Link>
            <Link 
              href={getLocalePath('/office')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/office') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.office}
            </Link>
            <Link 
              href={getLocalePath('/google')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/google') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.google}
            </Link>
            <Link 
              href={getLocalePath('/browser')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/browser') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.browser}
            </Link>
            <Link 
              href={getLocalePath('/adobe')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/adobe') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.adobe}
            </Link>
            <Link 
              href={getLocalePath('/others')}
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.includes('/others') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.others}
            </Link>
          </nav>

          {/* General Navigation - 오른쪽으로 */}
          <nav className="flex space-x-4 flex-shrink-0 ml-auto items-center">
            <Link 
              href={getLocalePath('/bookmark')}
              className={`flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors ${
                pathname.includes('/bookmark') ? 'text-blue-600' : ''
              }`}
            >
              <Star className="h-4 w-4" />
              <span>{t.bookmarks}</span>
              {favorites.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link href={getLocalePath('/about')} className="text-gray-500 hover:text-gray-900 transition-colors">
              {t.about}
            </Link>
            <Link href={getLocalePath('/privacy')} className="text-gray-500 hover:text-gray-900 transition-colors">
              {t.privacy}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Link 
              href={getLocalePath('/os')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/os') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.os}
            </Link>
            <Link 
              href={getLocalePath('/office')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/office') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.office}
            </Link>
            <Link 
              href={getLocalePath('/google')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/google') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.google}
            </Link>
            <Link 
              href={getLocalePath('/browser')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/browser') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.browser}
            </Link>
            <Link 
              href={getLocalePath('/adobe')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/adobe') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.adobe}
            </Link>
            <Link 
              href={getLocalePath('/others')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/others') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              {t.others}
            </Link>
            <Link 
              href={getLocalePath('/bookmark')}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                pathname.includes('/bookmark') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              <Star className="h-3 w-3" />
              <span>{t.bookmarks}</span>
              {favorites.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[16px] text-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

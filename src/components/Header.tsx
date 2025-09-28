'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Star } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';

const Header = () => {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - 최대한 왼쪽으로 */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              📚 LearnShortcuts
            </Link>
          </div>
          
          {/* Software Navigation - 중앙에 크고 검정색 글자로 */}
          <nav className="hidden md:flex space-x-8 mx-auto">
            <Link 
              href="/os" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname === '/os' 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              OS
            </Link>
            <Link 
              href="/office" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.startsWith('/office') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Office
            </Link>
            <Link 
              href="/google" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.startsWith('/google') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Google
            </Link>
            <Link 
              href="/browser" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.startsWith('/browser') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Browser
            </Link>
            <Link 
              href="/adobe" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.startsWith('/adobe') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Adobe
            </Link>
            <Link 
              href="/others" 
              className={`px-4 py-2 text-base font-semibold transition-colors ${
                pathname.startsWith('/others') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Others
            </Link>
          </nav>

          {/* General Navigation - 오른쪽으로 */}
          <nav className="flex space-x-4 flex-shrink-0 ml-auto">
            <Link 
              href="/bookmark" 
              className={`flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors ${
                pathname === '/bookmark' ? 'text-blue-600' : ''
              }`}
            >
              <Star className="h-4 w-4" />
              <span>お気に入り</span>
              {favorites.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
              Privacy
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Link 
              href="/os" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/os' 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              OS
            </Link>
            <Link 
              href="/office" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/office') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Office
            </Link>
            <Link 
              href="/google" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/google') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Google
            </Link>
            <Link 
              href="/browser" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/browser') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Browser
            </Link>
            <Link 
              href="/adobe" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/adobe') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Adobe
            </Link>
            <Link 
              href="/others" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/others') 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              Others
            </Link>
            <Link 
              href="/bookmark" 
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/bookmark' 
                  ? 'text-blue-600' 
                  : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              <Star className="h-3 w-3" />
              <span>お気に入り</span>
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

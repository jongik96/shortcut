'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { GoogleIcon, SafariIcon, EdgeIcon } from '@/components/icons/BrandIcons';
import { useLocaleContext } from '@/contexts/LocaleContext';

const BrowserPage = () => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.categories.browser;
  const getLocalePath = (path: string) => `/${locale}${path}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="browser" />
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {t.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chrome */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chrome</h3>
                  <p className="text-gray-600 mb-4">
                    {t.chrome}
                  </p>
                  <Link 
                    href={getLocalePath('/browser/chrome')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t.chrome}
                  </Link>
                </div>
                
                {/* Safari */}
                <div className="bg-indigo-50 rounded-lg p-6 text-center hover:bg-indigo-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <SafariIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safari</h3>
                  <p className="text-gray-600 mb-4">
                    {t.safari}
                  </p>
                  <Link 
                    href={getLocalePath('/browser/safari')}
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {t.safari}
                  </Link>
                </div>
                
                {/* Edge */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <EdgeIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge</h3>
                  <p className="text-gray-600 mb-4">
                    {t.edge}
                  </p>
                  <Link 
                    href={getLocalePath('/browser/edge')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t.edge}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowserPage;

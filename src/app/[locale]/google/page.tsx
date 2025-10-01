'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { GoogleDocsIcon, GoogleSheetsIcon, GoogleSlidesIcon } from '@/components/icons/BrandIcons';
import { useLocaleContext } from '@/contexts/LocaleContext';

const GooglePage = () => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.categories.google;
  const getLocalePath = (path: string) => `/${locale}${path}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="google" />
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
                {/* Docs */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleDocsIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Docs</h3>
                  <p className="text-gray-600 mb-4">
                    {t.docs}
                  </p>
                  <Link 
                    href={getLocalePath('/google/docs')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t.docs}
                  </Link>
                </div>
                
                {/* Sheets */}
                <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleSheetsIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sheets</h3>
                  <p className="text-gray-600 mb-4">
                    {t.sheets}
                  </p>
                  <Link 
                    href={getLocalePath('/google/sheets')}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    {t.sheets}
                  </Link>
                </div>
                
                {/* Slides */}
                <div className="bg-yellow-50 rounded-lg p-6 text-center hover:bg-yellow-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleSlidesIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slides</h3>
                  <p className="text-gray-600 mb-4">
                    {t.slides}
                  </p>
                  <Link 
                    href={getLocalePath('/google/slides')}
                    className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
                  >
                    {t.slides}
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

export default GooglePage;

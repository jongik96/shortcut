'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { WordIcon, ExcelIcon, PowerPointIcon } from '@/components/icons/BrandIcons';
import { useLocaleContext } from '@/contexts/LocaleContext';

const OfficePage = () => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.categories.office;
  const getLocalePath = (path: string) => `/${locale}${path}`;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="office" />
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
                {/* Word */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <WordIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Word</h3>
                  <p className="text-gray-600 mb-4">
                    {t.word}
                  </p>
                  <Link 
                    href={getLocalePath('/office/word')}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t.word}
                  </Link>
                </div>
                
                {/* Excel */}
                <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <ExcelIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel</h3>
                  <p className="text-gray-600 mb-4">
                    {t.excel}
                  </p>
                  <Link 
                    href={getLocalePath('/office/excel')}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    {t.excel}
                  </Link>
                </div>
                
                {/* PowerPoint */}
                <div className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <PowerPointIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">PowerPoint</h3>
                  <p className="text-gray-600 mb-4">
                    {t.powerpoint}
                  </p>
                  <Link 
                    href={getLocalePath('/office/powerpoint')}
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    {t.powerpoint}
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

export default OfficePage;

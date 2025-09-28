'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { GoogleIcon, SafariIcon, EdgeIcon } from '@/components/icons/BrandIcons';

const BrowserPage = () => {
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
                  ブラウザ ショートカット - Chrome・Safari・Edge 完全ガイド
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Chrome・Safari・Edge ブラウザのショートカットを完全網羅！タブ操作・ブックマーク・検索・開発者ツールなど、ウェブブラウジングを効率化するキーボードショートカットを学習できます。
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-sm text-purple-800">
                    💡 <strong>効率化のコツ:</strong> ブラウザショートカットをマスターすることで、ウェブブラウジングの速度が格段に向上します。特にタブ操作・ブックマーク管理・検索機能のショートカットは日常的に使うため、優先的に覚えることをお勧めします。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chrome */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chrome</h3>
                  <p className="text-gray-600 mb-4">
                    Google Chromeブラウザのショートカット
                  </p>
                  <a 
                    href="/browser/chrome" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Chromeショートカットを見る
                  </a>
                </div>
                
                {/* Safari */}
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <SafariIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safari</h3>
                  <p className="text-gray-600 mb-4">
                    Apple Safariブラウザのショートカット
                  </p>
                  <a 
                    href="/browser/safari" 
                    className="inline-block bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Safariショートカットを見る
                  </a>
                </div>
                
                {/* Edge */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <EdgeIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge</h3>
                  <p className="text-gray-600 mb-4">
                    Microsoft Edgeブラウザのショートカット
                  </p>
                  <a 
                    href="/browser/edge" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edgeショートカットを見る
                  </a>
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

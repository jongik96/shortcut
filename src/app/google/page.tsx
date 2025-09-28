'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { GoogleDocsIcon, GoogleSheetsIcon, GoogleSlidesIcon } from '@/components/icons/BrandIcons';

const GooglePage = () => {
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
                  Google Workspace ショートカット - Docs・Sheets・Slides 完全ガイド
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Google Workspace（Docs・Sheets・Slides）のショートカットを完全網羅！オンライン文書作成・スプレッドシート・プレゼンテーションを効率化するキーボードショートカットを学習できます。
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-sm text-yellow-800">
                    💡 <strong>効率化のコツ:</strong> Google Workspaceのショートカットをマスターすることで、クラウドベースのコラボレーション作業が格段に効率化されます。リアルタイム共同編集やコメント機能と組み合わせて使用すると、チームワークが大幅に向上します。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Docs */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleDocsIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Docs</h3>
                  <p className="text-gray-600 mb-4">
                    オンラインドキュメント作成・編集のためのショートカット
                  </p>
                  <a 
                    href="/google/docs" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Docsショートカットを見る
                  </a>
                </div>
                
                {/* Sheets */}
                <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleSheetsIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sheets</h3>
                  <p className="text-gray-600 mb-4">
                    オンラインスプレッドシート作業のためのショートカット
                  </p>
                  <a 
                    href="/google/sheets" 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Sheetsショートカットを見る
                  </a>
                </div>
                
                {/* Slides */}
                <div className="bg-yellow-50 rounded-lg p-6 text-center hover:bg-yellow-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <GoogleSlidesIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slides</h3>
                  <p className="text-gray-600 mb-4">
                    オンラインプレゼンテーション作成のためのショートカット
                  </p>
                  <a 
                    href="/google/slides" 
                    className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
                  >
                    Slidesショートカットを見る
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

export default GooglePage;

'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { PhotoshopIcon, IllustratorIcon } from '@/components/icons/BrandIcons';

const AdobePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="adobe" />
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Adobe ショートカット - Photoshop・Illustrator 完全ガイド
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Adobe Creative Suite（Photoshop・Illustrator）のショートカットを完全網羅！画像編集・ベクターグラフィックデザインを効率化するキーボードショートカットを学習できます。
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-sm text-red-800">
                    💡 <strong>効率化のコツ:</strong> Adobe Creative Suiteのショートカットをマスターすることで、クリエイティブ作業の効率が大幅に向上します。特にツール切り替え・レイヤー操作・フォーマット変更のショートカットは頻繁に使用するため、優先的に覚えることをお勧めします。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Photoshop */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <PhotoshopIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Photoshop</h3>
                  <p className="text-gray-600 mb-4">
                    画像編集・デザインのためのショートカット
                  </p>
                  <a 
                    href="/adobe/photoshop" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Photoshopショートカットを見る
                  </a>
                </div>
                
                {/* Illustrator */}
                <div className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <IllustratorIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Illustrator</h3>
                  <p className="text-gray-600 mb-4">
                    ベクターグラフィックデザインのためのショートカット
                  </p>
                  <a 
                    href="/adobe/illustrator" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Illustratorショートカットを見る
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

export default AdobePage;

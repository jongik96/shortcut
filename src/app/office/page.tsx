'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { WordIcon, ExcelIcon, PowerPointIcon } from '@/components/icons/BrandIcons';

const OfficePage = () => {
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
                  Microsoft Office ショートカット - Word・Excel・PowerPoint 完全ガイド
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Microsoft Office（Word・Excel・PowerPoint）のショートカットを完全網羅！文書作成・データ分析・プレゼンテーション作成を効率化するキーボードショートカットを学習できます。
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-sm text-green-800">
                    💡 <strong>効率化のコツ:</strong> Microsoft Officeのショートカットをマスターすることで、文書作成・データ分析・プレゼンテーション作成の作業効率が大幅に向上します。まずは頻繁に使うフォーマット・編集・ナビゲーション系のショートカットから始めましょう。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Word */}
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <WordIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Word</h3>
                  <p className="text-gray-600 mb-4">
                    文書作成・編集のためのショートカット
                  </p>
                  <a 
                    href="/office/word" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Wordショートカットを見る
                  </a>
                </div>
                
                {/* Excel */}
                <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <ExcelIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel</h3>
                  <p className="text-gray-600 mb-4">
                    スプレッドシート作業のためのショートカットと関数
                  </p>
                  <a 
                    href="/office/excel" 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Excelショートカットを見る
                  </a>
                </div>
                
                {/* PowerPoint */}
                <div className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <PowerPointIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">PowerPoint</h3>
                  <p className="text-gray-600 mb-4">
                    プレゼンテーション作成のためのショートカット
                  </p>
                  <a 
                    href="/office/powerpoint" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    PowerPointショートカットを見る
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

export default OfficePage;

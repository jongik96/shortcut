'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySidebar from '@/components/CategorySidebar';
import { SlackIcon, DiscordIcon } from '@/components/icons/BrandIcons';

const OthersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="others" />
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  その他ソフトウェア ショートカット - Slack・Discord 完全ガイド
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Slack・Discord などその他ソフトウェアのショートカットを完全網羅！チームコミュニケーション・ゲーミングコミュニティを効率化するキーボードショートカットを学習できます。
                </p>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-sm text-indigo-800">
                    💡 <strong>効率化のコツ:</strong> コミュニケーションツールのショートカットをマスターすることで、チームワークとコラボレーションが格段に効率化されます。特にチャンネル切り替え・メンション・検索機能のショートカットは日常的に使うため、優先的に覚えることをお勧めします。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Slack */}
                <div className="bg-purple-50 rounded-lg p-6 text-center hover:bg-purple-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <SlackIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slack</h3>
                  <p className="text-gray-600 mb-4">
                    チームコミュニケーションのためのショートカット
                  </p>
                  <a 
                    href="/others/slack" 
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Slackショートカットを見る
                  </a>
                </div>
                
                {/* Discord */}
                <div className="bg-indigo-50 rounded-lg p-6 text-center hover:bg-indigo-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    <DiscordIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discord</h3>
                  <p className="text-gray-600 mb-4">
                    ゲーミングコミュニティのためのショートカット
                  </p>
                  <a 
                    href="/others/discord" 
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Discordショートカットを見る
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

export default OthersPage;

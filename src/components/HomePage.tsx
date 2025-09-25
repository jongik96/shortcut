'use client';

import { Keyboard, Zap, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HomePageProps {
  onGetStarted: () => void;
  className?: string;
}

const HomePage = ({ onGetStarted, className }: HomePageProps) => {
  const features = [
    {
      icon: Keyboard,
      title: '豊富なショートカット',
      description: 'Excel、Word、PowerPoint、システムのショートカットを網羅的に収録'
    },
    {
      icon: Zap,
      title: '高速検索',
      description: 'キーワード検索とカテゴリフィルタで目的のショートカットを瞬時に発見'
    },
    {
      icon: BookOpen,
      title: '詳細な説明',
      description: '各ショートカットの使い方と効果を分かりやすく解説'
    },
    {
      icon: Star,
      title: 'お気に入り機能',
      description: 'よく使うショートカットを保存して効率的にアクセス'
    }
  ];

  const stats = [
    { number: '500+', label: 'ショートカット数' },
    { number: '4', label: '対応ソフトウェア' },
    { number: '10+', label: 'カテゴリ' },
    { number: '100%', label: '無料' }
  ];

  return (
    <div className={cn('space-y-16', className)}>
      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ショートカット
            <span className="text-blue-600"> マスター</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Excel、Word、PowerPoint、システムのショートカットを効率的に学習・検索できるプラットフォーム。
            作業効率を劇的に向上させましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              ショートカット一覧を見る
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => window.location.href = '/guide'}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              使い方を学ぶ
            </button>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 機能セクション */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            なぜショートカットマスターなのか？
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            効率的な作業のための包括的なショートカットソリューション
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 対応ソフトウェアセクション */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            対応ソフトウェア
          </h2>
          <p className="text-xl text-gray-600">
            主要なオフィスソフトウェアとシステムのショートカットをサポート
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Microsoft Excel', icon: '📊', description: 'データ分析と表計算のショートカット' },
            { name: 'Microsoft Word', icon: '📝', description: '文書作成と編集のショートカット' },
            { name: 'Microsoft PowerPoint', icon: '📈', description: 'プレゼンテーション作成のショートカット' },
            { name: 'Windows/Mac', icon: '💻', description: 'システム操作のショートカット' }
          ].map((software, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border text-center">
              <div className="text-4xl mb-4">{software.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {software.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {software.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            今すぐ作業効率を向上させましょう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            無料で始められるショートカット学習プラットフォーム
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            ショートカット一覧を見る
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

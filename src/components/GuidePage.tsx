'use client';

import { Search, Filter, Star, BookOpen, MousePointer, Keyboard, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GuidePageProps {
  className?: string;
}

const GuidePage = ({ className }: GuidePageProps) => {
  const steps = [
    {
      icon: Search,
      title: 'ショートカットを検索',
      description: '検索バーにキーワードを入力して、目的のショートカットを見つけましょう',
      details: [
        '例: "コピー"、"貼り付け"、"太字"など',
        '部分的なキーワードでも検索可能',
        '説明文やキーワードからも検索されます'
      ]
    },
    {
      icon: Filter,
      title: 'カテゴリで絞り込み',
      description: 'カテゴリボタンを使って、特定の種類のショートカットだけを表示',
      details: [
        'フォーマット、編集、表示など',
        'ソフトウェアごとに異なるカテゴリ',
        '「すべて」で全カテゴリを表示'
      ]
    },
    {
      icon: Star,
      title: 'お気に入りに保存',
      description: 'よく使うショートカットを星マークでお気に入りに保存',
      details: [
        'ショートカットカードの星マークをクリック',
        'お気に入りタブで保存されたショートカットを確認',
        '効率的なアクセスが可能'
      ]
    },
    {
      icon: BookOpen,
      title: '詳細情報を確認',
      description: '各ショートカットの詳細な説明と使用例を確認',
      details: [
        'WindowsとMacの両方のキーを表示',
        '具体的な使用場面の説明',
        'コピーボタンで簡単にコピー可能'
      ]
    }
  ];

  const features = [
    {
      icon: MousePointer,
      title: '直感的な操作',
      description: 'クリック一つで簡単に操作できる直感的なインターフェース'
    },
    {
      icon: Keyboard,
      title: 'キーボード対応',
      description: 'キーボードショートカットで素早くナビゲーション'
    },
    {
      icon: Zap,
      title: '高速検索',
      description: 'リアルタイム検索で瞬時に結果を表示'
    }
  ];

  const tips = [
    '検索時は具体的なキーワードを使うとより正確な結果が得られます',
    'カテゴリと検索を組み合わせて使うと効率的です',
    'お気に入り機能を活用してよく使うショートカットを整理しましょう',
    'プラットフォーム（Windows/Mac）を切り替えて確認できます',
    'Excelの関数ジェネレーターで数式を自動生成できます'
  ];

  return (
    <div className={cn('space-y-16', className)}>
      {/* ヒーローセクション */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          使い方ガイド
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          LearnShortcuts.devの基本的な使い方をステップバイステップで説明します。
          効率的にショートカットを学習・検索する方法をマスターしましょう。
        </p>
      </section>

      {/* 基本ステップ */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">基本ステップ</h2>
          <p className="text-xl text-gray-600">
            4つの簡単なステップでショートカットをマスター
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-center mt-4">
                  <span className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 機能紹介 */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">主要機能</h2>
          <p className="text-xl text-gray-600">
            LearnShortcuts.devの便利な機能をご紹介
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
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

      {/* 使用のコツ */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">使用のコツ</h2>
          <p className="text-xl text-gray-600">
            より効率的に使うためのヒント
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8">
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 対応ソフトウェア */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">対応ソフトウェア</h2>
          <p className="text-xl text-gray-600">
            主要なオフィスソフトウェアとシステムのショートカットをサポート
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Microsoft Excel', icon: '📊', description: 'データ分析と表計算のショートカット', shortcuts: '150+ ショートカット' },
            { name: 'Microsoft Word', icon: '📝', description: '文書作成と編集のショートカット', shortcuts: '120+ ショートカット' },
            { name: 'Microsoft PowerPoint', icon: '📈', description: 'プレゼンテーション作成のショートカット', shortcuts: '100+ ショートカット' },
            { name: 'Windows/Mac', icon: '💻', description: 'システム操作のショートカット', shortcuts: '130+ ショートカット' }
          ].map((software, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">{software.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {software.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {software.description}
              </p>
              <div className="text-blue-600 font-semibold text-sm">
                {software.shortcuts}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            今すぐショートカットを探してみましょう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            使い方をマスターしたら、実際にショートカット一覧で検索してみてください
          </p>
          <button
            onClick={() => window.location.href = '/list'}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            ショートカット一覧を見る
          </button>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;

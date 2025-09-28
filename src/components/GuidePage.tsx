'use client';

import { Search, Filter, Star, BookOpen, MousePointer, Keyboard, Zap, ExternalLink, Play, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GuidePageProps {
  className?: string;
}

const GuidePage = ({ className }: GuidePageProps) => {
  const steps = [
    {
      icon: Search,
      title: 'カテゴリを選択',
      description: 'OS, Office, Google, Browser, Adobe, Othersの中から目的に合ったカテゴリを選択',
      details: [
        'ヘッダーメニューからメインカテゴリを選択',
        'OS: Windows/Mac基本ショートカット',
        'Office: Word, Excel, PowerPointショートカット',
        'Google: Docs, Sheets, Slidesショートカット',
        'Browser: Chrome, Safari, Edgeショートカット',
        'Adobe: Photoshop, Illustratorショートカット',
        'Others: Slack, Discordなどその他のソフトウェア'
      ]
    },
    {
      icon: Filter,
      title: 'サブカテゴリ選択',
      description: 'サイドバーからサブカテゴリを選択して特定ソフトウェアのショートカットを確認',
      details: [
        'Office: Word, Excel, PowerPoint',
        'Google: Docs, Sheets, Slides',
        'Browser: Chrome, Safari, Edge',
        'Adobe: Photoshop, Illustrator',
        'Others: Slack, Discord',
        '各サブカテゴリでWindows/Macタブでプラットフォーム切り替え'
      ]
    },
    {
      icon: ExternalLink,
      title: 'ショートカット詳細ページ',
      description: 'ショートカットカードをクリックして詳細ページで学習',
      details: [
        'インタラクティブキーボードでキー位置確認',
        'アニメーションで押し方を視覚的に学習',
        'プラットフォーム別の使用コツを確認',
        '関連ショートカットも発見可能'
      ]
    },
    {
      icon: BookOpen,
      title: '実践的な学習',
      description: '視覚的・インタラクティブな機能で効率的に学習',
      details: [
        'キーボードマップでキーをクリックして説明確認',
        'アニメーション再生で押し方を確認',
        'ステップバイステップの説明',
        'プラットフォーム別の実践的なコツ'
      ]
    }
  ];

  const features = [
    {
      icon: Keyboard,
      title: 'インタラクティブキーボード',
      description: '仮想キーボードでショートカットキーを視覚的に確認し、キーをクリックして詳細説明を表示'
    },
    {
      icon: Play,
      title: 'アニメーション学習',
      description: 'ショートカットキーの押し方をアニメーションで視覚的に学習し、ステップバイステップで確認'
    },
    {
      icon: Eye,
      title: '詳細ページ',
      description: '各ショートカットの詳細情報、関連ショートカット、プラットフォーム別の使用コツを提供'
    },
    {
      icon: Zap,
      title: '高速検索',
      description: 'リアルタイム検索で瞬時に結果を表示し、カテゴリフィルターで効率的に絞り込み'
    }
  ];

  const tips = [
    'ショートカットカードをクリックして詳細ページでインタラクティブに学習しましょう',
    'インタラクティブキーボードで各キーをクリックして詳細説明を確認できます',
    'アニメーション機能で実際の押し方を視覚的に学習できます',
    'Windows/Macタブを切り替えてプラットフォーム別のキーを確認しましょう',
    'Excelページでは関数ジェネレーターで数式を自動生成できます',
    '関連ショートカットから類似の機能を発見できます',
    'プラットフォーム別の実践的なコツを参考に効率的に学習しましょう'
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* 新機能紹介 */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">新機能: インタラクティブ学習</h2>
          <p className="text-xl text-gray-600">
            視覚的でインタラクティブな学習体験を提供
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Keyboard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">インタラクティブキーボード</h3>
            </div>
            <p className="text-gray-700 mb-4">
              仮想キーボードでショートカットキーを視覚的に確認できます。各キーをクリックすると詳細な説明が表示され、キーの役割を理解できます。
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• キーの位置と役割を視覚的に学習</li>
              <li>• クリックで詳細説明を確認</li>
              <li>• プラットフォーム別の使用コツ</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">アニメーション学習</h3>
            </div>
            <p className="text-gray-700 mb-4">
              ショートカットキーの押し方をアニメーションで視覚的に学習できます。実際の操作手順をステップバイステップで確認できます。
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 押し方のアニメーション再生</li>
              <li>• ステップバイステップの説明</li>
              <li>• 実践的な使用コツ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 使用のコツ */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">使用のコツ</h2>
          <p className="text-xl text-gray-600">
            より効率的に使うためのヒント
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'OS', icon: '🖥️', description: 'Windows/Mac基本ショートカット', shortcuts: '130+ショートカット' },
            { name: 'Office', icon: '📊', description: 'Word, Excel, PowerPointショートカット', shortcuts: '370+ショートカット' },
            { name: 'Google', icon: '🔍', description: 'Docs, Sheets, Slidesショートカット', shortcuts: '200+ショートカット' },
            { name: 'Browser', icon: '🌐', description: 'Chrome, Safari, Edgeショートカット', shortcuts: '150+ショートカット' },
            { name: 'Adobe', icon: '🎨', description: 'Photoshop, Illustratorショートカット', shortcuts: '100+ショートカット' },
            { name: 'Others', icon: '💬', description: 'Slack, Discordなどその他のソフトウェア', shortcuts: '80+ショートカット' }
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/os"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              OSショートカットを見る
            </Link>
            <Link
              href="/office"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Officeショートカットを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;

'use client';

import { Users, Target, Award, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
  const serviceInfo = [
    {
      name: '豊富なデータベース',
      role: '500+ ショートカット',
      description: 'Excel、Word、PowerPoint、システムのショートカットを網羅的に収録'
    },
    {
      name: '高度な検索機能',
      role: 'カテゴリフィルタ',
      description: 'キーワード検索とカテゴリ別フィルタリングで目的のショートカットを瞬時に発見'
    },
    {
      name: '直感的なUI',
      role: '使いやすさ重視',
      description: '誰でも簡単に使える直感的なユーザーインターフェース'
    }
  ];

  const values = [
    {
      icon: Target,
      title: '正確性',
      description: 'すべてのショートカット情報を徹底的に検証し、正確性を保証します。'
    },
    {
      icon: Users,
      title: 'ユーザー中心',
      description: 'ユーザーの利便性と効率性を最優先に考慮します。'
    },
    {
      icon: Award,
      title: '品質',
      description: '継続的な改善を通じて最高品質のサービスを提供します。'
    },
    {
      icon: Heart,
      title: '情熱',
      description: 'ユーザーの生産性向上への情熱で開発しています。'
    }
  ];

  return (
    <div className={cn('space-y-16', className)}>
      {/* ヒーローセクション */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          サービス概要
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          LearnShortcuts.devは、Windows・Mac・Excel・Word・PowerPointのショートカットを
          効率的に学習・検索できるオンラインプラットフォームです。
          正確で信頼できる情報を提供し、皆様の作業効率を劇的に向上させます。
        </p>
      </section>

      {/* サービス特徴セクション */}
      <section className="py-16 bg-blue-50 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">サービス特徴</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            「すべてのユーザーが自分のツールを完全に活用できるよう支援する」
          </p>
          <p className="text-gray-600 mt-4">
            単純なショートカット一覧の提供を超えて、ユーザーが自分の作業環境で
            最大限の効率を達成できるよう支援する包括的な学習プラットフォームを提供しています。
          </p>
        </div>
      </section>

      {/* サービス優位性セクション */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">サービス優位性</h2>
          <p className="text-xl text-gray-600">
            他のサービスと比較した当サービスの強み
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">サービス詳細</h2>
          <p className="text-xl text-gray-600">
            LearnShortcuts.devの主要機能と特徴
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {info.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {info.role}
              </p>
              <p className="text-gray-600">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

'use client';

import { Shield, Eye, Lock, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy = ({ className }: PrivacyPolicyProps) => {
  const sections = [
    {
      icon: Database,
      title: '収集する情報',
      content: [
        'サービス利用時に自動で収集される情報（IPアドレス、ブラウザ情報、アクセス時間）',
        'ユーザーが直接入力する情報（検索語、お気に入り設定）',
        'クッキーおよび類似技術による情報収集'
      ]
    },
    {
      icon: Eye,
      title: '情報使用目的',
      content: [
        'サービス提供および改善',
        'ユーザー体験向上',
        'サービス統計および分析',
        'カスタマーサポート提供'
      ]
    },
    {
      icon: Lock,
      title: '情報保護',
      content: [
        '個人情報は暗号化されて安全に保存されます',
        'アクセス権限のある職員のみが個人情報にアクセスできます',
        '定期的なセキュリティ点検を実施します',
        '個人情報漏洩時は即座にユーザーに通知します'
      ]
    },
    {
      icon: Shield,
      title: 'ユーザー権利',
      content: [
        '個人情報閲覧、訂正、削除要求',
        '個人情報処理停止要求',
        '個人情報処理現況通知要求',
        '個人情報保護法に基づく損害賠償請求'
      ]
    }
  ];

  return (
    <div className={cn('space-y-12', className)}>
      {/* ヘッダー */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          プライバシーポリシー
        </h1>
        <p className="text-lg text-gray-600">
          LearnShortcuts.devはユーザーの個人情報保護を最優先とします。
        </p>
        <p className="text-sm text-gray-500 mt-2">
          最終更新: 2025年1月27日
        </p>
      </section>

      {/* 概要 */}
      <section className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">概要</h2>
        <p className="text-gray-700 leading-relaxed">
          LearnShortcuts.dev（以下「サービス」）はユーザーの個人情報を重要視し、
          個人情報保護法および関連法令に従って個人情報を安全に保護・管理します。
          本プライバシーポリシーは、サービス利用時に個人情報がどのように収集、使用、保護されるかについて説明します。
        </p>
      </section>

      {/* 主要内容 */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <section key={index} className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* クッキーポリシー */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">クッキーポリシー</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            私たちはサービスの機能を向上させ、ユーザー体験を改善するためにクッキーを使用します。
          </p>
          <div>
            <h3 className="font-semibold mb-2">使用するクッキーの種類:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>必須クッキー: サービス基本機能提供</li>
              <li>パフォーマンスクッキー: サービス使用統計収集</li>
              <li>機能クッキー: ユーザー設定保存</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 法的告知 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">法的告知</h2>
        <p className="text-sm text-gray-700">
          本プライバシーポリシーは関連法令の変更やサービスポリシーの変更に従って
          修正される場合があります。重要な変更事項がある場合はサービス内お知らせを通じて
          事前にご案内いたします。
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

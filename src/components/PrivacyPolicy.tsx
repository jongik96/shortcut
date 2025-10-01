'use client';

import { Shield, Eye, Lock, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocaleContext } from '@/contexts/LocaleContext';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy = ({ className }: PrivacyPolicyProps) => {
  const { dictionary } = useLocaleContext();
  const t = dictionary.privacyPage;

  const sections = [
    {
      icon: Database,
      title: t.sections.collection.title,
      content: t.sections.collection.items
    },
    {
      icon: Eye,
      title: t.sections.usage.title,
      content: t.sections.usage.items
    },
    {
      icon: Lock,
      title: t.sections.protection.title,
      content: t.sections.protection.items
    },
    {
      icon: Shield,
      title: t.sections.rights.title,
      content: t.sections.rights.items
    }
  ];

  return (
    <div className={cn('space-y-12', className)}>
      {/* ヘッダー */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t.hero.title}
        </h1>
        <p className="text-lg text-gray-600">
          {t.hero.subtitle}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {t.hero.lastUpdated}
        </p>
      </section>

      {/* 概要 */}
      <section className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.overview.title}</h2>
        <p className="text-gray-700 leading-relaxed">
          {t.overview.content}
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.cookies.title}</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            {t.cookies.description}
          </p>
          <div>
            <h3 className="font-semibold mb-2">{t.cookies.typesTitle}</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              {t.cookies.types.map((type: string, index: number) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* 法的告知 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{t.legal.title}</h2>
        <p className="text-sm text-gray-700">
          {t.legal.content}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

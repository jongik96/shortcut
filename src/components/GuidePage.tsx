'use client';

import { Search, Filter, BookOpen, Keyboard, Zap, ExternalLink, Play, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useLocaleContext } from '@/contexts/LocaleContext';

interface GuidePageProps {
  className?: string;
}

const GuidePage = ({ className }: GuidePageProps) => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.guide;
  const getLocalePath = (path: string) => `/${locale}${path}`;

  const steps = [
    {
      icon: Search,
      title: t.steps.step1.title,
      description: t.steps.step1.description,
      details: t.steps.step1.details
    },
    {
      icon: Filter,
      title: t.steps.step2.title,
      description: t.steps.step2.description,
      details: t.steps.step2.details
    },
    {
      icon: ExternalLink,
      title: t.steps.step3.title,
      description: t.steps.step3.description,
      details: t.steps.step3.details
    },
    {
      icon: BookOpen,
      title: t.steps.step4.title,
      description: t.steps.step4.description,
      details: t.steps.step4.details
    }
  ];

  const features = t.features.items.map((item: { title: string; description: string }, index: number) => ({
    icon: [Keyboard, Play, Eye, Zap][index],
    title: item.title,
    description: item.description
  }));

  const tips = t.tips.list;

  return (
    <div className={cn('space-y-16', className)}>
      {/* ヒーローセクション */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
      </section>

      {/* 基本ステップ */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.steps.title}</h2>
          <p className="text-xl text-gray-600">
            {t.steps.subtitle}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          <p className="text-xl text-gray-600">
            {t.features.subtitle}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.newFeatures.title}</h2>
          <p className="text-xl text-gray-600">
            {t.newFeatures.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Keyboard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t.newFeatures.keyboard.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t.newFeatures.keyboard.description}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {t.newFeatures.keyboard.points.map((point: string, index: number) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t.newFeatures.animation.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t.newFeatures.animation.description}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {t.newFeatures.animation.points.map((point: string, index: number) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 使用のコツ */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.tips.title}</h2>
          <p className="text-xl text-gray-600">
            {t.tips.subtitle}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.software.title}</h2>
          <p className="text-xl text-gray-600">
            {t.software.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🖥️' },
            { icon: '📊' },
            { icon: '🔍' },
            { icon: '🌐' },
            { icon: '🎨' },
            { icon: '💬' }
          ].map((item, index) => {
            const software = t.software.items[index];
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
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
            );
          })}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalePath('/os')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.cta.buttonOS}
            </Link>
            <Link
              href={getLocalePath('/office')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.cta.buttonOffice}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;

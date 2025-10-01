'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { Keyboard, Zap, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WindowsIcon, MacIcon, OfficeIcon, GoogleIcon, ChromeIcon, AdobeIcon, SlackIcon, DiscordIcon } from '@/components/icons/BrandIcons';

interface HomePageProps {
  className?: string;
}

const HomePage = ({ className }: HomePageProps) => {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.home;
  const getLocalePath = (path: string) => `/${locale}${path}`;
  
  const features = [
    {
      icon: Keyboard,
      title: t.features.richShortcuts.title,
      description: t.features.richShortcuts.description
    },
    {
      icon: Zap,
      title: t.features.fastSearch.title,
      description: t.features.fastSearch.description
    },
    {
      icon: BookOpen,
      title: t.features.detailedExplanation.title,
      description: t.features.detailedExplanation.description
    },
    {
      icon: Star,
      title: t.features.favorites.title,
      description: t.features.favorites.description
    }
  ];

  const stats = [
    { number: '500+', label: t.stats.shortcuts },
    { number: '6', label: t.stats.mainCategories },
    { number: '15+', label: t.stats.subCategories },
    { number: '100%', label: t.stats.free }
  ];

  return (
    <div className={cn('space-y-16', className)}>
      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
            <span className="text-blue-600"> {t.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalePath('/os')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              {t.hero.ctaShortcuts}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href={getLocalePath('/guide')}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              {t.hero.ctaGuide}
            </Link>
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
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
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
            {t.software.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.software.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: t.software.os.name, icon: WindowsIcon, description: t.software.os.description, link: '/os' },
            { name: t.software.office.name, icon: OfficeIcon, description: t.software.office.description, link: '/office' },
            { name: t.software.google.name, icon: GoogleIcon, description: t.software.google.description, link: '/google' },
            { name: t.software.browser.name, icon: ChromeIcon, description: t.software.browser.description, link: '/browser' },
            { name: t.software.adobe.name, icon: AdobeIcon, description: t.software.adobe.description, link: '/adobe' },
            { name: t.software.others.name, icon: SlackIcon, description: t.software.others.description, link: '/others' }
          ].map((software, index) => (
            <Link key={index} href={getLocalePath(software.link)} className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition-shadow block">
              <div className="flex justify-center mb-4">
                <software.icon className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {software.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {software.description}
              </p>
            </Link>
          ))}
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
          <Link
            href={getLocalePath('/os')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            {t.cta.button}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

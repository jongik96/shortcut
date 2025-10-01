'use client';

import { Users, Target, Award, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocaleContext } from '@/contexts/LocaleContext';

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
  const { dictionary } = useLocaleContext();
  const t = dictionary.about;

  const serviceInfo = t.serviceInfo.items;

  const values = t.values.items.map((item: any, index: number) => ({
    icon: [Target, Users, Award, Heart][index],
    title: item.title,
    description: item.description
  }));

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

      {/* サービス特徴セクション */}
      <section className="py-16 bg-blue-50 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.mission.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            「{t.mission.quote}」
          </p>
          <p className="text-gray-600 mt-4">
            {t.mission.description}
          </p>
        </div>
      </section>

      {/* サービス優位性セクション */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.values.title}</h2>
          <p className="text-xl text-gray-600">
            {t.values.subtitle}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.serviceInfo.title}</h2>
          <p className="text-xl text-gray-600">
            {t.serviceInfo.subtitle}
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

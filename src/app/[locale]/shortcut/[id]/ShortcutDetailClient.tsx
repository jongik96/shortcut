'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import InteractiveKeyboard from '@/components/InteractiveKeyboard';
import KeyboardAnimation from '@/components/KeyboardAnimation';
import { Shortcut } from '@/types/shortcuts';
import { ArrowLeft, Copy, Star, Share2 } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { getShortcutTranslation } from '@/lib/shortcut-translations';
import { shortcuts } from '@/data/shortcuts';

interface ShortcutDetailClientProps {
  shortcut: Shortcut;
  locale: string;
}

export default function ShortcutDetailClient({ shortcut }: ShortcutDetailClientProps) {
  const router = useRouter();
  const { locale, dictionary } = useLocaleContext();
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');
  const { isFavorite, toggleFavorite } = useFavorites();

  const translated = getShortcutTranslation(shortcut, locale);
  const shortcutText = platform === 'windows' ? shortcut.windows : shortcut.mac;
  const softwareName = shortcut.software === 'system' ? 'OS' : 
                     shortcut.software === 'excel' ? 'Excel' :
                     shortcut.software === 'word' ? 'Word' :
                     shortcut.software === 'powerpoint' ? 'PowerPoint' :
                     shortcut.software === 'docs' ? 'Google Docs' :
                     shortcut.software === 'sheets' ? 'Google Sheets' :
                     shortcut.software === 'slides' ? 'Google Slides' :
                     shortcut.software === 'chrome' ? 'Chrome' :
                     shortcut.software === 'safari' ? 'Safari' :
                     shortcut.software === 'edge' ? 'Edge' :
                     shortcut.software === 'photoshop' ? 'Photoshop' :
                     shortcut.software === 'illustrator' ? 'Illustrator' :
                     shortcut.software === 'slack' ? 'Slack' :
                     shortcut.software === 'discord' ? 'Discord' : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(shortcutText);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${shortcut.name} - ${softwareName}`,
        text: `${shortcut.description}\n\n${shortcutText}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          {dictionary.shortcutDetail.back}
        </button>

        <div className="max-w-4xl mx-auto">
          {/* 헤더 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {softwareName}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {shortcut.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{translated.name}</h1>
                <p className="text-gray-600 text-lg">{translated.description}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => shortcut && toggleFavorite(shortcut.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    shortcut && isFavorite(shortcut.id) ? 'text-yellow-500 bg-yellow-50' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                  }`}
                >
                  <Star className={`h-6 w-6 ${shortcut && isFavorite(shortcut.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Copy className="h-6 w-6" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* 플랫폼 선택 탭 */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setPlatform('windows')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  platform === 'windows'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Windows
              </button>
              <button
                onClick={() => setPlatform('mac')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  platform === 'mac'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mac
              </button>
            </div>

            {/* 단축키 표시 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-mono font-bold text-gray-900 mb-2">
                {shortcutText}
              </div>
              <p className="text-gray-600">{dictionary.shortcutDetail.clickToCopy}</p>
            </div>
          </div>

          {/* 인터랙티브 키보드 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{dictionary.shortcutDetail.interactiveKeyboard}</h2>
            <p className="text-gray-600 mb-6">
              {dictionary.shortcutDetail.interactiveDesc}
            </p>
            <InteractiveKeyboard 
              shortcut={shortcut} 
              platform={platform}
              shortcutText={shortcutText}
            />
          </div>

          {/* 키보드 시각화 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{dictionary.shortcutDetail.keyboardVisual}</h2>
            <p className="text-gray-600 mb-6">
              {dictionary.shortcutDetail.keyboardVisualDesc}
            </p>
            <KeyboardAnimation 
              shortcut={shortcut} 
              platform={platform}
              shortcutText={shortcutText}
            />
          </div>

          {/* 관련 단축키 섹션 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{dictionary.shortcutDetail.relatedShortcuts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shortcuts
                .filter(s => s.software === shortcut.software && s.id !== shortcut.id)
                .slice(0, 6)
                .map(relatedShortcut => {
                  const relatedTranslated = getShortcutTranslation(relatedShortcut, locale);
                  return (
                    <button
                      key={relatedShortcut.id}
                      onClick={() => router.push(`/${locale}/shortcut/${relatedShortcut.id}`)}
                      className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 mb-1">
                        {relatedTranslated.name}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {relatedTranslated.description}
                      </div>
                      <div className="text-sm font-mono text-blue-600">
                        {platform === 'windows' ? relatedShortcut.windows : relatedShortcut.mac}
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


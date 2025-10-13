'use client';

import { Shortcut, Platform } from '@/types/shortcuts';
import { Star, Copy, ExternalLink } from 'lucide-react';
import KeyboardVisualizer from './KeyboardVisualizer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { getShortcutTranslation } from '@/lib/shortcut-translations';

interface ShortcutCardProps {
  shortcut: Shortcut;
  platform: Platform;
  onCopy?: (text: string) => void;
  className?: string;
}

const ShortcutCard = ({ 
  shortcut, 
  platform, 
  onCopy,
  className 
}: ShortcutCardProps) => {
  const { locale, dictionary } = useLocaleContext();
  const { isFavorite: isFav, toggleFavorite } = useFavorites();
  const shortcutText = platform === 'windows' ? shortcut.windows : shortcut.mac;
  const isCurrentlyFavorite = isFav(shortcut.id);
  
  // 번역된 텍스트 가져오기
  const translated = getShortcutTranslation(shortcut, locale);

  const handleCopy = () => {
    onCopy?.(shortcutText);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(shortcut.id);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'format': return 'bg-blue-100 text-blue-800';
      case 'navigation': return 'bg-green-100 text-green-800';
      case 'data': return 'bg-purple-100 text-purple-800';
      case 'sheet': return 'bg-orange-100 text-orange-800';
      case 'file': return 'bg-red-100 text-red-800';
      case 'edit': return 'bg-yellow-100 text-yellow-800';
      case 'view': return 'bg-indigo-100 text-indigo-800';
      case 'insert': return 'bg-pink-100 text-pink-800';
      case 'tools': return 'bg-teal-100 text-teal-800';
      case 'help': return 'bg-cyan-100 text-cyan-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    const tCommon = dictionary.common;
    const categoryNames = {
      format: tCommon.formatting,
      formatting: tCommon.formatting,
      navigation: tCommon.navigation,
      data: tCommon.data,
      sheet: tCommon.sheet,
      file: tCommon.file,
      edit: tCommon.edit,
      editing: tCommon.editing,
      view: tCommon.view,
      insert: tCommon.insert,
      tools: tCommon.tools,
      help: tCommon.help,
      system: tCommon.system,
      slides: tCommon.slides,
      presentation: tCommon.presentation,
      text: tCommon.text,
      table: tCommon.table,
      tabs: tCommon.tabs,
      bookmarks: tCommon.bookmarks,
      browser: tCommon.browser,
      design: tCommon.design,
      layers: tCommon.layers,
      communication: tCommon.communication,
      channels: tCommon.channels
    };
    return categoryNames[category as keyof typeof categoryNames] || category;
  };

  return (
    <Link href={`/${locale}/shortcut/${shortcut.id}`} className="block">
      <div className={cn(
        'p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group',
        className
      )}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {translated.name}
              </h3>
              <span className={cn(
                'px-2 py-1 text-xs font-medium rounded-full',
                getCategoryColor(shortcut.category)
              )}>
                {getCategoryName(shortcut.category)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{translated.description}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleCopy();
              }}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              title={dictionary.common.copy}
            >
              <Copy size={16} />
            </button>
            <button
              onClick={handleToggleFavorite}
              className={cn(
                'p-1 transition-colors',
                isCurrentlyFavorite 
                  ? 'text-yellow-500 hover:text-yellow-600' 
                  : 'text-gray-400 hover:text-yellow-500'
              )}
              title={isCurrentlyFavorite ? dictionary.bookmark.title : dictionary.bookmark.title}
            >
              <Star size={16} fill={isCurrentlyFavorite ? 'currentColor' : 'none'} />
            </button>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
        </div>
        
        <KeyboardVisualizer 
          shortcut={shortcut} 
          platform={platform}
          className="text-sm"
        />
        
        <div className="mt-3 text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
          {dictionary.shortcutDetail.viewDetail}
        </div>
      </div>
    </Link>
  );
};

export default ShortcutCard;

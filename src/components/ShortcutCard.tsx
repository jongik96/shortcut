'use client';

import { Shortcut, Platform } from '@/types/shortcuts';
import { Star, Copy } from 'lucide-react';
import KeyboardVisualizer from './KeyboardVisualizer';
import { cn } from '@/lib/utils';

interface ShortcutCardProps {
  shortcut: Shortcut;
  platform: Platform;
  isFavorite?: boolean;
  onToggleFavorite?: (shortcutId: string) => void;
  onCopy?: (text: string) => void;
  className?: string;
}

const ShortcutCard = ({ 
  shortcut, 
  platform, 
  isFavorite = false, 
  onToggleFavorite,
  onCopy,
  className 
}: ShortcutCardProps) => {
  const shortcutText = platform === 'windows' ? shortcut.windows : shortcut.mac;

  const handleCopy = () => {
    onCopy?.(shortcutText);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite?.(shortcut.id);
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
    const categoryNames = {
      format: 'フォーマット',
      navigation: '移動',
      data: 'データ',
      sheet: 'シート',
      file: 'ファイル',
      edit: '編集',
      view: '表示',
      insert: '挿入',
      tools: 'ツール',
      help: 'ヘルプ',
      system: 'システム'
    };
    return categoryNames[category as keyof typeof categoryNames] || category;
  };

  return (
    <div className={cn(
      'p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200',
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{shortcut.name}</h3>
            <span className={cn(
              'px-2 py-1 text-xs font-medium rounded-full',
              getCategoryColor(shortcut.category)
            )}>
              {getCategoryName(shortcut.category)}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{shortcut.description}</p>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <button
            onClick={handleCopy}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            title="コピー"
          >
            <Copy size={16} />
          </button>
          {onToggleFavorite && (
            <button
              onClick={handleToggleFavorite}
              className={cn(
                'p-1 transition-colors',
                isFavorite 
                  ? 'text-yellow-500 hover:text-yellow-600' 
                  : 'text-gray-400 hover:text-yellow-500'
              )}
              title={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
            >
              <Star size={16} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          )}
        </div>
      </div>
      
      <KeyboardVisualizer 
        shortcut={shortcut} 
        platform={platform}
        className="text-sm"
      />
    </div>
  );
};

export default ShortcutCard;

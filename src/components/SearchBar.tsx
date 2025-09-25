'use client';

import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  category?: 'excel' | 'word' | 'powerpoint' | 'system';
}

const SearchBar = ({ value, onChange, placeholder, className, category = 'excel' }: SearchBarProps) => {
  // 카테고리별 placeholder
  const getPlaceholder = (category: string) => {
    switch (category) {
      case 'excel':
        return '例: コピー, 貼り付け, 太字, セル結合...';
      case 'word':
        return '例: コピー, 貼り付け, 太字, 中央揃え...';
      case 'powerpoint':
        return '例: コピー, 貼り付け, 太字, スライド複製...';
      case 'system':
        return '例: コピー, 貼り付け, 切り取り, アプリ切り替え...';
      default:
        return '例: コピー, 貼り付け, 太字, セル結合...';
    }
  };

  const finalPlaceholder = placeholder || getPlaceholder(category);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={finalPlaceholder}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;


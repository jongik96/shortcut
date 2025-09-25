'use client';

import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  software: 'excel' | 'word' | 'powerpoint' | 'system';
  className?: string;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange, software, className }: CategoryFilterProps) => {

  // 소프트웨어별 카테고리 정의
  const getCategories = (software: string) => {
    switch (software) {
      case 'excel':
        return [
          { id: 'all', name: 'すべて', color: 'bg-gray-100 text-gray-800' },
          { id: 'format', name: 'フォーマット', color: 'bg-blue-100 text-blue-800' },
          { id: 'navigation', name: '移動', color: 'bg-green-100 text-green-800' },
          { id: 'data', name: 'データ', color: 'bg-purple-100 text-purple-800' },
          { id: 'sheet', name: 'シート', color: 'bg-orange-100 text-orange-800' },
          { id: 'file', name: 'ファイル', color: 'bg-red-100 text-red-800' },
          { id: 'edit', name: '編集', color: 'bg-yellow-100 text-yellow-800' },
          { id: 'view', name: '表示', color: 'bg-indigo-100 text-indigo-800' },
          { id: 'insert', name: '挿入', color: 'bg-pink-100 text-pink-800' },
          { id: 'tools', name: 'ツール', color: 'bg-teal-100 text-teal-800' },
          { id: 'help', name: 'ヘルプ', color: 'bg-cyan-100 text-cyan-800' }
        ];
      case 'word':
        return [
          { id: 'all', name: 'すべて', color: 'bg-gray-100 text-gray-800' },
          { id: 'format', name: 'フォーマット', color: 'bg-blue-100 text-blue-800' },
          { id: 'navigation', name: '移動', color: 'bg-green-100 text-green-800' },
          { id: 'edit', name: '編集', color: 'bg-yellow-100 text-yellow-800' },
          { id: 'view', name: '表示', color: 'bg-indigo-100 text-indigo-800' },
          { id: 'insert', name: '挿入', color: 'bg-pink-100 text-pink-800' },
          { id: 'file', name: 'ファイル', color: 'bg-red-100 text-red-800' },
          { id: 'tools', name: 'ツール', color: 'bg-teal-100 text-teal-800' },
          { id: 'help', name: 'ヘルプ', color: 'bg-cyan-100 text-cyan-800' }
        ];
      case 'powerpoint':
        return [
          { id: 'all', name: 'すべて', color: 'bg-gray-100 text-gray-800' },
          { id: 'format', name: 'フォーマット', color: 'bg-blue-100 text-blue-800' },
          { id: 'navigation', name: '移動', color: 'bg-green-100 text-green-800' },
          { id: 'edit', name: '編集', color: 'bg-yellow-100 text-yellow-800' },
          { id: 'view', name: '表示', color: 'bg-indigo-100 text-indigo-800' },
          { id: 'insert', name: '挿入', color: 'bg-pink-100 text-pink-800' },
          { id: 'slide', name: 'スライド', color: 'bg-orange-100 text-orange-800' },
          { id: 'file', name: 'ファイル', color: 'bg-red-100 text-red-800' },
          { id: 'tools', name: 'ツール', color: 'bg-teal-100 text-teal-800' },
          { id: 'help', name: 'ヘルプ', color: 'bg-cyan-100 text-cyan-800' }
        ];
      case 'system':
        return [
          { id: 'all', name: 'すべて', color: 'bg-gray-100 text-gray-800' },
          { id: 'system', name: 'システム', color: 'bg-gray-100 text-gray-800' },
          { id: 'file', name: 'ファイル', color: 'bg-red-100 text-red-800' },
          { id: 'edit', name: '編集', color: 'bg-yellow-100 text-yellow-800' },
          { id: 'navigation', name: '移動', color: 'bg-green-100 text-green-800' },
          { id: 'view', name: '表示', color: 'bg-indigo-100 text-indigo-800' },
          { id: 'tools', name: 'ツール', color: 'bg-teal-100 text-teal-800' }
        ];
      default:
        return [
          { id: 'all', name: 'すべて', color: 'bg-gray-100 text-gray-800' }
        ];
    }
  };

  const categories = getCategories(software);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
              'hover:scale-105 active:scale-95',
              selectedCategory === category.id
                ? `${category.color} shadow-md`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// 카테고리 이름 매핑 함수를 export
export const getCategoryName = (categoryId: string) => {
  const categoryNames = {
    all: 'すべて',
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
    system: 'システム',
    slide: 'スライド'
  };
  return categoryNames[categoryId as keyof typeof categoryNames] || categoryId;
};

export default CategoryFilter;

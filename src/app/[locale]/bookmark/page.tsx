'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ShortcutCard from '@/components/ShortcutCard';
import { shortcuts } from '@/data/shortcuts';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { Star, Filter } from 'lucide-react';

export default function BookmarkPage() {
  const { dictionary } = useLocaleContext();
  const tCommon = dictionary.common;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { favorites } = useFavorites();

  // 즐겨찾기된 단축키만 필터링 (플랫폼별)
  const favoriteShortcuts = useMemo(() => {
    return shortcuts.filter(shortcut => 
      favorites.includes(shortcut.id)
    ).map(shortcut => ({
      ...shortcut,
      platform: platform as 'windows' | 'mac',
      keys: platform === 'windows' ? [shortcut.windows] : [shortcut.mac]
    }));
  }, [favorites, platform]);

  const getCategoryName = useCallback((category: string) => {
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
  }, [tCommon]);

  // 카테고리별 필터링
  const filteredShortcuts = useMemo(() => {
    let filtered = favoriteShortcuts;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(shortcut => shortcut.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(shortcut =>
        shortcut.name.toLowerCase().includes(query) ||
        shortcut.description.toLowerCase().includes(query) ||
        shortcut.keys.some(key => key.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [favoriteShortcuts, selectedCategory, searchQuery]);

  // 사용 가능한 카테고리 목록
  const availableCategories = useMemo(() => {
    const categories = new Set(favoriteShortcuts.map(s => s.category));
    return Array.from(categories).map(category => ({
      id: category,
      name: getCategoryName(category)
    }));
  }, [favoriteShortcuts, getCategoryName]);

  const categories = [
    { id: 'all', name: tCommon.all },
    ...availableCategories
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
            <h1 className="text-3xl font-bold text-gray-900">お気に入りショートカット</h1>
          </div>
          <p className="text-gray-600 text-lg">
            保存したショートカットを効率的に管理できます
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {favorites.length} 個のショートカットが保存されています
          </div>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              お気に入りショートカットがありません
            </h2>
            <p className="text-gray-500 mb-6">
              ショートカットカードの星マークをクリックして、お気に入りに追加してください
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/os"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                OSショートカットを見る
              </Link>
              <Link
                href="/office/excel"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Excelショートカットを見る
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* 검색 및 필터 섹션 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* 검색바 */}
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    category="system"
                  />
                </div>
                
                {/* 플랫폼 선택 탭 */}
                <div className="flex gap-2">
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
              </div>

              {/* 카테고리 필터 */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">カテゴリ:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 단축키 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShortcuts.map((shortcut) => (
                <ShortcutCard key={shortcut.id} shortcut={shortcut} platform={platform} />
              ))}
            </div>

            {filteredShortcuts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">該当するショートカットが見つかりませんでした。</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

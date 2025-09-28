'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import ShortcutCard from '@/components/ShortcutCard';
import FunctionGenerator from '@/components/FunctionGenerator';
import Header from '@/components/Header';
import CategorySidebar from '@/components/CategorySidebar';
import { shortcuts } from '@/data/shortcuts';

export default function ExcelPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState<'shortcuts' | 'functions'>('shortcuts');
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');

  // Excel 관련 단축키만 필터링 (플랫폼별)
  const excelShortcuts = useMemo(() => {
    return shortcuts.filter(shortcut => 
      shortcut.software === 'excel'
    ).map(shortcut => ({
      ...shortcut,
      platform: platform as 'windows' | 'mac',
      keys: platform === 'windows' ? [shortcut.windows] : [shortcut.mac]
    }));
  }, [platform]);

  // 카테고리별 필터링
  const filteredShortcuts = useMemo(() => {
    let filtered = excelShortcuts;
    
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
  }, [excelShortcuts, selectedCategory, searchQuery]);

  const categories = [
    { id: 'navigation', name: 'ナビゲーション' },
    { id: 'editing', name: '編集' },
    { id: 'formatting', name: '書式設定' },
    { id: 'formulas', name: '数式' },
    { id: 'data', name: 'データ' },
    { id: 'view', name: '表示' },
    { id: 'file', name: 'ファイル' },
    { id: 'all', name: 'すべて' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="office" />
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* Page Description */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Excel のショートカット & 関数</h2>
              <p className="text-lg text-gray-600 mb-6">
                Excel で作業効率を大幅に向上させるショートカットと関数を学びましょう。
                データ分析、計算、書式設定など、Excel の全機能を効率的に活用できます。
              </p>
            </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('shortcuts')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'shortcuts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                ショートカット
              </button>
              <button
                onClick={() => setActiveTab('functions')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'functions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                関数ジェネレーター
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'shortcuts' && (
          <>
            {/* Platform Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                <button
                  onClick={() => setPlatform('windows')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    platform === 'windows'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Windows
                </button>
                <button
                  onClick={() => setPlatform('mac')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    platform === 'mac'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Mac
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <SearchBar 
                    value={searchQuery}
                    onChange={setSearchQuery}
                    category="excel"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Shortcuts Grid */}
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

        {activeTab === 'functions' && (
          <FunctionGenerator />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500">© 2024 LearnShortcuts. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-500 hover:text-gray-900">サービス概要</a>
              <a href="/privacy" className="text-gray-500 hover:text-gray-900">プライバシーポリシー</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
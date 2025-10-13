'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategorySidebar from '@/components/CategorySidebar';
import SearchBar from '@/components/SearchBar';
import ShortcutCard from '@/components/ShortcutCard';
import { shortcuts } from '@/data/shortcuts';
import { useLocaleContext } from '@/contexts/LocaleContext';

export default function SafariPage() {
  const { dictionary } = useLocaleContext();
  const tCommon = dictionary.common;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredShortcuts = useMemo(() => {
    return shortcuts
      .filter(shortcut => shortcut.software === 'safari')
      .filter(shortcut => {
        if (selectedCategory === 'all') return true;
        return shortcut.category === selectedCategory;
      })
      .filter(shortcut => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          shortcut.name.toLowerCase().includes(query) ||
          shortcut.description.toLowerCase().includes(query) ||
          shortcut.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
      })
      .map(shortcut => ({
        ...shortcut,
        platform,
        keys: platform === 'windows' ? shortcut.windows.split(' + ') : shortcut.mac.split(' + ')
      }));
  }, [searchQuery, platform, selectedCategory]);

  const categories = useMemo(() => {
    const categorySet = new Set(shortcuts.filter(s => s.software === 'safari').map(s => s.category));
    return ['all', ...Array.from(categorySet)];
  }, []);

  const getCategoryName = (category: string) => {
    const categoryNames: Record<string, string> = {
      all: tCommon.all,
      tabs: tCommon.tabs,
      browser: tCommon.browser,
      bookmarks: tCommon.bookmarks,
      navigation: tCommon.navigation,
      view: tCommon.view,
      edit: tCommon.edit,
      tools: tCommon.tools,
      help: tCommon.help
    };
    return categoryNames[category] || category;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar mainCategory="browser" />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Safari</h1>
              <p className="text-gray-600">Safariの便利なショートカットキーを学びましょう</p>
            </div>

            {/* Platform Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setPlatform('windows')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    platform === 'windows'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Windows
                </button>
                <button
                  onClick={() => setPlatform('mac')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    platform === 'mac'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Mac
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                category="safari"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {getCategoryName(category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Shortcuts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredShortcuts.map(shortcut => (
                <ShortcutCard
                  key={shortcut.id}
                  shortcut={shortcut}
                  platform={platform}
                />
              ))}
            </div>

            {filteredShortcuts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">{tCommon.noResults}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

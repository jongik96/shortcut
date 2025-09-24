'use client';

import { useState, useMemo } from 'react';
import { Keyboard, FunctionSquare, Star, Menu, X } from 'lucide-react';
import { shortcuts } from '@/data/shortcuts';
import { Platform, Software } from '@/types/shortcuts';
import ShortcutCard from '@/components/ShortcutCard';
import SearchBar from '@/components/SearchBar';
import Sidebar from '@/components/Sidebar';
import FunctionGenerator from '@/components/FunctionGenerator';
import { useFavorites } from '@/hooks/useFavorites';
import { copyToClipboard } from '@/lib/utils';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [platform, setPlatform] = useState<Platform>('windows');
  const [software, setSoftware] = useState<Software>('excel');
  const [activeTab, setActiveTab] = useState<'shortcuts' | 'favorites'>('shortcuts');
  const [excelTab, setExcelTab] = useState<'shortcuts' | 'function-generator'>('shortcuts');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // 検索フィルタリング
  const filteredShortcuts = useMemo(() => {
    let filtered = shortcuts.filter(shortcut => 
      shortcut.software === software
    );
    
    if (searchQuery) {
      filtered = filtered.filter(shortcut => 
        shortcut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    return filtered;
  }, [searchQuery, software]);

  // お気に入りフィルタリング
  const favoriteShortcuts = useMemo(() => {
    return shortcuts.filter(shortcut => favorites.includes(shortcut.id));
  }, [favorites]);

  const handleCopy = (text: string) => {
    copyToClipboard(text);
    // TODO: トースト通知追加
  };

  // ソフトウェアが変更されたときにExcelタブをリセット
  const handleSoftwareChange = (newSoftware: Software) => {
    setSoftware(newSoftware);
    if (newSoftware !== 'excel') {
      setExcelTab('shortcuts');
    }
  };

  const displayShortcuts = activeTab === 'favorites' ? favoriteShortcuts : filteredShortcuts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                <Keyboard className="h-6 w-6 text-white" />
              </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">LearnShortcuts.dev</h1>
            </div>
            
            <nav className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-4">
                <button
                  onClick={() => setActiveTab('shortcuts')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'shortcuts'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Keyboard size={16} />
                  ショートカット
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Star size={16} />
                  <span className="hidden lg:inline">お気に入り</span> ({favorites.length})
                </button>
              </div>
              
              {/* モバイルメニュー */}
              <div className="sm:hidden flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('shortcuts')}
                  className={`p-2 rounded-md transition-colors ${
                    activeTab === 'shortcuts'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title="ショートカット"
                >
                  <Keyboard size={18} />
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`relative p-2 rounded-md transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title="お気に入り"
                >
                  <Star size={18} />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <Sidebar
            platform={platform}
            software={software}
            onPlatformChange={setPlatform}
            onSoftwareChange={handleSoftwareChange}
            onClose={() => setSidebarOpen(false)}
            className="fixed lg:relative z-50 lg:z-auto"
          />
        )}

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${sidebarOpen ? 'lg:ml-0' : ''}`}>
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            {activeTab === 'shortcuts' && (
              <div className="space-y-6">
                {/* Excel用のタブ */}
                {software === 'excel' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExcelTab('shortcuts')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        excelTab === 'shortcuts'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Keyboard size={16} className="inline mr-2" />
                      ショートカット
                    </button>
                    <button
                      onClick={() => setExcelTab('function-generator')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        excelTab === 'function-generator'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <FunctionSquare size={16} className="inline mr-2" />
                      関数ジェネレーター
                    </button>
                  </div>
                )}

                {/* 検索 */}
                <div className="w-full">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="ショートカットを検索... (例: セル結合、太字)"
                  />
                </div>

                {/* Excel用のコンテンツ */}
                {software === 'excel' ? (
                  excelTab === 'shortcuts' ? (
                    <>
                      {/* 結果統計 */}
                      <div className="text-sm text-gray-600">
                        {searchQuery 
                          ? `検索結果: "${searchQuery}" - ${filteredShortcuts.length}件`
                          : `Excel ショートカット: ${filteredShortcuts.length}件`
                        }
                      </div>

                      {/* ショートカット一覧 */}
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {displayShortcuts.map((shortcut) => (
                          <ShortcutCard
                            key={shortcut.id}
                            shortcut={shortcut}
                            platform={platform}
                            isFavorite={isFavorite(shortcut.id)}
                            onToggleFavorite={toggleFavorite}
                            onCopy={handleCopy}
                          />
                        ))}
                      </div>

                      {displayShortcuts.length === 0 && (
                        <div className="text-center py-12">
                          <Keyboard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            検索結果が見つかりません
                          </h3>
                          <p className="text-gray-600">
                            別のキーワードで検索してみてください
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <FunctionGenerator />
                  )
                ) : (
                  <>
                    {/* 結果統計 */}
                    <div className="text-sm text-gray-600">
                      {searchQuery 
                        ? `検索結果: "${searchQuery}" - ${filteredShortcuts.length}件`
                        : `${software === 'word' ? 'Word' : software === 'powerpoint' ? 'PowerPoint' : 'システム'} ショートカット: ${filteredShortcuts.length}件`
                      }
                    </div>

                    {/* ショートカット一覧 */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {displayShortcuts.map((shortcut) => (
                        <ShortcutCard
                          key={shortcut.id}
                          shortcut={shortcut}
                          platform={platform}
                          isFavorite={isFavorite(shortcut.id)}
                          onToggleFavorite={toggleFavorite}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>

                    {displayShortcuts.length === 0 && (
                      <div className="text-center py-12">
                        <Keyboard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          検索結果が見つかりません
                        </h3>
                        <p className="text-gray-600">
                          別のキーワードで検索してみてください
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    お気に入り ショートカット
                  </h2>
                  <span className="text-sm text-gray-600">
                    {favorites.length}個保存済み
                  </span>
                </div>

                {favoriteShortcuts.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {favoriteShortcuts.map((shortcut) => (
                      <ShortcutCard
                        key={shortcut.id}
                        shortcut={shortcut}
                        platform={platform}
                        isFavorite={true}
                        onToggleFavorite={toggleFavorite}
                        onCopy={handleCopy}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      お気に入りのショートカットがありません
                    </h3>
                    <p className="text-gray-600">
                      よく使うショートカットに星を追加してみてください
                    </p>
                  </div>
                )}
              </div>
            )}
          </main>

          {/* フッター */}
          <footer className="bg-white border-t mt-16">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-600">
                  <p>© 2025 LearnShortcuts.dev。全著作権所有。</p>
                  <p className="text-sm mt-2">より効率的な作業のためのショートカット学習サイト</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
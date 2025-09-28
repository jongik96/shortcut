'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (shortcutId: string) => void;
  removeFavorite: (shortcutId: string) => void;
  toggleFavorite: (shortcutId: string) => void;
  isFavorite: (shortcutId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // 로컬 스토리지에서 즐겨찾기 데이터 로드
  useEffect(() => {
    const savedFavorites = localStorage.getItem('shortcut-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
      }
    }
  }, []);

  // 즐겨찾기 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('shortcut-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (shortcutId: string) => {
    setFavorites(prev => {
      if (!prev.includes(shortcutId)) {
        return [...prev, shortcutId];
      }
      return prev;
    });
  };

  const removeFavorite = (shortcutId: string) => {
    setFavorites(prev => prev.filter(id => id !== shortcutId));
  };

  const toggleFavorite = (shortcutId: string) => {
    setFavorites(prev => {
      if (prev.includes(shortcutId)) {
        return prev.filter(id => id !== shortcutId);
      } else {
        return [...prev, shortcutId];
      }
    });
  };

  const isFavorite = (shortcutId: string) => {
    return favorites.includes(shortcutId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

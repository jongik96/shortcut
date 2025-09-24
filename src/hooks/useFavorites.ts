'use client';

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'excel-shortcuts-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // 로컬 스토리지에서 즐겨찾기 로드
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage:', error);
    }
  }, []);

  // 즐겨찾기 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage:', error);
    }
  }, [favorites]);

  const toggleFavorite = (shortcutId: string) => {
    setFavorites(prev => 
      prev.includes(shortcutId)
        ? prev.filter(id => id !== shortcutId)
        : [...prev, shortcutId]
    );
  };

  const isFavorite = (shortcutId: string) => {
    return favorites.includes(shortcutId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites
  };
};


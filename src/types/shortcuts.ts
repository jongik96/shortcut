export interface Shortcut {
  id: string;
  name: string;
  description: string;
  category: 'format' | 'navigation' | 'data' | 'sheet' | 'file' | 'edit' | 'view' | 'insert' | 'tools' | 'help' | 'system';
  software: 'excel' | 'word' | 'powerpoint' | 'system';
  windows: string;
  mac: string;
  keywords: string[];
}

export interface FunctionSuggestion {
  id: string;
  name: string;
  formula: string;
  description: string;
  example: string;
  result: string;
  alternatives?: string[];
}

export interface FavoriteShortcut {
  id: string;
  shortcutId: string;
  addedAt: string;
}

export type Platform = 'windows' | 'mac';
export type Software = 'excel' | 'word' | 'powerpoint' | 'system';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  children?: SidebarItem[];
}

export interface Shortcut {
  id: string;
  name: string;
  description: string;
  category: 'format' | 'navigation' | 'data' | 'sheet' | 'file' | 'edit' | 'view' | 'insert' | 'tools' | 'help' | 'system' | 'slides' | 'presentation' | 'text' | 'table' | 'browser' | 'tabs' | 'bookmarks' | 'design' | 'layers' | 'tools' | 'communication' | 'channels';
  software: 'excel' | 'word' | 'powerpoint' | 'system' | 'docs' | 'sheets' | 'slides' | 'chrome' | 'safari' | 'edge' | 'photoshop' | 'illustrator' | 'slack' | 'discord';
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
  visualExample?: {
    inputCells: Array<{cell: string, value: string | number | boolean}>;
    outputCell: {cell: string, value: string | number | boolean};
    description: string;
  };
  category: 'math' | 'text' | 'date' | 'logical' | 'lookup' | 'statistical' | 'financial' | 'engineering' | 'database' | 'information';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  usageTips?: string[];
  commonMistakes?: string[];
  relatedFunctions?: string[];
  syntaxNotes?: string;
}

export interface FavoriteShortcut {
  id: string;
  shortcutId: string;
  addedAt: string;
}

export type Platform = 'windows' | 'mac';
export type Software = 'excel' | 'word' | 'powerpoint' | 'system' | 'docs' | 'sheets' | 'slides' | 'chrome' | 'safari' | 'edge' | 'photoshop' | 'illustrator' | 'slack' | 'discord';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  children?: SidebarItem[];
}

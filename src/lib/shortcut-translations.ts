import { Locale } from '@/i18n/config';
import { Shortcut } from '@/types/shortcuts';

// 번역 파일들을 동적으로 로드
import shortcutsJa from '../../messages/shortcuts-ja.json';
import shortcutsEn from '../../messages/shortcuts-en.json';
import shortcutsKo from '../../messages/shortcuts-ko.json';
import shortcutsAr from '../../messages/shortcuts-ar.json';

const translations: Record<Locale, any> = {
  ja: shortcutsJa.shortcuts,
  en: shortcutsEn.shortcuts,
  ko: shortcutsKo.shortcuts,
  ar: shortcutsAr.shortcuts,
};

export function getShortcutTranslation(shortcut: Shortcut, locale: Locale) {
  const translation = translations[locale]?.[shortcut.id];
  
  if (!translation) {
    // 번역이 없으면 원본 (일본어) 사용
    return {
      name: shortcut.name,
      description: shortcut.description,
    };
  }
  
  return {
    name: translation.name,
    description: translation.description,
  };
}

export function translateShortcut(shortcut: Shortcut, locale: Locale): Shortcut {
  const translation = getShortcutTranslation(shortcut, locale);
  
  return {
    ...shortcut,
    name: translation.name,
    description: translation.description,
  };
}


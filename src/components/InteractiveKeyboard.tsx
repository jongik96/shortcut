'use client';

import { useState } from 'react';
import { Shortcut } from '@/types/shortcuts';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { getShortcutTranslation } from '@/lib/shortcut-translations';

interface InteractiveKeyboardProps {
  shortcut: Shortcut;
  platform: 'windows' | 'mac';
  shortcutText: string;
}

interface KeyProps {
  keyName: string;
  isPressed: boolean;
  onClick: () => void;
  className?: string;
}

const Key = ({ keyName, isPressed, onClick, className = '' }: KeyProps) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
      ${isPressed 
        ? 'bg-blue-500 text-white shadow-lg transform scale-95' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md'
      }
      ${className}
    `}
  >
    {keyName}
  </button>
);

const InteractiveKeyboard = ({ shortcut, shortcutText }: InteractiveKeyboardProps) => {
  const { locale, dictionary } = useLocaleContext();
  const translated = getShortcutTranslation(shortcut, locale);
  const t = dictionary.shortcutDetail;
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  // 단축키 텍스트를 파싱하여 키 배열로 변환
  const parseShortcutKeys = (shortcutText: string): string[] => {
    return shortcutText
      .split(' + ')
      .map(key => key.trim())
      .filter(key => key.length > 0);
  };

  const keys = parseShortcutKeys(shortcutText);

  const handleKeyClick = (keyName: string) => {
    setSelectedKey(keyName);
    
    // 키를 눌렀다 떼는 애니메이션
    setPressedKeys(prev => [...prev, keyName]);
    setTimeout(() => {
      setPressedKeys(prev => prev.filter(key => key !== keyName));
    }, 200);
  };

  const getKeyDescription = (keyName: string): string => {
    const keyDescriptions: { [key: string]: string } = {
      'Ctrl': t.ctrlDesc,
      '⌘': t.cmdDesc,
      'Alt': t.altDesc,
      'Option': t.altDesc,
      'Shift': t.shiftDesc,
      'Space': t.spaceDesc,
      'Enter': t.enterDesc,
      'Tab': t.tabDesc,
      'Esc': t.escDesc,
      'Delete': t.delDesc,
      'Backspace': t.delDesc,
      'Home': t.homeDesc,
      'End': t.endDesc,
    };

    return keyDescriptions[keyName] || `${keyName}`;
  };

  return (
    <div className="space-y-6">
      {/* 키보드 레이아웃 */}
      <div className="bg-gray-100 rounded-xl p-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {keys.map((key, index) => (
            <div key={index} className="flex items-center">
              <Key
                keyName={key}
                isPressed={pressedKeys.includes(key)}
                onClick={() => handleKeyClick(key)}
                className="min-w-[60px]"
              />
              {index < keys.length - 1 && (
                <span className="mx-2 text-gray-500 font-bold">+</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 선택된 키 설명 */}
      {selectedKey && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">
            {selectedKey} キーの説明
          </h3>
          <p className="text-blue-800">
            {getKeyDescription(selectedKey)}
          </p>
        </div>
      )}

      {/* 단축키 설명 */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">
          {translated.name} の使い方
        </h3>
        <p className="text-gray-700 mb-3">
          {translated.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">手順:</span>
          {keys.map((key, index) => (
            <span key={index} className="flex items-center">
              <span className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">
                {key}
              </span>
              {index < keys.length - 1 && (
                <span className="mx-1">+</span>
              )}
            </span>
          ))}
          <span className="ml-2">を順番に押す</span>
        </div>
      </div>

    </div>
  );
};

export default InteractiveKeyboard;

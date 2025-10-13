'use client';

import { Shortcut } from '@/types/shortcuts';
import Image from 'next/image';
import { useLocaleContext } from '@/contexts/LocaleContext';

interface KeyboardAnimationProps {
  shortcut: Shortcut;
  platform: 'windows' | 'mac';
  shortcutText: string;
}

interface KeyPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  key?: string;
}

const KeyboardAnimation = ({ platform, shortcutText }: KeyboardAnimationProps) => {
  const { dictionary } = useLocaleContext();
  const t = dictionary.shortcutDetail;
  // 단축키 텍스트를 파싱하여 키 배열로 변환
  const parseShortcutKeys = (shortcutText: string): string[] => {
    return shortcutText
      .split(' + ')
      .map(key => {
        const trimmed = key.trim();
        // 키 이름 정규화
        const normalizedKey = normalizeKeyName(trimmed);
        return normalizedKey;
      })
      .filter(key => key.length > 0);
  };

  // 키 이름을 정규화하는 함수
  const normalizeKeyName = (key: string): string => {
    const keyMap: { [key: string]: string } = {
      // 방향키 정규화
      'ArrowUp': '↑',
      'ArrowDown': '↓', 
      'ArrowLeft': '←',
      'ArrowRight': '→',
      'Up': '↑',
      'Down': '↓',
      'Left': '←',
      'Right': '→',
      
      // 특수 키 정규화
      'Control': 'Ctrl',
      'Command': '⌘',
      'Option': '⌥',
      'Alt': 'Alt',
      'Meta': platform === 'mac' ? '⌘' : 'Win',
      
      // 기타 정규화
      'Return': 'Enter',
      'BackSpace': 'Backspace',
      'PageUp': 'Page Up',
      'PageDown': 'Page Down',
    };
    
    return keyMap[key] || key;
  };

  const keys = parseShortcutKeys(shortcutText);

  // 키보드에서 각 키의 위치 정의 (SVG 좌표 기준)
  const getKeyPositions = (): { [key: string]: KeyPosition } => {
    const positions: { [key: string]: KeyPosition } = {};
    
    // 공통 키 위치 (Windows/Mac 공통)
    const commonKeys = {
      // 알파벳 키
      'A': { x: 80, y: 125, width: 40, height: 25 },
      'B': { x: 290, y: 160, width: 40, height: 25 },
      'C': { x: 190, y: 160, width: 40, height: 25 },
      'D': { x: 180, y: 125, width: 40, height: 25 },
      'E': { x: 190, y: 90, width: 40, height: 25 },
      'F': { x: 230, y: 125, width: 40, height: 25 },
      'G': { x: 280, y: 125, width: 40, height: 25 },
      'H': { x: 330, y: 125, width: 40, height: 25 },
      'I': { x: 440, y: 90, width: 40, height: 25 },
      'J': { x: 380, y: 125, width: 40, height: 25 },
      'K': { x: 430, y: 125, width: 40, height: 25 },
      'L': { x: 480, y: 125, width: 40, height: 25 },
      'M': { x: 390, y: 160, width: 40, height: 25 },
      'N': { x: 340, y: 160, width: 40, height: 25 },
      'O': { x: 490, y: 90, width: 40, height: 25 },
      'P': { x: 540, y: 90, width: 40, height: 25 },
      'Q': { x: 90, y: 90, width: 40, height: 25 },
      'R': { x: 240, y: 90, width: 40, height: 25 },
      'S': { x: 130, y: 125, width: 40, height: 25 },
      'T': { x: 290, y: 90, width: 40, height: 25 },
      'U': { x: 390, y: 90, width: 40, height: 25 },
      'V': { x: 240, y: 160, width: 40, height: 25 },
      'W': { x: 140, y: 90, width: 40, height: 25 },
      'X': { x: 140, y: 160, width: 40, height: 25 },
      'Y': { x: 340, y: 90, width: 40, height: 25 },
      'Z': { x: 90, y: 160, width: 40, height: 25 },
      
      // 숫자 키
      '0': { x: 590, y: 90, width: 40, height: 25 },
      '1': { x: 90, y: 55, width: 40, height: 25 },
      '2': { x: 140, y: 55, width: 40, height: 25 },
      '3': { x: 190, y: 55, width: 40, height: 25 },
      '4': { x: 240, y: 55, width: 40, height: 25 },
      '5': { x: 290, y: 55, width: 40, height: 25 },
      '6': { x: 340, y: 55, width: 40, height: 25 },
      '7': { x: 390, y: 55, width: 40, height: 25 },
      '8': { x: 440, y: 55, width: 40, height: 25 },
      '9': { x: 490, y: 55, width: 40, height: 25 },
      
      // 특수 키
      'Space': { x: 200, y: 195, width: 200, height: 25 },
      'Enter': { x: 630, y: 125, width: 60, height: 25 },
      'Tab': { x: 20, y: 90, width: 60, height: 25 },
      'Shift': { x: 20, y: 160, width: 60, height: 25 },
      'Delete': { x: 670, y: 55, width: 60, height: 25 },
      'Backspace': { x: 670, y: 55, width: 60, height: 25 },
      'Esc': { x: 20, y: 20, width: 40, height: 25 },
      
      // 방향키
      '↑': { x: 580, y: 160, width: 40, height: 25 },
      '↓': { x: 580, y: 195, width: 40, height: 25 },
      '←': { x: 540, y: 195, width: 40, height: 25 },
      '→': { x: 620, y: 195, width: 40, height: 25 },
      'Up': { x: 580, y: 160, width: 40, height: 25 },
      'Down': { x: 580, y: 195, width: 40, height: 25 },
      'Left': { x: 540, y: 195, width: 40, height: 25 },
      'Right': { x: 620, y: 195, width: 40, height: 25 },
      
      // 기타 특수 키
      'Home': { x: 540, y: 160, width: 40, height: 25 },
      'End': { x: 620, y: 160, width: 40, height: 25 },
      'Page Up': { x: 540, y: 125, width: 40, height: 25 },
      'Page Down': { x: 620, y: 125, width: 40, height: 25 },
      'Insert': { x: 670, y: 90, width: 40, height: 25 },
      
      // F키들
      'F1': { x: 70, y: 20, width: 40, height: 25 },
      'F2': { x: 120, y: 20, width: 40, height: 25 },
      'F3': { x: 170, y: 20, width: 40, height: 25 },
      'F4': { x: 220, y: 20, width: 40, height: 25 },
      'F5': { x: 270, y: 20, width: 40, height: 25 },
      'F6': { x: 320, y: 20, width: 40, height: 25 },
      'F7': { x: 370, y: 20, width: 40, height: 25 },
      'F8': { x: 420, y: 20, width: 40, height: 25 },
      'F9': { x: 470, y: 20, width: 40, height: 25 },
      'F10': { x: 520, y: 20, width: 40, height: 25 },
      'F11': { x: 570, y: 20, width: 40, height: 25 },
      'F12': { x: 620, y: 20, width: 40, height: 25 },
    };

    // 플랫폼별 특수 키
    if (platform === 'windows') {
      positions['Ctrl'] = { x: 20, y: 195, width: 50, height: 25 };
      positions['Alt'] = { x: 140, y: 195, width: 50, height: 25 };
      positions['Win'] = { x: 80, y: 195, width: 50, height: 25 };
    } else {
      positions['⌘'] = { x: 20, y: 195, width: 50, height: 25 };
      positions['⌥'] = { x: 80, y: 195, width: 50, height: 25 };
      positions['⌃'] = { x: 140, y: 195, width: 50, height: 25 };
    }

    return { ...commonKeys, ...positions };
  };

  const keyPositions = getKeyPositions();


  const keyboardImage = platform === 'windows' ? '/keyboard-windows.svg' : '/keyboard-mac.svg';

  return (
    <div className="space-y-6">
      {/* 키보드 이미지와 하이라이트 */}
      <div className="relative bg-gray-100 rounded-xl p-6 overflow-hidden">
        <div className="relative">
          <Image
            src={keyboardImage}
            alt={`${platform} keyboard`}
            width={800}
            height={300}
            className="w-full h-auto"
          />
          
          {/* 하이라이트된 키들 */}
          {keys.map((key, index) => {
            const position = keyPositions[key];
            if (!position) {
              console.warn(`Key "${key}" not found in keyPositions. Available keys:`, Object.keys(keyPositions));
              return null;
            }
            
            return (
              <div
                key={`${key}-${index}`}
                className="absolute bg-blue-500 bg-opacity-80 border-2 border-blue-600 rounded"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  width: `${position.width}px`,
                  height: `${position.height}px`
                }}
              >
                <div className="flex items-center justify-center h-full text-white font-bold text-sm">
                  {key}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 키 설명 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">{t.keysToPress}</h3>
        <div className="space-y-3">
          {keys.map((key, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-blue-500 text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  {key} {t.key}
                </div>
                <div className="text-sm text-gray-600">
                  {index === 0 ? t.firstKey : 
                   index === keys.length - 1 ? t.lastKey :
                   t.holdKey}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 플랫폼별 특별 팁 */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-3">
          {platform === 'windows' ? 'Windows' : 'Mac'} での実践的なコツ
        </h3>
        <div className="text-green-800 space-y-2">
          {platform === 'windows' ? (
            <>
              <p>• <strong>Ctrl + C</strong>: 左手の小指でCtrlを押しながら、人差し指でCを押します</p>
              <p>• <strong>Ctrl + V</strong>: 左手の小指でCtrlを押しながら、人差し指でVを押します</p>
              <p>• <strong>Ctrl + Z</strong>: 左手の小指でCtrlを押しながら、薬指でZを押します</p>
            </>
          ) : (
            <>
              <p>• <strong>⌘ + C</strong>: 左手の親指で⌘を押しながら、人差し指でCを押します</p>
              <p>• <strong>⌘ + V</strong>: 左手の親指で⌘を押しながら、人差し指でVを押します</p>
              <p>• <strong>⌘ + Z</strong>: 左手の親指で⌘を押しながら、薬指でZを押します</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyboardAnimation;

'use client';

import { useState } from 'react';
import { Shortcut } from '@/types/shortcuts';

interface ShortcutAnimationProps {
  shortcut: Shortcut;
  platform: 'windows' | 'mac';
  shortcutText: string;
}

interface AnimatedKeyProps {
  keyName: string;
  isActive: boolean;
  delay: number;
  className?: string;
}

const AnimatedKey = ({ keyName, isActive, delay, className = '' }: AnimatedKeyProps) => (
  <div className={`flex items-center ${className}`}>
    <div
      className={`
        px-4 py-3 rounded-lg font-medium text-lg transition-all duration-300
        ${isActive 
          ? 'bg-blue-500 text-white shadow-lg transform scale-110' 
          : 'bg-gray-200 text-gray-800'
        }
      `}
      style={{
        animationDelay: `${delay}ms`,
        animation: isActive ? 'keyPress 0.3s ease-in-out' : 'none'
      }}
    >
      {keyName}
    </div>
  </div>
);

const ShortcutAnimation = ({ platform, shortcutText }: ShortcutAnimationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // 단축키 텍스트를 파싱하여 키 배열로 변환
  const parseShortcutKeys = (shortcutText: string): string[] => {
    return shortcutText
      .split(' + ')
      .map(key => key.trim())
      .filter(key => key.length > 0);
  };

  const keys = parseShortcutKeys(shortcutText);

  const playAnimation = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    // 각 키를 순차적으로 활성화
    keys.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, index * 500);
    });

    // 애니메이션 완료 후 리셋
    setTimeout(() => {
      setIsPlaying(false);
      setCurrentStep(0);
    }, keys.length * 500 + 1000);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="space-y-6">
      {/* 애니메이션 컨트롤 */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={playAnimation}
          disabled={isPlaying}
          className={`
            px-6 py-3 rounded-lg font-medium transition-colors
            ${isPlaying 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }
          `}
        >
          {isPlaying ? '再生中...' : 'アニメーション再生'}
        </button>
        <button
          onClick={resetAnimation}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          リセット
        </button>
      </div>

      {/* 애니메이션 키보드 */}
      <div className="bg-gray-100 rounded-xl p-8">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {keys.map((key, index) => (
            <div key={index} className="flex items-center">
              <AnimatedKey
                keyName={key}
                isActive={currentStep > index}
                delay={index * 100}
              />
              {index < keys.length - 1 && (
                <span className="mx-3 text-gray-500 font-bold text-xl">+</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 단계별 설명 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">ステップバイステップ</h3>
        <div className="space-y-3">
          {keys.map((key, index) => (
            <div 
              key={index}
              className={`
                flex items-center gap-3 p-3 rounded-lg transition-colors
                ${currentStep > index 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-gray-50'
                }
              `}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${currentStep > index 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-300 text-gray-600'
                }
              `}>
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  {key} キーを押す
                </div>
                <div className="text-sm text-gray-600">
                  {index === 0 ? '最初のキーを押し下げます' : 
                   index === keys.length - 1 ? '最後のキーを押してショートカットを完了します' :
                   'キーを押したまま次のキーに進みます'}
                </div>
              </div>
              {currentStep > index && (
                <div className="text-blue-500">
                  ✓
                </div>
              )}
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

      {/* CSS 애니메이션 스타일 */}
      <style jsx>{`
        @keyframes keyPress {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ShortcutAnimation;

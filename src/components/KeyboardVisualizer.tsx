'use client';

import { Shortcut, Platform } from '@/types/shortcuts';
import { cn } from '@/lib/utils';

interface KeyboardVisualizerProps {
  shortcut: Shortcut;
  platform: Platform;
  className?: string;
}

const KeyboardVisualizer = ({ shortcut, platform, className }: KeyboardVisualizerProps) => {
  const shortcutKeys = platform === 'windows' 
    ? shortcut.windows.split(' + ')
    : shortcut.mac.split(' + ');

  const getKeyStyle = (key: string) => {
    const isPressed = shortcutKeys.includes(key);
    return cn(
      'px-2 py-1 text-xs font-mono border rounded transition-all duration-200',
      isPressed 
        ? 'bg-blue-500 text-white border-blue-600 shadow-lg transform scale-105' 
        : 'bg-gray-100 text-gray-700 border-gray-300'
    );
  };

  const renderKey = (key: string, index: number) => (
    <span key={index} className={getKeyStyle(key)}>
      {key}
    </span>
  );

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-sm text-gray-600">
        {platform === 'windows' ? 'Windows:' : 'Mac:'}
      </span>
      <div className="flex items-center gap-1">
        {shortcutKeys.map((key, index) => (
          <div key={index} className="flex items-center">
            {renderKey(key, index)}
            {index < shortcutKeys.length - 1 && (
              <span className="mx-1 text-gray-400">+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardVisualizer;

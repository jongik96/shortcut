'use client';

import { Platform } from '@/types/shortcuts';
import { Monitor, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformToggleProps {
  platform: Platform;
  onPlatformChange: (platform: Platform) => void;
  className?: string;
}

const PlatformToggle = ({ platform, onPlatformChange, className }: PlatformToggleProps) => {
  return (
    <div className={cn('flex items-center bg-gray-100 rounded-lg p-1', className)}>
      <button
        onClick={() => onPlatformChange('windows')}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
          platform === 'windows'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        <Monitor size={16} />
        Windows
      </button>
      <button
        onClick={() => onPlatformChange('mac')}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
          platform === 'mac'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        <Laptop size={16} />
        Mac
      </button>
    </div>
  );
};

export default PlatformToggle;


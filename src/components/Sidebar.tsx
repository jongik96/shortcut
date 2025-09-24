'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Monitor, Laptop, FileSpreadsheet, FileText, Presentation, Settings, X } from 'lucide-react';
import { Platform, Software, SidebarItem } from '@/types/shortcuts';
import { cn } from '@/lib/utils';

interface SidebarProps {
  platform: Platform;
  software: Software;
  onPlatformChange: (platform: Platform) => void;
  onSoftwareChange: (software: Software) => void;
  onClose?: () => void;
  className?: string;
}

const Sidebar = ({ platform, software, onPlatformChange, onSoftwareChange, onClose, className }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['windows', 'mac']);

  const sidebarItems: SidebarItem[] = [
    {
      id: 'windows',
      label: 'Windows',
      icon: 'Monitor',
      children: [
        { id: 'windows-system', label: '基本ショートカット', icon: 'Settings' },
        { id: 'windows-excel', label: 'Excel', icon: 'FileSpreadsheet' },
        { id: 'windows-word', label: 'Word', icon: 'FileText' },
        { id: 'windows-powerpoint', label: 'PowerPoint', icon: 'Presentation' }
      ]
    },
    {
      id: 'mac',
      label: 'Mac',
      icon: 'Laptop',
      children: [
        { id: 'mac-system', label: '基本ショートカット', icon: 'Settings' },
        { id: 'mac-excel', label: 'Excel', icon: 'FileSpreadsheet' },
        { id: 'mac-word', label: 'Word', icon: 'FileText' },
        { id: 'mac-powerpoint', label: 'PowerPoint', icon: 'Presentation' }
      ]
    }
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (itemId: string) => {
    if (itemId.includes('-')) {
      const [os, softwareType] = itemId.split('-');
      onPlatformChange(os as Platform);
      onSoftwareChange(softwareType as Software);
      // 모바일에서만 메뉴 선택 시 사이드바 닫기
      if (onClose && window.innerWidth < 1024) {
        onClose();
      }
    }
  };

  const getIcon = (iconName: string) => {
    const iconMap = {
      Monitor: <Monitor size={16} />,
      Laptop: <Laptop size={16} />,
      FileSpreadsheet: <FileSpreadsheet size={16} />,
      FileText: <FileText size={16} />,
      Presentation: <Presentation size={16} />,
      Settings: <Settings size={16} />
    };
    return iconMap[iconName as keyof typeof iconMap] || null;
  };

  const isItemActive = (itemId: string) => {
    if (itemId.includes('-')) {
      const [os, softwareType] = itemId.split('-');
      return platform === os && software === softwareType;
    }
    return false;
  };

  return (
    <div className={cn('w-64 bg-white border-r border-gray-200 h-full overflow-y-auto', className)}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">LearnShortcuts.dev</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          )}
        </div>
        
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <div key={item.id}>
              {/* OS Level */}
              <button
                onClick={() => toggleExpanded(item.id)}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  'hover:bg-gray-100 text-gray-700'
                )}
              >
                <div className="flex items-center gap-2">
                  {getIcon(item.icon || '')}
                  {item.label}
                </div>
                {expandedItems.includes(item.id) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {/* Software Level */}
              {expandedItems.includes(item.id) && item.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleItemClick(child.id)}
                      className={cn(
                        'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors',
                        isItemActive(child.id)
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      {getIcon(child.icon || '')}
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

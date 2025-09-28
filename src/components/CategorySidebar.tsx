'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface CategorySidebarProps {
  mainCategory: string;
  className?: string;
}

const CategorySidebar = ({ mainCategory, className }: CategorySidebarProps) => {
  const pathname = usePathname();

  // 각 메인 카테고리별 하위 카테고리 정의
  const getSubCategories = (category: string) => {
    switch (category) {
      case 'office':
        return [
          { id: 'word', name: 'Word', href: '/office/word' },
          { id: 'excel', name: 'Excel', href: '/office/excel' },
          { id: 'powerpoint', name: 'PowerPoint', href: '/office/powerpoint' }
        ];
      case 'google':
        return [
          { id: 'docs', name: 'Docs', href: '/google/docs' },
          { id: 'sheets', name: 'Spread Sheets', href: '/google/sheets' },
          { id: 'slides', name: 'Slides', href: '/google/slides' }
        ];
      case 'browser':
        return [
          { id: 'chrome', name: 'Chrome', href: '/browser/chrome' },
          { id: 'safari', name: 'Safari', href: '/browser/safari' },
          { id: 'edge', name: 'Edge', href: '/browser/edge' }
        ];
      case 'adobe':
        return [
          { id: 'photoshop', name: 'Photoshop', href: '/adobe/photoshop' },
          { id: 'illustrator', name: 'Illustrator', href: '/adobe/illustrator' }
        ];
      case 'others':
        return [
          { id: 'slack', name: 'Slack', href: '/others/slack' },
          { id: 'discord', name: 'Discord', href: '/others/discord' }
        ];
      default:
        return [];
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'office':
        return 'Microsoft Office';
      case 'google':
        return 'Google Workspace';
      case 'browser':
        return 'Browser';
      case 'adobe':
        return 'Adobe';
      case 'others':
        return 'Others';
      default:
        return '';
    }
  };

  const subCategories = getSubCategories(mainCategory);
  const categoryTitle = getCategoryTitle(mainCategory);

  if (subCategories.length === 0) {
    return null;
  }

  return (
    <div className={cn('bg-white rounded-lg shadow-sm border p-4', className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {categoryTitle}
      </h3>
      <nav className="space-y-2">
        {subCategories.map((subCategory) => (
          <Link
            key={subCategory.id}
            href={subCategory.href}
            className={cn(
              'block px-3 py-2 text-sm font-medium rounded-md transition-colors',
              pathname === subCategory.href
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            )}
          >
            {subCategory.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default CategorySidebar;

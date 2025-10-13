import { notFound } from 'next/navigation';
import { shortcuts } from '@/data/shortcuts';
import { locales } from '@/i18n/config';
import ShortcutDetailClient from './ShortcutDetailClient';

// 모든 단축키 페이지를 정적으로 생성
export async function generateStaticParams() {
  const paths = [];
  
  for (const locale of locales) {
    for (const shortcut of shortcuts) {
      paths.push({
        locale,
        id: shortcut.id,
      });
    }
  }
  
  return paths;
}

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function ShortcutDetailPage({ params }: PageProps) {
  const { id, locale } = await params;
  const shortcut = shortcuts.find(s => s.id === id);
  
  if (!shortcut) {
    notFound();
  }

  return <ShortcutDetailClient shortcut={shortcut} locale={locale} />;
}

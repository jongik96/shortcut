import { Metadata } from 'next';
import { browserPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = browserPageMetadata;

export default function BrowserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

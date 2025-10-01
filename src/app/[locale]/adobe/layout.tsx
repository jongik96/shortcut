import { Metadata } from 'next';
import { adobePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = adobePageMetadata;

export default function AdobeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

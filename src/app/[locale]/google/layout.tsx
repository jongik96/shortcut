import { Metadata } from 'next';
import { googlePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = googlePageMetadata;

export default function GoogleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

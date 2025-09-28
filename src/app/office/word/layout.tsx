import { Metadata } from 'next';
import { wordPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = wordPageMetadata;

export default function WordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

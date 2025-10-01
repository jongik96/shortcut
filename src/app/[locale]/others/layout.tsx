import { Metadata } from 'next';
import { othersPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = othersPageMetadata;

export default function OthersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

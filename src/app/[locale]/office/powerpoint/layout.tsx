import { Metadata } from 'next';
import { powerpointPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = powerpointPageMetadata;

export default function PowerPointLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

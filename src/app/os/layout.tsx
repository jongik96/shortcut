import { Metadata } from 'next';
import { osPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = osPageMetadata;

export default function OSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

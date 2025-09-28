import { Metadata } from 'next';
import { officePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = officePageMetadata;

export default function OfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

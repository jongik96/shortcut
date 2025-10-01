import { Metadata } from 'next';
import { excelPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = excelPageMetadata;

export default function ExcelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

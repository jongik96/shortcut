import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excelショートカットガイド | Excel Shortcuts Guide",
  description: "Excel作業をより効率的にするショートカットと関数ジェネレーター。Windows/Mac対応、お気に入り機能。",
  keywords: "Excel, ショートカット, shortcuts, 関数, function, Windows, Mac, 日本語",
  authors: [{ name: "Excel Shortcuts Guide" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Excelショートカットガイド",
    description: "Excel作業をより効率的にするショートカットと関数ジェネレーター",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

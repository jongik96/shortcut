import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { structuredData } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnShortcuts.dev - Windows・Mac Excel・Word・PowerPoint ショートカット完全ガイド",
  description: "Windows・Mac の Excel・Word・PowerPoint ショートカットを完全網羅！検索機能で瞬時に見つける。効率的な作業のためのショートカット学習サイト。",
  keywords: [
    "Windows ショートカット",
    "Mac ショートカット", 
    "Excel ショートカット",
    "Word ショートカット",
    "PowerPoint ショートカット",
    "キーボードショートカット",
    "ショートカット 一覧",
    "ショートカット 覚え方",
    "ショートカット 早見表",
    "Windows 基本ショートカット",
    "Mac 基本ショートカット",
    "Excel 関数",
    "Word ショートカット 一覧",
    "PowerPoint ショートカット 一覧",
    "効率化",
    "生産性向上",
    "オフィスソフト",
    "Microsoft Office",
    "ショートカット 学習",
    "ショートカット ガイド",
    "learnshortcuts",
    "ショートカット 検索"
  ],
  authors: [{ name: "LearnShortcuts.dev" }],
  creator: "LearnShortcuts.dev",
  publisher: "LearnShortcuts.dev",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  metadataBase: new URL("https://learnshortcuts.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LearnShortcuts.dev - Windows・Mac Excel・Word・PowerPoint ショートカット完全ガイド",
    description: "Windows・Mac の Excel・Word・PowerPoint ショートカットを完全網羅！検索機能で瞬時に見つける。効率的な作業のためのショートカット学習サイト。",
    url: "https://learnshortcuts.dev",
    siteName: "LearnShortcuts.dev",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LearnShortcuts.dev - ショートカット完全ガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnShortcuts.dev - Windows・Mac Excel・Word・PowerPoint ショートカット完全ガイド",
    description: "Windows・Mac の Excel・Word・PowerPoint ショートカットを完全網羅！検索機能で瞬時に見つける。",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { locales, isRTL, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { structuredData } from "../structured-data";
import type { Metadata } from "next";
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "LearnShortcuts.dev - OS・Office・Google・Browser・Adobe ショートカット完全ガイド",
    en: "LearnShortcuts.dev - Complete Guide to OS, Office, Google, Browser & Adobe Shortcuts",
    ko: "LearnShortcuts.dev - OS・Office・Google・Browser・Adobe 단축키 완벽 가이드",
    ar: "LearnShortcuts.dev - دليل شامل لاختصارات OS و Office و Google و Browser و Adobe"
  };

  const descriptions = {
    ja: "OS・Microsoft Office・Google Workspace・Browser・Adobe・その他ソフトウェアのショートカットを完全網羅！検索機能で瞬時に見つける。効率的な作業のためのショートカット学習サイト。",
    en: "Complete guide to shortcuts for OS, Microsoft Office, Google Workspace, Browser, Adobe, and more! Find shortcuts instantly with search functionality.",
    ko: "OS・Microsoft Office・Google Workspace・Browser・Adobe・기타 소프트웨어의 단축키를 완벽 정리! 검색 기능으로 즉시 찾기. 효율적인 작업을 위한 단축키 학습 사이트.",
    ar: "دليل شامل لاختصارات OS و Microsoft Office و Google Workspace و Browser و Adobe والمزيد! اعثر على الاختصارات على الفور باستخدام وظيفة البحث."
  };

  const title = titles[locale as keyof typeof titles] || titles.ja;
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.ja;

  return {
    title,
    description,
    keywords: [
      "Windows shortcuts",
      "Mac shortcuts", 
      "Excel shortcuts",
      "keyboard shortcuts",
      "productivity",
    ],
    authors: [{ name: "LearnShortcuts.dev" }],
    creator: "LearnShortcuts.dev",
    publisher: "LearnShortcuts.dev",
    robots: "index, follow",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'ja': '/ja',
        'en': '/en',
        'ko': '/ko',
        'ar': '/ar',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}`,
      siteName: "LearnShortcuts.dev",
      type: "website",
      locale: locale === 'ja' ? 'ja_JP' : locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : 'ar_AR',
      images: [
        {
          url: "/shortcut.png",
          width: 1200,
          height: 630,
          alt: "LearnShortcuts.dev",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/shortcut.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <html lang={locale} dir={isRTL(locale as Locale) ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <LocaleProvider locale={locale as Locale} dictionary={dictionary}>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}

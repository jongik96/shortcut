import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "使い方ガイド - ショートカット学習の完全ガイド | LearnShortcuts.dev",
    en: "How to Use - Complete Guide to Learning Shortcuts | LearnShortcuts.dev",
    ko: "사용 가이드 - 단축키 학습 완벽 가이드 | LearnShortcuts.dev",
    ar: "دليل الاستخدام - دليل كامل لتعلم الاختصارات | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "LearnShortcuts.devの使い方を詳しく解説。検索機能、フィルター機能、お気に入り機能など、効率的なショートカット学習方法を学べます。",
    en: "Detailed guide on how to use LearnShortcuts.dev. Learn efficient shortcut learning methods including search, filter, and favorites features.",
    ko: "LearnShortcuts.dev 사용법을 자세히 설명합니다. 검색 기능, 필터 기능, 즐겨찾기 기능 등 효율적인 단축키 학습 방법을 배울 수 있습니다.",
    ar: "دليل تفصيلي حول كيفية استخدام LearnShortcuts.dev. تعلم طرق تعلم الاختصارات الفعالة بما في ذلك ميزات البحث والتصفية والمفضلة."
  };

  const keywords = {
    ja: [
      "使い方", "ガイド", "ショートカット学習", "検索機能", "フィルター", "お気に入り", "使い方説明"
    ],
    en: [
      "how to use", "guide", "shortcut learning", "search function", "filter", "favorites", "tutorial"
    ],
    ko: [
      "사용법", "가이드", "단축키 학습", "검색 기능", "필터", "즐겨찾기", "사용 설명"
    ],
    ar: [
      "كيفية الاستخدام", "دليل", "تعلم الاختصارات", "وظيفة البحث", "التصفية", "المفضلة", "البرنامج التعليمي"
    ]
  };

  const title = titles[locale as Locale] || titles.ja;
  const description = descriptions[locale as Locale] || descriptions.ja;
  const keywordList = keywords[locale as Locale] || keywords.ja;

  return {
    title,
    description,
    keywords: keywordList,
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}/guide`,
      siteName: "LearnShortcuts.dev",
      type: "website",
      locale: locale === 'ja' ? 'ja_JP' : locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : 'ar_AR',
      images: [
        {
          url: "https://learnshortcuts.dev/shortcut.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://learnshortcuts.dev/shortcut.png"],
    },
  };
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}


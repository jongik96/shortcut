import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Microsoft Word ショートカット - 文書作成の完全ガイド | LearnShortcuts.dev",
    en: "Microsoft Word Shortcuts - Complete Guide to Document Creation | LearnShortcuts.dev",
    ko: "Microsoft Word 단축키 - 문서 작성 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات Microsoft Word - دليل شامل لإنشاء المستندات | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Microsoft Word のショートカットを完全網羅！文書作成・編集・フォーマット・レイアウトを効率化するキーボードショートカットを学習できます。",
    en: "Complete guide to Microsoft Word shortcuts! Learn keyboard shortcuts to streamline document creation, editing, formatting, and layout.",
    ko: "Microsoft Word의 단축키를 완벽 정리! 문서 작성・편집・서식・레이아웃을 효율화하는 키보드 단축키를 학습하세요.",
    ar: "دليل شامل لاختصارات Microsoft Word! تعلم اختصارات لوحة المفاتيح لتبسيط إنشاء المستندات وتحريرها وتنسيقها وتخطيطها."
  };

  const keywords = {
    ja: [
      "Microsoft Word ショートカット", "Word ショートカット", "文書作成 ショートカット",
      "文書編集 ショートカット", "フォーマット ショートカット", "レイアウト ショートカット",
      "Word 効率化", "文書作成 効率化"
    ],
    en: [
      "Microsoft Word shortcuts", "Word shortcuts", "document creation shortcuts",
      "document editing shortcuts", "formatting shortcuts", "layout shortcuts",
      "Word productivity", "document creation efficiency"
    ],
    ko: [
      "Microsoft Word 단축키", "Word 단축키", "문서 작성 단축키",
      "문서 편집 단축키", "서식 단축키", "레이아웃 단축키",
      "Word 효율화", "문서 작성 효율"
    ],
    ar: [
      "اختصارات Microsoft Word", "اختصارات Word", "اختصارات إنشاء المستندات",
      "اختصارات تحرير المستندات", "اختصارات التنسيق", "اختصارات التخطيط",
      "إنتاجية Word", "كفاءة إنشاء المستندات"
    ]
  };

  const title = titles[locale as Locale] || titles.ja;
  const description = descriptions[locale as Locale] || descriptions.ja;
  const keywordList = keywords[locale as Locale] || keywords.ja;

  return {
    title,
    description,
    keywords: keywordList,
    alternates: {
      canonical: `https://learnshortcuts.dev/${locale}/office/word/`,
      languages: {
        'ja': `https://learnshortcuts.dev/ja/office/word/`,
        'en': `https://learnshortcuts.dev/en/office/word/`,
        'ko': `https://learnshortcuts.dev/ko/office/word/`,
        'ar': `https://learnshortcuts.dev/ar/office/word/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}/office/word/`,
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

export default function WordLayout({ children }: { children: React.ReactNode }) {
  return children;
}

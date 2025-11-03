import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Microsoft PowerPoint ショートカット - プレゼンテーションの完全ガイド | LearnShortcuts.dev",
    en: "Microsoft PowerPoint Shortcuts - Complete Guide to Presentations | LearnShortcuts.dev",
    ko: "Microsoft PowerPoint 단축키 - 프레젠테이션 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات Microsoft PowerPoint - دليل شامل للعروض التقديمية | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Microsoft PowerPoint のショートカットを完全網羅！プレゼンテーション作成・編集・スライド操作・アニメーションを効率化するキーボードショートカットを学習できます。",
    en: "Complete guide to Microsoft PowerPoint shortcuts! Learn keyboard shortcuts to streamline presentation creation, editing, slide operations, and animations.",
    ko: "Microsoft PowerPoint의 단축키를 완벽 정리! 프레젠테이션 작성・편집・슬라이드 작업・애니메이션을 효율화하는 키보드 단축키를 학습하세요.",
    ar: "دليل شامل لاختصارات Microsoft PowerPoint! تعلم اختصارات لوحة المفاتيح لتبسيط إنشاء العروض التقديمية وتحريرها وعمليات الشرائح والرسوم المتحركة."
  };

  const keywords = {
    ja: [
      "Microsoft PowerPoint ショートカット", "PowerPoint ショートカット", "プレゼンテーション ショートカット",
      "スライド作成 ショートカット", "スライド編集 ショートカット", "アニメーション ショートカット",
      "PowerPoint 効率化", "プレゼンテーション 効率化"
    ],
    en: [
      "Microsoft PowerPoint shortcuts", "PowerPoint shortcuts", "presentation shortcuts",
      "slide creation shortcuts", "slide editing shortcuts", "animation shortcuts",
      "PowerPoint productivity", "presentation efficiency"
    ],
    ko: [
      "Microsoft PowerPoint 단축키", "PowerPoint 단축키", "프레젠테이션 단축키",
      "슬라이드 작성 단축키", "슬라이드 편집 단축키", "애니메이션 단축키",
      "PowerPoint 효율화", "프레젠테이션 효율"
    ],
    ar: [
      "اختصارات Microsoft PowerPoint", "اختصارات PowerPoint", "اختصارات العروض التقديمية",
      "اختصارات إنشاء الشرائح", "اختصارات تحرير الشرائح", "اختصارات الرسوم المتحركة",
      "إنتاجية PowerPoint", "كفاءة العروض التقديمية"
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
      canonical: `https://learnshortcuts.dev/${locale}/office/powerpoint/`,
      languages: {
        'ja': `https://learnshortcuts.dev/ja/office/powerpoint/`,
        'en': `https://learnshortcuts.dev/en/office/powerpoint/`,
        'ko': `https://learnshortcuts.dev/ko/office/powerpoint/`,
        'ar': `https://learnshortcuts.dev/ar/office/powerpoint/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}/office/powerpoint/`,
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

export default function PowerPointLayout({ children }: { children: React.ReactNode }) {
  return children;
}

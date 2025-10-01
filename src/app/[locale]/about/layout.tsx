import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "サービス紹介 - LearnShortcuts.devについて | LearnShortcuts.dev",
    en: "About Us - Learn About LearnShortcuts.dev | LearnShortcuts.dev",
    ko: "서비스 소개 - LearnShortcuts.dev 소개 | LearnShortcuts.dev",
    ar: "معلومات عنا - تعرف على LearnShortcuts.dev | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "LearnShortcuts.devは、すべてのソフトウェアのショートカットを簡単に学べる学習プラットフォームです。効率的な作業のために、包括的なショートカットガイドを提供します。",
    en: "LearnShortcuts.dev is a learning platform for easily mastering shortcuts for all software. We provide comprehensive shortcut guides for efficient work.",
    ko: "LearnShortcuts.dev는 모든 소프트웨어의 단축키를 쉽게 배울 수 있는 학습 플랫폼입니다. 효율적인 작업을 위해 포괄적인 단축키 가이드를 제공합니다.",
    ar: "LearnShortcuts.dev عبارة عن منصة تعليمية لإتقان الاختصارات بسهولة لجميع البرامج. نحن نقدم أدلة اختصارات شاملة للعمل الفعال."
  };

  const keywords = {
    ja: [
      "LearnShortcuts.dev", "サービス紹介", "ショートカット学習", "作業効率化", "生産性向上"
    ],
    en: [
      "LearnShortcuts.dev", "about us", "shortcut learning", "work efficiency", "productivity"
    ],
    ko: [
      "LearnShortcuts.dev", "서비스 소개", "단축키 학습", "작업 효율화", "생산성 향상"
    ],
    ar: [
      "LearnShortcuts.dev", "معلومات عنا", "تعلم الاختصارات", "كفاءة العمل", "الإنتاجية"
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
      url: `https://learnshortcuts.dev/${locale}/about`,
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}


import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Google Workspace ショートカット - Docs・Sheets・Slides | LearnShortcuts.dev",
    en: "Google Workspace Shortcuts - Docs, Sheets, Slides | LearnShortcuts.dev",
    ko: "Google Workspace 단축키 - Docs・Sheets・Slides | LearnShortcuts.dev",
    ar: "اختصارات Google Workspace - Docs و Sheets و Slides | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Google Workspace（Docs・Sheets・Slides）の200以上のショートカットを完全網羅。クラウド作業を効率化し、生産性を向上させます。",
    en: "Complete guide to 200+ Google Workspace shortcuts for Docs, Sheets, and Slides. Streamline your cloud work and boost productivity.",
    ko: "Google Workspace（Docs・Sheets・Slides）의 200개 이상 단축키 완벽 정리. 클라우드 작업을 효율화하고 생산성을 향상시키세요.",
    ar: "دليل شامل لأكثر من 200 اختصارًا لـ Google Workspace (Docs و Sheets و Slides). قم بتبسيط عملك السحابي وتعزيز الإنتاجية."
  };

  const keywords = {
    ja: [
      "Google Docs ショートカット", "Google Sheets ショートカット", "Google Slides ショートカット",
      "Google Workspace", "クラウド作業", "オンライン文書", "スプレッドシート", "プレゼンテーション"
    ],
    en: [
      "Google Docs shortcuts", "Google Sheets shortcuts", "Google Slides shortcuts",
      "Google Workspace", "cloud work", "online documents", "spreadsheet", "presentation"
    ],
    ko: [
      "구글 독스 단축키", "구글 스프레드시트 단축키", "구글 슬라이드 단축키",
      "Google Workspace", "클라우드 작업", "온라인 문서", "스프레드시트", "프레젠테이션"
    ],
    ar: [
      "اختصارات Google Docs", "اختصارات Google Sheets", "اختصارات Google Slides",
      "Google Workspace", "العمل السحابي", "المستندات عبر الإنترنت", "جداول البيانات", "العروض التقديمية"
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
      url: `https://learnshortcuts.dev/${locale}/google`,
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

export default function GoogleLayout({ children }: { children: React.ReactNode }) {
  return children;
}

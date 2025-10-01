import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Microsoft Office ショートカット - Word・Excel・PowerPoint | LearnShortcuts.dev",
    en: "Microsoft Office Shortcuts - Word, Excel, PowerPoint | LearnShortcuts.dev",
    ko: "Microsoft Office 단축키 - Word・Excel・PowerPoint | LearnShortcuts.dev",
    ar: "اختصارات Microsoft Office - Word و Excel و PowerPoint | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Microsoft Office（Word・Excel・PowerPoint）の370以上のショートカットを完全網羅。文書作成、表計算、プレゼンテーション作成を効率化。",
    en: "Complete guide to 370+ Microsoft Office shortcuts for Word, Excel, and PowerPoint. Boost your productivity in document creation, spreadsheets, and presentations.",
    ko: "Microsoft Office（Word・Excel・PowerPoint）의 370개 이상 단축키 완벽 정리. 문서 작성, 스프레드시트, 프레젠테이션을 효율화하세요.",
    ar: "دليل شامل لأكثر من 370 اختصارًا لـ Microsoft Office (Word و Excel و PowerPoint). عزز إنتاجيتك في إنشاء المستندات وجداول البيانات والعروض التقديمية."
  };

  const keywords = {
    ja: [
      "Excel ショートカット", "Word ショートカット", "PowerPoint ショートカット", "Microsoft Office",
      "表計算", "文書作成", "プレゼンテーション", "Office 効率化", "業務効率化"
    ],
    en: [
      "Excel shortcuts", "Word shortcuts", "PowerPoint shortcuts", "Microsoft Office",
      "spreadsheet", "document creation", "presentation", "Office productivity", "work efficiency"
    ],
    ko: [
      "엑셀 단축키", "워드 단축키", "파워포인트 단축키", "Microsoft Office",
      "스프레드시트", "문서 작성", "프레젠테이션", "Office 효율화", "업무 효율"
    ],
    ar: [
      "اختصارات Excel", "اختصارات Word", "اختصارات PowerPoint", "Microsoft Office",
      "جداول البيانات", "إنشاء المستندات", "العروض التقديمية", "إنتاجية Office", "كفاءة العمل"
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
      url: `https://learnshortcuts.dev/${locale}/office`,
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

export default function OfficeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

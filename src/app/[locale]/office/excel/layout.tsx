import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Excel ショートカット・関数完全ガイド - 150以上のショートカット | LearnShortcuts.dev",
    en: "Excel Shortcuts & Functions Complete Guide - 150+ Shortcuts | LearnShortcuts.dev",
    ko: "Excel 단축키・함수 완벽 가이드 - 150개 이상 단축키 | LearnShortcuts.dev",
    ar: "دليل اختصارات ووظائف Excel الكامل - أكثر من 150 اختصارًا | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Excel（エクセル）の150以上のショートカットと100の関数を完全網羅。セル操作、書式設定、データ分析、関数の使い方まで。作業効率を劇的に向上させる完全ガイド。",
    en: "Complete guide to 150+ Excel shortcuts and 100 functions. Cell operations, formatting, data analysis, and function usage. Dramatically boost your spreadsheet productivity.",
    ko: "Excel（엑셀）의 150개 이상 단축키와 100개 함수 완벽 정리. 셀 작업, 서식 설정, 데이터 분석, 함수 사용법까지. 작업 효율을 극적으로 향상시키는 완벽 가이드.",
    ar: "دليل شامل لأكثر من 150 اختصارًا و 100 وظيفة في Excel. عمليات الخلايا، التنسيق، تحليل البيانات، واستخدام الوظائف. عزز إنتاجية جداول البيانات بشكل كبير."
  };

  const keywords = {
    ja: [
      "Excel ショートカット", "エクセル ショートカット", "Excel 関数", "表計算", "セル操作",
      "データ分析", "SUM関数", "VLOOKUP", "IF関数", "Excel効率化", "Excel使い方"
    ],
    en: [
      "Excel shortcuts", "Excel functions", "spreadsheet", "cell operations", "data analysis",
      "SUM function", "VLOOKUP", "IF function", "Excel productivity", "Excel tips"
    ],
    ko: [
      "엑셀 단축키", "Excel 단축키", "엑셀 함수", "스프레드시트", "셀 작업",
      "데이터 분석", "SUM 함수", "VLOOKUP", "IF 함수", "엑셀 효율화", "엑셀 사용법"
    ],
    ar: [
      "اختصارات Excel", "وظائف Excel", "جداول البيانات", "عمليات الخلايا", "تحليل البيانات",
      "وظيفة SUM", "VLOOKUP", "وظيفة IF", "إنتاجية Excel", "نصائح Excel"
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
      url: `https://learnshortcuts.dev/${locale}/office/excel`,
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

export default function ExcelLayout({ children }: { children: React.ReactNode }) {
  return children;
}

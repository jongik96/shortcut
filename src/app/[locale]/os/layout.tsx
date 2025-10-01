import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "OS ショートカット - Windows・Mac 完全ガイド | LearnShortcuts.dev",
    en: "OS Shortcuts - Complete Windows & Mac Guide | LearnShortcuts.dev",
    ko: "OS 단축키 - Windows・Mac 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات نظام التشغيل - دليل Windows و Mac الكامل | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Windows・MacのOS基本ショートカットを完全網羅。ファイル操作、ウィンドウ管理、システム設定など、130以上のショートカットを検索・学習できます。",
    en: "Complete guide to Windows and Mac OS shortcuts. File operations, window management, system settings, and 130+ shortcuts available for search and learning.",
    ko: "Windows・Mac OS 기본 단축키 완벽 정리. 파일 작업, 창 관리, 시스템 설정 등 130개 이상의 단축키를 검색하고 학습할 수 있습니다.",
    ar: "دليل شامل لاختصارات نظام Windows و Mac. عمليات الملفات، إدارة النوافذ، إعدادات النظام، وأكثر من 130 اختصارًا متاحًا للبحث والتعلم."
  };

  const keywords = {
    ja: [
      "Windows ショートカット", "Mac ショートカット", "OS ショートカット", "キーボードショートカット",
      "ファイル操作", "ウィンドウ管理", "システム設定", "PC操作", "作業効率化"
    ],
    en: [
      "Windows shortcuts", "Mac shortcuts", "OS shortcuts", "keyboard shortcuts",
      "file operations", "window management", "system settings", "PC operations", "productivity"
    ],
    ko: [
      "윈도우 단축키", "맥 단축키", "OS 단축키", "키보드 단축키",
      "파일 작업", "창 관리", "시스템 설정", "PC 작업", "작업 효율"
    ],
    ar: [
      "اختصارات Windows", "اختصارات Mac", "اختصارات نظام التشغيل", "اختصارات لوحة المفاتيح",
      "عمليات الملفات", "إدارة النوافذ", "إعدادات النظام", "عمليات الكمبيوتر", "الإنتاجية"
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
      url: `https://learnshortcuts.dev/${locale}/os`,
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

export default function OSLayout({ children }: { children: React.ReactNode }) {
  return children;
}

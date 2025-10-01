import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "ブラウザショートカット - Chrome・Safari・Edge 完全ガイド | LearnShortcuts.dev",
    en: "Browser Shortcuts - Chrome, Safari, Edge Complete Guide | LearnShortcuts.dev",
    ko: "브라우저 단축키 - Chrome・Safari・Edge 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات المتصفح - Chrome و Safari و Edge دليل كامل | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Chrome・Safari・Edgeなど主要ブラウザの150以上のショートカットを完全網羅。タブ操作、ブックマーク管理、ナビゲーションを効率化。",
    en: "Complete guide to 150+ shortcuts for Chrome, Safari, Edge and major browsers. Streamline tab operations, bookmark management, and navigation.",
    ko: "Chrome・Safari・Edge 등 주요 브라우저의 150개 이상 단축키 완벽 정리. 탭 작업, 북마크 관리, 탐색을 효율화하세요.",
    ar: "دليل شامل لأكثر من 150 اختصارًا لـ Chrome و Safari و Edge والمتصفحات الرئيسية. قم بتبسيط عمليات علامات التبويب وإدارة الإشارات المرجعية والتنقل."
  };

  const keywords = {
    ja: [
      "Chrome ショートカット", "Safari ショートカット", "Edge ショートカット", "ブラウザ",
      "タブ操作", "ブックマーク", "Web閲覧", "ナビゲーション", "ブラウザ効率化"
    ],
    en: [
      "Chrome shortcuts", "Safari shortcuts", "Edge shortcuts", "browser",
      "tab operations", "bookmarks", "web browsing", "navigation", "browser productivity"
    ],
    ko: [
      "크롬 단축키", "사파리 단축키", "엣지 단축키", "브라우저",
      "탭 작업", "북마크", "웹 검색", "탐색", "브라우저 효율화"
    ],
    ar: [
      "اختصارات Chrome", "اختصارات Safari", "اختصارات Edge", "المتصفح",
      "عمليات علامات التبويب", "الإشارات المرجعية", "تصفح الويب", "التنقل", "إنتاجية المتصفح"
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
      url: `https://learnshortcuts.dev/${locale}/browser`,
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

export default function BrowserLayout({ children }: { children: React.ReactNode }) {
  return children;
}

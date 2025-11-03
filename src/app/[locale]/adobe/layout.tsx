import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "Adobe ショートカット - Photoshop・Illustrator 完全ガイド | LearnShortcuts.dev",
    en: "Adobe Shortcuts - Photoshop & Illustrator Complete Guide | LearnShortcuts.dev",
    ko: "Adobe 단축키 - Photoshop・Illustrator 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات Adobe - Photoshop و Illustrator دليل كامل | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Photoshop・Illustratorの100以上のショートカットを完全網羅。デザイン作業、レイヤー操作、ツール使用を効率化し、創造性を最大化。",
    en: "Complete guide to 100+ Photoshop and Illustrator shortcuts. Streamline design work, layer operations, and tool usage to maximize creativity.",
    ko: "Photoshop・Illustrator의 100개 이상 단축키 완벽 정리. 디자인 작업, 레이어 작업, 도구 사용을 효율화하고 창의성을 극대화하세요.",
    ar: "دليل شامل لأكثر من 100 اختصارًا لـ Photoshop و Illustrator. قم بتبسيط أعمال التصميم وعمليات الطبقات واستخدام الأدوات لتعظيم الإبداع."
  };

  const keywords = {
    ja: [
      "Photoshop ショートカット", "Illustrator ショートカット", "Adobe ショートカット",
      "デザイン", "レイヤー操作", "グラフィックデザイン", "画像編集", "イラスト制作"
    ],
    en: [
      "Photoshop shortcuts", "Illustrator shortcuts", "Adobe shortcuts",
      "design", "layer operations", "graphic design", "image editing", "illustration"
    ],
    ko: [
      "포토샵 단축키", "일러스트레이터 단축키", "Adobe 단축키",
      "디자인", "레이어 작업", "그래픽 디자인", "이미지 편집", "일러스트 제작"
    ],
    ar: [
      "اختصارات Photoshop", "اختصارات Illustrator", "اختصارات Adobe",
      "التصميم", "عمليات الطبقات", "التصميم الجرافيكي", "تحرير الصور", "الرسوم التوضيحية"
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
      canonical: `https://learnshortcuts.dev/${locale}/adobe/`,
      languages: {
        'ja': `https://learnshortcuts.dev/ja/adobe/`,
        'en': `https://learnshortcuts.dev/en/adobe/`,
        'ko': `https://learnshortcuts.dev/ko/adobe/`,
        'ar': `https://learnshortcuts.dev/ar/adobe/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}/adobe/`,
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

export default function AdobeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

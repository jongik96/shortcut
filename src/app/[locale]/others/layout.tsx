import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    ja: "その他ソフトウェア ショートカット - Slack・Discord 完全ガイド | LearnShortcuts.dev",
    en: "Other Software Shortcuts - Slack & Discord Complete Guide | LearnShortcuts.dev",
    ko: "기타 소프트웨어 단축키 - Slack・Discord 완벽 가이드 | LearnShortcuts.dev",
    ar: "اختصارات البرمجيات الأخرى - دليل كامل لـ Slack و Discord | LearnShortcuts.dev"
  };

  const descriptions = {
    ja: "Slack・Discord などその他ソフトウェアのショートカットを完全網羅！チームコミュニケーション・ゲーミングコミュニティを効率化するキーボードショートカットを学習できます。",
    en: "Complete guide to shortcuts for Slack, Discord, and other software! Learn keyboard shortcuts to streamline team communication and gaming communities.",
    ko: "Slack・Discord 등 기타 소프트웨어의 단축키를 완벽 정리! 팀 커뮤니케이션・게이밍 커뮤니티를 효율화하는 키보드 단축키를 학습하세요.",
    ar: "دليل شامل لاختصارات Slack و Discord والبرمجيات الأخرى! تعلم اختصارات لوحة المفاتيح لتبسيط التواصل الجماعي ومجتمعات الألعاب."
  };

  const keywords = {
    ja: [
      "Slack ショートカット", "Discord ショートカット", "コミュニケーションツール ショートカット",
      "チームワーク ショートカット", "ゲーミング ショートカット", "チャット ショートカット",
      "コラボレーション ショートカット", "その他ソフトウェア ショートカット"
    ],
    en: [
      "Slack shortcuts", "Discord shortcuts", "communication tool shortcuts",
      "teamwork shortcuts", "gaming shortcuts", "chat shortcuts",
      "collaboration shortcuts", "other software shortcuts"
    ],
    ko: [
      "Slack 단축키", "Discord 단축키", "커뮤니케이션 도구 단축키",
      "팀워크 단축키", "게이밍 단축키", "채팅 단축키",
      "협업 단축키", "기타 소프트웨어 단축키"
    ],
    ar: [
      "اختصارات Slack", "اختصارات Discord", "اختصارات أدوات التواصل",
      "اختصارات العمل الجماعي", "اختصارات الألعاب", "اختصارات الدردشة",
      "اختصارات التعاون", "اختصارات البرمجيات الأخرى"
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
      canonical: `https://learnshortcuts.dev/${locale}/others/`,
      languages: {
        'ja': `https://learnshortcuts.dev/ja/others/`,
        'en': `https://learnshortcuts.dev/en/others/`,
        'ko': `https://learnshortcuts.dev/ko/others/`,
        'ar': `https://learnshortcuts.dev/ar/others/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://learnshortcuts.dev/${locale}/others/`,
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

export default function OthersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

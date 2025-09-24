export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LearnShortcuts.dev",
  "alternateName": "ショートカット学習サイト",
  "url": "https://learnshortcuts.dev",
  "description": "Windows・Mac の Excel・Word・PowerPoint ショートカットを完全網羅！検索機能で瞬時に見つける。効率的な作業のためのショートカット学習サイト。",
  "inLanguage": "ja",
  "author": {
    "@type": "Organization",
    "name": "LearnShortcuts.dev"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LearnShortcuts.dev",
    "url": "https://learnshortcuts.dev"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://learnshortcuts.dev?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "ショートカット一覧",
    "description": "Windows・Mac の Excel・Word・PowerPoint ショートカット完全ガイド",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Windows ショートカット",
        "description": "Windows の基本ショートカットとオフィスソフトショートカット"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Mac ショートカット",
        "description": "Mac の基本ショートカットとオフィスソフトショートカット"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Excel ショートカット",
        "description": "Excel のキーボードショートカットと関数ジェネレーター"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Word ショートカット", 
        "description": "Word のキーボードショートカット一覧"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "PowerPoint ショートカット",
        "description": "PowerPoint のキーボードショートカット一覧"
      }
    ]
  }
};

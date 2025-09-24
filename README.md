# LearnShortcuts.dev - Windows・Mac Excel・Word・PowerPoint ショートカット完全ガイド

Windows・Mac の Excel・Word・PowerPoint ショートカットを完全網羅！検索機能で瞬時に見つける。効率的な作業のためのショートカット学習サイト。

![LearnShortcuts.dev](https://img.shields.io/badge/LearnShortcuts.dev-ショートカットガイド-blue?style=for-the-badge&logo=keyboard)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 主要機能

### 📋 ショートカット完全ガイド
- **検索機能**: "セル結合", "太字" などで素早く検索
- **キーボード視覚化**: 該当キーが押されている状態でハイライト表示
- **プラットフォーム対応**: Windows / Mac 切り替え可能
- **カテゴリ別分類**: 書式、移動、データ、シート、ファイル管理
- **お気に入り**: よく使うショートカットを保存・管理

### 🤖 関数ジェネレーター (Excel専用)
- **自然言語処理**: "日付から年だけ抽出したい" → `=YEAR(A1)`
- **リアルタイム推奨**: 入力と同時に関連関数を推奨
- **例示提供**: 実際の使用例と結果値を表示
- **代替関数**: 同じ機能を別の方法で行う関数も提案
- **ワンクリックコピー**: 関数をクリップボードに直接コピー

### 🖥️ 対応ソフトウェア
- **Windows 基本ショートカット**: コピー、ペースト、保存など
- **Mac 基本ショートカット**: ⌘キーを使った基本操作
- **Excel**: セル操作、関数、データ分析
- **Word**: 文書作成、編集、書式設定
- **PowerPoint**: プレゼンテーション作成、編集

### 📱 レスポンシブデザイン
- **モバイル最適化**: タッチフレンドリーなインターフェース
- **タブレット対応**: 中間画面サイズ最適化
- **デスクトップ**: 大画面で最大効率性

## 🚀 技術スタック

### Frontend
- **Next.js 15.5.3** - React ベースフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS 4** - ユーティリティファーストCSS
- **Lucide React** - アイコンライブラリ

### 状態管理
- **React Hooks** - useState, useEffect, useMemo
- **ローカルストレージ** - お気に入りと設定の保存

### 開発ツール
- **ESLint** - コード品質管理
- **TypeScript** - 静的型チェック

## 📦 インストールと実行

### 必要要件
- Node.js 18.0.0 以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/jongik96/shortcut.git

# プロジェクトディレクトリに移動
cd shortcut

# 依存関係をインストール
npm install
```

### 開発サーバー実行
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### ビルド
```bash
# プロダクションビルド
npm run build

# プロダクションサーバー実行
npm start
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   ├── robots.ts          # robots.txt
│   ├── sitemap.ts         # sitemap.xml
│   └── structured-data.ts # JSON-LD構造化データ
├── components/            # 再利用可能なコンポーネント
│   ├── FunctionGenerator.tsx
│   ├── KeyboardVisualizer.tsx
│   ├── PlatformToggle.tsx
│   ├── SearchBar.tsx
│   ├── ShortcutCard.tsx
│   └── Sidebar.tsx
├── data/                  # 静的データ
│   ├── functionMappings.ts
│   └── shortcuts.ts
├── hooks/                 # カスタムフック
│   └── useFavorites.ts
├── lib/                   # ユーティリティ関数
│   └── utils.ts
└── types/                 # TypeScript型定義
    └── shortcuts.ts
```

## 🎯 主要コンポーネント

### ShortcutCard
- ショートカット情報表示
- お気に入り切り替え機能
- コピー機能
- キーボード視覚化

### FunctionGenerator
- 自然言語入力処理
- 関数マッピングと推奨
- 例示と代替関数表示

### KeyboardVisualizer
- キーボードキーハイライト
- プラットフォーム別ショートカット表示
- アニメーション効果

### Sidebar
- OS・ソフトウェア別メニュー
- 階層構造ナビゲーション
- モバイル対応

## 📊 ショートカットデータ構造

```typescript
interface Shortcut {
  id: string;           // 一意識別子
  name: string;         // ショートカット名
  description: string;  // 説明
  category: string;     // カテゴリ (format, navigation, data, sheet, file, edit, view, insert, tools, help, system, browser)
  software: string;     // ソフトウェア (excel, word, powerpoint, system)
  windows: string;      // Windowsショートカット
  mac: string;         // Macショートカット
  keywords: string[];   // 検索キーワード
}
```

## 🔧 カスタマイズ

### 新しいショートカット追加
`src/data/shortcuts.ts` に新しいショートカットオブジェクトを追加します。

### 新しい関数追加
`src/data/functionMappings.ts` に新しい関数マッピングを追加します。

### スタイル変更
Tailwind CSSクラスを修正するか、`src/app/globals.css` でカスタムスタイルを追加できます。

## 📈 パフォーマンス最適化

- **画像最適化**: Next.js Imageコンポーネント使用
- **コード分割**: 動的インポートでバンドルサイズ最適化
- **メモ化**: useMemoで検索結果キャッシュ
- **遅延読み込み**: 必要時にのみコンポーネント読み込み

## 🚀 デプロイ

### Vercel (推奨)
```bash
# Vercel CLIインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム
- **Netlify**: `npm run build` 後 `out` フォルダをデプロイ
- **GitHub Pages**: 静的サイトとしてビルド後デプロイ
- **AWS S3**: 静的ウェブサイトホスティング

## 🔍 SEO最適化

- **メタデータ最適化**: 日本語検索に最適化されたタイトル・説明
- **構造化データ**: JSON-LDで検索エンジン理解向上
- **sitemap.xml**: 検索エンジンクローリング最適化
- **robots.txt**: クローリングルール設定
- **Open Graph**: ソーシャルメディア共有最適化

## 🤝 貢献

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 ライセンス

このプロジェクトはMITライセンスの下で配布されています。詳細は `LICENSE` ファイルを参照してください。

## 📞 連絡先

プロジェクトリンク: [https://github.com/jongik96/shortcut](https://github.com/jongik96/shortcut)
ウェブサイト: [https://learnshortcuts.dev](https://learnshortcuts.dev)

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - 素晴らしいReactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSSフレームワーク
- [Lucide](https://lucide.dev/) - 美しいアイコンライブラリ

---

⭐ このプロジェクトが役に立ったら星を押してください！
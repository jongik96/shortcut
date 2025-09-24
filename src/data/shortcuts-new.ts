import { Shortcut } from '@/types/shortcuts';

export const shortcuts: Shortcut[] = [
  // === Windows 기본 단축키 ===
  {
    id: 'win-copy',
    name: 'コピー',
    description: '選択した項目をコピーします',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'win-paste',
    name: '貼り付け',
    description: 'コピーした項目を貼り付けます',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'win-cut',
    name: '切り取り',
    description: '選択した項目を切り取ります',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'win-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'win-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + Y',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'win-save',
    name: '保存',
    description: '現在のファイルを保存します',
    category: 'file',
    software: 'system',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ファイル保存']
  },
  {
    id: 'win-open',
    name: '開く',
    description: 'ファイルを開きます',
    category: 'file',
    software: 'system',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'オープン', 'ファイル開く']
  },
  {
    id: 'win-new',
    name: '新規作成',
    description: '新しいファイルを作成します',
    category: 'file',
    software: 'system',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', '新規作成', '新しいファイル']
  },
  {
    id: 'win-print',
    name: '印刷',
    description: '現在のファイルを印刷します',
    category: 'file',
    software: 'system',
    windows: 'Ctrl + P',
    mac: '⌘ + P',
    keywords: ['印刷', 'プリント', '出力']
  },
  {
    id: 'win-find',
    name: '検索',
    description: 'テキストを検索します',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'win-select-all',
    name: 'すべて選択',
    description: 'すべての項目を選択します',
    category: 'edit',
    software: 'system',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', 'オール選択']
  },
  {
    id: 'win-close',
    name: '閉じる',
    description: '現在のウィンドウを閉じます',
    category: 'file',
    software: 'system',
    windows: 'Alt + F4',
    mac: '⌘ + W',
    keywords: ['閉じる', 'クローズ', '終了']
  },

  // === Excel 단축키 ===
  {
    id: 'excel-bold',
    name: '太字',
    description: '選択したテキストを太字にします',
    category: 'format',
    software: 'excel',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', '太い文字']
  },
  {
    id: 'excel-italic',
    name: '斜体',
    description: '選択したテキストを斜体にします',
    category: 'format',
    software: 'excel',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック']
  },
  {
    id: 'excel-underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    software: 'excel',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン']
  },
  {
    id: 'excel-merge-cells',
    name: 'セル結合',
    description: '選択したセルを1つに結合します',
    category: 'format',
    software: 'excel',
    windows: 'Alt + H + M + C',
    mac: '⌘ + Option + M',
    keywords: ['結合', '統合', 'セル結合']
  },
  {
    id: 'excel-center-align',
    name: '中央揃え',
    description: 'セルの内容を中央揃えにします',
    category: 'format',
    software: 'excel',
    windows: 'Alt + H + A + C',
    mac: '⌘ + E',
    keywords: ['中央', '真ん中', '揃え']
  },
  {
    id: 'excel-go-to-cell',
    name: 'セル移動',
    description: '特定のセルに直接移動します',
    category: 'navigation',
    software: 'excel',
    windows: 'Ctrl + G',
    mac: '⌘ + G',
    keywords: ['移動', 'ジャンプ', 'セル移動']
  },
  {
    id: 'excel-find-replace',
    name: '検索と置換',
    description: 'テキストを検索して置換します',
    category: 'edit',
    software: 'excel',
    windows: 'Ctrl + H',
    mac: '⌘ + Shift + H',
    keywords: ['検索', '置換', '検索と置換']
  },
  {
    id: 'excel-insert-row',
    name: '行挿入',
    description: '選択した行の上に行を挿入します',
    category: 'insert',
    software: 'excel',
    windows: 'Ctrl + Shift + +',
    mac: '⌘ + Shift + +',
    keywords: ['行', '挿入', '追加']
  },
  {
    id: 'excel-insert-column',
    name: '列挿入',
    description: '選択した列の左に列を挿入します',
    category: 'insert',
    software: 'excel',
    windows: 'Ctrl + Shift + +',
    mac: '⌘ + Shift + +',
    keywords: ['列', '挿入', '追加']
  },
  {
    id: 'excel-delete-row',
    name: '行削除',
    description: '選択した行を削除します',
    category: 'edit',
    software: 'excel',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['行', '削除', '消去']
  },
  {
    id: 'excel-delete-column',
    name: '列削除',
    description: '選択した列を削除します',
    category: 'edit',
    software: 'excel',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['列', '削除', '消去']
  },
  {
    id: 'excel-auto-sum',
    name: 'オートSUM',
    description: '選択した範囲の合計を自動計算します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + =',
    mac: '⌘ + Shift + T',
    keywords: ['合計', 'SUM', 'オートSUM']
  },
  {
    id: 'excel-format-cells',
    name: 'セルの書式設定',
    description: 'セルの書式設定ダイアログを開きます',
    category: 'format',
    software: 'excel',
    windows: 'Ctrl + 1',
    mac: '⌘ + 1',
    keywords: ['書式', '設定', 'セル書式']
  },
  {
    id: 'excel-chart',
    name: 'グラフ挿入',
    description: '選択したデータからグラフを作成します',
    category: 'insert',
    software: 'excel',
    windows: 'F11',
    mac: 'F11',
    keywords: ['グラフ', 'チャート', '挿入']
  },
  {
    id: 'excel-freeze-panes',
    name: 'ウィンドウ枠の固定',
    description: '選択したセルより上と左の枠を固定します',
    category: 'view',
    software: 'excel',
    windows: 'Alt + W + F + F',
    mac: '⌘ + Option + F',
    keywords: ['固定', 'ウィンドウ', '枠']
  },

  // === Word 단축키 ===
  {
    id: 'word-bold',
    name: '太字',
    description: '選択したテキストを太字にします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', '太い文字']
  },
  {
    id: 'word-italic',
    name: '斜体',
    description: '選択したテキストを斜体にします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック']
  },
  {
    id: 'word-underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン']
  },
  {
    id: 'word-center-align',
    name: '中央揃え',
    description: '段落を中央揃えにします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + E',
    mac: '⌘ + E',
    keywords: ['中央', '真ん中', '揃え']
  },
  {
    id: 'word-left-align',
    name: '左揃え',
    description: '段落を左揃えにします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + L',
    mac: '⌘ + L',
    keywords: ['左', '左揃え', '揃え']
  },
  {
    id: 'word-right-align',
    name: '右揃え',
    description: '段落を右揃えにします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + R',
    mac: '⌘ + R',
    keywords: ['右', '右揃え', '揃え']
  },
  {
    id: 'word-justify',
    name: '両端揃え',
    description: '段落を両端揃えにします',
    category: 'format',
    software: 'word',
    windows: 'Ctrl + J',
    mac: '⌘ + J',
    keywords: ['両端', '両端揃え', '揃え']
  },
  {
    id: 'word-find-replace',
    name: '検索と置換',
    description: 'テキストを検索して置換します',
    category: 'edit',
    software: 'word',
    windows: 'Ctrl + H',
    mac: '⌘ + Shift + H',
    keywords: ['検索', '置換', '検索と置換']
  },
  {
    id: 'word-spell-check',
    name: 'スペルチェック',
    description: 'スペルチェックを実行します',
    category: 'tools',
    software: 'word',
    windows: 'F7',
    mac: 'F7',
    keywords: ['スペル', 'チェック', '校正']
  },
  {
    id: 'word-insert-table',
    name: '表挿入',
    description: '表を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + N + T',
    mac: '⌘ + Option + T',
    keywords: ['表', 'テーブル', '挿入']
  },
  {
    id: 'word-insert-page-break',
    name: '改ページ',
    description: '改ページを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Enter',
    mac: '⌘ + Enter',
    keywords: ['改ページ', 'ページ', '区切り']
  },
  {
    id: 'word-insert-hyperlink',
    name: 'ハイパーリンク挿入',
    description: 'ハイパーリンクを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + K',
    mac: '⌘ + K',
    keywords: ['ハイパーリンク', 'リンク', '挿入']
  },
  {
    id: 'word-insert-image',
    name: '画像挿入',
    description: '画像を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + N + P',
    mac: '⌘ + Option + I',
    keywords: ['画像', 'イメージ', '挿入']
  },
  {
    id: 'word-word-count',
    name: '文字数カウント',
    description: '文字数をカウントします',
    category: 'tools',
    software: 'word',
    windows: 'Ctrl + Shift + G',
    mac: '⌘ + Shift + G',
    keywords: ['文字数', 'カウント', '数える']
  },
  {
    id: 'word-print-preview',
    name: '印刷プレビュー',
    description: '印刷プレビューを表示します',
    category: 'file',
    software: 'word',
    windows: 'Ctrl + F2',
    mac: '⌘ + F2',
    keywords: ['印刷', 'プレビュー', '確認']
  },

  // === PowerPoint 단축키 ===
  {
    id: 'ppt-bold',
    name: '太字',
    description: '選択したテキストを太字にします',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', '太い文字']
  },
  {
    id: 'ppt-italic',
    name: '斜体',
    description: '選択したテキストを斜体にします',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック']
  },
  {
    id: 'ppt-underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン']
  },
  {
    id: 'ppt-center-align',
    name: '中央揃え',
    description: 'テキストを中央揃えにします',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + E',
    mac: '⌘ + E',
    keywords: ['中央', '真ん中', '揃え']
  },
  {
    id: 'ppt-new-slide',
    name: '新しいスライド',
    description: '新しいスライドを挿入します',
    category: 'insert',
    software: 'powerpoint',
    windows: 'Ctrl + M',
    mac: '⌘ + M',
    keywords: ['スライド', '新規', '挿入']
  },
  {
    id: 'ppt-duplicate-slide',
    name: 'スライド複製',
    description: '現在のスライドを複製します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['複製', 'コピー', 'スライド']
  },
  {
    id: 'ppt-slide-show',
    name: 'スライドショー開始',
    description: 'スライドショーを開始します',
    category: 'view',
    software: 'powerpoint',
    windows: 'F5',
    mac: 'F5',
    keywords: ['スライドショー', 'プレゼン', '開始']
  },
  {
    id: 'ppt-slide-show-from-current',
    name: '現在のスライドから開始',
    description: '現在のスライドからスライドショーを開始します',
    category: 'view',
    software: 'powerpoint',
    windows: 'Shift + F5',
    mac: 'Shift + F5',
    keywords: ['スライドショー', '現在', '開始']
  },
  {
    id: 'ppt-insert-image',
    name: '画像挿入',
    description: '画像を挿入します',
    category: 'insert',
    software: 'powerpoint',
    windows: 'Alt + N + P',
    mac: '⌘ + Option + I',
    keywords: ['画像', 'イメージ', '挿入']
  },
  {
    id: 'ppt-insert-shape',
    name: '図形挿入',
    description: '図形を挿入します',
    category: 'insert',
    software: 'powerpoint',
    windows: 'Alt + N + S',
    mac: '⌘ + Option + S',
    keywords: ['図形', 'シェイプ', '挿入']
  },
  {
    id: 'ppt-insert-text-box',
    name: 'テキストボックス挿入',
    description: 'テキストボックスを挿入します',
    category: 'insert',
    software: 'powerpoint',
    windows: 'Alt + N + X',
    mac: '⌘ + Option + X',
    keywords: ['テキストボックス', 'テキスト', '挿入']
  },
  {
    id: 'ppt-group-objects',
    name: 'オブジェクトグループ化',
    description: '選択したオブジェクトをグループ化します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + G',
    mac: '⌘ + G',
    keywords: ['グループ', 'グループ化', 'オブジェクト']
  },
  {
    id: 'ppt-ungroup-objects',
    name: 'グループ解除',
    description: 'グループ化されたオブジェクトを解除します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + Shift + G',
    mac: '⌘ + Shift + G',
    keywords: ['グループ解除', '解除', 'オブジェクト']
  },
  {
    id: 'ppt-copy-format',
    name: '書式のコピー',
    description: '選択したオブジェクトの書式をコピーします',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + Shift + C',
    mac: '⌘ + Shift + C',
    keywords: ['書式', 'コピー', 'スタイル']
  },
  {
    id: 'ppt-paste-format',
    name: '書式の貼り付け',
    description: 'コピーした書式を貼り付けます',
    category: 'format',
    software: 'powerpoint',
    windows: 'Ctrl + Shift + V',
    mac: '⌘ + Shift + V',
    keywords: ['書式', '貼り付け', 'スタイル']
  }
];

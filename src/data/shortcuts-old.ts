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
    id: 'underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン']
  },
  {
    id: 'merge-cells',
    name: 'セル結合',
    description: '選択したセルを1つに結合します',
    category: 'format',
    windows: 'Alt + H + M + C',
    mac: '⌘ + Option + M',
    keywords: ['結合', '統合', 'セル結合']
  },
  {
    id: 'center-align',
    name: '中央揃え',
    description: 'セルの内容を中央揃えにします',
    category: 'format',
    windows: 'Alt + H + A + C',
    mac: '⌘ + E',
    keywords: ['中央', '真ん中', '揃え']
  },

  // 셀/행/열 이동
  {
    id: 'go-to-cell',
    name: 'セル移動',
    description: '特定のセルに直接移動します',
    category: 'navigation',
    windows: 'Ctrl + G',
    mac: '⌘ + G',
    keywords: ['移動', 'ジャンプ', 'セル移動']
  },
  {
    id: 'select-all',
    name: 'すべて選択',
    description: 'ワークシートのすべてのセルを選択します',
    category: 'navigation',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['全選択', 'すべて選択', '全てのセル']
  },
  {
    id: 'select-row',
    name: '行全体選択',
    description: '現在の行のすべてのセルを選択します',
    category: 'navigation',
    windows: 'Shift + Space',
    mac: 'Shift + Space',
    keywords: ['行選択', '行全体', '行選択']
  },
  {
    id: 'select-column',
    name: '列全体選択',
    description: '現在の列のすべてのセルを選択します',
    category: 'navigation',
    windows: 'Ctrl + Space',
    mac: '⌘ + Space',
    keywords: ['列選択', '列全体', '列選択']
  },
  {
    id: 'last-cell',
    name: '最後のセルに移動',
    description: 'データがある最後のセルに移動します',
    category: 'navigation',
    windows: 'Ctrl + End',
    mac: '⌘ + End',
    keywords: ['最後', '終わり', '最後のセル']
  },

  // 데이터 입력
  {
    id: 'fill-down',
    name: '下にコピー',
    description: '上のセルの内容を下にコピーします',
    category: 'data',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['コピー', '下', '埋める']
  },
  {
    id: 'fill-right',
    name: '右にコピー',
    description: '左のセルの内容を右にコピーします',
    category: 'data',
    windows: 'Ctrl + R',
    mac: '⌘ + R',
    keywords: ['コピー', '右', '埋める']
  },
  {
    id: 'auto-sum',
    name: 'オートSUM',
    description: '選択した範囲の合計を自動計算します',
    category: 'data',
    windows: 'Alt + =',
    mac: '⌘ + Shift + T',
    keywords: ['合計', 'オートSUM', '足し算']
  },
  {
    id: 'insert-date',
    name: '現在の日付を入力',
    description: '現在の日付をセルに入力します',
    category: 'data',
    windows: 'Ctrl + ;',
    mac: '⌘ + ;',
    keywords: ['日付', '現在の日付', '今日']
  },
  {
    id: 'insert-time',
    name: '現在の時刻を入力',
    description: '現在の時刻をセルに入力します',
    category: 'data',
    windows: 'Ctrl + Shift + ;',
    mac: '⌘ + Shift + :',
    keywords: ['時刻', '現在の時刻', '今']
  },

  // 시트/파일 관리
  {
    id: 'new-sheet',
    name: '新しいワークシート',
    description: '新しいワークシートを作成します',
    category: 'sheet',
    windows: 'Shift + F11',
    mac: '⌘ + Shift + N',
    keywords: ['新シート', 'ワークシート', 'シート追加']
  },
  {
    id: 'delete-sheet',
    name: 'ワークシート削除',
    description: '現在のワークシートを削除します',
    category: 'sheet',
    windows: 'Alt + H + D + S',
    mac: '⌘ + Option + Delete',
    keywords: ['シート削除', 'ワークシート削除', '削除']
  },
  {
    id: 'save',
    name: '保存',
    description: '現在のファイルを保存します',
    category: 'file',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ']
  },
  {
    id: 'open',
    name: '開く',
    description: 'ファイルを開きます',
    category: 'file',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'ファイル開く']
  },
  {
    id: 'new-file',
    name: '新しいファイル',
    description: '新しいワークブックを作成します',
    category: 'file',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新ファイル', '新ワークブック']
  }
];
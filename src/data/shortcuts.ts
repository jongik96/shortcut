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
  {
    id: 'win-new-tab',
    name: '新しいタブ',
    description: '新しいタブを開きます',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['ブラウザ', 'タブ', '新規']
  },
  {
    id: 'win-close-tab',
    name: 'タブを閉じる',
    description: '現在のタブを閉じます',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + W',
    mac: '⌘ + W',
    keywords: ['ブラウザ', 'タブ', '閉じる']
  },
  {
    id: 'win-refresh',
    name: 'ページ更新',
    description: 'ページを更新します',
    category: 'system',
    software: 'system',
    windows: 'F5',
    mac: '⌘ + R',
    keywords: ['ブラウザ', '更新', 'リロード']
  },
  {
    id: 'win-task-manager',
    name: 'タスクマネージャー',
    description: 'タスクマネージャーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + Shift + Esc',
    mac: '⌘ + Option + Esc',
    keywords: ['システム', 'タスク', 'マネージャー']
  },
  {
    id: 'win-screenshot',
    name: 'スクリーンショット',
    description: 'スクリーンショットを撮ります',
    category: 'system',
    software: 'system',
    windows: 'Win + Shift + S',
    mac: '⌘ + Shift + 4',
    keywords: ['スクリーンショット', 'キャプチャ', 'システム']
  },
  {
    id: 'win-force-quit',
    name: '強制終了',
    description: 'アプリケーションを強制終了します',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + Alt + Delete',
    mac: '⌘ + Option + Esc',
    keywords: ['システム', '強制終了', 'アプリ']
  },
  {
    id: 'win-alt-tab',
    name: 'アプリ切り替え',
    description: '開いているアプリケーションを切り替えます',
    category: 'system',
    software: 'system',
    windows: 'Alt + Tab',
    mac: '⌘ + Tab',
    keywords: ['切り替え', 'アプリ', 'ウィンドウ']
  },
  {
    id: 'win-win-key',
    name: 'スタートメニュー',
    description: 'スタートメニューを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win',
    mac: '⌘ + Space',
    keywords: ['スタート', 'メニュー', '検索']
  },
  {
    id: 'win-desktop',
    name: 'デスクトップ表示',
    description: 'デスクトップを表示します',
    category: 'system',
    software: 'system',
    windows: 'Win + D',
    mac: 'F11',
    keywords: ['デスクトップ', '表示', '最小化']
  },
  {
    id: 'win-file-explorer',
    name: 'エクスプローラー',
    description: 'ファイルエクスプローラーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + E',
    mac: '⌘ + Option + Space',
    keywords: ['エクスプローラー', 'ファイル', 'フォルダ']
  },
  {
    id: 'win-settings',
    name: '設定',
    description: 'Windows設定を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + I',
    mac: '⌘ + ,',
    keywords: ['設定', 'システム', 'オプション']
  },
  {
    id: 'win-lock',
    name: '画面ロック',
    description: '画面をロックします',
    category: 'system',
    software: 'system',
    windows: 'Win + L',
    mac: '⌘ + Ctrl + Q',
    keywords: ['ロック', '画面', 'セキュリティ']
  },
  {
    id: 'win-run',
    name: 'ファイル名を指定して実行',
    description: 'ファイル名を指定して実行ダイアログを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R',
    mac: '⌘ + Space',
    keywords: ['実行', 'ファイル名', 'コマンド']
  },
  {
    id: 'win-search',
    name: '検索',
    description: 'Windows検索を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + S',
    mac: '⌘ + Space',
    keywords: ['検索', 'ファイル', 'アプリ']
  },
  {
    id: 'win-task-view',
    name: 'タスクビュー',
    description: 'タスクビューを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + Tab',
    mac: 'F3',
    keywords: ['タスク', 'ビュー', 'デスクトップ']
  },
  {
    id: 'win-minimize-all',
    name: 'すべて最小化',
    description: 'すべてのウィンドウを最小化します',
    category: 'system',
    software: 'system',
    windows: 'Win + M',
    mac: '⌘ + Option + M',
    keywords: ['最小化', 'すべて', 'ウィンドウ']
  },
  {
    id: 'win-restore-windows',
    name: 'ウィンドウ復元',
    description: '最小化されたウィンドウを復元します',
    category: 'system',
    software: 'system',
    windows: 'Win + Shift + M',
    mac: '⌘ + Option + Shift + M',
    keywords: ['復元', 'ウィンドウ', '元に戻す']
  },
  {
    id: 'win-project',
    name: 'プロジェクション',
    description: 'プロジェクション設定を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + P',
    mac: '⌘ + F1',
    keywords: ['プロジェクション', 'ディスプレイ', '外部']
  },
  {
    id: 'win-calculator',
    name: '電卓',
    description: '電卓を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → calc',
    mac: '⌘ + Space → Calculator',
    keywords: ['電卓', '計算', 'Calculator']
  },
  {
    id: 'win-notepad',
    name: 'メモ帳',
    description: 'メモ帳を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → notepad',
    mac: '⌘ + Space → TextEdit',
    keywords: ['メモ帳', 'テキスト', 'Notepad']
  },
  {
    id: 'win-cmd',
    name: 'コマンドプロンプト',
    description: 'コマンドプロンプトを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → cmd',
    mac: '⌘ + Space → Terminal',
    keywords: ['コマンド', 'プロンプト', 'CMD']
  },
  {
    id: 'win-powershell',
    name: 'PowerShell',
    description: 'PowerShellを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + X → Windows PowerShell',
    mac: '⌘ + Space → Terminal',
    keywords: ['PowerShell', 'コマンド', 'スクリプト']
  },
  {
    id: 'win-device-manager',
    name: 'デバイスマネージャー',
    description: 'デバイスマネージャーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + X → Device Manager',
    mac: '⌘ + Space → System Information',
    keywords: ['デバイス', 'マネージャー', 'ハードウェア']
  },
  {
    id: 'win-control-panel',
    name: 'コントロールパネル',
    description: 'コントロールパネルを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → control',
    mac: '⌘ + Space → System Preferences',
    keywords: ['コントロール', 'パネル', '設定']
  },
  {
    id: 'win-event-viewer',
    name: 'イベントビューアー',
    description: 'イベントビューアーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → eventvwr',
    mac: '⌘ + Space → Console',
    keywords: ['イベント', 'ビューアー', 'ログ']
  },
  {
    id: 'win-registry',
    name: 'レジストリエディター',
    description: 'レジストリエディターを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → regedit',
    mac: '⌘ + Space → Terminal',
    keywords: ['レジストリ', 'エディター', 'システム']
  },
  {
    id: 'win-system-info',
    name: 'システム情報',
    description: 'システム情報を表示します',
    category: 'system',
    software: 'system',
    windows: 'Win + R → msinfo32',
    mac: '⌘ + Space → System Information',
    keywords: ['システム', '情報', 'ハードウェア']
  },
  {
    id: 'win-disk-cleanup',
    name: 'ディスククリーンアップ',
    description: 'ディスククリーンアップを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → cleanmgr',
    mac: '⌘ + Space → Disk Utility',
    keywords: ['ディスク', 'クリーンアップ', '容量']
  },
  {
    id: 'win-resource-monitor',
    name: 'リソースモニター',
    description: 'リソースモニターを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → resmon',
    mac: '⌘ + Space → Activity Monitor',
    keywords: ['リソース', 'モニター', 'パフォーマンス']
  },
  {
    id: 'win-performance-monitor',
    name: 'パフォーマンスモニター',
    description: 'パフォーマンスモニターを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → perfmon',
    mac: '⌘ + Space → Activity Monitor',
    keywords: ['パフォーマンス', 'モニター', '監視']
  },
  {
    id: 'win-services',
    name: 'サービス',
    description: 'サービス管理を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → services.msc',
    mac: '⌘ + Space → Terminal',
    keywords: ['サービス', '管理', 'システム']
  },
  {
    id: 'win-group-policy',
    name: 'グループポリシー',
    description: 'グループポリシーエディターを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → gpedit.msc',
    mac: '⌘ + Space → Terminal',
    keywords: ['グループ', 'ポリシー', '設定']
  },
  {
    id: 'win-windows-update',
    name: 'Windows Update',
    description: 'Windows Updateを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + I → Update & Security',
    mac: '⌘ + Space → Software Update',
    keywords: ['Windows', 'Update', '更新']
  },
  {
    id: 'win-backup-restore',
    name: 'バックアップと復元',
    description: 'バックアップと復元を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → sdclt',
    mac: '⌘ + Space → Time Machine',
    keywords: ['バックアップ', '復元', 'データ']
  },
  {
    id: 'win-windows-defender',
    name: 'Windows Defender',
    description: 'Windows Defenderを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + I → Update & Security → Windows Security',
    mac: '⌘ + Space → System Preferences → Security',
    keywords: ['Windows', 'Defender', 'セキュリティ']
  },

  // === Mac 기본 단축키 ===
  {
    id: 'mac-spotlight',
    name: 'Spotlight検索',
    description: 'Spotlight検索を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + S',
    mac: '⌘ + Space',
    keywords: ['Spotlight', '検索', 'アプリ']
  },
  {
    id: 'mac-launchpad',
    name: 'Launchpad',
    description: 'Launchpadを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + S',
    mac: 'F4',
    keywords: ['Launchpad', 'アプリ', '起動']
  },
  {
    id: 'mac-mission-control',
    name: 'Mission Control',
    description: 'Mission Controlを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + Tab',
    mac: 'F3',
    keywords: ['Mission', 'Control', 'デスクトップ']
  },
  {
    id: 'mac-expose',
    name: 'Exposé',
    description: 'すべてのウィンドウを表示します',
    category: 'system',
    software: 'system',
    windows: 'Win + Tab',
    mac: 'F9',
    keywords: ['Exposé', 'ウィンドウ', '表示']
  },
  {
    id: 'mac-application-windows',
    name: 'アプリケーションウィンドウ',
    description: '現在のアプリのウィンドウを表示します',
    category: 'system',
    software: 'system',
    windows: 'Alt + Tab',
    mac: 'F10',
    keywords: ['アプリ', 'ウィンドウ', '表示']
  },
  {
    id: 'mac-dashboard',
    name: 'Dashboard',
    description: 'Dashboardを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + D',
    mac: 'F12',
    keywords: ['Dashboard', 'ウィジェット', '表示']
  },
  {
    id: 'mac-dock',
    name: 'Dock表示/非表示',
    description: 'Dockを表示/非表示にします',
    category: 'system',
    software: 'system',
    windows: 'Win + D',
    mac: '⌘ + Option + D',
    keywords: ['Dock', '表示', '非表示']
  },
  {
    id: 'mac-finder',
    name: 'Finder',
    description: 'Finderを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + E',
    mac: '⌘ + Option + Space',
    keywords: ['Finder', 'ファイル', 'フォルダ']
  },
  {
    id: 'mac-system-preferences',
    name: 'システム環境設定',
    description: 'システム環境設定を開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + I',
    mac: '⌘ + ,',
    keywords: ['システム', '環境設定', '設定']
  },
  {
    id: 'mac-force-quit',
    name: '強制終了',
    description: 'アプリケーションを強制終了します',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + Alt + Delete',
    mac: '⌘ + Option + Esc',
    keywords: ['強制終了', 'アプリ', '終了']
  },
  {
    id: 'mac-logout',
    name: 'ログアウト',
    description: 'ユーザーをログアウトします',
    category: 'system',
    software: 'system',
    windows: 'Win + L',
    mac: '⌘ + Shift + Q',
    keywords: ['ログアウト', 'ユーザー', '終了']
  },
  {
    id: 'mac-sleep',
    name: 'スリープ',
    description: 'Macをスリープモードにします',
    category: 'system',
    software: 'system',
    windows: 'Win + L',
    mac: '⌘ + Option + Power',
    keywords: ['スリープ', '電源', '省電力']
  },
  {
    id: 'mac-shutdown',
    name: 'シャットダウン',
    description: 'Macをシャットダウンします',
    category: 'system',
    software: 'system',
    windows: 'Alt + F4',
    mac: '⌘ + Ctrl + Power',
    keywords: ['シャットダウン', '電源', '終了']
  },
  {
    id: 'mac-restart',
    name: '再起動',
    description: 'Macを再起動します',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + Alt + Delete',
    mac: '⌘ + Ctrl + Power',
    keywords: ['再起動', '電源', 'リブート']
  },
  {
    id: 'mac-screenshot-full',
    name: '全画面スクリーンショット',
    description: '全画面のスクリーンショットを撮ります',
    category: 'system',
    software: 'system',
    windows: 'Win + Shift + S',
    mac: '⌘ + Shift + 3',
    keywords: ['スクリーンショット', '全画面', 'キャプチャ']
  },
  {
    id: 'mac-screenshot-selection',
    name: '選択範囲スクリーンショット',
    description: '選択範囲のスクリーンショットを撮ります',
    category: 'system',
    software: 'system',
    windows: 'Win + Shift + S',
    mac: '⌘ + Shift + 4',
    keywords: ['スクリーンショット', '選択', 'キャプチャ']
  },
  {
    id: 'mac-screenshot-window',
    name: 'ウィンドウスクリーンショット',
    description: 'ウィンドウのスクリーンショットを撮ります',
    category: 'system',
    software: 'system',
    windows: 'Win + Shift + S',
    mac: '⌘ + Shift + 4 + Space',
    keywords: ['スクリーンショット', 'ウィンドウ', 'キャプチャ']
  },
  {
    id: 'mac-clipboard-manager',
    name: 'クリップボードマネージャー',
    description: 'クリップボードマネージャーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + V',
    mac: '⌘ + Shift + V',
    keywords: ['クリップボード', 'マネージャー', '履歴']
  },
  {
    id: 'mac-character-viewer',
    name: '文字ビューアー',
    description: '文字ビューアーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + .',
    mac: '⌘ + Ctrl + Space',
    keywords: ['文字', 'ビューアー', '絵文字']
  },
  {
    id: 'mac-emoji-picker',
    name: '絵文字ピッカー',
    description: '絵文字ピッカーを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + .',
    mac: '⌘ + Ctrl + Space',
    keywords: ['絵文字', 'ピッカー', '文字']
  },
  {
    id: 'mac-activity-monitor',
    name: 'アクティビティモニター',
    description: 'アクティビティモニターを開きます',
    category: 'system',
    software: 'system',
    windows: 'Ctrl + Shift + Esc',
    mac: '⌘ + Space → Activity Monitor',
    keywords: ['アクティビティ', 'モニター', 'プロセス']
  },
  {
    id: 'mac-terminal',
    name: 'ターミナル',
    description: 'ターミナルを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → cmd',
    mac: '⌘ + Space → Terminal',
    keywords: ['ターミナル', 'コマンド', 'シェル']
  },
  {
    id: 'mac-disk-utility',
    name: 'ディスクユーティリティ',
    description: 'ディスクユーティリティを開きます',
    category: 'system',
    software: 'system',
    windows: 'Win + R → cleanmgr',
    mac: '⌘ + Space → Disk Utility',
    keywords: ['ディスク', 'ユーティリティ', '管理']
  },
  {
    'id': 'mac-system-information',
    'name': 'システム情報',
    'description': 'システム情報を表示します',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → msinfo32',
    'mac': '⌘ + Space → System Information',
    'keywords': ['システム', '情報', 'ハードウェア']
  },
  {
    'id': 'mac-keychain-access',
    'name': 'キーチェーンアクセス',
    'description': 'キーチェーンアクセスを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → control',
    'mac': '⌘ + Space → Keychain Access',
    'keywords': ['キーチェーン', 'パスワード', 'セキュリティ']
  },
  {
    'id': 'mac-color-sync-utility',
    'name': 'カラーマッチユーティリティ',
    'description': 'カラーマッチユーティリティを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → control',
    'mac': '⌘ + Space → ColorSync Utility',
    'keywords': ['カラー', 'マッチ', 'ユーティリティ']
  },
  {
    'id': 'mac-console',
    'name': 'コンソール',
    'description': 'コンソールを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → eventvwr',
    'mac': '⌘ + Space → Console',
    'keywords': ['コンソール', 'ログ', 'システム']
  },
  {
    'id': 'mac-grapher',
    'name': 'Grapher',
    'description': 'Grapherを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → calc',
    'mac': '⌘ + Space → Grapher',
    'keywords': ['Grapher', 'グラフ', '数学']
  },
  {
    'id': 'mac-font-book',
    'name': 'Font Book',
    'description': 'Font Bookを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → control',
    'mac': '⌘ + Space → Font Book',
    'keywords': ['Font', 'Book', 'フォント']
  },
  {
    'id': 'mac-digital-color-meter',
    'name': 'デジタルカラーメーター',
    'description': 'デジタルカラーメーターを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → control',
    'mac': '⌘ + Space → Digital Color Meter',
    'keywords': ['デジタル', 'カラー', 'メーター']
  },
  {
    'id': 'mac-textedit',
    'name': 'TextEdit',
    'description': 'TextEditを開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → notepad',
    'mac': '⌘ + Space → TextEdit',
    'keywords': ['TextEdit', 'テキスト', 'エディター']
  },
  {
    'id': 'mac-calculator',
    'name': '計算機',
    'description': '計算機を開きます',
    'category': 'system',
    'software': 'system',
    'windows': 'Win + R → calc',
    'mac': '⌘ + Space → Calculator',
    'keywords': ['計算機', 'Calculator', '計算']
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
  {
    id: 'excel-insert-function',
    name: '関数の挿入',
    description: '関数の挿入ダイアログを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Shift + F3',
    mac: '⌘ + Shift + A',
    keywords: ['関数', '挿入', '数式']
  },
  {
    id: 'excel-auto-calculate',
    name: '自動計算',
    description: 'ワークシートを再計算します',
    category: 'data',
    software: 'excel',
    windows: 'F9',
    mac: 'F9',
    keywords: ['計算', '再計算', '更新']
  },
  {
    id: 'excel-absolute-reference',
    name: '絶対参照',
    description: 'セル参照を絶対参照に切り替えます',
    category: 'data',
    software: 'excel',
    windows: 'F4',
    mac: '⌘ + T',
    keywords: ['絶対', '参照', 'セル']
  },
  {
    id: 'excel-fill-down',
    name: '下方向にコピー',
    description: '選択したセルを下方向にコピーします',
    category: 'edit',
    software: 'excel',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['コピー', '下方向', 'フィル']
  },
  {
    id: 'excel-fill-right',
    name: '右方向にコピー',
    description: '選択したセルを右方向にコピーします',
    category: 'edit',
    software: 'excel',
    windows: 'Ctrl + R',
    mac: '⌘ + R',
    keywords: ['コピー', '右方向', 'フィル']
  },
  {
    id: 'excel-fill-series',
    name: '連続データの作成',
    description: '連続データを作成します',
    category: 'data',
    software: 'excel',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + L',
    keywords: ['連続', 'データ', '作成']
  },
  {
    id: 'excel-data-validation',
    name: 'データの入力規則',
    description: 'データの入力規則ダイアログを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + D + L',
    mac: '⌘ + Option + V',
    keywords: ['データ', '入力規則', '検証']
  },
  {
    id: 'excel-conditional-formatting',
    name: '条件付き書式',
    description: '条件付き書式を適用します',
    category: 'format',
    software: 'excel',
    windows: 'Alt + H + L',
    mac: '⌘ + Option + F',
    keywords: ['条件', '書式', '色']
  },
  {
    id: 'excel-remove-duplicates',
    name: '重複の削除',
    description: '重複するデータを削除します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + M',
    mac: '⌘ + Option + D',
    keywords: ['重複', '削除', 'データ']
  },
  {
    id: 'excel-sort-ascending',
    name: '昇順で並べ替え',
    description: '選択した範囲を昇順で並べ替えます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + S + A',
    mac: '⌘ + Shift + R',
    keywords: ['並べ替え', '昇順', 'ソート']
  },
  {
    id: 'excel-sort-descending',
    name: '降順で並べ替え',
    description: '選択した範囲を降順で並べ替えます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + S + D',
    mac: '⌘ + Shift + S',
    keywords: ['並べ替え', '降順', 'ソート']
  },
  {
    id: 'excel-filter',
    name: 'フィルター',
    description: 'フィルターを適用/解除します',
    category: 'data',
    software: 'excel',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + F',
    keywords: ['フィルター', '絞り込み', 'データ']
  },
  {
    id: 'excel-pivot-table',
    name: 'ピボットテーブル',
    description: 'ピボットテーブルを作成します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + N + V',
    mac: '⌘ + Option + P',
    keywords: ['ピボット', 'テーブル', '集計']
  },
  {
    id: 'excel-chart-wizard',
    name: 'グラフウィザード',
    description: 'グラフウィザードを開きます',
    category: 'insert',
    software: 'excel',
    windows: 'Alt + N + C',
    mac: '⌘ + Option + C',
    keywords: ['グラフ', 'ウィザード', '作成']
  },
  {
    id: 'excel-insert-table',
    name: 'テーブル挿入',
    description: 'テーブルを挿入します',
    category: 'insert',
    software: 'excel',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['テーブル', '挿入', 'データ']
  },
  {
    id: 'excel-name-manager',
    name: '名前の管理',
    description: '名前の管理ダイアログを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Ctrl + F3',
    mac: '⌘ + F3',
    keywords: ['名前', '管理', '定義']
  },
  {
    id: 'excel-go-to-special',
    name: 'セルの選択',
    description: '特別なセルを選択します',
    category: 'navigation',
    software: 'excel',
    windows: 'Ctrl + G → Special',
    mac: '⌘ + G → Special',
    keywords: ['選択', '特別', 'セル']
  },
  {
    id: 'excel-hide-columns',
    name: '列を非表示',
    description: '選択した列を非表示にします',
    category: 'view',
    software: 'excel',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['非表示', '列', '隠す']
  },
  {
    id: 'excel-hide-rows',
    name: '行を非表示',
    description: '選択した行を非表示にします',
    category: 'view',
    software: 'excel',
    windows: 'Ctrl + 9',
    mac: '⌘ + 9',
    keywords: ['非表示', '行', '隠す']
  },
  {
    id: 'excel-unhide-columns',
    name: '列の表示',
    description: '非表示の列を表示します',
    category: 'view',
    software: 'excel',
    windows: 'Ctrl + Shift + 0',
    mac: '⌘ + Shift + 0',
    keywords: ['表示', '列', '復元']
  },
  {
    id: 'excel-unhide-rows',
    name: '行の表示',
    description: '非表示の行を表示します',
    category: 'view',
    software: 'excel',
    windows: 'Ctrl + Shift + 9',
    mac: '⌘ + Shift + 9',
    keywords: ['表示', '行', '復元']
  },
  {
    id: 'excel-group-columns',
    name: '列のグループ化',
    description: '選択した列をグループ化します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + Shift + →',
    mac: '⌘ + Shift + K',
    keywords: ['グループ', '列', '階層']
  },
  {
    id: 'excel-group-rows',
    name: '行のグループ化',
    description: '選択した行をグループ化します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + Shift + ↓',
    mac: '⌘ + Shift + J',
    keywords: ['グループ', '行', '階層']
  },
  {
    id: 'excel-ungroup',
    name: 'グループ解除',
    description: 'グループ化を解除します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + Shift + ←',
    mac: '⌘ + Shift + U',
    keywords: ['グループ解除', '解除', '階層']
  },
  {
    id: 'excel-subtotal',
    name: '小計',
    description: '小計を挿入します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + B',
    mac: '⌘ + Option + S',
    keywords: ['小計', '集計', '合計']
  },
  {
    id: 'excel-outline',
    name: 'アウトライン',
    description: 'アウトラインを表示/非表示にします',
    category: 'view',
    software: 'excel',
    windows: 'Alt + A + O',
    mac: '⌘ + Option + O',
    keywords: ['アウトライン', '階層', '表示']
  },
  {
    id: 'excel-data-table',
    name: 'データテーブル',
    description: 'データテーブルを作成します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + W + T',
    mac: '⌘ + Option + T',
    keywords: ['データ', 'テーブル', 'シミュレーション']
  },
  {
    id: 'excel-scenario-manager',
    name: 'シナリオマネージャー',
    description: 'シナリオマネージャーを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + W + S',
    mac: '⌘ + Option + S',
    keywords: ['シナリオ', 'マネージャー', '分析']
  },
  {
    id: 'excel-goal-seek',
    name: 'ゴールシーク',
    description: 'ゴールシークを実行します',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + W + G',
    mac: '⌘ + Option + G',
    keywords: ['ゴール', 'シーク', '分析']
  },
  {
    id: 'excel-solver',
    name: 'ソルバー',
    description: 'ソルバーを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + W + V',
    mac: '⌘ + Option + V',
    keywords: ['ソルバー', '最適化', '分析']
  },
  {
    id: 'excel-data-analysis',
    name: 'データ分析',
    description: 'データ分析ツールを開きます',
    category: 'data',
    software: 'excel',
    windows: 'Alt + A + W + D',
    mac: '⌘ + Option + D',
    keywords: ['データ', '分析', 'ツール']
  },
  {
    id: 'excel-macro-recorder',
    name: 'マクロ記録',
    description: 'マクロの記録を開始/停止します',
    category: 'tools',
    software: 'excel',
    windows: 'Alt + T + M + R',
    mac: '⌘ + Option + R',
    keywords: ['マクロ', '記録', '自動化']
  },
  {
    id: 'excel-visual-basic',
    name: 'Visual Basic Editor',
    description: 'Visual Basic Editorを開きます',
    category: 'tools',
    software: 'excel',
    windows: 'Alt + F11',
    mac: '⌘ + Option + F11',
    keywords: ['Visual', 'Basic', 'Editor']
  },
  {
    id: 'excel-add-ins',
    name: 'アドイン',
    description: 'アドインを管理します',
    category: 'tools',
    software: 'excel',
    windows: 'Alt + T + I',
    mac: '⌘ + Option + I',
    keywords: ['アドイン', '拡張', '機能']
  },
  {
    id: 'excel-options',
    name: 'オプション',
    description: 'Excelのオプションを開きます',
    category: 'tools',
    software: 'excel',
    windows: 'Alt + F + T',
    mac: '⌘ + ,',
    keywords: ['オプション', '設定', '環境']
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
  {
    id: 'word-page-break',
    name: '改ページ挿入',
    description: '改ページを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Enter',
    mac: '⌘ + Enter',
    keywords: ['改ページ', 'ページ', '区切り']
  },
  {
    id: 'word-column-break',
    name: '段区切り',
    description: '段区切りを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Shift + Enter',
    mac: '⌘ + Shift + Enter',
    keywords: ['段区切り', '段', '区切り']
  },
  {
    id: 'word-line-break',
    name: '改行',
    description: '改行を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Shift + Enter',
    mac: 'Shift + Enter',
    keywords: ['改行', '行', '区切り']
  },
  {
    id: 'word-non-breaking-space',
    name: '改行しないスペース',
    description: '改行しないスペースを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Shift + Space',
    mac: '⌘ + Shift + Space',
    keywords: ['スペース', '改行', 'しない']
  },
  {
    id: 'word-non-breaking-hyphen',
    name: '改行しないハイフン',
    description: '改行しないハイフンを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Shift + -',
    mac: '⌘ + Shift + -',
    keywords: ['ハイフン', '改行', 'しない']
  },
  {
    id: 'word-soft-hyphen',
    name: 'ソフトハイフン',
    description: 'ソフトハイフンを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ソフト', 'ハイフン', '改行']
  },
  {
    id: 'word-em-dash',
    name: '長いダッシュ',
    description: '長いダッシュを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0151',
    mac: '⌘ + Shift + -',
    keywords: ['ダッシュ', '長い', '記号']
  },
  {
    id: 'word-en-dash',
    name: '短いダッシュ',
    description: '短いダッシュを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0150',
    mac: '⌘ + -',
    keywords: ['ダッシュ', '短い', '記号']
  },
  {
    id: 'word-ellipsis',
    name: '省略記号',
    description: '省略記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0133',
    mac: '⌘ + ;',
    keywords: ['省略', '記号', '三点']
  },
  {
    id: 'word-copyright',
    name: '著作権記号',
    description: '著作権記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0169',
    mac: '⌘ + Option + C',
    keywords: ['著作権', '記号', 'コピーライト']
  },
  {
    id: 'word-trademark',
    name: '商標記号',
    description: '商標記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0153',
    mac: '⌘ + Option + 2',
    keywords: ['商標', '記号', 'トレードマーク']
  },
  {
    id: 'word-registered',
    name: '登録商標記号',
    description: '登録商標記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0174',
    mac: '⌘ + Option + R',
    keywords: ['登録商標', '記号', 'レジスター']
  },
  {
    id: 'word-degree',
    name: '度記号',
    description: '度記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0176',
    mac: '⌘ + Shift + 8',
    keywords: ['度', '記号', '温度']
  },
  {
    id: 'word-plus-minus',
    name: 'プラスマイナス記号',
    description: 'プラスマイナス記号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + 0177',
    mac: '⌘ + Option + =',
    keywords: ['プラス', 'マイナス', '記号']
  },
  {
    id: 'word-section-break',
    name: 'セクション区切り',
    description: 'セクション区切りを挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Ctrl + Shift + Enter',
    mac: '⌘ + Shift + Enter',
    keywords: ['セクション', '区切り', '分割']
  },
  {
    id: 'word-page-numbers',
    name: 'ページ番号',
    description: 'ページ番号を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + N + N',
    mac: '⌘ + Option + P',
    keywords: ['ページ', '番号', '挿入']
  },
  {
    id: 'word-date-time',
    name: '日付と時刻',
    description: '日付と時刻を挿入します',
    category: 'insert',
    software: 'word',
    windows: 'Alt + Shift + D',
    mac: '⌘ + Shift + D',
    keywords: ['日付', '時刻', '挿入']
  },
  {
    'id': 'word-field',
    'name': 'フィールド',
    'description': 'フィールドを挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Ctrl + F9',
    'mac': '⌘ + F9',
    'keywords': ['フィールド', '挿入', 'データ']
  },
  {
    'id': 'word-bookmark',
    'name': 'ブックマーク',
    'description': 'ブックマークを挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Ctrl + Shift + F5',
    'mac': '⌘ + Shift + F5',
    'keywords': ['ブックマーク', '挿入', '目印']
  },
  {
    'id': 'word-cross-reference',
    'name': '相互参照',
    'description': '相互参照を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + X',
    'mac': '⌘ + Option + X',
    'keywords': ['相互参照', '参照', '挿入']
  },
  {
    'id': 'word-footnote',
    'name': '脚注',
    'description': '脚注を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Ctrl + F',
    'mac': '⌘ + Option + F',
    'keywords': ['脚注', '注釈', '挿入']
  },
  {
    'id': 'word-endnote',
    'name': '文末脚注',
    'description': '文末脚注を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Ctrl + D',
    'mac': '⌘ + Option + D',
    'keywords': ['文末脚注', '注釈', '挿入']
  },
  {
    'id': 'word-citation',
    'name': '引用',
    'description': '引用を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + I',
    'mac': '⌘ + Option + I',
    'keywords': ['引用', '挿入', '参考文献']
  },
  {
    'id': 'word-bibliography',
    'name': '参考文献',
    'description': '参考文献を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + B',
    'mac': '⌘ + Option + B',
    'keywords': ['参考文献', '挿入', '引用']
  },
  {
    'id': 'word-table-of-contents',
    'name': '目次',
    'description': '目次を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + O',
    'mac': '⌘ + Option + O',
    'keywords': ['目次', '挿入', '索引']
  },
  {
    'id': 'word-index',
    'name': '索引',
    'description': '索引を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + X',
    'mac': '⌘ + Option + X',
    'keywords': ['索引', '挿入', '目次']
  },
  {
    'id': 'word-caption',
    'name': 'キャプション',
    'description': 'キャプションを挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + Shift + C',
    'mac': '⌘ + Option + C',
    'keywords': ['キャプション', '挿入', '説明']
  },
  {
    'id': 'word-equation',
    'name': '数式',
    'description': '数式を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + =',
    'mac': '⌘ + =',
    'keywords': ['数式', '挿入', '数学']
  },
  {
    'id': 'word-symbol',
    'name': '記号',
    'description': '記号を挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + I + S',
    'mac': '⌘ + Option + S',
    'keywords': ['記号', '挿入', '特殊文字']
  },
  {
    'id': 'word-object',
    'name': 'オブジェクト',
    'description': 'オブジェクトを挿入します',
    'category': 'insert',
    'software': 'word',
    'windows': 'Alt + I + O',
    'mac': '⌘ + Option + O',
    'keywords': ['オブジェクト', '挿入', '埋め込み']
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
  },
  {
    id: 'ppt-new-presentation',
    name: '新しいプレゼンテーション',
    description: '新しいプレゼンテーションを作成します',
    category: 'file',
    software: 'powerpoint',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'プレゼンテーション', '作成']
  },
  {
    id: 'ppt-open-presentation',
    name: 'プレゼンテーションを開く',
    description: '既存のプレゼンテーションを開きます',
    category: 'file',
    software: 'powerpoint',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'プレゼンテーション', 'ファイル']
  },
  {
    id: 'ppt-save-presentation',
    name: 'プレゼンテーションを保存',
    description: 'プレゼンテーションを保存します',
    category: 'file',
    software: 'powerpoint',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'プレゼンテーション', 'ファイル']
  },
  {
    id: 'ppt-save-as',
    name: '名前を付けて保存',
    description: 'プレゼンテーションを別名で保存します',
    category: 'file',
    software: 'powerpoint',
    windows: 'F12',
    mac: '⌘ + Shift + S',
    keywords: ['名前', '保存', '別名']
  },
  {
    id: 'ppt-print',
    name: '印刷',
    description: 'プレゼンテーションを印刷します',
    category: 'file',
    software: 'powerpoint',
    windows: 'Ctrl + P',
    mac: '⌘ + P',
    keywords: ['印刷', 'プリント', '出力']
  },
  {
    id: 'ppt-close-presentation',
    name: 'プレゼンテーションを閉じる',
    description: '現在のプレゼンテーションを閉じます',
    category: 'file',
    software: 'powerpoint',
    windows: 'Ctrl + W',
    mac: '⌘ + W',
    keywords: ['閉じる', 'プレゼンテーション', '終了']
  },
  {
    id: 'ppt-exit-powerpoint',
    name: 'PowerPointを終了',
    description: 'PowerPointを終了します',
    category: 'file',
    software: 'powerpoint',
    windows: 'Alt + F4',
    mac: '⌘ + Q',
    keywords: ['終了', 'PowerPoint', 'アプリ']
  },
  {
    id: 'ppt-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'ppt-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + Y',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'ppt-cut',
    name: '切り取り',
    description: '選択した項目を切り取ります',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'ppt-copy',
    name: 'コピー',
    description: '選択した項目をコピーします',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'ppt-paste',
    name: '貼り付け',
    description: 'コピーした項目を貼り付けます',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'ppt-select-all',
    name: 'すべて選択',
    description: 'すべての項目を選択します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', 'オール選択']
  },
  {
    id: 'ppt-find',
    name: '検索',
    description: 'テキストを検索します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'ppt-replace',
    name: '置換',
    description: 'テキストを検索して置換します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + H',
    mac: '⌘ + Shift + H',
    keywords: ['置換', '検索', '変更']
  },
  {
    id: 'ppt-delete',
    name: '削除',
    description: '選択した項目を削除します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Delete',
    mac: 'Delete',
    keywords: ['削除', '消去', '削除']
  },
  {
    id: 'ppt-duplicate-slide-copy',
    name: 'スライド複製',
    description: '現在のスライドを複製します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['複製', 'コピー', 'スライド']
  },
  {
    id: 'ppt-move-slide-up',
    name: 'スライドを上に移動',
    description: '選択したスライドを上に移動します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + ↑',
    mac: '⌘ + ↑',
    keywords: ['移動', '上', 'スライド']
  },
  {
    id: 'ppt-move-slide-down',
    name: 'スライドを下に移動',
    description: '選択したスライドを下に移動します',
    category: 'edit',
    software: 'powerpoint',
    windows: 'Ctrl + ↓',
    mac: '⌘ + ↓',
    keywords: ['移動', '下', 'スライド']
  },
  {
    id: 'ppt-zoom-in',
    name: 'ズームイン',
    description: '表示を拡大します',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズーム', '拡大', '表示']
  },
  {
    id: 'ppt-zoom-out',
    name: 'ズームアウト',
    description: '表示を縮小します',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズーム', '縮小', '表示']
  },
  {
    id: 'ppt-fit-to-window',
    name: 'ウィンドウに合わせる',
    description: 'スライドをウィンドウに合わせて表示します',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + Shift + W',
    mac: '⌘ + Shift + W',
    keywords: ['ウィンドウ', '合わせる', '表示']
  },
  {
    id: 'ppt-normal-view',
    name: '標準表示',
    description: '標準表示に切り替えます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + Alt + N',
    mac: '⌘ + Option + N',
    keywords: ['標準', '表示', '切り替え']
  },
  {
    id: 'ppt-slide-sorter-view',
    name: 'スライド一覧表示',
    description: 'スライド一覧表示に切り替えます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + Alt + S',
    mac: '⌘ + Option + S',
    keywords: ['スライド', '一覧', '表示']
  },
  {
    id: 'ppt-notes-view',
    name: 'ノート表示',
    description: 'ノート表示に切り替えます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + Alt + M',
    mac: '⌘ + Option + M',
    keywords: ['ノート', '表示', '切り替え']
  },
  {
    id: 'ppt-master-view',
    name: 'マスター表示',
    description: 'マスター表示に切り替えます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Ctrl + Alt + M',
    mac: '⌘ + Option + M',
    keywords: ['マスター', '表示', '切り替え']
  },
  {
    id: 'ppt-ruler',
    name: 'ルーラー',
    description: 'ルーラーを表示/非表示にします',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + Shift + R',
    mac: '⌘ + Option + R',
    keywords: ['ルーラー', '表示', '非表示']
  },
  {
    id: 'ppt-grid',
    name: 'グリッド',
    description: 'グリッドを表示/非表示にします',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + F9',
    mac: '⌘ + Option + G',
    keywords: ['グリッド', '表示', '非表示']
  },
  {
    id: 'ppt-guides',
    name: 'ガイド',
    description: 'ガイドを表示/非表示にします',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + F9',
    mac: '⌘ + Option + G',
    keywords: ['ガイド', '表示', '非表示']
  },
  {
    id: 'ppt-slide-master',
    name: 'スライドマスター',
    description: 'スライドマスターを開きます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + V + M',
    mac: '⌘ + Option + M',
    keywords: ['スライド', 'マスター', 'テンプレート']
  },
  {
    id: 'ppt-handout-master',
    name: '配布資料マスター',
    description: '配布資料マスターを開きます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + V + H',
    mac: '⌘ + Option + H',
    keywords: ['配布資料', 'マスター', 'テンプレート']
  },
  {
    id: 'ppt-notes-master',
    name: 'ノートマスター',
    description: 'ノートマスターを開きます',
    category: 'view',
    software: 'powerpoint',
    windows: 'Alt + V + N',
    mac: '⌘ + Option + N',
    keywords: ['ノート', 'マスター', 'テンプレート']
  }
];

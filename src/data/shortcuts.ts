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
  },

  // === Google Docs 단축키 ===
  {
    id: 'docs-bold',
    name: '太字',
    description: '選択したテキストを太字にします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', 'フォント']
  },
  {
    id: 'docs-italic',
    name: '斜体',
    description: '選択したテキストを斜体にします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック', 'フォント']
  },
  {
    id: 'docs-underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン', 'フォント']
  },
  {
    id: 'docs-copy',
    name: 'コピー',
    description: '選択したテキストをコピーします',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'docs-paste',
    name: '貼り付け',
    description: 'コピーしたテキストを貼り付けます',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'docs-cut',
    name: '切り取り',
    description: '選択したテキストを切り取ります',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'docs-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'docs-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + Y',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'docs-find',
    name: '検索',
    description: '文書内でテキストを検索します',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'docs-replace',
    name: '置換',
    description: 'テキストを検索して置換します',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + H',
    mac: '⌘ + Shift + H',
    keywords: ['置換', 'リプレース', '変更']
  },
  {
    id: 'docs-select-all',
    name: 'すべて選択',
    description: '文書全体を選択します',
    category: 'edit',
    software: 'docs',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', '選択']
  },
  {
    id: 'docs-save',
    name: '保存',
    description: '文書を保存します',
    category: 'file',
    software: 'docs',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ストレージ']
  },
  {
    id: 'docs-new',
    name: '新規文書',
    description: '新しい文書を作成します',
    category: 'file',
    software: 'docs',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'ニュー', '作成']
  },
  {
    id: 'docs-open',
    name: '開く',
    description: '既存の文書を開きます',
    category: 'file',
    software: 'docs',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'オープン', '読み込み']
  },
  {
    id: 'docs-print',
    name: '印刷',
    description: '文書を印刷します',
    category: 'file',
    software: 'docs',
    windows: 'Ctrl + P',
    mac: '⌘ + P',
    keywords: ['印刷', 'プリント', '出力']
  },
  {
    id: 'docs-insert-link',
    name: 'リンク挿入',
    description: 'ハイパーリンクを挿入します',
    category: 'insert',
    software: 'docs',
    windows: 'Ctrl + K',
    mac: '⌘ + K',
    keywords: ['リンク', 'ハイパーリンク', 'URL']
  },
  {
    id: 'docs-insert-comment',
    name: 'コメント挿入',
    description: 'コメントを挿入します',
    category: 'insert',
    software: 'docs',
    windows: 'Ctrl + Alt + M',
    mac: '⌘ + Option + M',
    keywords: ['コメント', 'メモ', '注釈']
  },
  {
    id: 'docs-insert-table',
    name: '表挿入',
    description: '表を挿入します',
    category: 'insert',
    software: 'docs',
    windows: 'Alt + I + T',
    mac: '⌘ + Option + T',
    keywords: ['表', 'テーブル', 'グリッド']
  },
  {
    id: 'docs-insert-image',
    name: '画像挿入',
    description: '画像を挿入します',
    category: 'insert',
    software: 'docs',
    windows: 'Alt + I + I',
    mac: '⌘ + Option + I',
    keywords: ['画像', 'イメージ', '写真']
  },
  {
    id: 'docs-align-left',
    name: '左揃え',
    description: 'テキストを左揃えにします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + L',
    keywords: ['左揃え', 'アライメント', '配置']
  },
  {
    id: 'docs-align-center',
    name: '中央揃え',
    description: 'テキストを中央揃えにします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + E',
    mac: '⌘ + Shift + E',
    keywords: ['中央揃え', 'アライメント', '配置']
  },
  {
    id: 'docs-align-right',
    name: '右揃え',
    description: 'テキストを右揃えにします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + R',
    mac: '⌘ + Shift + R',
    keywords: ['右揃え', 'アライメント', '配置']
  },
  {
    id: 'docs-justify',
    name: '両端揃え',
    description: 'テキストを両端揃えにします',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + J',
    mac: '⌘ + Shift + J',
    keywords: ['両端揃え', 'アライメント', '配置']
  },
  {
    id: 'docs-bullet-list',
    name: '箇条書き',
    description: '箇条書きリストを作成します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + 8',
    mac: '⌘ + Shift + 8',
    keywords: ['箇条書き', 'リスト', 'ブレット']
  },
  {
    id: 'docs-numbered-list',
    name: '番号付きリスト',
    description: '番号付きリストを作成します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Shift + 7',
    mac: '⌘ + Shift + 7',
    keywords: ['番号付き', 'リスト', 'ナンバー']
  },
  {
    id: 'docs-heading-1',
    name: '見出し1',
    description: '見出し1スタイルを適用します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Alt + 1',
    mac: '⌘ + Option + 1',
    keywords: ['見出し', 'ヘッダー', 'スタイル']
  },
  {
    id: 'docs-heading-2',
    name: '見出し2',
    description: '見出し2スタイルを適用します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Alt + 2',
    mac: '⌘ + Option + 2',
    keywords: ['見出し', 'ヘッダー', 'スタイル']
  },
  {
    id: 'docs-heading-3',
    name: '見出し3',
    description: '見出し3スタイルを適用します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Alt + 3',
    mac: '⌘ + Option + 3',
    keywords: ['見出し', 'ヘッダー', 'スタイル']
  },
  {
    id: 'docs-normal-text',
    name: '標準テキスト',
    description: '標準テキストスタイルを適用します',
    category: 'format',
    software: 'docs',
    windows: 'Ctrl + Alt + 0',
    mac: '⌘ + Option + 0',
    keywords: ['標準', 'ノーマル', 'スタイル']
  },

  // === Google Sheets 단축키 ===
  {
    id: 'sheets-bold',
    name: '太字',
    description: '選択したセルを太字にします',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', 'フォント']
  },
  {
    id: 'sheets-italic',
    name: '斜体',
    description: '選択したセルを斜体にします',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック', 'フォント']
  },
  {
    id: 'sheets-underline',
    name: '下線',
    description: '選択したセルに下線を引きます',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン', 'フォント']
  },
  {
    id: 'sheets-copy',
    name: 'コピー',
    description: '選択したセルをコピーします',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'sheets-paste',
    name: '貼り付け',
    description: 'コピーしたセルを貼り付けます',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'sheets-cut',
    name: '切り取り',
    description: '選択したセルを切り取ります',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'sheets-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'sheets-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + Y',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'sheets-find',
    name: '検索',
    description: 'スプレッドシート内でテキストを検索します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'sheets-replace',
    name: '置換',
    description: 'テキストを検索して置換します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + H',
    mac: '⌘ + Shift + H',
    keywords: ['置換', 'リプレース', '変更']
  },
  {
    id: 'sheets-select-all',
    name: 'すべて選択',
    description: 'スプレッドシート全体を選択します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', '選択']
  },
  {
    id: 'sheets-save',
    name: '保存',
    description: 'スプレッドシートを保存します',
    category: 'file',
    software: 'sheets',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ストレージ']
  },
  {
    id: 'sheets-new',
    name: '新規スプレッドシート',
    description: '新しいスプレッドシートを作成します',
    category: 'file',
    software: 'sheets',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'ニュー', '作成']
  },
  {
    id: 'sheets-open',
    name: '開く',
    description: '既存のスプレッドシートを開きます',
    category: 'file',
    software: 'sheets',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'オープン', '読み込み']
  },
  {
    id: 'sheets-print',
    name: '印刷',
    description: 'スプレッドシートを印刷します',
    category: 'file',
    software: 'sheets',
    windows: 'Ctrl + P',
    mac: '⌘ + P',
    keywords: ['印刷', 'プリント', '出力']
  },
  {
    id: 'sheets-insert-row',
    name: '行挿入',
    description: '選択した行の上に行を挿入します',
    category: 'insert',
    software: 'sheets',
    windows: 'Ctrl + Alt + I + R',
    mac: '⌘ + Option + I + R',
    keywords: ['行', 'ロウ', '挿入']
  },
  {
    id: 'sheets-insert-column',
    name: '列挿入',
    description: '選択した列の左に列を挿入します',
    category: 'insert',
    software: 'sheets',
    windows: 'Ctrl + Alt + I + C',
    mac: '⌘ + Option + I + C',
    keywords: ['列', 'カラム', '挿入']
  },
  {
    id: 'sheets-delete-row',
    name: '行削除',
    description: '選択した行を削除します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + Alt + E + R',
    mac: '⌘ + Option + E + R',
    keywords: ['行', 'ロウ', '削除']
  },
  {
    id: 'sheets-delete-column',
    name: '列削除',
    description: '選択した列を削除します',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + Alt + E + C',
    mac: '⌘ + Option + E + C',
    keywords: ['列', 'カラム', '削除']
  },
  {
    id: 'sheets-insert-function',
    name: '関数挿入',
    description: '関数を挿入します',
    category: 'insert',
    software: 'sheets',
    windows: 'Shift + F3',
    mac: 'Shift + F3',
    keywords: ['関数', 'ファンクション', '計算']
  },
  {
    id: 'sheets-autosum',
    name: 'オートSUM',
    description: '選択した範囲の合計を自動計算します',
    category: 'data',
    software: 'sheets',
    windows: 'Alt + =',
    mac: '⌘ + Shift + T',
    keywords: ['合計', 'SUM', '計算']
  },
  {
    id: 'sheets-fill-down',
    name: '下方向にコピー',
    description: '選択したセルの内容を下方向にコピーします',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['コピー', '下方向', 'フィル']
  },
  {
    id: 'sheets-fill-right',
    name: '右方向にコピー',
    description: '選択したセルの内容を右方向にコピーします',
    category: 'edit',
    software: 'sheets',
    windows: 'Ctrl + R',
    mac: '⌘ + R',
    keywords: ['コピー', '右方向', 'フィル']
  },
  {
    id: 'sheets-format-cells',
    name: 'セルの書式設定',
    description: 'セルの書式設定ダイアログを開きます',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + 1',
    mac: '⌘ + 1',
    keywords: ['書式', 'フォーマット', '設定']
  },
  {
    id: 'sheets-align-left',
    name: '左揃え',
    description: 'セルの内容を左揃えにします',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + L',
    keywords: ['左揃え', 'アライメント', '配置']
  },
  {
    id: 'sheets-align-center',
    name: '中央揃え',
    description: 'セルの内容を中央揃えにします',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + Shift + E',
    mac: '⌘ + Shift + E',
    keywords: ['中央揃え', 'アライメント', '配置']
  },
  {
    id: 'sheets-align-right',
    name: '右揃え',
    description: 'セルの内容を右揃えにします',
    category: 'format',
    software: 'sheets',
    windows: 'Ctrl + Shift + R',
    mac: '⌘ + Shift + R',
    keywords: ['右揃え', 'アライメント', '配置']
  },
  {
    id: 'sheets-sort-ascending',
    name: '昇順ソート',
    description: '選択した範囲を昇順でソートします',
    category: 'data',
    software: 'sheets',
    windows: 'Alt + A + S + A',
    mac: '⌘ + Shift + R',
    keywords: ['ソート', '昇順', '並び替え']
  },
  {
    id: 'sheets-sort-descending',
    name: '降順ソート',
    description: '選択した範囲を降順でソートします',
    category: 'data',
    software: 'sheets',
    windows: 'Alt + A + S + D',
    mac: '⌘ + Shift + S',
    keywords: ['ソート', '降順', '並び替え']
  },
  {
    id: 'sheets-filter',
    name: 'フィルター',
    description: 'フィルターを作成または削除します',
    category: 'data',
    software: 'sheets',
    windows: 'Ctrl + Shift + F',
    mac: '⌘ + Shift + F',
    keywords: ['フィルター', '絞り込み', 'データ']
  },
  {
    id: 'sheets-chart',
    name: 'グラフ挿入',
    description: 'グラフを挿入します',
    category: 'insert',
    software: 'sheets',
    windows: 'Alt + I + C',
    mac: '⌘ + Option + C',
    keywords: ['グラフ', 'チャート', '挿入']
  },
  {
    id: 'sheets-freeze-rows',
    name: '行を固定',
    description: '選択した行を固定します',
    category: 'view',
    software: 'sheets',
    windows: 'Alt + V + F + R',
    mac: '⌘ + Option + F + R',
    keywords: ['固定', 'フリーズ', '行']
  },
  {
    id: 'sheets-freeze-columns',
    name: '列を固定',
    description: '選択した列を固定します',
    category: 'view',
    software: 'sheets',
    windows: 'Alt + V + F + C',
    mac: '⌘ + Option + F + C',
    keywords: ['固定', 'フリーズ', '列']
  },

  // === Google Slides 단축키 ===
  {
    id: 'slides-bold',
    name: '太字',
    description: '選択したテキストを太字にします',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + B',
    mac: '⌘ + B',
    keywords: ['太字', 'ボールド', 'フォント']
  },
  {
    id: 'slides-italic',
    name: '斜体',
    description: '選択したテキストを斜体にします',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + I',
    mac: '⌘ + I',
    keywords: ['斜体', 'イタリック', 'フォント']
  },
  {
    id: 'slides-underline',
    name: '下線',
    description: '選択したテキストに下線を引きます',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + U',
    mac: '⌘ + U',
    keywords: ['下線', 'アンダーライン', 'フォント']
  },
  {
    id: 'slides-copy',
    name: 'コピー',
    description: '選択したオブジェクトをコピーします',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'slides-paste',
    name: '貼り付け',
    description: 'コピーしたオブジェクトを貼り付けます',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'slides-cut',
    name: '切り取り',
    description: '選択したオブジェクトを切り取ります',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'slides-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'slides-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + Y',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'slides-new-slide',
    name: '新しいスライド',
    description: '新しいスライドを挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Ctrl + M',
    mac: '⌘ + M',
    keywords: ['新しいスライド', '挿入', '追加']
  },
  {
    id: 'slides-duplicate-slide',
    name: 'スライドを複製',
    description: '選択したスライドを複製します',
    category: 'edit',
    software: 'slides',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['複製', 'コピー', 'スライド']
  },
  {
    id: 'slides-delete-slide',
    name: 'スライドを削除',
    description: '選択したスライドを削除します',
    category: 'edit',
    software: 'slides',
    windows: 'Delete',
    mac: 'Delete',
    keywords: ['削除', 'デリート', 'スライド']
  },
  {
    id: 'slides-insert-text',
    name: 'テキストボックス挿入',
    description: 'テキストボックスを挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Alt + I + T',
    mac: '⌘ + Option + T',
    keywords: ['テキストボックス', 'テキスト', '挿入']
  },
  {
    id: 'slides-insert-image',
    name: '画像挿入',
    description: '画像を挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Alt + I + I',
    mac: '⌘ + Option + I',
    keywords: ['画像', 'イメージ', '写真']
  },
  {
    id: 'slides-insert-shape',
    name: '図形挿入',
    description: '図形を挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Alt + I + S',
    mac: '⌘ + Option + S',
    keywords: ['図形', 'シェイプ', '挿入']
  },
  {
    id: 'slides-insert-table',
    name: '表挿入',
    description: '表を挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Alt + I + T',
    mac: '⌘ + Option + T',
    keywords: ['表', 'テーブル', 'グリッド']
  },
  {
    id: 'slides-insert-chart',
    name: 'グラフ挿入',
    description: 'グラフを挿入します',
    category: 'insert',
    software: 'slides',
    windows: 'Alt + I + C',
    mac: '⌘ + Option + C',
    keywords: ['グラフ', 'チャート', '挿入']
  },
  {
    id: 'slides-align-left',
    name: '左揃え',
    description: '選択したオブジェクトを左揃えにします',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + L',
    keywords: ['左揃え', 'アライメント', '配置']
  },
  {
    id: 'slides-align-center',
    name: '中央揃え',
    description: '選択したオブジェクトを中央揃えにします',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + Shift + E',
    mac: '⌘ + Shift + E',
    keywords: ['中央揃え', 'アライメント', '配置']
  },
  {
    id: 'slides-align-right',
    name: '右揃え',
    description: '選択したオブジェクトを右揃えにします',
    category: 'format',
    software: 'slides',
    windows: 'Ctrl + Shift + R',
    mac: '⌘ + Shift + R',
    keywords: ['右揃え', 'アライメント', '配置']
  },
  {
    id: 'slides-present',
    name: 'プレゼンテーション開始',
    description: 'プレゼンテーションを開始します',
    category: 'presentation',
    software: 'slides',
    windows: 'Ctrl + F5',
    mac: '⌘ + Shift + Enter',
    keywords: ['プレゼンテーション', '開始', 'スライドショー']
  },
  {
    id: 'slides-present-from-start',
    name: '最初からプレゼンテーション',
    description: '最初のスライドからプレゼンテーションを開始します',
    category: 'presentation',
    software: 'slides',
    windows: 'F5',
    mac: '⌘ + Enter',
    keywords: ['プレゼンテーション', '最初から', 'スライドショー']
  },
  {
    id: 'slides-next-slide',
    name: '次のスライド',
    description: '次のスライドに移動します',
    category: 'navigation',
    software: 'slides',
    windows: 'Page Down',
    mac: 'Page Down',
    keywords: ['次のスライド', '進む', 'ナビゲーション']
  },
  {
    id: 'slides-previous-slide',
    name: '前のスライド',
    description: '前のスライドに移動します',
    category: 'navigation',
    software: 'slides',
    windows: 'Page Up',
    mac: 'Page Up',
    keywords: ['前のスライド', '戻る', 'ナビゲーション']
  },
  {
    id: 'slides-first-slide',
    name: '最初のスライド',
    description: '最初のスライドに移動します',
    category: 'navigation',
    software: 'slides',
    windows: 'Home',
    mac: '⌘ + ↑',
    keywords: ['最初のスライド', 'ホーム', 'ナビゲーション']
  },
  {
    id: 'slides-last-slide',
    name: '最後のスライド',
    description: '最後のスライドに移動します',
    category: 'navigation',
    software: 'slides',
    windows: 'End',
    mac: '⌘ + ↓',
    keywords: ['最後のスライド', 'エンド', 'ナビゲーション']
  },
  {
    id: 'slides-zoom-in',
    name: 'ズームイン',
    description: 'スライドを拡大表示します',
    category: 'view',
    software: 'slides',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'slides-zoom-out',
    name: 'ズームアウト',
    description: 'スライドを縮小表示します',
    category: 'view',
    software: 'slides',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'slides-fit-to-screen',
    name: '画面に合わせる',
    description: 'スライドを画面サイズに合わせて表示します',
    category: 'view',
    software: 'slides',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['画面に合わせる', 'フィット', 'ビュー']
  },
  {
    id: 'slides-save',
    name: '保存',
    description: 'プレゼンテーションを保存します',
    category: 'file',
    software: 'slides',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ストレージ']
  },
  {
    id: 'slides-new',
    name: '新規プレゼンテーション',
    description: '新しいプレゼンテーションを作成します',
    category: 'file',
    software: 'slides',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'ニュー', '作成']
  },
  {
    id: 'slides-open',
    name: '開く',
    description: '既存のプレゼンテーションを開きます',
    category: 'file',
    software: 'slides',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'オープン', '読み込み']
  },
  {
    id: 'slides-print',
    name: '印刷',
    description: 'プレゼンテーションを印刷します',
    category: 'file',
    software: 'slides',
    windows: 'Ctrl + P',
    mac: '⌘ + P',
    keywords: ['印刷', 'プリント', '出力']
  },

  // === Chrome 단축키 ===
  {
    id: 'chrome-new-tab',
    name: '新しいタブ',
    description: '新しいタブを開きます',
    category: 'tabs',
    software: 'chrome',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['新しいタブ', 'タブ', '開く']
  },
  {
    id: 'chrome-close-tab',
    name: 'タブを閉じる',
    description: '現在のタブを閉じます',
    category: 'tabs',
    software: 'chrome',
    windows: 'Ctrl + W',
    mac: '⌘ + W',
    keywords: ['タブを閉じる', '閉じる', 'タブ']
  },
  {
    id: 'chrome-reopen-tab',
    name: '閉じたタブを再開',
    description: '最近閉じたタブを再開します',
    category: 'tabs',
    software: 'chrome',
    windows: 'Ctrl + Shift + T',
    mac: '⌘ + Shift + T',
    keywords: ['閉じたタブ', '再開', '復元']
  },
  {
    id: 'chrome-new-window',
    name: '新しいウィンドウ',
    description: '新しいウィンドウを開きます',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新しいウィンドウ', 'ウィンドウ', '開く']
  },
  {
    id: 'chrome-new-incognito',
    name: 'シークレットウィンドウ',
    description: 'シークレットウィンドウを開きます',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + Shift + N',
    mac: '⌘ + Shift + N',
    keywords: ['シークレット', 'プライベート', 'ウィンドウ']
  },
  {
    id: 'chrome-bookmarks',
    name: 'ブックマーク',
    description: 'ブックマークマネージャーを開きます',
    category: 'bookmarks',
    software: 'chrome',
    windows: 'Ctrl + Shift + O',
    mac: '⌘ + Option + B',
    keywords: ['ブックマーク', 'お気に入り', 'マネージャー']
  },
  {
    id: 'chrome-bookmark-page',
    name: 'ページをブックマーク',
    description: '現在のページをブックマークします',
    category: 'bookmarks',
    software: 'chrome',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['ブックマーク', 'お気に入り', '保存']
  },
  {
    id: 'chrome-history',
    name: '履歴',
    description: '履歴ページを開きます',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + H',
    mac: '⌘ + Y',
    keywords: ['履歴', 'ヒストリー', '過去']
  },
  {
    id: 'chrome-downloads',
    name: 'ダウンロード',
    description: 'ダウンロードページを開きます',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + J',
    mac: '⌘ + Shift + J',
    keywords: ['ダウンロード', 'ファイル', '取得']
  },
  {
    id: 'chrome-address-bar',
    name: 'アドレスバーにフォーカス',
    description: 'アドレスバーにフォーカスを移動します',
    category: 'navigation',
    software: 'chrome',
    windows: 'Ctrl + L',
    mac: '⌘ + L',
    keywords: ['アドレスバー', 'URL', 'フォーカス']
  },
  {
    id: 'chrome-search',
    name: '検索',
    description: 'ページ内でテキストを検索します',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'chrome-refresh',
    name: '更新',
    description: 'ページを更新します',
    category: 'browser',
    software: 'chrome',
    windows: 'F5',
    mac: '⌘ + R',
    keywords: ['更新', 'リフレッシュ', '再読み込み']
  },
  {
    id: 'chrome-force-refresh',
    name: '強制更新',
    description: 'キャッシュを無視してページを更新します',
    category: 'browser',
    software: 'chrome',
    windows: 'Ctrl + F5',
    mac: '⌘ + Shift + R',
    keywords: ['強制更新', 'キャッシュ', '再読み込み']
  },
  {
    id: 'chrome-back',
    name: '戻る',
    description: '前のページに戻ります',
    category: 'navigation',
    software: 'chrome',
    windows: 'Alt + ←',
    mac: '⌘ + ←',
    keywords: ['戻る', 'バック', '前のページ']
  },
  {
    id: 'chrome-forward',
    name: '進む',
    description: '次のページに進みます',
    category: 'navigation',
    software: 'chrome',
    windows: 'Alt + →',
    mac: '⌘ + →',
    keywords: ['進む', 'フォワード', '次のページ']
  },
  {
    id: 'chrome-home',
    name: 'ホーム',
    description: 'ホームページに移動します',
    category: 'navigation',
    software: 'chrome',
    windows: 'Alt + Home',
    mac: '⌘ + Shift + H',
    keywords: ['ホーム', 'ホームページ', 'トップ']
  },
  {
    id: 'chrome-zoom-in',
    name: 'ズームイン',
    description: 'ページを拡大表示します',
    category: 'view',
    software: 'chrome',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'chrome-zoom-out',
    name: 'ズームアウト',
    description: 'ページを縮小表示します',
    category: 'view',
    software: 'chrome',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'chrome-reset-zoom',
    name: 'ズームリセット',
    description: 'ズームを100%にリセットします',
    category: 'view',
    software: 'chrome',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['ズームリセット', '100%', 'ビュー']
  },
  {
    id: 'chrome-devtools',
    name: '開発者ツール',
    description: '開発者ツールを開きます',
    category: 'tools',
    software: 'chrome',
    windows: 'F12',
    mac: '⌘ + Option + I',
    keywords: ['開発者ツール', 'デバッグ', 'インスペクト']
  },
  {
    id: 'chrome-task-manager',
    name: 'タスクマネージャー',
    description: 'ブラウザのタスクマネージャーを開きます',
    category: 'tools',
    software: 'chrome',
    windows: 'Shift + Esc',
    mac: 'Shift + Esc',
    keywords: ['タスクマネージャー', 'プロセス', '管理']
  },

  // === Safari 단축키 ===
  {
    id: 'safari-new-tab',
    name: '新しいタブ',
    description: '新しいタブを開きます',
    category: 'tabs',
    software: 'safari',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['新しいタブ', 'タブ', '開く']
  },
  {
    id: 'safari-close-tab',
    name: 'タブを閉じる',
    description: '現在のタブを閉じます',
    category: 'tabs',
    software: 'safari',
    windows: 'Ctrl + W',
    mac: '⌘ + W',
    keywords: ['タブを閉じる', '閉じる', 'タブ']
  },
  {
    id: 'safari-reopen-tab',
    name: '閉じたタブを再開',
    description: '最近閉じたタブを再開します',
    category: 'tabs',
    software: 'safari',
    windows: 'Ctrl + Shift + T',
    mac: '⌘ + Shift + T',
    keywords: ['閉じたタブ', '再開', '復元']
  },
  {
    id: 'safari-new-window',
    name: '新しいウィンドウ',
    description: '新しいウィンドウを開きます',
    category: 'browser',
    software: 'safari',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新しいウィンドウ', 'ウィンドウ', '開く']
  },
  {
    id: 'safari-new-private',
    name: 'プライベートブラウジング',
    description: 'プライベートブラウジングウィンドウを開きます',
    category: 'browser',
    software: 'safari',
    windows: 'Ctrl + Shift + N',
    mac: '⌘ + Shift + N',
    keywords: ['プライベート', 'シークレット', 'ウィンドウ']
  },
  {
    id: 'safari-bookmarks',
    name: 'ブックマーク',
    description: 'ブックマークを表示します',
    category: 'bookmarks',
    software: 'safari',
    windows: 'Ctrl + Shift + O',
    mac: '⌘ + Option + B',
    keywords: ['ブックマーク', 'お気に入り', 'マネージャー']
  },
  {
    id: 'safari-bookmark-page',
    name: 'ページをブックマーク',
    description: '現在のページをブックマークします',
    category: 'bookmarks',
    software: 'safari',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['ブックマーク', 'お気に入り', '保存']
  },
  {
    id: 'safari-history',
    name: '履歴',
    description: '履歴を表示します',
    category: 'browser',
    software: 'safari',
    windows: 'Ctrl + H',
    mac: '⌘ + Y',
    keywords: ['履歴', 'ヒストリー', '過去']
  },
  {
    id: 'safari-downloads',
    name: 'ダウンロード',
    description: 'ダウンロードを表示します',
    category: 'browser',
    software: 'safari',
    windows: 'Ctrl + J',
    mac: '⌘ + Shift + L',
    keywords: ['ダウンロード', 'ファイル', '取得']
  },
  {
    id: 'safari-address-bar',
    name: 'アドレスバーにフォーカス',
    description: 'アドレスバーにフォーカスを移動します',
    category: 'navigation',
    software: 'safari',
    windows: 'Ctrl + L',
    mac: '⌘ + L',
    keywords: ['アドレスバー', 'URL', 'フォーカス']
  },
  {
    id: 'safari-search',
    name: '検索',
    description: 'ページ内でテキストを検索します',
    category: 'browser',
    software: 'safari',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'safari-refresh',
    name: '更新',
    description: 'ページを更新します',
    category: 'browser',
    software: 'safari',
    windows: 'F5',
    mac: '⌘ + R',
    keywords: ['更新', 'リフレッシュ', '再読み込み']
  },
  {
    id: 'safari-back',
    name: '戻る',
    description: '前のページに戻ります',
    category: 'navigation',
    software: 'safari',
    windows: 'Alt + ←',
    mac: '⌘ + ←',
    keywords: ['戻る', 'バック', '前のページ']
  },
  {
    id: 'safari-forward',
    name: '進む',
    description: '次のページに進みます',
    category: 'navigation',
    software: 'safari',
    windows: 'Alt + →',
    mac: '⌘ + →',
    keywords: ['進む', 'フォワード', '次のページ']
  },
  {
    id: 'safari-home',
    name: 'ホーム',
    description: 'ホームページに移動します',
    category: 'navigation',
    software: 'safari',
    windows: 'Alt + Home',
    mac: '⌘ + Shift + H',
    keywords: ['ホーム', 'ホームページ', 'トップ']
  },
  {
    id: 'safari-zoom-in',
    name: 'ズームイン',
    description: 'ページを拡大表示します',
    category: 'view',
    software: 'safari',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'safari-zoom-out',
    name: 'ズームアウト',
    description: 'ページを縮小表示します',
    category: 'view',
    software: 'safari',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'safari-reset-zoom',
    name: 'ズームリセット',
    description: 'ズームを100%にリセットします',
    category: 'view',
    software: 'safari',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['ズームリセット', '100%', 'ビュー']
  },
  {
    id: 'safari-web-inspector',
    name: 'Webインスペクタ',
    description: 'Webインスペクタを開きます',
    category: 'tools',
    software: 'safari',
    windows: 'F12',
    mac: '⌘ + Option + I',
    keywords: ['Webインスペクタ', 'デバッグ', 'インスペクト']
  },

  // === Edge 단축키 ===
  {
    id: 'edge-new-tab',
    name: '新しいタブ',
    description: '新しいタブを開きます',
    category: 'tabs',
    software: 'edge',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['新しいタブ', 'タブ', '開く']
  },
  {
    id: 'edge-close-tab',
    name: 'タブを閉じる',
    description: '現在のタブを閉じます',
    category: 'tabs',
    software: 'edge',
    windows: 'Ctrl + W',
    mac: '⌘ + W',
    keywords: ['タブを閉じる', '閉じる', 'タブ']
  },
  {
    id: 'edge-reopen-tab',
    name: '閉じたタブを再開',
    description: '最近閉じたタブを再開します',
    category: 'tabs',
    software: 'edge',
    windows: 'Ctrl + Shift + T',
    mac: '⌘ + Shift + T',
    keywords: ['閉じたタブ', '再開', '復元']
  },
  {
    id: 'edge-new-window',
    name: '新しいウィンドウ',
    description: '新しいウィンドウを開きます',
    category: 'browser',
    software: 'edge',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新しいウィンドウ', 'ウィンドウ', '開く']
  },
  {
    id: 'edge-new-incognito',
    name: 'InPrivateウィンドウ',
    description: 'InPrivateウィンドウを開きます',
    category: 'browser',
    software: 'edge',
    windows: 'Ctrl + Shift + N',
    mac: '⌘ + Shift + N',
    keywords: ['InPrivate', 'プライベート', 'ウィンドウ']
  },
  {
    id: 'edge-favorites',
    name: 'お気に入り',
    description: 'お気に入りを表示します',
    category: 'bookmarks',
    software: 'edge',
    windows: 'Ctrl + Shift + O',
    mac: '⌘ + Option + B',
    keywords: ['お気に入り', 'ブックマーク', 'マネージャー']
  },
  {
    id: 'edge-add-favorite',
    name: 'お気に入りに追加',
    description: '現在のページをお気に入りに追加します',
    category: 'bookmarks',
    software: 'edge',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['お気に入り', 'ブックマーク', '追加']
  },
  {
    id: 'edge-history',
    name: '履歴',
    description: '履歴を表示します',
    category: 'browser',
    software: 'edge',
    windows: 'Ctrl + H',
    mac: '⌘ + Y',
    keywords: ['履歴', 'ヒストリー', '過去']
  },
  {
    id: 'edge-downloads',
    name: 'ダウンロード',
    description: 'ダウンロードを表示します',
    category: 'browser',
    software: 'edge',
    windows: 'Ctrl + J',
    mac: '⌘ + Shift + L',
    keywords: ['ダウンロード', 'ファイル', '取得']
  },
  {
    id: 'edge-address-bar',
    name: 'アドレスバーにフォーカス',
    description: 'アドレスバーにフォーカスを移動します',
    category: 'navigation',
    software: 'edge',
    windows: 'Ctrl + L',
    mac: '⌘ + L',
    keywords: ['アドレスバー', 'URL', 'フォーカス']
  },
  {
    id: 'edge-search',
    name: '検索',
    description: 'ページ内でテキストを検索します',
    category: 'browser',
    software: 'edge',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', '探す']
  },
  {
    id: 'edge-refresh',
    name: '更新',
    description: 'ページを更新します',
    category: 'browser',
    software: 'edge',
    windows: 'F5',
    mac: '⌘ + R',
    keywords: ['更新', 'リフレッシュ', '再読み込み']
  },
  {
    id: 'edge-back',
    name: '戻る',
    description: '前のページに戻ります',
    category: 'navigation',
    software: 'edge',
    windows: 'Alt + ←',
    mac: '⌘ + ←',
    keywords: ['戻る', 'バック', '前のページ']
  },
  {
    id: 'edge-forward',
    name: '進む',
    description: '次のページに進みます',
    category: 'navigation',
    software: 'edge',
    windows: 'Alt + →',
    mac: '⌘ + →',
    keywords: ['進む', 'フォワード', '次のページ']
  },
  {
    id: 'edge-home',
    name: 'ホーム',
    description: 'ホームページに移動します',
    category: 'navigation',
    software: 'edge',
    windows: 'Alt + Home',
    mac: '⌘ + Shift + H',
    keywords: ['ホーム', 'ホームページ', 'トップ']
  },
  {
    id: 'edge-zoom-in',
    name: 'ズームイン',
    description: 'ページを拡大表示します',
    category: 'view',
    software: 'edge',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'edge-zoom-out',
    name: 'ズームアウト',
    description: 'ページを縮小表示します',
    category: 'view',
    software: 'edge',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'edge-reset-zoom',
    name: 'ズームリセット',
    description: 'ズームを100%にリセットします',
    category: 'view',
    software: 'edge',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['ズームリセット', '100%', 'ビュー']
  },
  {
    id: 'edge-devtools',
    name: '開発者ツール',
    description: '開発者ツールを開きます',
    category: 'tools',
    software: 'edge',
    windows: 'F12',
    mac: '⌘ + Option + I',
    keywords: ['開発者ツール', 'デバッグ', 'インスペクト']
  },

  // === Photoshop 단축키 ===
  {
    id: 'photoshop-new',
    name: '新規ドキュメント',
    description: '新しいドキュメントを作成します',
    category: 'file',
    software: 'photoshop',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'ドキュメント', '作成']
  },
  {
    id: 'photoshop-open',
    name: '開く',
    description: '既存のファイルを開きます',
    category: 'file',
    software: 'photoshop',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'ファイル', '読み込み']
  },
  {
    id: 'photoshop-save',
    name: '保存',
    description: 'ファイルを保存します',
    category: 'file',
    software: 'photoshop',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ストレージ']
  },
  {
    id: 'photoshop-save-as',
    name: '別名で保存',
    description: 'ファイルを別名で保存します',
    category: 'file',
    software: 'photoshop',
    windows: 'Ctrl + Shift + S',
    mac: '⌘ + Shift + S',
    keywords: ['別名で保存', '名前を付けて保存', 'エクスポート']
  },
  {
    id: 'photoshop-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'photoshop-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + Shift + Z',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'photoshop-copy',
    name: 'コピー',
    description: '選択した領域をコピーします',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'photoshop-paste',
    name: '貼り付け',
    description: 'コピーした内容を貼り付けます',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'photoshop-cut',
    name: '切り取り',
    description: '選択した領域を切り取ります',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'photoshop-select-all',
    name: 'すべて選択',
    description: 'レイヤー全体を選択します',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', '選択']
  },
  {
    id: 'photoshop-deselect',
    name: '選択解除',
    description: '選択を解除します',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + D',
    mac: '⌘ + D',
    keywords: ['選択解除', 'デセレクト', '解除']
  },
  {
    id: 'photoshop-free-transform',
    name: '自由変形',
    description: '自由変形ツールを起動します',
    category: 'edit',
    software: 'photoshop',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['自由変形', 'トランスフォーム', '変形']
  },
  {
    id: 'photoshop-zoom-in',
    name: 'ズームイン',
    description: '画像を拡大表示します',
    category: 'view',
    software: 'photoshop',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'photoshop-zoom-out',
    name: 'ズームアウト',
    description: '画像を縮小表示します',
    category: 'view',
    software: 'photoshop',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'photoshop-fit-to-screen',
    name: '画面に合わせる',
    description: '画像を画面サイズに合わせて表示します',
    category: 'view',
    software: 'photoshop',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['画面に合わせる', 'フィット', 'ビュー']
  },
  {
    id: 'photoshop-actual-size',
    name: '実際のサイズ',
    description: '画像を実際のサイズで表示します',
    category: 'view',
    software: 'photoshop',
    windows: 'Ctrl + Alt + 0',
    mac: '⌘ + Option + 0',
    keywords: ['実際のサイズ', '100%', 'ビュー']
  },
  {
    id: 'photoshop-new-layer',
    name: '新しいレイヤー',
    description: '新しいレイヤーを作成します',
    category: 'layers',
    software: 'photoshop',
    windows: 'Ctrl + Shift + N',
    mac: '⌘ + Shift + N',
    keywords: ['新しいレイヤー', 'レイヤー', '作成']
  },
  {
    id: 'photoshop-duplicate-layer',
    name: 'レイヤーを複製',
    description: '選択したレイヤーを複製します',
    category: 'layers',
    software: 'photoshop',
    windows: 'Ctrl + J',
    mac: '⌘ + J',
    keywords: ['レイヤー複製', '複製', 'コピー']
  },
  {
    id: 'photoshop-merge-layers',
    name: 'レイヤーを統合',
    description: '選択したレイヤーを統合します',
    category: 'layers',
    software: 'photoshop',
    windows: 'Ctrl + E',
    mac: '⌘ + E',
    keywords: ['レイヤー統合', '統合', 'マージ']
  },
  {
    id: 'photoshop-flatten-image',
    name: '画像を統合',
    description: 'すべてのレイヤーを統合します',
    category: 'layers',
    software: 'photoshop',
    windows: 'Ctrl + Shift + E',
    mac: '⌘ + Shift + E',
    keywords: ['画像統合', '統合', 'フラット']
  },
  {
    id: 'photoshop-brush-tool',
    name: 'ブラシツール',
    description: 'ブラシツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'B',
    mac: 'B',
    keywords: ['ブラシ', 'ツール', '描画']
  },
  {
    id: 'photoshop-eraser-tool',
    name: '消しゴムツール',
    description: '消しゴムツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'E',
    mac: 'E',
    keywords: ['消しゴム', 'ツール', '削除']
  },
  {
    id: 'photoshop-move-tool',
    name: '移動ツール',
    description: '移動ツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'V',
    mac: 'V',
    keywords: ['移動', 'ツール', '位置']
  },
  {
    id: 'photoshop-marquee-tool',
    name: '選択ツール',
    description: '選択ツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'M',
    mac: 'M',
    keywords: ['選択', 'ツール', 'マーキー']
  },
  {
    id: 'photoshop-lasso-tool',
    name: 'なげなわツール',
    description: 'なげなわツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'L',
    mac: 'L',
    keywords: ['なげなわ', 'ツール', '選択']
  },
  {
    id: 'photoshop-magic-wand',
    name: '自動選択ツール',
    description: '自動選択ツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'W',
    mac: 'W',
    keywords: ['自動選択', 'ツール', '選択']
  },
  {
    id: 'photoshop-crop-tool',
    name: '切り抜きツール',
    description: '切り抜きツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'C',
    mac: 'C',
    keywords: ['切り抜き', 'ツール', 'クロップ']
  },
  {
    id: 'photoshop-healing-brush',
    name: '修復ブラシツール',
    description: '修復ブラシツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'J',
    mac: 'J',
    keywords: ['修復ブラシ', 'ツール', '修復']
  },
  {
    id: 'photoshop-clone-stamp',
    name: 'スタンプツール',
    description: 'スタンプツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'S',
    mac: 'S',
    keywords: ['スタンプ', 'ツール', '複製']
  },
  {
    id: 'photoshop-gradient-tool',
    name: 'グラデーションツール',
    description: 'グラデーションツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'G',
    mac: 'G',
    keywords: ['グラデーション', 'ツール', '塗りつぶし']
  },
  {
    id: 'photoshop-paint-bucket',
    name: 'ペイントバケツツール',
    description: 'ペイントバケツツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'G',
    mac: 'G',
    keywords: ['ペイントバケツ', 'ツール', '塗りつぶし']
  },
  {
    id: 'photoshop-text-tool',
    name: 'テキストツール',
    description: 'テキストツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'T',
    mac: 'T',
    keywords: ['テキスト', 'ツール', '文字']
  },
  {
    id: 'photoshop-pen-tool',
    name: 'ペンツール',
    description: 'ペンツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'P',
    mac: 'P',
    keywords: ['ペン', 'ツール', 'パス']
  },
  {
    id: 'photoshop-shape-tool',
    name: '図形ツール',
    description: '図形ツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'U',
    mac: 'U',
    keywords: ['図形', 'ツール', 'シェイプ']
  },
  {
    id: 'photoshop-eye-dropper',
    name: 'スポイトツール',
    description: 'スポイトツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'I',
    mac: 'I',
    keywords: ['スポイト', 'ツール', '色']
  },
  {
    id: 'photoshop-hand-tool',
    name: '手のひらツール',
    description: '手のひらツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'H',
    mac: 'H',
    keywords: ['手のひら', 'ツール', '移動']
  },
  {
    id: 'photoshop-zoom-tool',
    name: 'ズームツール',
    description: 'ズームツールを選択します',
    category: 'tools',
    software: 'photoshop',
    windows: 'Z',
    mac: 'Z',
    keywords: ['ズーム', 'ツール', '拡大縮小']
  },

  // === Illustrator 단축키 ===
  {
    id: 'illustrator-new',
    name: '新規ドキュメント',
    description: '新しいドキュメントを作成します',
    category: 'file',
    software: 'illustrator',
    windows: 'Ctrl + N',
    mac: '⌘ + N',
    keywords: ['新規', 'ドキュメント', '作成']
  },
  {
    id: 'illustrator-open',
    name: '開く',
    description: '既存のファイルを開きます',
    category: 'file',
    software: 'illustrator',
    windows: 'Ctrl + O',
    mac: '⌘ + O',
    keywords: ['開く', 'ファイル', '読み込み']
  },
  {
    id: 'illustrator-save',
    name: '保存',
    description: 'ファイルを保存します',
    category: 'file',
    software: 'illustrator',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['保存', 'セーブ', 'ストレージ']
  },
  {
    id: 'illustrator-save-as',
    name: '別名で保存',
    description: 'ファイルを別名で保存します',
    category: 'file',
    software: 'illustrator',
    windows: 'Ctrl + Shift + S',
    mac: '⌘ + Shift + S',
    keywords: ['別名で保存', '名前を付けて保存', 'エクスポート']
  },
  {
    id: 'illustrator-undo',
    name: '元に戻す',
    description: '最後の操作を元に戻します',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + Z',
    mac: '⌘ + Z',
    keywords: ['元に戻す', 'アンドゥ', '取消']
  },
  {
    id: 'illustrator-redo',
    name: 'やり直し',
    description: '元に戻した操作をやり直します',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + Shift + Z',
    mac: '⌘ + Shift + Z',
    keywords: ['やり直し', 'リドゥ', '再実行']
  },
  {
    id: 'illustrator-copy',
    name: 'コピー',
    description: '選択したオブジェクトをコピーします',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + C',
    mac: '⌘ + C',
    keywords: ['コピー', '複製', 'コピー']
  },
  {
    id: 'illustrator-paste',
    name: '貼り付け',
    description: 'コピーしたオブジェクトを貼り付けます',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + V',
    mac: '⌘ + V',
    keywords: ['貼り付け', 'ペースト', '挿入']
  },
  {
    id: 'illustrator-cut',
    name: '切り取り',
    description: '選択したオブジェクトを切り取ります',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + X',
    mac: '⌘ + X',
    keywords: ['切り取り', 'カット', '移動']
  },
  {
    id: 'illustrator-select-all',
    name: 'すべて選択',
    description: 'すべてのオブジェクトを選択します',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + A',
    mac: '⌘ + A',
    keywords: ['すべて選択', '全選択', '選択']
  },
  {
    id: 'illustrator-deselect',
    name: '選択解除',
    description: '選択を解除します',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + Shift + A',
    mac: '⌘ + Shift + A',
    keywords: ['選択解除', 'デセレクト', '解除']
  },
  {
    id: 'illustrator-free-transform',
    name: '自由変形',
    description: '自由変形ツールを起動します',
    category: 'edit',
    software: 'illustrator',
    windows: 'Ctrl + T',
    mac: '⌘ + T',
    keywords: ['自由変形', 'トランスフォーム', '変形']
  },
  {
    id: 'illustrator-zoom-in',
    name: 'ズームイン',
    description: 'アートボードを拡大表示します',
    category: 'view',
    software: 'illustrator',
    windows: 'Ctrl + +',
    mac: '⌘ + +',
    keywords: ['ズームイン', '拡大', 'ビュー']
  },
  {
    id: 'illustrator-zoom-out',
    name: 'ズームアウト',
    description: 'アートボードを縮小表示します',
    category: 'view',
    software: 'illustrator',
    windows: 'Ctrl + -',
    mac: '⌘ + -',
    keywords: ['ズームアウト', '縮小', 'ビュー']
  },
  {
    id: 'illustrator-fit-to-screen',
    name: '画面に合わせる',
    description: 'アートボードを画面サイズに合わせて表示します',
    category: 'view',
    software: 'illustrator',
    windows: 'Ctrl + 0',
    mac: '⌘ + 0',
    keywords: ['画面に合わせる', 'フィット', 'ビュー']
  },
  {
    id: 'illustrator-actual-size',
    name: '実際のサイズ',
    description: 'アートボードを実際のサイズで表示します',
    category: 'view',
    software: 'illustrator',
    windows: 'Ctrl + 1',
    mac: '⌘ + 1',
    keywords: ['実際のサイズ', '100%', 'ビュー']
  },
  {
    id: 'illustrator-selection-tool',
    name: '選択ツール',
    description: '選択ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'V',
    mac: 'V',
    keywords: ['選択', 'ツール', '移動']
  },
  {
    id: 'illustrator-direct-selection',
    name: 'ダイレクト選択ツール',
    description: 'ダイレクト選択ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'A',
    mac: 'A',
    keywords: ['ダイレクト選択', 'ツール', '選択']
  },
  {
    id: 'illustrator-pen-tool',
    name: 'ペンツール',
    description: 'ペンツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'P',
    mac: 'P',
    keywords: ['ペン', 'ツール', 'パス']
  },
  {
    id: 'illustrator-type-tool',
    name: '文字ツール',
    description: '文字ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'T',
    mac: 'T',
    keywords: ['文字', 'ツール', 'テキスト']
  },
  {
    id: 'illustrator-line-tool',
    name: '直線ツール',
    description: '直線ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: '\\',
    mac: '\\',
    keywords: ['直線', 'ツール', 'ライン']
  },
  {
    id: 'illustrator-rectangle-tool',
    name: '長方形ツール',
    description: '長方形ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'M',
    mac: 'M',
    keywords: ['長方形', 'ツール', 'シェイプ']
  },
  {
    id: 'illustrator-ellipse-tool',
    name: '楕円形ツール',
    description: '楕円形ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'L',
    mac: 'L',
    keywords: ['楕円形', 'ツール', 'シェイプ']
  },
  {
    id: 'illustrator-polygon-tool',
    name: '多角形ツール',
    description: '多角形ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'M',
    mac: 'M',
    keywords: ['多角形', 'ツール', 'シェイプ']
  },
  {
    id: 'illustrator-star-tool',
    name: '星形ツール',
    description: '星形ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'M',
    mac: 'M',
    keywords: ['星形', 'ツール', 'シェイプ']
  },
  {
    id: 'illustrator-paintbrush-tool',
    name: 'ブラシツール',
    description: 'ブラシツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'B',
    mac: 'B',
    keywords: ['ブラシ', 'ツール', '描画']
  },
  {
    id: 'illustrator-pencil-tool',
    name: '鉛筆ツール',
    description: '鉛筆ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'N',
    mac: 'N',
    keywords: ['鉛筆', 'ツール', '描画']
  },
  {
    id: 'illustrator-eraser-tool',
    name: '消しゴムツール',
    description: '消しゴムツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'Shift + E',
    mac: 'Shift + E',
    keywords: ['消しゴム', 'ツール', '削除']
  },
  {
    id: 'illustrator-scissors-tool',
    name: 'はさみツール',
    description: 'はさみツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'C',
    mac: 'C',
    keywords: ['はさみ', 'ツール', 'カット']
  },
  {
    id: 'illustrator-rotate-tool',
    name: '回転ツール',
    description: '回転ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'R',
    mac: 'R',
    keywords: ['回転', 'ツール', '変形']
  },
  {
    id: 'illustrator-reflect-tool',
    name: 'リフレクトツール',
    description: 'リフレクトツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'O',
    mac: 'O',
    keywords: ['リフレクト', 'ツール', '反転']
  },
  {
    id: 'illustrator-scale-tool',
    name: '拡大・縮小ツール',
    description: '拡大・縮小ツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'S',
    mac: 'S',
    keywords: ['拡大縮小', 'ツール', '変形']
  },
  {
    id: 'illustrator-shear-tool',
    name: 'シアーツール',
    description: 'シアーツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'O',
    mac: 'O',
    keywords: ['シアー', 'ツール', '変形']
  },
  {
    id: 'illustrator-reshape-tool',
    name: 'リシェイプツール',
    description: 'リシェイプツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'Shift + R',
    mac: 'Shift + R',
    keywords: ['リシェイプ', 'ツール', '変形']
  },
  {
    id: 'illustrator-gradient-tool',
    name: 'グラデーションツール',
    description: 'グラデーションツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'G',
    mac: 'G',
    keywords: ['グラデーション', 'ツール', '塗りつぶし']
  },
  {
    id: 'illustrator-mesh-tool',
    name: 'メッシュツール',
    description: 'メッシュツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'U',
    mac: 'U',
    keywords: ['メッシュ', 'ツール', '塗りつぶし']
  },
  {
    id: 'illustrator-eye-dropper',
    name: 'スポイトツール',
    description: 'スポイトツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'I',
    mac: 'I',
    keywords: ['スポイト', 'ツール', '色']
  },
  {
    id: 'illustrator-hand-tool',
    name: '手のひらツール',
    description: '手のひらツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'H',
    mac: 'H',
    keywords: ['手のひら', 'ツール', '移動']
  },
  {
    id: 'illustrator-zoom-tool',
    name: 'ズームツール',
    description: 'ズームツールを選択します',
    category: 'tools',
    software: 'illustrator',
    windows: 'Z',
    mac: 'Z',
    keywords: ['ズーム', 'ツール', '拡大縮小']
  },

  // === Slack 단축키 ===
  {
    id: 'slack-quick-switcher',
    name: 'クイックスイッチャー',
    description: 'チャンネルやDMを素早く切り替えます',
    category: 'navigation',
    software: 'slack',
    windows: 'Ctrl + K',
    mac: '⌘ + K',
    keywords: ['クイックスイッチャー', '切り替え', 'ナビゲーション']
  },
  {
    id: 'slack-channel-browser',
    name: 'チャンネルブラウザ',
    description: 'チャンネルブラウザを開きます',
    category: 'navigation',
    software: 'slack',
    windows: 'Ctrl + Shift + L',
    mac: '⌘ + Shift + L',
    keywords: ['チャンネルブラウザ', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'slack-direct-messages',
    name: 'ダイレクトメッセージ',
    description: 'ダイレクトメッセージリストを開きます',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + K',
    mac: '⌘ + Shift + K',
    keywords: ['ダイレクトメッセージ', 'DM', 'メッセージ']
  },
  {
    id: 'slack-mentions',
    name: 'メンション',
    description: 'メンションされたメッセージを表示します',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + M',
    mac: '⌘ + Shift + M',
    keywords: ['メンション', '通知', 'メッセージ']
  },
  {
    id: 'slack-starred-items',
    name: 'スター付きアイテム',
    description: 'スター付きアイテムを表示します',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + S',
    mac: '⌘ + Shift + S',
    keywords: ['スター', 'お気に入り', 'アイテム']
  },
  {
    id: 'slack-threads',
    name: 'スレッド',
    description: 'スレッドを表示します',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + T',
    mac: '⌘ + Shift + T',
    keywords: ['スレッド', '返信', 'メッセージ']
  },
  {
    id: 'slack-all-unreads',
    name: '未読メッセージ',
    description: 'すべての未読メッセージを表示します',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + A',
    mac: '⌘ + Shift + A',
    keywords: ['未読', 'メッセージ', '通知']
  },
  {
    id: 'slack-search',
    name: '検索',
    description: 'メッセージを検索します',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', 'メッセージ']
  },
  {
    id: 'slack-emoji-picker',
    name: '絵文字ピッカー',
    description: '絵文字ピッカーを開きます',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + :',
    mac: '⌘ + Shift + :',
    keywords: ['絵文字', 'ピッカー', 'エモジ']
  },
  {
    id: 'slack-mark-as-read',
    name: '既読にする',
    description: 'チャンネルを既読にマークします',
    category: 'communication',
    software: 'slack',
    windows: 'Esc',
    mac: 'Esc',
    keywords: ['既読', 'マーク', 'メッセージ']
  },
  {
    id: 'slack-previous-channel',
    name: '前のチャンネル',
    description: '前のチャンネルに移動します',
    category: 'navigation',
    software: 'slack',
    windows: 'Alt + ↑',
    mac: 'Option + ↑',
    keywords: ['前のチャンネル', '移動', 'ナビゲーション']
  },
  {
    id: 'slack-next-channel',
    name: '次のチャンネル',
    description: '次のチャンネルに移動します',
    category: 'navigation',
    software: 'slack',
    windows: 'Alt + ↓',
    mac: 'Option + ↓',
    keywords: ['次のチャンネル', '移動', 'ナビゲーション']
  },
  {
    id: 'slack-previous-unread',
    name: '前の未読チャンネル',
    description: '前の未読チャンネルに移動します',
    category: 'navigation',
    software: 'slack',
    windows: 'Alt + Shift + ↑',
    mac: 'Option + Shift + ↑',
    keywords: ['前の未読', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'slack-next-unread',
    name: '次の未読チャンネル',
    description: '次の未読チャンネルに移動します',
    category: 'navigation',
    software: 'slack',
    windows: 'Alt + Shift + ↓',
    mac: 'Option + Shift + ↓',
    keywords: ['次の未読', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'slack-toggle-sidebar',
    name: 'サイドバーの表示/非表示',
    description: 'サイドバーの表示/非表示を切り替えます',
    category: 'view',
    software: 'slack',
    windows: 'Ctrl + \\',
    mac: '⌘ + \\',
    keywords: ['サイドバー', '表示', '非表示']
  },
  {
    id: 'slack-toggle-member-list',
    name: 'メンバーリストの表示/非表示',
    description: 'メンバーリストの表示/非表示を切り替えます',
    category: 'view',
    software: 'slack',
    windows: 'Ctrl + Shift + U',
    mac: '⌘ + Shift + U',
    keywords: ['メンバーリスト', '表示', '非表示']
  },
  {
    id: 'slack-preferences',
    name: '設定',
    description: '設定を開きます',
    category: 'tools',
    software: 'slack',
    windows: 'Ctrl + ,',
    mac: '⌘ + ,',
    keywords: ['設定', 'プリファレンス', 'オプション']
  },
  {
    id: 'slack-help',
    name: 'ヘルプ',
    description: 'ヘルプを開きます',
    category: 'help',
    software: 'slack',
    windows: 'Ctrl + /',
    mac: '⌘ + /',
    keywords: ['ヘルプ', 'サポート', 'ガイド']
  },
  {
    id: 'slack-keyboard-shortcuts',
    name: 'キーボードショートカット',
    description: 'キーボードショートカットを表示します',
    category: 'help',
    software: 'slack',
    windows: 'Ctrl + Shift + /',
    mac: '⌘ + Shift + /',
    keywords: ['キーボードショートカット', 'ヘルプ', 'ガイド']
  },
  {
    id: 'slack-mark-channel-read',
    name: 'チャンネルを既読にする',
    description: '現在のチャンネルを既読にマークします',
    category: 'communication',
    software: 'slack',
    windows: 'Ctrl + Shift + M',
    mac: '⌘ + Shift + M',
    keywords: ['チャンネル', '既読', 'マーク']
  },

  // === Discord 단축키 ===
  {
    id: 'discord-server-list',
    name: 'サーバーリスト',
    description: 'サーバーリストにフォーカスします',
    category: 'navigation',
    software: 'discord',
    windows: 'Ctrl + Alt + ↑',
    mac: '⌘ + Option + ↑',
    keywords: ['サーバーリスト', 'サーバー', 'ナビゲーション']
  },
  {
    id: 'discord-channel-list',
    name: 'チャンネルリスト',
    description: 'チャンネルリストにフォーカスします',
    category: 'navigation',
    software: 'discord',
    windows: 'Ctrl + Alt + ↓',
    mac: '⌘ + Option + ↓',
    keywords: ['チャンネルリスト', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'discord-quick-switcher',
    name: 'クイックスイッチャー',
    description: 'クイックスイッチャーを開きます',
    category: 'navigation',
    software: 'discord',
    windows: 'Ctrl + K',
    mac: '⌘ + K',
    keywords: ['クイックスイッチャー', '切り替え', 'ナビゲーション']
  },
  {
    id: 'discord-mentions',
    name: 'メンション',
    description: 'メンションされたメッセージを表示します',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + Shift + M',
    mac: '⌘ + Shift + M',
    keywords: ['メンション', '通知', 'メッセージ']
  },
  {
    id: 'discord-pinned-messages',
    name: 'ピン留めメッセージ',
    description: 'ピン留めされたメッセージを表示します',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + Shift + P',
    mac: '⌘ + Shift + P',
    keywords: ['ピン留め', 'メッセージ', '固定']
  },
  {
    id: 'discord-search',
    name: '検索',
    description: 'メッセージを検索します',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + F',
    mac: '⌘ + F',
    keywords: ['検索', 'ファインド', 'メッセージ']
  },
  {
    id: 'discord-emoji-picker',
    name: '絵文字ピッカー',
    description: '絵文字ピッカーを開きます',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + E',
    mac: '⌘ + E',
    keywords: ['絵文字', 'ピッカー', 'エモジ']
  },
  {
    id: 'discord-gif-picker',
    name: 'GIFピッカー',
    description: 'GIFピッカーを開きます',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + G',
    mac: '⌘ + G',
    keywords: ['GIF', 'ピッカー', 'アニメーション']
  },
  {
    id: 'discord-sticker-picker',
    name: 'ステッカーピッカー',
    description: 'ステッカーピッカーを開きます',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + S',
    mac: '⌘ + S',
    keywords: ['ステッカー', 'ピッカー', 'スタンプ']
  },
  {
    id: 'discord-mark-as-read',
    name: '既読にする',
    description: 'チャンネルを既読にマークします',
    category: 'communication',
    software: 'discord',
    windows: 'Esc',
    mac: 'Esc',
    keywords: ['既読', 'マーク', 'メッセージ']
  },
  {
    id: 'discord-previous-channel',
    name: '前のチャンネル',
    description: '前のチャンネルに移動します',
    category: 'navigation',
    software: 'discord',
    windows: 'Alt + ↑',
    mac: 'Option + ↑',
    keywords: ['前のチャンネル', '移動', 'ナビゲーション']
  },
  {
    id: 'discord-next-channel',
    name: '次のチャンネル',
    description: '次のチャンネルに移動します',
    category: 'navigation',
    software: 'discord',
    windows: 'Alt + ↓',
    mac: 'Option + ↓',
    keywords: ['次のチャンネル', '移動', 'ナビゲーション']
  },
  {
    id: 'discord-previous-unread',
    name: '前の未読チャンネル',
    description: '前の未読チャンネルに移動します',
    category: 'navigation',
    software: 'discord',
    windows: 'Alt + Shift + ↑',
    mac: 'Option + Shift + ↑',
    keywords: ['前の未読', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'discord-next-unread',
    name: '次の未読チャンネル',
    description: '次の未読チャンネルに移動します',
    category: 'navigation',
    software: 'discord',
    windows: 'Alt + Shift + ↓',
    mac: 'Option + Shift + ↓',
    keywords: ['次の未読', 'チャンネル', 'ナビゲーション']
  },
  {
    id: 'discord-toggle-member-list',
    name: 'メンバーリストの表示/非表示',
    description: 'メンバーリストの表示/非表示を切り替えます',
    category: 'view',
    software: 'discord',
    windows: 'Ctrl + Shift + U',
    mac: '⌘ + Shift + U',
    keywords: ['メンバーリスト', '表示', '非表示']
  },
  {
    id: 'discord-toggle-server-list',
    name: 'サーバーリストの表示/非表示',
    description: 'サーバーリストの表示/非表示を切り替えます',
    category: 'view',
    software: 'discord',
    windows: 'Ctrl + Shift + I',
    mac: '⌘ + Shift + I',
    keywords: ['サーバーリスト', '表示', '非表示']
  },
  {
    id: 'discord-preferences',
    name: '設定',
    description: '設定を開きます',
    category: 'tools',
    software: 'discord',
    windows: 'Ctrl + ,',
    mac: '⌘ + ,',
    keywords: ['設定', 'プリファレンス', 'オプション']
  },
  {
    id: 'discord-help',
    name: 'ヘルプ',
    description: 'ヘルプを開きます',
    category: 'help',
    software: 'discord',
    windows: 'Ctrl + /',
    mac: '⌘ + /',
    keywords: ['ヘルプ', 'サポート', 'ガイド']
  },
  {
    id: 'discord-keyboard-shortcuts',
    name: 'キーボードショートカット',
    description: 'キーボードショートカットを表示します',
    category: 'help',
    software: 'discord',
    windows: 'Ctrl + Shift + /',
    mac: '⌘ + Shift + /',
    keywords: ['キーボードショートカット', 'ヘルプ', 'ガイド']
  },
  {
    id: 'discord-mark-server-read',
    name: 'サーバーを既読にする',
    description: '現在のサーバーを既読にマークします',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + Shift + M',
    mac: '⌘ + Shift + M',
    keywords: ['サーバー', '既読', 'マーク']
  },
  {
    id: 'discord-toggle-mute',
    name: 'ミュートの切り替え',
    description: 'ミュートの切り替えを行います',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + Shift + M',
    mac: '⌘ + Shift + M',
    keywords: ['ミュート', '切り替え', '音声']
  },
  {
    id: 'discord-toggle-deafen',
    name: 'デフンの切り替え',
    description: 'デフンの切り替えを行います',
    category: 'communication',
    software: 'discord',
    windows: 'Ctrl + Shift + D',
    mac: '⌘ + Shift + D',
    keywords: ['デフン', '切り替え', '音声']
  },
  {
    id: 'discord-toggle-overlay',
    name: 'オーバーレイの切り替え',
    description: 'オーバーレイの表示/非表示を切り替えます',
    category: 'view',
    software: 'discord',
    windows: 'Ctrl + Shift + O',
    mac: '⌘ + Shift + O',
    keywords: ['オーバーレイ', '表示', '非表示']
  },
  {
    id: 'discord-streamer-mode',
    name: 'ストリーマーモード',
    description: 'ストリーマーモードの切り替えを行います',
    category: 'tools',
    software: 'discord',
    windows: 'Ctrl + Shift + S',
    mac: '⌘ + Shift + S',
    keywords: ['ストリーマーモード', 'プライバシー', '保護']
  }
];

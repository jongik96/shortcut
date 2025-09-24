'use client';

import { useState } from 'react';
import { FunctionSquare, Copy, Lightbulb, ArrowRight } from 'lucide-react';
import { functionMappings } from '@/data/functionMappings';
import { FunctionSuggestion } from '@/types/shortcuts';
import { copyToClipboard } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface FunctionGeneratorProps {
  className?: string;
}

const FunctionGenerator = ({ className }: FunctionGeneratorProps) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<FunctionSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 자연어 처리 및 함수 매핑
  const processInput = (text: string) => {
    if (!text.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const lowerText = text.toLowerCase();
    const matchedSuggestions: (FunctionSuggestion & { score?: number })[] = [];

    // 키워드 기반 매칭
    functionMappings.forEach(func => {
      let score = 0;
      
      // 日本語キーワードマッチング
      const keywords = [
        // 日付関連
        { words: ['年'], funcs: ['year-extraction'] },
        { words: ['月'], funcs: ['month-extraction'] },
        { words: ['日', '日付'], funcs: ['day-extraction'] },
        
        // 数学関連
        { words: ['合計', '足し算', '合わ'], funcs: ['sum-cells', 'sumif'] },
        { words: ['平均'], funcs: ['average-cells'] },
        { words: ['個数', '数える', 'カウント'], funcs: ['count-cells', 'countif'] },
        { words: ['最大', '最大値'], funcs: ['max-value'] },
        { words: ['最小', '最小値'], funcs: ['min-value'] },
        
        // テキスト関連
        { words: ['結合', 'つなぐ'], funcs: ['concatenate-text', 'text-join'] },
        { words: ['探す', '検索'], funcs: ['find-text'] },
        { words: ['左'], funcs: ['left-text'] },
        { words: ['右'], funcs: ['right-text'] },
        { words: ['中央', '真ん中'], funcs: ['mid-text'] },
        { words: ['長さ', '文字数'], funcs: ['len-text'] },
        { words: ['大文字'], funcs: ['upper-text'] },
        { words: ['小文字'], funcs: ['lower-text'] },
        
        // 条件関連
        { words: ['条件', 'もし'], funcs: ['if-condition'] },
        { words: ['検索', 'ルックアップ'], funcs: ['vlookup'] },
        
        // 日付/時刻
        { words: ['今日', '現在の日付'], funcs: ['today-date'] },
        { words: ['今', '現在の時刻'], funcs: ['now-datetime'] }
      ];

      keywords.forEach(({ words, funcs }) => {
        if (words.some(word => lowerText.includes(word)) && funcs.includes(func.id)) {
          score += 1;
        }
      });

      if (score > 0) {
        matchedSuggestions.push({ ...func, score });
      }
    });

    // 점수순으로 정렬하고 상위 3개만 표시
    const sortedSuggestions = matchedSuggestions
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 3);

    setSuggestions(sortedSuggestions as FunctionSuggestion[]);
    setShowSuggestions(true);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    processInput(value);
  };

  const handleCopy = (text: string) => {
    copyToClipboard(text);
    // TODO: 토스트 알림 추가
  };

  const exampleInputs = [
    '日付から年だけ抽出したい',
    '2つのセルの値を結合したい',
    '空のセルを数えたい',
    'テキストを大文字に変換したい',
    '条件に応じて異なる値を表示したい'
  ];

  return (
    <div className={cn('space-y-6', className)}>
      {/* 입력 영역 */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="text-center mb-6">
          <FunctionSquare className="h-10 w-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Excel関数ジェネレーター
          </h2>
          <p className="text-gray-600">
            欲しい機能を自然言語で説明してください
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="function-input" className="block text-sm font-medium text-gray-700 mb-2">
              機能説明
            </label>
            <textarea
              id="function-input"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-900 placeholder-gray-500"
              placeholder="例: 日付から年を抽出したい、2つのセルの値を結合したい..."
            />
          </div>

          {/* 例入力 */}
          <div>
            <p className="text-sm text-gray-600 mb-2">例:</p>
            <div className="flex flex-wrap gap-2">
              {exampleInputs.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleInputChange(example)}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 推奨結果 */}
      {showSuggestions && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-4 border-b bg-blue-50">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium text-blue-900">推奨関数</h3>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <div key={suggestion.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{suggestion.name}</h4>
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          関数
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                      <div className="bg-gray-100 p-2 rounded font-mono text-sm text-gray-900">
                        {suggestion.formula}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(suggestion.formula)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors ml-2"
                      title="関数をコピー"
                    >
                      <Copy size={16} />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">例:</p>
                      <p className="text-gray-600">{suggestion.example}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">結果:</p>
                      <p className="text-gray-600 font-mono">{suggestion.result}</p>
                    </div>
                  </div>

                  {suggestion.alternatives && suggestion.alternatives.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm font-medium text-gray-700 mb-2">代替関数:</p>
                      <div className="flex flex-wrap gap-1">
                        {suggestion.alternatives.map((alt, altIndex) => (
                          <span
                            key={altIndex}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <FunctionSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  入力内容に一致する関数が見つかりません。
                  <br />
                  別のキーワードで検索してみてください
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 追加情報 */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">より多くの関数が近日追加予定です！</h4>
            <p className="text-sm text-blue-700">
              より正確な関数推奨のためのAIベース自然言語処理機能を開発中です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionGenerator;

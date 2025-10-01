'use client';

import { useState } from 'react';
import { FunctionSquare, Copy, Lightbulb, ArrowRight, Calculator, Calendar, Type, Brain, BarChart3, DollarSign, Settings, Database, Info } from 'lucide-react';
import { functionMappings } from '@/data/functionMappings';
import { FunctionSuggestion } from '@/types/shortcuts';
import { copyToClipboard } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { getFunctionTranslation } from '@/lib/function-translations';

interface FunctionGeneratorProps {
  className?: string;
}

const FunctionGenerator = ({ className }: FunctionGeneratorProps) => {
  const { locale } = useLocaleContext();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<FunctionSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  // 카테고리 아이콘 매핑
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'math': return Calculator;
      case 'date': return Calendar;
      case 'text': return Type;
      case 'logical': return Brain;
      case 'statistical': return BarChart3;
      case 'financial': return DollarSign;
      case 'engineering': return Settings;
      case 'database': return Database;
      case 'information': return Info;
      default: return FunctionSquare;
    }
  };

  // 난이도 색상 매핑
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // 난이도 텍스트 매핑
  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '初級';
      case 'intermediate': return '中級';
      case 'advanced': return '上級';
      default: return '不明';
    }
  };

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
      
      // 영어 함수명 직접 매칭 (높은 우선순위)
      if (lowerText.includes(func.name.toLowerCase())) {
        score += 3;
      }
      
      // 함수 설명에서 키워드 매칭
      if (func.description.toLowerCase().includes(lowerText)) {
        score += 2;
      }
      
      // 日本語キーワードマッチング
      const keywords = [
        // 日付関連
        { words: ['年', 'year'], funcs: ['year-extraction'] },
        { words: ['月', 'month'], funcs: ['month-extraction'] },
        { words: ['日', '日付', 'day'], funcs: ['day-extraction'] },
        { words: ['今日', '現在の日付', 'today'], funcs: ['today-date'] },
        { words: ['今', '現在の時刻', 'now'], funcs: ['now-datetime'] },
        { words: ['曜日', 'weekday'], funcs: ['weekday-day-of-week'] },
        { words: ['営業日', 'workday'], funcs: ['workday-next-workday', 'networkdays-working-days'] },
        
        // 数学関連
        { words: ['合計', '足し算', '合わ', '加算', 'sum'], funcs: ['sum-cells'] },
        { words: ['条件付き合計', 'sumif'], funcs: ['sumif'] },
        { words: ['平均', 'average'], funcs: ['average-cells'] },
        { words: ['個数', '数える', 'カウント', 'count'], funcs: ['count-cells'] },
        { words: ['条件を満たす', '条件付きカウント', 'countif'], funcs: ['countif'] },
        { words: ['最大', '最大値', 'max'], funcs: ['max-value'] },
        { words: ['最小', '最小値', 'min'], funcs: ['min-value'] },
        { words: ['絶対値', 'abs'], funcs: ['abs-value'] },
        { words: ['四捨五入', '丸める', 'round'], funcs: ['round-number'] },
        { words: ['切り上げ', 'roundup', 'ceiling'], funcs: ['ceiling-number', 'roundup-function'] },
        { words: ['切り捨て', 'rounddown', 'floor'], funcs: ['floor-number', 'rounddown-function'] },
        { words: ['平方根', 'sqrt'], funcs: ['sqrt-square-root'] },
        
        // テキスト関連
        { words: ['結合', 'つなぐ', '連結', 'concatenate'], funcs: ['concatenate-text', 'text-join'] },
        { words: ['探す', '検索', 'find', 'search'], funcs: ['find-text'] },
        { words: ['左', '左側', 'left'], funcs: ['left-text'] },
        { words: ['右', '右側', 'right'], funcs: ['right-text'] },
        { words: ['中央', '真ん中', '途中', 'mid'], funcs: ['mid-text'] },
        { words: ['長さ', '文字数', 'len', 'length'], funcs: ['len-text'] },
        { words: ['大文字', '大文字化', 'upper'], funcs: ['upper-text'] },
        { words: ['小文字', '小文字化', 'lower'], funcs: ['lower-text'] },
        { words: ['空白削除', 'トリム', 'trim'], funcs: ['trim-spaces', 'trim-function'] },
        { words: ['置換', '置き換え', 'substitute', 'replace'], funcs: ['substitute-text', 'replace-text'] },
        
        // 条件・論理関数
        { words: ['条件', 'もし', 'if'], funcs: ['if-condition'] },
        { words: ['複数条件', 'ifs'], funcs: ['ifs-multiple-conditions'] },
        { words: ['かつ', 'そして', 'and'], funcs: ['and-logical', 'and-function'] },
        { words: ['または', 'or'], funcs: ['or-logical', 'or-function'] },
        { words: ['エラー処理', 'iferror'], funcs: ['iferror-function'] },
        
        // 検索・参照関数
        { words: ['検索', 'ルックアップ', 'vlookup', '対応', '取得'], funcs: ['vlookup'] },
        
        // 統計関数
        { words: ['中央値', 'median'], funcs: ['median-value', 'median-function'] },
        { words: ['最頻値', 'mode'], funcs: ['mode-value', 'mode-function'] },
        { words: ['標準偏差', 'stdev'], funcs: ['stdev-standard-deviation', 'stdev-function'] },
        { words: ['分散', 'var', 'variance'], funcs: ['var-variance', 'var-function'] },
        { words: ['順位', 'rank'], funcs: ['rank-value', 'rank-function'] }
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

    // 점수순으로 정렬하고 상위 5개만 표시
    const sortedSuggestions = matchedSuggestions
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 5);

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

  // 시각적 셀 컴포넌트
  const VisualCell = ({ cell, value, isOutput = false }: { cell: string, value: string | number | boolean, isOutput?: boolean }) => {
    const cellClass = isOutput 
      ? 'bg-blue-50 border-blue-200 text-blue-900 font-semibold' 
      : 'bg-gray-50 border-gray-200 text-gray-900';
    
    return (
      <div className={`border-2 rounded-lg p-2 min-w-[80px] text-center ${cellClass}`}>
        <div className="text-xs font-mono text-gray-500 mb-1">{cell}</div>
        <div className="text-sm">{String(value)}</div>
      </div>
    );
  };

  const exampleInputs = [
    '日付から年だけ抽出したい',
    '2つのセルの値を結合したい',
    '条件に応じて異なる値を表示したい',
    '数値の合計を計算したい',
    '検索して対応する値を取得したい',
    '条件を満たすセルを数えたい',
    'テキストを大文字に変換したい',
    '今日の日付を表示したい',
    '空白セルを除外したい',
    '最大値を求めたい'
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
              suggestions.map((suggestion) => {
                const CategoryIcon = getCategoryIcon(suggestion.category);
                const translated = getFunctionTranslation(suggestion, locale);
                return (
                  <div key={suggestion.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{translated.name}</h4>
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            関数
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(suggestion.difficulty)}`}>
                            {getDifficultyText(suggestion.difficulty)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{translated.description}</p>
                        <div className="bg-gray-100 p-3 rounded font-mono text-sm text-gray-900 mb-3">
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

                    {/* 시각적 표현 */}
                    {suggestion.visualExample && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <h5 className="text-sm font-medium text-blue-900 mb-2">視覚的例:</h5>
                        <p className="text-xs text-blue-700 mb-3">{suggestion.visualExample.description}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          {suggestion.visualExample.inputCells.map((inputCell, index) => (
                            <VisualCell key={index} cell={inputCell.cell} value={inputCell.value} />
                          ))}
                          <ArrowRight className="h-4 w-4 text-blue-600" />
                          <VisualCell cell={suggestion.visualExample.outputCell.cell} value={suggestion.visualExample.outputCell.value} isOutput />
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700 mb-1">例:</p>
                        <p className="text-gray-600">{translated.example}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 mb-1">結果:</p>
                        <p className="text-gray-600 font-mono">{translated.result}</p>
                      </div>
                    </div>

                    {/* 構文ノート */}
                    {translated.syntaxNotes && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm font-medium text-gray-700 mb-1">構文:</p>
                        <p className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">{translated.syntaxNotes}</p>
                      </div>
                    )}

                    {/* 使用のコツ */}
                    {translated.usageTips && translated.usageTips.length > 0 && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm font-medium text-green-700 mb-2">💡 使用のコツ:</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {translated.usageTips.map((tip: string, tipIndex: number) => (
                            <li key={tipIndex} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* よくある間違い */}
                    {translated.commonMistakes && translated.commonMistakes.length > 0 && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm font-medium text-orange-700 mb-2">⚠️ よくある間違い:</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {translated.commonMistakes.map((mistake: string, mistakeIndex: number) => (
                            <li key={mistakeIndex} className="flex items-start gap-2">
                              <span className="text-orange-600 mt-1">•</span>
                              <span>{mistake}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 関連関数 */}
                    {suggestion.relatedFunctions && suggestion.relatedFunctions.length > 0 && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm font-medium text-gray-700 mb-2">関連関数:</p>
                        <div className="flex flex-wrap gap-1">
                          {suggestion.relatedFunctions.map((rel, relIndex) => (
                            <span
                              key={relIndex}
                              className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded hover:bg-blue-100 cursor-pointer transition-colors"
                              onClick={() => handleInputChange(rel)}
                            >
                              {rel}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

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
                );
              })
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

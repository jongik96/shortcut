import { FunctionSuggestion } from '@/types/shortcuts';

export const functionMappings: FunctionSuggestion[] = [
  {
    id: 'year-extraction',
    name: 'YEAR関数',
    formula: '=YEAR(A1)',
    description: '日付から年を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '2024',
    alternatives: ['YEARFRAC', 'TEXT(A1,"yyyy")'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: 2024},
      description: 'A1の日付から年を抽出'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'month-extraction',
    name: 'MONTH関数',
    formula: '=MONTH(A1)',
    description: '日付から月を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '3',
    alternatives: ['TEXT(A1,"mm")', 'TEXT(A1,"m")'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: 3},
      description: 'A1の日付から月を抽出'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'day-extraction',
    name: 'DAY関数',
    formula: '=DAY(A1)',
    description: '日付から日を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '15',
    alternatives: ['TEXT(A1,"dd")', 'TEXT(A1,"d")'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: 15},
      description: 'A1の日付から日を抽出'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'sum-cells',
    name: 'SUM関数',
    formula: '=SUM(A1:A10)',
    description: '指定した範囲の数値を合計します',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '55',
    alternatives: ['SUBTOTAL(9,A1:A10)', 'SUMIF(A1:A10,">0")'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 15},
      description: 'A1:A5の数値を合計'
    },
    category: 'math',
    difficulty: 'beginner'
  },
  {
    id: 'sumif',
    name: 'SUMIF関数',
    formula: '=SUMIF(A1:A10,">5",B1:B10)',
    description: '条件に合うセルの値を合計します',
    example: 'A列が5より大きい場合のB列の合計',
    result: '条件に合う値の合計',
    alternatives: ['SUMIFS', 'SUMPRODUCT'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 3}, {cell: 'A2', value: 7}, {cell: 'A3', value: 2}, {cell: 'B1', value: 10}, {cell: 'B2', value: 20}, {cell: 'B3', value: 5}],
      outputCell: {cell: 'C1', value: 20},
      description: 'A列が5より大きい場合のB列の合計'
    },
    category: 'math',
    difficulty: 'intermediate'
  },
  {
    id: 'average-cells',
    name: 'AVERAGE関数',
    formula: '=AVERAGE(A1:A10)',
    description: '指定した範囲の数値の平均を計算します',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '5.5',
    alternatives: ['AVERAGEIF', 'SUBTOTAL(1,A1:A10)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 3},
      description: 'A1:A5の数値の平均を計算'
    },
    category: 'statistical',
    difficulty: 'beginner'
  },
  {
    id: 'count-cells',
    name: 'COUNT関数',
    formula: '=COUNT(A1:A10)',
    description: '数値が入力されているセルの個数を数えます',
    example: 'A1:A10に数値が8個ある場合',
    result: '8',
    alternatives: ['COUNTA', 'COUNTIF'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: ''}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 4},
      description: 'A1:A5の数値セルの個数をカウント'
    },
    category: 'statistical',
    difficulty: 'beginner'
  },
  {
    id: 'countif',
    name: 'COUNTIF関数',
    formula: '=COUNTIF(A1:A10,">5")',
    description: '条件に合うセルの個数を数えます',
    example: 'A1:A10で5より大きい値の個数',
    result: '条件に合うセルの個数',
    alternatives: ['COUNTIFS', 'SUMPRODUCT'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 3}, {cell: 'A2', value: 7}, {cell: 'A3', value: 2}, {cell: 'A4', value: 8}, {cell: 'A5', value: 1}],
      outputCell: {cell: 'B1', value: 2},
      description: 'A1:A5で5より大きい値の個数をカウント'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'max-value',
    name: 'MAX関数',
    formula: '=MAX(A1:A10)',
    description: '指定した範囲の最大値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '10',
    alternatives: ['LARGE(A1:A10,1)', 'SUBTOTAL(4,A1:A10)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 5},
      description: 'A1:A5の最大値を求める'
    },
    category: 'statistical',
    difficulty: 'beginner'
  },
  {
    id: 'min-value',
    name: 'MIN関数',
    formula: '=MIN(A1:A10)',
    description: '指定した範囲の最小値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '1',
    alternatives: ['SMALL(A1:A10,1)', 'SUBTOTAL(5,A1:A10)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 1},
      description: 'A1:A5の最小値を求める'
    },
    category: 'statistical',
    difficulty: 'beginner'
  },
  {
    id: 'concatenate-text',
    name: 'CONCATENATE関数',
    formula: '=CONCATENATE(A1," ",B1)',
    description: '複数のテキストを結合します',
    example: 'A1="Hello", B1="World"の場合',
    result: 'Hello World',
    alternatives: ['A1&" "&B1', 'TEXTJOIN(" ",TRUE,A1,B1)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello'}, {cell: 'B1', value: 'World'}],
      outputCell: {cell: 'C1', value: 'Hello World'},
      description: 'A1とB1のテキストを結合'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'text-join',
    name: 'TEXTJOIN関数',
    formula: '=TEXTJOIN(",",TRUE,A1:A10)',
    description: '区切り文字でテキストを結合します',
    example: 'A1:A10の値をカンマで結合',
    result: '値1,値2,値3...',
    alternatives: ['CONCATENATE', 'A1&","&A2&","&A3'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Apple'}, {cell: 'A2', value: 'Banana'}, {cell: 'A3', value: 'Cherry'}],
      outputCell: {cell: 'B1', value: 'Apple,Banana,Cherry'},
      description: 'A1:A3の値をカンマで結合'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'find-text',
    name: 'FIND関数',
    formula: '=FIND("abc",A1)',
    description: 'テキスト内で指定した文字列の位置を検索します',
    example: 'A1="Hello abc World"の場合',
    result: '7',
    alternatives: ['SEARCH', 'FIND関数（大文字小文字区別）'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello abc World'}],
      outputCell: {cell: 'B1', value: 7},
      description: 'A1で"abc"の位置を検索'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'left-text',
    name: 'LEFT関数',
    formula: '=LEFT(A1,5)',
    description: 'テキストの左側から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'Hello',
    alternatives: ['MID(A1,1,5)', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello World'}],
      outputCell: {cell: 'B1', value: 'Hello'},
      description: 'A1の左側から5文字を取得'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'right-text',
    name: 'RIGHT関数',
    formula: '=RIGHT(A1,5)',
    description: 'テキストの右側から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'World',
    alternatives: ['MID(A1,LEN(A1)-4,5)', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello World'}],
      outputCell: {cell: 'B1', value: 'World'},
      description: 'A1の右側から5文字を取得'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'mid-text',
    name: 'MID関数',
    formula: '=MID(A1,3,5)',
    description: 'テキストの指定した位置から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'llo W',
    alternatives: ['LEFT(RIGHT(A1,8),5)', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello World'}],
      outputCell: {cell: 'B1', value: 'llo W'},
      description: 'A1の3文字目から5文字を取得'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'len-text',
    name: 'LEN関数',
    formula: '=LEN(A1)',
    description: 'テキストの文字数を数えます',
    example: 'A1="Hello"の場合',
    result: '5',
    alternatives: ['LENB（バイト数）', 'SUMPRODUCT(LEN(A1))'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello'}],
      outputCell: {cell: 'B1', value: 5},
      description: 'A1の文字数をカウント'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'upper-text',
    name: 'UPPER関数',
    formula: '=UPPER(A1)',
    description: 'テキストを大文字に変換します',
    example: 'A1="hello"の場合',
    result: 'HELLO',
    alternatives: ['PROPER（最初の文字のみ大文字）', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'hello'}],
      outputCell: {cell: 'B1', value: 'HELLO'},
      description: 'A1のテキストを大文字に変換'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'lower-text',
    name: 'LOWER関数',
    formula: '=LOWER(A1)',
    description: 'テキストを小文字に変換します',
    example: 'A1="HELLO"の場合',
    result: 'hello',
    alternatives: ['PROPER（最初の文字のみ大文字）', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'HELLO'}],
      outputCell: {cell: 'B1', value: 'hello'},
      description: 'A1のテキストを小文字に変換'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'if-condition',
    name: 'IF関数',
    formula: '=IF(A1>5,"大きい","小さい")',
    description: '条件に応じて異なる値を返します',
    example: 'A1が5より大きい場合',
    result: '条件に応じた値',
    alternatives: ['IFS', 'CHOOSE', 'SWITCH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 7}],
      outputCell: {cell: 'B1', value: '大きい'},
      description: 'A1が5より大きいかチェック'
    },
    category: 'logical',
    difficulty: 'beginner'
  },
  {
    id: 'vlookup',
    name: 'VLOOKUP関数',
    formula: '=VLOOKUP(A1,Table1,2,FALSE)',
    description: '指定した値に対応する値を検索します',
    example: 'A1の値に対応するTable1の2列目の値',
    result: '検索された値',
    alternatives: ['INDEX+MATCH', 'XLOOKUP', 'HLOOKUP'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Apple'}],
      outputCell: {cell: 'B1', value: 'リンゴ'},
      description: 'A1の値に対応する翻訳を検索'
    },
    category: 'lookup',
    difficulty: 'intermediate'
  },
  {
    id: 'today-date',
    name: 'TODAY関数',
    formula: '=TODAY()',
    description: '現在の日付を取得します',
    example: '今日が2024年3月15日の場合',
    result: '2024-03-15',
    alternatives: ['NOW関数（日時）', 'DATE関数'],
    visualExample: {
      inputCells: [],
      outputCell: {cell: 'A1', value: '2024-03-15'},
      description: '現在の日付を自動取得'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'now-datetime',
    name: 'NOW関数',
    formula: '=NOW()',
    description: '現在の日時を取得します',
    example: '現在の日時',
    result: '2024-03-15 14:30:00',
    alternatives: ['TODAY関数（日付のみ）', 'TIME関数'],
    visualExample: {
      inputCells: [],
      outputCell: {cell: 'A1', value: '2024-03-15 14:30:00'},
      description: '現在の日時を自動取得'
    },
    category: 'date',
    difficulty: 'beginner'
  },

  // === 수학 함수들 ===
  {
    id: 'abs-value',
    name: 'ABS関数',
    formula: '=ABS(A1)',
    description: '数値の絶対値を返します',
    example: 'A1に-5がある場合',
    result: '5',
    alternatives: ['SQRT(A1*A1)', 'IF(A1<0,-A1,A1)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: -5}],
      outputCell: {cell: 'B1', value: 5},
      description: 'A1の絶対値を計算'
    },
    category: 'math',
    difficulty: 'beginner'
  },
  {
    id: 'round-number',
    name: 'ROUND関数',
    formula: '=ROUND(A1,2)',
    description: '数値を指定した桁数で四捨五入します',
    example: 'A1に3.14159がある場合',
    result: '3.14',
    alternatives: ['ROUNDUP', 'ROUNDDOWN', 'MROUND'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 3.14159}],
      outputCell: {cell: 'B1', value: 3.14},
      description: 'A1を小数点第2位で四捨五入'
    },
    category: 'math',
    difficulty: 'beginner'
  },
  {
    id: 'ceiling-number',
    name: 'CEILING関数',
    formula: '=CEILING(A1,0.5)',
    description: '数値を指定した基準値の倍数に切り上げます',
    example: 'A1に2.3がある場合',
    result: '2.5',
    alternatives: ['ROUNDUP', 'CEILING.MATH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 2.3}],
      outputCell: {cell: 'B1', value: 2.5},
      description: 'A1を0.5の倍数に切り上げ'
    },
    category: 'math',
    difficulty: 'intermediate'
  },
  {
    id: 'floor-number',
    name: 'FLOOR関数',
    formula: '=FLOOR(A1,0.5)',
    description: '数値を指定した基準値の倍数に切り下げます',
    example: 'A1に2.7がある場合',
    result: '2.5',
    alternatives: ['ROUNDDOWN', 'FLOOR.MATH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 2.7}],
      outputCell: {cell: 'B1', value: 2.5},
      description: 'A1を0.5の倍数に切り下げ'
    },
    category: 'math',
    difficulty: 'intermediate'
  },
  {
    id: 'mod-remainder',
    name: 'MOD関数',
    formula: '=MOD(A1,B1)',
    description: '除算の余りを返します',
    example: 'A1に10、B1に3がある場合',
    result: '1',
    alternatives: ['QUOTIENT', 'INT(A1/B1)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 10}, {cell: 'B1', value: 3}],
      outputCell: {cell: 'C1', value: 1},
      description: 'A1をB1で割った余り'
    },
    category: 'math',
    difficulty: 'intermediate'
  },
  {
    id: 'power-exponent',
    name: 'POWER関数',
    formula: '=POWER(A1,B1)',
    description: '数値を指定した累乗にします',
    example: 'A1に2、B1に3がある場合',
    result: '8',
    alternatives: ['A1^B1', 'EXP(B1*LN(A1))'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 2}, {cell: 'B1', value: 3}],
      outputCell: {cell: 'C1', value: 8},
      description: 'A1のB1乗を計算'
    },
    category: 'math',
    difficulty: 'intermediate'
  },
  {
    id: 'sqrt-square-root',
    name: 'SQRT関数',
    formula: '=SQRT(A1)',
    description: '数値の平方根を計算します',
    example: 'A1に16がある場合',
    result: '4',
    alternatives: ['POWER(A1,0.5)', 'A1^0.5'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 16}],
      outputCell: {cell: 'B1', value: 4},
      description: 'A1の平方根を計算'
    },
    category: 'math',
    difficulty: 'beginner'
  },
  {
    id: 'factorial',
    name: 'FACT関数',
    formula: '=FACT(A1)',
    description: '数値の階乗を計算します',
    example: 'A1に5がある場合',
    result: '120',
    alternatives: ['PRODUCT(ROW(INDIRECT("1:"&A1)))'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 5}],
      outputCell: {cell: 'B1', value: 120},
      description: 'A1の階乗を計算（5! = 5×4×3×2×1）'
    },
    category: 'math',
    difficulty: 'advanced'
  },
  {
    id: 'gcd-greatest-common-divisor',
    name: 'GCD関数',
    formula: '=GCD(A1,B1)',
    description: '複数の数値の最大公約数を求めます',
    example: 'A1に12、B1に18がある場合',
    result: '6',
    alternatives: ['LCM', 'GCD関数の配列形式'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 12}, {cell: 'B1', value: 18}],
      outputCell: {cell: 'C1', value: 6},
      description: 'A1とB1の最大公約数'
    },
    category: 'math',
    difficulty: 'advanced'
  },
  {
    id: 'lcm-least-common-multiple',
    name: 'LCM関数',
    formula: '=LCM(A1,B1)',
    description: '複数の数値の最小公倍数を求めます',
    example: 'A1に4、B1に6がある場合',
    result: '12',
    alternatives: ['GCD', 'LCM関数の配列形式'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 4}, {cell: 'B1', value: 6}],
      outputCell: {cell: 'C1', value: 12},
      description: 'A1とB1の最小公倍数'
    },
    category: 'math',
    difficulty: 'advanced'
  },

  // === 텍스트 함수들 ===
  {
    id: 'proper-case',
    name: 'PROPER関数',
    formula: '=PROPER(A1)',
    description: '各単語の最初の文字を大文字にします',
    example: 'A1に"hello world"がある場合',
    result: 'Hello World',
    alternatives: ['UPPER', 'LOWER', 'TEXT関数'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'hello world'}],
      outputCell: {cell: 'B1', value: 'Hello World'},
      description: 'A1の各単語の最初を大文字に'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'trim-spaces',
    name: 'TRIM関数',
    formula: '=TRIM(A1)',
    description: 'テキストの前後の空白を削除します',
    example: 'A1に"  hello  "がある場合',
    result: 'hello',
    alternatives: ['CLEAN', 'SUBSTITUTE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '  hello  '}],
      outputCell: {cell: 'B1', value: 'hello'},
      description: 'A1の前後の空白を削除'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'clean-text',
    name: 'CLEAN関数',
    formula: '=CLEAN(A1)',
    description: 'テキストから印刷できない文字を削除します',
    example: 'A1に制御文字が含まれている場合',
    result: 'クリーンなテキスト',
    alternatives: ['TRIM', 'SUBSTITUTE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello\x00World'}],
      outputCell: {cell: 'B1', value: 'HelloWorld'},
      description: 'A1から制御文字を削除'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'substitute-text',
    name: 'SUBSTITUTE関数',
    formula: '=SUBSTITUTE(A1,"old","new")',
    description: 'テキスト内の指定した文字列を置換します',
    example: 'A1に"Hello World"がある場合',
    result: '置換されたテキスト',
    alternatives: ['REPLACE', 'FIND+LEFT+RIGHT'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello World'}],
      outputCell: {cell: 'B1', value: 'Hello Excel'},
      description: 'A1の"World"を"Excel"に置換'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'replace-text',
    name: 'REPLACE関数',
    formula: '=REPLACE(A1,1,5,"New")',
    description: 'テキストの指定した位置から指定した文字数を置換します',
    example: 'A1に"Hello World"がある場合',
    result: 'New World',
    alternatives: ['SUBSTITUTE', 'LEFT+RIGHT'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello World'}],
      outputCell: {cell: 'B1', value: 'New World'},
      description: 'A1の1文字目から5文字を"New"に置換'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'exact-compare',
    name: 'EXACT関数',
    formula: '=EXACT(A1,B1)',
    description: '2つのテキストが完全に一致するかチェックします',
    example: 'A1に"Hello"、B1に"hello"がある場合',
    result: 'FALSE',
    alternatives: ['A1=B1', 'IF(A1=B1,TRUE,FALSE)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'Hello'}, {cell: 'B1', value: 'hello'}],
      outputCell: {cell: 'C1', value: false},
      description: 'A1とB1が完全に一致するかチェック'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'value-convert',
    name: 'VALUE関数',
    formula: '=VALUE(A1)',
    description: 'テキスト形式の数値を数値に変換します',
    example: 'A1に"123"がある場合',
    result: '123',
    alternatives: ['NUMBERVALUE', '--A1'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '123'}],
      outputCell: {cell: 'B1', value: 123},
      description: 'A1のテキストを数値に変換'
    },
    category: 'text',
    difficulty: 'beginner'
  },
  {
    id: 'text-format',
    name: 'TEXT関数',
    formula: '=TEXT(A1,"yyyy-mm-dd")',
    description: '数値を指定した形式のテキストに変換します',
    example: 'A1に日付がある場合',
    result: '2024-03-15',
    alternatives: ['FORMAT', '日付書式設定'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 45320}],
      outputCell: {cell: 'B1', value: '2024-03-15'},
      description: 'A1の数値を日付形式のテキストに変換'
    },
    category: 'text',
    difficulty: 'intermediate'
  },
  {
    id: 'numbervalue-convert',
    name: 'NUMBERVALUE関数',
    formula: '=NUMBERVALUE(A1,",",".")',
    description: 'ロケールに応じてテキストを数値に変換します',
    example: 'A1に"1,234.56"がある場合',
    result: '1234.56',
    alternatives: ['VALUE', 'SUBSTITUTE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '1,234.56'}],
      outputCell: {cell: 'B1', value: 1234.56},
      description: 'A1のテキストを数値に変換（カンマ区切り対応）'
    },
    category: 'text',
    difficulty: 'advanced'
  },
  {
    id: 'unicode-character',
    name: 'UNICHAR関数',
    formula: '=UNICHAR(A1)',
    description: '数値に対応するUnicode文字を返します',
    example: 'A1に65がある場合',
    result: 'A',
    alternatives: ['CHAR', 'CODE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 65}],
      outputCell: {cell: 'B1', value: 'A'},
      description: 'A1の数値に対応するUnicode文字'
    },
    category: 'text',
    difficulty: 'advanced'
  },
  {
    id: 'unicode-number',
    name: 'UNICODE関数',
    formula: '=UNICODE(A1)',
    description: '文字のUnicode数値を返します',
    example: 'A1に"A"がある場合',
    result: '65',
    alternatives: ['CODE', 'CHAR'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'A'}],
      outputCell: {cell: 'B1', value: 65},
      description: 'A1の文字のUnicode数値'
    },
    category: 'text',
    difficulty: 'advanced'
  },

  // === 논리 함수들 ===
  {
    id: 'ifs-multiple-conditions',
    name: 'IFS関数',
    formula: '=IFS(A1>90,"A",A1>80,"B",A1>70,"C","F")',
    description: '複数の条件を順番にチェックして対応する値を返します',
    example: 'A1に85がある場合',
    result: 'B',
    alternatives: ['IF+IF+IF', 'CHOOSE+MATCH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 85}],
      outputCell: {cell: 'B1', value: 'B'},
      description: 'A1の点数に応じて成績を判定'
    },
    category: 'logical',
    difficulty: 'intermediate'
  },
  {
    id: 'switch-multiple-values',
    name: 'SWITCH関数',
    formula: '=SWITCH(A1,"A","優秀","B","良好","C","普通","不合格")',
    description: '値に応じて対応する結果を返します',
    example: 'A1に"B"がある場合',
    result: '良好',
    alternatives: ['IFS', 'CHOOSE+MATCH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 'B'}],
      outputCell: {cell: 'B1', value: '良好'},
      description: 'A1の成績に応じて評価を返す'
    },
    category: 'logical',
    difficulty: 'intermediate'
  },
  {
    id: 'and-logical',
    name: 'AND関数',
    formula: '=AND(A1>0,B1>0)',
    description: 'すべての条件が真の場合にTRUEを返します',
    example: 'A1に5、B1に3がある場合',
    result: 'TRUE',
    alternatives: ['IF(A1>0,IF(B1>0,TRUE,FALSE),FALSE)', 'A1>0*B1>0'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 5}, {cell: 'B1', value: 3}],
      outputCell: {cell: 'C1', value: true},
      description: 'A1とB1が両方とも0より大きいかチェック'
    },
    category: 'logical',
    difficulty: 'beginner'
  },
  {
    id: 'or-logical',
    name: 'OR関数',
    formula: '=OR(A1>0,B1>0)',
    description: 'いずれかの条件が真の場合にTRUEを返します',
    example: 'A1に-2、B1に3がある場合',
    result: 'TRUE',
    alternatives: ['IF(A1>0,TRUE,IF(B1>0,TRUE,FALSE))', 'A1>0+B1>0'],
    visualExample: {
      inputCells: [{cell: 'A1', value: -2}, {cell: 'B1', value: 3}],
      outputCell: {cell: 'C1', value: true},
      description: 'A1またはB1のいずれかが0より大きいかチェック'
    },
    category: 'logical',
    difficulty: 'beginner'
  },
  {
    id: 'not-logical',
    name: 'NOT関数',
    formula: '=NOT(A1>0)',
    description: '論理値を反転します',
    example: 'A1に5がある場合',
    result: 'FALSE',
    alternatives: ['IF(A1>0,FALSE,TRUE)', 'A1<=0'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 5}],
      outputCell: {cell: 'B1', value: false},
      description: 'A1が0より大きいかどうかを反転'
    },
    category: 'logical',
    difficulty: 'beginner'
  },
  {
    id: 'xor-logical',
    name: 'XOR関数',
    formula: '=XOR(A1>0,B1>0)',
    description: '排他的論理和を返します',
    example: 'A1に5、B1に-3がある場合',
    result: 'TRUE',
    alternatives: ['OR(AND(A1>0,NOT(B1>0)),AND(NOT(A1>0),B1>0))'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 5}, {cell: 'B1', value: -3}],
      outputCell: {cell: 'C1', value: true},
      description: 'A1とB1の排他的論理和'
    },
    category: 'logical',
    difficulty: 'advanced'
  },
  {
    id: 'choose-value',
    name: 'CHOOSE関数',
    formula: '=CHOOSE(A1,"月","火","水","木","金","土","日")',
    description: 'インデックスに応じて値を選択します',
    example: 'A1に3がある場合',
    result: '水',
    alternatives: ['INDEX', 'SWITCH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 3}],
      outputCell: {cell: 'B1', value: '水'},
      description: 'A1の数値に応じて曜日を選択'
    },
    category: 'logical',
    difficulty: 'intermediate'
  },

  // === 통계 함수들 ===
  {
    id: 'median-value',
    name: 'MEDIAN関数',
    formula: '=MEDIAN(A1:A10)',
    description: '数値の中央値を求めます',
    example: 'A1:A10に1,2,3,4,5,6,7,8,9,10がある場合',
    result: '5.5',
    alternatives: ['PERCENTILE.INC(A1:A10,0.5)', 'QUARTILE.INC(A1:A10,2)'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 3},
      description: 'A1:A5の中央値を計算'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'mode-value',
    name: 'MODE関数',
    formula: '=MODE(A1:A10)',
    description: '最も頻繁に出現する値を求めます',
    example: 'A1:A10に1,2,2,3,3,3,4,5がある場合',
    result: '3',
    alternatives: ['MODE.SNGL', 'MODE.MULT'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 2}, {cell: 'A4', value: 3}, {cell: 'A5', value: 3}],
      outputCell: {cell: 'B1', value: 2},
      description: 'A1:A5で最も頻繁に出現する値'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'stdev-standard-deviation',
    name: 'STDEV関数',
    formula: '=STDEV(A1:A10)',
    description: '標本の標準偏差を計算します',
    example: 'A1:A10に数値がある場合',
    result: '標準偏差の値',
    alternatives: ['STDEV.S', 'STDEVP'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 1.58},
      description: 'A1:A5の標本標準偏差を計算'
    },
    category: 'statistical',
    difficulty: 'advanced'
  },
  {
    id: 'var-variance',
    name: 'VAR関数',
    formula: '=VAR(A1:A10)',
    description: '標本の分散を計算します',
    example: 'A1:A10に数値がある場合',
    result: '分散の値',
    alternatives: ['VAR.S', 'VARP'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 2.5},
      description: 'A1:A5の標本分散を計算'
    },
    category: 'statistical',
    difficulty: 'advanced'
  },
  {
    id: 'large-value',
    name: 'LARGE関数',
    formula: '=LARGE(A1:A10,2)',
    description: '指定した順位の大きい値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '9',
    alternatives: ['MAX', 'SMALL'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 4},
      description: 'A1:A5で2番目に大きい値'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'small-value',
    name: 'SMALL関数',
    formula: '=SMALL(A1:A10,2)',
    description: '指定した順位の小さい値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '2',
    alternatives: ['MIN', 'LARGE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 2},
      description: 'A1:A5で2番目に小さい値'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'rank-value',
    name: 'RANK関数',
    formula: '=RANK(A1,A1:A10)',
    description: '数値の順位を求めます',
    example: 'A1に8、A1:A10に1,2,3...10がある場合',
    result: '8',
    alternatives: ['RANK.EQ', 'RANK.AVG'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 8}, {cell: 'A2', value: 1}, {cell: 'A3', value: 2}, {cell: 'A4', value: 3}, {cell: 'A5', value: 4}],
      outputCell: {cell: 'B1', value: 5},
      description: 'A1の値がA1:A5の中で何番目に大きいか'
    },
    category: 'statistical',
    difficulty: 'intermediate'
  },
  {
    id: 'percentile-value',
    name: 'PERCENTILE関数',
    formula: '=PERCENTILE(A1:A10,0.25)',
    description: '指定した百分位の値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '3.25',
    alternatives: ['PERCENTILE.INC', 'PERCENTILE.EXC'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 2},
      description: 'A1:A5の25パーセンタイル値を計算'
    },
    category: 'statistical',
    difficulty: 'advanced'
  },
  {
    id: 'quartile-value',
    name: 'QUARTILE関数',
    formula: '=QUARTILE(A1:A10,1)',
    description: '指定した四分位の値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '3.25',
    alternatives: ['QUARTILE.INC', 'QUARTILE.EXC'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 1}, {cell: 'A2', value: 2}, {cell: 'A3', value: 3}, {cell: 'A4', value: 4}, {cell: 'A5', value: 5}],
      outputCell: {cell: 'B1', value: 2},
      description: 'A1:A5の第1四分位値を計算'
    },
    category: 'statistical',
    difficulty: 'advanced'
  },

  // === 날짜 함수들 ===
  {
    id: 'date-create',
    name: 'DATE関数',
    formula: '=DATE(2024,3,15)',
    description: '年、月、日から日付を作成します',
    example: '年=2024、月=3、日=15の場合',
    result: '2024-03-15',
    alternatives: ['DATEVALUE', 'TODAY'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 2024}, {cell: 'B1', value: 3}, {cell: 'C1', value: 15}],
      outputCell: {cell: 'D1', value: '2024-03-15'},
      description: 'A1(年)、B1(月)、C1(日)から日付を作成'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'time-create',
    name: 'TIME関数',
    formula: '=TIME(14,30,0)',
    description: '時、分、秒から時刻を作成します',
    example: '時=14、分=30、秒=0の場合',
    result: '14:30:00',
    alternatives: ['TIMEVALUE', 'NOW'],
    visualExample: {
      inputCells: [{cell: 'A1', value: 14}, {cell: 'B1', value: 30}, {cell: 'C1', value: 0}],
      outputCell: {cell: 'D1', value: '14:30:00'},
      description: 'A1(時)、B1(分)、C1(秒)から時刻を作成'
    },
    category: 'date',
    difficulty: 'beginner'
  },
  {
    id: 'datedif-difference',
    name: 'DATEDIF関数',
    formula: '=DATEDIF(A1,B1,"D")',
    description: '2つの日付の差を計算します',
    example: 'A1に2024-01-01、B1に2024-03-15がある場合',
    result: '74',
    alternatives: ['B1-A1', 'NETWORKDAYS'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-01-01'}, {cell: 'B1', value: '2024-03-15'}],
      outputCell: {cell: 'C1', value: 74},
      description: 'A1とB1の日付差を日数で計算'
    },
    category: 'date',
    difficulty: 'intermediate'
  },
  {
    id: 'weekday-day-of-week',
    name: 'WEEKDAY関数',
    formula: '=WEEKDAY(A1)',
    description: '日付の曜日を数値で返します',
    example: 'A1に2024-03-15がある場合',
    result: '6',
    alternatives: ['TEXT(A1,"dddd")', 'CHOOSE+WEEKDAY'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: 6},
      description: 'A1の日付の曜日を数値で返す（1=日曜日）'
    },
    category: 'date',
    difficulty: 'intermediate'
  },
  {
    id: 'workday-next-workday',
    name: 'WORKDAY関数',
    formula: '=WORKDAY(A1,5)',
    description: '指定した営業日数後の日付を求めます',
    example: 'A1に2024-03-15、営業日数5の場合',
    result: '2024-03-22',
    alternatives: ['WORKDAY.INTL', 'NETWORKDAYS'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: '2024-03-22'},
      description: 'A1から5営業日後の日付を計算'
    },
    category: 'date',
    difficulty: 'intermediate'
  },
  {
    id: 'networkdays-working-days',
    name: 'NETWORKDAYS関数',
    formula: '=NETWORKDAYS(A1,B1)',
    description: '2つの日付間の営業日数を計算します',
    example: 'A1に2024-03-01、B1に2024-03-15がある場合',
    result: '11',
    alternatives: ['WORKDAY', 'DATEDIF'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-01'}, {cell: 'B1', value: '2024-03-15'}],
      outputCell: {cell: 'C1', value: 11},
      description: 'A1とB1の間の営業日数を計算'
    },
    category: 'date',
    difficulty: 'intermediate'
  },
  {
    id: 'eomonth-end-of-month',
    name: 'EOMONTH関数',
    formula: '=EOMONTH(A1,0)',
    description: '指定した月の月末日を求めます',
    example: 'A1に2024-03-15がある場合',
    result: '2024-03-31',
    alternatives: ['DATE(YEAR(A1),MONTH(A1)+1,0)', 'EDATE'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: '2024-03-31'},
      description: 'A1の月の月末日を計算'
    },
    category: 'date',
    difficulty: 'intermediate'
  },
  {
    id: 'edate-add-months',
    name: 'EDATE関数',
    formula: '=EDATE(A1,3)',
    description: '指定した月数を加算した日付を求めます',
    example: 'A1に2024-03-15、3ヶ月後の場合',
    result: '2024-06-15',
    alternatives: ['DATE(YEAR(A1),MONTH(A1)+3,DAY(A1))', 'EOMONTH'],
    visualExample: {
      inputCells: [{cell: 'A1', value: '2024-03-15'}],
      outputCell: {cell: 'B1', value: '2024-06-15'},
      description: 'A1に3ヶ月を加算した日付'
    },
    category: 'date',
    difficulty: 'intermediate'
  }
];

import { FunctionSuggestion } from '@/types/shortcuts';

export const functionMappings: FunctionSuggestion[] = [
  {
    id: 'year-extraction',
    name: 'YEAR関数',
    formula: '=YEAR(A1)',
    description: '日付から年を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '2024',
    alternatives: ['YEARFRAC', 'TEXT(A1,"yyyy")']
  },
  {
    id: 'month-extraction',
    name: 'MONTH関数',
    formula: '=MONTH(A1)',
    description: '日付から月を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '3',
    alternatives: ['TEXT(A1,"mm")', 'TEXT(A1,"m")']
  },
  {
    id: 'day-extraction',
    name: 'DAY関数',
    formula: '=DAY(A1)',
    description: '日付から日を抽出します',
    example: 'A1に2024-03-15がある場合',
    result: '15',
    alternatives: ['TEXT(A1,"dd")', 'TEXT(A1,"d")']
  },
  {
    id: 'sum-cells',
    name: 'SUM関数',
    formula: '=SUM(A1:A10)',
    description: '指定した範囲の数値を合計します',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '55',
    alternatives: ['SUBTOTAL(9,A1:A10)', 'SUMIF(A1:A10,">0")']
  },
  {
    id: 'sumif',
    name: 'SUMIF関数',
    formula: '=SUMIF(A1:A10,">5",B1:B10)',
    description: '条件に合うセルの値を合計します',
    example: 'A列が5より大きい場合のB列の合計',
    result: '条件に合う値の合計',
    alternatives: ['SUMIFS', 'SUMPRODUCT']
  },
  {
    id: 'average-cells',
    name: 'AVERAGE関数',
    formula: '=AVERAGE(A1:A10)',
    description: '指定した範囲の数値の平均を計算します',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '5.5',
    alternatives: ['AVERAGEIF', 'SUBTOTAL(1,A1:A10)']
  },
  {
    id: 'count-cells',
    name: 'COUNT関数',
    formula: '=COUNT(A1:A10)',
    description: '数値が入力されているセルの個数を数えます',
    example: 'A1:A10に数値が8個ある場合',
    result: '8',
    alternatives: ['COUNTA', 'COUNTIF']
  },
  {
    id: 'countif',
    name: 'COUNTIF関数',
    formula: '=COUNTIF(A1:A10,">5")',
    description: '条件に合うセルの個数を数えます',
    example: 'A1:A10で5より大きい値の個数',
    result: '条件に合うセルの個数',
    alternatives: ['COUNTIFS', 'SUMPRODUCT']
  },
  {
    id: 'max-value',
    name: 'MAX関数',
    formula: '=MAX(A1:A10)',
    description: '指定した範囲の最大値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '10',
    alternatives: ['LARGE(A1:A10,1)', 'SUBTOTAL(4,A1:A10)']
  },
  {
    id: 'min-value',
    name: 'MIN関数',
    formula: '=MIN(A1:A10)',
    description: '指定した範囲の最小値を求めます',
    example: 'A1:A10に1,2,3...10がある場合',
    result: '1',
    alternatives: ['SMALL(A1:A10,1)', 'SUBTOTAL(5,A1:A10)']
  },
  {
    id: 'concatenate-text',
    name: 'CONCATENATE関数',
    formula: '=CONCATENATE(A1," ",B1)',
    description: '複数のテキストを結合します',
    example: 'A1="Hello", B1="World"の場合',
    result: 'Hello World',
    alternatives: ['A1&" "&B1', 'TEXTJOIN(" ",TRUE,A1,B1)']
  },
  {
    id: 'text-join',
    name: 'TEXTJOIN関数',
    formula: '=TEXTJOIN(",",TRUE,A1:A10)',
    description: '区切り文字でテキストを結合します',
    example: 'A1:A10の値をカンマで結合',
    result: '値1,値2,値3...',
    alternatives: ['CONCATENATE', 'A1&","&A2&","&A3']
  },
  {
    id: 'find-text',
    name: 'FIND関数',
    formula: '=FIND("abc",A1)',
    description: 'テキスト内で指定した文字列の位置を検索します',
    example: 'A1="Hello abc World"の場合',
    result: '7',
    alternatives: ['SEARCH', 'FIND関数（大文字小文字区別）']
  },
  {
    id: 'left-text',
    name: 'LEFT関数',
    formula: '=LEFT(A1,5)',
    description: 'テキストの左側から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'Hello',
    alternatives: ['MID(A1,1,5)', 'TEXT関数']
  },
  {
    id: 'right-text',
    name: 'RIGHT関数',
    formula: '=RIGHT(A1,5)',
    description: 'テキストの右側から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'World',
    alternatives: ['MID(A1,LEN(A1)-4,5)', 'TEXT関数']
  },
  {
    id: 'mid-text',
    name: 'MID関数',
    formula: '=MID(A1,3,5)',
    description: 'テキストの指定した位置から指定した文字数を取得します',
    example: 'A1="Hello World"の場合',
    result: 'llo W',
    alternatives: ['LEFT(RIGHT(A1,8),5)', 'TEXT関数']
  },
  {
    id: 'len-text',
    name: 'LEN関数',
    formula: '=LEN(A1)',
    description: 'テキストの文字数を数えます',
    example: 'A1="Hello"の場合',
    result: '5',
    alternatives: ['LENB（バイト数）', 'SUMPRODUCT(LEN(A1))']
  },
  {
    id: 'upper-text',
    name: 'UPPER関数',
    formula: '=UPPER(A1)',
    description: 'テキストを大文字に変換します',
    example: 'A1="hello"の場合',
    result: 'HELLO',
    alternatives: ['PROPER（最初の文字のみ大文字）', 'TEXT関数']
  },
  {
    id: 'lower-text',
    name: 'LOWER関数',
    formula: '=LOWER(A1)',
    description: 'テキストを小文字に変換します',
    example: 'A1="HELLO"の場合',
    result: 'hello',
    alternatives: ['PROPER（最初の文字のみ大文字）', 'TEXT関数']
  },
  {
    id: 'if-condition',
    name: 'IF関数',
    formula: '=IF(A1>5,"大きい","小さい")',
    description: '条件に応じて異なる値を返します',
    example: 'A1が5より大きい場合',
    result: '条件に応じた値',
    alternatives: ['IFS', 'CHOOSE', 'SWITCH']
  },
  {
    id: 'vlookup',
    name: 'VLOOKUP関数',
    formula: '=VLOOKUP(A1,Table1,2,FALSE)',
    description: '指定した値に対応する値を検索します',
    example: 'A1の値に対応するTable1の2列目の値',
    result: '検索された値',
    alternatives: ['INDEX+MATCH', 'XLOOKUP', 'HLOOKUP']
  },
  {
    id: 'today-date',
    name: 'TODAY関数',
    formula: '=TODAY()',
    description: '現在の日付を取得します',
    example: '今日が2024年3月15日の場合',
    result: '2024-03-15',
    alternatives: ['NOW関数（日時）', 'DATE関数']
  },
  {
    id: 'now-datetime',
    name: 'NOW関数',
    formula: '=NOW()',
    description: '現在の日時を取得します',
    example: '現在の日時',
    result: '2024-03-15 14:30:00',
    alternatives: ['TODAY関数（日付のみ）', 'TIME関数']
  }
];

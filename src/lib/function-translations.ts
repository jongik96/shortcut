import { Locale } from '@/i18n/config';
import { FunctionSuggestion } from '@/types/shortcuts';

// 번역 파일들을 동적으로 로드
import functionsJa from '../../messages/functions-ja.json';
import functionsEn from '../../messages/functions-en.json';
import functionsKo from '../../messages/functions-ko.json';
import functionsAr from '../../messages/functions-ar.json';

interface FunctionTranslations {
  [key: string]: {
    name: string;
    description: string;
    example?: string;
    result?: string;
    usageTips?: string[];
    commonMistakes?: string[];
    syntaxNotes?: string;
  };
}

const translations: Record<Locale, FunctionTranslations> = {
  ja: functionsJa.functions,
  en: functionsEn.functions,
  ko: functionsKo.functions,
  ar: functionsAr.functions,
};

export function getFunctionTranslation(functionItem: FunctionSuggestion, locale: Locale) {
  const translation = translations[locale]?.[functionItem.id];
  
  if (!translation) {
    // 번역이 없으면 원본 (일본어) 사용
    return {
      name: functionItem.name,
      description: functionItem.description,
      example: functionItem.example,
      result: functionItem.result,
      usageTips: functionItem.usageTips,
      commonMistakes: functionItem.commonMistakes,
      syntaxNotes: functionItem.syntaxNotes,
    };
  }
  
  return {
    name: translation.name || functionItem.name,
    description: translation.description || functionItem.description,
    example: translation.example || functionItem.example,
    result: translation.result || functionItem.result,
    usageTips: translation.usageTips || functionItem.usageTips,
    commonMistakes: translation.commonMistakes || functionItem.commonMistakes,
    syntaxNotes: translation.syntaxNotes || functionItem.syntaxNotes,
  };
}

export function translateFunction(functionItem: FunctionSuggestion, locale: Locale): FunctionSuggestion {
  const translation = getFunctionTranslation(functionItem, locale);
  
  return {
    ...functionItem,
    name: translation.name,
    description: translation.description,
    example: translation.example,
    result: translation.result,
    usageTips: translation.usageTips,
    commonMistakes: translation.commonMistakes,
    syntaxNotes: translation.syntaxNotes,
  };
}


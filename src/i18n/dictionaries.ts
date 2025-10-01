import 'server-only';
import type { Locale } from './config';

const dictionaries = {
  ja: () => import('../../messages/ja.json').then((module) => module.default),
  en: () => import('../../messages/en.json').then((module) => module.default),
  ko: () => import('../../messages/ko.json').then((module) => module.default),
  ar: () => import('../../messages/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};


'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/i18n/config';

type LocaleContextType = {
  locale: Locale;
  dictionary: any;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale,
  dictionary,
}: {
  children: React.ReactNode;
  locale: Locale;
  dictionary: any;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return context;
}


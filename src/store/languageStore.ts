import { create } from 'zustand';

export type Language = 'en' | 'zh';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const STORAGE_KEY = 'ssat-lit-learn-language';

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {}
  return 'en';
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: getInitialLanguage(),
  setLanguage: (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    set({ language: lang });
  },
}));

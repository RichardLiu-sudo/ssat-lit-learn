import { useLanguageStore, type Language } from '../store/languageStore';
import { modules } from '../data/modules';
import { modulesZh } from '../data/modulesZh';
import { exercises } from '../data/exercises';
import { exercisesZh } from '../data/exercisesZh';
import { translations, type TranslationKey } from './translations';
import type { Module } from '../data/modules';
import type { Exercise } from '../data/exercises';

/** Get the current language */
export function useLanguage(): Language {
  return useLanguageStore((s) => s.language);
}

/** Get a UI translation string by key */
export function useT(): (key: TranslationKey) => string {
  const lang = useLanguage();
  return (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry['en'];
  };
}

/** Get modules in the current language */
export function useModules(): Module[] {
  const lang = useLanguage();
  // English is the canonical version; Chinese is supplementary.
  // For now, return the full set based on language.
  // If Chinese version has fewer modules, they can be supplemented from English.
  if (lang === 'zh' && modulesZh.length > 0) {
    // Merge: take Chinese modules where available, fallback to English
    const enMap = new Map(modules.map((m) => [m.id, m]));
    const zhMap = new Map(modulesZh.map((m) => [m.id, m]));
    return modules.map((m) => zhMap.get(m.id) ?? m);
  }
  return modules;
}

/** Get exercises in the current language */
export function useExercises(): Exercise[] {
  const lang = useLanguage();
  // Chinese exercises are a complete separate dataset with different IDs.
  // Return the full set for the current language.
  if (lang === 'zh' && exercisesZh.length > 0) return exercisesZh;
  return exercises;
}

import { useStore } from '../store/useStore'
import { useExercises, useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'

export default function Mistakes() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const exercises = useExercises()
  const { mistakeIds, exerciseResults, clearMistakes } = useStore()

  const mistakeExercises = exercises.filter((ex) => mistakeIds.has(ex.id))

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('mistakes.title')}</h1>
        {mistakeExercises.length > 0 && (
          <button onClick={clearMistakes} className="btn-secondary">
            {t('mistakes.clearLog')}
          </button>
        )}
      </div>

      {mistakeExercises.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">{t('mistakes.noMistakes')}</p>
          <p className="text-gray-500 dark:text-gray-500">{t('mistakes.keepUp')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakeExercises.map((ex) => {
            const result = exerciseResults[ex.id]
            const typeLabelKey = `type.${ex.type}` as keyof typeof translations
            return (
              <div key={ex.id} className="card">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded">
                    {t(typeLabelKey)}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{ex.moduleTitle}</span>
                </div>
                <p className="font-medium mb-3">{ex.question}</p>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {t('mistakes.yourAnswer')} {result?.userAnswer}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    {t('mistakes.correctAnswer')} {ex.answer}
                  </p>
                  {ex.explanation && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ex.explanation}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

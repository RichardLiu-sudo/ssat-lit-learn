import { useState } from 'react'
import { useExercises, useModules, useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'
import { useStore } from '../store/useStore'

export default function Practice() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const exercises = useExercises()
  const modules = useModules()
  const [filterModule, setFilterModule] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const { exerciseResults, addExerciseResult } = useStore()

  const filtered = exercises.filter((ex) => {
    if (filterModule !== 'all' && ex.moduleId !== filterModule) return false
    if (filterType !== 'all' && ex.type !== filterType) return false
    return true
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t('practice.title')}</h1>

      <div className="flex gap-4 mb-6">
        <select
          value={filterModule}
          onChange={(e) => setFilterModule(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="all">{t('practice.allModules')}</option>
          {modules.map((m) => (
            <option key={m.id} value={m.id}>{lang === 'zh' ? m.titleCn : m.title}</option>
          ))}
        </select>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="all">{t('practice.allTypes')}</option>
          <option value="choice">{t('practice.multipleChoice')}</option>
          <option value="multiselect">{t('practice.multipleSelect')}</option>
          <option value="fill">{t('practice.fillIn')}</option>
          <option value="short_answer">{t('practice.shortAnswer')}</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((ex) => {
          const result = exerciseResults[ex.id]
          return <ExerciseCard key={ex.id} exercise={ex} result={result} onSubmit={addExerciseResult} lang={lang} t={t} />
        })}
      </div>
    </div>
  )
}

function ExerciseCard({ exercise, result, onSubmit, lang, t }: any) {
  const [answer, setAnswer] = useState('')
  const [multiAnswer, setMultiAnswer] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(!!result)

  const typeLabelKey = `type.${exercise.type}` as keyof typeof translations

  const handleSubmit = () => {
    let correct = false
    let userAnswerStr = ''
    if (exercise.type === 'choice') {
      correct = answer === exercise.answer
      userAnswerStr = answer
    } else if (exercise.type === 'multiselect') {
      const sortedUser = [...multiAnswer].sort().join('')
      const sortedCorrect = exercise.answer.split('').sort().join('')
      correct = sortedUser === sortedCorrect
      userAnswerStr = multiAnswer.sort().join('')
    } else {
      correct = answer.trim().toLowerCase().includes(exercise.answer.toLowerCase())
      userAnswerStr = answer
    }
    onSubmit({
      exerciseId: exercise.id,
      correct,
      userAnswer: userAnswerStr,
      timestamp: Date.now(),
    })
    setSubmitted(true)
  }

  const toggleMulti = (opt: string) => {
    if (submitted) return
    setMultiAnswer((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    )
  }

  const canSubmit =
    exercise.type === 'multiselect' ? multiAnswer.length > 0 : !!answer

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
          {t(typeLabelKey)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{exercise.moduleTitle}</span>
      </div>

      {exercise.passage && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
          {exercise.passageTitle && (
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {exercise.passageTitle}
            </p>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
            {exercise.passage}
          </p>
        </div>
      )}

      <p className="text-lg font-medium mb-4">{exercise.question}</p>

      {exercise.type === 'choice' && (
        <div className="space-y-2 mb-4">
          {exercise.options?.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => !submitted && setAnswer(opt)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition-colors ${
                answer === opt
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          ))}
        </div>
      )}

      {exercise.type === 'multiselect' && (
        <div className="space-y-2 mb-4">
          {exercise.options?.map((opt: string, i: number) => (
            <label
              key={i}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                submitted
                  ? 'cursor-default'
                  : ''
              } ${
                multiAnswer.includes(opt)
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={multiAnswer.includes(opt)}
                onChange={() => toggleMulti(opt)}
                disabled={submitted}
                className="w-4 h-4 accent-blue-500"
              />
              <span>{String.fromCharCode(65 + i)}. {opt}</span>
            </label>
          ))}
        </div>
      )}

      {exercise.type !== 'choice' && exercise.type !== 'multiselect' && (
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={submitted}
          className="w-full p-3 border rounded-lg mb-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          rows={3}
          placeholder={t('practice.typeAnswer')}
        />
      )}

      {!submitted ? (
        <button onClick={handleSubmit} className="btn-primary" disabled={!canSubmit}>
          {t('practice.submit')}
        </button>
      ) : (
        <div className={`p-3 rounded-lg ${
          result?.correct
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
        }`}>
          <p className="font-medium">{result?.correct ? t('practice.correct') : t('practice.incorrect')}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('practice.yourAnswer')} {result?.userAnswer}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{t('practice.correctAnswer')} {exercise.answer}</p>
          {exercise.explanation && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exercise.explanation}</p>
          )}
        </div>
      )}
    </div>
  )
}

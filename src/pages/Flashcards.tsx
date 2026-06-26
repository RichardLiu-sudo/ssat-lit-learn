import { useState } from 'react'
import { Link } from 'react-router-dom'
import { vocabWords } from '../data/vocabulary'
import { useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'

export default function Flashcards() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [knownCount, setKnownCount] = useState(0)

  const word = vocabWords[index]

  const next = () => {
    setFlipped(false)
    setIndex((i) => (i + 1) % vocabWords.length)
  }

  const markKnown = () => {
    setKnownCount((c) => c + 1)
    next()
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('flashcards.title')}</h1>
        <Link to="/vocabulary" className="btn-secondary">
          {t('flashcards.backToVocab')}
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {index + 1} / {vocabWords.length} · {t('flashcards.progress')} {knownCount}
      </p>

      <div className="w-full h-64 mb-4">
        <div
          onClick={() => setFlipped(!flipped)}
          className="w-full h-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center cursor-pointer transition-all hover:shadow-lg"
        >
          <div className="text-center p-8">
            {!flipped ? (
              <>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">{word.word}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('flashcards.tapToFlip')}</p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">{word.modern}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{word.pos}</p>
                {word.example && (
                  <p className="text-sm italic text-gray-600 dark:text-gray-300">
                    "{word.example}"
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={next} className="btn-secondary">
          {t('flashcards.skip')}
        </button>
        <button onClick={markKnown} className="btn-primary">
          {t('flashcards.mastered')}
        </button>
      </div>
    </div>
  )
}

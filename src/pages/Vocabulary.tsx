import { useState } from 'react'
import { Link } from 'react-router-dom'
import { vocabWords } from '../data/vocabulary'
import { useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'

export default function Vocabulary() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const [search, setSearch] = useState('')
  const [filterPos, setFilterPos] = useState('all')

  const posTypes = ['all', ...new Set(vocabWords.map((w) => w.pos))]

  const filtered = vocabWords.filter((w) => {
    if (filterPos !== 'all' && w.pos !== filterPos) return false
    if (search && !w.word.toLowerCase().includes(search.toLowerCase()) &&
        !w.modern.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('vocabulary.title')}</h1>
        <Link to="/vocabulary/flashcard" className="btn-primary">
          {t('vocabulary.flashcardMode')}
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {vocabWords.length}{t('vocabulary.subtitle')}
      </p>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('vocabulary.search')}
          className="flex-1 px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        />
        <select
          value={filterPos}
          onChange={(e) => setFilterPos(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          {posTypes.map((pos) => (
            <option key={pos} value={pos}>
              {pos === 'all' ? t('vocabulary.allPOS') : pos}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((word) => (
          <div key={word.word} className="card">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{word.word}</h3>
              <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                {word.pos}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{word.modern}</p>
            {word.example && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                "{word.example}"
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

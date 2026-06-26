import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'

export default function Teacher() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const { teacherMode, toggleTeacherMode } = useStore()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('teacher.title')}</h1>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">{t('teacher.presentationMode')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t('teacher.presentationDesc')}
        </p>
        <button
          onClick={toggleTeacherMode}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
            teacherMode
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          {teacherMode ? t('teacher.exitPresentation') : t('teacher.enterPresentation')}
        </button>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">{t('teacher.quickNav')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/learn" className="btn-primary text-center">
            {t('teacher.learningCenter')}
          </Link>
          <Link to="/practice" className="btn-secondary text-center">
            {t('teacher.practiceCenter')}
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">{t('teacher.classroomTips')}</h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li>• {t('teacher.tip1')}</li>
          <li>• {t('teacher.tip2')}</li>
          <li>• {t('teacher.tip3')} <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">F11</kbd></li>
          <li>• {t('teacher.tip4')}</li>
        </ul>
      </div>
    </div>
  )
}

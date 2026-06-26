import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useModules, useLanguage } from '../i18n/dataAccess'
import { translations } from '../i18n/translations'
import { FiBook, FiCheckCircle, FiClock, FiTrendingUp } from 'react-icons/fi'

export default function Landing() {
  const lang = useLanguage()
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? key
  const modules = useModules()
  const { completedModules } = useStore()
  const total = modules.length
  const completed = modules.filter((m) => completedModules.has(m.id)).length
  const progress = Math.round((completed / total) * 100)

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">{t('landing.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('landing.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FiBook className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('landing.totalModules')}</p>
              <p className="text-2xl font-bold">{total}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FiCheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('landing.completed')}</p>
              <p className="text-2xl font-bold">{completed}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <FiTrendingUp className="text-amber-600 dark:text-amber-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('landing.progress')}</p>
              <p className="text-2xl font-bold">{progress}%</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <FiClock className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('landing.estTime')}</p>
              <p className="text-2xl font-bold">~45h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">{t('landing.learningMap')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('landing.learningMapDesc')}
          </p>
          <Link to="/learn" className="btn-primary inline-block">
            {t('landing.startLearning')}
          </Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold mb-4">{t('landing.teacherMode')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('landing.teacherModeDesc')}
          </p>
          <Link to="/teacher" className="btn-primary inline-block">
            {t('landing.enterPresentation')}
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">{t('landing.todayRecommend')}</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-lg mb-2">{t('landing.recommendTitle')}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {t('landing.recommendDesc')}
          </p>
          <Link to="/learn/1-3" className="text-blue-600 dark:text-blue-400 hover:underline">
            {t('landing.goToModule')}
          </Link>
        </div>
      </div>
    </div>
  )
}

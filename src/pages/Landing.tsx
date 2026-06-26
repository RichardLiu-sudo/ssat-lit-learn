import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { modules } from '../data/modules'
import { FiBook, FiCheckCircle, FiClock, FiTrendingUp } from 'react-icons/fi'

export default function Landing() {
  const { completedModules } = useStore()
  const total = modules.length
  const completed = modules.filter((m) => completedModules.has(m.id)).length
  const progress = Math.round((completed / total) * 100)

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">SSAT / SAT 小说与诗歌备考平台</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          基于《小说 & 诗歌备考冲刺讲义》的交互式学习网页，支持学生自学与教师讲解双模式。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FiBook className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">总模块</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">已完成</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">进度</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">预估时间</p>
              <p className="text-2xl font-bold">~45h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">学习地图</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            14 个技能模块按认知层级递进，从基础图式到高级诗歌分析。
          </p>
          <Link to="/learn" className="btn-primary inline-block">
            开始学习
          </Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold mb-4">教师讲解模式</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            切换至讲解模式，内容逐步揭示，适合课堂投影与板书级演示。
          </p>
          <Link to="/teacher" className="btn-primary inline-block">
            进入讲解模式
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">今日推荐</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-lg mb-2">Appointment with Love</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            短篇小说《爱的约会》是练习"预测结局"(Anticipate Outcome)的经典范例。尝试在阅读时回答 6 个预测问题。
          </p>
          <Link to="/learn/1-3" className="text-blue-600 dark:text-blue-400 hover:underline">
            进入模块 1.3 →
          </Link>
        </div>
      </div>
    </div>
  )
}

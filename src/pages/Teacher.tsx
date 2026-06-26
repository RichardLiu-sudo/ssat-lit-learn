import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function Teacher() {
  const { teacherMode, toggleTeacherMode } = useStore()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">教师讲解面板</h1>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">讲解模式</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          开启讲解模式后，学习内容将支持逐步揭示，适合课堂投影场景。
          字号自动放大，侧边栏收起，可一键全屏展示。
        </p>
        <button
          onClick={toggleTeacherMode}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
            teacherMode
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          {teacherMode ? '退出讲解模式' : '进入讲解模式'}
        </button>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">快速导航</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/learn" className="btn-primary text-center">
            学习中心
          </Link>
          <Link to="/practice" className="btn-secondary text-center">
            练习中心
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">课堂使用提示</h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li>• 进入讲解模式后，内容默认隐藏，点击"显示下一节"逐段展示</li>
          <li>• 练习答案在讲解模式下默认隐藏，便于课堂提问</li>
          <li>• 按 <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">F11</kbd> 进入浏览器全屏</li>
          <li>• 使用侧边栏可在模块间快速跳转</li>
        </ul>
      </div>
    </div>
  )
}

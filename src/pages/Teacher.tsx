import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function Teacher() {
  const { teacherMode, toggleTeacherMode } = useStore()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Teacher Presentation Panel</h1>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Presentation Mode</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          When Presentation Mode is enabled, learning content supports step-by-step reveal, ideal for classroom projection.
          Font size is enlarged, the sidebar collapses, and full-screen display is one click away.
        </p>
        <button
          onClick={toggleTeacherMode}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
            teacherMode
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          {teacherMode ? 'Exit Presentation Mode' : 'Enter Presentation Mode'}
        </button>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/learn" className="btn-primary text-center">
            Learning Center
          </Link>
          <Link to="/practice" className="btn-secondary text-center">
            Practice Center
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Classroom Tips</h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li>• In Presentation Mode, content is hidden by default. Click "Reveal Next" to show section by section.</li>
          <li>• Exercise answers are hidden by default in Presentation Mode, ideal for classroom Q&A.</li>
          <li>• Press <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">F11</kbd> to enter browser fullscreen.</li>
          <li>• Use the sidebar to quickly navigate between modules.</li>
        </ul>
      </div>
    </div>
  )
}

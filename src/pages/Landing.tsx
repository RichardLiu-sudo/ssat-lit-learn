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
        <h1 className="text-4xl font-bold mb-4">SSAT / SAT Fiction &amp; Poetry Prep Platform</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          An interactive learning platform based on Fiction &amp; Poetry Exam Prep Notes, supporting both self-study and teacher presentation modes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FiBook className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Modules</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">Est. Time</p>
              <p className="text-2xl font-bold">~45h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Learning Map</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            14 skill modules progressing by cognitive level, from foundational schemas to advanced poetry analysis.
          </p>
          <Link to="/learn" className="btn-primary inline-block">
            Start Learning
          </Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Teacher Presentation Mode</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Switch to Presentation Mode for step-by-step content reveal, ideal for classroom projection and board-level demonstration.
          </p>
          <Link to="/teacher" className="btn-primary inline-block">
            Enter Presentation Mode
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Today's Recommendation</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-lg mb-2">Appointment with Love</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            The short story "Appointment with Love" is a classic example for practicing "Anticipate Outcome." Try answering the 6 prediction questions while reading.
          </p>
          <Link to="/learn/1-3" className="text-blue-600 dark:text-blue-400 hover:underline">
            Go to Module 1.3 →
          </Link>
        </div>
      </div>
    </div>
  )
}

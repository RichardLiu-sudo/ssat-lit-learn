import { Link } from 'react-router-dom'
import { modules } from '../data/modules'
import { useStore } from '../store/useStore'

export default function Learn() {
  const { getModuleStatus } = useStore()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Learning Center</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Complete the following modules in order. Each module includes theory explanations, model passage analysis, and practice exercises.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Unit 1 · Fiction Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {modules
              .filter((m) => m.unit === 1)
              .map((m) => {
                const status = getModuleStatus(m.id, m.prerequisites || [])
                return <ModuleCard key={m.id} module={m} status={status} />
              })}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            Unit 2 · Poetry Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {modules
              .filter((m) => m.unit === 2)
              .map((m) => {
                const status = getModuleStatus(m.id, m.prerequisites || [])
                return <ModuleCard key={m.id} module={m} status={status} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

function ModuleCard({ module, status }: any) {
  const statusText: Record<string, string> = {
    locked: 'Locked',
    available: 'Available',
    'in-progress': 'In Progress',
    completed: 'Completed',
  }
  const statusColor: Record<string, string> = {
    locked: 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    available: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'in-progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">{module.titleCn}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{module.title}</p>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[status]}`}>
          {statusText[status]}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{module.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          {module.estimatedTime} · {module.exerciseCount} questions
        </span>
        <Link
          to={`/learn/${module.id}`}
          className={`px-3 py-1 rounded-lg font-medium transition-colors ${
            status === 'locked'
              ? 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {status === 'completed' ? 'Review' : 'Enter'}
        </Link>
      </div>
    </div>
  )
}

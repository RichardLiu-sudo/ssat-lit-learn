import { useStore } from '../store/useStore'
import { modules } from '../data/modules'

export default function Dashboard() {
  const { completedModules, exerciseResults, mistakeIds } = useStore()

  const total = modules.length
  const completed = modules.filter((m) => completedModules.has(m.id)).length
  const totalExercises = Object.keys(exerciseResults).length
  const correctExercises = Object.values(exerciseResults).filter((r) => r.correct).length

  const moduleStats = modules.map((m) => ({
    id: m.id,
    title: m.titleCn,
    completed: completedModules.has(m.id),
    correct: Object.values(exerciseResults).filter((r) => r.exerciseId.startsWith(m.id) && r.correct).length,
    total: Object.values(exerciseResults).filter((r) => r.exerciseId.startsWith(m.id)).length,
  }))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Learning Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="card text-center">
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{completed}/{total}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Modules Completed</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all"
              style={{ width: `${Math.round(completed / total * 100)}%` }}
            />
          </div>
        </div>
        <div className="card text-center">
          <p className="text-4xl font-bold text-green-600 dark:text-green-400">
            {correctExercises}/{totalExercises}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Practice Accuracy</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
            <div
              className="bg-green-600 dark:bg-green-400 h-2 rounded-full transition-all"
              style={{ width: totalExercises ? `${Math.round(correctExercises / totalExercises * 100)}%` : '0%' }}
            />
          </div>
        </div>
        <div className="card text-center">
          <p className="text-4xl font-bold text-red-600 dark:text-red-400">{mistakeIds.size}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Mistakes</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Module Progress</h2>
        <div className="space-y-3">
          {moduleStats.map((s) => (
            <div key={s.id} className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${s.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
              <span className="w-32 text-sm truncate">{s.title}</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${s.completed ? 'bg-green-500' : 'bg-blue-500'}`}
                  style={{ width: s.completed ? '100%' : `${s.total > 0 ? Math.round(s.correct / s.total * 100) : 0}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 w-16 text-right">
                {s.completed ? 'Done' : s.total > 0 ? `${s.correct}/${s.total}` : '-'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

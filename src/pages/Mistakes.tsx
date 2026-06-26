import { useStore } from '../store/useStore'
import { exercises } from '../data/exercises'

export default function Mistakes() {
  const { mistakeIds, exerciseResults, clearMistakes } = useStore()

  const mistakeExercises = exercises.filter((ex) => mistakeIds.has(ex.id))

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">错题本</h1>
        {mistakeExercises.length > 0 && (
          <button onClick={clearMistakes} className="btn-secondary">
            清空错题本
          </button>
        )}
      </div>

      {mistakeExercises.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">暂无错题</p>
          <p className="text-gray-500 dark:text-gray-500">继续保持！</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakeExercises.map((ex) => {
            const result = exerciseResults[ex.id]
            return (
              <div key={ex.id} className="card">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded">
                    {ex.typeLabel}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{ex.moduleTitle}</span>
                </div>
                <p className="font-medium mb-3">{ex.question}</p>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    你的答案: {result?.userAnswer}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    正确答案: {ex.answer}
                  </p>
                  {ex.explanation && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ex.explanation}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

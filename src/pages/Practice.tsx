import { useState } from 'react'
import { exercises } from '../data/exercises'
import { useStore } from '../store/useStore'
import { modules } from '../data/modules'

export default function Practice() {
  const [filterModule, setFilterModule] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const { exerciseResults, addExerciseResult } = useStore()

  const filtered = exercises.filter((ex) => {
    if (filterModule !== 'all' && ex.moduleId !== filterModule) return false
    if (filterType !== 'all' && ex.type !== filterType) return false
    return true
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">练习中心</h1>

      <div className="flex gap-4 mb-6">
        <select
          value={filterModule}
          onChange={(e) => setFilterModule(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="all">全部模块</option>
          {modules.map((m) => (
            <option key={m.id} value={m.id}>{m.titleCn}</option>
          ))}
        </select>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="all">全部题型</option>
          <option value="choice">选择题</option>
          <option value="fill">填空题</option>
          <option value="short_answer">简答题</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((ex) => {
          const result = exerciseResults[ex.id]
          return <ExerciseCard key={ex.id} exercise={ex} result={result} onSubmit={addExerciseResult} />
        })}
      </div>
    </div>
  )
}

function ExerciseCard({ exercise, result, onSubmit }: any) {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(!!result)

  const handleSubmit = () => {
    const correct =
      exercise.type === 'choice'
        ? answer === exercise.answer
        : answer.trim().toLowerCase().includes(exercise.answer.toLowerCase())
    onSubmit({
      exerciseId: exercise.id,
      correct,
      userAnswer: answer,
      timestamp: Date.now(),
    })
    setSubmitted(true)
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
          {exercise.typeLabel}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{exercise.moduleTitle}</span>
      </div>
      <p className="text-lg font-medium mb-4">{exercise.question}</p>

      {exercise.type === 'choice' && (
        <div className="space-y-2 mb-4">
          {exercise.options?.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => !submitted && setAnswer(opt)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition-colors ${
                answer === opt
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          ))}
        </div>
      )}

      {exercise.type !== 'choice' && (
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={submitted}
          className="w-full p-3 border rounded-lg mb-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          rows={3}
          placeholder="输入你的答案..."
        />
      )}

      {!submitted ? (
        <button onClick={handleSubmit} className="btn-primary" disabled={!answer}>
          提交答案
        </button>
      ) : (
        <div className={`p-3 rounded-lg ${
          result?.correct
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
        }`}>
          <p className="font-medium">{result?.correct ? '正确' : '错误'}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">你的答案: {result?.userAnswer}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">正确答案: {exercise.answer}</p>
          {exercise.explanation && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exercise.explanation}</p>
          )}
        </div>
      )}
    </div>
  )
}

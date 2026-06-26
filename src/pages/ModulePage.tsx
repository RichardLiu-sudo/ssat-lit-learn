import { useParams, useNavigate } from 'react-router-dom'
import { modules } from '../data/modules'
import { getExercisesByModule } from '../data/exercises'
import { useStore } from '../store/useStore'
import StepReveal from '../components/StepReveal'
import { FiCheck, FiEdit2 } from 'react-icons/fi'
import { useState, useMemo } from 'react'

type PracticeMode = 'learn-first' | 'practice-first'

export default function ModulePage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { markModuleComplete, addNote, notes, teacherMode } = useStore()
  const [editingNote, setEditingNote] = useState<number | null>(null)
  const [noteText, setNoteText] = useState('')
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('learn-first')
  const [revealedAnswers, setRevealedAnswers] = useState<Set<string>>(new Set())

  const module = modules.find((m) => m.id === moduleId)
  const moduleExercises = useMemo(() => getExercisesByModule(moduleId || ''), [moduleId])

  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">模块不存在</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">请检查 URL 或返回学习中心。</p>
        <button onClick={() => navigate('/learn')} className="btn-primary">返回学习中心</button>
      </div>
    )
  }

  const moduleNotes = notes.filter((n) => n.moduleId === moduleId)

  const handleAddNote = (paragraphIndex: number) => {
    if (!noteText.trim()) return
    addNote({ moduleId: moduleId!, paragraphIndex, text: noteText, timestamp: Date.now() })
    setNoteText('')
    setEditingNote(null)
  }

  const toggleReveal = (exerciseId: string) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev)
      if (next.has(exerciseId)) next.delete(exerciseId)
      else next.add(exerciseId)
      return next
    })
  }

  const typeBadgeColor = (type: string) => {
    switch (type) {
      case 'choice': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
      case 'fill': return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
      case 'short_answer': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const renderExercises = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          篇章练习 ({moduleExercises.length} 题)
        </h3>
        {moduleExercises.length > 0 && (
          <button
            onClick={() =>
              setRevealedAnswers((prev) => {
                const next = new Set(prev)
                if (next.size === moduleExercises.length) {
                  next.clear()
                } else {
                  moduleExercises.forEach((e) => next.add(e.id))
                }
                return next
              })
            }
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {revealedAnswers.size === moduleExercises.length ? '隐藏全部答案' : '显示全部答案'}
          </button>
        )}
      </div>

      {moduleExercises.length === 0 ? (
        <div className="card text-center text-gray-500 dark:text-gray-400 py-8">
          该模块暂无配套篇章练习
        </div>
      ) : (
        moduleExercises.map((ex) => (
          <div key={ex.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeBadgeColor(ex.type)}`}>
                {ex.type === 'choice' ? '选择' : ex.type === 'fill' ? '填空' : '简答'}
              </span>
              {ex.passageTitle && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ex.passageTitle}</span>
              )}
            </div>

            {ex.passage && (
              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-4">
                <div className="text-sm whitespace-pre-line leading-relaxed text-gray-700 dark:text-gray-300 font-serif">
                  {ex.passage}
                </div>
              </div>
            )}

            <div className="mb-3">
              <p className="font-medium text-gray-800 dark:text-gray-200">{ex.question}</p>
            </div>

            {ex.type === 'choice' && ex.options && (
              <div className="space-y-2 mb-3">
                {ex.options.map((opt, i) => {
                  const isCorrect = opt === ex.answer
                  const isRevealed = revealedAnswers.has(ex.id)
                  return (
                    <div
                      key={i}
                      className={`p-3 border rounded-lg text-sm ${
                        isRevealed && isCorrect
                          ? 'border-green-400 bg-green-50 dark:bg-green-900/20 dark:border-green-600'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <span className="font-mono text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                      <span>{opt}</span>
                      {isRevealed && isCorrect && (
                        <span className="ml-2 text-green-600 dark:text-green-400 font-medium">← 正确答案</span>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {(ex.type === 'fill' || ex.type === 'short_answer') && (
              <div className="mb-3">
                <div className="p-3 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-400 dark:text-gray-500 italic">
                  {revealedAnswers.has(ex.id) ? `答案：${ex.answer}` : '点击「显示答案」查看'}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleReveal(ex.id)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {revealedAnswers.has(ex.id) ? '隐藏答案' : '显示答案'}
              </button>
              {ex.explanation && revealedAnswers.has(ex.id) && (
                <details className="text-sm">
                  <summary className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                    查看解析
                  </summary>
                  <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded text-gray-700 dark:text-gray-300">
                    {ex.explanation}
                  </div>
                </details>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  )

  const renderContent = () => (
    <StepReveal teacherMode={teacherMode}>
      {module.content?.map((section, idx) => (
        <div key={idx} className="card relative">
          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
          <div className="prose dark:prose-invert max-w-none">{section.text}</div>
          {!teacherMode && (
            <button
              onClick={() => setEditingNote(idx)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              title="添加笔记"
            >
              <FiEdit2 />
            </button>
          )}
          {editingNote === idx && (
            <div className="mt-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} className="w-full p-2 border rounded mb-2" rows={3} placeholder="写下你的笔记..." />
              <div className="flex gap-2 justify-end">
                <button onClick={() => setEditingNote(null)} className="btn-secondary">取消</button>
                <button onClick={() => handleAddNote(idx)} className="btn-primary">保存</button>
              </div>
            </div>
          )}
          {moduleNotes.filter((n) => n.paragraphIndex === idx).map((note) => (
            <div key={note.timestamp} className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">{note.text}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{new Date(note.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ))}
    </StepReveal>
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{module.titleCn}</h1>
        <p className="text-gray-600 dark:text-gray-400">{module.title}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {moduleExercises.length > 0 && (
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">学习模式：</span>
              <button
                onClick={() => setPracticeMode('learn-first')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                  practiceMode === 'learn-first' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                先学后练
              </button>
              <button
                onClick={() => setPracticeMode('practice-first')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                  practiceMode === 'practice-first' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                先练后学
              </button>
            </div>
          )}

          {practiceMode === 'practice-first' && renderExercises()}
          {renderContent()}
          {practiceMode === 'learn-first' && renderExercises()}

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">模块进度</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">完成本模块所有内容学习与篇章练习后，可标记为完成。</p>
            <button onClick={() => markModuleComplete(moduleId!)} className="btn-primary flex items-center gap-2">
              <FiCheck />标记完成
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold mb-3">模块信息</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">单元</span><span>Unit {module.unit}</span></li>
              <li className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">预估时间</span><span>{module.estimatedTime}</span></li>
              <li className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">前置模块</span><span>{module.prerequisites?.length ? module.prerequisites.map(p => p.replace('-', '.')).join(', ') : '无'}</span></li>
              <li className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">篇章练习</span><span>{moduleExercises.length} 道</span></li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">技能标签</span>
                <div className="flex flex-wrap gap-1 justify-end">{module.tags?.map(tag => <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">{tag}</span>)}</div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-3">学习目标</h3>
            <ul className="space-y-2 text-sm">
              {module.learningObjectives?.map((obj, i) => <li key={i} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span><span>{obj}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

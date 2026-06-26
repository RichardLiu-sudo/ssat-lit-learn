import { useParams, useNavigate } from 'react-router-dom'
import { modules } from '../data/modules'
import { useStore } from '../store/useStore'
import StepReveal from '../components/StepReveal'
import { FiCheck, FiEdit2 } from 'react-icons/fi'
import { useState } from 'react'

export default function ModulePage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { markModuleComplete, addNote, notes, teacherMode } = useStore()
  const [editingNote, setEditingNote] = useState<number | null>(null)
  const [noteText, setNoteText] = useState('')

  const module = modules.find((m) => m.id === moduleId)
  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">模块不存在</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">请检查 URL 或返回学习中心。</p>
        <button
          onClick={() => navigate('/learn')}
          className="btn-primary"
        >
          返回学习中心
        </button>
      </div>
    )
  }

  const moduleNotes = notes.filter((n) => n.moduleId === moduleId)

  const handleAddNote = (paragraphIndex: number) => {
    if (!noteText.trim()) return
    addNote({
      moduleId: moduleId!,
      paragraphIndex,
      text: noteText,
      timestamp: Date.now(),
    })
    setNoteText('')
    setEditingNote(null)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{module.titleCn}</h1>
        <p className="text-gray-600 dark:text-gray-400">{module.title}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <StepReveal teacherMode={teacherMode}>
            {module.content?.map((section, idx) => (
              <div key={idx} className="card relative">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <div className="prose dark:prose-invert max-w-none">
                  {section.text}
                </div>
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
                    <textarea
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      className="w-full p-2 border rounded mb-2"
                      rows={3}
                      placeholder="写下你的笔记..."
                    />
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => setEditingNote(null)}
                        className="btn-secondary"
                      >
                        取消
                      </button>
                      <button
                        onClick={() => handleAddNote(idx)}
                        className="btn-primary"
                      >
                        保存
                      </button>
                    </div>
                  </div>
                )}
                {moduleNotes.filter(n => n.paragraphIndex === idx).map((note) => (
                  <div key={note.timestamp} className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{note.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(note.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </StepReveal>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">配套练习</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              该模块有 {module.exerciseCount} 道练习题，完成后可标记模块为完成。
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/practice')}
                className="btn-primary"
              >
                去做练习
              </button>
              <button
                onClick={() => markModuleComplete(moduleId!)}
                className="btn-secondary flex items-center gap-2"
              >
                <FiCheck />
                标记完成
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold mb-3">模块信息</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">单元</span>
                <span>Unit {module.unit}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">预估时间</span>
                <span>{module.estimatedTime}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">前置模块</span>
                <span>
                  {module.prerequisites?.length
                    ? module.prerequisites.map(p => p.replace('-', '.')).join(', ')
                    : '无'}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">技能标签</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {module.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3">学习目标</h3>
            <ul className="space-y-2 text-sm">
              {module.learningObjectives?.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

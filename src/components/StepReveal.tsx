import { useState } from 'react'
import { useStore } from '../store/useStore'

interface Props {
  children: React.ReactNode[]
  teacherMode?: boolean
}

export default function StepReveal({ children, teacherMode: forceMode }: Props) {
  const storeTeacherMode = useStore((s) => s.teacherMode)
  const teacherMode = forceMode ?? storeTeacherMode
  const [revealed, setRevealed] = useState(teacherMode ? 0 : children.length)
  const [showAll, setShowAll] = useState(!teacherMode)

  if (!teacherMode || showAll) {
    return <div className="space-y-4">{children}</div>
  }

  return (
    <div className="space-y-2">
      {children.map((child, i) => (
        <div
          key={i}
          className={`transition-all duration-300 ${i < revealed ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
        >
          {i < revealed && child}
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        {revealed < children.length && (
          <button
            onClick={() => setRevealed((r) => r + 1)}
            className="btn-primary"
          >
            显示下一节 ({revealed + 1}/{children.length})
          </button>
        )}
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn-secondary"
        >
          {showAll ? 'Step by Step' : 'Show All'}
        </button>
      </div>
    </div>
  )
}

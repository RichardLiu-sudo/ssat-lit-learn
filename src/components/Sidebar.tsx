import { Link, useLocation } from 'react-router-dom'
import { modules } from '../data/modules'
import { useStore } from '../store/useStore'

export default function Sidebar() {
  const location = useLocation()
  const { getModuleStatus } = useStore()

  const unit1 = modules.filter((m) => m.unit === 1)
  const unit2 = modules.filter((m) => m.unit === 2)

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto hidden lg:block">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Unit 1 · 小说阅读
        </h3>
        {unit1.map((m) => {
          const status = getModuleStatus(m.id, m.prerequisites || [])
          const isActive = location.pathname === `/learn/${m.id}`
          return (
            <Link
              key={m.id}
              to={`/learn/${m.id}`}
              className={`module-link mb-0.5 ${isActive ? 'active' : ''} ${status === 'locked' ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <StatusDot status={status} />
              <span className="flex-1 truncate">{m.titleCn}</span>
            </Link>
          )
        })}

        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 mt-6">
          Unit 2 · Poetry Reading
        </h3>
        {unit2.map((m) => {
          const status = getModuleStatus(m.id, m.prerequisites || [])
          const isActive = location.pathname === `/learn/${m.id}`
          return (
            <Link
              key={m.id}
              to={`/learn/${m.id}`}
              className={`module-link mb-0.5 ${isActive ? 'active' : ''} ${status === 'locked' ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <StatusDot status={status} />
              <span className="flex-1 truncate">{m.titleCn}</span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    completed: 'bg-green-500',
    'in-progress': 'bg-blue-500',
    available: 'bg-gray-300 dark:bg-gray-600',
    locked: 'bg-gray-200 dark:bg-gray-700',
  }
  return <span className={`w-2 h-2 rounded-full shrink-0 ${colors[status] || colors.locked}`} />
}

import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useStore } from '../store/useStore'

export default function Layout({ children }: { children: ReactNode }) {
  const teacherMode = useStore((s) => s.teacherMode)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {!teacherMode && <Sidebar />}
        <main className={`flex-1 ${teacherMode ? 'p-8 text-lg' : 'p-6'} overflow-auto`}>
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

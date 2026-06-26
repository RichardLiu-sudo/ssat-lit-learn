import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/learn', label: 'Learning Center' },
  { to: '/practice', label: 'Practice' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/mistakes', label: 'Mistake Log' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const location = useLocation()
  const { darkMode, toggleDarkMode, teacherMode, toggleTeacherMode } = useStore()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-lg text-blue-600 dark:text-blue-400">
            SSAT Lit
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  location.pathname === link.to
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTeacherMode}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              teacherMode
                ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            title={teacherMode ? 'Exit Presentation Mode' : 'Presentation Mode'}
          >
            <FiMonitor className="inline mr-1" />
            {teacherMode ? 'Presenting' : 'Present'}
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

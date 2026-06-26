import { create } from 'zustand'

export type ModuleStatus = 'locked' | 'available' | 'in-progress' | 'completed'

export interface ExerciseResult {
  exerciseId: string
  correct: boolean
  userAnswer: string
  timestamp: number
}

export interface Note {
  moduleId: string
  paragraphIndex: number
  text: string
  timestamp: number
}

interface AppState {
  darkMode: boolean
  teacherMode: boolean
  completedModules: Set<string>
  exerciseResults: Record<string, ExerciseResult>
  notes: Note[]
  mistakeIds: Set<string>

  toggleDarkMode: () => void
  toggleTeacherMode: () => void
  markModuleComplete: (id: string) => void
  addExerciseResult: (result: ExerciseResult) => void
  addNote: (note: Note) => void
  removeNote: (moduleId: string, paragraphIndex: number) => void
  clearMistakes: () => void
  getModuleStatus: (id: string, prerequisites: string[]) => ModuleStatus
  getModuleProgress: (id: string) => number
}

const loadSet = (key: string): Set<string> => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

const loadNotes = (): Note[] => {
  try {
    const raw = localStorage.getItem('ssat-notes')
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

const loadExerciseResults = (): Record<string, ExerciseResult> => {
  try {
    const raw = localStorage.getItem('ssat-exercises')
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

export const useStore = create<AppState>((set, get) => ({
  darkMode: localStorage.getItem('ssat-dark') === 'true',
  teacherMode: false,
  completedModules: loadSet('ssat-completed'),
  exerciseResults: loadExerciseResults(),
  notes: loadNotes(),
  mistakeIds: loadSet('ssat-mistakes'),

  toggleDarkMode: () => set((s) => {
    const next = !s.darkMode
    localStorage.setItem('ssat-dark', String(next))
    document.documentElement.classList.toggle('dark', next)
    return { darkMode: next }
  }),

  toggleTeacherMode: () => set((s) => ({ teacherMode: !s.teacherMode })),

  markModuleComplete: (id) => set((s) => {
    const next = new Set(s.completedModules)
    next.add(id)
    localStorage.setItem('ssat-completed', JSON.stringify([...next]))
    return { completedModules: next }
  }),

  addExerciseResult: (result) => set((s) => {
    const next = { ...s.exerciseResults, [result.exerciseId]: result }
    localStorage.setItem('ssat-exercises', JSON.stringify(next))
    const mistakes = new Set(s.mistakeIds)
    if (!result.correct) mistakes.add(result.exerciseId)
    localStorage.setItem('ssat-mistakes', JSON.stringify([...mistakes]))
    return { exerciseResults: next, mistakeIds: mistakes }
  }),

  addNote: (note) => set((s) => {
    const next = [...s.notes, note]
    localStorage.setItem('ssat-notes', JSON.stringify(next))
    return { notes: next }
  }),

  removeNote: (moduleId, paragraphIndex) => set((s) => {
    const next = s.notes.filter(n => !(n.moduleId === moduleId && n.paragraphIndex === paragraphIndex))
    localStorage.setItem('ssat-notes', JSON.stringify(next))
    return { notes: next }
  }),

  clearMistakes: () => set(() => {
    localStorage.removeItem('ssat-mistakes')
    return { mistakeIds: new Set() }
  }),

  getModuleStatus: (id, prerequisites) => {
    const { completedModules } = get()
    if (completedModules.has(id)) return 'completed'
    const allPrereqsDone = prerequisites.every(p => completedModules.has(p))
    return allPrereqsDone ? 'available' : 'locked'
  },

  getModuleProgress: (id) => {
    const { exerciseResults } = get()
    const moduleResults = Object.values(exerciseResults).filter(r => r.exerciseId.startsWith(id))
    if (moduleResults.length === 0) return 0
    return Math.round((moduleResults.filter(r => r.correct).length / moduleResults.length) * 100)
  },
}))

// init dark mode
if (localStorage.getItem('ssat-dark') === 'true') {
  document.documentElement.classList.add('dark')
}

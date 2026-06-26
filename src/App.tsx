import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Learn from './pages/Learn'
import ModulePage from './pages/ModulePage'
import Practice from './pages/Practice'
import Vocabulary from './pages/Vocabulary'
import Flashcards from './pages/Flashcards'
import Mistakes from './pages/Mistakes'
import Dashboard from './pages/Dashboard'
import Teacher from './pages/Teacher'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:moduleId" element={<ModulePage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/vocabulary/flashcard" element={<Flashcards />} />
        <Route path="/mistakes" element={<Mistakes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Layout>
  )
}

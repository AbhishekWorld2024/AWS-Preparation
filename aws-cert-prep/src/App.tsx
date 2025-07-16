import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import PracticeTestsPage from '@/pages/PracticeTestsPage'
import DocumentationPage from '@/pages/DocumentationPage'
import TestPage from '@/pages/TestPage'
import BookmarksPage from '@/pages/BookmarksPage'
import { BookmarkProvider } from '@/contexts/BookmarkContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/practice-tests" element={<PracticeTestsPage />} />
                <Route path="/test/:category" element={<TestPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  )
}

export default App

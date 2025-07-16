import { createContext, useContext, useState, ReactNode } from 'react'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: 'beginner' | 'advanced'
}

interface BookmarkContextType {
  bookmarkedQuestions: Question[]
  addBookmark: (question: Question) => void
  removeBookmark: (questionId: string) => void
  isBookmarked: (questionId: string) => boolean
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

export const useBookmarks = () => {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider')
  }
  return context
}

interface BookmarkProviderProps {
  children: ReactNode
}

export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Question[]>([])

  const addBookmark = (question: Question) => {
    setBookmarkedQuestions(prev => {
      if (prev.some(q => q.id === question.id)) {
        return prev
      }
      return [...prev, question]
    })
  }

  const removeBookmark = (questionId: string) => {
    setBookmarkedQuestions(prev => prev.filter(q => q.id !== questionId))
  }

  const isBookmarked = (questionId: string) => {
    return bookmarkedQuestions.some(q => q.id === questionId)
  }

  return (
    <BookmarkContext.Provider value={{
      bookmarkedQuestions,
      addBookmark,
      removeBookmark,
      isBookmarked
    }}>
      {children}
    </BookmarkContext.Provider>
  )
}

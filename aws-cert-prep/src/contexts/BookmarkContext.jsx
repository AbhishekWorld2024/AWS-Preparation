import { createContext, useContext, useState } from 'react'

const BookmarkContext = createContext(undefined)

export const useBookmarks = () => {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider')
  }
  return context
}

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState([])

  const addBookmark = (question) => {
    setBookmarkedQuestions(prev => {
      if (prev.some(q => q.id === question.id)) {
        return prev
      }
      return [...prev, question]
    })
  }

  const removeBookmark = (questionId) => {
    setBookmarkedQuestions(prev => prev.filter(q => q.id !== questionId))
  }

  const isBookmarked = (questionId) => {
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

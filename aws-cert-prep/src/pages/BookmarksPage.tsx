import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookmarkX, Search, Filter, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useBookmarks } from '@/contexts/BookmarkContext'

const BookmarksPage = () => {
  const { bookmarkedQuestions, removeBookmark } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'cloud-practitioner', 'solutions-architect']
  
  const filteredQuestions = bookmarkedQuestions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.explanation.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || question.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'cloud-practitioner':
        return 'Cloud Practitioner'
      case 'solutions-architect':
        return 'Solutions Architect'
      default:
        return category
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Bookmarked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Review your saved questions and continue studying
        </p>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <BookmarkX className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarked questions yet</h3>
                <p className="text-gray-600 mb-6">
                  Start taking practice tests and bookmark questions you want to review later
                </p>
                <Button asChild>
                  <Link to="/practice-tests">
                    Start Practice Tests
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search bookmarked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {getCategoryDisplayName(category)}
                </Button>
              ))}
            </div>

            <div className="text-center text-sm text-gray-600">
              Showing {filteredQuestions.length} of {bookmarkedQuestions.length} bookmarked questions
            </div>
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((question, index) => (
              <Card key={question.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">
                          {getCategoryDisplayName(question.category)}
                        </Badge>
                        <div className={`w-2 h-2 rounded-full ${getDifficultyColor(question.difficulty)}`} />
                        <span className="text-xs text-gray-500 capitalize">{question.difficulty}</span>
                      </div>
                      <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                      <CardDescription className="mt-2 text-base leading-relaxed">
                        {question.question}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeBookmark(question.id)}
                      className="ml-4 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <BookmarkX className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Answer Options:</h4>
                    {question.options.map((option, optionIndex) => (
                      <div 
                        key={optionIndex}
                        className={`p-2 rounded border ${
                          optionIndex === question.correctAnswer 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          <span>{option}</span>
                          {optionIndex === question.correctAnswer && (
                            <Badge variant="default" className="ml-auto">Correct Answer</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Explanation:</h4>
                    <p className="text-blue-700 text-sm">{question.explanation}</p>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/test/${question.category}`}>
                        Practice More Questions
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredQuestions.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BookmarksPage

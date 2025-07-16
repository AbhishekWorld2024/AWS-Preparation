import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Clock, Bookmark, BookmarkCheck, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { useBookmarks } from '@/contexts/BookmarkContext'
import { testQuestions } from '@/data/questions'

const TestPage = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [isTestCompleted, setIsTestCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const questions = testQuestions[category as keyof typeof testQuestions] || []
  const testDuration = category === 'cloud-practitioner' ? 90 * 60 : 130 * 60 // in seconds

  useEffect(() => {
    if (isTestStarted && timeRemaining > 0 && !isTestCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsTestCompleted(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isTestStarted, timeRemaining, isTestCompleted])

  const startTest = () => {
    setIsTestStarted(true)
    setTimeRemaining(testDuration)
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const handleBookmarkToggle = (question: any) => {
    if (isBookmarked(question.id)) {
      removeBookmark(question.id)
    } else {
      addBookmark(question)
    }
  }

  const submitTest = () => {
    setIsTestCompleted(true)
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  }

  const currentQuestion = questions[currentQuestionIndex]

  if (!questions.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Not Found</h2>
        <p className="text-gray-600 mb-6">The requested test category could not be found.</p>
        <Button onClick={() => navigate('/practice-tests')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Practice Tests
        </Button>
      </div>
    )
  }

  if (!isTestStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/practice-tests')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Practice Tests
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {category === 'cloud-practitioner' 
                ? 'AWS Certified Cloud Practitioner' 
                : 'AWS Certified Solutions Architect - Associate'}
            </CardTitle>
            <CardDescription>
              {category === 'cloud-practitioner' 
                ? 'Foundational level certification covering basic AWS cloud concepts'
                : 'Associate level certification for designing distributed systems on AWS'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{category === 'cloud-practitioner' ? '90 minutes' : '130 minutes'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-gray-500">#</span>
                <span>{questions.length} questions</span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 mb-2">Test Instructions:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Choose the best answer for each question</li>
                <li>• You can bookmark questions for review</li>
                <li>• Navigate between questions using the arrow buttons</li>
                <li>• Submit your test when you're ready to see results</li>
                <li>• The timer will start when you begin the test</li>
              </ul>
            </div>

            <Button onClick={startTest} className="w-full" size="lg">
              Start Practice Test
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const correctAnswers = questions.filter((_, index) => selectedAnswers[index] === questions[index].correctAnswer).length

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Test Results</CardTitle>
            <CardDescription>
              {category === 'cloud-practitioner' 
                ? 'AWS Certified Cloud Practitioner' 
                : 'AWS Certified Solutions Architect - Associate'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-900">{score}%</div>
              <div className="text-lg text-gray-600">
                {correctAnswers} out of {questions.length} questions correct
              </div>
              <Badge 
                variant={score >= 70 ? "default" : "destructive"}
                className="text-lg px-4 py-2"
              >
                {score >= 70 ? "PASS" : "FAIL"}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{questions.length - correctAnswers}</div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-600">{questions.length}</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => navigate('/practice-tests')} variant="outline" className="flex-1">
                Back to Tests
              </Button>
              <Button 
                onClick={() => {
                  setIsTestStarted(false)
                  setIsTestCompleted(false)
                  setShowResults(false)
                  setCurrentQuestionIndex(0)
                  setSelectedAnswers({})
                }} 
                className="flex-1"
              >
                Retake Test
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Question Review</h3>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index]
            const isCorrect = userAnswer === question.correctAnswer
            
            return (
              <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                    <Badge variant={isCorrect ? "default" : "destructive"}>
                      {isCorrect ? "Correct" : "Incorrect"}
                    </Badge>
                  </div>
                  <CardDescription>{question.question}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <div 
                        key={optionIndex}
                        className={`p-2 rounded border ${
                          optionIndex === question.correctAnswer 
                            ? 'bg-green-50 border-green-200' 
                            : optionIndex === userAnswer && !isCorrect
                            ? 'bg-red-50 border-red-200'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          <span>{option}</span>
                          {optionIndex === question.correctAnswer && (
                            <Badge variant="default" className="ml-auto">Correct</Badge>
                          )}
                          {optionIndex === userAnswer && !isCorrect && (
                            <Badge variant="destructive" className="ml-auto">Your Answer</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Explanation:</h4>
                    <p className="text-blue-700 text-sm">{question.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate('/practice-tests')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Exit Test
        </Button>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
          </div>
          <Badge variant="outline">
            {currentQuestionIndex + 1} of {questions.length}
          </Badge>
        </div>
      </div>

      <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-2" />

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl">Question {currentQuestionIndex + 1}</CardTitle>
              <CardDescription className="mt-2 text-base leading-relaxed">
                {currentQuestion.question}
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleBookmarkToggle(currentQuestion)}
              className="ml-4"
            >
              {isBookmarked(currentQuestion.id) ? (
                <BookmarkCheck className="w-5 h-5 text-orange-500" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={selectedAnswers[currentQuestionIndex]?.toString()}
            onValueChange={(value) => handleAnswerSelect(currentQuestionIndex, parseInt(value))}
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="flex space-x-2">
          {currentQuestionIndex === questions.length - 1 ? (
            <Button onClick={submitTest} className="bg-green-600 hover:bg-green-700">
              Submit Test
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestPage

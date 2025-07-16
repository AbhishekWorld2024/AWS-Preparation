import { Link } from 'react-router-dom'
import { Clock, FileText, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const PracticeTestsPage = () => {
  const testCategories = [
    {
      id: 'cloud-practitioner',
      title: 'AWS Certified Cloud Practitioner',
      level: 'Beginner',
      description: 'Foundational level certification covering basic AWS cloud concepts, services, security, architecture, pricing, and support.',
      duration: '90 minutes',
      questions: 200,
      passingScore: '70%',
      color: 'bg-green-500',
      topics: [
        'Cloud Concepts',
        'AWS Core Services',
        'Security and Compliance',
        'Billing and Pricing'
      ]
    },
    {
      id: 'solutions-architect',
      title: 'AWS Certified Solutions Architect - Associate',
      level: 'Advanced',
      description: 'Associate level certification for designing distributed systems and applications on the AWS platform.',
      duration: '130 minutes',
      questions: 200,
      passingScore: '72%',
      color: 'bg-blue-500',
      topics: [
        'Design Resilient Architectures',
        'High-Performing Architectures',
        'Secure Applications',
        'Cost-Optimized Architectures'
      ]
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          AWS Practice Tests
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose your certification path and start practicing with our comprehensive collection of 400 practice questions across 2 certification tracks
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {testCategories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`} />
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {category.level}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{category.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{category.questions} questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{category.passingScore} to pass</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Multiple choice</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link to={`/test/${category.id}`}>
                    Start Practice Test (5 Exams Available)
                  </Link>
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  5 practice exams with realistic simulation, timer and detailed explanations
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-orange-800 dark:text-orange-300">Study Tips</CardTitle>
        </CardHeader>
        <CardContent className="text-orange-700 dark:text-orange-300">
          <ul className="space-y-2 text-sm">
            <li>• Take practice tests multiple times to identify weak areas</li>
            <li>• Review explanations for both correct and incorrect answers</li>
            <li>• Use the bookmark feature to save challenging questions</li>
            <li>• Study the AWS documentation for services you're unfamiliar with</li>
            <li>• Practice under timed conditions to simulate the real exam</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default PracticeTestsPage

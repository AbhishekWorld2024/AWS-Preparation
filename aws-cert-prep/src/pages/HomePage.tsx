import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HomePage = () => {
  const features = [
    {
      icon: Clock,
      title: 'Timed Practice Tests',
      description: 'Simulate real exam conditions with built-in timers'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Documentation',
      description: 'Learn about all major AWS services with detailed explanations'
    },
    {
      icon: Star,
      title: 'Bookmark Questions',
      description: 'Save difficult questions for later review'
    },
    {
      icon: Award,
      title: 'Two Certification Tracks',
      description: 'Cloud Practitioner and Solutions Architect Associate'
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      level: 'Beginner Level',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
      color: 'bg-green-500',
      questions: '200 Questions (5 Exams)',
      duration: '40 Questions per Exam'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate',
      level: 'Advanced Level',
      description: 'Design and deploy scalable, highly available systems on AWS',
      color: 'bg-blue-500',
      questions: '200 Questions (5 Exams)',
      duration: '40 Questions per Exam'
    }
  ]

  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          AWS Exam Prep - Master AWS Certifications
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prepare for your AWS certification exams with 400 comprehensive practice questions, 
          detailed explanations, and extensive documentation covering all major AWS services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link to="/practice-tests">
              Start Practice Tests
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/documentation">
              Browse Documentation
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${cert.color}`} />
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </div>
              <CardDescription className="text-sm font-medium text-orange-600">
                {cert.level}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{cert.questions}</span>
                <span>{cert.duration}</span>
              </div>
              <Button asChild className="w-full">
                <Link to={`/test/${cert.title.includes('Cloud Practitioner') ? 'cloud-practitioner' : 'solutions-architect'}`}>
                  Start Practice Test
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default HomePage

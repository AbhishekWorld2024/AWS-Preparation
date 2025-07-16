import { useState } from 'react'
import { Search, ExternalLink, Book } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const awsServices = [
    {
      name: 'Amazon EC2',
      category: 'Compute',
      description: 'Scalable virtual servers in the cloud',
      keyFeatures: ['Virtual machines', 'Auto Scaling', 'Load balancing', 'Multiple instance types'],
      useCases: ['Web applications', 'Development environments', 'High-performance computing'],
      pricing: 'Pay-as-you-go per hour or second',
      color: 'bg-orange-500'
    },
    {
      name: 'Amazon S3',
      category: 'Storage',
      description: 'Object storage service with industry-leading scalability',
      keyFeatures: ['99.999999999% durability', 'Unlimited storage', 'Multiple storage classes', 'Lifecycle policies'],
      useCases: ['Data backup', 'Static website hosting', 'Data archiving', 'Content distribution'],
      pricing: 'Pay for storage used and requests made',
      color: 'bg-green-500'
    },
    {
      name: 'Amazon RDS',
      category: 'Database',
      description: 'Managed relational database service',
      keyFeatures: ['Automated backups', 'Multi-AZ deployments', 'Read replicas', 'Multiple engines'],
      useCases: ['Web applications', 'E-commerce', 'Mobile applications', 'Analytics'],
      pricing: 'Pay for instance hours and storage',
      color: 'bg-blue-500'
    },
    {
      name: 'AWS Lambda',
      category: 'Compute',
      description: 'Run code without thinking about servers',
      keyFeatures: ['Event-driven', 'Automatic scaling', 'Pay per request', 'Multiple runtimes'],
      useCases: ['API backends', 'Data processing', 'Real-time file processing', 'IoT backends'],
      pricing: 'Pay per request and compute time',
      color: 'bg-purple-500'
    },
    {
      name: 'Amazon VPC',
      category: 'Networking',
      description: 'Isolated cloud resources in a virtual network',
      keyFeatures: ['Private subnets', 'Security groups', 'Network ACLs', 'VPN connections'],
      useCases: ['Secure applications', 'Hybrid cloud', 'Multi-tier architectures', 'Compliance'],
      pricing: 'No additional charges for VPC usage',
      color: 'bg-indigo-500'
    },
    {
      name: 'Amazon CloudFront',
      category: 'Networking',
      description: 'Global content delivery network (CDN)',
      keyFeatures: ['Global edge locations', 'DDoS protection', 'SSL/TLS encryption', 'Real-time metrics'],
      useCases: ['Website acceleration', 'Video streaming', 'API acceleration', 'Software distribution'],
      pricing: 'Pay for data transfer and requests',
      color: 'bg-cyan-500'
    },
    {
      name: 'AWS IAM',
      category: 'Security',
      description: 'Identity and Access Management',
      keyFeatures: ['User management', 'Role-based access', 'Multi-factor authentication', 'Policy management'],
      useCases: ['User authentication', 'Resource access control', 'Compliance', 'Security auditing'],
      pricing: 'No additional charge',
      color: 'bg-red-500'
    },
    {
      name: 'Amazon CloudWatch',
      category: 'Monitoring',
      description: 'Monitoring and observability service',
      keyFeatures: ['Metrics collection', 'Log monitoring', 'Alarms', 'Dashboards'],
      useCases: ['Application monitoring', 'Infrastructure monitoring', 'Log analysis', 'Performance optimization'],
      pricing: 'Pay for metrics, logs, and API requests',
      color: 'bg-yellow-500'
    }
  ]

  const categories = ['All', 'Compute', 'Storage', 'Database', 'Networking', 'Security', 'Monitoring']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = awsServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.keyFeatures.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          AWS Services Documentation
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive guide to major AWS services with key features, use cases, and pricing information
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search AWS services..."
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
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${service.color}`} />
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.keyFeatures.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Common Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.useCases.map((useCase, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-1">Pricing:</h4>
                <p className="text-sm text-gray-600">{service.pricing}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Study Resources</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700">
          <ul className="space-y-2 text-sm">
            <li>• AWS Official Documentation: Comprehensive guides for each service</li>
            <li>• AWS Well-Architected Framework: Best practices for cloud architecture</li>
            <li>• AWS Whitepapers: In-depth technical and business guidance</li>
            <li>• AWS Training and Certification: Official learning paths and courses</li>
            <li>• AWS Architecture Center: Reference architectures and best practices</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default DocumentationPage

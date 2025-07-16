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
      keyFeatures: ['Virtual machines', 'Auto Scaling', 'Load balancing', 'Multiple instance types', 'Spot instances', 'Dedicated hosts'],
      useCases: ['Web applications', 'Development environments', 'High-performance computing', 'Enterprise applications'],
      pricing: 'Pay-as-you-go per hour or second',
      color: 'bg-orange-500'
    },
    {
      name: 'AWS Lambda',
      category: 'Compute',
      description: 'Run code without thinking about servers',
      keyFeatures: ['Event-driven', 'Automatic scaling', 'Pay per request', 'Multiple runtimes', '15-minute max execution', 'Concurrent executions'],
      useCases: ['API backends', 'Data processing', 'Real-time file processing', 'IoT backends'],
      pricing: 'Pay per request and compute time',
      color: 'bg-purple-500'
    },
    {
      name: 'Amazon ECS',
      category: 'Compute',
      description: 'Fully managed container orchestration service',
      keyFeatures: ['Docker support', 'Fargate integration', 'Service discovery', 'Auto scaling', 'Load balancer integration', 'Task definitions'],
      useCases: ['Microservices', 'Batch processing', 'Web applications', 'CI/CD pipelines'],
      pricing: 'Pay for underlying EC2 instances or Fargate usage',
      color: 'bg-orange-600'
    },
    {
      name: 'Amazon EKS',
      category: 'Compute',
      description: 'Managed Kubernetes service',
      keyFeatures: ['Kubernetes control plane', 'Auto scaling', 'Security patches', 'Multi-AZ deployment', 'Fargate support', 'Add-ons'],
      useCases: ['Container orchestration', 'Microservices', 'DevOps workflows', 'Hybrid deployments'],
      pricing: 'Pay for control plane and worker nodes',
      color: 'bg-orange-700'
    },
    {
      name: 'AWS Fargate',
      category: 'Compute',
      description: 'Serverless compute for containers',
      keyFeatures: ['No server management', 'Pay per use', 'Automatic scaling', 'Security isolation', 'ECS and EKS integration', 'Task-based pricing'],
      useCases: ['Serverless containers', 'Microservices', 'Batch jobs', 'Event-driven applications'],
      pricing: 'Pay for vCPU and memory resources used',
      color: 'bg-orange-800'
    },
    {
      name: 'AWS Batch',
      category: 'Compute',
      description: 'Fully managed batch processing service',
      keyFeatures: ['Job queues', 'Compute environments', 'Job definitions', 'Automatic scaling', 'Spot instance support', 'Multi-node jobs'],
      useCases: ['High-performance computing', 'Machine learning training', 'Financial modeling', 'Scientific computing'],
      pricing: 'Pay for underlying compute resources',
      color: 'bg-orange-900'
    },
    {
      name: 'AWS Elastic Beanstalk',
      category: 'Compute',
      description: 'Platform service for deploying web applications',
      keyFeatures: ['Multiple platforms', 'Auto scaling', 'Health monitoring', 'Version management', 'Configuration management', 'Blue/green deployments'],
      useCases: ['Web applications', 'API development', 'Microservices', 'Development environments'],
      pricing: 'No additional charges, pay for underlying resources',
      color: 'bg-orange-400'
    },

    {
      name: 'Amazon S3',
      category: 'Storage',
      description: 'Object storage service with industry-leading scalability',
      keyFeatures: ['99.999999999% durability', 'Unlimited storage', 'Multiple storage classes', 'Lifecycle policies', 'Versioning', 'Cross-region replication'],
      useCases: ['Data backup', 'Static website hosting', 'Data archiving', 'Content distribution'],
      pricing: 'Pay for storage used and requests made',
      color: 'bg-green-500'
    },
    {
      name: 'Amazon EBS',
      category: 'Storage',
      description: 'Block storage for EC2 instances',
      keyFeatures: ['High IOPS', 'Snapshots', 'Encryption', 'Multiple volume types', 'Elastic volumes', 'Multi-attach'],
      useCases: ['Database storage', 'File systems', 'Boot volumes', 'Enterprise applications'],
      pricing: 'Pay for provisioned storage and IOPS',
      color: 'bg-green-600'
    },
    {
      name: 'Amazon EFS',
      category: 'Storage',
      description: 'Fully managed file system for EC2',
      keyFeatures: ['POSIX-compliant', 'Automatic scaling', 'Multiple mount targets', 'Encryption', 'Performance modes', 'Throughput modes'],
      useCases: ['Shared storage', 'Content repositories', 'Data analytics', 'Web serving'],
      pricing: 'Pay for storage used',
      color: 'bg-green-700'
    },
    {
      name: 'Amazon FSx',
      category: 'Storage',
      description: 'Fully managed file systems',
      keyFeatures: ['Windows File Server', 'Lustre file system', 'High performance', 'Backup and restore', 'Multi-AZ deployment', 'SSD storage'],
      useCases: ['Windows workloads', 'High-performance computing', 'Machine learning', 'Media processing'],
      pricing: 'Pay for storage and throughput capacity',
      color: 'bg-green-800'
    },
    {
      name: 'AWS Storage Gateway',
      category: 'Storage',
      description: 'Hybrid cloud storage service',
      keyFeatures: ['File gateway', 'Volume gateway', 'Tape gateway', 'Local caching', 'Bandwidth throttling', 'CloudWatch monitoring'],
      useCases: ['Hybrid cloud storage', 'Backup to cloud', 'Archive to cloud', 'Disaster recovery'],
      pricing: 'Pay for storage used and data transfer',
      color: 'bg-green-900'
    },
    {
      name: 'AWS Backup',
      category: 'Storage',
      description: 'Centralized backup across AWS services',
      keyFeatures: ['Cross-service backup', 'Backup policies', 'Compliance reporting', 'Point-in-time recovery', 'Cross-region backup', 'Backup vault'],
      useCases: ['Data protection', 'Compliance', 'Disaster recovery', 'Centralized backup management'],
      pricing: 'Pay for backup storage and restore requests',
      color: 'bg-green-400'
    },

    {
      name: 'Amazon RDS',
      category: 'Database',
      description: 'Managed relational database service',
      keyFeatures: ['Automated backups', 'Multi-AZ deployments', 'Read replicas', 'Multiple engines', 'Performance insights', 'Automated patching'],
      useCases: ['Web applications', 'E-commerce', 'Mobile applications', 'Analytics'],
      pricing: 'Pay for instance hours and storage',
      color: 'bg-blue-500'
    },
    {
      name: 'Amazon DynamoDB',
      category: 'Database',
      description: 'Fully managed NoSQL database',
      keyFeatures: ['Single-digit millisecond latency', 'Auto scaling', 'Global tables', 'Point-in-time recovery', 'DynamoDB Accelerator', 'Streams'],
      useCases: ['Mobile applications', 'Gaming', 'IoT', 'Real-time analytics'],
      pricing: 'Pay for read/write capacity and storage',
      color: 'bg-blue-600'
    },
    {
      name: 'Amazon Aurora',
      category: 'Database',
      description: 'MySQL and PostgreSQL compatible relational database',
      keyFeatures: ['5x faster than MySQL', '3x faster than PostgreSQL', 'Auto scaling storage', 'Read replicas', 'Global database', 'Serverless'],
      useCases: ['Enterprise applications', 'SaaS applications', 'Web applications', 'Gaming'],
      pricing: 'Pay for compute and storage separately',
      color: 'bg-blue-700'
    },
    {
      name: 'Amazon Redshift',
      category: 'Database',
      description: 'Fully managed data warehouse',
      keyFeatures: ['Columnar storage', 'Massively parallel processing', 'Compression', 'Result caching', 'Spectrum for S3', 'Concurrency scaling'],
      useCases: ['Business intelligence', 'Data analytics', 'Reporting', 'Data mining'],
      pricing: 'Pay for compute nodes and storage',
      color: 'bg-blue-800'
    },
    {
      name: 'Amazon ElastiCache',
      category: 'Database',
      description: 'In-memory caching service',
      keyFeatures: ['Redis and Memcached', 'Sub-millisecond latency', 'Auto scaling', 'Backup and restore', 'Multi-AZ deployment', 'Security groups'],
      useCases: ['Session storage', 'Real-time analytics', 'Gaming leaderboards', 'Chat applications'],
      pricing: 'Pay for cache node hours',
      color: 'bg-blue-900'
    },
    {
      name: 'Amazon DocumentDB',
      category: 'Database',
      description: 'MongoDB-compatible document database',
      keyFeatures: ['MongoDB compatibility', 'Automatic scaling', 'Point-in-time recovery', 'Continuous backup', 'Read replicas', 'VPC isolation'],
      useCases: ['Content management', 'Catalogs', 'User profiles', 'Real-time analytics'],
      pricing: 'Pay for compute and storage',
      color: 'bg-blue-400'
    },
    {
      name: 'Amazon Neptune',
      category: 'Database',
      description: 'Fully managed graph database',
      keyFeatures: ['Property graph and RDF', 'SPARQL and Gremlin', 'High availability', 'Read replicas', 'Point-in-time recovery', 'Encryption'],
      useCases: ['Social networking', 'Recommendation engines', 'Fraud detection', 'Knowledge graphs'],
      pricing: 'Pay for compute and storage',
      color: 'bg-blue-300'
    },

    {
      name: 'Amazon VPC',
      category: 'Networking',
      description: 'Isolated cloud resources in a virtual network',
      keyFeatures: ['Private subnets', 'Security groups', 'Network ACLs', 'VPN connections', 'Internet gateways', 'NAT gateways'],
      useCases: ['Secure applications', 'Hybrid cloud', 'Multi-tier architectures', 'Compliance'],
      pricing: 'No additional charges for VPC usage',
      color: 'bg-indigo-500'
    },
    {
      name: 'Amazon CloudFront',
      category: 'Networking',
      description: 'Global content delivery network (CDN)',
      keyFeatures: ['Global edge locations', 'DDoS protection', 'SSL/TLS encryption', 'Real-time metrics', 'Lambda@Edge', 'Origin shield'],
      useCases: ['Website acceleration', 'Video streaming', 'API acceleration', 'Software distribution'],
      pricing: 'Pay for data transfer and requests',
      color: 'bg-cyan-500'
    },
    {
      name: 'Amazon Route 53',
      category: 'Networking',
      description: 'Scalable domain name system (DNS)',
      keyFeatures: ['Domain registration', 'DNS routing', 'Health checks', 'Traffic policies', 'Resolver', 'DNSSEC'],
      useCases: ['Domain management', 'Traffic routing', 'Health monitoring', 'Hybrid DNS'],
      pricing: 'Pay for hosted zones and queries',
      color: 'bg-cyan-600'
    },
    {
      name: 'AWS Direct Connect',
      category: 'Networking',
      description: 'Dedicated network connection to AWS',
      keyFeatures: ['Dedicated bandwidth', 'Virtual interfaces', 'BGP routing', 'VLAN support', 'Link aggregation', 'Hosted connections'],
      useCases: ['Hybrid cloud', 'Large data transfers', 'Consistent network performance', 'Compliance'],
      pricing: 'Pay for port hours and data transfer',
      color: 'bg-cyan-700'
    },
    {
      name: 'AWS VPN',
      category: 'Networking',
      description: 'Secure connection between networks',
      keyFeatures: ['Site-to-site VPN', 'Client VPN', 'Transit gateway', 'BGP routing', 'Redundant tunnels', 'Certificate authentication'],
      useCases: ['Remote access', 'Hybrid connectivity', 'Branch office connectivity', 'Secure communications'],
      pricing: 'Pay for VPN connection hours and data transfer',
      color: 'bg-cyan-800'
    },
    {
      name: 'Elastic Load Balancing',
      category: 'Networking',
      description: 'Distribute incoming traffic across targets',
      keyFeatures: ['Application Load Balancer', 'Network Load Balancer', 'Gateway Load Balancer', 'Health checks', 'SSL termination', 'Sticky sessions'],
      useCases: ['High availability', 'Auto scaling', 'Microservices', 'Blue/green deployments'],
      pricing: 'Pay for load balancer hours and data processed',
      color: 'bg-cyan-900'
    },
    {
      name: 'Amazon API Gateway',
      category: 'Networking',
      description: 'Fully managed API service',
      keyFeatures: ['RESTful APIs', 'WebSocket APIs', 'Authentication', 'Rate limiting', 'Caching', 'Request/response transformation'],
      useCases: ['Serverless APIs', 'Microservices', 'Mobile backends', 'API monetization'],
      pricing: 'Pay per API call and data transfer',
      color: 'bg-cyan-400'
    },

    {
      name: 'AWS IAM',
      category: 'Security',
      description: 'Identity and Access Management',
      keyFeatures: ['User management', 'Role-based access', 'Multi-factor authentication', 'Policy management', 'Identity federation', 'Access analyzer'],
      useCases: ['User authentication', 'Resource access control', 'Compliance', 'Security auditing'],
      pricing: 'No additional charge',
      color: 'bg-red-500'
    },
    {
      name: 'Amazon Cognito',
      category: 'Security',
      description: 'User identity and data synchronization',
      keyFeatures: ['User pools', 'Identity pools', 'Social identity providers', 'SAML federation', 'Multi-factor authentication', 'User migration'],
      useCases: ['Mobile applications', 'Web applications', 'User authentication', 'Social login'],
      pricing: 'Pay for monthly active users',
      color: 'bg-red-600'
    },
    {
      name: 'AWS Secrets Manager',
      category: 'Security',
      description: 'Manage secrets and credentials',
      keyFeatures: ['Automatic rotation', 'Fine-grained permissions', 'Audit trail', 'Cross-region replication', 'Lambda integration', 'Database credentials'],
      useCases: ['Database passwords', 'API keys', 'OAuth tokens', 'Application secrets'],
      pricing: 'Pay per secret and API calls',
      color: 'bg-red-700'
    },
    {
      name: 'AWS KMS',
      category: 'Security',
      description: 'Key Management Service',
      keyFeatures: ['Customer managed keys', 'AWS managed keys', 'Key rotation', 'Cross-region replication', 'CloudTrail integration', 'Hardware security modules'],
      useCases: ['Data encryption', 'Digital signing', 'Compliance', 'Key management'],
      pricing: 'Pay per key and API requests',
      color: 'bg-red-800'
    },
    {
      name: 'AWS WAF',
      category: 'Security',
      description: 'Web Application Firewall',
      keyFeatures: ['SQL injection protection', 'Cross-site scripting protection', 'Rate limiting', 'IP whitelisting', 'Geo-blocking', 'Managed rules'],
      useCases: ['Web application protection', 'API protection', 'DDoS mitigation', 'Compliance'],
      pricing: 'Pay for web ACLs and requests',
      color: 'bg-red-900'
    },
    {
      name: 'AWS Shield',
      category: 'Security',
      description: 'DDoS protection service',
      keyFeatures: ['Always-on detection', 'Automatic mitigation', 'Advanced protection', '24/7 DRT support', 'Cost protection', 'Real-time metrics'],
      useCases: ['DDoS protection', 'Application availability', 'Infrastructure protection', 'Gaming applications'],
      pricing: 'Standard is free, Advanced has monthly fee',
      color: 'bg-red-400'
    },
    {
      name: 'Amazon GuardDuty',
      category: 'Security',
      description: 'Threat detection service',
      keyFeatures: ['Machine learning', 'Threat intelligence', 'Anomaly detection', 'DNS logs analysis', 'VPC Flow Logs', 'CloudTrail events'],
      useCases: ['Security monitoring', 'Threat detection', 'Compliance', 'Incident response'],
      pricing: 'Pay for events analyzed',
      color: 'bg-red-300'
    },

    {
      name: 'Amazon CloudWatch',
      category: 'Monitoring',
      description: 'Monitoring and observability service',
      keyFeatures: ['Metrics collection', 'Log monitoring', 'Alarms', 'Dashboards', 'Events', 'Application insights'],
      useCases: ['Application monitoring', 'Infrastructure monitoring', 'Log analysis', 'Performance optimization'],
      pricing: 'Pay for metrics, logs, and API requests',
      color: 'bg-yellow-500'
    },
    {
      name: 'AWS X-Ray',
      category: 'Monitoring',
      description: 'Application performance monitoring',
      keyFeatures: ['Request tracing', 'Service map', 'Performance insights', 'Error analysis', 'Annotations', 'Sampling rules'],
      useCases: ['Microservices debugging', 'Performance optimization', 'Root cause analysis', 'Distributed tracing'],
      pricing: 'Pay for traces recorded and retrieved',
      color: 'bg-yellow-600'
    },
    {
      name: 'AWS CloudTrail',
      category: 'Monitoring',
      description: 'API logging and monitoring',
      keyFeatures: ['API call logging', 'Event history', 'Data events', 'Insights', 'Multi-region trails', 'Log file integrity'],
      useCases: ['Security auditing', 'Compliance', 'Operational troubleshooting', 'Risk auditing'],
      pricing: 'Pay for data events and insights',
      color: 'bg-yellow-700'
    },
    {
      name: 'AWS Config',
      category: 'Monitoring',
      description: 'Configuration monitoring and compliance',
      keyFeatures: ['Configuration recording', 'Compliance rules', 'Change tracking', 'Remediation', 'Aggregator', 'Conformance packs'],
      useCases: ['Compliance monitoring', 'Security analysis', 'Change management', 'Troubleshooting'],
      pricing: 'Pay for configuration items and rules',
      color: 'bg-yellow-800'
    },
    {
      name: 'AWS Systems Manager',
      category: 'Monitoring',
      description: 'Operational insights and management',
      keyFeatures: ['Parameter Store', 'Session Manager', 'Patch Manager', 'Automation', 'OpsCenter', 'Inventory'],
      useCases: ['Infrastructure management', 'Patch management', 'Configuration management', 'Operational tasks'],
      pricing: 'Pay for advanced features and API calls',
      color: 'bg-yellow-900'
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          AWS Services Documentation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Comprehensive guide to major AWS services with key features, use cases, and pricing information
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
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
                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {service.keyFeatures.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Common Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.useCases.map((useCase, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Pricing:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.pricing}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Book className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No services found</h3>
          <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-300">Study Resources</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700 dark:text-blue-300">
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

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: 'beginner' | 'advanced'
}

export const testQuestions = {
  'cloud-practitioner': [
    {
      id: 'cp-1',
      question: 'What is the AWS shared responsibility model?',
      options: [
        'AWS is responsible for everything',
        'Customer is responsible for everything',
        'AWS is responsible for security OF the cloud, customer is responsible for security IN the cloud',
        'Both AWS and customer share equal responsibility for all aspects'
      ],
      correctAnswer: 2,
      explanation: 'The AWS shared responsibility model divides security responsibilities between AWS and the customer. AWS is responsible for "Security of the Cloud" (physical infrastructure, hardware, software, networking, and facilities), while customers are responsible for "Security in the Cloud" (customer data, platform, applications, identity and access management, operating system, network and firewall configuration).',
      category: 'cloud-practitioner',
      difficulty: 'beginner' as const
    },
    {
      id: 'cp-2',
      question: 'Which AWS service provides object storage?',
      options: [
        'Amazon EBS',
        'Amazon S3',
        'Amazon EFS',
        'Amazon FSx'
      ],
      correctAnswer: 1,
      explanation: 'Amazon S3 (Simple Storage Service) is AWS\'s object storage service. It provides industry-leading scalability, data availability, security, and performance. EBS provides block storage, EFS provides file storage, and FSx provides fully managed file systems.',
      category: 'cloud-practitioner',
      difficulty: 'beginner' as const
    },
    {
      id: 'cp-3',
      question: 'What are the benefits of cloud computing? (Select all that apply)',
      options: [
        'Trade capital expense for variable expense',
        'Benefit from massive economies of scale',
        'Stop guessing about capacity',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'All of these are key benefits of cloud computing: 1) Trade capital expense for variable expense - pay only for what you use, 2) Benefit from massive economies of scale - AWS can achieve higher economies of scale, 3) Stop guessing about capacity - scale up or down as needed.',
      category: 'cloud-practitioner',
      difficulty: 'beginner' as const
    },
    {
      id: 'cp-4',
      question: 'Which AWS service is used for content delivery and caching?',
      options: [
        'Amazon Route 53',
        'Amazon CloudFront',
        'Amazon VPC',
        'Amazon Direct Connect'
      ],
      correctAnswer: 1,
      explanation: 'Amazon CloudFront is AWS\'s content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.',
      category: 'cloud-practitioner',
      difficulty: 'beginner' as const
    },
    {
      id: 'cp-5',
      question: 'What is the AWS Free Tier?',
      options: [
        'A paid tier with discounted pricing',
        'A tier that provides limited free usage of AWS services',
        'A tier only for students',
        'A tier that requires a credit card but charges nothing'
      ],
      correctAnswer: 1,
      explanation: 'The AWS Free Tier provides customers the ability to explore and try out AWS services free of charge up to specified limits for each service. It includes three types of offers: Always Free, 12 Months Free, and Trials.',
      category: 'cloud-practitioner',
      difficulty: 'beginner' as const
    }
  ],
  'solutions-architect': [
    {
      id: 'sa-1',
      question: 'A company needs to store frequently accessed data with high durability and availability. The data size is expected to grow to several petabytes. Which storage solution would be most appropriate?',
      options: [
        'Amazon EBS with Provisioned IOPS',
        'Amazon S3 Standard',
        'Amazon EFS',
        'Amazon Glacier'
      ],
      correctAnswer: 1,
      explanation: 'Amazon S3 Standard is designed for frequently accessed data and provides 99.999999999% (11 9\'s) durability and 99.99% availability. It can scale to petabytes and beyond. EBS is for block storage attached to EC2, EFS is for file storage, and Glacier is for archival storage.',
      category: 'solutions-architect',
      difficulty: 'advanced' as const
    },
    {
      id: 'sa-2',
      question: 'An application requires a database that can handle millions of requests per second with microsecond latency. Which AWS service would be most suitable?',
      options: [
        'Amazon RDS',
        'Amazon DynamoDB',
        'Amazon Redshift',
        'Amazon Aurora'
      ],
      correctAnswer: 1,
      explanation: 'Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It can handle millions of requests per second and provides single-digit millisecond latency. For microsecond latency, DynamoDB Accelerator (DAX) can be used.',
      category: 'solutions-architect',
      difficulty: 'advanced' as const
    },
    {
      id: 'sa-3',
      question: 'A web application experiences variable traffic with occasional spikes. The application should automatically scale based on demand while minimizing costs. Which combination of services would be most appropriate?',
      options: [
        'EC2 instances with manual scaling',
        'Auto Scaling Groups with Application Load Balancer',
        'Lambda functions with API Gateway',
        'ECS with Fargate'
      ],
      correctAnswer: 1,
      explanation: 'Auto Scaling Groups automatically adjust the number of EC2 instances based on demand, while Application Load Balancer distributes traffic across healthy instances. This combination provides automatic scaling and high availability while optimizing costs.',
      category: 'solutions-architect',
      difficulty: 'advanced' as const
    },
    {
      id: 'sa-4',
      question: 'A company wants to implement a disaster recovery solution with an RTO of 1 hour and RPO of 15 minutes. Which DR strategy would be most appropriate?',
      options: [
        'Backup and Restore',
        'Pilot Light',
        'Warm Standby',
        'Multi-Site Active/Active'
      ],
      correctAnswer: 2,
      explanation: 'Warm Standby maintains a scaled-down version of a fully functional environment always running in the cloud. This strategy can meet the RTO of 1 hour and RPO of 15 minutes requirements. Pilot Light would have longer RTO, while Multi-Site would be more expensive than necessary.',
      category: 'solutions-architect',
      difficulty: 'advanced' as const
    },
    {
      id: 'sa-5',
      question: 'An application needs to process large amounts of streaming data in real-time and store the results for analytics. Which combination of services would be most suitable?',
      options: [
        'Amazon SQS + Amazon EC2 + Amazon RDS',
        'Amazon Kinesis + Amazon Lambda + Amazon S3',
        'Amazon SNS + Amazon ECS + Amazon DynamoDB',
        'Amazon MQ + Amazon Batch + Amazon Redshift'
      ],
      correctAnswer: 1,
      explanation: 'Amazon Kinesis can ingest and process streaming data in real-time, Lambda can process the data as it arrives, and S3 can store the results for analytics. This combination provides a serverless, scalable solution for real-time data processing.',
      category: 'solutions-architect',
      difficulty: 'advanced' as const
    }
  ]
}

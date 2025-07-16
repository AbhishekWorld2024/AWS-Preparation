export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: 'beginner' | 'advanced'
}

export const testQuestions: Record<string, Record<string, Question[]>> = {
  'cloud-practitioner': {
    'exam-1': [
      {
        id: 'cp-1-1',
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
        id: 'cp-1-2',
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
        id: 'cp-1-3',
        question: 'What are the benefits of cloud computing?',
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
        id: 'cp-1-4',
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
        id: 'cp-1-5',
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
    'exam-2': [
      {
        id: 'cp-2-1',
        question: 'Which AWS service provides managed relational databases?',
        options: [
          'Amazon DynamoDB',
          'Amazon RDS',
          'Amazon S3',
          'Amazon EC2'
        ],
        correctAnswer: 1,
        explanation: 'Amazon RDS (Relational Database Service) is a managed service that makes it easy to set up, operate, and scale relational databases in the cloud. It supports multiple database engines including MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB.',
        category: 'cloud-practitioner',
        difficulty: 'beginner' as const
      },
      {
        id: 'cp-2-2',
        question: 'What is Amazon EC2?',
        options: [
          'A storage service',
          'A virtual server service',
          'A database service',
          'A networking service'
        ],
        correctAnswer: 1,
        explanation: 'Amazon EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud. It allows you to launch virtual machines with various configurations of CPU, memory, storage, and networking capacity.',
        category: 'cloud-practitioner',
        difficulty: 'beginner' as const
      },
      {
        id: 'cp-2-3',
        question: 'Which AWS service is used for DNS management?',
        options: [
          'Amazon CloudFront',
          'Amazon Route 53',
          'Amazon VPC',
          'Amazon ELB'
        ],
        correctAnswer: 1,
        explanation: 'Amazon Route 53 is a scalable Domain Name System (DNS) web service. It effectively connects user requests to infrastructure running in AWS and can also be used to route users to infrastructure outside of AWS.',
        category: 'cloud-practitioner',
        difficulty: 'beginner' as const
      },
      {
        id: 'cp-2-4',
        question: 'What is the purpose of AWS IAM?',
        options: [
          'To manage compute resources',
          'To manage user access and permissions',
          'To manage storage',
          'To manage networking'
        ],
        correctAnswer: 1,
        explanation: 'AWS IAM (Identity and Access Management) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.',
        category: 'cloud-practitioner',
        difficulty: 'beginner' as const
      },
      {
        id: 'cp-2-5',
        question: 'Which AWS service provides serverless computing?',
        options: [
          'Amazon EC2',
          'Amazon Lambda',
          'Amazon ECS',
          'Amazon EKS'
        ],
        correctAnswer: 1,
        explanation: 'AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running.',
        category: 'cloud-practitioner',
        difficulty: 'beginner' as const
      }
    ]
  },
  'solutions-architect': {
    'exam-1': [
      {
        id: 'sa-1-1',
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
        id: 'sa-1-2',
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
        id: 'sa-1-3',
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
        id: 'sa-1-4',
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
        id: 'sa-1-5',
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
    ],
    'exam-2': [
      {
        id: 'sa-2-1',
        question: 'A company needs to migrate a large on-premises database to AWS with minimal downtime. Which service would be most appropriate?',
        options: [
          'AWS DataSync',
          'AWS Database Migration Service (DMS)',
          'AWS Storage Gateway',
          'AWS Direct Connect'
        ],
        correctAnswer: 1,
        explanation: 'AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.',
        category: 'solutions-architect',
        difficulty: 'advanced' as const
      },
      {
        id: 'sa-2-2',
        question: 'An application needs to process messages asynchronously with the ability to handle message failures and retries. Which AWS service combination would be most suitable?',
        options: [
          'Amazon SQS with Dead Letter Queues',
          'Amazon SNS with Lambda',
          'Amazon Kinesis with Firehose',
          'Amazon EventBridge with Step Functions'
        ],
        correctAnswer: 0,
        explanation: 'Amazon SQS (Simple Queue Service) with Dead Letter Queues provides reliable message processing with built-in retry mechanisms. Failed messages are automatically moved to a dead letter queue for analysis and reprocessing.',
        category: 'solutions-architect',
        difficulty: 'advanced' as const
      },
      {
        id: 'sa-2-3',
        question: 'A company needs to implement cross-region replication for disaster recovery. Which combination would provide the most cost-effective solution?',
        options: [
          'Amazon S3 Cross-Region Replication with Glacier storage class',
          'Amazon EBS snapshots copied to another region',
          'Amazon RDS Multi-AZ with cross-region read replicas',
          'AWS DataSync with Amazon S3 Intelligent-Tiering'
        ],
        correctAnswer: 0,
        explanation: 'Amazon S3 Cross-Region Replication with Glacier storage class provides automated replication to another region with cost-effective long-term storage. This is ideal for disaster recovery scenarios where data needs to be preserved but may not be accessed frequently.',
        category: 'solutions-architect',
        difficulty: 'advanced' as const
      },
      {
        id: 'sa-2-4',
        question: 'An application requires a caching layer that can handle complex data structures and provide sub-millisecond latency. Which service would be most appropriate?',
        options: [
          'Amazon CloudFront',
          'Amazon ElastiCache for Redis',
          'Amazon DynamoDB Accelerator (DAX)',
          'Amazon S3 Transfer Acceleration'
        ],
        correctAnswer: 1,
        explanation: 'Amazon ElastiCache for Redis provides in-memory caching with support for complex data structures like lists, sets, and sorted sets. It offers sub-millisecond latency and is ideal for applications requiring fast access to structured data.',
        category: 'solutions-architect',
        difficulty: 'advanced' as const
      },
      {
        id: 'sa-2-5',
        question: 'A microservices architecture needs service discovery and load balancing. Which AWS service combination would be most suitable?',
        options: [
          'Amazon ECS with Application Load Balancer',
          'AWS App Mesh with Amazon EKS',
          'Amazon API Gateway with AWS Lambda',
          'AWS Cloud Map with Amazon ECS'
        ],
        correctAnswer: 3,
        explanation: 'AWS Cloud Map provides service discovery for cloud resources, allowing services to register and discover each other. Combined with Amazon ECS, it provides a robust solution for microservices architecture with automatic service registration and health checking.',
        category: 'solutions-architect',
        difficulty: 'advanced' as const
      }
    ]
  },
  'aws-developer': {
    'exam-1': [
      {
        id: 'dev-1-1',
        question: 'Which AWS service is best suited for building serverless APIs?',
        options: [
          'Amazon EC2 with Express.js',
          'AWS Lambda with API Gateway',
          'Amazon ECS with Application Load Balancer',
          'AWS Elastic Beanstalk'
        ],
        correctAnswer: 1,
        explanation: 'AWS Lambda with API Gateway provides a fully serverless solution for building APIs. Lambda handles the compute logic while API Gateway manages the HTTP endpoints, authentication, and request/response transformation.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-1-2',
        question: 'What is the maximum execution time for an AWS Lambda function?',
        options: [
          '5 minutes',
          '10 minutes',
          '15 minutes',
          '30 minutes'
        ],
        correctAnswer: 2,
        explanation: 'AWS Lambda functions have a maximum execution time of 15 minutes. This timeout can be configured from 1 second to 15 minutes (900 seconds) depending on your application needs.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-1-3',
        question: 'Which DynamoDB operation is most efficient for retrieving multiple items?',
        options: [
          'Multiple GetItem operations',
          'BatchGetItem operation',
          'Query operation',
          'Scan operation'
        ],
        correctAnswer: 1,
        explanation: 'BatchGetItem operation allows you to retrieve multiple items from one or more tables in a single request, making it more efficient than multiple GetItem operations. It can retrieve up to 100 items or 16 MB of data.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-1-4',
        question: 'How can you handle errors in AWS Lambda functions?',
        options: [
          'Use try-catch blocks and return error responses',
          'Configure dead letter queues',
          'Set up CloudWatch alarms',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'Error handling in Lambda can be implemented through multiple approaches: try-catch blocks for application-level errors, dead letter queues for failed invocations, and CloudWatch alarms for monitoring and alerting on errors.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-1-5',
        question: 'Which AWS service provides managed message queues?',
        options: [
          'Amazon SNS',
          'Amazon SQS',
          'Amazon Kinesis',
          'Amazon EventBridge'
        ],
        correctAnswer: 1,
        explanation: 'Amazon SQS (Simple Queue Service) provides fully managed message queues that enable you to decouple and scale microservices, distributed systems, and serverless applications.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      }
    ],
    'exam-2': [
      {
        id: 'dev-2-1',
        question: 'What is the best practice for storing sensitive configuration data in AWS?',
        options: [
          'Environment variables in Lambda',
          'AWS Systems Manager Parameter Store',
          'Hard-coded in application code',
          'Amazon S3 bucket'
        ],
        correctAnswer: 1,
        explanation: 'AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data and secrets. It integrates with AWS KMS for encryption and provides fine-grained access control.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-2-2',
        question: 'Which AWS service is used for application deployment and version management?',
        options: [
          'AWS CodeDeploy',
          'AWS CodeCommit',
          'AWS CodeBuild',
          'AWS CodePipeline'
        ],
        correctAnswer: 0,
        explanation: 'AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises servers, or AWS Lambda functions. It handles version management and rollback capabilities.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-2-3',
        question: 'How can you implement caching in a serverless application?',
        options: [
          'Amazon ElastiCache',
          'DynamoDB with TTL',
          'API Gateway caching',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'Serverless applications can implement caching through multiple approaches: ElastiCache for in-memory caching, DynamoDB with TTL for database-level caching, and API Gateway caching for HTTP response caching.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-2-4',
        question: 'What is the purpose of AWS X-Ray?',
        options: [
          'Application monitoring and debugging',
          'Code compilation',
          'Database management',
          'File storage'
        ],
        correctAnswer: 0,
        explanation: 'AWS X-Ray is a service that helps developers analyze and debug distributed applications. It provides request tracing, performance insights, and helps identify bottlenecks in microservices architectures.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      },
      {
        id: 'dev-2-5',
        question: 'Which authentication method is recommended for API Gateway?',
        options: [
          'API Keys only',
          'AWS IAM roles and policies',
          'Custom authorizers with Lambda',
          'Both B and C'
        ],
        correctAnswer: 3,
        explanation: 'API Gateway supports multiple authentication methods: AWS IAM for service-to-service authentication and custom authorizers with Lambda for flexible authentication logic. The choice depends on your specific use case.',
        category: 'aws-developer',
        difficulty: 'advanced' as const
      }
    ]
  }
}

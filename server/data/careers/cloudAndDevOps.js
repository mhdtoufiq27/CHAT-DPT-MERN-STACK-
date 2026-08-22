/**
 * Cloud & DevOps Career Roles (6 Roles)
 */

const cloudAndDevOpsRoles = [
  {
    id: "cloud-engineer",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "Cloud Engineer",
    slug: "cloud-engineer",
    badge: "High Demand",
    shortDescription: "Architects, deploys, monitors, and optimizes scalable infrastructure on AWS, Azure, or GCP.",
    description: "A Cloud Engineer plans, configures, deploys, and maintains cloud-native infrastructure, virtual machines, networking, security groups, and managed cloud services across leading providers (AWS, Azure, Google Cloud).",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "CS/IT"],
    salaryRange: { entry: "₹5 - ₹9.5 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹45+ LPA" },
    responsibilities: [
      "Provision and configure compute instances, serverless functions, VPC networks, and cloud storage.",
      "Implement identity management, role-based access control (IAM), and security group firewalls.",
      "Write Infrastructure as Code (IaC) using Terraform or AWS CloudFormation.",
      "Configure auto-scaling groups, load balancers, and multi-region high availability architectures.",
      "Monitor cloud resource utilization, logs, and billing costs (FinOps basics)."
    ],
    prerequisites: [
      { name: "Linux System Administration", desc: "Command line, file permissions, SSH keys, cron jobs, systemd services.", required: true },
      { name: "Networking Fundamentals", desc: "IP addressing, CIDR blocks, Subnets, DNS, TCP/IP, NAT gateways, Firewalls.", required: true },
      { name: "Cloud Fundamentals", desc: "IaaS vs PaaS vs SaaS, Public vs Private cloud, Regions and Availability Zones.", required: true },
      { name: "Git & Version Control", desc: "Managing infrastructure templates in Git repositories.", required: true }
    ],
    technologies: [
      { name: "Linux & Bash Scripting", category: "OS & Scripting", priority: "MUST LEARN", description: "Navigating servers, writing automation scripts, managing users/SSH." },
      { name: "AWS Core Services (or Azure/GCP)", category: "Cloud Core", priority: "MUST LEARN", description: "EC2, S3, VPC, IAM, RDS, Route53, CloudWatch, Lambda." },
      { name: "Infrastructure as Code (Terraform)", category: "IaC", priority: "MUST LEARN", description: "HCL syntax, state management, modules, plan/apply workflows." },
      { name: "Cloud Networking & Security (VPC/IAM)", category: "Networking & Security", priority: "MUST LEARN", description: "Public/Private subnets, Internet Gateways, NAT, Security Groups, IAM Policies." },
      { name: "Docker Containerization", category: "Containers", priority: "HIGH PRIORITY", description: "Building images, running containers, Dockerfiles." },
      { name: "CI/CD Pipelines (GitHub Actions / GitLab CI)", category: "Automation", priority: "HIGH PRIORITY", description: "Automated linting, testing, and terraform deployment." },
      { name: "Monitoring & Logging (CloudWatch / Datadog)", category: "Observability", priority: "HIGH PRIORITY", description: "Alarms, metrics dashboards, centralized log aggregation." },
      { name: "Kubernetes (EKS / AKS / GKE)", category: "Orchestration", priority: "GOOD TO KNOW", description: "Deploying containerized workloads to managed Kubernetes." },
      { name: "Serverless Architecture (AWS Lambda / API GW)", category: "Serverless", priority: "GOOD TO KNOW", description: "Event-driven serverless architectures." },
      { name: "FinOps & Cost Optimization", category: "Cost Management", priority: "GOOD TO KNOW", description: "Reserved instances, Savings Plans, right-sizing resources." }
    ],
    tools: [
      { name: "AWS Management Console & AWS CLI", priority: "MUST LEARN", purpose: "Configuring and managing AWS cloud resources." },
      { name: "Terraform CLI", priority: "MUST LEARN", purpose: "Automated declarative infrastructure provisioning." },
      { name: "VS Code & Git", priority: "MUST LEARN", purpose: "Authoring IaC and automation scripts." },
      { name: "Docker Desktop", priority: "MUST LEARN", purpose: "Packaging services for cloud deployment." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Linux & Networking Deep Dive", topics: ["Linux Commands, File Permissions, User Management, SSH keys", "TCP/IP Model, DNS Resolution, OSI Layers, HTTP/HTTPS", "IP Subnetting & CIDR calculations (e.g. /16 vs /24 subnets)", "Bash Scripting for server automation"], milestone: "Configure and secure a hardened Linux VM with automated backup scripts." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "AWS Cloud Core Infrastructure", topics: ["VPC Architecture: Public & Private Subnets, Route Tables, NAT & Internet Gateways", "Compute: EC2 instances, User Data scripts, Security Groups", "Storage: S3 Buckets, Lifecycle rules, EBS volumes, EFS", "IAM: Users, Groups, Roles, Policies (Least Privilege principle)"], milestone: "Deploy a resilient, highly available web application across 2 Availability Zones." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "AWS CLI & Terraform Basics", topics: ["AWS CLI credentials and programmatic access", "Terraform Syntax (HCL), Providers, Resources, Variables, Outputs", "Terraform State: Local vs Remote Backend (S3 + DynamoDB locking)"], milestone: "Provision a complete VPC and EC2 cluster automatically using Terraform." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Managed Databases, Load Balancers & Auto-Scaling", topics: ["Application Load Balancer (ALB) and Target Groups", "Auto-Scaling Groups (ASG) based on CPU/RAM utilization", "Managed Databases: Amazon RDS (PostgreSQL/MySQL) multi-AZ failover", "Domain Routing with Route 53 and SSL certificates with AWS ACM"], milestone: "Build an auto-scaling web architecture with Load Balancer and RDS multi-AZ." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Serverless, Containers & CloudWatch", topics: ["Serverless: AWS Lambda, API Gateway, and SQS event triggers", "Container Services: AWS ECS (Elastic Container Service) with Fargate", "CloudWatch Alarms, SNS notifications, and CloudTrail audit logs", "Cloud Cost Optimization (Spot instances, Savings Plans)"], milestone: "Deploy a containerized microservice on AWS ECS Fargate with CloudWatch alarms." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Production Cloud Infrastructure", topics: ["Multi-tier Cloud Architecture via Modular Terraform", "Automated backup and Disaster Recovery (RTO / RPO strategy)", "Security audit and CIS compliance benchmarking"], milestone: "Complete 3 modular Terraform cloud deployment projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Cloud Architecture Portfolio", topics: ["GitHub repository with clean Terraform modules (`/modules/vpc`, `/modules/ecs`)", "Architecture diagrams created with draw.io / Cloudcraft", "Cost breakdown and security hardening documentation"], milestone: "A professional GitHub portfolio featuring production Terraform code." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Cloud Architecture Interviews", topics: ["Design a Fault-Tolerant, Multi-Region Web Architecture on AWS", "Difference between Security Group (Stateful) and NACL (Stateless)", "How to recover when a Terraform state file is corrupted or locked", "S3 Storage Classes and calculating monthly egress data costs"], milestone: "Pass technical cloud architecture scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Certifications & Placement", topics: ["Earning AWS Solutions Architect Associate (SAA-C03)", "Resume targeting Cloud Engineer / Cloud Infrastructure roles", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Cloud Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Multi-AZ Static Web Hosting & CDN", tech: ["AWS S3", "CloudFront CDN", "Route 53", "ACM SSL", "Terraform"], description: "Global low-latency website distribution with SSL certificates, S3 origin access control (OAC), and Terraform IaC." },
      { tier: "Intermediate", title: "High-Availability Auto-Scaling WordPress Cluster", tech: ["AWS EC2", "ALB", "Auto-Scaling", "RDS Multi-AZ", "EFS", "Terraform"], description: "Production multi-AZ architecture with Application Load Balancer, dynamic auto-scaling, and shared EFS media storage." },
      { tier: "Production / Capstone", title: "Modular Production-Grade ECS Fargate Microservices Stack", tech: ["Terraform", "AWS ECS Fargate", "VPC", "ALB", "CloudWatch", "GitHub Actions"], description: "Completely automated modular Terraform stack deploying containerized microservices with zero downtime deployments and automated alarms." }
    ],
    certifications: [
      { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", issuer: "Amazon Web Services" },
      { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp" }
    ],
    interviewTopics: [
      { category: "Cloud Networking & Security", topics: ["Stateful Security Groups vs Stateless Network ACLs (NACLs)", "How does a NAT Gateway allow private subnet instances to access the internet?", "IAM Role vs IAM User and how cross-account IAM role assumption works", "VPC Peering vs AWS Transit Gateway for connecting multiple VPCs"] },
      { category: "Terraform & Architecture", topics: ["How Terraform handles state locking with AWS DynamoDB", "Explain Terraform import and what happens during a terraform plan drift", "Design a 99.99% uptime Disaster Recovery strategy with pilot light vs warm standby"] }
    ],
    relatedRoles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Architect", "Platform Engineer"]
  },

  {
    id: "cloud-developer",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "Cloud Developer",
    slug: "cloud-developer",
    badge: "High Demand",
    shortDescription: "Builds cloud-native applications, microservices, and serverless backends optimized for cloud SDKs.",
    description: "A Cloud Developer is a software engineer who writes code specifically designed to run on cloud platforms. They leverage cloud-native managed services, serverless functions, object storage SDKs, managed message queues, and cloud security APIs to build scalable digital products.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹5.5 - ₹10 LPA", mid: "₹11 - ₹21 LPA", senior: "₹23 - ₹48+ LPA" },
    responsibilities: [
      "Develop cloud-native applications using AWS SDKs (Boto3, JS SDK), Azure SDKs, or GCP client libraries.",
      "Build serverless microservices with AWS Lambda, API Gateway, DynamoDB, and Step Functions.",
      "Implement event-driven asynchronous processing using SQS, SNS, and EventBridge.",
      "Integrate cloud authentication services like AWS Cognito or Firebase Auth.",
      "Write unit and integration tests with local cloud emulators (LocalStack, DynamoDB Local)."
    ],
    prerequisites: [
      { name: "Proficiency in JavaScript/TypeScript or Python", desc: "Functions, async/await, REST API consumption, JSON.", required: true },
      { name: "Cloud Core Concepts", desc: "Serverless vs Containers, Object Storage, IAM permissions.", required: true },
      { name: "Databases (SQL & NoSQL)", desc: "DynamoDB, MongoDB, PostgreSQL.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on code.", required: true }
    ],
    technologies: [
      { name: "JavaScript / TypeScript OR Python", category: "Language", priority: "MUST LEARN", description: "Primary languages for cloud SDKs and serverless functions." },
      { name: "AWS Lambda & Serverless Framework / SST", category: "Serverless", priority: "MUST LEARN", description: "Function-as-a-Service (FaaS), cold starts, memory tuning, event triggers." },
      { name: "NoSQL Database (Amazon DynamoDB)", category: "Database", priority: "MUST LEARN", description: "Single-table design, partition/sort keys, GSI, LSI, TTL." },
      { name: "Event-Driven Architecture (SQS, SNS, EventBridge)", category: "Messaging", priority: "MUST LEARN", description: "Pub/sub messaging, dead letter queues (DLQ), fanout patterns." },
      { name: "AWS SDK & Cloud APIs", category: "Cloud Integration", priority: "MUST LEARN", description: "Programmatic interaction with S3, DynamoDB, SES, Secrets Manager." },
      { name: "Amazon API Gateway", category: "API Gateway", priority: "HIGH PRIORITY", description: "REST/HTTP APIs, authorizers, CORS, request validation." },
      { name: "Docker Containerization", category: "Containers", priority: "HIGH PRIORITY", description: "Packaging applications for AWS App Runner or ECS." },
      { name: "Authentication (AWS Cognito / Auth0)", category: "Auth", priority: "HIGH PRIORITY", description: "User pools, identity pools, OAuth2/JWT integration." },
      { name: "AWS CDK / SAM (Cloud Development Kit)", category: "IaC for Developers", priority: "GOOD TO KNOW", description: "Defining cloud infrastructure using TypeScript or Python code." },
      { name: "Observability (AWS X-Ray & CloudWatch)", category: "Tracing", priority: "GOOD TO KNOW", description: "Distributed tracing across microservices and latency profiling." }
    ],
    tools: [
      { name: "VS Code & AWS Toolkit Extension", priority: "MUST LEARN", purpose: "Developing and debugging serverless functions locally." },
      { name: "LocalStack", priority: "HIGH PRIORITY", purpose: "Simulating AWS cloud services locally without incurring costs." },
      { name: "Postman", priority: "MUST LEARN", purpose: "Testing API Gateway endpoints." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Version control." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Cloud SDKs & AWS Core", topics: ["AWS CLI setup, IAM programmatic credentials", "Using AWS SDK (Boto3 / JS SDK v3) to upload/download files to S3", "Reading and writing items to DynamoDB programmatically"], milestone: "Build a Python/Node script interacting with S3 and DynamoDB via AWS SDK." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-8", focus: "Serverless Architecture (Lambda & API GW)", topics: ["AWS Lambda Lifecycle, Execution Context, and Handler functions", "Connecting API Gateway to Lambda with proxy integrations", "Environment variables, Secrets Manager, and IAM execution roles", "Handling CORS and HTTP status codes in Lambda responses"], milestone: "Build a complete serverless CRUD REST API with Lambda and API Gateway." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Serverless Framework / SAM & LocalStack", topics: ["Defining serverless.yml or template.yaml configurations", "Running and testing AWS Lambda and DynamoDB locally using LocalStack"], milestone: "Deploy a serverless project with a single command (`serverless deploy`)." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "DynamoDB Single-Table Design & SQS", topics: ["DynamoDB Partition Keys, Sort Keys, and Global Secondary Indexes (GSI)", "Asynchronous processing with SQS queues and Dead Letter Queues (DLQ)", "Pub/Sub event fanout using Amazon SNS and SQS", "EventBridge cron and event-driven triggers"], milestone: "Build an event-driven order processing system with SQS and DynamoDB." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Cognito Auth, Step Functions & Tracing", topics: ["User Authentication with AWS Cognito User Pools and JWT verification", "Multi-step business workflows with AWS Step Functions state machines", "Distributed tracing across microservices using AWS X-Ray", "Mitigating Lambda cold start latency with Provisioned Concurrency"], milestone: "Build a serverless user portal with Cognito Auth and Step Functions." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Cloud Applications", topics: ["Automated CI/CD deployment via GitHub Actions", "Optimizing DynamoDB query read/write capacity units", "Security scanning with Checkov / Snyk"], milestone: "Deploy 3 production-grade cloud-native applications." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Cloud Portfolio", topics: ["GitHub repository with clean serverless configurations", "Architecture diagrams illustrating serverless event flows", "Live API documentation and Swagger specs"], milestone: "A professional GitHub portfolio showcasing cloud-native architectures." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Cloud Developer Technicals", topics: ["How to minimize AWS Lambda cold start latency", "DynamoDB Single Table Design modeling (Access patterns first)", "Idempotent processing of SQS messages and deduplication IDs", "AWS Cognito User Pools vs Identity Pools"], milestone: "Ace cloud developer coding and architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Earning AWS Certified Developer Associate (DVA-C02)", "Cloud Developer resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Cloud Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "Serverless Image Processing Pipeline", tech: ["AWS Lambda", "S3", "Pillow (Python)", "SNS"], description: "Automated pipeline: image upload to S3 triggers Lambda to generate thumbnails, save metadata, and send SNS notifications." },
      { tier: "Intermediate", title: "Event-Driven E-Commerce Checkout System", tech: ["API Gateway", "AWS Lambda", "DynamoDB", "SQS", "Step Functions", "Stripe"], description: "Decoupled checkout processing with SQS queue, payment verification state machine, and DynamoDB storage." },
      { tier: "Production / Capstone", title: "Full-Stack Serverless SaaS with Cognito & Stripe", tech: ["Next.js", "AWS Lambda", "DynamoDB", "Cognito", "Serverless Framework", "Stripe"], description: "Complete SaaS product featuring user authentication, subscription billing, asynchronous job execution, and automated CI/CD." }
    ],
    certifications: [
      { name: "AWS Certified Developer – Associate (DVA-C02)", issuer: "Amazon Web Services" },
      { name: "Microsoft Certified: Azure Developer Associate (AZ-204)", issuer: "Microsoft" }
    ],
    interviewTopics: [
      { category: "Serverless & Cloud Architecture", topics: ["Explain Lambda cold start causes and mitigation strategies (VPC attachments, runtime selection)", "How to design a DynamoDB schema based on query access patterns rather than relational entities", "How does SQS FIFO queue ensure exactly-once processing with MessageDeduplicationId?", "Difference between synchronous API Gateway Lambda integration and asynchronous EventBridge triggers"] }
    ],
    relatedRoles: ["Cloud Engineer", "Backend Developer", "DevOps Engineer", "Full Stack Developer"]
  },

  {
    id: "devops-engineer",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "DevOps Engineer",
    slug: "devops-engineer",
    badge: "Highest Demand",
    shortDescription: "Automates CI/CD pipelines, container orchestration, infrastructure as code, and deployment workflows.",
    description: "A DevOps Engineer bridges software development and IT operations. They build automated continuous integration and continuous deployment (CI/CD) pipelines, orchestrate container clusters with Kubernetes, manage Infrastructure as Code (Terraform), and establish reliable observability systems.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science", "IT"],
    salaryRange: { entry: "₹6 - ₹11 LPA", mid: "₹12 - ₹24 LPA", senior: "₹25 - ₹52+ LPA" },
    responsibilities: [
      "Design, build, and maintain automated CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins.",
      "Deploy, manage, and scale containerized applications on Kubernetes (K8s) clusters.",
      "Automate multi-cloud infrastructure provisioning using Terraform and Ansible.",
      "Implement centralized monitoring, logging, and alerting with Prometheus, Grafana, and ELK stack.",
      "Facilitate zero-downtime deployment strategies (Blue/Green, Canary, Rolling updates)."
    ],
    prerequisites: [
      { name: "Linux & Shell Scripting", desc: "Deep Linux CLI administration, bash scripting, file systems, permissions, SSH.", required: true },
      { name: "Networking Fundamentals", desc: "DNS, TCP/IP, Load Balancing, Reverse Proxies (Nginx), SSL/TLS certificates.", required: true },
      { name: "Git & Version Control", desc: "Git branching strategies (Trunk-based, GitFlow), merge conflicts, webhooks.", required: true },
      { name: "Cloud Fundamentals", desc: "Basic knowledge of AWS, Azure, or GCP infrastructure.", required: true }
    ],
    technologies: [
      { name: "Linux Administration & Bash", category: "OS & Scripting", priority: "MUST LEARN", description: "Core OS for running production server infrastructure." },
      { name: "Docker Containerization", category: "Containers", priority: "MUST LEARN", description: "Multi-stage builds, container security, Docker Compose." },
      { name: "CI/CD (GitHub Actions / GitLab CI)", category: "Automation", priority: "MUST LEARN", description: "Automated test workflows, artifact building, automated deployment pipelines." },
      { name: "Kubernetes (K8s)", category: "Container Orchestration", priority: "MUST LEARN", description: "Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, HPA." },
      { name: "Infrastructure as Code (Terraform)", category: "IaC", priority: "MUST LEARN", description: "Automated cloud provisioning, state management, reusable modules." },
      { name: "Configuration Management (Ansible)", category: "Config Management", priority: "HIGH PRIORITY", description: "Playbooks, inventory management, server configuration automation." },
      { name: "Observability (Prometheus & Grafana)", category: "Monitoring", priority: "HIGH PRIORITY", description: "Metrics scraping, PromQL queries, alerts, interactive dashboards." },
      { name: "Log Aggregation (ELK Stack / Loki)", category: "Logging", priority: "HIGH PRIORITY", description: "Centralized server log searching and visualization." },
      { name: "GitOps (ArgoCD)", category: "Continuous Delivery", priority: "GOOD TO KNOW", description: "Declarative GitOps continuous delivery for Kubernetes." },
      { name: "Security & DevSecOps (Trivy / SonarQube)", category: "Security", priority: "HIGH PRIORITY", description: "Container vulnerability scanning and static code analysis." }
    ],
    tools: [
      { name: "Docker & Kubernetes (kubectl / Minikube / K3s)", priority: "MUST LEARN", purpose: "Container creation and cluster orchestration." },
      { name: "Terraform", priority: "MUST LEARN", purpose: "Infrastructure as Code provisioning." },
      { name: "GitHub Actions", priority: "MUST LEARN", purpose: "Building and executing CI/CD pipelines." },
      { name: "Grafana & Prometheus", priority: "HIGH PRIORITY", purpose: "System observability and alerting." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Advanced Linux & Networking", topics: ["Linux Process Management (ps, top, kill, systemd)", "Networking: Nginx reverse proxy, SSL/TLS certificates with Let's Encrypt", "Bash Scripting: Loops, conditionals, error handling, cron jobs", "Git branching strategies: Trunk-based development and GitFlow"], milestone: "Configure an Nginx reverse proxy with automated SSL certificate renewal." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Docker & Container Mastery", topics: ["Docker Architecture (Daemon, Client, Images, Containers)", "Writing optimized Dockerfiles with multi-stage builds and non-root users", "Docker Compose for multi-container web + database + cache environments", "Scanning images for security vulnerabilities with Trivy"], milestone: "Containerize a full-stack application and achieve image size reduction of >60%." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "CI/CD with GitHub Actions", topics: ["GitHub Actions Workflows, Triggers (push, pull_request)", "Automated testing, linting, Docker image build and push to DockerHub/ECR", "Managing environment secrets securely in CI/CD"], milestone: "Build an automated CI/CD pipeline that builds, tests, and publishes Docker images on every PR." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-15", focus: "Kubernetes (K8s) Cluster Orchestration", topics: ["K8s Architecture: Control Plane, Kubelet, Kube-proxy, etcd", "Core Objects: Pods, Deployments, ReplicaSets, Namespaces", "Networking: ClusterIP, NodePort, LoadBalancer, Ingress Controllers", "Configuration: ConfigMaps, Secrets, PersistentVolumes (PV/PVC)", "Horizontal Pod Autoscaler (HPA) based on CPU/Memory"], milestone: "Deploy a resilient, auto-scaling microservice on a Kubernetes cluster with Ingress routing." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Terraform, Ansible & Helm", topics: ["Terraform Modular Infrastructure on AWS (VPC, EKS, RDS)", "Server Configuration Automation with Ansible Playbooks", "Helm Package Manager for Kubernetes charts", "GitOps continuous delivery with ArgoCD"], milestone: "Provision an AWS EKS cluster with Terraform and deploy Helm apps via ArgoCD." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Production DevOps Systems", topics: ["End-to-end GitOps pipeline (Git -> GitHub Actions -> ArgoCD -> K8s)", "Observability stack with Prometheus, Grafana, and Alertmanager", "Zero-downtime Canary / Blue-Green deployments"], milestone: "Ship 3 comprehensive production-grade DevOps capstone projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "DevOps Portfolio & Architecture", topics: ["GitHub repositories with clean Terraform code, Helm charts, and CI/CD yaml", "Architecture diagrams showing CI/CD workflows and Kubernetes topologies", "Well-documented README with single-command setup instructions"], milestone: "A professional GitHub portfolio showcasing automated CI/CD and K8s." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "DevOps Scenario Interviews", topics: ["How does Kubernetes handle a crashing Pod (CrashLoopBackOff debugging)?", "Difference between Rolling Update, Blue/Green, and Canary deployments", "How does Prometheus scrape metrics and how to write PromQL queries", "How to manage secrets in Kubernetes securely (HashiCorp Vault / Sealed Secrets)"], milestone: "Ace technical DevOps scenario and live troubleshooting interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Certifications & Placement", topics: ["Earning Certified Kubernetes Administrator (CKA)", "DevOps Engineer ATS-compliant resume", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior DevOps Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated CI/CD Multi-Environment Pipeline", tech: ["GitHub Actions", "Docker", "DockerHub", "Linux", "Trivy"], description: "Automated pipeline running unit tests, linting, vulnerability scanning with Trivy, and publishing versioned Docker images." },
      { tier: "Intermediate", title: "Kubernetes Auto-Scaling Microservice Deployment", tech: ["Kubernetes", "Helm", "Nginx Ingress", "HPA", "Minikube / EKS"], description: "Production Kubernetes deployment with Helm chart, ConfigMaps, Secrets, Ingress routing, and Horizontal Pod Autoscaler." },
      { tier: "Production / Capstone", title: "Complete GitOps Kubernetes Platform with ArgoCD & Prometheus", tech: ["Terraform", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "GitHub Actions"], description: "Full enterprise pipeline: Terraform provisions cloud cluster, GitHub Actions tests code, ArgoCD syncs GitOps state, and Prometheus/Grafana monitors health." }
    ],
    certifications: [
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation (CNCF)" },
      { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp" }
    ],
    interviewTopics: [
      { category: "Kubernetes Internals", topics: ["How to debug a Pod stuck in CrashLoopBackOff or ImagePullBackOff", "Difference between Readiness Probe and Liveness Probe in Kubernetes", "What happens when you run `kubectl apply -f deployment.yaml` behind the scenes?", "How does Horizontal Pod Autoscaler (HPA) determine when to scale replicas?"] },
      { category: "CI/CD & Deployment Strategies", topics: ["Explain Blue/Green deployment vs Canary deployment and how to rollback instantly", "How to prevent secrets from leaking into Git repositories and Docker images", "What is GitOps and how does ArgoCD detect configuration drift?"] }
    ],
    relatedRoles: ["Site Reliability Engineer", "Cloud Engineer", "Platform Engineer", "Backend Developer"]
  },

  {
    id: "site-reliability-engineer",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "Site Reliability Engineer",
    slug: "site-reliability-engineer",
    badge: "High Demand",
    shortDescription: "Applies software engineering principles to infrastructure operations, system uptime, and reliability.",
    description: "A Site Reliability Engineer (SRE) uses software engineering practices to solve infrastructure, reliability, and operations problems. Originated by Google, SREs focus on Service Level Objectives (SLOs), Error Budgets, automated incident response, chaos engineering, and high-availability architecture.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹7 - ₹13 LPA", mid: "₹14 - ₹26 LPA", senior: "₹28 - ₹60+ LPA" },
    responsibilities: [
      "Define, track, and maintain Service Level Indicators (SLIs), Service Level Objectives (SLOs), and Error Budgets.",
      "Build automated self-healing systems and tooling using Python or Go to eliminate manual toil.",
      "Conduct post-mortems and Root Cause Analysis (RCA) without assigning blame (blameless post-mortems).",
      "Manage on-call incident response, alerting thresholds, and disaster recovery game-days.",
      "Perform load testing, capacity planning, and chaos engineering experiments (Chaos Mesh, Gremlin)."
    ],
    prerequisites: [
      { name: "Strong Coding Skills (Python or Go)", desc: "Writing automation scripts, CLI tools, and interacting with APIs.", required: true },
      { name: "Deep Linux & Networking", desc: "Kernel parameters, memory management, sockets, DNS, TCP handshake, load balancing.", required: true },
      { name: "Containers & Orchestration", desc: "Docker and Kubernetes fundamentals.", required: true },
      { name: "Git & CI/CD", desc: "Version control and deployment automation.", required: true }
    ],
    technologies: [
      { name: "Python / Go", category: "Language", priority: "MUST LEARN", description: "Writing reliability automation tools, custom exporters, and controllers." },
      { name: "Linux Internals & Performance Tuning", category: "OS", priority: "MUST LEARN", description: "CPU scheduling, I/O bottlenecks, memory limits (cgroups), system calls." },
      { name: "SRE Principles (SLI / SLO / Error Budgets)", category: "Reliability Framework", priority: "MUST LEARN", description: "Uptime measurement, error budget burn rates, alert fatigue prevention." },
      { name: "Prometheus, Grafana & OpenTelemetry", category: "Observability", priority: "MUST LEARN", description: "Distributed metrics, tracing, distributed logs, custom alert rules." },
      { name: "Kubernetes & Service Meshes (Istio)", category: "Orchestration & Traffic", priority: "HIGH PRIORITY", description: "Traffic splitting, circuit breaking, mutual TLS, fault injection." },
      { name: "Chaos Engineering (Chaos Mesh / Litmus)", category: "Resilience Testing", priority: "HIGH PRIORITY", description: "Simulating node failures, network latency, and memory spikes." },
      { name: "Incident Management & Alerting (PagerDuty)", category: "Incident Response", priority: "HIGH PRIORITY", description: "On-call rotations, escalation policies, automated runbooks." },
      { name: "Terraform & Cloud Infrastructure", category: "IaC", priority: "HIGH PRIORITY", description: "Automated provisioning of multi-region fault-tolerant infrastructure." },
      { name: "Load Testing (k6 / Locust)", category: "Performance", priority: "HIGH PRIORITY", description: "Stress testing systems to identify breaking points and bottlenecks." }
    ],
    tools: [
      { name: "Prometheus & Grafana", priority: "MUST LEARN", purpose: "Real-time metrics and SLO tracking dashboards." },
      { name: "k6 / Locust", priority: "MUST LEARN", purpose: "Performance and load testing simulation." },
      { name: "PagerDuty / Opsgenie", priority: "HIGH PRIORITY", purpose: "On-call scheduling and incident alert management." },
      { name: "Docker & Kubernetes", priority: "MUST LEARN", purpose: "Container orchestration." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Linux Internals & Python/Go Scripting", topics: ["Linux Kernel concepts: Processes, Threads, Memory Management (OOM Killer)", "Troubleshooting tools: strace, lsof, netstat, tcpdump, iostat, vmstat", "Writing automated system health check scripts in Python/Go"], milestone: "Build a Python/Go CLI tool that diagnoses server health and alerts on resource bottlenecks." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "SRE Fundamentals (SLIs, SLOs & Error Budgets)", topics: ["Defining SLIs (Availability, Latency, Error Rate) for HTTP and DB services", "Setting realistic SLOs (e.g. 99.9% availability) and calculating Error Budgets", "Designing alerts based on Multi-Window Multi-Burn-Rate alerting strategies"], milestone: "Design an SLO tracking dashboard with Error Budget burn rate alerts in Grafana." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Load Testing with k6", topics: ["Writing k6 load test scripts simulating 10,000 concurrent users", "Measuring 95th (p95) and 99th (p99) percentile response latencies under load"], milestone: "Stress-test a web service with k6 to find its saturation and failure thresholds." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Observability & OpenTelemetry", topics: ["OpenTelemetry instrumentation for distributed tracing across services", "PromQL query mastery (rate, histogram_quantile, increase)", "Centralized log analysis and correlation with trace IDs"], milestone: "Implement end-to-end distributed tracing across 3 communicating microservices." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Chaos Engineering & Self-Healing", topics: ["Chaos Engineering principles (Hypothesis -> Experiment -> Verification)", "Injecting network latency and pod kill failures with Chaos Mesh", "Writing Kubernetes auto-healing operators and automated rollback triggers"], milestone: "Run automated chaos experiments verifying system resiliency during network outages." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production SRE Systems", topics: ["Automated Blameless Post-Mortem documentation templates", "Building self-healing runbook automation bots", "Disaster Recovery game-day simulation"], milestone: "Complete 3 comprehensive SRE reliability projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Reliability Engineering Portfolio", topics: ["GitHub repository with load test scripts, Grafana dashboards, and Chaos experiments", "Documented post-mortems analyzing simulated major outages", "Clean architectural diagrams"], milestone: "A professional SRE portfolio demonstrating resilience and observability." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "SRE Whiteboard & Scenarios", topics: ["Troubleshoot a scenario where a database connection pool is exhausted", "Explain how to calculate Error Budget and when to freeze feature deployments", "How does Linux handle Out-Of-Memory (OOM) situations?", "Designing a high-availability system with 99.99% availability SLA"], milestone: "Ace technical SRE incident troubleshooting and architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "SRE Placement", topics: ["SRE resume highlighting uptime metrics, toil reduction, and incident response", "Applying to high-scale tech companies and financial institutions", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Site Reliability Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Prometheus & Grafana SLO Dashboard", tech: ["Prometheus", "Grafana", "Docker Compose", "Node.js Exporter"], description: "Monitors API latency percentiles (p50, p95, p99), error rates, and calculates real-time 30-day error budget burn rate." },
      { tier: "Intermediate", title: "Distributed Tracing & Latency Bottleneck Hunter", tech: ["OpenTelemetry", "Jaeger", "FastAPI", "PostgreSQL", "Docker"], description: "Full distributed tracing across microservices, identifying high-latency database queries and slow network hops." },
      { tier: "Production / Capstone", title: "Automated Chaos Engineering & Resiliency Validation Platform", tech: ["Kubernetes", "Chaos Mesh", "k6", "Prometheus", "Go / Python"], description: "Automated pipeline running load tests while injecting network partition faults, validating self-healing and zero data loss." }
    ],
    certifications: [
      { name: "Google Cloud Certified Professional Cloud DevOps / SRE Engineer", issuer: "Google Cloud" },
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF" }
    ],
    interviewTopics: [
      { category: "SRE Core Principles", topics: ["What is an Error Budget and what happens when the error budget is exhausted?", "Difference between 99.9% (Three Nines) and 99.99% (Four Nines) uptime in allowed downtime per year", "Explain the 4 Golden Signals of Monitoring: Latency, Traffic, Errors, and Saturation", "What is 'Toil' in SRE and how do you distinguish it from engineering work?"] }
    ],
    relatedRoles: ["DevOps Engineer", "Cloud Engineer", "Platform Engineer", "Backend Developer"]
  },

  {
    id: "cloud-architect",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "Cloud Architect",
    slug: "cloud-architect",
    badge: "Senior / Leadership",
    shortDescription: "Designs enterprise-wide cloud strategies, multi-region architectures, security, and cost models.",
    description: "A Cloud Architect leads the high-level design of an organization's cloud computing strategy. They evaluate business requirements and translate them into secure, scalable, highly available, fault-tolerant, and cost-optimized cloud architectures.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Senior Engineers"],
    salaryRange: { entry: "₹8 - ₹15 LPA (Junior Architect)", mid: "₹18 - ₹32 LPA", senior: "₹35 - ₹75+ LPA" },
    responsibilities: [
      "Design multi-region, high-availability, fault-tolerant enterprise cloud architectures.",
      "Evaluate trade-offs between IaaS, PaaS, Serverless, and Kubernetes platforms.",
      "Define cloud governance, multi-account security baselines (AWS Organizations, Landing Zones), and compliance.",
      "Conduct cloud migration assessments (6 R's: Rehost, Replatform, Refactor, Repurchase, Retain, Retire).",
      "Optimize enterprise cloud spend (FinOps) and mentor engineering teams on architectural best practices."
    ],
    prerequisites: [
      { name: "Comprehensive Cloud Experience", desc: "Deep understanding of AWS, Azure, or GCP compute, networking, and storage.", required: true },
      { name: "Enterprise System Design", desc: "Microservices, event-driven systems, database replication, and caching.", required: true },
      { name: "Enterprise Security & Compliance", desc: "IAM, encryption in transit/rest, SOC2, HIPAA, GDPR compliance.", required: true },
      { name: "Cost Modeling & Capacity Planning", desc: "FinOps, resource right-sizing, ROI estimation.", required: true }
    ],
    technologies: [
      { name: "AWS / Azure / GCP Enterprise Architecture", category: "Cloud Architecture", priority: "MUST LEARN", description: "Multi-account Landing Zones, Transit Gateways, Direct Connect." },
      { name: "Well-Architected Framework", category: "Framework", priority: "MUST LEARN", description: "Operational Excellence, Security, Reliability, Performance, Cost, Sustainability." },
      { name: "Infrastructure as Code (Terraform Enterprise)", category: "IaC", priority: "MUST LEARN", description: "Scalable modular multi-environment cloud provisioning." },
      { name: "Disaster Recovery & Business Continuity", category: "Resilience", priority: "MUST LEARN", description: "RTO / RPO planning, Active-Active vs Active-Passive multi-region setups." },
      { name: "Enterprise Security (Zero Trust & IAM)", category: "Security", priority: "HIGH PRIORITY", description: "KMS encryption, SCPs (Service Control Policies), Web Application Firewalls." },
      { name: "Hybrid Cloud & Migration Strategies", category: "Migration", priority: "HIGH PRIORITY", description: "AWS Direct Connect, VPN tunnels, database migration services (DMS)." },
      { name: "FinOps & Cloud Economics", category: "Cost Strategy", priority: "HIGH PRIORITY", description: "Enterprise cost allocation tags, anomaly detection, unit economics." },
      { name: "Kubernetes & Service Mesh Architecture", category: "Containers", priority: "GOOD TO KNOW", description: "Enterprise multi-cluster container governance." }
    ],
    tools: [
      { name: "Cloudcraft / Lucidchart / draw.io", priority: "MUST LEARN", purpose: "Designing professional enterprise cloud architecture diagrams." },
      { name: "Terraform", priority: "MUST LEARN", purpose: "Declarative infrastructure automation." },
      { name: "AWS Pricing Calculator / Infracost", priority: "MUST LEARN", purpose: "Estimating and optimizing infrastructure costs." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "AWS Well-Architected Framework", topics: ["The 6 Pillars: Security, Reliability, Performance, Cost, Operational Excellence, Sustainability", "Multi-account strategy with AWS Organizations & Service Control Policies (SCPs)", "Enterprise Networking: Transit Gateway, Direct Connect, Route 53 Private Hosted Zones"], milestone: "Design an enterprise multi-account AWS Landing Zone architecture." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "High Availability & Multi-Region Design", topics: ["Active-Active vs Active-Passive multi-region architectures", "Global Traffic Management with Route 53 Latency & Geolocation routing", "Cross-region database replication (Amazon Aurora Global Database, DynamoDB Global Tables)", "Calculating RTO (Recovery Time Objective) and RPO (Recovery Point Objective)"], milestone: "Design a sub-1 minute RTO/RPO Disaster Recovery blueprint for a global banking app." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "Architecture Diagrams & Infracost", topics: ["Creating professional C4 model architecture diagrams", "Automating cost estimation in CI/CD with Infracost and Terraform"], milestone: "Publish an enterprise architecture blueprint with full cost estimation breakdown." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Enterprise Security & Governance", topics: ["Zero Trust Architecture: Mutual TLS, IAM role delegation, AWS Secrets Manager", "Envelope Encryption with AWS KMS (Customer Managed Keys)", "DDoS mitigation with AWS Shield and AWS WAF (Web Application Firewall)", "Compliance frameworks: SOC2, HIPAA, PCI-DSS on the cloud"], milestone: "Architect a PCI-DSS compliant payment processing cloud infrastructure." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Cloud Migration & FinOps", topics: ["Cloud Migration strategies (The 6 R's: Rehost, Replatform, Refactor, etc.)", "Database migration with AWS DMS and Schema Conversion Tool", "FinOps: Establishing cost allocation tagging, anomalous spend alerts, and savings plans"], milestone: "Create a complete enterprise data center to cloud migration plan." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Enterprise Architecture Case Studies", topics: ["Global Multi-Region SaaS Architecture", "Hybrid Cloud Enterprise Network with Direct Connect", "Serverless vs Kubernetes Cost-Benefit Analysis"], milestone: "Deliver 3 comprehensive enterprise cloud architecture proposals." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Architecture Whitepapers & Showcase", topics: ["Publishing technical architecture whitepapers on GitHub/LinkedIn", "Modular Terraform code repositories demonstrating Landing Zone patterns", "Executive presentation slide decks"], milestone: "A professional portfolio of enterprise architecture blueprints." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Enterprise Architectural Whiteboarding", topics: ["Whiteboard a global e-commerce platform with 10 million daily active users", "How to justify architectural decisions to C-level executives (CTO/CFO)", "Trade-offs between Microservices vs Serverless vs Monolith at scale"], milestone: "Master executive cloud architecture interview scenarios." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Executive Certifications & Hiring", topics: ["Earning AWS Certified Solutions Architect – Professional (SAP-C02)", "Resume targeting Cloud Architect / Enterprise Architect roles", "Mock executive interviews"], milestone: "Secure employment as a Cloud Architect / Solutions Architect." }
    ],
    projects: [
      { tier: "Beginner", title: "Enterprise Multi-Account AWS Landing Zone Blueprint", tech: ["AWS Organizations", "SCPs", "Transit Gateway", "Terraform", "CloudFormation"], description: "Complete multi-account structure separating Security, Shared Services, Development, and Production environments." },
      { tier: "Intermediate", title: "Global Multi-Region Active-Active SaaS Architecture", tech: ["Route 53 Global Routing", "Aurora Global DB", "ALB", "AWS WAF", "Terraform"], description: "Sub-second global latency architecture across US and EU regions with automated cross-region failover." },
      { tier: "Production / Capstone", title: "Enterprise Hybrid Cloud Migration & Disaster Recovery Strategy", tech: ["AWS Direct Connect", "DMS", "KMS", "Infracost", "Terraform", "FinOps"], description: "Comprehensive migration plan and Terraform architecture transitioning on-premise Oracle workloads to AWS with FinOps cost model." }
    ],
    certifications: [
      { name: "AWS Certified Solutions Architect – Professional (SAP-C02)", issuer: "Amazon Web Services" },
      { name: "Google Cloud Certified Professional Cloud Architect", issuer: "Google Cloud" }
    ],
    interviewTopics: [
      { category: "Enterprise Architecture", topics: ["How to architect an Active-Active multi-region database replication with conflict resolution", "How do Service Control Policies (SCPs) restrict root account actions in child AWS accounts?", "Trade-offs between AWS Transit Gateway and VPC Peering in a 100-VPC network", "How to calculate and enforce RTO and RPO targets during region-wide outages"] }
    ],
    relatedRoles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer", "Software Engineer"]
  },

  {
    id: "platform-engineer",
    careerFamily: "CLOUD & DEVOPS",
    roleName: "Platform Engineer",
    slug: "platform-engineer",
    badge: "High Demand",
    shortDescription: "Builds Internal Developer Platforms (IDPs) and self-service toolchains to accelerate product teams.",
    description: "A Platform Engineer builds Internal Developer Platforms (IDPs) that enable software developers to build, test, deploy, and manage their applications independently through self-service APIs, portals, and standardized golden paths, reducing cognitive load.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6.5 - ₹12 LPA", mid: "₹13 - ₹25 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Build Internal Developer Platforms (IDPs) using Port, Backstage, or custom portals.",
      "Design 'Golden Paths' for software engineers (standardized templates for spinning up microservices).",
      "Automate Kubernetes cluster provisioning, namespace isolation, and network policies.",
      "Implement developer self-service for cloud resources (Databases, Queues, S3 buckets) via Crossplane or Terraform.",
      "Measure and optimize Developer Experience (DevEx), DORA metrics, and lead time to change."
    ],
    prerequisites: [
      { name: "Kubernetes & Docker", desc: "In-depth knowledge of Kubernetes objects, custom resource definitions (CRDs), and containerization.", required: true },
      { name: "Go or Python Programming", desc: "Building internal CLI tools, custom controllers, and developer portals.", required: true },
      { name: "Infrastructure as Code (Terraform / Crossplane)", desc: "Automating cloud infrastructure dynamically.", required: true },
      { name: "CI/CD & DevOps Practices", desc: "Automating build and deployment workflows.", required: true }
    ],
    technologies: [
      { name: "Kubernetes & CRDs", category: "Core Platform", priority: "MUST LEARN", description: "Custom Resource Definitions, operators, namespace RBAC, multi-tenancy." },
      { name: "Internal Developer Portals (Backstage / Port)", category: "Portal", priority: "MUST LEARN", description: "Service catalogs, self-service software templates, tech docs." },
      { name: "Cloud Control Planes (Crossplane / Terraform)", category: "Self-Service IaC", priority: "MUST LEARN", description: "Composing cloud infrastructure as Kubernetes native custom resources." },
      { name: "Go / Python for Platform Tooling", category: "Language", priority: "MUST LEARN", description: "Building custom CLI tools and automation controllers." },
      { name: "GitOps & Continuous Delivery (ArgoCD)", category: "Deployment", priority: "HIGH PRIORITY", description: "Automated sync of applications and infrastructure from Git." },
      { name: "Helm & Kustomize", category: "Packaging", priority: "HIGH PRIORITY", description: "Standardized microservice application deployment templates." },
      { name: "DORA Metrics & DevEx Observability", category: "Metrics", priority: "HIGH PRIORITY", description: "Tracking Deployment Frequency, Lead Time for Changes, Change Failure Rate, MTTR." },
      { name: "Service Mesh (Istio / Linkerd)", category: "Networking", priority: "GOOD TO KNOW", description: "Standardized service-to-service communication, security, and traffic routing." }
    ],
    tools: [
      { name: "Spotify Backstage / Port", priority: "MUST LEARN", purpose: "Internal developer portal and service catalog." },
      { name: "Crossplane", priority: "HIGH PRIORITY", purpose: "Managing cloud resources directly through Kubernetes APIs." },
      { name: "Kubernetes & Helm", priority: "MUST LEARN", purpose: "Platform foundation." },
      { name: "VS Code & Git", priority: "MUST LEARN", purpose: "Platform development." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Kubernetes Multi-Tenancy & Go", topics: ["Kubernetes RBAC, Namespaces, NetworkPolicies, ResourceQuotas", "Go language fundamentals for writing Kubernetes tooling", "Writing custom Docker base images with standardized security baselines"], milestone: "Configure a secure multi-tenant Kubernetes cluster with namespace isolation." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Helm Standardized Microservice Templates", topics: ["Designing a universal Helm chart supporting 100+ microservices", "Parameterizing environment variables, secrets, ingress, and HPA", "Automating Helm chart publishing and versioning"], milestone: "Build a single reusable Helm 'Golden Path' chart for enterprise microservices." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Backstage / Internal Developer Portal", topics: ["Setting up Spotify Backstage service catalog", "Creating Software Templates (Cookiecutter / Backstage Scaffolder)"], milestone: "Deploy a Backstage portal where developers can spin up a new microservice in 1 click." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Self-Service Cloud via Crossplane", topics: ["Crossplane architecture (Compositions, XRDs, Providers)", "Enabling developers to request PostgreSQL / S3 directly via YAML", "Connecting GitOps (ArgoCD) with Crossplane infrastructure definitions"], milestone: "Build a self-service platform where developers provision Postgres databases via GitOps." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "DORA Metrics & Platform Observability", topics: ["Instrumenting DORA metrics (Deployment Frequency, Lead Time for Changes)", "Automating security compliance checks (Kyverno / OPA Gatekeeper policies)", "Developer Experience (DevEx) feedback loops and platform adoption"], milestone: "Build a DORA metrics tracking dashboard showing enterprise engineering velocity." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Complete Internal Developer Platforms", topics: ["Self-service environment provisioning (Ephemeral preview environments)", "Automated secrets integration (External Secrets Operator + AWS Secrets Manager)", "Platform documentation and developer onboarding"], milestone: "Ship 3 comprehensive platform engineering capstone projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Platform Showcase", topics: ["GitHub repository with Backstage plugins, Crossplane compositions, and Helm charts", "Video walkthroughs demonstrating developer self-service in action", "Clear architectural documentation on DevEx impact"], milestone: "A professional GitHub portfolio showcasing Internal Developer Platforms." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Platform Architecture Scenarios", topics: ["Difference between DevOps and Platform Engineering", "How to design a self-service platform without compromising security controls", "How Crossplane reconciles cloud infrastructure state vs Terraform", "How to measure Developer Productivity and reduce cognitive load"], milestone: "Pass technical Platform Engineering architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Platform Engineering Hiring", topics: ["Resume highlighting DevEx improvements, lead time reductions, and IDP adoption", "Targeting tech enterprises with large engineering organizations", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Platform Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Enterprise Standardized Helm Chart & Microservice Scaffolder", tech: ["Helm", "Cookiecutter", "Kubernetes", "Docker", "GitHub Actions"], description: "CLI generator and universal Helm chart allowing engineers to scaffold a production-ready microservice with CI/CD in 60 seconds." },
      { tier: "Intermediate", title: "Self-Service Cloud Infrastructure with Crossplane & ArgoCD", tech: ["Crossplane", "Kubernetes", "AWS Provider", "ArgoCD", "PostgreSQL"], description: "Allows developers to declare application and AWS infrastructure (RDS, S3) in a single manifest, automatically provisioned via GitOps." },
      { tier: "Production / Capstone", title: "Full Internal Developer Platform with Backstage Portal & DORA Telemetry", tech: ["Backstage", "Crossplane", "ArgoCD", "Kubernetes", "Prometheus", "Grafana"], description: "Complete IDP: Backstage web portal for scaffolding microservices, Crossplane for cloud resources, and Grafana for real-time DORA metrics." }
    ],
    certifications: [
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF" },
      { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp" }
    ],
    interviewTopics: [
      { category: "Platform Architecture", topics: ["What is an Internal Developer Platform (IDP) and how does it differ from traditional CI/CD?", "How does Crossplane turn a Kubernetes cluster into a Universal Control Plane?", "How to enforce security policies across all developers using Kyverno / OPA Gatekeeper?", "Explain the 4 DORA metrics and how platform engineering directly improves them"] }
    ],
    relatedRoles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Backend Developer"]
  }
];

module.exports = cloudAndDevOpsRoles;

/**
 * Business & Technology Career Roles (7 Roles)
 */

const businessAndTechRoles = [
  {
    id: "business-analyst",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Business Analyst",
    slug: "business-analyst",
    badge: "High Demand",
    shortDescription: "Gathers business requirements, models processes, creates user stories, and bridges business with IT.",
    description: "A Business Analyst (IT BA) analyzes business domains, documents organizational workflows, gathers stakeholder requirements, and translates business problems into structured functional requirements (BRD/FRD, User Stories) for engineering and software teams.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "BBA/MBA", "IT"],
    salaryRange: { entry: "₹4.5 - ₹8 LPA", mid: "₹9 - ₹17 LPA", senior: "₹18 - ₹36+ LPA" },
    responsibilities: [
      "Elicit and document functional and non-functional requirements from business stakeholders.",
      "Author Business Requirement Documents (BRD), Functional Specification Documents (FSD), and Agile User Stories with Acceptance Criteria (Gherkin syntax).",
      "Model current-state (As-Is) and future-state (To-Be) business processes using BPMN and UML diagrams.",
      "Conduct User Acceptance Testing (UAT) and validate software deliverables against business needs.",
      "Facilitate sprint planning, backlog grooming, and stakeholder review meetings."
    ],
    prerequisites: [
      { name: "Business Process Understanding", desc: "How companies operate, revenue models, customer journeys, operations.", required: true },
      { name: "Communication & Elicitation", desc: "Interviewing stakeholders, conducting workshops, requirements gathering.", required: true },
      { name: "Basic Technical Literacy", desc: "Databases, APIs, web/mobile architecture, software development lifecycle (SDLC).", required: true },
      { name: "Analytical Thinking", desc: "Breaking ambiguous business problems into structured logical workflows.", required: true }
    ],
    technologies: [
      { name: "Agile / Scrum Methodologies", category: "Framework", priority: "MUST LEARN", description: "Sprints, backlog grooming, user stories, acceptance criteria, story estimation." },
      { name: "Process Modeling (BPMN 2.0 & UML)", category: "Process Design", priority: "MUST LEARN", description: "Activity diagrams, Use Case diagrams, Sequence diagrams, Swimlane flowcharts." },
      { name: "Requirements Documentation (BRD / FSD)", category: "Documentation", priority: "MUST LEARN", description: "Structured business, functional, and non-functional specifications." },
      { name: "SQL for Business Analysis", category: "Data Querying", priority: "MUST LEARN", description: "Writing queries to validate business data, churn numbers, and KPIs." },
      { name: "Jira & Confluence", category: "Agile Tools", priority: "MUST LEARN", description: "Managing backlogs, sprint boards, epics, and engineering documentation." },
      { name: "Data Visualization & Wireframing (Figma / Balsamiq)", category: "UI Mockups", priority: "HIGH PRIORITY", description: "Low-fidelity wireframes to visualize UI requirements." },
      { name: "User Acceptance Testing (UAT)", category: "Quality", priority: "HIGH PRIORITY", description: "Writing UAT test plans and managing user sign-off." },
      { name: "Power BI / Excel for Business Metrics", category: "Analytics", priority: "HIGH PRIORITY", description: "Creating executive KPI reports and trend summaries." }
    ],
    tools: [
      { name: "Jira & Confluence", priority: "MUST LEARN", purpose: "Agile backlog tracking and requirements documentation." },
      { name: "Lucidchart / Draw.io / Miro", priority: "MUST LEARN", purpose: "BPMN process flows and UML diagrams." },
      { name: "Microsoft Excel & SQL", priority: "MUST LEARN", purpose: "Data exploration and requirement validation." },
      { name: "Balsamiq / Figma", priority: "HIGH PRIORITY", purpose: "Low-fidelity UI wireframing." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "SDLC & Requirements Elicitation", topics: ["Software Development Life Cycle: Waterfall vs Agile Scrum", "Requirements Elicitation techniques: Stakeholder Interviews, Surveys, Workshops", "Writing SMART business objectives and defining Scope (In-Scope vs Out-of-Scope)"], milestone: "Draft a comprehensive Business Requirement Document (BRD) for an online retail banking feature." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Process Modeling (BPMN) & User Stories", topics: ["Business Process Model and Notation (BPMN 2.0): Events, Gateways, Activities, Pools/Lanes", "UML Diagrams: Use Case Diagrams, Sequence Diagrams, State Diagrams", "Writing Agile User Stories with Gherkin Acceptance Criteria (Given-When-Then)"], milestone: "Create complete BPMN As-Is and To-Be process workflows and 15 user stories in Jira." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Jira, Confluence & Wireframing", topics: ["Setting up Scrum boards, Epics, Tasks, and Bugs in Jira", "Authoring Product Requirement Documents (PRDs) in Confluence", "Creating wireframes with Balsamiq to validate UX flows"], milestone: "Set up an end-to-end Jira project with epics, sprint backlog, and Confluence documentation." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "SQL & Data Validation for BAs", topics: ["SQL for data verification: JOINs, Aggregations, GROUP BY, NULL handling", "Validating business rules against actual database records", "Gap Analysis (Current State vs Target State) and SWOT analysis"], milestone: "Conduct a data-backed Gap Analysis for an enterprise ERP system upgrade." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "User Acceptance Testing (UAT) & Sign-Off", topics: ["Developing UAT test scenarios and test cases mapped to business requirements", "Managing defect triage meetings and severity classifications", "Facilitating stakeholder sign-off and change management"], milestone: "Lead a simulated UAT cycle with test cases, defect logs, and final sign-off documentation." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Real-World Business Analysis Case Studies", topics: ["FinTech Loan Origination System BA Case Study", "Healthcare Patient Management Portal BRD & Wireframes", "E-Commerce Checkout Optimization Requirements"], milestone: "Complete 3 comprehensive Business Analysis portfolio case studies." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "BA Portfolio & Documentation Showcase", topics: ["Publishing anonymized BRDs, User Stories, and BPMN process flows on GitHub/LinkedIn", "Documenting business case studies detailing ROI and process improvements", "Clean presentation decks"], milestone: "A professional Business Analyst portfolio showcasing BRDs, wireframes, and BPMN flows." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "BA Scenario Interviews", topics: ["How do you handle conflicting requirements from two senior stakeholders?", "Walk through how you write acceptance criteria using the Given-When-Then format", "What is the difference between a Functional Requirement and a Non-Functional Requirement?", "How do you handle scope creep during an active development sprint?"], milestone: "Ace technical Business Analyst behavioral and case study interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning ECBA (Entry Certificate in Business Analysis) from IIBA", "Business Analyst resume optimization", "Mock interviews"], milestone: "Secure employment as an Associate / Junior Business Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "Digital Banking Mobile App - Comprehensive BRD & User Stories", tech: ["Jira", "Confluence", "BPMN", "UML", "Balsamiq"], description: "Full Business Requirement Document and 20+ Agile user stories with Gherkin acceptance criteria for biometric login and peer-to-peer transfers." },
      { tier: "Intermediate", title: "Supply Chain Order-to-Cash Process Optimization Case Study", tech: ["Lucidchart", "BPMN 2.0", "SQL", "Gap Analysis", "Excel"], description: "As-Is vs To-Be business process mapping for order fulfillment, identifying bottlenecks, reducing lead time by 35%, and defining SQL validation queries." },
      { tier: "Production / Capstone", title: "Healthcare Telemedicine Platform - Complete PRD, Wireframes & UAT Suite", tech: ["Figma", "Jira", "Confluence", "UAT Test Rail", "SQL"], description: "Complete end-to-end IT BA deliverable: Product Requirement Document, interactive Figma wireframes, API requirements, and 50 UAT test cases." }
    ],
    certifications: [
      { name: "Entry Certificate in Business Analysis (ECBA)", issuer: "IIBA" },
      { name: "Professional Scrum Product Owner I (PSPO I) / PMI-PBA", issuer: "Scrum.org / PMI" }
    ],
    interviewTopics: [
      { category: "Business Analysis Methodologies", topics: ["Explain the difference between a BRD (Business Requirement Document) and an FSD (Functional Specification Document)", "How do you elicit requirements from a difficult or uncommunicative stakeholder?", "What are Non-Functional Requirements (NFRs) and why are they critical (Performance, Security, Scalability)?", "How do you prevent and manage Scope Creep during an active software project?"] }
    ],
    relatedRoles: ["Systems Analyst", "Product Analyst", "Technical Product Manager", "IT Consultant"]
  },

  {
    id: "systems-analyst",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Systems Analyst",
    slug: "systems-analyst",
    badge: "High Demand",
    shortDescription: "Translates business requirements into technical system specifications, data flows, and API architectures.",
    description: "A Systems Analyst bridges the technical gap between Business Analysts and Software Engineers. They analyze existing technical architectures, design data flow diagrams (DFD), specify API contracts, database schemas, and system integration points.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "CS/IT"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹20 - ₹38+ LPA" },
    responsibilities: [
      "Analyze existing IT systems, legacy architectures, and technical integration constraints.",
      "Translate business user stories into detailed Technical Specification Documents (TSDs) and API contracts.",
      "Design Data Flow Diagrams (DFD), System Architecture diagrams, and Entity-Relationship schemas.",
      "Evaluate software solutions, commercial off-the-shelf (COTS) products, and SaaS integrations.",
      "Coordinate with developers, QA engineers, and database administrators to ensure system integrity."
    ],
    prerequisites: [
      { name: "Technical IT Foundation", desc: "Software architecture, databases, APIs, networking, and server infrastructure.", required: true },
      { name: "System Modeling Skills", desc: "UML diagrams, Data Flow Diagrams (DFDs), Entity-Relationship Diagrams (ERDs).", required: true },
      { name: "SQL & Data Analysis", desc: "Querying databases to understand schemas and data relationships.", required: true },
      { name: "Technical Communication", desc: "Writing clear technical specifications for development teams.", required: true }
    ],
    technologies: [
      { name: "System Architecture & Integration", category: "Architecture", priority: "MUST LEARN", description: "REST APIs, SOAP, Webhooks, Message Queues, Microservices vs Monolith." },
      { name: "UML & Data Flow Diagrams (DFD)", category: "System Modeling", priority: "MUST LEARN", description: "Sequence diagrams, Component diagrams, Class diagrams, Level 0/1/2 DFDs." },
      { name: "Relational Database Design & SQL", category: "Database", priority: "MUST LEARN", description: "Schema modeling, foreign keys, query analysis, data dictionaries." },
      { name: "API Specification (OpenAPI / Swagger)", category: "API Design", priority: "MUST LEARN", description: "Defining JSON schemas, endpoints, request/response models, error codes." },
      { name: "Software Development Lifecycle (SDLC)", category: "Process", priority: "MUST LEARN", description: "Agile, Scrum, Waterfall, CI/CD deployment pipelines." },
      { name: "Cloud & SaaS Architecture Basics", category: "Cloud", priority: "HIGH PRIORITY", description: "Understanding AWS/Azure services, cloud storage, authentication (OAuth2)." },
      { name: "Cost-Benefit & Feasibility Analysis", category: "Strategy", priority: "HIGH PRIORITY", description: "Evaluating Technical, Economic, Operational, and Schedule feasibility." }
    ],
    tools: [
      { name: "Lucidchart / Draw.io / Enterprise Architect", priority: "MUST LEARN", purpose: "Creating UML, DFD, and architecture blueprints." },
      { name: "Postman / Swagger Editor", priority: "MUST LEARN", purpose: "Designing and testing API contracts." },
      { name: "DBeaver / SSMS", priority: "MUST LEARN", purpose: "Database schema inspection and querying." },
      { name: "Jira & Confluence", priority: "MUST LEARN", purpose: "Technical specifications management." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "System Modeling & DFDs", topics: ["Data Flow Diagrams (Context Level, Level 1, Level 2 DFDs)", "UML Component, Sequence, and Deployment Diagrams", "Creating comprehensive Data Dictionaries and Entity-Relationship Diagrams"], milestone: "Design a complete Level 1 DFD and UML sequence diagram for a hotel reservation system." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "API Design & Technical Specifications", topics: ["RESTful API architecture principles, HTTP methods, headers, and status codes", "Authoring OpenAPI 3.0 (Swagger) specifications with JSON schemas", "Writing Technical Specification Documents (TSDs) mapping business rules to system logic"], milestone: "Write an OpenAPI 3.0 specification and TSD for an e-commerce payment integration." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Postman & Database Tools", topics: ["Postman API contract testing and mock servers", "Database schema inspection, identifying data anomalies with SQL queries"], milestone: "Create a mock API server in Postman validating request/response payload schemas." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "System Integration & Feasibility Analysis", topics: ["System Integration patterns: Point-to-point, Enterprise Service Bus (ESB), API Gateways", "Authentication and Authorization integration (OAuth2, SAML, JWT)", "Conducting Technical and Economic Feasibility Studies (Build vs Buy analysis)"], milestone: "Conduct a Build vs Buy evaluation comparing custom billing vs Stripe/Chargebee integration." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Legacy Migration & Cloud Integration", topics: ["Legacy System Modernization strategies", "Designing batch data synchronization jobs between legacy databases and modern APIs", "Defining Non-Functional System Requirements (SLA, Throughput, Scalability)"], milestone: "Design a technical migration blueprint transitioning a legacy on-premise system to cloud APIs." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Systems Analysis Projects", topics: ["Enterprise ERP & CRM Integration Technical Architecture", "FinTech Payment Gateway Technical System Design", "Healthcare Electronic Health Records (EHR) API Integration"], milestone: "Complete 3 comprehensive Systems Analysis portfolio projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Technical Portfolio Showcase", topics: ["GitHub repository with OpenAPI specifications, Swagger UI links, and UML blueprints", "Technical architecture case study whitepapers", "Detailed system flow documentation"], milestone: "A professional Systems Analyst portfolio with documented architecture designs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Systems Technical Scenarios", topics: ["How do you design a robust integration between two systems with incompatible data formats?", "Explain the difference between a Level 0 Context Diagram and a Level 1 DFD", "How do you specify non-functional requirements such as 99.9% uptime and <200ms latency?", "Explain how OAuth 2.0 Authorization Code flow works across client, server, and auth provider"], milestone: "Ace technical systems analyst interviews and architectural whiteboarding." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Systems Analyst resume highlighting technical specs, UML modeling, and API design", "Applying to IT consultancies (Accenture, Capgemini), banking tech, and enterprise software firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Systems Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "Hospital Patient Management - Technical Specification & API Contract", tech: ["OpenAPI / Swagger", "UML", "JSON Schema", "Postman"], description: "Complete technical specification document including OpenAPI 3.0 contract, sequence diagrams, and schema models." },
      { tier: "Intermediate", title: "Legacy Banking Core & Modern Mobile App Integration Blueprint", tech: ["Draw.io", "Data Flow Diagrams", "REST", "SOAP", "SQL"], description: "Technical architecture blueprint bridging a legacy COBOL/SQL database with a modern mobile banking REST API." },
      { tier: "Production / Capstone", title: "Enterprise Multi-Vendor E-Commerce Platform - System Architecture Design", tech: ["Enterprise Architect", "Microservices", "Kafka", "PostgreSQL", "OAuth2"], description: "Comprehensive technical system design covering order routing, inventory sync via message queues, and payment gateways." }
    ],
    certifications: [
      { name: "Certified Systems Engineering Professional (CSEP) Foundation", issuer: "INCOSE" },
      { name: "CompTIA IT Fundamentals / Project+", issuer: "CompTIA" }
    ],
    interviewTopics: [
      { category: "System Design & Integration", topics: ["How do you handle asynchronous communication between systems using message queues?", "Difference between a Class Diagram, Component Diagram, and Deployment Diagram in UML", "How do you ensure data integrity during real-time database synchronization?", "What steps do you take when conducting a technical feasibility study for a new software product?"] }
    ],
    relatedRoles: ["Business Analyst", "Technical Product Manager", "Solutions Consultant", "Software Engineer"]
  },

  {
    id: "it-consultant",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "IT Consultant",
    slug: "it-consultant",
    badge: "High Demand",
    shortDescription: "Advises enterprise clients on technology strategy, digital transformation, and IT modernization.",
    description: "An IT Consultant advises organizations on how best to use information technology to achieve their business objectives. They assess existing infrastructure, recommend modern software and cloud solutions, oversee digital transformations, and optimize IT processes.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "MBA (IT)"],
    salaryRange: { entry: "₹5 - ₹9 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹45+ LPA" },
    responsibilities: [
      "Assess clients' technology infrastructure, software systems, and IT business alignment.",
      "Formulate digital transformation roadmaps, technology modernization strategies, and vendor selections.",
      "Conduct Total Cost of Ownership (TCO) and Return on Investment (ROI) analyses.",
      "Manage client stakeholder relationships and lead technology implementation workstreams.",
      "Deliver executive presentations, recommendations, and strategic deliverables."
    ],
    prerequisites: [
      { name: "Broad Technology Knowledge", desc: "Understanding Cloud, Cybersecurity, Enterprise Software (ERP/CRM), and Data.", required: true },
      { name: "Consulting & Communication Skills", desc: "Executive presentation, structuring problem statements, stakeholder management.", required: true },
      { name: "Business & Financial Acumen", desc: "Understanding CapEx vs OpEx, ROI calculation, business operations.", required: true },
      { name: "Project Management Basics", desc: "Agile, Waterfall, milestones, deliverable tracking.", required: true }
    ],
    technologies: [
      { name: "Digital Transformation Frameworks", category: "Strategy", priority: "MUST LEARN", description: "Legacy modernization, cloud adoption, workflow automation, customer experience." },
      { name: "Enterprise Systems (ERP & CRM - SAP / Salesforce)", category: "Enterprise Apps", priority: "MUST LEARN", description: "Understanding ERP core modules (Finance, Supply Chain) and CRM workflows." },
      { name: "Cloud Strategy (AWS / Azure / GCP)", category: "Cloud Strategy", priority: "MUST LEARN", description: "Evaluating on-premise vs cloud migration trade-offs and economics." },
      { name: "TCO & ROI Financial Modeling", category: "Financial Analysis", priority: "MUST LEARN", description: "Calculating 3-5 year Total Cost of Ownership and technology investment payback periods." },
      { name: "IT Service Management (ITIL v4)", category: "IT Governance", priority: "HIGH PRIORITY", description: "Service strategy, design, transition, operation, and continual improvement." },
      { name: "Data Strategy & BI (Power BI / Tableau)", category: "Analytics", priority: "HIGH PRIORITY", description: "Advising clients on modern data stack architectures and executive KPI reporting." },
      { name: "Executive Presentation (PowerPoint / Keynote)", category: "Communication", priority: "MUST LEARN", description: "Structuring persuasive, data-backed executive slide decks (Pyramid Principle)." }
    ],
    tools: [
      { name: "Microsoft PowerPoint & Excel", priority: "MUST LEARN", purpose: "Financial modeling and executive board presentations." },
      { name: "Lucidchart / Miro", priority: "MUST LEARN", purpose: "Strategic roadmap visualization and process workshops." },
      { name: "Jira / MS Project", priority: "HIGH PRIORITY", purpose: "Project management and workstream tracking." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "IT Strategy & Consulting Frameworks", topics: ["The Consulting Process: Problem Definition, Hypothesis-Driven Analysis, Synthesis", "The Minto Pyramid Principle: Structuring clear executive communication", "Understanding Enterprise IT Architecture: Infrastructure, Applications, Data, Security"], milestone: "Structure and deliver an executive presentation solving an IT inefficiency problem." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Financial Modeling (TCO & ROI)", topics: ["CapEx vs OpEx in technology investments", "Building 5-year Total Cost of Ownership (TCO) models in Excel", "Calculating Return on Investment (ROI), Net Present Value (NPV), and Payback Period"], milestone: "Build a comprehensive Excel TCO model comparing on-premise servers with AWS Cloud." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Miro, PowerPoint & Workshop Facilitation", topics: ["Facilitating virtual discovery workshops with Miro", "Designing professional consulting slide decks with structured frameworks (2x2 matrices, flowcharts)"], milestone: "Design a 15-slide executive digital transformation pitch deck." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Enterprise Software & Cloud Strategy", topics: ["Evaluating Enterprise Software (ERP, CRM: SAP, Salesforce, Microsoft Dynamics)", "Cloud Adoption Frameworks (AWS CAF / Microsoft Cloud Adoption Framework)", "Vendor Selection & RFP (Request for Proposal) evaluation methodologies"], milestone: "Author an RFP evaluation scoring matrix for selecting an enterprise CRM vendor." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "IT Governance (ITIL) & Change Management", topics: ["ITIL 4 Service Value System (SVS), Incident, Problem, and Change Enablement", "Organizational Change Management (Kotter’s 8-Step Change Model, ADKAR)", "Cybersecurity Risk Management governance basics (NIST CSF)"], milestone: "Create a change management plan for rolling out a new enterprise ERP across 5,000 users." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Strategic Consulting Case Studies", topics: ["Retail Bank Digital Banking Transformation Strategy", "Manufacturing Enterprise Cloud Migration Roadmap & Business Case", "Healthcare Provider Telehealth Technology Assessment"], milestone: "Complete 3 comprehensive IT consulting case study deliverables." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Consulting Showcase", topics: ["Publishing strategic technology whitepapers and case studies on LinkedIn", "SlideShare / GitHub repository with financial models and transformation roadmaps", "Demonstrating business impact and ROI metrics"], milestone: "A professional IT Consulting portfolio with executive slide decks and financial models." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Case Interviews (Big 4 & Tech Consultancies)", topics: ["Consulting Case Interviews: Market sizing, technology modernization cases", "How do you convince a skeptical CFO to approve a $2M cloud migration budget?", "How do you evaluate whether a company should build custom software or buy SaaS?", "Structure a framework for selecting between AWS, Azure, and Google Cloud"], milestone: "Ace case study and partner rounds at consulting firms (Deloitte, PwC, EY, KPMG, Accenture)." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Consulting Placement", topics: ["Consulting resume highlighting business impact, financial ROI, and strategic leadership", "Targeting IT consulting firms, boutique advisories, and enterprise strategy teams", "Mock case interviews"], milestone: "Secure employment as an Associate / Junior IT Consultant." }
    ],
    projects: [
      { tier: "Beginner", title: "Enterprise On-Premise vs Cloud TCO & ROI Financial Model", tech: ["Excel", "Financial Modeling", "AWS Pricing", "PowerPoint"], description: "Comprehensive 5-year financial model evaluating migration of 100 on-premise servers to AWS with ROI and payback analysis." },
      { tier: "Intermediate", title: "Enterprise CRM Selection & RFP Scoring Framework", tech: ["Confluence", "Excel", "Salesforce vs HubSpot vs Dynamics", "PowerPoint"], description: "Complete RFP vendor evaluation document, stakeholder weighting matrix, and recommendation presentation." },
      { tier: "Production / Capstone", title: "Retail Bank Digital Transformation Strategy & 3-Year Roadmap", tech: ["Miro", "PowerPoint", "ITIL v4", "Cloud Adoption Framework", "Financial Modeling"], description: "Executive consulting deliverable: legacy modernization strategy, cloud banking architecture roadmap, and change management plan." }
    ],
    certifications: [
      { name: "ITIL 4 Foundation", issuer: "AXELOS / PeopleCert" },
      { name: "AWS Certified Cloud Practitioner / Solutions Architect", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Consulting Frameworks", topics: ["Walk through a structured framework for analyzing a legacy system modernization decision", "How do you calculate Total Cost of Ownership (TCO) including hidden costs like training and downtime?", "Explain the ITIL 4 Service Value Chain and how it improves IT service delivery", "How do you manage client resistance during a major enterprise software rollout?"] }
    ],
    relatedRoles: ["Technical Consultant", "Solutions Consultant", "Business Analyst", "Technical Product Manager"]
  },

  {
    id: "technical-consultant",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Technical Consultant",
    slug: "technical-consultant",
    badge: "High Demand",
    shortDescription: "Customizes, integrates, and implements enterprise software solutions (SAP, Salesforce, ServiceNow) for clients.",
    description: "A Technical Consultant combines software engineering with client-facing consulting. They specialize in implementing, customizing, integrating, and configuring large-scale enterprise software platforms (Salesforce, SAP, ServiceNow, Microsoft Dynamics) to solve specific client technical challenges.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "CS/IT"],
    salaryRange: { entry: "₹5 - ₹9.5 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹45+ LPA" },
    responsibilities: [
      "Implement, configure, and customize enterprise platforms (Salesforce Apex/LWC, ServiceNow JavaScript, SAP ABAP/Java).",
      "Develop custom integrations between client systems using REST APIs, webhooks, and ETL tools.",
      "Conduct technical discovery workshops to understand client requirements and existing system limitations.",
      "Write custom business logic, automated workflows, and data migration scripts.",
      "Deliver technical documentation and train client administrators on platform maintenance."
    ],
    prerequisites: [
      { name: "Programming Fundamentals", desc: "Object-oriented programming (JavaScript, Python, Java, or C#).", required: true },
      { name: "Web & API Technologies", desc: "REST APIs, JSON, XML, HTTP headers, OAuth 2.0.", required: true },
      { name: "Relational Databases & SQL", desc: "Queries, tables, relationships, data extraction and loading.", required: true },
      { name: "Client-Facing Communication", desc: "Explaining technical concepts clearly to non-technical stakeholders.", required: true }
    ],
    technologies: [
      { name: "Enterprise Platforms (Salesforce / ServiceNow / SAP)", category: "Platform Core", priority: "MUST LEARN", description: "Platform architecture, data model, administration, and custom developer tools." },
      { name: "Platform Scripting (JavaScript / Apex / Python)", category: "Language", priority: "MUST LEARN", description: "Server-side and client-side scripting for platform customization." },
      { name: "API Integration & Webhooks (REST / SOAP)", category: "Integration", priority: "MUST LEARN", description: "Connecting third-party systems via authenticated REST endpoints and webhooks." },
      { name: "Relational Data Modeling & SOQL/SQL", category: "Database", priority: "MUST LEARN", description: "Custom objects, schema relationships, data loader utilities." },
      { name: "Workflow Automation & Business Rules", category: "Automation", priority: "HIGH PRIORITY", description: "Platform flow builders, trigger logic, event-driven notifications." },
      { name: "Data Migration (ETL Tools & Python)", category: "Data Migration", priority: "HIGH PRIORITY", description: "Cleaning, mapping, and migrating legacy data into modern platforms." },
      { name: "Testing & Deployment (Sandbox to Prod)", category: "DevOps", priority: "HIGH PRIORITY", description: "Change sets, CI/CD deployment pipelines, automated test coverage." }
    ],
    tools: [
      { name: "Postman", priority: "MUST LEARN", purpose: "Testing API integrations and webhook payloads." },
      { name: "VS Code & Platform CLI Extensions", priority: "MUST LEARN", purpose: "Code development for Salesforce / ServiceNow." },
      { name: "Data Loader / ETL Tools", priority: "MUST LEARN", purpose: "Bulk data import and export operations." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Platform Architecture & Data Model", topics: ["Understanding Enterprise SaaS platform architecture (Multitenancy, Metadata-driven architecture)", "Creating Custom Objects, Fields, Relationships (Lookup, Master-Detail)", "Configuring Role Hierarchy, Sharing Rules, and Field-Level Security"], milestone: "Build a custom data model with security permissions on a developer platform account." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Platform Scripting & Business Logic", topics: ["Writing custom backend logic (Apex / ServiceNow Scripting / Python)", "Trigger Frameworks (Before Insert, After Update, handling bulk records)", "Writing unit test classes and maintaining 85%+ test code coverage"], milestone: "Write a custom trigger automating record validation and automated task creation." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "API Integration with Postman", topics: ["Authentication with OAuth 2.0 (Connected Apps / Service Principals)", "Consuming external REST APIs and parsing JSON responses within the platform"], milestone: "Build an API integration pulling live currency exchange rates into customer accounts." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Modern UI Components & Workflows", topics: ["Building responsive custom UI components (Lightning Web Components - LWC / React)", "Declarative process automation with Flow Builder", "Bulk Data Migration: Data mapping, cleansing, and loading with Data Loader"], milestone: "Build a custom interactive data table component with live filtering and bulk editing." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Enterprise Integrations & CI/CD", topics: ["Bi-directional synchronization using Webhooks and Event-Driven Architecture (Platform Events)", "Managing Sandbox environments, branching, and automated deployments with Git", "Performance tuning and governor limit optimization"], milestone: "Implement an asynchronous event-driven integration processing 10,000 records without hitting limits." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Client Implementation Projects", topics: ["Customer Service Automation Portal", "Financial Billing Integration with External Payment Gateway", "Automated Employee Onboarding Workflow"], milestone: "Complete 3 comprehensive technical consulting implementation projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Consultant Portfolio & Certifications", topics: ["Publishing open-source platform components and integration code on GitHub", "Documenting technical architecture diagrams and integration specs", "Showcasing platform developer certifications"], milestone: "A professional Technical Consultant portfolio with code repos and verified badges." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Platform Technical Interviews", topics: ["How do you handle bulkification in trigger code to avoid platform governor limits?", "Explain the difference between a Master-Detail relationship and a Lookup relationship", "How do you troubleshoot a failed asynchronous job or webhook timeout?", "Walk through your step-by-step methodology for migrating 500k legacy records safely"], milestone: "Ace technical consultant coding and architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Consulting Placements", topics: ["Earning Platform Developer I or ServiceNow Certified Application Developer", "Technical Consultant resume optimization", "Mock interviews with consulting leads"], milestone: "Secure employment as an Associate / Junior Technical Consultant." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Customer Support SLA & Escalation System", tech: ["Platform Workflows", "JavaScript / Apex", "Data Model", "Email Alerts"], description: "Custom business logic tracking case response times and automatically escalating overdue tickets to managers." },
      { tier: "Intermediate", title: "Interactive Client Data Table & Analytics Component", tech: ["LWC / React", "JavaScript", "SOQL / SQL", "REST API"], description: "Custom interactive web component displaying live financial metrics with inline editing and export to Excel." },
      { tier: "Production / Capstone", title: "Real-Time Bi-Directional ERP & CRM Integration Engine", tech: ["OAuth 2.0", "Webhooks", "Platform Events", "REST API", "Python / Node.js"], description: "Automated synchronization pipeline syncing orders and invoice statuses between CRM and external ERP with retry logic." }
    ],
    certifications: [
      { name: "Salesforce Certified Platform Developer I (PD1)", issuer: "Salesforce" },
      { name: "ServiceNow Certified Application Developer (CAD)", issuer: "ServiceNow" }
    ],
    interviewTopics: [
      { category: "Platform & Integration", topics: ["What is 'Bulkification' and why is it critical when writing code for multitenant platforms?", "Explain the difference between Synchronous and Asynchronous processing (Future methods, Queueable, Batch)", "How does OAuth 2.0 Web Server flow authenticate an external API client?", "How do you resolve record locking and concurrency errors in enterprise platforms?"] }
    ],
    relatedRoles: ["Solutions Consultant", "IT Consultant", "Software Engineer", "Systems Analyst"]
  },

  {
    id: "solutions-consultant",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Solutions Consultant",
    slug: "solutions-consultant",
    badge: "High Demand",
    shortDescription: "Partners with sales and engineering to architect technical product demos, PoCs, and solution designs.",
    description: "A Solutions Consultant (Pre-Sales Engineer / Solutions Architect) bridges technical engineering and enterprise sales. They lead technical discovery with prospective enterprise clients, design custom technical solutions, build Proofs of Concept (PoCs), and deliver compelling product demonstrations.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹12 LPA", mid: "₹13 - ₹24 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Lead technical discovery sessions with enterprise CTOs, CIOs, and engineering leaders.",
      "Architect custom technical solutions and integration designs solving specific client pain points.",
      "Build custom Proof of Concept (PoC) software integrations and tailored demo environments.",
      "Author technical responses to enterprise RFPs (Request for Proposals) and security questionnaires.",
      "Overcome technical objections and demonstrate the clear ROI of the proposed technology solution."
    ],
    prerequisites: [
      { name: "Strong Technical Foundation", desc: "Software architecture, APIs, cloud, databases, security.", required: true },
      { name: "Coding & Prototyping Skills", desc: "JavaScript, Python, React, Postman for building rapid PoCs.", required: true },
      { name: "Persuasive Presentation Skills", desc: "Storytelling, demonstrating value, active listening.", required: true },
      { name: "Business & Sales Acumen", desc: "Understanding the enterprise B2B sales cycle and customer ROI.", required: true }
    ],
    technologies: [
      { name: "Solution Architecture & API Design", category: "Architecture", priority: "MUST LEARN", description: "Designing scalable integration blueprints between client systems and SaaS platforms." },
      { name: "Rapid Prototyping (Python / JS / React)", category: "Prototyping", priority: "MUST LEARN", description: "Building functioning customized PoCs in hours to demonstrate product value." },
      { name: "API & Webhook Testing (Postman)", category: "Integration", priority: "MUST LEARN", description: "Live debugging, payload manipulation, and demonstration." },
      { name: "Enterprise Security & Compliance", category: "Security", priority: "HIGH PRIORITY", description: "Answering SOC2, ISO 27001, GDPR, Single Sign-On (SAML/SSO) requirements." },
      { name: "Cloud Platforms (AWS / Azure / GCP)", category: "Cloud", priority: "HIGH PRIORITY", description: "Architecting cloud deployment options (VPC peering, PrivateLink)." },
      { name: "Technical Storytelling & Demo Delivery", category: "Sales Engineering", priority: "MUST LEARN", description: "Delivering value-driven product demos focused on business outcomes, not feature lists." }
    ],
    tools: [
      { name: "Postman", priority: "MUST LEARN", purpose: "API demonstration and PoC testing." },
      { name: "Figma / Draw.io", priority: "MUST LEARN", purpose: "Creating professional solution architecture diagrams." },
      { name: "VS Code & Git", priority: "MUST LEARN", purpose: "Rapid demo and PoC coding." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Pre-Sales Engineering & Technical Discovery", topics: ["The Pre-Sales Solutions Engineer role in the B2B SaaS Sales Cycle", "Mastering Technical Discovery: Asking probing questions to uncover root pain points", "Mapping customer technical requirements to solution capabilities"], milestone: "Conduct a simulated technical discovery session and create a Customer Requirements Matrix." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Value-Driven Product Demonstrations", topics: ["The 'Great Demo!' methodology: Leading with the business outcome (The 'Do' over the 'Tell')", "Tailoring demo data and branding to the client's industry", "Handling tough technical questions and security objections"], milestone: "Deliver a live 15-minute tailored product demo solving a specific customer use case." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Rapid PoC Development & Postman", topics: ["Building interactive Postman collections demonstrating complex API workflows", "Creating customized demo web frontends with React and Tailwind"], milestone: "Build a functioning API demo workspace with pre-configured requests and visualizers." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Solution Architecture & Integration Blueprints", topics: ["Designing end-to-end Solution Architecture Diagrams (C4 model)", "Integration patterns: Real-time Webhooks, Batch ETL, Message Brokers", "Answering enterprise Security Questionnaires (SSO, Data Encryption, Compliance)"], milestone: "Design an enterprise integration architecture diagram and complete a security review." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Proof of Concept (PoC) Management", topics: ["Defining clear, measurable Success Criteria for PoC evaluations", "Managing technical trial timelines and unblocking developer roadblocks", "Writing compelling Technical Win summaries and executive business cases"], milestone: "Manage a simulated 2-week enterprise PoC leading to documented success criteria sign-off." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Solutions Engineering Portfolio", topics: ["Enterprise Fintech API Integration Solution Blueprint", "Customized E-Commerce AI Search Demo & PoC", "Healthcare Security & Compliance Architecture Package"], milestone: "Deliver 3 comprehensive Solutions Consulting packages." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "SE Portfolio & Demo Videos", topics: ["GitHub repository with PoC prototypes and Postman collections", "Video recording delivering a 5-minute technical product pitch", "Documented solution architecture blueprints"], milestone: "A professional Solutions Consultant portfolio with video demos and architecture docs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Demo & Solution Pitch Rounds", topics: ["Delivering a live 30-minute product demonstration to an interview panel (Simulated customer)", "Handling live curveball questions (e.g. 'Can your software do X?' when it cannot)", "How do you explain the difference between REST and WebSockets to a non-technical VP?"], milestone: "Ace technical demo and presentation interview rounds at top SaaS companies." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "SaaS Industry Hiring", topics: ["Solutions Consultant / Sales Engineer resume emphasizing technical wins and communication", "Applying to high-growth SaaS companies (Stripe, Twilio, Datadog, Snowflake)", "Mock demo interviews"], milestone: "Secure employment as an Associate / Junior Solutions Consultant." }
    ],
    projects: [
      { tier: "Beginner", title: "Interactive API Demonstration Workspace & Video Pitch", tech: ["Postman", "REST API", "Markdown", "Loom Video"], description: "Complete Postman workspace with mock servers, automated tests, visualizers, and a 5-minute video pitch." },
      { tier: "Intermediate", title: "Tailored Proof-of-Concept Integration Portal", tech: ["React", "FastAPI", "Webhooks", "Tailwind CSS", "OAuth2"], description: "Rapidly engineered working prototype integrating a client's CRM with a SaaS API in a branded portal." },
      { tier: "Production / Capstone", title: "Enterprise Solution Architecture Blueprint & RFP Package", tech: ["Lucidchart", "Security Compliance Docs", "OpenAPI", "Architecture Whitepaper"], description: "Complete enterprise pre-sales deliverable: C4 architecture diagram, security compliance responses, and measurable PoC plan." }
    ],
    certifications: [
      { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
      { name: "Pre-Sales Academy / Certified PreSales Professional", issuer: "PreSales Collective" }
    ],
    interviewTopics: [
      { category: "Pre-Sales & Technical Demos", topics: ["How do you structure a product demonstration to avoid boring the client with features?", "What do you say when a prospective client asks for a feature your product does not support?", "How do you define and enforce measurable Success Criteria during a Proof of Concept (PoC)?", "Explain how you would architect a secure cloud integration for a heavily regulated healthcare client"] }
    ],
    relatedRoles: ["Technical Consultant", "IT Consultant", "Cloud Architect", "Technical Product Manager"]
  },

  {
    id: "product-analyst",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Product Analyst",
    slug: "product-analyst",
    badge: "High Demand",
    shortDescription: "Analyzes user product behavior, conversion funnels, retention cohorts, and A/B experiments.",
    description: "A Product Analyst sits at the intersection of product management, data analytics, and user experience. They analyze user behavior, feature adoption, onboarding drop-offs, conversion funnels, and design A/B experiments to guide product strategy and growth.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (Data/CS)"],
    salaryRange: { entry: "₹5 - ₹9 LPA", mid: "₹10 - ₹19 LPA", senior: "₹20 - ₹40+ LPA" },
    responsibilities: [
      "Track, analyze, and optimize user funnels, retention cohorts, and feature engagement metrics.",
      "Design, execute, and evaluate A/B and multivariate experiments for statistical significance.",
      "Define and track North Star metrics, Activation rates, and Customer Lifetime Value (LTV).",
      "Write advanced SQL queries and Python scripts to extract insights from raw event streams.",
      "Collaborate with Product Managers and Designers to recommend feature optimizations based on data."
    ],
    prerequisites: [
      { name: "SQL & Querying Mastery", desc: "Window functions, aggregate metrics, cohort analysis in SQL.", required: true },
      { name: "Statistics & Experimentation", desc: "Hypothesis testing, p-values, sample size calculation, confidence intervals.", required: true },
      { name: "Product Sense", desc: "Understanding user funnels, onboarding flows, churn factors, and engagement loops.", required: true },
      { name: "Data Visualization", desc: "Building clear dashboards in Mixpanel, Amplitude, Tableau, or Power BI.", required: true }
    ],
    technologies: [
      { name: "Advanced SQL (PostgreSQL / BigQuery / Snowflake)", category: "Data Querying", priority: "MUST LEARN", description: "Writing complex cohort queries, retention matrices, window functions." },
      { name: "Product Analytics Tools (Mixpanel / Amplitude / PostHog)", category: "Product Analytics", priority: "MUST LEARN", description: "Funnel analysis, user journeys, retention charts, event taxonomy." },
      { name: "A/B Testing & Statistical Analysis", category: "Experimentation", priority: "MUST LEARN", description: "Null hypothesis, t-tests, chi-square, sample sizing, statistical power." },
      { name: "Python for Product Analytics", category: "Data Science", priority: "MUST LEARN", description: "Pandas, NumPy, Seaborn for deep exploratory data analysis." },
      { name: "Event Tracking & Instrumentation", category: "Telemetry", priority: "HIGH PRIORITY", description: "Defining event naming conventions (Segment, Segment Protocols, GA4)." },
      { name: "BI Dashboards (Tableau / Power BI)", category: "Reporting", priority: "HIGH PRIORITY", description: "Building product health KPI dashboards for executive review." },
      { name: "Cohort & Churn Analysis", category: "Growth Metrics", priority: "MUST LEARN", description: "Day 1/7/30 retention curves, churn hazard modeling, LTV forecasting." }
    ],
    tools: [
      { name: "Mixpanel / Amplitude", priority: "MUST LEARN", purpose: "Tracking user funnels, cohorts, and behavioral events." },
      { name: "BigQuery / Snowflake", priority: "MUST LEARN", purpose: "Querying raw behavioral event datasets with SQL." },
      { name: "JupyterLab & Python", priority: "MUST LEARN", purpose: "Statistical testing and exploratory analysis." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Product Metrics & Advanced SQL", topics: ["Core Product Metrics: DAU/MAU Ratio (Stickiness), Activation Rate, Retention, Churn, LTV", "SQL for Product Analytics: Building Funnel Drop-off queries, Sessionization queries", "Building Day 1, Day 7, Day 30 Retention Matrices using SQL self-joins and window functions"], milestone: "Write a SQL query calculating 30-day cohort retention curves on a 500k-row user event dataset." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Amplitude / Mixpanel & Event Tracking", topics: ["Setting up Event Taxonomy (Noun + Verb format: `button_clicked`, `order_completed`)", "Building Conversion Funnels and identifying primary drop-off stages", "Creating Behavioral Cohorts (e.g. users who shared 3 files in their first week)"], milestone: "Configure a complete event tracking plan and Mixpanel funnel dashboard for a SaaS product." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "A/B Testing Statistical Foundations", topics: ["Formulating Hypotheses, determining Minimum Detectable Effect (MDE) and Sample Size", "Evaluating p-values, Alpha (Type I Error), Beta (Type II Error), and Statistical Power (80%)"], milestone: "Calculate the exact sample size needed for an A/B test detecting a 5% conversion uplift." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Python Statistical Experiment Evaluation", topics: ["Analyzing A/B test results in Python (T-Test, Two-Proportion Z-Test, Mann-Whitney U)", "Detecting Sample Ratio Mismatch (SRM) and Novelty Effects", "Segmenting experiment results by user demographic and device type"], milestone: "Write a Python script that ingests raw A/B test data, checks for SRM, and computes p-values." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "User Segmentation & Feature Adoption", topics: ["Identifying the 'Aha! Moment' (e.g. Slack: 2,000 messages, Twitter: follow 30 users)", "Feature adoption curves and cannibalization analysis", "Building an Executive Product Health Dashboard in Tableau/Power BI"], milestone: "Identify the statistically validated 'Aha! Moment' for an e-commerce platform using regression." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "End-to-End Product Analytics Case Studies", topics: ["Subscription SaaS Onboarding Funnel Optimization", "E-Commerce Cart Checkout A/B Test Case Study", "Mobile App Retention Cohort Deep-Dive"], milestone: "Complete 3 comprehensive Product Analytics case study reports." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Product Analytics Portfolio", topics: ["GitHub repository with SQL queries, Jupyter statistical notebooks, and Mixpanel screenshots", "Writing Medium/Substack case studies on product growth optimization", "Clean dashboard visualizations"], milestone: "A professional Product Analyst portfolio showcasing experiment evaluations." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Product Sense & Analytical Interviews", topics: ["How do you measure the success of a new feature rollout (e.g. Instagram Stories)?", "If DAU drops by 10% overnight, how would you systematically diagnose the root cause?", "Explain Sample Ratio Mismatch (SRM) and what causes it in A/B testing", "How do you calculate Customer Lifetime Value (LTV) when churn is non-linear?"], milestone: "Ace product sense and analytical interview rounds at product companies." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Product Analytics Placement", topics: ["Product Analyst resume highlighting conversion uplifts and statistical rigor", "Applying to high-growth tech startups, B2B SaaS, and consumer apps", "Mock interviews"], milestone: "Secure employment as an Associate / Junior Product Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "SaaS User Onboarding Funnel & Drop-off Analysis", tech: ["SQL (BigQuery)", "Mixpanel", "Excel"], description: "Analyzes 5-step user signup flow, identifying a 40% drop-off at billing verification with recommendations." },
      { tier: "Intermediate", title: "Statistical Evaluation of an E-Commerce Checkout A/B Test", tech: ["Python", "SciPy", "Pandas", "Hypothesis Testing", "Seaborn"], description: "Evaluates conversion rate and average order value across 100k users, calculating statistical significance and confidence intervals." },
      { tier: "Production / Capstone", title: "Comprehensive Product Health & Retention Cohort Platform", tech: ["SQL", "Tableau Public", "Python", "Cohort Analysis", "LTV Modeling"], description: "Executive product dashboard tracking North Star metrics, 30-day retention matrices, and feature adoption curves." }
    ],
    certifications: [
      { name: "Reforge Product Analytics / Growth Series", issuer: "Reforge" },
      { name: "Google Data Analytics Professional Certificate", issuer: "Google (Coursera)" }
    ],
    interviewTopics: [
      { category: "Product Analytics & Metrics", topics: ["If a product's DAU increases while MAU remains flat, what is happening to user engagement?", "How do you select a primary metric, secondary metrics, and guardrail metrics for an A/B test?", "Explain what causes Simpson's Paradox in experiment analysis and how to prevent it", "How do you identify which user actions correlate most strongly with long-term retention?"] }
    ],
    relatedRoles: ["Data Analyst", "Technical Product Manager", "Business Analyst", "Data Scientist"]
  },

  {
    id: "technical-product-manager",
    careerFamily: "BUSINESS & TECHNOLOGY",
    roleName: "Technical Product Manager",
    slug: "technical-product-manager",
    badge: "Leadership / High Pay",
    shortDescription: "Defines product vision, technical roadmaps, API platforms, and coordinates engineering delivery.",
    description: "A Technical Product Manager (TPM / Technical PM) leads the product strategy and roadmap for deeply technical products, developer platforms, cloud infrastructure, and APIs. They work closely with software architects, engineering leads, and business executives to define requirements and drive execution.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Engineers transitioning to PM"],
    salaryRange: { entry: "₹7 - ₹14 LPA", mid: "₹15 - ₹28 LPA", senior: "₹30 - ₹65+ LPA" },
    responsibilities: [
      "Define product vision, strategic roadmap, and feature prioritization (RICE / MoSCoW framework).",
      "Author detailed Product Requirement Documents (PRDs) with technical architecture guidelines.",
      "Manage developer platform APIs, developer experience (DevEx), SDKs, and platform roadmaps.",
      "Lead cross-functional engineering teams through Agile sprints, backlog grooming, and release cycles.",
      "Track and communicate product KPIs, feature velocity, and business impact to C-level leadership."
    ],
    prerequisites: [
      { name: "Strong Software Engineering Background", desc: "Understanding system architecture, APIs, databases, cloud, and data structures.", required: true },
      { name: "Product Strategy & Prioritization", desc: "Frameworks (RICE, Kano), roadmapping, customer discovery.", required: true },
      { name: "Agile Leadership", desc: "Leading sprint ceremonies, backlog management, cross-functional coordination.", required: true },
      { name: "Data-Driven Decision Making", desc: "SQL, product analytics, A/B testing evaluation.", required: true }
    ],
    technologies: [
      { name: "Product Roadmapping & Strategy", category: "Strategy", priority: "MUST LEARN", description: "OKRs, product roadmaps, vision documents, build-vs-buy analysis." },
      { name: "Product Requirement Documents (PRDs)", category: "Documentation", priority: "MUST LEARN", description: "Writing structured, unambiguous PRDs with technical constraints." },
      { name: "API & Platform Product Management", category: "Technical PM", priority: "MUST LEARN", description: "Developer Experience (DevEx), API versioning, rate limiting, SDKs." },
      { name: "Prioritization Frameworks (RICE / Kano / MoSCoW)", category: "Prioritization", priority: "MUST LEARN", description: "Scoring Reach, Impact, Confidence, and Effort to prioritize backlogs." },
      { name: "Agile Scrum & Jira Management", category: "Execution", priority: "MUST LEARN", description: "Sprint planning, story mapping, velocity tracking, burn-down charts." },
      { name: "System Architecture Literacy", category: "Engineering Literacy", priority: "HIGH PRIORITY", description: "Evaluating trade-offs between latency, scalability, and technical debt." },
      { name: "Product Analytics & A/B Testing", category: "Data", priority: "HIGH PRIORITY", description: "Mixpanel, Amplitude, tracking adoption, funnels, and retention." }
    ],
    tools: [
      { name: "Jira & Productboard / Linear", priority: "MUST LEARN", purpose: "Roadmap planning and backlog prioritization." },
      { name: "Confluence / Notion", priority: "MUST LEARN", purpose: "Authoring PRDs and technical architecture specs." },
      { name: "Figma & Miro", priority: "MUST LEARN", purpose: "User journey mapping and low-fi wireframing." },
      { name: "Postman & SQL", priority: "HIGH PRIORITY", purpose: "Inspecting API endpoints and database metrics." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Product Strategy & Roadmapping", topics: ["The Role of a Technical Product Manager vs Standard PM vs Engineering Manager", "Defining Product Vision, North Star Metrics, and Objectives & Key Results (OKRs)", "Building Outcome-Driven Product Roadmaps (Now / Next / Later format)"], milestone: "Create a 1-year strategic product roadmap for a developer API platform." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Authoring Technical PRDs", topics: ["Components of a World-Class PRD: Problem, Scope, User Personas, Functional Specs, Non-Functional Constraints", "Defining API Requirements, Error Handling schemas, and Rate Limits", "Writing user stories with technical edge cases and acceptance criteria"], milestone: "Write a comprehensive Product Requirement Document (PRD) for a real-time Notification API." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Prioritization & Story Mapping", topics: ["RICE Framework (Reach x Impact x Confidence / Effort) in Excel/Jira", "User Story Mapping on Miro to slice releases into MVP, V1, V2"], milestone: "Run a RICE prioritization session on a 25-feature backlog with justification documentation." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Developer Experience (DevEx) & API Platforms", topics: ["API as a Product: Documentation quality, SDKs, sandbox environments, onboarding latency", "Evaluating Technical Debt: Balancing feature velocity with architectural refactoring", "Managing Platform Migrations and deprecating legacy API versions without breaking clients"], milestone: "Design an API versioning and deprecation migration strategy for enterprise clients." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Execution & Cross-Functional Alignment", topics: ["Leading sprint planning, backlog grooming, and retrospective meetings in Jira", "Stakeholder management: Aligning Sales, Marketing, Legal, and Engineering", "Product launch readiness (GTM - Go-To-Market strategy, release notes)"], milestone: "Manage a simulated end-to-end sprint release with complete Go-To-Market documentation." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Technical PM Case Studies", topics: ["Developer Authentication & Identity Platform PRD", "Real-Time Collaborative Cloud Workspace Technical PRD", "AI Copilot Feature Roadmap & Evaluation Matrix"], milestone: "Complete 3 comprehensive Technical Product Management portfolio deliverables." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "TPM Portfolio Showcase", topics: ["Publishing comprehensive PRDs and product case studies on Notion/GitHub", "Documenting technical decision-making and product trade-offs", "Visual roadmaps and user journey maps"], milestone: "A professional Technical Product Manager portfolio with complete PRDs and roadmaps." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Product Design & Technical Trade-Offs", topics: ["Product Design Questions: 'Design an API for Google Maps' or 'Design a smart refrigerator'", "Technical Architecture Trade-offs: 'How do you convince engineers to pay down technical debt?'", "Prioritization Scenarios: 'You have 5 critical features and capacity for 2. How do you decide?'", "Root Cause Analysis: 'API latency increased by 40% after the latest release. How do you respond?'"], milestone: "Ace technical product management interview loops (Product Design, Execution, Technical Architecture)." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "TPM Hiring", topics: ["Technical Product Manager resume emphasizing engineering depth and product impact", "Applying to product tech companies (Stripe, Twilio, Atlassian, Google, Microsoft)", "Mock product interviews"], milestone: "Secure employment as an Associate / Junior Technical Product Manager." }
    ],
    projects: [
      { tier: "Beginner", title: "Developer Webhook & Event Delivery System - Technical PRD", tech: ["PRD", "Confluence", "OpenAPI", "RICE Matrix", "Miro"], description: "Complete PRD specifying webhook registration, HMAC signature verification, exponential retry policies, and developer UI." },
      { tier: "Intermediate", title: "AI-Powered Search & Semantic Discovery Feature Roadmap", tech: ["Productboard", "Notion", "Figma", "OKRs", "Analytics"], description: "Strategic 6-month roadmap with user stories, technical architecture constraints, RICE scoring, and metric targets." },
      { tier: "Production / Capstone", title: "Enterprise Identity & Single Sign-On (SSO) Platform Product Package", tech: ["Jira", "Confluence", "SAML/OIDC Specs", "Go-To-Market Plan", "Figma"], description: "Full enterprise product package: Technical PRD, API contract, SAML/OAuth integration guide, and GTM rollout plan." }
    ],
    certifications: [
      { name: "Professional Scrum Product Owner (PSPO I)", issuer: "Scrum.org" },
      { name: "Product School Certified Product Manager (CPM)", issuer: "Product School" }
    ],
    interviewTopics: [
      { category: "Technical Product Management", topics: ["How do you evaluate whether to build a capability in-house vs buying an external API/SaaS solution?", "Explain how you handle conflicts between engineering estimates and executive deadlines", "How do you measure Developer Experience (DevEx) for an API platform?", "Design a high-throughput Payment Gateway API with idempotency and retry handling"] }
    ],
    relatedRoles: ["Product Analyst", "Business Analyst", "Solutions Consultant", "Software Engineer"]
  }
];

module.exports = businessAndTechRoles;

/**
 * Software Development Career Roles (9 Roles)
 * Fully enhanced for Day 2 with directed learning order, why each skill,
 * practice exercises, mini projects, learn later guardrails, 4-tier project blueprints,
 * 7-pillar interview roadmap, and career readiness checklists.
 */

const softwareDevelopmentRoles = [
  {
    id: "full-stack-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Full Stack Developer",
    slug: "full-stack-developer",
    badge: "Highest Demand",
    shortDescription: "Builds complete web products end-to-end, from responsive UIs to scalable APIs and databases.",
    description: "A Full Stack Developer possesses the versatility to build entire digital products from scratch. They understand client-side UX, frontend frameworks, server architecture, database modeling, and deployment pipelines.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹5 - ₹10 LPA", mid: "₹11 - ₹22 LPA", senior: "₹24 - ₹50+ LPA" },
    responsibilities: [
      "Develop end-to-end web applications combining React/Next.js frontend with Node.js/Python backend.",
      "Design database schemas, write efficient queries, and handle data migrations.",
      "Implement secure authentication, session management, and state synchronization across client and server.",
      "Deploy full-stack applications to cloud platforms with CI/CD and container workflows.",
      "Troubleshoot performance bottlenecks across both browser and server layers."
    ],
    prerequisites: [
      { name: "HTML, CSS & JavaScript", desc: "Core web standards, modern ES6+ syntax, and async operations.", required: true },
      { name: "Programming Fundamentals", desc: "Functions, loops, object-oriented concepts, and basic data structures.", required: true },
      { name: "Relational / NoSQL Basics", desc: "Basic SQL queries and NoSQL document concepts.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on codebases.", required: true }
    ],

    // Directed Learning Order with Dependencies & Deep-Dives
    learningOrder: [
      {
        step: 1,
        technology: "HTML5 & Semantic Web",
        priority: "MUST LEARN",
        whyYouNeedIt: "Provides the structural semantic foundation for all web apps, accessibility (a11y), and search engine indexing.",
        prerequisite: "Basic browser usage",
        depth: "Working Proficiency",
        topics: ["Semantic markup (<header>, <main>, <nav>, <section>, <article>)", "Forms & input validation (types, required, pattern)", "Accessibility (ARIA roles, alt text, tabIndex)", "DOM Tree representation"],
        practice: "Convert a plain text document into a semantic, accessible HTML5 structure with form validation.",
        miniProject: "Build an accessible multi-step survey/registration form with custom validation without JavaScript."
      },
      {
        step: 2,
        technology: "Modern CSS3 & Responsive Design",
        priority: "MUST LEARN",
        whyYouNeedIt: "Powers visual design, mobile responsiveness, layout systems, and user engagement across screen sizes.",
        prerequisite: "HTML5",
        depth: "Working Proficiency",
        topics: ["CSS Box Model, specificity, and cascading rules", "Flexbox (alignment, direction, flex-grow/shrink)", "CSS Grid (grid-template-columns, areas, auto-fit/fill)", "Media queries & Mobile-First layout strategy", "CSS Custom Properties (Variables) & Transitions"],
        practice: "Build a responsive 3-column pricing card layout that stacks cleanly on mobile devices.",
        miniProject: "Recreate a responsive SaaS landing page with dark mode theme variables using pure CSS."
      },
      {
        step: 3,
        technology: "JavaScript (ES6+) Core",
        priority: "MUST LEARN",
        whyYouNeedIt: "The universal programming language of the web. Essential for client-side interactivity and server-side runtime.",
        prerequisite: "HTML5 & CSS3",
        depth: "Deep Mastery",
        topics: ["Variables (let/const), data types, operators & coercion", "Functions (arrow, closures, callbacks, higher-order functions)", "DOM Manipulation & Event Bubbling/Delegation", "Asynchronous JS: Event Loop, Promises, and async/await", "Array methods (map, filter, reduce, find) & Object destructuring"],
        practice: "Write custom implementations of Array.prototype.map and Array.prototype.reduce.",
        miniProject: "Build an interactive Habit Tracker with dynamic DOM rendering and LocalStorage persistence."
      },
      {
        step: 4,
        technology: "Git & GitHub Workflows",
        priority: "MUST LEARN",
        whyYouNeedIt: "Industry-standard version control for tracking changes, team collaboration, branch management, and code reviews.",
        prerequisite: "Command Line Basics",
        depth: "Working Proficiency",
        topics: ["Initializing repositories, staging, and atomic commits", "Branching strategies (feature branches, main, git checkout -b)", "Resolving merge conflicts and rebasing basics", "Pull Requests, Code Reviews, and GitHub README authoring"],
        practice: "Create a feature branch, make commits, simulate a merge conflict, and resolve it locally.",
        miniProject: "Set up an open-source template repository with contributing guidelines, issue templates, and commit history."
      },
      {
        step: 5,
        technology: "React.js Component Architecture",
        priority: "MUST LEARN",
        whyYouNeedIt: "The dominant frontend library for building modular, declarative, and scalable Single Page Applications.",
        prerequisite: "JavaScript (ES6+) & DOM",
        depth: "Deep Mastery",
        topics: ["JSX syntax, Component decomposition, and Props", "State management with useState & lifecycle with useEffect", "useRef for DOM access and useMemo/useCallback for optimization", "Custom Hooks design patterns", "Client-side routing with React Router DOM v6+"],
        practice: "Create a custom hook `useDebounce(value, delay)` and apply it to a live search input.",
        miniProject: "Build a dynamic E-Commerce product catalog with category filters, cart modal, and search."
      },
      {
        step: 6,
        technology: "Node.js Runtime & Express.js",
        priority: "MUST LEARN",
        whyYouNeedIt: "Enables building high-concurrency, asynchronous backend web servers and APIs using JavaScript.",
        prerequisite: "JavaScript (ES6+) & Async/Await",
        depth: "Deep Mastery",
        topics: ["Node.js Architecture: Event-driven non-blocking I/O & Libuv", "Express.js routing, controllers, and custom middleware pipelines", "Error handling middleware and standardized HTTP response formats", "Request body parsing and input validation using Zod / Joi", "Environment variable management (.env) and security headers (Helmet, CORS)"],
        practice: "Write an Express middleware that logs request execution duration and validates incoming API tokens.",
        miniProject: "Build a standalone REST API for a digital library with full CRUD operations and validation."
      },
      {
        step: 7,
        technology: "Database Modeling (PostgreSQL & MongoDB)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Structured persistence layer for storing, relating, and retrieving business critical application data.",
        prerequisite: "Node.js & Express.js",
        depth: "Deep Mastery",
        topics: ["Relational vs Document databases trade-offs", "PostgreSQL: Schemas, Primary/Foreign keys, 3NF Normalization, Joins & Indexes", "MongoDB: Collections, BSON documents, Aggregation pipelines", "ORM / ODM: Prisma ORM for SQL, Mongoose for MongoDB", "Database migrations, seeds, and connection pooling"],
        practice: "Design a 3NF relational database schema for a multi-vendor marketplace with Prisma.",
        miniProject: "Build a database-backed blogging API with author relationships, post tags, and comment threads."
      },
      {
        step: 8,
        technology: "REST APIs & Client-Server Integration",
        priority: "MUST LEARN",
        whyYouNeedIt: "Bridges the frontend React interface with backend server routes, ensuring seamless data flow and error handling.",
        prerequisite: "React.js & Express.js",
        depth: "Deep Mastery",
        topics: ["RESTful design conventions (Resource naming, HTTP verbs, status codes)", "Data fetching with Axios / Fetch and TanStack Query (React Query)", "Optimistic UI updates and cache invalidation strategies", "Loading skeletons, toast notifications, and global error boundaries", "Pagination, infinite scrolling, and search query parameters"],
        practice: "Implement optimistic task deletion in React where the UI updates instantly before server response.",
        miniProject: "Connect your React frontend to your Express backend with pagination and optimistic updates."
      },
      {
        step: 9,
        technology: "Authentication, Authorization & Security",
        priority: "MUST LEARN",
        whyYouNeedIt: "Guarantees user identity security, data isolation, and protection against web vulnerabilities.",
        prerequisite: "REST APIs & Database",
        depth: "Deep Mastery",
        topics: ["Password hashing with bcrypt and salting rounds", "JSON Web Tokens (JWT) vs Session-based authentication", "Storing tokens securely in HTTP-Only, SameSite cookies", "Role-Based Access Control (RBAC: Admin, Editor, User)", "Web Security: Preventing XSS, CSRF, SQL Injection, and Rate Limiting"],
        practice: "Implement a refresh token rotation mechanism with HTTP-only cookies in Express.",
        miniProject: "Build a full-stack User Authentication System with login, signup, password reset, and protected routes."
      },
      {
        step: 10,
        technology: "Full-Stack Deployment & Cloud Hosting",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Transforms local code into live, accessible, highly available internet applications.",
        prerequisite: "Full-Stack Integration",
        depth: "Working Proficiency",
        topics: ["Deploying frontends to Vercel / Netlify with custom domains", "Deploying Node.js backends to Render / Railway / AWS EC2", "Managed cloud databases (Supabase, Neon, MongoDB Atlas)", "Environment variable configuration in cloud environments", "Docker containerization basics for full-stack apps (Dockerfile, Docker Compose)"],
        practice: "Write a multi-stage Dockerfile for a full-stack app and run it with Docker Compose.",
        miniProject: "Deploy a live production full-stack SaaS application with custom domain and SSL."
      }
    ],

    // "What NOT to focus on yet" - Anti-Overwhelm Guidance
    learnLater: [
      {
        technology: "Kubernetes & Microservices Mesh",
        reason: "Premature complexity for junior developers. Focus on building and deploying clean monolithic/modular full-stack applications first.",
        whenToLearn: "Learn when managing 5+ distributed backend services in enterprise scaling environments."
      },
      {
        technology: "GraphQL & Apollo Federation",
        reason: "Most initial full-stack roles require rock-solid REST API design, HTTP status codes, and relational schemas.",
        whenToLearn: "Learn after you have mastered REST APIs, pagination, and relational schemas."
      },
      {
        technology: "WebAssembly (WASM) & Low-Level C++",
        reason: "Highly specialized low-level compute not needed for standard full-stack web applications.",
        whenToLearn: "Only when building heavy in-browser compute (video editing, 3D physics engines)."
      },
      {
        technology: "Complex Micro-Frontend Architecture",
        reason: "Introduces deployment and state coordination overhead without benefit for small-to-medium apps.",
        whenToLearn: "Only when working in massive enterprise teams with 50+ independent frontend engineers."
      }
    ],

    // 4-Tier Project Roadmap
    projects: [
      {
        tier: "Beginner",
        title: "NoteCraft - Markdown Knowledge Workspace",
        difficulty: "Beginner Friendly",
        skills: ["Semantic HTML/CSS", "React State & Hooks", "Express Routing", "MongoDB / PostgreSQL", "Local Auth"],
        technology: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
        expectedOutcome: "A responsive full-stack note-taking web app where users can register, write notes in live Markdown with instant preview, categorize notes with tags, and search by keyword.",
        portfolioValue: "Validates fundamental client-server integration, CRUD routing, state management, and database persistence."
      },
      {
        tier: "Intermediate",
        title: "CourseHub - Interactive Learning Platform",
        difficulty: "Intermediate",
        skills: ["TypeScript", "Next.js App Router", "Relational Modeling", "JWT & Cookies", "Stripe Checkout", "Prisma"],
        technology: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe API"],
        expectedOutcome: "A multi-role course platform where students can browse courses, preview lessons, track video progress, and purchase access via Stripe, while instructors manage course content and view earnings.",
        portfolioValue: "High Recruiter Value — Demonstrates payment processing, role-based access control, relational database modeling, and server-side rendering."
      },
      {
        tier: "Advanced",
        title: "DevPulse - Real-Time Project Collaboration Platform",
        difficulty: "Advanced",
        skills: ["WebSockets / Socket.io", "Redis Caching", "Optimistic State", "TanStack Query", "Docker Compose", "File Uploads"],
        technology: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "AWS S3 / Cloudinary", "Docker"],
        expectedOutcome: "A real-time project management app with live Kanban boards, collaborative document editing, real-time typing indicators, team chat channels, and instant notifications.",
        portfolioValue: "Top-Tier Portfolio Impact — Shows mastery over real-time bidirectional communication, event concurrency, caching layers, and containerized deployment."
      },
      {
        tier: "Production / Capstone",
        title: "CloudFlow - Enterprise Multi-Tenant SaaS Engine",
        difficulty: "Production Grade / Capstone",
        skills: ["Multi-Tenancy", "Next.js 15 Server Actions", "PostgreSQL with Row-Level Security", "BullMQ Queues", "Docker", "CI/CD", "Monitoring"],
        technology: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "BullMQ", "Redis", "Docker", "GitHub Actions"],
        expectedOutcome: "Production-ready enterprise SaaS featuring workspace isolation, automated background report generators via BullMQ, audit logging, webhook dispatching, rate limiting, and automated CI/CD deployment pipeline.",
        portfolioValue: "Standout Engineering Showcase — Proves full product ownership, enterprise security patterns, asynchronous processing, and cloud production readiness."
      }
    ],

    // 7-Pillar Interview Roadmap
    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "JavaScript Execution Context", question: "Explain the JavaScript Event Loop, Call Stack, Microtask Queue (Promises), and Macrotask Queue (setTimeout).", tip: "Walk through step-by-step console.log order in a mixed promise/setTimeout snippet." },
        { topic: "Closures & Scoping", question: "What is a Closure in JavaScript, and what are 2 practical real-world use cases (e.g. data privacy, memoization)?", tip: "Give a clean code example of a counter function or memoizer." },
        { topic: "React Reconciliation & Virtual DOM", question: "How does React's Diffing Algorithm and Fiber architecture work to update the real DOM efficiently?", tip: "Explain why keys are mandatory in lists and what happens when index is used as a key." }
      ],
      codingProblems: [
        { title: "Two Sum & HashMaps", difficulty: "Easy", pattern: "Hash Table lookup in O(n) time", focus: "Array manipulation and constant time lookups." },
        { title: "Longest Substring Without Repeating Characters", difficulty: "Medium", pattern: "Sliding Window with Set/Map", focus: "Two pointers and dynamic window sizing." },
        { title: "Group Anagrams", difficulty: "Medium", pattern: "String sorting or character frequency hash", focus: "Hash key generation and aggregation." },
        { title: "Implement Debounce & Throttle from Scratch", difficulty: "Medium", pattern: "Closures and setTimeout timer management", focus: "Frontend machine coding staple." }
      ],
      coreCSSubjects: [
        { subject: "Database Management (DBMS)", topic: "ACID Transactions & Indexing", keyQuestion: "Explain ACID properties and why B-Tree indexing speeds up SELECT queries but slows down massive INSERT operations." },
        { subject: "Operating Systems (OS)", topic: "Processes vs Threads & Concurrency", keyQuestion: "Difference between a Process and a Thread. How does Node.js achieve high concurrency despite being single-threaded?" },
        { subject: "Computer Networks (CN)", topic: "HTTP/HTTPS & TCP Handshake", keyQuestion: "What happens when you type google.com into your browser? (DNS resolution -> TCP 3-Way Handshake -> TLS -> HTTP GET -> DOM Parsing)." },
        { subject: "Object-Oriented Design (OOP)", topic: "SOLID Principles in TypeScript", keyQuestion: "Explain the Single Responsibility Principle and Dependency Inversion Principle with code examples." }
      ],
      roleSpecificQuestions: [
        { question: "How do you securely handle user authentication across a React frontend and Express backend without vulnerability to XSS or CSRF?", answerKey: "Use HTTP-only, Secure, SameSite=Strict cookies for refresh tokens and short-lived in-memory access tokens." },
        { question: "What is the N+1 Query Problem in ORMs (like Prisma/Mongoose) and how do you resolve it?", answerKey: "Occurs when querying parent records then making N separate queries for children. Resolved using JOINs or eager loading with `include` / `populate`." },
        { question: "Explain the trade-offs between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR).", answerKey: "SSR gives dynamic SEO and fast TTFB for personalized data; SSG gives maximum speed from CDN; CSR gives fluid app interactivity." }
      ],
      projectQuestions: [
        { question: "Walk me through the architecture of your Capstone Project. What was the most difficult technical challenge you encountered?", tip: "Use the STAR format: Explain the problem, the architectural trade-offs you evaluated, the implementation, and measurable results." },
        { question: "If your full-stack app experienced a 10x traffic spike causing database connection pool timeouts, how would you diagnose and resolve it?", tip: "Discuss connection pooling (PgBouncer), adding Redis caching layer, and optimizing unindexed slow queries." }
      ],
      hrPreparation: [
        { question: "Tell me about yourself and your transition into Full Stack Development.", strategy: "Present a concise 2-minute elevator pitch: educational background, technical projects built, key technical stack, and your passion for solving real problems." },
        { question: "Why do you want to work at our company specifically?", strategy: "Research their core product, engineering blog, and tech stack; connect their mission to your technical interests." }
      ],
      behavioralPreparation: [
        { scenario: "Describe a situation where you had a disagreement with a team member over a technical decision.", framework: "STAR Method: Explain the technical conflict, how you used objective data/benchmarks to evaluate both approaches, and how you arrived at a consensus respectfully." },
        { scenario: "Tell me about a time your code introduced a bug in production or during testing.", framework: "STAR Method: Own the mistake without blaming others, explain the immediate mitigation/rollback, root-cause analysis, and how you added automated tests to prevent recurrence." }
      ]
    },

    // Career Readiness Interactive Checklist (6 Milestones)
    careerReadinessChecklist: {
      foundation: [
        "Master semantic HTML5 markup and accessibility basics (ARIA, alt text)",
        "Understand CSS Box Model, Flexbox, and CSS Grid responsive layouts",
        "Proficiency in modern JavaScript (ES6+, DOM, Promises, async/await)",
        "Version control mastery with Git (branching, commits, PRs, resolving conflicts)"
      ],
      coreSkills: [
        "Build modular frontend components with React.js and React Router",
        "Develop RESTful APIs with Node.js and Express.js with input validation",
        "Design relational database schemas with PostgreSQL and Prisma ORM",
        "Implement secure authentication with JWT and HTTP-Only cookies"
      ],
      projects: [
        "Complete and deploy Beginner Project (NoteCraft or similar CRUD app)",
        "Complete and deploy Intermediate Project (CourseHub with Stripe payments)",
        "Complete and deploy Advanced Project (DevPulse with real-time WebSockets)",
        "Ship Production Capstone SaaS project with multi-tenancy and background queues"
      ],
      portfolio: [
        "Publish clean, responsive Developer Portfolio website on custom domain",
        "Write comprehensive GitHub READMEs with architecture diagrams, setup guides, and live links",
        "Ensure all project repositories have clean commit histories and zero sensitive keys"
      ],
      interview: [
        "Solve 75+ DSA problems on LeetCode (Arrays, Two Pointers, HashMaps, Sliding Window)",
        "Review Core CS fundamentals: DBMS Indexing, OS Threads, TCP/IP, SOLID principles",
        "Prepare 3 project defense stories using the STAR method",
        "Conduct 3+ mock technical and behavioral interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Full Stack Developer resume with live project links",
        "Polish LinkedIn profile with headline, skills, project media, and active engagement",
        "Direct outreach to 10+ tech recruiters and engineering managers per week",
        "Apply to 30+ tailored full-stack opportunities on LinkedIn, Wellfound, and company portals"
      ]
    },

    technologies: [
      { name: "JavaScript / TypeScript", category: "Language", priority: "MUST LEARN", description: "Universal language across frontend and backend stacks." },
      { name: "React.js / Next.js", category: "Frontend", priority: "MUST LEARN", description: "Component architecture, hooks, server rendering, routing." },
      { name: "Node.js & Express.js", category: "Backend", priority: "MUST LEARN", description: "REST APIs, middleware, authentication, async operations." },
      { name: "PostgreSQL / MongoDB", category: "Database", priority: "MUST LEARN", description: "Relational or document-based persistence and indexing." },
      { name: "Tailwind CSS", category: "Styling", priority: "HIGH PRIORITY", description: "Rapid responsive UI development." },
      { name: "Prisma / Mongoose ORM", category: "Database Tools", priority: "HIGH PRIORITY", description: "Schema definition, queries, and type safety." },
      { name: "Docker & Container Basics", category: "DevOps", priority: "HIGH PRIORITY", description: "Packaging client and server into containers." },
      { name: "Redis Caching", category: "Performance", priority: "GOOD TO KNOW", description: "Caching hot API data and session storage." },
      { name: "GraphQL & TanStack Query", category: "Data Layer", priority: "GOOD TO KNOW", description: "Flexible data querying and client caching." },
      { name: "Cloud Deployment (AWS / Vercel / Render)", category: "Deployment", priority: "HIGH PRIORITY", description: "Deploying production full-stack systems." },
      { name: "CI/CD Pipelines (GitHub Actions)", category: "DevOps", priority: "OPTIONAL / LATER", description: "Automated test and deployment pipelines." }
    ],
    tools: [
      { name: "VS Code", priority: "MUST LEARN", purpose: "Full-stack code editor." },
      { name: "Postman", priority: "MUST LEARN", purpose: "API testing and validation." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Code hosting and version control." },
      { name: "Docker", priority: "HIGH PRIORITY", purpose: "Local multi-service development." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Web Core & JavaScript Mastery", topics: ["HTML5, CSS3 (Flexbox/Grid), Responsive Web", "JavaScript (ES6+, DOM, Promises, Async/Await)", "Git & GitHub Workflows"], milestone: "Deploy 2 interactive JavaScript apps to GitHub Pages." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Frontend Framework (React) & Tailwind", topics: ["React Components, Props, State & Hooks", "React Router for Single Page Apps", "Tailwind CSS Styling", "API integration with Fetch/Axios"], milestone: "Build a responsive React web app consuming public APIs." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Backend Dev Environment & Postman", topics: ["Node.js environment, NPM scripts, Express setup", "Postman request collections and environment variables", "Database GUI setup (pgAdmin/Compass)"], milestone: "Set up a clean local MERN / PERN full-stack development environment." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-15", focus: "Backend API & Database Persistence", topics: ["Express REST API routing & middleware", "Database modeling (PostgreSQL with Prisma OR MongoDB with Mongoose)", "JWT Auth + HTTP-only cookies", "Full-stack client-server integration"], milestone: "Build a full-stack CRUD application with secure user authentication." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "TypeScript, Next.js & Optimization", topics: ["TypeScript across Frontend & Backend", "Next.js Full-Stack App Router (Server Actions, SSR)", "State management with Zustand", "Redis caching & rate limiting"], milestone: "Build a full-stack TypeScript SaaS platform with subscription workflow." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Full Product Engineering", topics: ["File uploads (AWS S3/Cloudinary)", "Real-time updates via WebSockets / SSE", "Payment gateway integration (Stripe/Razorpay)", "Production error logging"], milestone: "Ship 3 comprehensive full-stack applications with live demos." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Product Showcase & Portfolio", topics: ["Live portfolio site with project architecture diagrams", "Comprehensive README with screenshots, API routes & demo credentials", "Clean GitHub commit history"], milestone: "Polished portfolio with 3 deployed full-stack products." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Full-Stack System & Coding Interviews", topics: ["Frontend + Backend interview concepts", "Full-stack System Design (e.g. Design Twitter, Airbnb, or Notion)", "Machine Coding (Build a full-stack feature in 60 minutes)"], milestone: "Pass mock technical and architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Career Launch & Applications", topics: ["ATS resume highlighting full product ownership", "Reaching out to startups and tech companies", "Behavioral questions (STAR method)"], milestone: "Secure employment as a Full Stack Software Engineer." }
    ],
    certifications: [
      { name: "Full Stack Open Certificate", issuer: "University of Helsinki" },
      { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Full-Stack Integration", topics: ["State synchronization between client and server", "Optimistic UI updates vs pessimistic loading", "CORS issues and debugging cross-origin cookies", "JWT security: LocalStorage vs HTTP-only Cookies"] },
      { category: "System Design", topics: ["Designing a real-time collaborative application", "Database indexing and scaling strategies for read-heavy apps", "Handling file uploads securely at scale"] }
    ],
    relatedRoles: ["Frontend Developer", "Backend Developer", "Software Engineer", "Cloud Developer"]
  },

  {
    id: "frontend-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Frontend Developer",
    slug: "frontend-developer",
    badge: "High Demand",
    shortDescription: "Builds responsive, accessible, user-facing web applications using modern JavaScript frameworks.",
    description: "A Frontend Developer specializes in creating the visual and interactive elements of web applications that users directly interact with. They bridge UI/UX design with backend data, ensuring fast loading speeds, responsive layouts across devices, and accessible user experiences.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8 LPA", mid: "₹9 - ₹18 LPA", senior: "₹20 - ₹40+ LPA" },
    responsibilities: [
      "Develop responsive and accessible web applications using HTML5, CSS3, JavaScript, and React/Next.js.",
      "Integrate RESTful and GraphQL APIs to render dynamic content seamlessly.",
      "Optimize web application performance, Core Web Vitals (LCP, CLS, INP), and bundle sizes.",
      "Collaborate with UI/UX designers to translate Figma prototypes into pixel-perfect interactive code.",
      "Write clean, modular code with unit/integration testing (Jest, React Testing Library)."
    ],
    prerequisites: [
      { name: "How the Web Works", desc: "Understanding HTTP/HTTPS, DNS, Client-Server architecture, and browser rendering.", required: true },
      { name: "HTML & CSS Fundamentals", desc: "Semantic markup, CSS box model, flexbox, and CSS grid layouts.", required: true },
      { name: "Programming Logic", desc: "Basic variables, loops, conditionals, and functions in JavaScript.", required: true },
      { name: "Version Control (Git)", desc: "Committing, branching, merging, and submitting Pull Requests on GitHub.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Semantic HTML5 & Accessibility (a11y)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Forms the bedrock of all frontend web applications, ensuring screen reader accessibility and top SEO rankings.",
        prerequisite: "Basic browser knowledge",
        depth: "Deep Mastery",
        topics: ["Semantic structural elements", "ARIA attributes & live regions", "Form validation & input patterns", "DOM hierarchy & accessibility tree"],
        practice: "Audit an unsemantic webpage and refactor it to 100% accessible HTML5.",
        miniProject: "Build an accessible multimodal registration wizard with custom inputs and ARIA live validation."
      },
      {
        step: 2,
        technology: "Modern CSS3, Flexbox & CSS Grid",
        priority: "MUST LEARN",
        whyYouNeedIt: "Essential for creating fluid, responsive, pixel-perfect user interfaces across all devices.",
        prerequisite: "HTML5",
        depth: "Deep Mastery",
        topics: ["CSS Box Model & Specificity calculation", "Flexbox layout engine", "CSS Grid 2D layout systems & subgrid", "Fluid typography with clamp() and viewport units", "CSS transitions, transforms, and animations"],
        practice: "Build a responsive dashboard layout with collapsible sidebar using pure CSS Grid and Flexbox.",
        miniProject: "Create a modern responsive agency landing page with smooth scroll animations and glassmorphic cards."
      },
      {
        step: 3,
        technology: "JavaScript (ES6+) Deep Dive",
        priority: "MUST LEARN",
        whyYouNeedIt: "The core programming engine for manipulating the DOM, managing client state, and handling async data.",
        prerequisite: "HTML & CSS",
        depth: "Deep Mastery",
        topics: ["Closures, Scopes, and Execution Contexts", "Event Loop, Microtask vs Macrotask Queue", "Promises, async/await, and error handling", "DOM manipulation & Event delegation", "ES6 Modules, Destructuring, and Rest/Spread operators"],
        practice: "Build an event-driven pub/sub event emitter class in vanilla JavaScript.",
        miniProject: "Build an interactive Kanban board in vanilla JavaScript with drag-and-drop and LocalStorage."
      },
      {
        step: 4,
        technology: "React.js & Component Architecture",
        priority: "MUST LEARN",
        whyYouNeedIt: "Industry-standard UI library for building reactive, declarative, and scalable web interfaces.",
        prerequisite: "JavaScript (ES6+)",
        depth: "Deep Mastery",
        topics: ["JSX and declarative component rendering", "Hooks: useState, useEffect, useRef, useMemo, useCallback", "Custom Hooks pattern for reusable logic", "Context API for light global state", "Client-side routing with React Router DOM v6+"],
        practice: "Build a custom `useFetch` hook with caching, loading state, and error handling.",
        miniProject: "Build a Movie Streaming & Search web app with infinite scroll and watchlist bookmarking."
      },
      {
        step: 5,
        technology: "Tailwind CSS & Component UI Libraries",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Drastically accelerates UI development with utility-first classes and design token consistency.",
        prerequisite: "CSS & React",
        depth: "Working Proficiency",
        topics: ["Tailwind configuration and custom theme extensions", "Headless UI / Radix UI primitives for accessible components", "Framer Motion for fluid micro-interactions and layout animations"],
        practice: "Build an animated accessible Dropdown menu using Radix UI primitives and Tailwind CSS.",
        miniProject: "Build a complete Design System Component Library documented in Storybook."
      },
      {
        step: 6,
        technology: "TypeScript for Frontend",
        priority: "MUST LEARN",
        whyYouNeedIt: "Provides compile-time type safety, eliminates runtime null errors, and improves developer velocity in large teams.",
        prerequisite: "JavaScript & React",
        depth: "Deep Mastery",
        topics: ["Types, Interfaces, and Union types", "Typing React Props, State, and Event Handlers", "Generics in TypeScript functions and components", "Utility types: Partial, Pick, Omit, Record"],
        practice: "Refactor a JavaScript React application to 100% strict TypeScript with zero `any` types.",
        miniProject: "Build a fully type-safe Form Builder with dynamic fields and TypeScript Zod validation."
      },
      {
        step: 7,
        technology: "State Management & Server State (TanStack Query / Zustand)",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Manages complex client-side application state and handles server-data caching, revalidation, and pagination.",
        prerequisite: "React & TypeScript",
        depth: "Deep Mastery",
        topics: ["Zustand for lightweight, boilerplate-free client state", "TanStack Query (React Query) for server state caching", "Optimistic mutations, polling, and background refetching", "Managing multi-step workflow state"],
        practice: "Implement infinite scroll pagination with caching and scroll position restoration using TanStack Query.",
        miniProject: "Build a high-performance Financial Portfolio Tracker with live polling and cached stock data."
      },
      {
        step: 8,
        technology: "Next.js (App Router, SSR, SSG) & Performance Optimization",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "The premier full-stack React framework providing instant page loads, Server Components, and top SEO.",
        prerequisite: "React & TypeScript",
        depth: "Deep Mastery",
        topics: ["Next.js App Router, Server Components vs Client Components", "Server-Side Rendering (SSR) & Static Site Generation (SSG)", "Core Web Vitals optimization (LCP, INP, CLS)", "Image optimization (next/image) and dynamic bundle analysis"],
        practice: "Optimize a slow React page to achieve 98+ Lighthouse Performance and SEO score.",
        miniProject: "Deploy a high-traffic Tech Publication platform with Next.js App Router and dynamic OG images."
      }
    ],

    learnLater: [
      {
        technology: "Micro-Frontends & Module Federation",
        reason: "Excessive complexity for early career roles. Master single-app architecture and monorepos first.",
        whenToLearn: "When working in 100+ engineer organizations managing isolated sub-teams."
      },
      {
        technology: "WebAssembly (WASM) & Rust Frontend",
        reason: "Niche low-level browser compute; 98% of frontend applications are built with TypeScript/React.",
        whenToLearn: "When building in-browser photo/video rendering or high-frequency game engines."
      },
      {
        technology: "Writing Custom Webpack / Rollup Configs from Scratch",
        reason: "Modern tools (Vite, Next.js, Turbopack) handle bundling out of the box.",
        whenToLearn: "When building custom NPM library tooling or optimizing legacy enterprise builds."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "TaskFlow - Smart Productivity Hub",
        difficulty: "Beginner Friendly",
        skills: ["Semantic HTML", "CSS Grid", "Vanilla JS ES6", "LocalStorage", "Drag and Drop"],
        technology: ["HTML5", "CSS3", "JavaScript ES6", "LocalStorage"],
        expectedOutcome: "Interactive task board with priority tagging, search filter, color tags, and local persistence.",
        portfolioValue: "Proves mastery of core JavaScript fundamentals, event listeners, and responsive design without libraries."
      },
      {
        tier: "Intermediate",
        title: "CryptoPulse - Live Financial Market Visualizer",
        difficulty: "Intermediate",
        skills: ["React.js", "TypeScript", "Tailwind CSS", "Recharts", "CoinGecko API", "Zustand"],
        technology: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Zustand"],
        expectedOutcome: "Real-time crypto and stock analytics tracker with interactive price charts, search debounce, watchlist caching, and currency converter.",
        portfolioValue: "Demonstrates API integration, data visualization with charts, responsive UI design, and clean client state management."
      },
      {
        tier: "Advanced",
        title: "CanvasCraft - Collaborative Whiteboard & Diagramming App",
        difficulty: "Advanced",
        skills: ["Next.js", "TypeScript", "HTML5 Canvas / SVG", "Framer Motion", "TanStack Query", "Supabase"],
        technology: ["Next.js 15", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "Framer Motion", "Supabase"],
        expectedOutcome: "Interactive visual workspace where users can draw vector shapes, add sticky notes, export to SVG/PNG, and collaborate on shared boards.",
        portfolioValue: "High Recruiter Impact — Shows advanced Canvas/DOM manipulation, complex state coordination, and modern Next.js architecture."
      },
      {
        tier: "Production / Capstone",
        title: "DevPortal - Enterprise Developer Platform & Component System",
        difficulty: "Production Grade / Capstone",
        skills: ["Next.js App Router", "Design System", "Storybook", "WCAG 2.1 AAA", "Playwright E2E", "CI/CD"],
        technology: ["Next.js", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS", "Playwright", "GitHub Actions"],
        expectedOutcome: "Production-grade documentation and UI component portal featuring dark/light themes, accessible primitives, live interactive code previews, and automated E2E visual tests.",
        portfolioValue: "Standout Frontend Portfolio — Proves accessibility mastery, design system engineering, automated testing, and enterprise code quality."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Event Loop & Asynchronous JavaScript", question: "Explain the difference between Microtasks (Promise callbacks) and Macrotasks (setTimeout, setInterval). In what order are they executed?", tip: "Always remember: The microtask queue is drained completely before the next macrotask runs." },
        { topic: "CSS Specificity & Stacking Context", question: "How is CSS Specificity calculated, and how does `z-index` work within stacking contexts?", tip: "Explain the (Inline, ID, Class/Attribute, Element) scoring system and why `position: relative/absolute` with `z-index` creates a new stacking context." },
        { topic: "Browser Critical Rendering Path", question: "Walk through what happens from receiving an HTML response to painting pixels on screen.", tip: "HTML -> DOM Tree, CSS -> CSSOM, Combine -> Render Tree, Layout (reflow), Paint, Composite." }
      ],
      codingProblems: [
        { title: "Build an Autocomplete / Search Typeahead", difficulty: "Medium", pattern: "Debounce + Caching + Keyboard Navigation", focus: "Frontend machine coding staple." },
        { title: "Build an Infinite Scroll List", difficulty: "Medium", pattern: "IntersectionObserver API + Pagination", focus: "DOM performance and memory efficiency." },
        { title: "Deep Clone an Object", difficulty: "Medium", pattern: "Recursion handling circular references and Date/RegExp", focus: "Core JavaScript algorithmic mastery." },
        { title: "Build a Custom Event Emitter", difficulty: "Medium", pattern: "Pub/Sub design pattern in JavaScript", focus: "Object-oriented JavaScript and callbacks." }
      ],
      coreCSSubjects: [
        { subject: "Web Security", topic: "XSS & CSRF Prevention", keyQuestion: "Explain Cross-Site Scripting (XSS) and how Content Security Policy (CSP) and sanitization mitigate it." },
        { subject: "Computer Networks", topic: "HTTP/2 vs HTTP/1.1 & HTTPS", keyQuestion: "How does HTTP/2 multiplexing eliminate Head-of-Line blocking in web asset delivery?" },
        { subject: "Software Engineering", topic: "Atomic Design Principles", keyQuestion: "How do you organize reusable components using Atoms, Molecules, Organisms, and Templates?" }
      ],
      roleSpecificQuestions: [
        { question: "What causes unnecessary re-renders in React and how do you prevent them?", answerKey: "Parent state updates, unstable object/function props, and context changes. Solved with React.memo, useMemo, useCallback, and colocating state." },
        { question: "How do you optimize Core Web Vitals (Largest Contentful Paint & Cumulative Layout Shift)?", answerKey: "Preload hero images, optimize fonts with font-display: swap, set explicit width/height attributes on media, and eliminate render-blocking JS." }
      ],
      projectQuestions: [
        { question: "How did you manage state in your largest frontend project? Why did you choose that approach over Redux?", tip: "Articulate trade-offs: Zustand/Context provides lightweight simplicity without Redux boilerplate." }
      ],
      hrPreparation: [
        { question: "How do you stay updated with rapidly evolving frontend technologies?", strategy: "Mention following official RFCs, reading web.dev, building experimental side projects, and reading release changelogs." }
      ],
      behavioralPreparation: [
        { scenario: "How do you handle a situation where a designer gives you an interactive UI design that is technically impractical for performance?", framework: "STAR: Propose performance-friendly alternative animations (transform/opacity over height/width) that preserve the designer's visual intent." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master semantic HTML5 markup and accessibility fundamentals",
        "Deep understanding of CSS Grid, Flexbox, and responsive mobile-first layouts",
        "Strong command of JavaScript (ES6+, DOM, Closures, Async/Await)",
        "Git version control proficiency (branching, commits, PRs, merge conflicts)"
      ],
      coreSkills: [
        "Build modular frontend applications with React.js and React Router",
        "Type safety mastery using TypeScript for components and state",
        "Utility-first styling with Tailwind CSS and Radix UI primitives",
        "Data fetching and caching with TanStack Query (React Query)"
      ],
      projects: [
        "Complete and deploy Beginner Project (TaskFlow)",
        "Complete and deploy Intermediate Project (CryptoPulse with live charts)",
        "Complete and deploy Advanced Project (CanvasCraft with interactive canvas)",
        "Ship Production Capstone (DevPortal with Storybook and automated tests)"
      ],
      portfolio: [
        "Publish clean, responsive Developer Portfolio website on custom domain",
        "Write detailed GitHub READMEs with architecture diagrams and live demo links",
        "Audit portfolio on Lighthouse ensuring 95+ performance and accessibility scores"
      ],
      interview: [
        "Practice 20+ frontend machine coding exercises under 45-minute limits",
        "Master JavaScript theory (Event Loop, Closures, Prototypes, Garbage Collection)",
        "Prepare 3 project defense walkthroughs using the STAR method",
        "Conduct 3+ mock technical and behavioral interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Frontend Developer resume with live links",
        "Optimize LinkedIn profile with frontend skills, project media, and active engagement",
        "Apply to 30+ tailored frontend engineering roles on LinkedIn, Wellfound, and job portals"
      ]
    },

    technologies: [
      { name: "HTML5 & Semantic Markup", category: "Core Markup", priority: "MUST LEARN", description: "Accessible, SEO-friendly page structure." },
      { name: "Modern CSS3 (Flexbox/Grid)", category: "Styling", priority: "MUST LEARN", description: "Responsive layouts and fluid designs without frameworks." },
      { name: "JavaScript (ES6+)", category: "Language", priority: "MUST LEARN", description: "Async/await, DOM, closures, promises, event loop." },
      { name: "React.js / Next.js", category: "Framework", priority: "MUST LEARN", description: "Component hierarchy, hooks, state, routing, SSR." },
      { name: "TypeScript", category: "Language", priority: "HIGH PRIORITY", description: "Type safety, interfaces, generics for scalable frontends." },
      { name: "Tailwind CSS", category: "Styling", priority: "HIGH PRIORITY", description: "Utility-first rapid styling and design consistency." },
      { name: "State Management (Zustand / Redux)", category: "State", priority: "HIGH PRIORITY", description: "Predictable application-level state flows." },
      { name: "TanStack Query (React Query)", category: "Data Fetching", priority: "HIGH PRIORITY", description: "Server-state caching, optimistic updates, and pagination." },
      { name: "Testing (Jest / Playwright)", category: "Quality", priority: "GOOD TO KNOW", description: "Component unit tests and E2E browser automation." },
      { name: "Web Performance (Core Web Vitals)", category: "Optimization", priority: "GOOD TO KNOW", description: "Code-splitting, lazy loading, LCP/INP auditing." },
      { name: "WebSockets & PWA", category: "Advanced Web", priority: "OPTIONAL / LATER", description: "Real-time communication and offline service workers." },
      { name: "Micro-Frontends & WASM", category: "Specialized", priority: "OPTIONAL / LATER", description: "Modular micro-apps and WebAssembly browser compute." }
    ],
    tools: [
      { name: "VS Code", priority: "MUST LEARN", purpose: "Primary code editor with key extensions." },
      { name: "Chrome DevTools", priority: "MUST LEARN", purpose: "Inspecting DOM, network payloads, console, and performance tabs." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Source control, code reviews, and project management." },
      { name: "Postman / Thunder Client", priority: "HIGH PRIORITY", purpose: "Inspecting and testing backend API endpoints." },
      { name: "Figma", priority: "GOOD TO KNOW", purpose: "Inspecting design tokens, typography, and component spacing." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Web Fundamentals & Markup", topics: ["How Browsers Render Pages", "Semantic HTML5 Tags", "CSS Box Model & Selectors", "Flexbox & CSS Grid Mastery", "Mobile-First Media Queries"], milestone: "Build 3 responsive landing pages from scratch with vanilla HTML/CSS." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-7", focus: "JavaScript (ES6+) Mastery", topics: ["Variables, Data Types & Operators", "DOM Manipulation & Event Listeners", "Scope, Closures & Execution Context", "Promises, Async/Await & Fetch API", "Array Methods (map, filter, reduce) & Destructuring"], milestone: "Build an interactive CRUD application with live API data." },
      { step: 3, phase: "TOOLS", duration: "Week 8", focus: "Developer Tooling & Git", topics: ["Git Branching & GitHub Pull Requests", "NPM / PNPM Package Management", "Chrome DevTools (Breakpoints, Network, Profiler)", "ESLint & Prettier Setup"], milestone: "Publish source code on GitHub and deploy live sites via Vercel/Netlify." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 9-14", focus: "React.js Component Architecture", topics: ["JSX & Component Decomposition", "Core Hooks: useState, useEffect, useRef, useMemo, useCallback", "Custom Hooks & Context API", "React Router DOM v6+", "Tailwind CSS Styling Workflow"], milestone: "Build a multi-page interactive web app with authentication and state management." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "TypeScript & Next.js", topics: ["TypeScript Types, Interfaces & Generics", "Next.js App Router (SSR, SSG, Server Actions)", "Global State with Zustand", "Server State Caching with TanStack Query", "Image Optimization & Core Web Vitals"], milestone: "Build a production Next.js + TypeScript SaaS application." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Full Feature Projects", topics: ["Error Boundaries & Toast notifications", "Payment gateway / Auth0 / Clerk integration", "Pagination, Search & Debounce filters", "Lighthouse 95+ score optimization"], milestone: "Ship 3 distinct production-ready web apps with live URLs." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Developer Presence & Showcase", topics: ["Personal Developer Portfolio Website", "Detailed READMEs with Architecture Diagrams and Tech Stack", "LinkedIn and GitHub profile polish"], milestone: "A live portfolio showcasing 3 high-impact projects." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Technical & Machine Coding", topics: ["JavaScript Theory (Event Loop, Closures, Prototypes)", "React Under the Hood (Virtual DOM, Fiber, Reconciliation)", "Machine Coding (Build Autocomplete, Infinite Scroll, Modal in 45m)", "Web Security (XSS, CSRF, CORS, CSP)"], milestone: "Pass simulated frontend technical interviews under strict time constraints." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Applications & Career Launch", topics: ["ATS-Optimized Resume for Frontend Roles", "Direct Outreach to Engineering Managers on LinkedIn", "Open-source contributions", "Mock behavioral & technical rounds"], milestone: "Secure interviews and job offers as an Associate / Junior Frontend Engineer." }
    ],
    certifications: [
      { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta (Coursera)" },
      { name: "freeCodeCamp JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" }
    ],
    interviewTopics: [
      { category: "JavaScript Concepts", topics: ["Event Loop, Microtasks vs Macrotasks", "Closures & Lexical Scoping", "Prototypal Inheritance vs Classes", "Debounce vs Throttle implementation"] },
      { category: "React Core", topics: ["Virtual DOM, Fiber & Reconciliation", "Hooks rules and dependency array stale state bugs", "Context API vs Redux/Zustand trade-offs", "Code splitting with React.lazy and Suspense"] },
      { category: "Machine Coding", topics: ["Build an Autocomplete with debounce & caching", "Build an Infinite Scroll with IntersectionObserver", "Build an accessible Modal Dialog from scratch", "Build a Multi-Step Wizard with validation"] }
    ],
    relatedRoles: ["UI Developer", "Full Stack Developer", "Web Developer", "Mobile Developer"]
  },

  {
    id: "backend-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Backend Developer",
    slug: "backend-developer",
    badge: "High Demand",
    shortDescription: "Architects server-side logic, databases, microservices, and secure REST/GraphQL APIs.",
    description: "A Backend Developer creates and maintains the server, databases, and application business logic that power modern web and mobile apps. They focus on API design, database modeling, authentication, security, scalability, and system performance.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹5 - ₹9 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹48+ LPA" },
    responsibilities: [
      "Design, build, and document secure RESTful and GraphQL APIs for web and mobile clients.",
      "Model, index, and optimize relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.",
      "Implement authentication, authorization (JWT, OAuth2, RBAC), and rate-limiting security layers.",
      "Handle asynchronous background jobs, caching strategies, and event-driven queues (RabbitMQ, Kafka).",
      "Deploy scalable server services using Docker containers and cloud platforms."
    ],
    prerequisites: [
      { name: "Core Programming Language", desc: "Solid command of Node.js/Express, Python (FastAPI/Django), or Java (Spring Boot).", required: true },
      { name: "Database Fundamentals", desc: "Basic SQL queries (SELECT, JOIN, GROUP BY) and data modeling concepts.", required: true },
      { name: "HTTP & Networking", desc: "Understanding REST principles, HTTP methods, headers, status codes, and cookies.", required: true },
      { name: "Data Structures & Algorithms", desc: "Arrays, HashMaps, Trees, Sorting, and Big-O computational complexity.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Server-Side Language & Concurrency (Node.js / Python / Java)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Powers all backend business logic, asynchronous I/O, file operations, and server communication.",
        prerequisite: "Core Programming Logic",
        depth: "Deep Mastery",
        topics: ["Async I/O execution, threads vs event loop", "File streaming, buffers, and file system operations", "Exception handling and error boundaries", "Object-Oriented & Modular code structure"],
        practice: "Build a multi-threaded or async script that processes and parses 10,000 JSON records concurrently.",
        miniProject: "Build a CLI file processor with streaming and progress reporting."
      },
      {
        step: 2,
        technology: "HTTP Protocol & REST API Architecture",
        priority: "MUST LEARN",
        whyYouNeedIt: "The universal protocol enabling clients (web, mobile, IoT) to interact with server resources.",
        prerequisite: "Server-side Language",
        depth: "Deep Mastery",
        topics: ["HTTP Methods (GET, POST, PUT, PATCH, DELETE)", "HTTP Status Codes (2xx, 3xx, 4xx, 5xx)", "Headers, CORS, content-type negotiation", "URL design and resource hierarchy conventions"],
        practice: "Design an OpenAPI 3.0 specification for an enterprise banking transaction system.",
        miniProject: "Build a raw HTTP API server handling CRUD operations without external libraries."
      },
      {
        step: 3,
        technology: "Web Framework (Express / NestJS / FastAPI)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Streamlines routing, middleware execution, request validation, and response formatting.",
        prerequisite: "HTTP & Server-side Language",
        depth: "Deep Mastery",
        topics: ["Middleware pipelines (Auth, Logging, Validation, Rate limiting)", "Controller-Service-Repository architectural pattern", "Input validation & schema sanitization (Zod / Pydantic)", "Centralized error handling and standard error payloads"],
        practice: "Write a custom rate-limiting middleware that blocks IP addresses exceeding 60 requests/minute.",
        miniProject: "Build a modular REST API with full validation and centralized error logging."
      },
      {
        step: 4,
        technology: "Relational Database Design (PostgreSQL / MySQL)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Guarantees ACID transactions, strict schema integrity, and relational data consistency for mission-critical systems.",
        prerequisite: "REST API Basics",
        depth: "Deep Mastery",
        topics: ["Schema design, Primary & Foreign Keys, 3NF Normalization", "Complex SQL: Window Functions, CTEs, Joins, Group By", "Indexes: B-Tree, Hash, GIN, Partial indexes, and EXPLAIN ANALYZE", "ACID Transactions, Row-Level Locking (SELECT FOR UPDATE)"],
        practice: "Write an EXPLAIN ANALYZE query on a 1M-row table and optimize it from 3s to 12ms with composite indexes.",
        miniProject: "Design and implement a relational database schema for an airline seat reservation system."
      },
      {
        step: 5,
        technology: "Authentication & Authorization Security",
        priority: "MUST LEARN",
        whyYouNeedIt: "Protects user data, prevents identity theft, and enforces granular role permissions.",
        prerequisite: "Database & Express",
        depth: "Deep Mastery",
        topics: ["Password hashing with bcrypt and Argon2", "JWT Access Tokens & Refresh Token Rotation", "HTTP-Only Secure Cookies with CSRF protection", "Role-Based & Attribute-Based Access Control (RBAC/ABAC)", "OAuth 2.0 / OpenID Connect integration"],
        practice: "Implement a zero-trust RBAC middleware verifying permissions on protected endpoints.",
        miniProject: "Build an Enterprise Auth Microservice with multi-factor authentication (MFA) and session revocation."
      },
      {
        step: 6,
        technology: "In-Memory Caching & Redis",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Dramatically slashes database load and reduces API response latencies from 200ms to <10ms.",
        prerequisite: "Database & REST APIs",
        depth: "Deep Mastery",
        topics: ["Cache-Aside & Write-Through caching patterns", "Time-To-Live (TTL) expiration & Cache Invalidation strategies", "Redis Data Structures (Strings, Hashes, Sets, Sorted Sets)", "Rate Limiting with Redis Token Bucket algorithm"],
        practice: "Implement a Redis cache-aside layer for a product catalog with automatic cache invalidation on updates.",
        miniProject: "Build a high-throughput Leaderboard API using Redis Sorted Sets handling 10,000 updates/sec."
      },
      {
        step: 7,
        technology: "Asynchronous Message Queues (BullMQ / RabbitMQ / Kafka)",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Decouples heavy processing tasks from HTTP request lifecycles to maintain lightning-fast response times.",
        prerequisite: "Redis & Node.js",
        depth: "Working Proficiency",
        topics: ["Producer-Consumer pattern & Job Queues", "Handling retry backoff, exponential delay, and Dead Letter Queues (DLQ)", "Publish-Subscribe (Pub/Sub) event broadcasting", "Background email dispatching and heavy report generation"],
        practice: "Build a BullMQ queue that processes image resizing with exponential retry on failure.",
        miniProject: "Build an Asynchronous Video Transcoding & Webhook Notification Engine."
      },
      {
        step: 8,
        technology: "Docker Containerization & Cloud Deployment",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Ensures identical server execution environments from local machines to multi-node cloud clusters.",
        prerequisite: "Backend Architecture",
        depth: "Working Proficiency",
        topics: ["Multi-stage Dockerfile builds and image optimization", "Docker Compose for local multi-container orchestration (App, DB, Redis)", "Deploying containerized services to AWS EC2 / ECS / Railway", "Environment secrets management and health check endpoints"],
        practice: "Containerize a backend service with PostgreSQL and Redis using Docker Compose.",
        miniProject: "Deploy a production containerized backend with automated database migrations and health monitoring."
      }
    ],

    learnLater: [
      {
        technology: "Kubernetes Cluster Administration",
        reason: "Excessive operational overhead for junior developers. Managed cloud containers (ECS, Railway, Render) are standard.",
        whenToLearn: "When working as a dedicated Platform/DevOps Engineer or managing 50+ microservices."
      },
      {
        technology: "Apache Kafka Multi-Broker Clustering",
        reason: "Redis BullMQ or RabbitMQ covers 95% of job queue and messaging requirements for web backends.",
        whenToLearn: "When building massive real-time data streaming backends handling millions of events/sec."
      },
      {
        technology: "Distributed Spanner / CockroachDB Databases",
        reason: "PostgreSQL handles 99% of relational database needs with proper indexing and connection pooling.",
        whenToLearn: "When scaling multi-region global databases with strict active-active multi-master requirements."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "AuthShield - Secure Authentication & Session Engine",
        difficulty: "Beginner Friendly",
        skills: ["Node.js", "Express", "PostgreSQL", "JWT", "bcrypt", "HTTP-Only Cookies"],
        technology: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
        expectedOutcome: "A standalone authentication microservice supporting registration, email verification, refresh token rotation, password reset, and role permissions.",
        portfolioValue: "Validates security fundamentals, token rotation patterns, and relational user data modeling."
      },
      {
        tier: "Intermediate",
        title: "StorePeak - High-Throughput E-Commerce Backend API",
        difficulty: "Intermediate",
        skills: ["PostgreSQL", "Prisma", "Redis Caching", "Stripe API", "Rate Limiting", "Swagger"],
        technology: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe API", "Swagger OpenAPI"],
        expectedOutcome: "A high-performance REST API with product search, inventory reservation using atomic database transactions, Redis cache layer, and Stripe checkout integration.",
        portfolioValue: "High Recruiter Impact — Proves database transaction locking, caching strategies, and OpenAPI documentation."
      },
      {
        tier: "Advanced",
        title: "TaskFlow Distributed Queue & Webhook Dispatcher",
        difficulty: "Advanced",
        skills: ["BullMQ", "Redis", "PostgreSQL", "HMAC Signatures", "Exponential Retries", "Docker"],
        technology: ["Express / NestJS", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "Docker Compose"],
        expectedOutcome: "An asynchronous job processing engine that receives background tasks, handles exponential retry backoff, executes webhooks with HMAC signatures, and records execution audit logs.",
        portfolioValue: "Top-Tier Backend Showcase — Demonstrates asynchronous architecture, resilience against network failures, and distributed queue management."
      },
      {
        tier: "Production / Capstone",
        title: "FinScale - Enterprise Payment Gateway & Ledger Engine",
        difficulty: "Production Grade / Capstone",
        skills: ["Double-Entry Bookkeeping", "ACID Row Locking", "Idempotency Keys", "Docker", "Prometheus", "CI/CD"],
        technology: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Prometheus", "Grafana", "Docker", "GitHub Actions"],
        expectedOutcome: "A production-grade financial ledger engine with double-entry accounting, strict idempotency enforcement, row-level locks preventing race conditions, and real-time Prometheus latency metrics.",
        portfolioValue: "Elite Engineering Project — Proves financial-grade software reliability, deadlock prevention, telemetry observability, and enterprise software craftsmanship."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Database Indexing Internals", question: "How does a B-Tree index work under the hood? Why does `LIKE '%term'` fail to use an index while `LIKE 'term%'` succeeds?", tip: "Explain left-to-right prefix matching in B-Tree index traversal." },
        { topic: "Database Isolation Levels", question: "Explain the difference between Read Committed, Repeatable Read, and Serializable isolation levels. What anomalies (Dirty Read, Non-Repeatable Read, Phantom Read) does each prevent?", tip: "Connect this to Multi-Version Concurrency Control (MVCC)." },
        { topic: "Idempotency in REST APIs", question: "What is an Idempotent HTTP method? How do you implement an Idempotency Key header for non-idempotent payment POST requests?", tip: "Explain storing idempotency keys in Redis with atomicity (SET NX) to return cached responses for duplicated requests." }
      ],
      codingProblems: [
        { title: "Implement a Rate Limiter (Token Bucket / Sliding Window)", difficulty: "Medium", pattern: "Redis time-series or token bucket logic", focus: "API protection algorithm." },
        { title: "LRU Cache Implementation", difficulty: "Medium", pattern: "HashMap + Doubly Linked List in O(1) time", focus: "Data structure design staple." },
        { title: "Design a URL Shortener Service (System Design & Code)", difficulty: "Medium", pattern: "Base62 encoding + Database Hash indexing", focus: "Scalable backend architecture." },
        { title: "Find First Non-Repeating Character in a Stream", difficulty: "Easy", pattern: "Queue + Frequency HashMap", focus: "Streaming data processing." }
      ],
      coreCSSubjects: [
        { subject: "Operating Systems", topic: "Process Synchronization & Mutexes", keyQuestion: "What is a Deadlock and what are the 4 Coffman conditions required for a deadlock to occur?" },
        { subject: "Database Systems", topic: "Database Normalization & Sharding", keyQuestion: "When should you denormalize a database table, and how does horizontal sharding differ from vertical partitioning?" },
        { subject: "Computer Networks", topic: "TCP vs UDP & Connection Pooling", keyQuestion: "Why is TCP connection creation expensive (3-way handshake) and why are connection pools critical for database performance?" }
      ],
      roleSpecificQuestions: [
        { question: "How do you prevent SQL Injection and Cross-Site Scripting (XSS) at the backend API layer?", answerKey: "Always use parameterized queries/prepared statements in SQL; validate/sanitize all inputs with schemas (Zod); set security headers (Helmet)." },
        { question: "Explain the difference between Monolithic and Microservice architectures. When should a team NOT use microservices?", answerKey: "Monoliths give simplicity, atomic transactions, and fast local deployment; Microservices solve team scaling at the cost of distributed complexity, latency, and network failures." }
      ],
      projectQuestions: [
        { question: "How do you handle database migrations in production without causing table locks or service downtime?", tip: "Explain multi-step backward-compatible migrations: Add column as nullable -> deploy code -> backfill data -> add NOT NULL constraint." }
      ],
      hrPreparation: [
        { question: "Walk me through how you prioritize backend bugs vs new feature requests.", strategy: "Explain severity classification: Data integrity and security issues are P0; user-blocking bugs are P1; new features are prioritized via sprint planning." }
      ],
      behavioralPreparation: [
        { scenario: "Tell me about a high-severity production outage or bug you investigated.", framework: "STAR: Describe the incident, how you stabilized the system first, conducted log/metric analysis to find the root cause, and wrote a post-mortem." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master server-side programming language (Node.js, Python, or Java)",
        "Deep understanding of HTTP protocol, status codes, and headers",
        "Proficiency in basic Linux shell commands and file systems",
        "Version control mastery with Git and GitHub"
      ],
      coreSkills: [
        "Build modular RESTful APIs with Express / NestJS with validation",
        "Design 3NF relational database schemas with PostgreSQL and Prisma",
        "Implement secure JWT authentication and role-based access control",
        "Integrate Redis caching to optimize database queries"
      ],
      projects: [
        "Complete and deploy Beginner Project (AuthShield)",
        "Complete and deploy Intermediate Project (StorePeak with Redis & Stripe)",
        "Complete and deploy Advanced Project (TaskFlow with BullMQ queues)",
        "Ship Production Capstone (FinScale Ledger with double-entry accounting)"
      ],
      portfolio: [
        "Publish clean Swagger / OpenAPI 3.0 documentation for all API projects",
        "Author detailed GitHub READMEs with architecture diagrams and API endpoint lists",
        "Ensure all backend projects have automated integration tests with Supertest"
      ],
      interview: [
        "Solve 75+ DSA problems on LeetCode focusing on HashMaps, Trees, and Strings",
        "Master database theory: B-Tree Indexing, Isolation Levels, and ACID transactions",
        "Practice 5 core System Design questions (URL Shortener, Rate Limiter, Notification API)",
        "Conduct 3+ mock technical backend interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Backend Developer resume emphasizing scale and latency",
        "Engage with engineering managers and backend leads on LinkedIn",
        "Apply to 30+ tailored backend engineering positions"
      ]
    },

    technologies: [
      { name: "Node.js & Express.js / NestJS", category: "Runtime & Framework", priority: "MUST LEARN", description: "Asynchronous I/O event-driven server development." },
      { name: "Relational Database (PostgreSQL / MySQL)", category: "Database", priority: "MUST LEARN", description: "ACID transactions, schemas, joins, indexing, query optimization." },
      { name: "RESTful API Architecture", category: "API Design", priority: "MUST LEARN", description: "Resource modeling, HTTP standards, status codes, versioning." },
      { name: "Authentication (JWT, OAuth, Cookies)", category: "Security", priority: "MUST LEARN", description: "Token auth, password hashing (bcrypt), role-based access control." },
      { name: "NoSQL Database (MongoDB / Redis)", category: "Database & Cache", priority: "HIGH PRIORITY", description: "Document stores and in-memory caching/session stores." },
      { name: "ORM/ODM (Prisma, Mongoose, TypeORM)", category: "Database Tools", priority: "HIGH PRIORITY", description: "Type-safe database modeling and migrations." },
      { name: "Docker Containerization", category: "DevOps", priority: "HIGH PRIORITY", description: "Containerizing backend services for reproducible environments." },
      { name: "Message Queues (RabbitMQ / BullMQ / Kafka)", category: "Async Processing", priority: "GOOD TO KNOW", description: "Background workers, decoupling tasks, pub/sub architecture." },
      { name: "GraphQL & gRPC", category: "API Protocols", priority: "GOOD TO KNOW", description: "Schema-driven querying and binary RPC communication." },
      { name: "System Design & Microservices", category: "Architecture", priority: "GOOD TO KNOW", description: "Load balancing, horizontal scaling, database sharding." },
      { name: "Kubernetes & Serverless", category: "Infrastructure", priority: "OPTIONAL / LATER", description: "Container orchestration and event-driven cloud functions." }
    ],
    tools: [
      { name: "Postman / Insomnia", priority: "MUST LEARN", purpose: "Testing, mocking, and documenting API requests." },
      { name: "DBeaver / pgAdmin / Compass", priority: "MUST LEARN", purpose: "Visual database management and query execution." },
      { name: "Docker Desktop", priority: "HIGH PRIORITY", purpose: "Running local containers for databases and Redis." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Version control, code reviews, and CI integration." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Language Deep Dive & Computer Science", topics: ["Async programming (Event Loop, Callbacks, Promises, Async/Await)", "File Systems, Streams, and Buffer operations", "HTTP protocol, Headers, Methods & Status Codes", "Basic Linux Command Line & Bash scripting"], milestone: "Build a raw HTTP server handling routes and file uploads without third-party frameworks." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-7", focus: "Express/Framework & REST API Architecture", topics: ["Middleware pipeline design and error handling", "REST API standards, request validation (Zod/Joi)", "JWT Authentication, bcrypt hashing, cookie handling", "CORS, Rate Limiting, Helmet security headers"], milestone: "Build a complete REST API with authentication and protected endpoints." },
      { step: 3, phase: "TOOLS", duration: "Week 8", focus: "Postman, Database Clients & Git", topics: ["Postman environment variables, automated test scripts", "Git feature branch workflows & merge conflicts", "Environment variables management (.env) and security"], milestone: "Export a complete Postman collection with test assertions and automated runs." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 9-14", focus: "Database Mastery & Caching", topics: ["Relational Database Design (PostgreSQL), Schema Normalization (3NF)", "Foreign Keys, Joins, Aggregations & Indexes (B-Tree, GIN)", "Prisma / Mongoose ORM usage & migration scripts", "Redis Caching: Cache-aside pattern, TTLs, session storage"], milestone: "Build a database-backed API with relational models, indexing, and Redis caching." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Asynchronous Jobs & Docker", topics: ["Dockerfiles, multi-stage builds, and Docker Compose", "Background Jobs & Queues with Redis/BullMQ", "File processing pipelines (S3 / Cloudinary integration)", "WebSockets / SSE for real-time bidirectional communication"], milestone: "Build a containerized event-driven backend service with Docker Compose." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Backend Systems", topics: ["Clean Architecture (Controller-Service-Repository pattern)", "Automated integration testing with Supertest and Jest", "API rate limiting, logging (Winston), and health checks"], milestone: "Deploy 3 production-grade backend APIs on AWS / Render / Railway." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "API Documentation & Showcase", topics: ["Swagger / OpenAPI 3.0 interactive documentation", "System architecture diagrams (draw.io/Mermaid)", "GitHub repository showcasing scalable folder structure"], milestone: "Live Swagger docs and public GitHub repos with detailed setup guides." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "System Design & Core Backend Q&A", topics: ["Database Indexing & Query optimization (EXPLAIN ANALYZE)", "SQL vs NoSQL trade-offs & ACID vs BASE", "Basic System Design (Design URL Shortener, Rate Limiter, Notification Service)", "Concurrency, Race conditions, and Transactions"], milestone: "Pass backend technical interviews and whiteboard system design rounds." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Resume & Job Applications", topics: ["ATS Resume emphasizing scale, latency, and database optimizations", "LinkedIn networking with tech leads and recruiters", "Live coding practice in Node/Python/Java"], milestone: "Secure job offers as an Associate / Junior Backend Engineer." }
    ],
    certifications: [
      { name: "PostgreSQL Associate DBA / Developer", issuer: "PostgreSQL Guild" },
      { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Database & Performance", topics: ["How B-Tree indexes work & when indexes fail", "Database Isolation Levels (Read Committed vs Serializable)", "N+1 Query problem and how to solve it", "Redis eviction policies and cache stampede prevention"] },
      { category: "Architecture & System Design", topics: ["Monolith vs Microservices trade-offs", "Stateless authentication with JWT vs Session stores", "Design a Distributed Rate Limiter (Token Bucket / Sliding Window)", "Handling database transactions across multiple tables"] }
    ],
    relatedRoles: ["Full Stack Developer", "Software Engineer", "DevOps Engineer", "Database Developer"]
  },

  {
    id: "software-engineer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Software Engineer",
    slug: "software-engineer",
    badge: "Top Pay / High Demand",
    shortDescription: "Builds scalable distributed software systems, data structures, algorithms, and modular design patterns.",
    description: "A Software Engineer focuses on computer science foundations, algorithm efficiency, modular object-oriented software design, distributed systems, and scalable codebases in Java, C++, Python, or Go.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹12 LPA", mid: "₹13 - ₹25 LPA", senior: "₹26 - ₹60+ LPA" },
    responsibilities: [
      "Design and implement scalable, high-throughput software services adhering to SOLID and Clean Architecture.",
      "Optimize computational algorithms, memory structures, and database query latency.",
      "Conduct rigorous code reviews, automated unit/integration testing, and system refactoring.",
      "Architect distributed systems, message queues, and resilient fault-tolerant services.",
      "Participate in high-level system design and architectural capacity planning."
    ],
    prerequisites: [
      { name: "Data Structures & Algorithms", desc: "Arrays, LinkedLists, Trees, Graphs, Dynamic Programming, Big-O.", required: true },
      { name: "Computer Science Core", desc: "Operating Systems, Computer Networks, DBMS, and Compiler/Memory basics.", required: true },
      { name: "Strong Typed Language", desc: "Deep proficiency in Java, C++, Python, or Go.", required: true },
      { name: "System Design Concepts", desc: "Understanding scalability, caching, load balancing, and concurrency.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Data Structures & Algorithmic Complexity (DSA)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Fundamental building blocks for writing efficient software and passing Tier-1 product company interviews.",
        prerequisite: "Basic Programming in Java/C++/Python",
        depth: "Deep Mastery",
        topics: ["Time and Space Complexity (Big-O notation)", "Linear Structures: Arrays, Strings, Linked Lists, Stacks, Queues", "Non-Linear Structures: Binary Trees, BSTs, Heaps, Graphs", "Techniques: Two Pointers, Sliding Window, Recursion, Dynamic Programming"],
        practice: "Solve 100+ LeetCode Medium problems across top patterns.",
        miniProject: "Build an algorithmic Visualizer tool showing real-time sorting and pathfinding animations."
      },
      {
        step: 2,
        technology: "Object-Oriented Design & Design Patterns",
        priority: "MUST LEARN",
        whyYouNeedIt: "Ensures enterprise codebases are modular, extensible, testable, and maintainable over years of development.",
        prerequisite: "DSA Core",
        depth: "Deep Mastery",
        topics: ["SOLID Principles (Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion)", "Creational Patterns: Factory, Builder, Singleton", "Structural Patterns: Adapter, Decorator, Facade", "Behavioral Patterns: Strategy, Observer, Command"],
        practice: "Refactor a monolithic script into a clean OOP design pattern architecture.",
        miniProject: "Design an in-memory Parking Lot or Elevator Management system in Java/C++."
      },
      {
        step: 3,
        technology: "Operating Systems & Concurrency",
        priority: "MUST LEARN",
        whyYouNeedIt: "Critical for understanding multi-threaded programming, memory safety, race conditions, and deadlocks.",
        prerequisite: "Computer Science Basics",
        depth: "Deep Mastery",
        topics: ["Process vs Thread memory layouts", "Multi-threading, Thread Pools, and Concurrency models", "Synchronization primitives: Mutex, Semaphores, Atomic variables", "Deadlocks, Race Conditions, and CPU scheduling"],
        practice: "Implement a thread-safe Blocking Queue using Mutex locks and Condition variables.",
        miniProject: "Build a multi-threaded Web Scraper / Crawler with worker thread pools in Java/Go."
      },
      {
        step: 4,
        technology: "Distributed Systems & System Design",
        priority: "MUST LEARN",
        whyYouNeedIt: "Required to architect systems that serve millions of concurrent users with 99.99% uptime.",
        prerequisite: "Operating Systems & Databases",
        depth: "Deep Mastery",
        topics: ["Scalability: Horizontal vs Vertical scaling, Load Balancers", "CAP Theorem, Consistency models (Strong vs Eventual)", "Caching strategies, CDN edge caching, and Cache Stampede prevention", "Database sharding, replication, and read-write split", "Message Brokers & Event-Driven Architecture (Kafka / RabbitMQ)"],
        practice: "Design an end-to-end architecture diagram for a global Rate Limiter or URL Shortener.",
        miniProject: "Build a distributed Key-Value Cache with consistent hashing and node failover."
      }
    ],

    learnLater: [
      {
        technology: "Custom Kernel Development",
        reason: "Unless entering low-level OS development, standard software engineering leverages existing kernels and runtimes.",
        whenToLearn: "When pursuing specialized systems or embedded kernel engineering."
      },
      {
        technology: "Quantum Computing Algorithms",
        reason: "Theoretical and not currently used in commercial product engineering.",
        whenToLearn: "When entering academic or advanced quantum research labs."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "Thread-Safe In-Memory Cache with LRU Eviction",
        difficulty: "Beginner Friendly",
        skills: ["Java / C++", "Doubly Linked List", "HashMap", "Concurrency", "Unit Testing"],
        technology: ["Java / C++", "JUnit / GTest", "Maven / CMake"],
        expectedOutcome: "High-speed in-memory cache supporting O(1) reads, writes, and LRU eviction with thread-safe read-write locks.",
        portfolioValue: "Validates pure data structures, concurrency handling, and memory management."
      },
      {
        tier: "Intermediate",
        title: "Distributed Rate Limiter & Token Bucket Engine",
        difficulty: "Intermediate",
        skills: ["Go / Java", "Redis", "gRPC", "Docker", "Concurrency"],
        technology: ["Go / Java", "Redis", "gRPC", "Docker"],
        expectedOutcome: "High-performance standalone rate-limiting service using sliding window counters and token buckets communicating via gRPC.",
        portfolioValue: "High Recruiter Value — Demonstrates network protocols (gRPC), distributed state, and algorithm efficiency."
      },
      {
        tier: "Advanced",
        title: "Mini-Kafka Distributed Message Broker",
        difficulty: "Advanced",
        skills: ["Append-Only Commit Logs", "TCP Sockets", "Partitioning", "Consumer Groups", "Replication"],
        technology: ["Java / Go / Rust", "TCP Sockets", "File I/O", "Docker"],
        expectedOutcome: "A functional distributed publish-subscribe message broker with disk-persisted commit logs, topic partitions, and consumer offsets.",
        portfolioValue: "Elite Systems Engineering — Proves deep mastery over systems programming, file I/O streams, and network protocols."
      },
      {
        tier: "Production / Capstone",
        title: "Globally Distributed Object Storage Service",
        difficulty: "Production Grade / Capstone",
        skills: ["Consistent Hashing", "Erasure Coding", "HTTP Gateway", "Docker", "Prometheus", "CI/CD"],
        technology: ["Go / Java", "Docker", "Prometheus", "Grafana", "GitHub Actions"],
        expectedOutcome: "A cloud object storage system implementing consistent hashing ring for data partitioning, health heartbeats, automatic node rebalancing, and Prometheus telemetry.",
        portfolioValue: "FAANG-Tier Showcase — Proves distributed system architecture, fault tolerance, and production software craftsmanship."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Time & Space Complexity", question: "Explain the amortized time complexity of dynamic array resizing and hash map rehashing.", tip: "Walk through doubling capacity and geometric series sum." },
        { topic: "Memory Management & Garbage Collection", question: "How does Generational Garbage Collection work in the JVM (Eden, Survivor, Tenured spaces)?", tip: "Explain Mark-and-Sweep, Minor GC vs Major/Full GC pauses." }
      ],
      codingProblems: [
        { title: "Trapping Rain Water", difficulty: "Hard", pattern: "Two Pointers or Monotonic Stack", focus: "Complex array geometry optimization." },
        { title: "Course Schedule (Cycle Detection)", difficulty: "Medium", pattern: "Graph Topological Sort (Kahn's Algorithm / DFS)", focus: "Directed graph traversal." },
        { title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", pattern: "Tree Traversal with Preorder / BFS", focus: "Data stream encoding/decoding." }
      ],
      coreCSSubjects: [
        { subject: "Operating Systems", topic: "Virtual Memory & Paging", keyQuestion: "Explain how Virtual Memory translates virtual addresses to physical RAM via Page Tables and TLB (Translation Lookaside Buffer)." },
        { subject: "Database Internals", topic: "Write-Ahead Logging (WAL)", keyQuestion: "How does Write-Ahead Logging guarantee ACID Durability during power loss?" }
      ],
      roleSpecificQuestions: [
        { question: "Design a High-Throughput URL Shortener like bit.ly handling 100M writes per day.", answerKey: "Discuss Base62 encoding, distributed ID generation (Twitter Snowflake), caching hot URLs in Redis, and read-replica databases." }
      ],
      projectQuestions: [
        { question: "How do you evaluate performance bottlenecks when profiling a multi-threaded software application?", tip: "Discuss CPU flame graphs, thread contention analysis, and memory leak profiling." }
      ],
      hrPreparation: [
        { question: "How do you maintain software quality under aggressive product deadlines?", strategy: "Emphasize writing automated tests, defining MVP scope, and keeping technical debt logged and tracked." }
      ],
      behavioralPreparation: [
        { scenario: "Tell me about a complex technical decision where you had to choose between two architectural patterns.", framework: "STAR: Detail the benchmarking criteria, memory/latency trade-offs, and final production outcome." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Solve 150+ DSA problems on LeetCode covering all core patterns",
        "Master OOP Design Patterns (SOLID, Factory, Observer, Strategy)",
        "Deep understanding of OS Concurrency, Threads, and Memory models",
        "Proficiency in Git workflows and continuous integration"
      ],
      coreSkills: [
        "Write clean, modular code in a strongly typed language (Java, C++, Go)",
        "Design scalable relational database schemas and write optimized queries",
        "Build multi-threaded concurrent services with synchronized data structures",
        "Architect distributed systems components with caching and queues"
      ],
      projects: [
        "Complete and deploy Beginner Project (Thread-Safe LRU Cache)",
        "Complete and deploy Intermediate Project (Distributed Rate Limiter)",
        "Complete and deploy Advanced Project (Mini-Kafka Message Broker)",
        "Ship Production Capstone (Distributed Object Storage Engine)"
      ],
      portfolio: [
        "Publish comprehensive technical documentation and system architecture diagrams",
        "Benchmark project latency and throughput, publishing performance graphs in READMEs",
        "Contribute to open-source software libraries or frameworks"
      ],
      interview: [
        "Pass 5+ mock DSA coding interviews with LeetCode Medium/Hard problems",
        "Master System Design fundamentals (Load balancers, Caching, Sharding, CAP theorem)",
        "Prepare 3 project deep-dive architecture defenses using the STAR method"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Software Engineer resume highlighting algorithms and scale",
        "Engage with engineering managers at Tier-1 product tech companies",
        "Apply to 30+ tailored software engineering roles"
      ]
    },

    technologies: [
      { name: "Java / C++ / Go", category: "Language", priority: "MUST LEARN", description: "High-performance enterprise programming languages." },
      { name: "Data Structures & Algorithms", category: "Core CS", priority: "MUST LEARN", description: "Trees, graphs, dynamic programming, sorting, complexity." },
      { name: "Design Patterns (SOLID / GoF)", category: "Software Design", priority: "MUST LEARN", description: "Factory, Observer, Strategy, Dependency Injection." },
      { name: "Relational & Distributed DBs", category: "Database", priority: "MUST LEARN", description: "PostgreSQL, MySQL, Cassandra, partitioning, replication." },
      { name: "System Design & Architecture", category: "System Design", priority: "MUST LEARN", description: "Load balancers, caching, microservices, CAP theorem." },
      { name: "Docker & Kubernetes", category: "Infrastructure", priority: "HIGH PRIORITY", description: "Containerized deployments and orchestration." },
      { name: "Message Brokers (Kafka / RabbitMQ)", category: "Messaging", priority: "HIGH PRIORITY", description: "Event streaming and async decoupled messaging." },
      { name: "Linux & Network Protocols (TCP/IP)", category: "Systems", priority: "HIGH PRIORITY", description: "Sockets, HTTP/2, gRPC, OS process management." }
    ],
    tools: [
      { name: "IntelliJ IDEA / CLion / VS Code", priority: "MUST LEARN", purpose: "Enterprise IDEs for Java/C++/Go." },
      { name: "Git & GitHub / GitLab", priority: "MUST LEARN", purpose: "Version control and CI/CD pipelines." },
      { name: "Docker & Docker Compose", priority: "MUST LEARN", purpose: "Containerized service management." },
      { name: "JMeter / k6", priority: "HIGH PRIORITY", purpose: "Performance and load benchmarking." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Data Structures & Algorithms I", topics: ["Arrays, Strings, HashMaps, Two Pointers", "Linked Lists, Stacks, Queues", "Binary Search & Recursion", "Time/Space Complexity (Big-O)"], milestone: "Solve 75 LeetCode Easy/Medium problems with clean code." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Data Structures II & Trees/Graphs", topics: ["Binary Trees, BSTs, Tree Traversals", "Graphs: BFS, DFS, Dijkstra, Topological Sort", "Dynamic Programming Fundamentals", "Bit Manipulation & Greedy Algorithms"], milestone: "Solve 75 additional LeetCode Medium/Hard graph & tree problems." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Build Systems & Debuggers", topics: ["Maven / Gradle / CMake build pipelines", "Profiling with JProfiler / Valgrind / GDB", "Unit Testing (JUnit / Mockito / GTest)"], milestone: "Configure build and test automation pipelines with 90%+ code coverage." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-15", focus: "OOP Design Patterns & Low-Level Design", topics: ["SOLID Principles in Depth", "Creational, Structural & Behavioral Patterns", "Concurrency, Multi-threading, Synchronization, Mutexes", "Designing Low-Level Systems (Parking Lot, Elevator, Chess)"], milestone: "Build 3 complete Object-Oriented Low-Level Design systems." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "High-Level System Design & Distributed Systems", topics: ["Horizontal Scaling, Load Balancing, Consistent Hashing", "Database Sharding, Replication, WAL, Indexes", "Caching Patterns, Redis, CDN", "Message Queues (Kafka, RabbitMQ) & Pub-Sub"], milestone: "Complete 5 end-to-end System Design blueprints." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Scalable Systems Implementation", topics: ["High-Throughput Distributed Rate Limiter", "Mini-Kafka Event Broker", "Distributed In-Memory Cache"], milestone: "Ship 3 high-performance software projects with benchmarks." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Engineering Documentation & Showcase", topics: ["System Architecture Diagrams (C4 Model)", "Throughput & Latency Benchmarks in READMEs", "Clean open-source contributions"], milestone: "Polished GitHub profile with system design docs and benchmark results." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "FAANG-Level Technical Interviews", topics: ["Live DSA Coding Rounds (LeetCode Medium/Hard)", "Low-Level Design (LLD) Machine Coding", "High-Level System Design (HLD) Whiteboarding", "Behavioral Leadership Questions (STAR Method)"], milestone: "Ace simulated FAANG technical interview loops." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Tier-1 Product Company Applications", topics: ["ATS Resume emphasizing scale, algorithms, and latency improvements", "Referrals from senior engineers on LinkedIn", "Salary negotiation strategies"], milestone: "Secure offers as an Associate / Junior Software Development Engineer (SDE-1)." }
    ],
    certifications: [
      { name: "Oracle Certified Professional: Java SE Developer", issuer: "Oracle" },
      { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Data Structures & Algorithms", topics: ["Graph cycle detection (Tarjan / Kahn)", "Dynamic Programming state transitions (0/1 Knapsack, LCS)", "Trie prefix tree implementations", "Heap sort and Priority Queue internals"] },
      { category: "System Design", topics: ["Design a distributed Key-Value store", "Design Twitter newsfeed with Fan-Out on write vs read", "Design a Distributed Job Scheduler", "Consistent Hashing with virtual nodes"] }
    ],
    relatedRoles: ["Backend Developer", "Full Stack Developer", "Site Reliability Engineer", "Cloud Architect"]
  },

  {
    id: "java-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Java Developer",
    slug: "java-developer",
    badge: "Enterprise Standard",
    shortDescription: "Builds enterprise backends, microservices, and secure APIs using Java and Spring Boot.",
    description: "A Java Developer builds robust, scalable enterprise systems, banking platforms, microservices, and REST APIs using the Java ecosystem, Spring Boot, Hibernate/JPA, and relational databases.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9.5 - ₹19 LPA", senior: "₹20 - ₹45+ LPA" },
    responsibilities: [
      "Develop enterprise RESTful APIs and microservices using Java 17/21 and Spring Boot.",
      "Design database schemas and data access layers using Spring Data JPA, Hibernate, and PostgreSQL.",
      "Implement enterprise security with Spring Security, OAuth2, and JWT tokens.",
      "Build event-driven asynchronous microservices with Apache Kafka and RabbitMQ.",
      "Write unit and integration tests using JUnit 5, Mockito, and Testcontainers."
    ],
    prerequisites: [
      { name: "Core Java Fundamentals", desc: "OOP concepts, Collections Framework, Streams API, and Exception handling.", required: true },
      { name: "Database & SQL", desc: "Relational modeling, SQL queries, joins, and transactions.", required: true },
      { name: "Build Tools (Maven/Gradle)", desc: "Managing dependencies, plugins, and build lifecycles.", required: true },
      { name: "Web Basics & REST", desc: "HTTP methods, status codes, JSON payload formatting.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Core Java (Java 17/21) & OOP",
        priority: "MUST LEARN",
        whyYouNeedIt: "The foundational language powering enterprise backend architectures worldwide.",
        prerequisite: "Basic Programming",
        depth: "Deep Mastery",
        topics: ["OOP Principles (Inheritance, Polymorphism, Encapsulation, Abstraction)", "Collections Framework (List, Set, Map, Queue internals)", "Java Streams API, Lambdas, and Optional", "Exception Handling and Memory Management (JVM Stack vs Heap)"],
        practice: "Process a CSV dataset using Java 17 Streams, filter records, and aggregate statistics.",
        miniProject: "Build an in-memory Banking Account Management CLI system with custom exceptions."
      },
      {
        step: 2,
        technology: "Spring Framework & Spring Boot",
        priority: "MUST LEARN",
        whyYouNeedIt: "The industry standard Java enterprise framework for building production-grade microservices.",
        prerequisite: "Core Java & Maven",
        depth: "Deep Mastery",
        topics: ["Dependency Injection (DI) & Inversion of Control (IoC) Container", "Spring Boot auto-configuration and application properties", "Spring MVC: Controllers, RequestMapping, Response Entities", "Input validation with Jakarta Validation (@Valid, @NotNull)"],
        practice: "Build a REST API with Spring Boot implementing clean Controller-Service-Repository architecture.",
        miniProject: "Build an Employee Management REST API with full CRUD and validation."
      },
      {
        step: 3,
        technology: "Spring Data JPA & Hibernate",
        priority: "MUST LEARN",
        whyYouNeedIt: "Automates object-relational mapping, database queries, transactions, and pagination in Java.",
        prerequisite: "Spring Boot & PostgreSQL",
        depth: "Deep Mastery",
        topics: ["Entity mapping (@Entity, @Table, @Id, @GeneratedValue)", "Entity Relationships (@OneToMany, @ManyToOne, @ManyToMany)", "JPA Repository, custom query methods, and JPQL / Native queries", "Managing Transactions with @Transactional and handling lazy loading exceptions"],
        practice: "Write optimized JPQL queries that eliminate N+1 lazy loading queries with `JOIN FETCH`.",
        miniProject: "Build a multi-entity E-Commerce Database API with orders, products, and customer relationships."
      },
      {
        step: 4,
        technology: "Spring Security & JWT Authentication",
        priority: "MUST LEARN",
        whyYouNeedIt: "Secures enterprise endpoints, handles user roles, password encryption, and token authentication.",
        prerequisite: "Spring Data JPA",
        depth: "Deep Mastery",
        topics: ["SecurityFilterChain configuration in Spring Security 6", "BCryptPasswordEncoder for secure password storage", "JWT Authentication Filter and Token Generation", "Method-level authorization with @PreAuthorize"],
        practice: "Implement role-based access control (ADMIN, USER) on Spring Boot endpoints.",
        miniProject: "Build a secure User Authentication Microservice with JWT and refresh token rotation."
      },
      {
        step: 5,
        technology: "Microservices Architecture (Spring Cloud & Kafka)",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Enables building enterprise distributed systems with service discovery, API gateways, and async events.",
        prerequisite: "Spring Security & JPA",
        depth: "Deep Mastery",
        topics: ["Spring Cloud Gateway & Eureka Service Discovery", "Inter-service communication with OpenFeign and WebClient", "Event-Driven messaging with Apache Kafka", "Resilience4j Circuit Breaker patterns"],
        practice: "Configure an API Gateway routing traffic to 2 distinct Spring Boot microservices.",
        miniProject: "Build an Event-Driven Order Processing Microservice system with Kafka."
      }
    ],

    learnLater: [
      {
        technology: "Enterprise Java Beans (EJB) & Legacy J2EE",
        reason: "Outdated legacy standards superseded by Spring Boot and modern cloud-native Java.",
        whenToLearn: "Only if hired to maintain 15-year-old legacy enterprise banking mainframes."
      },
      {
        technology: "Writing Custom JVM Bytecode Manipulators",
        reason: "Compiler-level internals not required for standard enterprise application engineering.",
        whenToLearn: "When developing profilers, APM tools, or custom bytecode agents."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "Enterprise Contact & CRM REST API",
        difficulty: "Beginner Friendly",
        skills: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Validation"],
        technology: ["Java 17", "Spring Boot", "PostgreSQL", "Maven"],
        expectedOutcome: "RESTful CRM API with pagination, sorting, search filtering, and custom validation.",
        portfolioValue: "Proves Spring Boot core architecture and clean relational data persistence."
      },
      {
        tier: "Intermediate",
        title: "Secure Banking Portal Backend",
        difficulty: "Intermediate",
        skills: ["Spring Security 6", "JWT Auth", "PostgreSQL", "Transactions", "Swagger"],
        technology: ["Spring Boot", "Spring Security", "PostgreSQL", "JWT", "OpenAPI"],
        expectedOutcome: "Banking API with atomic fund transfers between accounts, transaction audit logs, and JWT auth.",
        portfolioValue: "High Enterprise Value — Demonstrates financial transaction consistency and modern Spring Security."
      },
      {
        tier: "Advanced",
        title: "Event-Driven E-Commerce Microservices Platform",
        difficulty: "Advanced",
        skills: ["Spring Cloud Gateway", "Apache Kafka", "Eureka", "Resilience4j", "Docker"],
        technology: ["Spring Boot 3", "Spring Cloud", "Apache Kafka", "PostgreSQL", "Docker Compose"],
        expectedOutcome: "Microservices platform featuring Product Service, Order Service, and Notification Service communicating via Kafka with Circuit Breakers.",
        portfolioValue: "Top-Tier Enterprise Showcase — Shows distributed microservice design, event streaming, and fault tolerance."
      },
      {
        tier: "Production / Capstone",
        title: "Enterprise Core Banking Ledger & Payment Engine",
        difficulty: "Production Grade / Capstone",
        skills: ["Double-Entry Ledger", "Testcontainers", "Prometheus", "Docker", "CI/CD"],
        technology: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Prometheus", "Docker", "GitHub Actions"],
        expectedOutcome: "Production-grade core banking ledger with double-entry bookkeeping, strict idempotency enforcement, integration tests with Testcontainers, and Prometheus telemetry.",
        portfolioValue: "Elite Enterprise Project — Guarantees serious consideration for top enterprise and banking tech roles."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Java Memory Model", question: "Explain the difference between Heap Memory and Stack Memory in Java. Where are objects and primitive variables stored?", tip: "Objects always reside on the heap; references and local primitives reside on the stack." },
        { topic: "HashMap Internals in Java", question: "How does Java's HashMap handle hash collisions? How does it transition from LinkedList to Red-Black Tree in Java 8+?", tip: "Explain bucket indexing via hash code, equals() contract, and treeification threshold (8)." }
      ],
      codingProblems: [
        { title: "Implement a Thread-Safe Producer-Consumer Queue", difficulty: "Medium", pattern: "ReentrantLock with Condition or BlockingQueue", focus: "Java multi-threading." },
        { title: "Find First Unique Character in String using Streams", difficulty: "Easy", pattern: "Java 8 Streams and LinkedHashMap", focus: "Functional Java." }
      ],
      coreCSSubjects: [
        { subject: "Software Engineering", topic: "Spring IoC & Dependency Injection", keyQuestion: "Explain the Spring Inversion of Control (IoC) container and the lifecycle of a Spring Bean (@PostConstruct, @PreDestroy)." }
      ],
      roleSpecificQuestions: [
        { question: "What is the difference between `@Component`, `@Service`, and `@Repository` in Spring?", answerKey: "They are all stereotypes of @Component, but @Repository adds automatic persistence exception translation, and @Service indicates business logic." }
      ],
      projectQuestions: [
        { question: "How do you handle distributed transactions across multiple microservices without 2-Phase Commit?", tip: "Explain the Saga Pattern (Choreography vs Orchestration) with compensating transactions." }
      ],
      hrPreparation: [
        { question: "Why is Java still the preferred choice for enterprise banking and healthcare systems?", strategy: "Mention platform independence, strict type safety, backwards compatibility, high-throughput garbage collection, and massive ecosystem maturity." }
      ],
      behavioralPreparation: [
        { scenario: "Describe how you debugged a memory leak or High CPU issue in a Java application.", framework: "STAR: Detail generating heap dumps (jmap/jcmd), analyzing objects with Eclipse Memory Analyzer (MAT), identifying unclosed database connections or static collections, and deploying a fix." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master Core Java (OOP, Collections Framework, Streams API, Multithreading)",
        "Deep understanding of SQL, joins, transactions, and indexing",
        "Proficiency in build tools (Maven or Gradle)",
        "Git version control mastery"
      ],
      coreSkills: [
        "Build modular enterprise APIs with Spring Boot and Spring MVC",
        "Object-relational mapping mastery with Spring Data JPA and Hibernate",
        "Secure APIs with Spring Security 6 and JWT authentication",
        "Integrate Redis caching to accelerate database queries"
      ],
      projects: [
        "Complete and deploy Beginner Project (CRM REST API)",
        "Complete and deploy Intermediate Project (Banking Portal with JWT)",
        "Complete and deploy Advanced Project (E-Commerce Microservices with Kafka)",
        "Ship Production Capstone (Enterprise Banking Ledger with Testcontainers)"
      ],
      portfolio: [
        "Document all APIs with OpenAPI / Swagger UI interactive documentation",
        "Publish clean GitHub repositories with multi-module Maven setups",
        "Include unit and integration tests with JUnit 5 and Mockito in all repos"
      ],
      interview: [
        "Solve 75+ DSA problems in Java on LeetCode",
        "Master Java theory (JVM internals, Garbage Collection, Spring Bean Lifecycles)",
        "Practice 5 core enterprise System Design and Microservice questions",
        "Conduct 3+ mock technical Java interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Java Developer resume highlighting Spring Boot and microservices",
        "Target enterprise IT firms, banks, and product companies",
        "Apply to 30+ tailored Java backend positions"
      ]
    },

    technologies: [
      { name: "Java (17 / 21 LTS)", category: "Language", priority: "MUST LEARN", description: "Modern Java, OOP, Streams, Concurrency, JVM internals." },
      { name: "Spring Boot & Spring Framework", category: "Framework", priority: "MUST LEARN", description: "IoC, Dependency Injection, REST controllers, validation." },
      { name: "Spring Data JPA & Hibernate", category: "ORM / Database", priority: "MUST LEARN", description: "Entity mapping, transactions, JPQL, query optimization." },
      { name: "Spring Security & JWT", category: "Security", priority: "MUST LEARN", description: "Authentication, authorization, filters, OAuth2." },
      { name: "Relational Database (PostgreSQL / MySQL)", category: "Database", priority: "MUST LEARN", description: "Schema design, indexing, foreign keys, ACID." },
      { name: "Microservices (Spring Cloud / Eureka)", category: "Architecture", priority: "HIGH PRIORITY", description: "Service discovery, API Gateway, Feign clients." },
      { name: "Apache Kafka / RabbitMQ", category: "Messaging", priority: "HIGH PRIORITY", description: "Event-driven asynchronous microservice messaging." },
      { name: "Docker & Containerization", category: "DevOps", priority: "HIGH PRIORITY", description: "Containerizing Spring Boot apps for cloud deployment." }
    ],
    tools: [
      { name: "IntelliJ IDEA", priority: "MUST LEARN", purpose: "Industry-standard Java development IDE." },
      { name: "Maven / Gradle", priority: "MUST LEARN", purpose: "Dependency and build lifecycle management." },
      { name: "Postman", priority: "MUST LEARN", purpose: "API endpoint testing and documentation." },
      { name: "Docker Desktop", priority: "HIGH PRIORITY", purpose: "Local containerized databases and Kafka brokers." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Core Java & Modern Features", topics: ["Java OOP (Inheritance, Polymorphism, Encapsulation, Abstraction)", "Collections Framework (List, Set, Map internals)", "Java 8+ Streams API, Lambdas, Optional", "Exception Handling, Generics, and File I/O"], milestone: "Build an in-memory Console Banking application in pure Java." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Spring Boot & REST API Architecture", topics: ["Spring IoC & Dependency Injection", "Building REST APIs with Spring MVC", "Request validation with Hibernate Validator", "Configuration & Application Properties (dev, prod profiles)"], milestone: "Build a complete REST API with Spring Boot for a library system." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Maven & Database Tools", topics: ["Maven pom.xml dependency management and plugins", "DBeaver / pgAdmin for database inspection", "Postman automated API test suites"], milestone: "Set up a clean multi-environment Spring Boot development environment." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-15", focus: "Spring Data JPA & Security", topics: ["Spring Data JPA entity relationships (@OneToMany, @ManyToMany)", "Database migrations with Flyway", "Spring Security 6 with JWT authentication", "Transaction management with @Transactional"], milestone: "Build a secure enterprise API with role-based access control (RBAC)." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Microservices & Apache Kafka", topics: ["Spring Cloud: Eureka Discovery & Spring Cloud Gateway", "Event-Driven Microservices with Apache Kafka", "Resilience4j Circuit Breaker & Retry patterns", "Dockerizing Spring Boot microservices with Docker Compose"], milestone: "Deploy an event-driven 3-service Spring Boot microservices cluster." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Production Enterprise Systems", topics: ["Enterprise Banking & Payments Backend", "E-Commerce Microservices Engine", "Integration testing with Testcontainers & Mockito"], milestone: "Ship 3 comprehensive production-grade Java projects on GitHub." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "API Documentation & Showcase", topics: ["Swagger OpenAPI 3.0 interactive documentation", "Architecture diagrams using C4 model", "Clean multi-module Maven repository structure"], milestone: "A professional Java backend portfolio with live Swagger docs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Java & Spring Deep-Dive Interviews", topics: ["JVM Internals: ClassLoader, Memory Model, Garbage Collection", "Spring Bean Lifecycle & Proxies (@Transactional internals)", "Solving LeetCode Medium problems in Java", "Database Indexing & Hibernate N+1 query troubleshooting"], milestone: "Ace technical Java and Spring Boot coding and architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Enterprise Hiring & Placement", topics: ["Java Developer resume highlighting Spring Boot, Microservices, and Kafka", "Targeting enterprise software firms, banks, and IT services", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Java Developer." }
    ],
    certifications: [
      { name: "Oracle Certified Professional: Java SE 17 Developer", issuer: "Oracle" },
      { name: "Spring Certified Professional", issuer: "VMware / Broadcom" }
    ],
    interviewTopics: [
      { category: "Core Java", topics: ["Difference between `equals()` and `==`, and the contract with `hashCode()`", "How `HashMap` works internally in Java 8+ (Buckets -> Red-Black Tree)", "Difference between `Comparable` and `Comparator`", "Garbage Collection algorithms (G1GC, ZGC) and memory spaces (Eden, Survivor, Tenured)"] },
      { category: "Spring Boot & JPA", topics: ["Spring Bean Scopes (Singleton, Prototype, Request, Session)", "How does `@Transactional` work using Spring AOP Proxies?", "What is the N+1 Select Problem in Hibernate and how to solve it with `JOIN FETCH`?", "Difference between `@Controller` and `@RestController`"] }
    ],
    relatedRoles: ["Backend Developer", "Software Engineer", "Full Stack Developer", "Database Developer"]
  },

  {
    id: "python-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Python Developer",
    slug: "python-developer",
    badge: "Versatile & In-Demand",
    shortDescription: "Builds high-performance APIs, data automation pipelines, web scrapers, and backend services.",
    description: "A Python Developer writes clean, maintainable backend applications, high-performance asynchronous REST APIs (FastAPI, Django), automated data extraction pipelines, web scrapers, and integrates data science workflows.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9.5 - ₹19 LPA", senior: "₹20 - ₹44+ LPA" },
    responsibilities: [
      "Develop high-performance asynchronous RESTful APIs using FastAPI and Django REST Framework.",
      "Design database schemas and query layers using SQLAlchemy ORM and PostgreSQL.",
      "Build automated data processing pipelines, web scrapers (Scrapy, Playwright), and background workers (Celery).",
      "Integrate AI/ML model endpoints and data pipelines into production web applications.",
      "Write automated unit and integration tests using PyTest."
    ],
    prerequisites: [
      { name: "Python Core", desc: "Data types, dictionaries, list comprehensions, OOP, and decorators.", required: true },
      { name: "Relational Database Basics", desc: "SQL queries, joins, foreign keys, and transactions.", required: true },
      { name: "Web & API Concepts", desc: "HTTP methods, status codes, JSON serialization, REST principles.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on codebases.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Python 3 Core & Advanced Idioms",
        priority: "MUST LEARN",
        whyYouNeedIt: "The fundamental syntax and idiomatic programming patterns for building all Python services.",
        prerequisite: "Basic Programming Logic",
        depth: "Deep Mastery",
        topics: ["OOP in Python (Classes, Magic Methods __init__, __repr__, Inheritance)", "Decorators, Generators (yield), and Context Managers (with)", "List, Dict, and Set Comprehensions", "Type Hints (typing module) and Pydantic data validation", "Virtual environments (venv / poetry / uv)"],
        practice: "Write a custom `@timing` and `@retry` decorator with configurable backoff.",
        miniProject: "Build an automated CLI File Organizer and Metadata Parser."
      },
      {
        step: 2,
        technology: "Modern Web APIs with FastAPI & Pydantic",
        priority: "MUST LEARN",
        whyYouNeedIt: "The fastest, most modern Python web framework featuring native async and auto-generated Swagger docs.",
        prerequisite: "Python Core & HTTP",
        depth: "Deep Mastery",
        topics: ["FastAPI async routing, Dependency Injection (Depends)", "Pydantic V2 data validation schemas and serialization", "Handling query/path params, request bodies, and custom headers", "Automatic OpenAPI Swagger documentation generation"],
        practice: "Build a FastAPI endpoint validating complex nested JSON schemas with Pydantic.",
        miniProject: "Build a Recipe & Meal Planner REST API with full CRUD and validation."
      },
      {
        step: 3,
        technology: "SQLAlchemy 2.0 & PostgreSQL Persistence",
        priority: "MUST LEARN",
        whyYouNeedIt: "Industry-standard Python ORM for type-safe database modeling, transactions, and migrations.",
        prerequisite: "FastAPI & PostgreSQL",
        depth: "Deep Mastery",
        topics: ["SQLAlchemy 2.0 Declarative Base and async sessions", "Relationships (one-to-many, many-to-many) with back_populates", "Database migrations with Alembic (revisions, upgrade, downgrade)", "Writing optimized queries with select(), joins, and aggregations"],
        practice: "Set up Alembic migrations on a multi-table database with automated rollback tests.",
        miniProject: "Build a Book Store Inventory API with SQLAlchemy ORM and Alembic migrations."
      },
      {
        step: 4,
        technology: "Authentication & Security in Python",
        priority: "MUST LEARN",
        whyYouNeedIt: "Secures Python web applications using password hashing and token-based authentication.",
        prerequisite: "SQLAlchemy & FastAPI",
        depth: "Deep Mastery",
        topics: ["Password hashing with Passlib and bcrypt", "OAuth2 with Password Bearer flow and JWT tokens (python-jose)", "Role-based permission dependencies in FastAPI", "CORS middleware and environment secrets management"],
        practice: "Implement an authentication dependency in FastAPI checking user role permissions.",
        miniProject: "Build a Multi-Tenant User Management API with JWT Auth and role gates."
      },
      {
        step: 5,
        technology: "Asynchronous Background Tasks (Celery & Redis)",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Offloads time-consuming calculations, email sends, and scrapers from the main HTTP thread.",
        prerequisite: "FastAPI & Redis",
        depth: "Working Proficiency",
        topics: ["Celery worker setup with Redis message broker", "Scheduling periodic cron jobs with Celery Beat", "Monitoring Celery tasks with Flower", "Handling task retries and error reporting"],
        practice: "Build a Celery task that processes batch image conversions asynchronously.",
        miniProject: "Build an Asynchronous Report Generation & PDF Export API."
      }
    ],

    learnLater: [
      {
        technology: "Custom C-Extensions for Python (CFFI / Cython)",
        reason: "Advanced low-level optimization not needed for standard web APIs and automation.",
        whenToLearn: "When building ultra-high frequency algorithmic trading engines in Python."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "FastAPI Content Management & Bookmark Hub",
        difficulty: "Beginner Friendly",
        skills: ["Python 3", "FastAPI", "SQLAlchemy", "SQLite / PostgreSQL", "Pydantic"],
        technology: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "SQLite"],
        expectedOutcome: "RESTful bookmark manager API with tags, search, and automatic Swagger docs.",
        portfolioValue: "Proves modern Python API development, Pydantic validation, and clean ORM modeling."
      },
      {
        tier: "Intermediate",
        title: "Real-Time Stock & Crypto Telemetry API with Redis",
        difficulty: "Intermediate",
        skills: ["FastAPI Async", "PostgreSQL", "Redis Cache", "WebSockets", "PyTest"],
        technology: ["FastAPI", "PostgreSQL", "Redis", "WebSockets", "PyTest"],
        expectedOutcome: "Asynchronous API streaming live financial market data via WebSockets with Redis caching.",
        portfolioValue: "High Value — Demonstrates asynchronous Python programming, WebSockets, and Redis."
      },
      {
        tier: "Advanced",
        title: "Distributed Web Scraper & Intelligence Pipeline",
        difficulty: "Advanced",
        skills: ["Celery", "Redis", "Playwright", "PostgreSQL", "Docker", "FastAPI"],
        technology: ["Python", "Celery", "Redis", "Playwright", "FastAPI", "Docker Compose"],
        expectedOutcome: "Automated distributed web scraper extracting e-commerce price trends with anti-bot evasion and Celery worker queues.",
        portfolioValue: "Top-Tier Python Showcase — Proves distributed background tasks, web scraping, and containerization."
      },
      {
        tier: "Production / Capstone",
        title: "Enterprise AI Document Processing & Search Platform",
        difficulty: "Production Grade / Capstone",
        skills: ["FastAPI", "PostgreSQL + pgvector", "Celery", "OpenAI / HuggingFace", "Docker", "CI/CD"],
        technology: ["FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "Docker", "GitHub Actions"],
        expectedOutcome: "Production-ready AI document search engine extracting text from PDFs, generating semantic vector embeddings, and performing cosine similarity search via pgvector.",
        portfolioValue: "Elite AI/Python Showcase — Proves modern AI integration, vector databases, background task pipelines, and production readiness."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Python GIL (Global Interpreter Lock)", question: "What is the Python GIL? How does it impact CPU-bound vs I/O-bound multi-threaded programs?", tip: "Explain why multiprocessing or async is needed for CPU-bound tasks, while multithreading works well for I/O." },
        { topic: "Generators & Memory Efficiency", question: "Explain the difference between a Generator (yield) and a normal function. Why are generators critical for large datasets?", tip: "Generators produce items on-demand (lazy evaluation) without loading the full dataset into RAM." }
      ],
      codingProblems: [
        { title: "Implement an LRU Cache in Python using OrderedDict", difficulty: "Medium", pattern: "Hash Table + Linked Structure", focus: "Python standard library mastery." },
        { title: "Flatten a Deeply Nested Dictionary", difficulty: "Medium", pattern: "Recursion with key concatenation", focus: "Dictionary manipulation." }
      ],
      coreCSSubjects: [
        { subject: "Software Design", topic: "Python Decorators & Context Managers", keyQuestion: "How do Python context managers work under the hood using `__enter__` and `__exit__` magic methods?" }
      ],
      roleSpecificQuestions: [
        { question: "What makes FastAPI significantly faster than traditional Django or Flask?", answerKey: "Built natively on Starlette (ASGI async runtime) and Pydantic (compiled Rust core validation)." }
      ],
      projectQuestions: [
        { question: "How did you manage database connection pooling and async sessions in your FastAPI application?", tip: "Explain configuring SQLAlchemy `create_async_engine` with pool_size, max_overflow, and dependency injection session cleanup." }
      ],
      hrPreparation: [
        { question: "Why is Python your primary programming language of choice?", strategy: "Highlight readability, vast ecosystem for web, data, and AI, rapid prototyping, and mature production frameworks like FastAPI." }
      ],
      behavioralPreparation: [
        { scenario: "Tell me about a time you optimized a slow database query or Python function.", framework: "STAR: Detail profiling with cProfile / EXPLAIN ANALYZE, adding indexes, switching to vectorized operations or caching, and measuring 10x speedup." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master Python 3 Core (OOP, Decorators, Generators, Type Hints)",
        "Deep understanding of SQL, PostgreSQL schemas, and migrations",
        "Proficiency in virtual environments (venv, poetry)",
        "Git version control mastery"
      ],
      coreSkills: [
        "Build modular asynchronous APIs with FastAPI and Pydantic",
        "Object-relational mapping with SQLAlchemy 2.0 and Alembic",
        "Secure APIs with JWT authentication and password hashing",
        "Background task processing with Celery and Redis"
      ],
      projects: [
        "Complete and deploy Beginner Project (Bookmark Hub)",
        "Complete and deploy Intermediate Project (Real-Time Stock API)",
        "Complete and deploy Advanced Project (Distributed Scraper with Celery)",
        "Ship Production Capstone (AI Document Search Engine with pgvector)"
      ],
      portfolio: [
        "Publish automatic Swagger documentation for all FastAPI projects",
        "Author clean GitHub READMEs with architecture diagrams and setup guides",
        "Include unit and integration tests with PyTest in all repositories"
      ],
      interview: [
        "Solve 75+ DSA problems in Python on LeetCode",
        "Master Python theory (GIL, Generators, Decorators, Asyncio)",
        "Practice 5 core System Design questions",
        "Conduct 3+ mock technical interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Python Developer resume",
        "Engage with tech recruiters on LinkedIn and Wellfound",
        "Apply to 30+ tailored Python backend positions"
      ]
    },

    technologies: [
      { name: "Python (3.11+)", category: "Language", priority: "MUST LEARN", description: "OOP, async/await, generators, decorators, type hints." },
      { name: "FastAPI / Django REST", category: "Web Framework", priority: "MUST LEARN", description: "High-performance async APIs, Pydantic validation." },
      { name: "PostgreSQL & SQLAlchemy", category: "Database & ORM", priority: "MUST LEARN", description: "Relational modeling, async sessions, Alembic migrations." },
      { name: "Redis & Celery", category: "Task Queue", priority: "MUST LEARN", description: "Background workers, cron jobs, in-memory caching." },
      { name: "PyTest", category: "Testing", priority: "HIGH PRIORITY", description: "Automated unit and integration testing." },
      { name: "Web Scraping (Scrapy / Playwright)", category: "Automation", priority: "HIGH PRIORITY", description: "Data extraction pipelines and browser automation." },
      { name: "Docker", category: "DevOps", priority: "HIGH PRIORITY", description: "Containerized deployment of Python services." }
    ],
    tools: [
      { name: "VS Code / PyCharm", priority: "MUST LEARN", purpose: "Primary Python development IDE." },
      { name: "Postman", priority: "MUST LEARN", purpose: "API testing and endpoint validation." },
      { name: "Poetry / UV", priority: "HIGH PRIORITY", purpose: "Modern Python dependency and package management." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Python 3 Deep Dive & Idioms", topics: ["Python Data Model & OOP (Magic methods, Classmethods)", "Decorators, Generators, Context Managers", "Type Hints with Pydantic V2", "Virtual environments (venv/poetry)"], milestone: "Build an automated CLI file parsing and processing tool." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "FastAPI & Async REST APIs", topics: ["FastAPI Dependency Injection, Path/Query parameters", "Pydantic Schemas, request/response validation", "SQLAlchemy 2.0 Async ORM & Alembic migrations", "JWT Authentication and Password Hashing"], milestone: "Build a production-ready asynchronous REST API with FastAPI & PostgreSQL." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "PyTest & Postman Automation", topics: ["Writing test fixtures with PyTest and httpx async client", "Mocking database connections and external APIs", "Postman automated collection testing"], milestone: "Achieve 90%+ test coverage on a FastAPI application using PyTest." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Background Tasks with Celery & Redis", topics: ["Setting up Celery workers with Redis broker", "Periodic scheduled tasks with Celery Beat", "Web scraping pipelines using Playwright and Scrapy", "Rate limiting and caching with Redis"], milestone: "Build an automated web scraping and price tracking system with Celery." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "AI/Data Integration & Docker", topics: ["Integrating OpenAI / LangChain / HuggingFace models in FastAPI", "Vector databases (pgvector / ChromaDB) for semantic search", "Dockerizing Python services with multi-stage Dockerfiles", "Deploying to Render / AWS with CI/CD"], milestone: "Deploy an AI-powered document search engine with vector embeddings." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Python Applications", topics: ["Enterprise Document Processing SaaS", "Real-Time Financial Telemetry API", "Automated Intelligence Scraper Pipeline"], milestone: "Ship 3 production Python applications with live URLs and Swagger docs." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Documentation & Code Showcase", topics: ["Interactive Swagger documentation hosted on custom domains", "Detailed architecture diagrams and performance benchmarks", "Clean GitHub repositories with Poetry configurations"], milestone: "A professional Python Developer portfolio with live API documentation." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Python Internals & System Design", topics: ["Python GIL (Global Interpreter Lock) and Concurrency (asyncio vs threading vs multiprocessing)", "Memory management and Garbage Collection (Reference Counting + Cyclic GC)", "Solving LeetCode Medium problems in Python", "Designing scalable REST APIs"], milestone: "Ace technical Python coding and system design interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Python Developer resume emphasizing async APIs and data pipelines", "Targeting high-growth startups, fintechs, and AI companies", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Python Developer." }
    ],
    certifications: [
      { name: "PCEP / PCAP Certified Associate Python Programmer", issuer: "Python Institute" },
      { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Python Core", topics: ["Explain how Python's GIL affects CPU-bound multi-threaded programs", "Difference between `deepcopy` and `shallow copy` with mutable nested objects", "How do Python Generators save memory compared to Lists?", "Explain how `@property` and custom decorators work in Python"] },
      { category: "FastAPI & SQLAlchemy", topics: ["Explain how FastAPI uses Pydantic for validation and serialization", "Difference between Lazy Loading and Eager Loading in SQLAlchemy", "How to manage database connection pooling in async FastAPI applications?"] }
    ],
    relatedRoles: ["Backend Developer", "Data Engineer", "Machine Learning Engineer", "Software Engineer"]
  },

  {
    id: "dotnet-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: ".NET Developer",
    slug: "dotnet-developer",
    badge: "Enterprise Standard",
    shortDescription: "Builds high-performance enterprise systems, cloud APIs, and microservices using C# and .NET 8.",
    description: "A .NET Developer engineers enterprise-scale software solutions, web APIs, cloud microservices, and cross-platform desktop applications using C#, .NET 8, ASP.NET Core, and Entity Framework Core.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9.5 - ₹19 LPA", senior: "₹20 - ₹45+ LPA" },
    responsibilities: [
      "Develop high-performance RESTful Web APIs and microservices using ASP.NET Core 8.",
      "Design database models, queries, and migrations using Entity Framework Core and SQL Server.",
      "Implement enterprise security with ASP.NET Identity, OAuth2, and JWT tokens.",
      "Deploy scalable .NET applications to Microsoft Azure and Docker containers.",
      "Write unit and integration tests using xUnit, Moq, and FluentAssertions."
    ],
    prerequisites: [
      { name: "C# Fundamentals", desc: "OOP, LINQ, async/await, generics, and delegates.", required: true },
      { name: "Database & SQL", desc: "SQL Server / PostgreSQL, relations, indexes, and stored procedures.", required: true },
      { name: "Web Basics & REST", desc: "HTTP methods, status codes, JSON payload formatting.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on codebases.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Modern C# (C# 12) & .NET 8 Runtime",
        priority: "MUST LEARN",
        whyYouNeedIt: "The foundational language and runtime for building enterprise Microsoft ecosystem applications.",
        prerequisite: "Basic Programming",
        depth: "Deep Mastery",
        topics: ["OOP Principles (Inheritance, Polymorphism, Interfaces, Abstract classes)", "Generics, Collections, and LINQ (Language Integrated Query)", "Asynchronous Programming with async/await and Task Parallel Library", "Memory Management (Stack vs Heap, Garbage Collection generations 0, 1, 2)"],
        practice: "Write complex LINQ queries filtering and transforming a nested list of orders.",
        miniProject: "Build an in-memory Warehouse Inventory Management CLI app."
      },
      {
        step: 2,
        technology: "ASP.NET Core Web API",
        priority: "MUST LEARN",
        whyYouNeedIt: "The lightning-fast, cross-platform framework for building enterprise REST APIs.",
        prerequisite: "C# Core & HTTP",
        depth: "Deep Mastery",
        topics: ["Dependency Injection (Transient, Scoped, Singleton service lifecycles)", "Middleware pipeline execution order and custom error handling", "Routing, Model Binding, and FluentValidation", "Swagger / OpenAPI documentation generation"],
        practice: "Build a custom logging and exception handling middleware in ASP.NET Core.",
        miniProject: "Build a Hospital Patient Management REST API with validation and Swagger."
      },
      {
        step: 3,
        technology: "Entity Framework Core (EF Core 8)",
        priority: "MUST LEARN",
        whyYouNeedIt: "The primary ORM for .NET, translating LINQ queries into high-performance SQL.",
        prerequisite: "ASP.NET Core & SQL Server",
        depth: "Deep Mastery",
        topics: ["DbContext, DbSets, and Fluent API configuration", "Relationships (1:1, 1:N, N:N) and navigation properties", "EF Core Migrations (Add-Migration, Update-Database)", "Optimizing queries: AsNoTracking(), Eager vs Lazy Loading"],
        practice: "Write an EF Core query with AsNoTracking() eliminating N+1 queries.",
        miniProject: "Build an E-Commerce Database API with EF Core migrations and SQL Server."
      },
      {
        step: 4,
        technology: "Authentication with ASP.NET Identity & JWT",
        priority: "MUST LEARN",
        whyYouNeedIt: "Provides enterprise-grade user management, password hashing, and token authentication.",
        prerequisite: "EF Core & ASP.NET Core",
        depth: "Deep Mastery",
        topics: ["ASP.NET Core Identity configuration and password policies", "JWT Bearer token generation and validation", "Role-Based and Policy-Based Authorization ([Authorize(Roles = 'Admin')])", "Securing API endpoints and CORS configuration"],
        practice: "Implement policy-based authorization enforcing specific user claim requirements.",
        miniProject: "Build an Enterprise Auth Service with JWT and role permissions."
      },
      {
        step: 5,
        technology: "Microservices & Azure Cloud Deployment",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Enables deploying scalable .NET microservices to Microsoft Azure and Docker containers.",
        prerequisite: "ASP.NET Core & Docker",
        depth: "Working Proficiency",
        topics: ["Dockerizing .NET Core applications with multi-stage builds", "Deploying to Azure App Services and Azure SQL Database", "Message Queues with RabbitMQ or Azure Service Bus", "Observability with Serilog and Application Insights"],
        practice: "Containerize a .NET Web API and SQL Server database with Docker Compose.",
        miniProject: "Deploy a live .NET Microservices application on Azure."
      }
    ],

    learnLater: [
      {
        technology: "Legacy ASP.NET Web Forms & WCF Services",
        reason: "Outdated legacy Windows-only frameworks. Modern enterprise is 100% on .NET 8 / ASP.NET Core.",
        whenToLearn: "Only if assigned to a 10-year-old legacy migration project."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "HealthTrack - Patient & Clinic Management API",
        difficulty: "Beginner Friendly",
        skills: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
        technology: ["C# 12", ".NET 8", "EF Core", "SQL Server", "Swagger"],
        expectedOutcome: "RESTful clinic management API with patient records, doctor scheduling, and Swagger docs.",
        portfolioValue: "Validates .NET 8 core architecture, EF Core migrations, and clean repository patterns."
      },
      {
        tier: "Intermediate",
        title: "Enterprise Banking & Fund Transfer Engine",
        difficulty: "Intermediate",
        skills: ["ASP.NET Identity", "JWT", "Transactions", "FluentValidation", "xUnit"],
        technology: ["ASP.NET Core 8", "SQL Server", "JWT", "xUnit", "Moq"],
        expectedOutcome: "Banking API with atomic fund transfers between accounts, transaction audit logs, and JWT auth.",
        portfolioValue: "High Enterprise Value — Demonstrates financial transaction consistency and modern .NET security."
      },
      {
        tier: "Advanced",
        title: "Distributed Order Processing Microservices with RabbitMQ",
        difficulty: "Advanced",
        skills: ["Microservices", "RabbitMQ", "Ocelot API Gateway", "Docker", "Serilog"],
        technology: [".NET 8", "RabbitMQ", "Ocelot", "SQL Server", "Docker Compose"],
        expectedOutcome: "Microservices platform featuring Product Service, Order Service, and Notification Service communicating via RabbitMQ with API Gateway.",
        portfolioValue: "Top-Tier Enterprise Showcase — Shows distributed microservice design, event messaging, and containerization."
      },
      {
        tier: "Production / Capstone",
        title: "Azure Cloud-Native Multi-Tenant SaaS Platform",
        difficulty: "Production Grade / Capstone",
        skills: ["Multi-Tenancy", "Azure Blob Storage", "Redis", "Docker", "CI/CD", "Application Insights"],
        technology: [".NET 8", "Azure SQL", "Azure Service Bus", "Redis", "Docker", "GitHub Actions"],
        expectedOutcome: "Production-ready enterprise SaaS featuring tenant isolation, automated background report generators via Azure Service Bus, Serilog structured logging, and automated CI/CD deployment pipeline.",
        portfolioValue: "Elite Enterprise .NET Showcase — Proves full product ownership, enterprise security patterns, and cloud production readiness."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Dependency Injection Lifecycles", question: "Explain the difference between Transient, Scoped, and Singleton service lifecycles in ASP.NET Core.", tip: "Transient = new instance per request; Scoped = one instance per HTTP request; Singleton = single instance across app lifetime." },
        { topic: "Garbage Collection Generations", question: "How does the .NET Garbage Collector manage Gen 0, Gen 1, and Gen 2 memory generations?", tip: "Gen 0 = short-lived objects; Gen 1 = buffer between short and long-lived; Gen 2 = long-lived objects like singletons." }
      ],
      codingProblems: [
        { title: "Implement a Thread-Safe Singleton in C#", difficulty: "Easy", pattern: "Lazy<T> or double-check locking", focus: "Design pattern in C#." },
        { title: "LINQ Query Optimization Challenge", difficulty: "Medium", pattern: "GroupBy, SelectMany, and Aggregations", focus: "LINQ mastery." }
      ],
      coreCSSubjects: [
        { subject: "Software Design", topic: "Repository & Unit of Work Patterns", keyQuestion: "Why is the Repository pattern combined with Unit of Work in EF Core enterprise applications?" }
      ],
      roleSpecificQuestions: [
        { question: "What is the difference between `IEnumerable` and `IQueryable` in C#?", answerKey: "`IEnumerable` executes in-memory on the client; `IQueryable` translates expression trees to SQL and executes on the database server." }
      ],
      projectQuestions: [
        { question: "How do you handle database migrations in a production ASP.NET Core application during CI/CD?", tip: "Explain generating idempotent SQL migration scripts using `dotnet ef migrations script`." }
      ],
      hrPreparation: [
        { question: "Why do you specialize in the Microsoft .NET ecosystem?", strategy: "Highlight .NET 8 cross-platform speed, strict type safety, enterprise enterprise support, and seamless Azure integration." }
      ],
      behavioralPreparation: [
        { scenario: "Describe a challenging bug you fixed in an enterprise .NET application.", framework: "STAR: Detail using Visual Studio diagnostic tools / Serilog to track down an unhandled exception or memory leak." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master C# (OOP, LINQ, async/await, Generics)",
        "Deep understanding of SQL Server and relational database design",
        "Proficiency in .NET CLI and Visual Studio",
        "Git version control mastery"
      ],
      coreSkills: [
        "Build modular Web APIs with ASP.NET Core 8 and FluentValidation",
        "Object-relational mapping with Entity Framework Core 8 and migrations",
        "Secure APIs with ASP.NET Identity and JWT authentication",
        "Integrate Redis caching and Serilog logging"
      ],
      projects: [
        "Complete and deploy Beginner Project (HealthTrack API)",
        "Complete and deploy Intermediate Project (Banking API with JWT)",
        "Complete and deploy Advanced Project (Microservices with RabbitMQ)",
        "Ship Production Capstone (Azure Cloud-Native SaaS Platform)"
      ],
      portfolio: [
        "Publish Swagger / OpenAPI documentation for all .NET projects",
        "Author detailed GitHub READMEs with architecture diagrams and setup guides",
        "Include unit tests with xUnit and Moq in all repositories"
      ],
      interview: [
        "Solve 75+ DSA problems in C# on LeetCode",
        "Master .NET theory (CLR internals, Garbage Collection, DI lifecycles)",
        "Practice 5 core System Design questions",
        "Conduct 3+ mock technical interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page .NET Developer resume",
        "Target enterprise IT consultancies, banks, and healthcare tech firms",
        "Apply to 30+ tailored .NET positions"
      ]
    },

    technologies: [
      { name: "C# (C# 12)", category: "Language", priority: "MUST LEARN", description: "OOP, LINQ, async/await, delegates, generics." },
      { name: "ASP.NET Core 8 Web API", category: "Framework", priority: "MUST LEARN", description: "REST APIs, dependency injection, middleware, validation." },
      { name: "Entity Framework Core (EF Core)", category: "ORM", priority: "MUST LEARN", description: "LINQ to SQL, migrations, DbContext, performance." },
      { name: "SQL Server / PostgreSQL", category: "Database", priority: "MUST LEARN", description: "Relational database design, T-SQL, indexing, ACID." },
      { name: "ASP.NET Identity & JWT", category: "Security", priority: "MUST LEARN", description: "Authentication, authorization, role management, tokens." },
      { name: "Docker & Microservices", category: "Architecture", priority: "HIGH PRIORITY", description: "Containerizing .NET services, RabbitMQ messaging." },
      { name: "Azure Cloud Services", category: "Cloud", priority: "HIGH PRIORITY", description: "Azure App Service, Azure SQL, Blob Storage." }
    ],
    tools: [
      { name: "Visual Studio 2022 / VS Code", priority: "MUST LEARN", purpose: "Premier .NET development environment." },
      { name: "SQL Server Management Studio (SSMS)", priority: "MUST LEARN", purpose: "Database administration and T-SQL querying." },
      { name: "Postman", priority: "MUST LEARN", purpose: "API testing and validation." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "C# 12 & .NET Fundamentals", topics: ["C# OOP (Classes, Interfaces, Polymorphism)", "LINQ to Objects, Lambda expressions", "Asynchronous programming (async/await, Task)", "Memory management and Garbage Collection basics"], milestone: "Build a console-based enterprise inventory management system." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "ASP.NET Core Web API", topics: ["ASP.NET Core architecture & Dependency Injection (Lifetimes)", "Building REST APIs, routing, controllers", "Input validation with FluentValidation", "Global exception handling middleware"], milestone: "Build a complete REST API with ASP.NET Core for a healthcare system." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Visual Studio & SSMS", topics: ["Visual Studio debugging & profiling tools", "SQL Server Management Studio (SSMS) query tuning", "Swagger OpenAPI documentation generation"], milestone: "Set up a clean .NET 8 development environment with local SQL Server." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Entity Framework Core & Security", topics: ["EF Core 8 code-first migrations & Fluent API", "Optimizing EF Core (AsNoTracking, Eager vs Lazy Loading)", "ASP.NET Identity with JWT authentication & refresh tokens", "Role-based and policy-based authorization"], milestone: "Build a secure e-commerce backend API with EF Core and JWT authentication." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Microservices & Azure Cloud", topics: ["Building microservices with Ocelot API Gateway", "Message Queues with RabbitMQ or Azure Service Bus", "Dockerizing .NET Core applications", "Deploying to Azure App Service and Azure SQL"], milestone: "Deploy a 2-service .NET microservices cluster with RabbitMQ messaging." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production .NET Systems", topics: ["Enterprise ERP & Financial Ledger System", "Microservices-based E-Commerce Platform", "Unit testing with xUnit, Moq, and FluentAssertions"], milestone: "Ship 3 comprehensive production-grade .NET projects on GitHub." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "API Documentation & Showcase", topics: ["Interactive Swagger OpenAPI docs hosted live", "Clean repository structure with automated CI/CD via GitHub Actions", "Detailed architecture diagrams using Draw.io"], milestone: "A professional .NET Developer portfolio with live Swagger docs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: ".NET Deep-Dive Interviews", topics: ["Dependency Injection lifetimes (Transient vs Scoped vs Singleton)", "Garbage Collection Generations (Gen 0, Gen 1, Gen 2)", "Solving LeetCode Medium problems in C#", "EF Core performance tuning and N+1 query troubleshooting"], milestone: "Ace technical .NET and C# coding and architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Enterprise Hiring & Placement", topics: [".NET Developer resume highlighting ASP.NET Core, EF Core, and Azure", "Targeting enterprise software consultancies, banks, and healthcare firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior .NET Developer." }
    ],
    certifications: [
      { name: "Microsoft Certified: Azure Developer Associate (AZ-204)", issuer: "Microsoft" },
      { name: "C# Specialist Certification", issuer: "Microsoft / Coursera" }
    ],
    interviewTopics: [
      { category: "C# Core", topics: ["Explain the difference between Value Types (Stack) and Reference Types (Heap)", "Difference between `Task.Run()` and `async/await`", "What is the difference between `IEnumerable`, `ICollection`, `IList`, and `IQueryable`?", "How does Garbage Collection manage Gen 0, 1, and 2 memory in .NET?"] },
      { category: "ASP.NET Core & EF", topics: ["Explain Service Lifetimes in ASP.NET Core (Transient vs Scoped vs Singleton)", "How do you resolve the N+1 query problem in Entity Framework Core?", "Explain the difference between Authentication and Authorization in ASP.NET Core", "What is Middleware in ASP.NET Core and how does the request pipeline work?"] }
    ],
    relatedRoles: ["Backend Developer", "Software Engineer", "Full Stack Developer", "Cloud Developer"]
  },

  {
    id: "mobile-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Mobile Developer",
    slug: "mobile-developer",
    badge: "High Demand",
    shortDescription: "Builds cross-platform or native mobile apps for iOS and Android using Flutter, React Native, or Kotlin.",
    description: "A Mobile Developer builds responsive, performant, and engaging mobile applications for iOS and Android devices. They specialize in cross-platform frameworks (Flutter, React Native) or native SDKs (Kotlin/Android, Swift/iOS), mobile UI/UX, offline caching, and App Store / Google Play deployments.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹19 - ₹42+ LPA" },
    responsibilities: [
      "Develop cross-platform or native mobile applications for Android and iOS using Flutter or React Native.",
      "Integrate RESTful and GraphQL APIs, push notifications (FCM), and mobile authentication.",
      "Implement local offline persistence using SQLite, Hive, or Room database.",
      "Optimize mobile app memory usage, battery consumption, and smooth 60fps rendering.",
      "Publish and maintain mobile apps on Google Play Store and Apple App Store."
    ],
    prerequisites: [
      { name: "Programming Fundamentals", desc: "Dart for Flutter, JavaScript/TypeScript for React Native, or Kotlin.", required: true },
      { name: "Mobile UI & UX Concepts", desc: "Mobile navigation, responsive layouts, gestures, and material/cupertino design.", required: true },
      { name: "REST API & JSON", desc: "Connecting mobile frontends to backend APIs and handling async responses.", required: true },
      { name: "Git Version Control", desc: "Branching, committing, and collaborating on codebases.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Mobile Programming Language (Dart / TypeScript / Kotlin)",
        priority: "MUST LEARN",
        whyYouNeedIt: "The primary language used to build mobile user interfaces, state management, and device logic.",
        prerequisite: "Programming Basics",
        depth: "Deep Mastery",
        topics: ["OOP Principles (Classes, Mixins, Inheritance)", "Async programming (Futures, Streams, async/await)", "Null Safety and strong typing", "Functional list transformations"],
        practice: "Write an async data service with stream controllers and error handling in Dart/TypeScript.",
        miniProject: "Build an in-memory Mobile Contact Book with search and filtering."
      },
      {
        step: 2,
        technology: "Mobile UI Layouts & Widget Hierarchy",
        priority: "MUST LEARN",
        whyYouNeedIt: "Powers responsive mobile screens, navigation tabs, bottom sheets, and native material design.",
        prerequisite: "Mobile Language",
        depth: "Deep Mastery",
        topics: ["Widget tree and layout hierarchy (Row, Column, Stack, Flex)", "Responsive layouts adapting to tablet and phone screen sizes", "Material Design 3 & Cupertino iOS design standards", "Navigation routing and deep linking"],
        practice: "Build a responsive mobile profile screen with custom sliver scrolling app bar.",
        miniProject: "Build a responsive Mobile Food Delivery UI with categories and bottom navigation."
      },
      {
        step: 3,
        technology: "Mobile State Management (Bloc / Provider / Zustand)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Decouples business logic from UI widgets, managing complex application state cleanly.",
        prerequisite: "Mobile UI",
        depth: "Deep Mastery",
        topics: ["Bloc Pattern (Events, States, Transitions) or Redux/Zustand", "State persistence and hydration", "Dependency Injection in mobile apps", "Handling global authentication state"],
        practice: "Implement a Shopping Cart state manager with optimistic add/remove updates.",
        miniProject: "Build an E-Commerce Mobile App with persistent Cart and Checkout state."
      },
      {
        step: 4,
        technology: "Local Storage & Offline Database (SQLite / Hive / Room)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Enables mobile apps to work seamlessly offline and cache server data locally.",
        prerequisite: "State Management",
        depth: "Working Proficiency",
        topics: ["SQLite database modeling and queries", "NoSQL key-value caching with Hive / MMKV", "Offline-first sync architectures", "Local secure storage for auth tokens"],
        practice: "Implement an offline sync service that queues pending mutations and syncs on internet reconnection.",
        miniProject: "Build an Offline-First Note & Audio Memo App with instant local caching."
      },
      {
        step: 5,
        technology: "Native Device APIs & Push Notifications (FCM)",
        priority: "HIGH PRIORITY",
        whyYouNeedIt: "Integrates mobile device hardware: Camera, Geolocation, Biometrics, and Push Notifications.",
        prerequisite: "Local Storage",
        depth: "Working Proficiency",
        topics: ["Firebase Cloud Messaging (FCM) for background notifications", "Device Geolocation and Google Maps integration", "Camera and photo gallery access with permissions", "Biometric Authentication (FaceID, Fingerprint)"],
        practice: "Configure background push notifications with deep-link navigation on notification tap.",
        miniProject: "Build a Location-Based Fitness & Running Tracker with live GPS map drawing."
      }
    ],

    learnLater: [
      {
        technology: "Writing Custom Native C++ NDK Drivers",
        reason: "Low-level Android NDK C++ is only needed for high-frequency game engines or audio processors.",
        whenToLearn: "When building custom 3D game engines or native DSP audio plugins."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "HabitForge - Daily Habit & Streak Tracker",
        difficulty: "Beginner Friendly",
        skills: ["Flutter / React Native", "State Management", "Local Storage (Hive/SQLite)", "Charts"],
        technology: ["Flutter / Dart", "Hive DB", "Provider", "FlChart"],
        expectedOutcome: "A responsive mobile app tracking daily habits, completion streaks, progress charts, and dark mode.",
        portfolioValue: "Validates core mobile widget hierarchy, state management, and local database persistence."
      },
      {
        tier: "Intermediate",
        title: "CryptoTrack - Live Crypto Portfolio & Price Alerts",
        difficulty: "Intermediate",
        skills: ["REST API", "WebSockets", "Bloc / Zustand", "Push Notifications", "Biometrics"],
        technology: ["Flutter / React Native", "Bloc", "CoinGecko API", "FCM", "SecureStorage"],
        expectedOutcome: "Mobile finance tracker with real-time price updates via WebSockets, price threshold push notifications, and biometric login.",
        portfolioValue: "High Value — Demonstrates API integration, WebSockets, background notifications, and biometric security."
      },
      {
        tier: "Advanced",
        title: "FoodExpress - Multi-Vendor Food Delivery Mobile App",
        difficulty: "Advanced",
        skills: ["Google Maps SDK", "GPS Tracking", "Payment Gateway (Stripe)", "Cart State", "Node.js Backend"],
        technology: ["Flutter", "Bloc", "Google Maps SDK", "Stripe API", "Node.js / Express"],
        expectedOutcome: "Full food ordering app with restaurant discovery, cart management, Stripe checkout, and real-time live driver GPS tracking on a map.",
        portfolioValue: "Top-Tier Mobile Showcase — Shows map SDK integration, live tracking, payment processing, and complex state management."
      },
      {
        tier: "Production / Capstone",
        title: "PulseChat - Real-Time Collaborative Messaging & Social App",
        difficulty: "Production Grade / Capstone",
        skills: ["WebRTC / WebSockets", "Offline-First Sync", "Media Uploads", "App Store Release", "CI/CD"],
        technology: ["Flutter / React Native", "WebSockets", "SQLite", "Firebase", "Fastlane", "GitHub Actions"],
        expectedOutcome: "Production-ready mobile messaging app with end-to-end encryption, offline message queues, voice notes, media sharing, and automated Fastlane App Store build pipelines.",
        portfolioValue: "Elite Mobile Portfolio — Proves full mobile product lifecycle, offline-first sync, real-time messaging, and store release readiness."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "Mobile App Lifecycle", question: "Explain the Android / iOS / Flutter App Lifecycle (Resumed, Inactive, Paused, Detached). How do you save state when an app is backgrounded?", tip: "Explain handling state preservation during OS memory reclamation." },
        { topic: "Flutter / React Native Rendering Pipeline", question: "How does Flutter achieve 60fps/120fps? Explain the 3 Trees: Widget Tree, Element Tree, and RenderObject Tree.", tip: "Widgets are immutable blueprints; Elements manage lifecycle; RenderObjects handle layout and painting." }
      ],
      codingProblems: [
        { title: "Implement an Offline-First Sync Queue", difficulty: "Medium", pattern: "Queue with local SQLite and network listener", focus: "Mobile resilience." },
        { title: "Build a Custom Paginated List with Pull-to-Refresh", difficulty: "Easy", pattern: "ScrollController + RefreshIndicator", focus: "Mobile UI machine coding." }
      ],
      coreCSSubjects: [
        { subject: "Mobile Security", topic: "Secure Storage & Certificate Pinning", keyQuestion: "How do you protect mobile apps against Man-in-the-Middle (MITM) attacks using SSL Pinning?" }
      ],
      roleSpecificQuestions: [
        { question: "What is the difference between Hot Reload and Hot Restart?", answerKey: "Hot Reload injects updated code into the running VM without destroying state; Hot Restart destroys state and reinitializes the app." }
      ],
      projectQuestions: [
        { question: "How do you optimize battery life and memory usage in a location-tracking mobile app?", tip: "Discuss reducing GPS accuracy when stationary, batching location updates, and utilizing geofencing APIs." }
      ],
      hrPreparation: [
        { question: "Have you published an app on Google Play or Apple App Store? Walk me through the review process.", strategy: "Explain generating release APKs/IPAs, setting up privacy policies, configuring permissions, and handling review guidelines." }
      ],
      behavioralPreparation: [
        { scenario: "Tell me about a time an app crashed on a specific device model and how you resolved it.", framework: "STAR: Detail analyzing crash logs with Firebase Crashlytics, reproducing on an emulator, and deploying an emergency hotfix." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master Dart or TypeScript/JavaScript",
        "Deep understanding of mobile widget/component layout hierarchies",
        "Proficiency in REST API consumption and JSON parsing",
        "Git version control mastery"
      ],
      coreSkills: [
        "Build mobile apps with clean state management (Bloc, Provider, or Zustand)",
        "Implement offline persistence with SQLite or Hive",
        "Integrate Firebase Push Notifications (FCM) and deep linking",
        "Implement Biometric Authentication and secure storage"
      ],
      projects: [
        "Complete and deploy Beginner Project (HabitForge)",
        "Complete and deploy Intermediate Project (CryptoTrack with alerts)",
        "Complete and deploy Advanced Project (FoodExpress with Google Maps)",
        "Ship Production Capstone (PulseChat published on Play Store / TestFlight)"
      ],
      portfolio: [
        "Publish APKs and demo video walkthroughs on GitHub READMEs",
        "Provide downloadable Google Drive / Play Store links for all mobile projects",
        "Document clean mobile architecture diagrams (Bloc / Clean Architecture)"
      ],
      interview: [
        "Solve 50+ DSA problems on LeetCode",
        "Master mobile theory (App lifecycles, Render trees, Memory management)",
        "Prepare 3 mobile architecture project defenses",
        "Conduct 3+ mock technical mobile interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized, 1-page Mobile Developer resume with live app links",
        "Engage with mobile leads and recruiters on LinkedIn",
        "Apply to 30+ tailored Flutter / React Native / Mobile positions"
      ]
    },

    technologies: [
      { name: "Flutter (Dart) OR React Native (TS)", category: "Cross-Platform", priority: "MUST LEARN", description: "Modern cross-platform mobile frameworks." },
      { name: "State Management (Bloc / Provider)", category: "Architecture", priority: "MUST LEARN", description: "Predictable state architecture for mobile apps." },
      { name: "REST & GraphQL APIs", category: "Networking", priority: "MUST LEARN", description: "Consuming backend APIs, handling offline errors." },
      { name: "Local Database (SQLite / Hive / Room)", category: "Persistence", priority: "MUST LEARN", description: "Offline caching, structured mobile storage." },
      { name: "Firebase (Auth, Firestore, FCM)", category: "Cloud & Backend", priority: "HIGH PRIORITY", description: "Push notifications, crash analytics, real-time sync." },
      { name: "App Store & Play Store Deployment", category: "DevOps", priority: "HIGH PRIORITY", description: "Code signing, provisioning profiles, store release." }
    ],
    tools: [
      { name: "Android Studio / Xcode", priority: "MUST LEARN", purpose: "Native SDKs, emulators, and store builds." },
      { name: "VS Code", priority: "MUST LEARN", purpose: "Primary Flutter and React Native code editor." },
      { name: "Firebase Console", priority: "HIGH PRIORITY", purpose: "Push notifications and crashlytics monitoring." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Dart / TypeScript & Mobile UI", topics: ["Dart OOP, Streams, Async/Await", "Widget Tree (Stateless vs Stateful)", "Responsive Layouts (Row, Column, Stack, Flex)", "Material 3 & Cupertino design guidelines"], milestone: "Build a responsive multi-screen mobile UI application." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "State Management & REST APIs", topics: ["State Management with Bloc / Provider", "HTTP networking with Dio / Axios", "JSON serialization & error handling", "Form validation & user input handling"], milestone: "Build an interactive E-Commerce mobile app with Cart and API data." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Android Studio, Xcode & Emulators", topics: ["Android emulator and iOS simulator configuration", "Debugging network requests and widget inspector", "Managing app assets, icons, and splash screens"], milestone: "Configure and test builds across Android and iOS emulators." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Local Storage & Firebase", topics: ["Local SQLite / Hive database for offline persistence", "Firebase Authentication & Google Sign-In", "Push Notifications with Firebase Cloud Messaging (FCM)", "Device permissions (Camera, Location, Storage)"], milestone: "Build an offline-first task tracker with push notifications." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Native Features & Performance", topics: ["Google Maps SDK & Geolocation tracking", "Payment gateway integration (Stripe / Razorpay)", "Memory profiling, 60fps rendering, battery optimization", "CI/CD pipelines with Fastlane for automated builds"], milestone: "Build a location-based delivery app with live GPS tracking." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Mobile Apps", topics: ["Real-Time Messaging & Chat App", "Fitness & Activity Tracking App with Maps", "Full E-Commerce App with Payment Checkout"], milestone: "Build and publish 3 complete mobile applications." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "App Showcase & Store Links", topics: ["Publishing APKs on GitHub with video demo GIFs", "Submitting an app to Google Play Store / Apple TestFlight", "Clean GitHub repository with architecture documentation"], milestone: "A published app on Google Play or downloadable APKs on GitHub." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Mobile Architecture Interviews", topics: ["Flutter / React Native architecture (Render Tree, Bridge vs Skia/Impeller)", "App Lifecycle states (Resumed, Inactive, Paused)", "Solving LeetCode Easy/Medium problems", "Handling offline sync and network dropouts"], milestone: "Ace technical mobile developer coding and architectural interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Mobile Developer resume highlighting published apps and state management", "Targeting mobile product startups, agencies, and tech companies", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Mobile Developer." }
    ],
    certifications: [
      { name: "Google Associate Android Developer", issuer: "Google" },
      { name: "Meta React Native Specialization", issuer: "Meta (Coursera)" }
    ],
    interviewTopics: [
      { category: "Mobile Core", topics: ["Explain the Widget Lifecycle in Flutter (`initState`, `didChangeDependencies`, `build`, `dispose`)", "How does Flutter's Impeller / Skia rendering engine achieve 60fps without JavaScript bridges?", "Explain the difference between SQLite, Hive, and SharedPreferences", "How to implement Offline-First synchronization with background retry?"] }
    ],
    relatedRoles: ["Frontend Developer", "Full Stack Developer", "UI Developer", "Software Engineer"]
  },

  {
    id: "embedded-software-developer",
    careerFamily: "SOFTWARE DEVELOPMENT",
    roleName: "Embedded Software Developer",
    slug: "embedded-software-developer",
    badge: "Specialized / High Pay",
    shortDescription: "Develops low-level C/C++ firmware, RTOS drivers, and microcontroller software for hardware systems.",
    description: "An Embedded Software Developer writes low-level code that runs directly on physical hardware microcontrollers and microprocessors. They work in C and C++, interfacing directly with hardware registers, communication protocols (I2C, SPI, UART, CAN), and Real-Time Operating Systems (FreeRTOS).",
    targetAudience: ["B.Tech", "B.E.", "M.Tech", "ECE", "EEE", "Computer Science"],
    salaryRange: { entry: "₹5 - ₹10 LPA", mid: "₹11 - ₹22 LPA", senior: "₹24 - ₹50+ LPA" },
    responsibilities: [
      "Write bare-metal and RTOS firmware in Embedded C and C++ for ARM Cortex-M microcontrollers.",
      "Develop low-level device drivers for peripherals: Timers, ADC, DAC, PWM, DMA, and GPIO.",
      "Implement communication bus protocols: UART, SPI, I2C, CAN bus, and USB.",
      "Debug hardware-software interactions using Logic Analyzers, Oscilloscopes, and JTAG/SWD debuggers.",
      "Optimize firmware for microsecond timing constraints, ultra-low power modes, and minimal RAM footprint."
    ],
    prerequisites: [
      { name: "C & C++ Programming", desc: "Pointers, memory management, bitwise operations, structs, volatile keyword.", required: true },
      { name: "Digital Electronics", desc: "Logic gates, microcontrollers, memory architectures, voltage levels, schematics.", required: true },
      { name: "Computer Architecture", desc: "Registers, ALU, interrupts, memory maps, assembly basics.", required: true },
      { name: "Hardware Debugging Basics", desc: "Reading datasheets, pinout diagrams, using a multimeter.", required: true }
    ],

    learningOrder: [
      {
        step: 1,
        technology: "Embedded C & Bitwise Manipulation",
        priority: "MUST LEARN",
        whyYouNeedIt: "The foundational language for writing low-level software that directly controls hardware registers.",
        prerequisite: "Basic Programming",
        depth: "Deep Mastery",
        topics: ["Bitwise operations (AND, OR, XOR, NOT, Bit shifting)", "Pointers, Pointer Arithmetic, Function Pointers", "The `volatile` keyword and memory-mapped I/O", "Structs, Unions, Typedefs, and memory alignment"],
        practice: "Write a C program that sets, clears, and toggles specific bits in a 32-bit hardware register offset.",
        miniProject: "Build an in-memory Bitwise State Machine for an automotive dashboard."
      },
      {
        step: 2,
        technology: "ARM Cortex-M Architecture & Microcontrollers (STM32)",
        priority: "MUST LEARN",
        whyYouNeedIt: "The world's most popular 32-bit microcontroller architecture used in medical, automotive, and consumer electronics.",
        prerequisite: "Embedded C",
        depth: "Deep Mastery",
        topics: ["Cortex-M core registers, Vector Table, Memory Map", "GPIO configuration (Input, Output, Pull-Up/Down, Push-Pull)", "Hardware Timers, PWM generation, and Interrupts (NVIC)", "Analog-to-Digital Converters (ADC) and Direct Memory Access (DMA)"],
        practice: "Configure an STM32 hardware timer to generate precise 1kHz PWM signals without CPU delays.",
        miniProject: "Build a Multi-Channel Sensor Acquisition System streaming ADC data into RAM via DMA."
      },
      {
        step: 3,
        technology: "Communication Protocols (I2C, SPI, UART, CAN)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Enables microcontrollers to communicate with sensors, displays, external memory, and vehicle networks.",
        prerequisite: "STM32 GPIO & Timers",
        depth: "Deep Mastery",
        topics: ["UART: Baud rates, packet framing, circular ring buffers", "SPI: High-speed full-duplex communication with displays and Flash", "I2C: Master-slave addressing, clock stretching, pull-up resistors", "CAN Bus: Automotive differential signaling, message IDs, and filters"],
        practice: "Write a custom non-blocking ring buffer driver for UART packet reception.",
        miniProject: "Build an I2C Environmental Weather Station reading temperature and humidity displaying on an OLED."
      },
      {
        step: 4,
        technology: "Real-Time Operating Systems (FreeRTOS)",
        priority: "MUST LEARN",
        whyYouNeedIt: "Enables preemptive multi-tasking, deterministic task scheduling, and inter-task synchronization on microcontrollers.",
        prerequisite: "ARM Cortex-M & Protocols",
        depth: "Deep Mastery",
        topics: ["Preemptive task scheduling and task priorities", "Inter-task communication: Queues, Semaphores, Mutexes", "Preventing Priority Inversion using Priority Inheritance", "Software timers, task notifications, and low-power Tickless idle mode"],
        practice: "Build a FreeRTOS application with 3 concurrent tasks communicating via queues.",
        miniProject: "Build a Multi-Tasking FreeRTOS Smart Lock system with keypad, display, and motor control."
      }
    ],

    learnLater: [
      {
        technology: "ASIC Silicon Design & VHDL/Verilog",
        reason: "Hardware silicon design is specialized; embedded software focuses on programming existing silicon chips.",
        whenToLearn: "When pursuing a career as an FPGA / ASIC Hardware Engineer."
      }
    ],

    projects: [
      {
        tier: "Beginner",
        title: "Bare-Metal STM32 Multi-Sensor Telemetry Node",
        difficulty: "Beginner Friendly",
        skills: ["Embedded C", "STM32", "Bare-Metal Registers", "I2C", "UART", "Timers"],
        technology: ["Embedded C", "STM32F4", "I2C Sensor", "UART", "Logic Analyzer"],
        expectedOutcome: "Bare-metal firmware written by directly manipulating memory registers to read sensor data over I2C and transmit over UART ring buffers.",
        portfolioValue: "Proves bare-metal register manipulation, datasheet reading, and driver development."
      },
      {
        tier: "Intermediate",
        title: "FreeRTOS Smart Energy Monitor & Data Logger",
        difficulty: "Intermediate",
        skills: ["FreeRTOS", "ADC + DMA", "SPI Flash", "Queues", "Mutexes"],
        technology: ["STM32", "FreeRTOS", "SPI Flash", "DMA", "C++"],
        expectedOutcome: "Multi-tasking RTOS firmware measuring AC power via ADC DMA, logging data to SPI Flash, and updating an LCD display deterministically.",
        portfolioValue: "High Enterprise Value — Demonstrates FreeRTOS task scheduling, DMA zero-CPU transfers, and peripheral drivers."
      },
      {
        tier: "Advanced",
        title: "Automotive CAN Bus ECU Controller with Custom Bootloader",
        difficulty: "Advanced",
        skills: ["CAN Bus", "Bootloader", "Flash Memory Partitioning", "CRC32", "Vector Relocation"],
        technology: ["STM32", "Embedded C", "CAN Protocol", "Python Test Tool"],
        expectedOutcome: "Automotive ECU node communicating over CAN bus with a custom UART/CAN bootloader supporting remote firmware flashing and CRC32 verification.",
        portfolioValue: "Top-Tier Embedded Showcase — Shows automotive CAN bus mastery, custom bootloader design, and memory map relocation."
      },
      {
        tier: "Production / Capstone",
        title: "Medical Patient Telemetry Device with BLE & Ultra-Low Power",
        difficulty: "Production Grade / Capstone",
        skills: ["Low Power Modes", "BLE Protocol", "FreeRTOS", "MISRA C Compliance", "Oscilloscope Profiling"],
        technology: ["Nordic nRF52 / STM32", "Bluetooth Low Energy", "FreeRTOS", "MISRA C"],
        expectedOutcome: "Production-grade wearable telemetry device measuring heart rate and SpO2, streaming over BLE, running on battery with ultra-low power sleep modes (<10uA).",
        portfolioValue: "Elite Embedded Systems Portfolio — Proves low-power optimization, BLE protocol stacks, and safety-critical embedded coding standards."
      }
    ],

    interviewRoadmap: {
      technicalFundamentals: [
        { topic: "The Volatile Keyword", question: "Give 3 distinct real-world situations where the `volatile` keyword is mandatory in Embedded C.", tip: "1. Memory-mapped peripheral registers; 2. Global variables modified by an ISR; 3. Flags shared between multiple RTOS tasks." },
        { topic: "Interrupt Latency & Execution", question: "What happens from the moment a hardware interrupt fires to the time the ISR finishes executing?", tip: "Hardware context saving (stacking registers R0-R3, R12, LR, PC, xPSR) -> Vector Table lookup -> ISR execution -> Unstacking." }
      ],
      codingProblems: [
        { title: "Implement a Circular Ring Buffer for UART", difficulty: "Medium", pattern: "Pointers / Modulo array indexing", focus: "Embedded driver staple." },
        { title: "Bit Reversal of a 32-Bit Integer", difficulty: "Easy", pattern: "Bitwise shift and mask operations", focus: "Low-level manipulation." }
      ],
      coreCSSubjects: [
        { subject: "Computer Architecture", topic: "DMA & Memory Maps", keyQuestion: "Why is Direct Memory Access (DMA) essential for high-speed ADC and communication peripherals?" }
      ],
      roleSpecificQuestions: [
        { question: "What is Priority Inversion in an RTOS and how does Priority Inheritance solve it?", answerKey: "Occurs when a low-priority task holds a mutex needed by a high-priority task, while a medium task preempts the low task. Priority inheritance temporarily elevates the low task's priority." }
      ],
      projectQuestions: [
        { question: "How do you debug an intermittent hard fault (`HardFault_Handler`) on an ARM Cortex-M microcontroller?", tip: "Explain inspecting the stacked Program Counter (PC), Link Register (LR), and Configurable Fault Status Register (CFSR)." }
      ],
      hrPreparation: [
        { question: "What attracts you to working at the intersection of software and physical hardware?", strategy: "Express passion for seeing physical motors spin, LEDs illuminate, and devices interact with the real physical world." }
      ],
      behavioralPreparation: [
        { scenario: "Describe a time you used a logic analyzer or oscilloscope to solve a hardware-software timing bug.", framework: "STAR: Detail connecting probes to I2C/SPI lines, decoding waveforms, finding a missing pull-up resistor or baud rate mismatch, and fixing it." }
      ]
    },

    careerReadinessChecklist: {
      foundation: [
        "Master Embedded C and bitwise register manipulation",
        "Deep understanding of microcontroller memory maps and vector tables",
        "Proficiency in reading hardware datasheets and schematics",
        "Git version control mastery"
      ],
      coreSkills: [
        "Develop peripheral drivers (Timers, ADC, DMA, PWM) on STM32",
        "Implement communication protocols (I2C, SPI, UART, CAN)",
        "Build deterministic multi-tasking applications with FreeRTOS",
        "Use Logic Analyzers and Oscilloscopes to debug hardware buses"
      ],
      projects: [
        "Complete Beginner Project (Bare-Metal STM32 Node)",
        "Complete Intermediate Project (FreeRTOS Energy Monitor with DMA)",
        "Complete Advanced Project (CAN Bus Controller with Custom Bootloader)",
        "Ship Production Capstone (Medical Patient Telemetry with BLE)"
      ],
      portfolio: [
        "Publish clean C code with annotated memory map diagrams on GitHub",
        "Include Logic Analyzer waveform screenshots and schematic diagrams in READMEs",
        "Provide video demonstrations of physical hardware prototypes functioning"
      ],
      interview: [
        "Solve 50+ bitwise and pointer DSA questions in C",
        "Master Embedded theory (Volatile keyword, Interrupts, Priority Inversion)",
        "Prepare 3 hardware-software debugging defenses",
        "Conduct 3+ mock technical embedded interviews"
      ],
      jobApplication: [
        "Craft an ATS-optimized Embedded Software resume highlighting C, FreeRTOS, and STM32",
        "Target semiconductor firms, automotive EV companies, and IoT manufacturers",
        "Apply to 30+ tailored embedded positions"
      ]
    },

    technologies: [
      { name: "Embedded C / C++", category: "Language", priority: "MUST LEARN", description: "Pointers, memory-mapped I/O, bitwise operations, volatile keyword." },
      { name: "ARM Cortex-M (STM32)", category: "Hardware Platform", priority: "MUST LEARN", description: "Registers, NVIC interrupts, DMA, Timers, Clocks (RCC)." },
      { name: "Buses (UART, I2C, SPI, CAN)", category: "Protocols", priority: "MUST LEARN", description: "Device drivers, packet framing, baud rate calculation." },
      { name: "FreeRTOS / Zephyr", category: "RTOS", priority: "MUST LEARN", description: "Task scheduling, queues, semaphores, mutexes, memory pools." },
      { name: "Hardware Debugging (JTAG/SWD, Logic Analyzers)", category: "Debugging", priority: "HIGH PRIORITY", description: "GDB debugging, capturing I2C/SPI waveforms with Saleae." },
      { name: "Bootloaders & Memory Layouts", category: "Systems", priority: "HIGH PRIORITY", description: "Linker scripts, Flash memory partitioning, vector relocation." }
    ],
    tools: [
      { name: "STM32CubeIDE / Keil uVision", priority: "MUST LEARN", purpose: "Firmware development and HAL / register programming." },
      { name: "Saleae Logic Analyzer", priority: "MUST LEARN", purpose: "Protocol decoding and timing analysis." },
      { name: "ST-Link / J-Link Debugger", priority: "MUST LEARN", purpose: "In-circuit hardware flashing and breakpoint debugging." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Embedded C & Bitwise Manipulation", topics: ["Bitwise operations (AND, OR, XOR, shifts), bit masking", "Pointers, pointer arithmetic, volatile & const qualifiers", "Memory layouts (.text, .data, .bss, Stack, Heap) in C", "Reading microcontroller datasheets and memory maps"], milestone: "Write register-level C code to control GPIOs and hardware timers." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Peripherals & Communication Buses", topics: ["Configuring UART with circular ring buffers", "SPI master-slave communication with displays/sensors", "I2C protocol with clock stretching & address scanning", "Interrupt Service Routines (NVIC) and priority levels"], milestone: "Build a multi-sensor weather station communicating over I2C and UART." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Logic Analyzers & Hardware Debugging", topics: ["Using ST-Link / J-Link to step through code on hardware", "Using Saleae Logic Analyzer to capture and decode SPI/I2C packets", "Debugging hard faults and stack overflows"], milestone: "Decode and fix a timing glitch on an I2C sensor bus using a logic analyzer." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Real-Time Operating Systems (FreeRTOS)", topics: ["FreeRTOS Kernel: Tasks, Preemptive Scheduling, Tick rate", "Inter-task communication: Queues, Semaphores, Mutexes", "Priority Inversion and Priority Inheritance", "Direct Memory Access (DMA) for zero-CPU transfers"], milestone: "Build a multi-tasking FreeRTOS firmware with sensor acquisition and DMA." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Custom Bootloaders & CAN Bus", topics: ["Writing a custom UART/CAN Bootloader", "Vector Table Relocation (VTOR) and jumping to application code", "Automotive CAN Bus: Frame format, message filtering, bit timing", "Low-power modes (Sleep, Stop, Standby)"], milestone: "Build an automotive CAN bus node with a custom firmware bootloader." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Embedded Systems", topics: ["Automotive CAN ECU with Bootloader", "Medical Patient Telemetry Node", "Ultra-Low Power IoT Sensor Logger"], milestone: "Complete 3 robust firmware projects on physical hardware." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Hardware Portfolio & Documentation", topics: ["GitHub repository with clean C code, drivers, and schematic diagrams", "Technical write-ups with logic analyzer captures", "YouTube video demonstrations of physical hardware in action"], milestone: "A professional Embedded Systems portfolio with verified hardware demos." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Embedded C & Systems Interviews", topics: ["Explain the volatile keyword with 3 real-world examples", "How does DMA save CPU clock cycles during ADC conversions?", "Explain Priority Inversion and how Mutexes solve it", "What happens during an interrupt from hardware trigger to ISR return?"], milestone: "Ace technical embedded C, RTOS, and driver development interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Industry Hiring & Placement", topics: ["Embedded Developer resume emphasizing STM32, C, FreeRTOS, and DMA", "Targeting automotive EV firms, semiconductor companies, and robotics", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Embedded Software Engineer." }
    ],
    certifications: [
      { name: "Arm Certified Engineer (Arm Accredited Engineer)", issuer: "Arm" },
      { name: "Embedded Systems Specialization", issuer: "University of Colorado (Coursera)" }
    ],
    interviewTopics: [
      { category: "Embedded C", topics: ["Explain the purpose of the `volatile` keyword in Embedded C", "What is memory-mapped I/O and how do you access a hardware register at address `0x40020000`?", "Difference between a Mutex and a Binary Semaphore in FreeRTOS", "What is an Interrupt Vector Table and where does it reside in memory?"] }
    ],
    relatedRoles: ["Firmware Engineer", "IoT Developer", "Robotics Software Engineer", "Systems Engineer"]
  }
];

module.exports = softwareDevelopmentRoles;

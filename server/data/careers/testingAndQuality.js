/**
 * Testing & Quality Career Roles (5 Roles)
 */

const testingAndQualityRoles = [
  {
    id: "qa-engineer",
    careerFamily: "TESTING & QUALITY",
    roleName: "QA Engineer",
    slug: "qa-engineer",
    badge: "High Demand",
    shortDescription: "Ensures software quality through manual testing, test planning, bug tracking, and release sign-offs.",
    description: "A Quality Assurance (QA) Engineer evaluates software applications to prevent bugs, verify requirements, and ensure optimal user experience before release. They design comprehensive test plans, execute functional/regression test cases, and log detailed defect reports.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (CS/IT)"],
    salaryRange: { entry: "₹3.5 - ₹6.5 LPA", mid: "₹7 - ₹14 LPA", senior: "₹15 - ₹28+ LPA" },
    responsibilities: [
      "Author detailed Test Plans, Test Scenarios, and Step-by-Step Test Cases mapped to user stories.",
      "Execute manual Functional, UI, Regression, Smoke, Sanity, and Cross-Browser tests.",
      "Log clear, reproducible bug reports in Jira with steps, actual/expected results, logs, and screenshots.",
      "Perform API testing using Postman to validate status codes, payloads, and response times.",
      "Collaborate with developers during bug triage meetings to verify and close resolved defects."
    ],
    prerequisites: [
      { name: "Software Development Lifecycle (SDLC/STLC)", desc: "Requirements analysis, test planning, execution, bug lifecycle.", required: true },
      { name: "Testing Methodologies", desc: "Black-box testing, boundary value analysis, equivalence partitioning.", required: true },
      { name: "Basic Web & Mobile Literacy", desc: "Browsers, DevTools, mobile OS, HTTP methods, JSON.", required: true },
      { name: "Attention to Detail", desc: "Methodical identification of edge cases and usability defects.", required: true }
    ],
    technologies: [
      { name: "Software Testing Life Cycle (STLC)", category: "Testing Core", priority: "MUST LEARN", description: "Test Planning, Design, Execution, Defect Reporting, Test Closure." },
      { name: "Test Design Techniques", category: "Techniques", priority: "MUST LEARN", description: "Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), Decision Tables." },
      { name: "Bug Lifecycle & Jira Management", category: "Bug Tracking", priority: "MUST LEARN", description: "Bug states (New, Assigned, Fixed, Retest, Closed), Severity vs Priority." },
      { name: "API Testing (Postman)", category: "API Testing", priority: "MUST LEARN", description: "HTTP methods (GET, POST, PUT, DELETE), status codes, headers, assertions." },
      { name: "Cross-Browser & Mobile Testing", category: "Compatibility", priority: "MUST LEARN", description: "Testing across Chrome, Safari, Firefox, iOS, and Android devices." },
      { name: "SQL for QA Data Verification", category: "Data Testing", priority: "HIGH PRIORITY", description: "Writing SELECT queries to verify backend database state changes." },
      { name: "Basic Test Automation Concepts (Selenium / Cypress)", category: "Automation Basics", priority: "GOOD TO KNOW", description: "Understanding automated web testing locators and assertions." },
      { name: "Agile Scrum & QA Ceremonies", category: "Process", priority: "HIGH PRIORITY", description: "Sprint planning, sprint review, bug triage." }
    ],
    tools: [
      { name: "Jira / TestRail / Zephyr", priority: "MUST LEARN", purpose: "Test case management and defect tracking." },
      { name: "Postman", priority: "MUST LEARN", purpose: "Manual and automated API testing." },
      { name: "BrowserStack / Sauce Labs", priority: "HIGH PRIORITY", purpose: "Cross-browser and real mobile device testing." },
      { name: "Chrome DevTools", priority: "MUST LEARN", purpose: "Inspecting network requests, console errors, and mobile viewports." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Testing Fundamentals & Test Case Design", topics: ["SDLC Models (Waterfall, Agile Scrum, V-Model) and STLC phases", "Types of Testing: Smoke, Sanity, Functional, Regression, Non-Functional", "Black-Box Test Design Techniques: Equivalence Partitioning (EP), Boundary Value Analysis (BVA)"], milestone: "Write 30 detailed test cases for a multi-step user registration and checkout flow." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Bug Tracking & Defect Management in Jira", topics: ["Bug Life Cycle: States, Transitions, Severity (Critical, Major, Minor) vs Priority", "Writing Effective Bug Reports: Clear Title, Environment, Steps to Reproduce, Expected vs Actual, Attachments", "Managing Test Suites in TestRail / Zephyr for Jira"], milestone: "Log 10 professional bug reports in Jira for an open-source web application." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "API Testing with Postman", topics: ["Testing REST API endpoints with Postman (Params, Headers, Body)", "Verifying HTTP Status Codes (200, 201, 400, 401, 404, 500)", "Writing Postman JavaScript assertions (`pm.test`, `pm.expect`)"], milestone: "Build a Postman collection with 20 test assertions validating an e-commerce API." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Database Testing & Chrome DevTools", topics: ["Database Testing with SQL: Verifying data inserts, updates, and foreign key integrity", "Using Chrome DevTools (Console errors, Network payload inspection, LocalStorage)", "Cross-browser testing on BrowserStack across desktop and mobile devices"], milestone: "Conduct cross-browser and database validation on a live web application." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Non-Functional Testing & Basic Automation", topics: ["Usability & Accessibility Testing (WCAG 2.1 compliance basics)", "Introduction to UI test automation with Playwright / Cypress basics", "Participating in Sprint planning and estimating QA story points"], milestone: "Conduct an accessibility audit using Axe / Lighthouse and write an automation test script." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "End-to-End QA Testing Deliverables", topics: ["E-Commerce Platform Comprehensive Test Plan & Bug Matrix", "FinTech Mobile Banking QA Suite & API Verification", "SaaS User Management Regression Test Suite"], milestone: "Complete 3 comprehensive Quality Assurance portfolio packages." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "QA Portfolio & Artifacts", topics: ["Publishing anonymized Test Plans, Test Cases, and Bug Reports on GitHub", "Postman Public Workspace showcasing automated API test collections", "Clear documentation of QA methodologies"], milestone: "A professional QA Engineer portfolio with test matrices and Postman collections." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "QA Technical Scenarios", topics: ["How would you test a pen (or a vending machine, or an elevator)?", "Explain the difference between Severity and Priority with examples of High Sev/Low Priority and Low Sev/High Priority", "How do you test an API endpoint when the frontend UI is not yet built?", "What do you do if a developer marks your bug as 'Not a Bug' or 'Cannot Reproduce'?"], milestone: "Ace technical QA scenario and test case design interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning ISTQB Certified Tester Foundation Level (CTFL)", "QA Engineer resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior QA Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Comprehensive E-Commerce Checkout Test Plan & Case Suite", tech: ["TestRail / Excel", "BVA", "ECP", "Jira"], description: "50+ detailed test cases covering positive/negative flows, boundary payment values, and coupon code edge cases." },
      { tier: "Intermediate", title: "REST API Test Suite with Automated Postman Assertions", tech: ["Postman", "JavaScript Assertions", "JSON Schema Validation", "Runner"], description: "Automated API collection testing user auth, token validation, product ordering, and status code verification." },
      { tier: "Production / Capstone", title: "Full-Cycle QA Package for a Healthcare Telehealth App", tech: ["Jira", "Postman", "SQL", "BrowserStack", "Lighthouse"], description: "Complete deliverable: Master Test Plan, 80 test cases, 15 logged Jira defects, SQL validation queries, and accessibility audit." }
    ],
    certifications: [
      { name: "ISTQB Certified Tester Foundation Level (CTFL)", issuer: "ISTQB" },
      { name: "Postman API Fundamentals Student Expert", issuer: "Postman" }
    ],
    interviewTopics: [
      { category: "QA Principles", topics: ["Explain Boundary Value Analysis (BVA) and Equivalence Partitioning with a real input field example", "Provide an example of a defect with High Severity and Low Priority (and vice versa)", "What is the difference between Regression Testing and Re-testing?", "How do you ensure 100% requirements traceability with a Traceability Matrix (RTM)?"] }
    ],
    relatedRoles: ["Software Test Engineer", "Automation Test Engineer", "SDET", "Business Analyst"]
  },

  {
    id: "software-test-engineer",
    careerFamily: "TESTING & QUALITY",
    roleName: "Software Test Engineer",
    slug: "software-test-engineer",
    badge: "High Demand",
    shortDescription: "Conducts structured system testing, integration verification, and automated test scripts.",
    description: "A Software Test Engineer tests software applications across unit, integration, system, and regression levels. They write automated test scripts (Selenium, Cypress, Playwright) and execute test cases to catch regressions before production deployment.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4 - ₹7.5 LPA", mid: "₹8 - ₹16 LPA", senior: "₹17 - ₹32+ LPA" },
    responsibilities: [
      "Develop and maintain automated UI and API test scripts using Selenium, Cypress, or Playwright.",
      "Execute automated regression test suites within CI/CD pipelines.",
      "Analyze automated test execution failures, identify flakiness, and file defects.",
      "Perform database testing to verify backend transactions and data consistency.",
      "Collaborate with developers to expand test coverage across critical user workflows."
    ],
    prerequisites: [
      { name: "Programming Fundamentals", desc: "Core Java, Python, or JavaScript for writing automated test scripts.", required: true },
      { name: "Web & API Basics", desc: "HTML DOM locators (XPath, CSS selectors), HTTP methods, REST APIs.", required: true },
      { name: "Testing Principles", desc: "Test case design, regression testing, bug lifecycle.", required: true },
      { name: "Git Version Control", desc: "Committing test code to repositories.", required: true }
    ],
    technologies: [
      { name: "Test Automation (Selenium / Cypress / Playwright)", category: "UI Automation", priority: "MUST LEARN", description: "Browser automation, locator strategies, handling waits, assertions." },
      { name: "Java / Python / JavaScript", category: "Language", priority: "MUST LEARN", description: "Programming language used for writing automated test scripts." },
      { name: "Test Frameworks (TestNG / JUnit / PyTest)", category: "Framework", priority: "MUST LEARN", description: "Test runners, annotations, parameterization, parallel execution, assertions." },
      { name: "API Automation (RestAssured / Requests)", category: "API Automation", priority: "MUST LEARN", description: "Programmatic testing of REST APIs, JSON parsing, status assertions." },
      { name: "Page Object Model (POM)", category: "Design Pattern", priority: "MUST LEARN", description: "Clean, maintainable, decoupled test automation architecture." },
      { name: "CI/CD Integration (GitHub Actions / Jenkins)", category: "CI/CD", priority: "HIGH PRIORITY", description: "Triggering automated regression tests on pull requests." },
      { name: "Reporting Tools (Allure / ExtentReports)", category: "Reporting", priority: "HIGH PRIORITY", description: "Generating rich visual HTML test execution reports with screenshots." },
      { name: "SQL for Test Data Validation", category: "Database", priority: "HIGH PRIORITY", description: "Database validation and test data seeding." }
    ],
    tools: [
      { name: "VS Code / IntelliJ IDEA", priority: "MUST LEARN", purpose: "Authoring automated test code." },
      { name: "Postman & RestAssured", priority: "MUST LEARN", purpose: "API testing and automation." },
      { name: "Git & GitHub Actions", priority: "MUST LEARN", purpose: "Version control and CI/CD test automation." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Language Core & DOM Locators", topics: ["Java/Python/JavaScript OOP concepts (Classes, Inheritance, Exceptions)", "HTML DOM structure, CSS Selectors, and XPath writing (Absolute vs Relative XPath)", "Browser developer tools for element inspection"], milestone: "Write 20 resilient XPath and CSS Selectors for complex dynamic web elements." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "UI Test Automation with Playwright / Selenium", topics: ["Browser setup, navigating pages, interacting with inputs, buttons, dropdowns", "Handling Dynamic Waits (Explicit Wait, Fluent Wait, Implicit Wait)", "Handling Alerts, iFrames, Multiple Browser Tabs, and File Uploads"], milestone: "Build an automated UI test suite executing a complete multi-step login and checkout flow." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Test Runners (TestNG / PyTest) & Reporting", topics: ["TestNG/PyTest Annotations (@Test, @BeforeMethod, @DataProvider)", "Generating Allure Reports with embedded failure screenshots and video recordings"], milestone: "Integrate Allure Reports into an automated test framework." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Page Object Model (POM) Framework Design", topics: ["Page Object Model (POM) architecture: Separating Page Objects from Test Scripts", "Data-Driven Testing reading inputs from Excel / JSON files", "API Test Automation with RestAssured / Python Requests"], milestone: "Build a production-grade Page Object Model test framework for a web application." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "CI/CD & Parallel Execution", topics: ["Parallel test execution across Chrome, Firefox, and Safari", "Running headless automated tests in GitHub Actions CI/CD pipelines", "Database assertions: Connecting tests directly to SQL to verify data changes"], milestone: "Configure automated headless test runs triggered on every GitHub Pull Request." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Automation Frameworks", topics: ["E-Commerce End-to-End Automation Framework with POM & CI/CD", "REST API Automated Test Suite with RestAssured", "Hybrid Data-Driven Test Automation Framework"], milestone: "Ship 3 comprehensive test automation frameworks." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Automation Portfolio & GitHub", topics: ["GitHub repository with clean POM test framework architecture", "Allure Report live demo hosted on GitHub Pages", "Clear README explaining framework design and setup instructions"], milestone: "A professional GitHub portfolio showcasing clean test automation code." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Automation Coding & Scenarios", topics: ["Live coding: Write a script to automate an autocomplete dropdown or table sort", "Difference between Implicit Wait, Explicit Wait, and Fluent Wait in Selenium/Playwright", "How to handle flaky automated tests and stale element reference exceptions", "Explain Page Object Model (POM) benefits and structure"], milestone: "Pass live test automation coding and framework architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Software Test Engineer resume highlighting framework development and CI/CD", "Applying to product companies and IT service firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Software Test Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "REST API Automated Test Suite with RestAssured / PyTest", tech: ["Java / Python", "RestAssured / Requests", "TestNG", "JSON Schema"], description: "Automated regression suite testing CRUD REST endpoints, token auth, and schema validation with assertions." },
      { tier: "Intermediate", title: "Data-Driven UI Test Automation Framework with Playwright", tech: ["Playwright / TypeScript", "Page Object Model", "Allure Report", "JSON"], description: "Data-driven test framework automating multi-browser checkout flows with data fed from JSON and Allure reports." },
      { tier: "Production / Capstone", title: "Enterprise Full-Stack Test Framework with CI/CD & Database Validation", tech: ["Java / Selenium", "TestNG", "PostgreSQL", "GitHub Actions", "Docker"], description: "Hybrid framework running parallel headless tests in CI/CD, validating UI state, API responses, and database rows." }
    ],
    certifications: [
      { name: "ISTQB Certified Tester – Foundation Level (CTFL)", issuer: "ISTQB" },
      { name: "Playwright / Selenium Automation Specialist", issuer: "TestAutomationU" }
    ],
    interviewTopics: [
      { category: "Test Automation Architecture", topics: ["How do you handle a `StaleElementReferenceException` in automated browser testing?", "Explain how Explicit Wait works with ExpectedConditions", "How does the Page Object Model (POM) pattern improve test maintainability?", "How to run automated tests in parallel without data conflicts"] }
    ],
    relatedRoles: ["QA Engineer", "Automation Test Engineer", "SDET", "Performance Test Engineer"]
  },

  {
    id: "automation-test-engineer",
    careerFamily: "TESTING & QUALITY",
    roleName: "Automation Test Engineer",
    slug: "automation-test-engineer",
    badge: "High Demand",
    shortDescription: "Builds scalable UI, mobile, and API test automation frameworks from scratch.",
    description: "An Automation Test Engineer specializes in designing, building, and scaling automated testing frameworks for web, mobile (Appium), and backend APIs. They write resilient test code, eliminate flaky tests, and integrate automated test runs into DevOps pipelines.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹19 - ₹38+ LPA" },
    responsibilities: [
      "Architect and build custom test automation frameworks using Playwright, Cypress, Selenium, or Appium.",
      "Develop automated cross-platform mobile tests for Android and iOS devices.",
      "Implement parallel test execution grids (Selenium Grid / Playwright Sharding / Docker).",
      "Integrate automated test execution into CI/CD pipelines (GitHub Actions, Jenkins).",
      "Maintain framework health, reduce test execution time, and eliminate flaky test results."
    ],
    prerequisites: [
      { name: "Strong Programming Skills", desc: "Object-oriented JavaScript/TypeScript, Python, or Java.", required: true },
      { name: "Web & Mobile Architecture", desc: "DOM, CSS/XPath, Mobile UI elements, REST APIs.", required: true },
      { name: "Test Design & Assertions", desc: "Writing comprehensive unit, integration, and E2E assertions.", required: true },
      { name: "CI/CD & Docker Basics", desc: "Running headless browsers in containerized environments.", required: true }
    ],
    technologies: [
      { name: "Playwright / Cypress / Selenium", category: "Web Automation", priority: "MUST LEARN", description: "Modern web E2E automation, auto-waiting, network mocking, parallel runs." },
      { name: "TypeScript / JavaScript OR Python / Java", category: "Language", priority: "MUST LEARN", description: "Writing clean, type-safe automated test frameworks." },
      { name: "Mobile Automation (Appium)", category: "Mobile Automation", priority: "HIGH PRIORITY", description: "Automating native and hybrid Android/iOS applications." },
      { name: "API Test Automation (Supertest / RestAssured)", category: "API Automation", priority: "MUST LEARN", description: "Fast, headless API regression and contract testing." },
      { name: "Behavior-Driven Development (Cucumber / BDD)", category: "BDD", priority: "HIGH PRIORITY", description: "Gherkin syntax (Feature, Scenario, Given-When-Then) step definitions." },
      { name: "Dockerized Test Runners (Selenium Grid)", category: "Infrastructure", priority: "HIGH PRIORITY", description: "Running scalable parallel browser nodes inside Docker." },
      { name: "CI/CD Test Pipelines (GitHub Actions)", category: "CI/CD", priority: "MUST LEARN", description: "Automated regression execution and artifact publishing on PRs." },
      { name: "Visual Regression Testing (Percy / Applitools)", category: "Visual Testing", priority: "GOOD TO KNOW", description: "Automated screenshot pixel-by-pixel regression comparison." }
    ],
    tools: [
      { name: "Playwright & VS Code", priority: "MUST LEARN", purpose: "Premier modern web test automation tool." },
      { name: "Appium Inspector", priority: "HIGH PRIORITY", purpose: "Inspecting mobile app element hierarchies." },
      { name: "Docker", priority: "MUST LEARN", purpose: "Running containerized browser test grids." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "TypeScript / Python & Modern Locators", topics: ["TypeScript fundamentals (Types, Interfaces, Async/Await)", "Playwright Architecture: Out-of-process architecture, browser contexts, auto-waiting", "Writing resilient user-facing locators (getByRole, getByText, getByTestId)"], milestone: "Write clean, flakiness-free Playwright test scripts for complex web apps." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Framework Design (Page Object Model)", topics: ["Designing a scalable Page Object Model (POM) with TypeScript", "Handling Network Interception, Mocking API responses, and Network Route aborts", "Managing test fixtures and authentication state reuse (StorageState)"], milestone: "Build a modular POM framework that bypasses UI login via saved auth tokens." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "BDD with Cucumber & Gherkin", topics: ["Writing feature files in Gherkin syntax", "Implementing Cucumber step definitions connected to Playwright/Selenium page objects"], milestone: "Build a Behavior-Driven Development (BDD) test suite with Cucumber." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "API Automation & Mobile with Appium", topics: ["API contract and schema validation with Supertest/RestAssured", "Appium architecture: Appium Server, UIAutomator2 (Android) / XCUITest (iOS)", "Automating native mobile gesture actions (Swipe, Scroll, Pinch, Touch)"], milestone: "Build an automated mobile test suite executing on an Android emulator with Appium." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Dockerized Grid & CI/CD Sharding", topics: ["Running parallel tests across Docker containers", "Test Sharding in GitHub Actions (splitting 1,000 tests across 5 parallel runner machines)", "Visual Regression Testing for pixel-perfect UI validation"], milestone: "Configure GitHub Actions matrix sharding running 100 tests in under 3 minutes." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Enterprise Automation Frameworks", topics: ["Enterprise Playwright TypeScript E2E Framework", "Mobile Appium Cross-Platform Test Suite", "Full-Stack Web + API + Database Automation Engine"], milestone: "Deliver 3 production-grade automation frameworks on GitHub." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Framework Showcase", topics: ["GitHub repository with CI/CD badges and live test report URLs", "Detailed architecture diagrams showing POM, fixtures, and CI pipelines", "Demonstrating execution speed and 0% flakiness"], milestone: "A professional GitHub portfolio showcasing advanced test automation." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Automation Engineering Interviews", topics: ["Explain how Playwright's auto-waiting eliminates the need for arbitrary sleep statements", "How do you handle authentication in E2E tests to avoid logging in before every single test?", "How does Appium communicate with the mobile device's underlying test driver?", "How do you design an automated test suite to run reliably in a CI/CD pipeline?"], milestone: "Ace technical test automation architecture and live coding rounds." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Automation Test Engineer resume emphasizing framework architecture and execution speed", "Applying to product SaaS companies and tech firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Automation Test Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Modular Playwright TypeScript Framework with Auth State Reuse", tech: ["Playwright", "TypeScript", "POM", "StorageState", "Allure"], description: "Fast, resilient web automation framework reusing saved browser session state to eliminate redundant login steps." },
      { tier: "Intermediate", title: "Mobile E2E Test Suite with Appium & Android Emulator", tech: ["Appium", "Java / Python", "UIAutomator2", "TestNG", "Android SDK"], description: "Automated mobile test suite for an e-commerce Android app automating cart additions, swipes, and checkout." },
      { tier: "Production / Capstone", title: "Enterprise Multi-Browser Parallel Test Engine with GitHub Actions Sharding", tech: ["Playwright", "TypeScript", "Docker", "GitHub Actions Matrix", "Percy"], description: "Enterprise framework running 200+ tests in parallel across 4 sharded GitHub Actions runners with visual regression testing." }
    ],
    certifications: [
      { name: "ISTQB Certified Tester – Advanced Level Test Automation Engineer", issuer: "ISTQB" },
      { name: "Playwright Automation Pro", issuer: "TestAutomationU" }
    ],
    interviewTopics: [
      { category: "Advanced Automation", topics: ["How does Playwright's WebSocket connection architecture differ from Selenium's HTTP WebDriver protocol?", "Explain how to mock API network requests in Playwright to test error states like 500 Internal Server Error", "How to manage test data isolation in parallel test executions", "How does Appium locate native mobile elements vs web view elements in hybrid apps?"] }
    ],
    relatedRoles: ["SDET", "Software Test Engineer", "QA Engineer", "Performance Test Engineer"]
  },

  {
    id: "performance-test-engineer",
    careerFamily: "TESTING & QUALITY",
    roleName: "Performance Test Engineer",
    slug: "performance-test-engineer",
    badge: "Specialized",
    shortDescription: "Conducts load, stress, spike, and endurance testing to ensure systems handle massive traffic.",
    description: "A Performance Test Engineer evaluates the speed, responsiveness, scalability, and stability of software applications under extreme user loads. They write load testing scripts (JMeter, k6, Locust), analyze server bottlenecks (CPU, Memory, DB locking), and ensure SLAs are met.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹4.5 - ₹9 LPA", mid: "₹9.5 - ₹18 LPA", senior: "₹20 - ₹42+ LPA" },
    responsibilities: [
      "Design performance test strategies, workload models, and Service Level Agreements (SLAs).",
      "Develop performance test scripts simulating 10,000+ concurrent virtual users using JMeter, k6, or Gatling.",
      "Execute Load, Stress, Spike, Soak (Endurance), and Break-point performance tests.",
      "Monitor server-side metrics (CPU, RAM, Disk I/O, JVM Garbage Collection, DB Connections) during load.",
      "Identify latency bottlenecks, database slow queries, memory leaks, and thread deadlocks."
    ],
    prerequisites: [
      { name: "HTTP & Network Protocols", desc: "Headers, TCP connections, latency, throughput (RPS), status codes.", required: true },
      { name: "Basic Programming", desc: "JavaScript, Python, or Java for scripting complex load scenarios.", required: true },
      { name: "Server & Database Basics", desc: "Understanding CPU/RAM utilization, thread pools, database connection limits.", required: true },
      { name: "Analytical Mindset", desc: "Interpreting percentile curves (p50, p95, p99) and response time graphs.", required: true }
    ],
    technologies: [
      { name: "Performance Testing Tools (Apache JMeter / k6 / Locust)", category: "Load Testing Core", priority: "MUST LEARN", description: "Virtual users, thread groups, ramp-up schedules, assertions, correlation." },
      { name: "Performance Test Types", category: "Methodology", priority: "MUST LEARN", description: "Load Testing, Stress Testing, Spike Testing, Soak/Endurance Testing, Scalability Testing." },
      { name: "Metrics Analysis (Percentiles p90/p95/p99, Throughput, Error Rate)", category: "Metrics", priority: "MUST LEARN", description: "Interpreting response time percentiles, RPS, concurrency, and saturation." },
      { name: "Correlation & Parameterization", category: "Scripting", priority: "MUST LEARN", description: "Extracting dynamic session IDs, tokens, and parameterizing test data from CSV." },
      { name: "Server Monitoring (Grafana / Prometheus / Dynatrace)", category: "Observability", priority: "HIGH PRIORITY", description: "Monitoring server CPU, memory, thread pool exhaustion, JVM heap during load." },
      { name: "Database Performance under Load", category: "Database", priority: "HIGH PRIORITY", description: "Identifying database lock contention, connection starvation, slow queries." },
      { name: "Distributed Load Testing", category: "Infrastructure", priority: "HIGH PRIORITY", description: "Running distributed load generators across multiple cloud worker nodes." }
    ],
    tools: [
      { name: "Apache JMeter / k6", priority: "MUST LEARN", purpose: "Primary load testing engines." },
      { name: "Grafana & Prometheus", priority: "MUST LEARN", purpose: "Real-time performance metrics and server telemetry." },
      { name: "Postman", priority: "MUST LEARN", purpose: "Validating individual API baseline response times." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Performance Metrics & Protocol Basics", topics: ["Understanding Performance Testing Goals: Speed, Scalability, Stability", "Core Performance Metrics: Response Time, Throughput (Requests Per Second - RPS), Error Rate", "Statistical Percentiles: Why Average is misleading and why p95/p99 percentiles matter"], milestone: "Establish baseline performance metrics and SLA targets for a REST API." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "JMeter & k6 Scripting", topics: ["JMeter Thread Groups, HTTP Request Samplers, View Results Tree, Summary Report", "k6 modern JavaScript-based load testing: Virtual Users (VUs), Stages, Thresholds", "Correlation: Extracting dynamic session tokens using Regular Expression / JSON Extractors"], milestone: "Build a k6 script simulating 1,000 concurrent users logging in, searching, and checking out." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Parameterization & Data Generation", topics: ["CSV Data Set Config in JMeter and JSON data feeding in k6", "Generating dynamic randomized test data for realistic load simulation"], milestone: "Execute a parameter-driven load test with 500 unique simulated user accounts." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Test Types (Stress, Spike, Soak Testing)", topics: ["Stress Testing: Determining the exact breaking point and maximum capacity of the system", "Spike Testing: Simulating flash sales and sudden 10x traffic surges", "Soak / Endurance Testing: Running 8-hour sustained load to detect Memory Leaks and table bloat"], milestone: "Execute an 8-hour soak test identifying memory leaks in a web backend." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Server Telemetry & Root Cause Analysis", topics: ["Monitoring CPU, RAM, Disk I/O, Network saturation with Prometheus & Grafana", "Database bottleneck diagnosis: Connection pool limits, lock contention, slow queries", "Authoring comprehensive Performance Test Engineering Reports with actionable tuning advice"], milestone: "Correlate a p99 latency spike to an unindexed database query and recommend a composite index." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Performance Testing", topics: ["E-Commerce Black Friday 10,000 User Stress Test Case Study", "FinTech Payment Gateway Spike & Latency Benchmark", "Distributed Cloud Load Generation with k6 Cloud / JMeter Master-Worker"], milestone: "Complete 3 comprehensive Performance Testing benchmark reports." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Performance Portfolio & Reports", topics: ["GitHub repository with k6 scripts, JMeter .jmx files, and Docker compose load labs", "Detailed performance benchmark reports with Grafana response time charts", "Tuning recommendations documentation"], milestone: "A professional Performance Test Engineer portfolio showcasing load test suites." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Performance Troubleshooting Scenarios", topics: ["Why is Average Response Time a dangerous metric compared to 95th Percentile?", "What is the difference between a Load Test, a Stress Test, and a Soak Test?", "How do you identify a Memory Leak during an Endurance Test?", "If response time degrades linearly as users increase, where is the most likely bottleneck?"], milestone: "Ace technical performance testing bottleneck analysis and scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Performance Test Engineer resume emphasizing throughput scaling and bottleneck resolution", "Applying to high-scale e-commerce, gaming, and banking enterprises", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Performance Test Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "API Baseline Performance & SLA Benchmark Suite", tech: ["k6", "JavaScript", "Grafana", "Docker"], description: "k6 load script validating that 95% of API requests complete in under 200ms with 500 concurrent virtual users." },
      { tier: "Intermediate", title: "Flash-Sale Spike & Stress Testing Simulation", tech: ["Apache JMeter", "CSV Parameterization", "Prometheus", "PostgreSQL"], description: "Simulates sudden 5,000 user traffic surge on a shopping cart, identifying database connection pool exhaustion." },
      { tier: "Production / Capstone", title: "Distributed Endurance & Memory Leak Detection Platform", tech: ["k6", "InfluxDB", "Grafana", "Node.js", "Docker Compose"], description: "8-hour continuous soak test framework tracking garbage collection, memory growth, and latency degradation curves." }
    ],
    certifications: [
      { name: "k6 Performance Testing Certificate", issuer: "k6 / Grafana" },
      { name: "ISTQB Performance Testing Specialist", issuer: "ISTQB" }
    ],
    interviewTopics: [
      { category: "Performance Engineering", topics: ["Explain the difference between Throughput (RPS) and Response Time", "What is Correlation in performance testing and why is it necessary for dynamic session tokens?", "How do you differentiate between a network bottleneck and a database lock bottleneck?", "How does Garbage Collection in Java impact application latency during peak load?"] }
    ],
    relatedRoles: ["Automation Test Engineer", "SDET", "Site Reliability Engineer", "Backend Developer"]
  },

  {
    id: "sdet",
    careerFamily: "TESTING & QUALITY",
    roleName: "SDET",
    slug: "sdet",
    badge: "Highest Demand / High Pay",
    shortDescription: "Software Development Engineer in Test — builds robust test engines, harnesses, and CI/CD quality gates.",
    description: "A Software Development Engineer in Test (SDET) is a software developer with a primary focus on testability, reliability, and automated quality infrastructure. They write production-grade test engines, custom test harnesses, mock servers, performance injectors, and CI/CD quality gates.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹12 LPA", mid: "₹13 - ₹25 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Architect and build enterprise test automation platforms, frameworks, and tools from scratch.",
      "Write clean, maintainable code in Java, Python, Go, or TypeScript adhering to SOLID principles.",
      "Implement automated API, UI, mobile, contract, and performance testing engines.",
      "Build custom mock servers, test data generators, and synthetic traffic injectors.",
      "Establish CI/CD quality gates, code coverage thresholds, and pipeline test infrastructure."
    ],
    prerequisites: [
      { name: "Solid Software Engineering & DSA", desc: "Proficiency in Data Structures, Algorithms, OOP, design patterns.", required: true },
      { name: "Deep Test Automation Architecture", desc: "Playwright, Cypress, RestAssured, Appium, Docker, K8s.", required: true },
      { name: "System Architecture Literacy", desc: "Microservices, event-driven systems, databases, caching, message queues.", required: true },
      { name: "DevOps & CI/CD", desc: "GitHub Actions, Docker containers, pipeline automation.", required: true }
    ],
    technologies: [
      { name: "Core Programming (Java / TypeScript / Python / Go)", category: "Language", priority: "MUST LEARN", description: "Clean code, OOP design patterns, concurrency, algorithms." },
      { name: "Test Framework Engineering (Playwright / RestAssured)", category: "Automation Core", priority: "MUST LEARN", description: "Building custom test frameworks, wrappers, parallel execution grids." },
      { name: "Contract Testing (Pact)", category: "Microservice Testing", priority: "MUST LEARN", description: "Consumer-Driven Contract testing between microservices." },
      { name: "Mocking & Virtualization (WireMock / MockServer)", category: "Service Virtualization", priority: "MUST LEARN", description: "Creating high-speed mock API dependencies for isolated testing." },
      { name: "Docker & Kubernetes for Test Environments", category: "Infrastructure", priority: "HIGH PRIORITY", description: "Spinning up ephemeral test environments on-demand in CI/CD." },
      { name: "CI/CD Pipeline Engineering", category: "DevOps", priority: "MUST LEARN", description: "Quality gates, PR checks, automated regression triggers, code coverage." },
      { name: "Performance & Security Automation", category: "Quality Engineering", priority: "HIGH PRIORITY", description: "Automated load tests (k6) and security scans (Trivy/ZAP) embedded in CI." },
      { name: "Data Structures & Algorithms (DSA)", category: "Computer Science", priority: "MUST LEARN", description: "Arrays, HashMaps, Trees, Graphs for high-speed algorithmic test tooling." }
    ],
    tools: [
      { name: "VS Code / IntelliJ IDEA", priority: "MUST LEARN", purpose: "Full-stack software and test engineering." },
      { name: "Docker & GitHub Actions", priority: "MUST LEARN", purpose: "Ephemeral test environments and automated CI/CD." },
      { name: "WireMock & Postman", priority: "MUST LEARN", purpose: "Service virtualization and API mocking." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Software Engineering & DSA Mastery", topics: ["Data Structures & Algorithms (Arrays, Strings, HashMaps, Trees, Recursion)", "Object-Oriented Design (SOLID principles, Factory pattern, Builder pattern)", "Writing comprehensive Unit Tests with Mockito / Jest"], milestone: "Solve 75+ DSA problems on LeetCode and build an OOP custom test utility." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Enterprise Test Framework Engineering", topics: ["Designing a modular Test Framework from scratch without monolithic boilerplate", "Custom Web & API wrappers, fluent assertions, automated retry mechanisms", "Managing dynamic multi-environment configurations (dev, staging, prod)"], milestone: "Architect an end-to-end TypeScript/Java test engine with custom retry and logging logic." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Service Virtualization with WireMock", topics: ["Setting up WireMock standalone servers to simulate third-party API dependencies", "Simulating latency delays, network dropouts, and 500 error scenarios"], milestone: "Build a mock server simulating a payment gateway (Stripe) with configurable latency." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Contract Testing & Ephemeral Test Envs", topics: ["Consumer-Driven Contract Testing using Pact for microservice APIs", "Dockerizing test suites and spinning up ephemeral databases on-demand", "Database state seeding and automated teardown routines"], milestone: "Implement Pact contract testing verifying compatibility between 2 microservices." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "CI/CD Quality Gates & Synthetic Monitoring", topics: ["Building automated GitHub Actions pipelines that enforce 80%+ code coverage quality gates", "Synthetic monitoring scripts testing live production health every 5 minutes", "Embedding automated k6 performance regression checks into CI/CD"], milestone: "Build a CI/CD quality gate blocking PRs with performance regressions >10%." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production SDET Platforms", topics: ["Full-Stack Enterprise Test Automation Platform (UI, API, DB)", "Synthetic Production Health Monitor with Instant Alerting", "Distributed Performance Testing Engine in Docker"], milestone: "Complete 3 production-grade SDET platforms." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "SDET Portfolio & Architecture", topics: ["GitHub repository with clean, modular framework architecture and CI/CD pipelines", "Comprehensive technical documentation and architectural diagrams", "Open-source tool contributions"], milestone: "A professional SDET portfolio demonstrating software engineering rigor." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "FAANG / Product SDET Interviews", topics: ["DSA Coding Interviews (LeetCode Medium string/tree/graph questions)", "Test Automation Architecture Design: 'Design a scalable test platform for microservices'", "How to handle database state cleanup in parallel automated tests without conflicts", "Contract Testing vs Integration Testing trade-offs"], milestone: "Pass rigorous SDET coding, system design, and framework architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Product Company Placements", topics: ["SDET resume emphasizing software development depth, framework creation, and CI/CD", "Targeting tier-1 product companies (Amazon, Microsoft, Uber, fintechs)", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior SDET." }
    ],
    projects: [
      { tier: "Beginner", title: "Custom API & UI Test Harness Engine", tech: ["TypeScript / Java", "Playwright", "RestAssured", "Allure"], description: "Lightweight custom test engine with built-in fluent assertions, automatic screenshot captures on failure, and HTML reporting." },
      { tier: "Intermediate", title: "Microservice Contract Testing & WireMock Virtualization Platform", tech: ["Pact", "WireMock", "Docker", "Node.js", "Jest"], description: "Full contract testing suite preventing breaking API changes between frontend and backend services with mock stubs." },
      { tier: "Production / Capstone", title: "Enterprise Continuous Quality Platform with CI/CD Gates & Synthetic Canary", tech: ["Docker", "Kubernetes", "GitHub Actions", "k6", "Playwright", "Prometheus"], description: "Production platform executing unit, contract, E2E, and performance tests in CI/CD, backed by live synthetic production canary monitors." }
    ],
    certifications: [
      { name: "Oracle Certified Professional: Java Programmer", issuer: "Oracle" },
      { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "SDET Architecture & Coding", topics: ["Implement a custom LRU Cache or Rate Limiter in Java/Python", "How does Consumer-Driven Contract Testing (Pact) prevent breaking changes in microservices?", "How do you manage test data creation and teardown in parallel test executions?", "Design an automated test infrastructure that runs 5,000 tests on every pull request within 5 minutes"] }
    ],
    relatedRoles: ["Automation Test Engineer", "Software Engineer", "Backend Developer", "DevOps Engineer"]
  }
];

module.exports = testingAndQualityRoles;

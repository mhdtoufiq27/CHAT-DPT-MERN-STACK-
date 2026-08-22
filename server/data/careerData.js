/**
 * Career Data Aggregator & Engine Normalizer
 * Consolidates all 9 Career Families and all 52+ technical IT roles.
 * Ensures every single role contains rich Day 2 data:
 * - Directed Learning Order (Sequential dependencies, why each skill, practice, mini project, depth)
 * - Anti-Overwhelm Guardrails (What NOT to focus on yet - Learn Later)
 * - 4-Tier Project Roadmap (Beginner, Intermediate, Advanced, Capstone)
 * - 7-Pillar Comprehensive Interview Roadmap
 * - 6-Milestone Interactive Career Readiness Checklist
 */

const careerFamilies = require("./careers/families");
const softwareDevelopmentRoles = require("./careers/softwareDevelopment");
const dataAndAIRoles = require("./careers/dataAndAI");
const cloudAndDevOpsRoles = require("./careers/cloudAndDevOps");
const cybersecurityRoles = require("./careers/cybersecurity");
const databaseAndSystemsRoles = require("./careers/databaseAndSystems");
const businessAndTechRoles = require("./careers/businessAndTech");
const testingAndQualityRoles = require("./careers/testingAndQuality");
const webAndUIRoles = require("./careers/webAndUI");
const specializedRoles = require("./careers/specialized");

const rawCareerRoles = [
  ...softwareDevelopmentRoles,
  ...dataAndAIRoles,
  ...cloudAndDevOpsRoles,
  ...cybersecurityRoles,
  ...databaseAndSystemsRoles,
  ...businessAndTechRoles,
  ...testingAndQualityRoles,
  ...webAndUIRoles,
  ...specializedRoles
];

/**
 * Intelligent Normalizer to guarantee that EVERY role has complete Day 2 features
 */
function normalizeCareerRole(role) {
  const normalized = { ...role };

  // 1. Guarantee learningOrder with strict directed dependency chain
  if (!normalized.learningOrder || normalized.learningOrder.length === 0) {
    const techList = normalized.technologies || [];
    normalized.learningOrder = techList.slice(0, 8).map((tech, idx) => {
      const prevTech = idx > 0 ? techList[idx - 1].name : "Fundamental Computer Literacy";
      return {
        step: idx + 1,
        technology: tech.name,
        priority: tech.priority || (idx < 4 ? "MUST LEARN" : "HIGH PRIORITY"),
        whyYouNeedIt: tech.description || `Critical component of modern ${role.roleName} workflows, enabling core execution and industry standard compliance.`,
        prerequisite: prevTech,
        depth: idx < 3 ? "Deep Mastery" : idx < 6 ? "Working Proficiency" : "Practical Understanding",
        topics: [
          `${tech.name} Core Principles & Architecture`,
          `Practical implementation and syntax conventions`,
          `Common performance pitfalls and error debugging`,
          `Integration with modern ${role.roleName} toolchains`
        ],
        practice: `Complete 3 hands-on practical exercises implementing ${tech.name} from scratch.`,
        miniProject: `Build a functional mini-project demonstrating practical mastery of ${tech.name}.`
      };
    });
  }

  // 2. Guarantee learnLater (Anti-Overwhelm Guardrails)
  if (!normalized.learnLater || normalized.learnLater.length === 0) {
    normalized.learnLater = [
      {
        technology: "Enterprise Micro-Architecture Orchestration",
        reason: "Excessive operational overhead for early career stages. Focus on mastering single-system foundations first.",
        whenToLearn: "When leading cross-team architectural refactoring in enterprise scale environments."
      },
      {
        technology: "Custom Low-Level Compiler / Runtime Optimizations",
        reason: "Niche specialization that is not asked in 95% of junior to mid-level engineering interviews.",
        whenToLearn: "When working in compiler research or specialized low-latency systems engineering."
      },
      {
        technology: "Multi-Region Distributed Failover Sharding",
        reason: "Premature optimization for small to medium scale projects; standard managed tools handle this out of the box.",
        whenToLearn: "When managing systems handling millions of concurrent transactions across multiple geographic regions."
      }
    ];
  }

  // 3. Guarantee 4-Tier Project Roadmap (Beginner, Intermediate, Advanced, Capstone)
  if (!normalized.projects || normalized.projects.length < 4) {
    const existing = normalized.projects || [];
    const tiers = ["Beginner", "Intermediate", "Advanced", "Production / Capstone"];
    
    normalized.projects = tiers.map((tierName, idx) => {
      const found = existing.find(p => p.tier && p.tier.toLowerCase().includes(tierName.toLowerCase().split("/")[0].trim()));
      if (found) {
        return {
          tier: tierName,
          title: found.title,
          difficulty: found.difficulty || (idx === 0 ? "Beginner Friendly" : idx === 1 ? "Intermediate" : idx === 2 ? "Advanced" : "Production Grade / Capstone"),
          skills: found.skills || (found.tech ? found.tech.slice(0, 4) : [role.roleName, "Core Execution"]),
          technology: found.technology || found.tech || ["Core Tools", "Git"],
          expectedOutcome: found.expectedOutcome || found.description || `A complete ${tierName.toLowerCase()} project showcasing key ${role.roleName} capabilities.`,
          portfolioValue: found.portfolioValue || (idx === 0 ? "Validates core domain fundamentals." : idx === 1 ? "Demonstrates practical full-cycle capability." : idx === 2 ? "High recruiter impact project." : "Standout portfolio capstone proving end-to-end production readiness.")
        };
      } else {
        const projTitles = [
          `Foundational ${role.roleName} Operations Hub`,
          `Automated ${role.roleName} Analytics & Workflow System`,
          `Scalable Enterprise ${role.roleName} Engine`,
          `Production Capstone: Cloud-Native ${role.roleName} Platform`
        ];
        return {
          tier: tierName,
          title: projTitles[idx],
          difficulty: idx === 0 ? "Beginner Friendly" : idx === 1 ? "Intermediate" : idx === 2 ? "Advanced" : "Production Grade / Capstone",
          skills: [`${role.roleName} Principles`, "Architecture Design", "Automated Testing", "Cloud Deployment"],
          technology: (role.technologies || []).slice(idx * 2, (idx * 2) + 3).map(t => t.name) || ["Git", "Docker"],
          expectedOutcome: `A comprehensive ${tierName.toLowerCase()} implementation solving real-world ${role.roleName} challenges with clean documentation.`,
          portfolioValue: idx === 3 ? "Elite Recruiter Showcase — Proves full production ownership, testing, and modern industry best practices." : "Strong Portfolio Project — Proves hands-on technical execution."
        };
      }
    });
  }

  // 4. Guarantee 7-Pillar Comprehensive Interview Roadmap
  if (!normalized.interviewRoadmap || !normalized.interviewRoadmap.technicalFundamentals) {
    const techTopics = (normalized.technologies || []).slice(0, 4).map(t => t.name);
    normalized.interviewRoadmap = {
      technicalFundamentals: [
        { topic: `${techTopics[0] || "Core"} Architecture & Execution`, question: `Explain the fundamental internal architecture and execution model of ${techTopics[0] || "this domain"}.`, tip: "Focus on memory management, lifecycle, and concurrency mechanisms." },
        { topic: "Performance Optimization", question: `How do you diagnose and resolve latency bottlenecks and memory leaks in production?`, tip: "Discuss profiling tools, metric monitoring, and code-level optimizations." }
      ],
      codingProblems: [
        { title: `Domain Data Transformation & Parsing`, difficulty: "Easy", pattern: "Hash Table / Two Pointers", focus: "Data extraction and validation." },
        { title: `Algorithmic Optimization Challenge`, difficulty: "Medium", pattern: "Dynamic Programming / Sliding Window", focus: "Optimal time and space complexity." },
        { title: `Concurrency & Event Processing`, difficulty: "Medium", pattern: "Producer-Consumer / Async Queue", focus: "Thread safety and non-blocking I/O." }
      ],
      coreCSSubjects: [
        { subject: "Database Systems (DBMS)", topic: "ACID Properties & Indexing", keyQuestion: "How do B-Tree and Hash indexes work, and what are the trade-offs of indexing frequently updated tables?" },
        { subject: "Operating Systems (OS)", topic: "Processes, Threads & Memory", keyQuestion: "Difference between Process and Thread memory address spaces and how context switching impacts performance." },
        { subject: "Computer Networks (CN)", topic: "TCP/IP & HTTP Protocols", keyQuestion: "Explain the TCP 3-way handshake and the key differences between HTTP/1.1, HTTP/2, and WebSockets." },
        { subject: "Software Engineering (OOP)", topic: "SOLID Design Principles", keyQuestion: "Explain the Dependency Inversion Principle and how it enables unit test mocking and modular decoupling." }
      ],
      roleSpecificQuestions: [
        { question: `What are the top 3 architectural trade-offs you consider when designing systems as a ${role.roleName}?`, answerKey: "Latency vs Throughput, Consistency vs Availability (CAP Theorem), and Monolithic simplicity vs Microservice decoupling." },
        { question: `How do you ensure data integrity, security, and zero-trust permissions in your solutions?`, answerKey: "Implement principle of least privilege, input sanitization, automated vulnerability scans, and encryption at rest/in transit." }
      ],
      projectQuestions: [
        { question: `Walk me through your most complex project. What was the biggest architectural bottleneck you faced and how did you resolve it?`, tip: "Use the STAR method: Situation, Task, Action (benchmarking, trade-offs, implementation), and measurable Results." }
      ],
      hrPreparation: [
        { question: `Why did you choose to specialize in ${role.roleName}?`, strategy: "Highlight genuine passion for the domain, key technical milestones you've built, and how your skills create high business impact." },
        { question: `Where do you see yourself in 3-5 years in this career path?`, strategy: "Articulate goals around architectural leadership, mentoring junior engineers, and mastering scalable cloud ecosystems." }
      ],
      behavioralPreparation: [
        { scenario: `Describe a situation where requirements changed right before a deadline.`, framework: "STAR: Explain how you reprioritized tasks, communicated transparently with stakeholders, and delivered core MVP functionality on time." },
        { scenario: `Tell me about a time you had a technical disagreement with a teammate.`, framework: "STAR: Focus on relying on objective data, benchmarks, and respectful code spikes to reach team consensus." }
      ]
    };
  }

  // 5. Guarantee 6-Milestone Interactive Career Readiness Checklist
  if (!normalized.careerReadinessChecklist || !normalized.careerReadinessChecklist.foundation) {
    normalized.careerReadinessChecklist = {
      foundation: [
        `Master fundamental principles and foundational syntax for ${role.roleName}`,
        "Understand operating systems, memory models, and networking basics",
        "Proficiency in Git version control (branching, merging, resolving conflicts)",
        "Write clean, modular, and maintainable code adhering to industry standards"
      ],
      coreSkills: [
        `Master the top 4 core technologies required for ${role.roleName}`,
        "Design scalable schemas and write optimized queries/logic",
        "Implement secure authentication, authorization, and error handling",
        "Write automated unit and integration tests with 80%+ coverage"
      ],
      projects: [
        "Complete and deploy Beginner Project with clean documentation",
        "Complete and deploy Intermediate Project with third-party integrations",
        "Complete and deploy Advanced Project with real-time/scaling features",
        "Ship Production Capstone with automated CI/CD and monitoring"
      ],
      portfolio: [
        "Publish clean, responsive Developer Portfolio website with custom domain",
        "Author comprehensive GitHub READMEs with architecture diagrams and live demo links",
        "Ensure all project repositories have clean commit histories and zero sensitive keys"
      ],
      interview: [
        "Solve 75+ DSA coding problems covering Arrays, Two Pointers, HashMaps, and Trees",
        "Review Core CS subjects: DBMS Indexing, OS Concurrency, TCP/IP, SOLID principles",
        "Prepare 3 project defense deep-dive stories using the STAR method",
        "Conduct 3+ mock technical and behavioral interviews"
      ],
      jobApplication: [
        `Craft an ATS-optimized, 1-page ${role.roleName} resume with quantifiable project achievements`,
        "Polish LinkedIn profile with domain keywords, project media, and regular technical posts",
        "Direct outreach to 10+ tech recruiters and engineering managers per week",
        "Apply to 30+ tailored opportunities on LinkedIn, Wellfound, and job portals"
      ]
    };
  }

  // Guarantee keyResponsibilities & readinessChecklist aliases
  if (!normalized.keyResponsibilities || normalized.keyResponsibilities.length === 0) {
    normalized.keyResponsibilities = normalized.responsibilities || [
      `Design, develop, and maintain high-quality systems as a ${role.roleName}.`,
      `Collaborate effectively with cross-functional technical teams to ship reliable software.`,
      `Conduct code reviews, optimize system performance, and enforce security best practices.`
    ];
  }

  if (!normalized.readinessChecklist) {
    normalized.readinessChecklist = normalized.careerReadinessChecklist;
  }

  return normalized;
}

// Process and normalize all roles
const allCareerRoles = rawCareerRoles.map(normalizeCareerRole);

// Helper lookup map by ID and Slug
const rolesById = new Map();
allCareerRoles.forEach(role => {
  rolesById.set(role.id, role);
  rolesById.set(role.slug, role);
});

// Helper lookup map by Family ID / Name
const rolesByFamily = new Map();
allCareerRoles.forEach(role => {
  const familyKey = role.careerFamily.toUpperCase();
  if (!rolesByFamily.has(familyKey)) {
    rolesByFamily.set(familyKey, []);
  }
  rolesByFamily.get(familyKey).push(role);
});

module.exports = {
  careerFamilies,
  allCareerRoles,
  rolesById,
  rolesByFamily,

  // Query functions
  getAllFamilies: () => careerFamilies,
  
  getFamilyById: (id) => {
    return careerFamilies.find(f => f.id.toLowerCase() === id.toLowerCase() || f.name.toLowerCase() === id.toLowerCase());
  },

  getAllRoles: () => allCareerRoles,

  getRoleById: (id) => {
    return rolesById.get(id) || rolesById.get(id.toLowerCase());
  },

  getRolesByFamily: (familyId) => {
    const fam = careerFamilies.find(f => f.id.toLowerCase() === familyId.toLowerCase() || f.name.toLowerCase() === familyId.toLowerCase());
    if (!fam) return [];
    return allCareerRoles.filter(r => r.careerFamily.toUpperCase() === fam.name.toUpperCase());
  },

  searchRoles: (query) => {
    if (!query || query.trim() === "") return allCareerRoles;
    const q = query.toLowerCase().trim();
    return allCareerRoles.filter(role => {
      return (
        role.roleName.toLowerCase().includes(q) ||
        role.careerFamily.toLowerCase().includes(q) ||
        role.description.toLowerCase().includes(q) ||
        role.shortDescription.toLowerCase().includes(q) ||
        (role.technologies && role.technologies.some(t => t.name.toLowerCase().includes(q))) ||
        (role.prerequisites && role.prerequisites.some(p => p.name.toLowerCase().includes(q)))
      );
    });
  }
};

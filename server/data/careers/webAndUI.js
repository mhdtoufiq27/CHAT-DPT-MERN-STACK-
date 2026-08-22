/**
 * Web / UI Career Roles (4 Roles)
 */

const webAndUIRoles = [
  {
    id: "web-developer",
    careerFamily: "WEB / UI",
    roleName: "Web Developer",
    slug: "web-developer",
    badge: "High Demand",
    shortDescription: "Builds modern, responsive websites and web applications using HTML, CSS, JavaScript, and CMS platforms.",
    description: "A Web Developer builds, maintains, and optimizes fast, responsive websites and web applications. They master core web standards (HTML5, modern CSS, JavaScript), content management systems (WordPress, Headless CMS), SEO best practices, and responsive mobile-first layouts.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (CS/IT)", "Diploma (CS)"],
    salaryRange: { entry: "₹3.5 - ₹7 LPA", mid: "₹7.5 - ₹15 LPA", senior: "₹16 - ₹30+ LPA" },
    responsibilities: [
      "Develop responsive, mobile-first websites using semantic HTML5, modern CSS/Sass, and JavaScript.",
      "Build dynamic features, interactive forms, and client-side data fetching via REST APIs.",
      "Optimize website load speed, Core Web Vitals (LCP, FID, CLS), and SEO metadata.",
      "Customize and maintain Content Management Systems (WordPress, Strapi, Sanity).",
      "Ensure cross-browser compatibility and accessible WCAG standards across desktop and mobile."
    ],
    prerequisites: [
      { name: "Web Basics", desc: "How the web works (DNS, HTTP/HTTPS, Web Servers, Browsers).", required: true },
      { name: "HTML & CSS Foundation", desc: "Tags, box model, selectors, flexbox, CSS grid.", required: true },
      { name: "JavaScript Fundamentals", desc: "Variables, functions, DOM manipulation, fetch API.", required: true },
      { name: "Git & Version Control", desc: "Basic commits, branches, pushing to GitHub.", required: true }
    ],
    technologies: [
      { name: "Semantic HTML5 & Modern CSS3", category: "Core Web", priority: "MUST LEARN", description: "Flexbox, CSS Grid, custom properties (CSS variables), responsive media queries." },
      { name: "Modern JavaScript (ES6+)", category: "Core Language", priority: "MUST LEARN", description: "DOM manipulation, event listeners, async/await, fetch API, promises." },
      { name: "Responsive Web Design & Mobile-First", category: "Design System", priority: "MUST LEARN", description: "Fluid typography, viewport units, mobile navigation, touch gestures." },
      { name: "Tailwind CSS / Bootstrap", category: "CSS Frameworks", priority: "MUST LEARN", description: "Utility-first CSS styling, responsive layout utilities, component design." },
      { name: "Web Performance & Core Web Vitals", category: "Performance", priority: "HIGH PRIORITY", description: "Image optimization (WebP/AVIF), lazy loading, caching, Lighthouse audits." },
      { name: "Search Engine Optimization (SEO)", category: "SEO", priority: "HIGH PRIORITY", description: "Structured data (Schema.org), meta tags, OpenGraph, sitemaps, robots.txt." },
      { name: "Headless CMS & WordPress", category: "CMS", priority: "HIGH PRIORITY", description: "Headless CMS (Strapi/Sanity) or custom WordPress themes with PHP/REST API." },
      { name: "Static Site Generators (Astro / Next.js)", category: "Modern SSG", priority: "GOOD TO KNOW", description: "Fast, content-driven websites with zero JS footprint." }
    ],
    tools: [
      { name: "VS Code", priority: "MUST LEARN", purpose: "Primary code editor." },
      { name: "Chrome DevTools & Lighthouse", priority: "MUST LEARN", purpose: "Debugging layouts, network performance, and accessibility." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Source code management and GitHub Pages/Vercel deployments." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Semantic HTML5 & Modern CSS", topics: ["Semantic tags (<header>, <nav>, <main>, <article>, <section>, <footer>)", "CSS Box Model, Positioning, Flexbox in-depth, and CSS Grid layout systems", "Responsive Design with Mobile-First Media Queries and Fluid Typography (clamp())"], milestone: "Build a pixel-perfect, fully responsive multi-page agency website without frameworks." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "JavaScript DOM & Dynamic Interactions", topics: ["DOM Selection, Event Delegation, creating/removing dynamic elements", "Building interactive components: Modals, Accordions, Sliders, Dropdown menus", "Async JavaScript: Fetching data from public REST APIs, handling JSON, async/await"], milestone: "Build an interactive dynamic recipe / product catalog with search, filter, and modal details." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Tailwind CSS & Build Tools", topics: ["Configuring Tailwind CSS with Vite", "Utility-first rapid prototyping and creating reusable UI components"], milestone: "Rebuild a modern SaaS marketing landing page using Tailwind CSS." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Web Performance & Technical SEO", topics: ["Core Web Vitals: Optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)", "Image optimization (modern formats WebP/AVIF, responsive srcset, lazy loading)", "Technical SEO: Meta tags, OpenGraph social cards, JSON-LD Schema markup, XML sitemaps"], milestone: "Achieve a 100/100 Lighthouse performance and SEO score on a live website." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Headless CMS & Static Site Generators", topics: ["Setting up a Headless CMS (Strapi / Sanity / Contentful)", "Building lightning-fast static websites with Astro or Next.js static export", "Deploying with CI/CD on Vercel, Netlify, or Cloudflare Pages with custom domains"], milestone: "Deploy a fast, dynamic blog/portfolio powered by a Headless CMS and Astro." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Web Development", topics: ["High-Converting SaaS Landing Page with Animations", "E-Commerce Product Showcase with Cart and LocalStorage", "Modern CMS-Powered Blog & Portfolio"], milestone: "Launch 3 production websites live on custom domains." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Live Portfolio Website", topics: ["Personal developer portfolio website with interactive projects, dark mode, and contact form", "Live working URLs on Vercel/Netlify for all projects", "GitHub code repositories with clean documentation"], milestone: "A stunning, responsive portfolio website live on the internet." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Web Core Technical Questions", topics: ["Explain the CSS Box Model and the difference between `content-box` and `border-box`", "What is Event Bubbling and Event Capturing in JavaScript?", "How do you optimize a website that has a 4-second initial load time?", "Difference between `localStorage`, `sessionStorage`, and `cookies`"], milestone: "Ace technical web developer coding and theory interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Web Developer resume highlighting live links, Lighthouse scores, and responsive design", "Applying to digital agencies, tech startups, and freelance opportunities", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Web Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "Pixel-Perfect Multi-Page Corporate Agency Website", tech: ["HTML5", "CSS3", "Flexbox/Grid", "JavaScript", "Responsive"], description: "Clean corporate website with responsive mobile drawer navigation, interactive testimonials carousel, and contact validation." },
      { tier: "Intermediate", title: "Dynamic Real-Time Weather & Air Quality Web App", tech: ["JavaScript (ES6+)", "OpenWeather API", "Tailwind CSS", "LocalStorage"], description: "Web application fetching live weather and geolocation data with 5-day forecasts, search history, and dark mode." },
      { tier: "Production / Capstone", title: "Ultra-Fast CMS-Powered Tech Magazine & Portfolio", tech: ["Astro", "Tailwind CSS", "Strapi / Sanity CMS", "Vercel", "Lighthouse 100"], description: "Production tech blog with 100/100 Lighthouse performance, dynamic CMS authoring, full-text search, and SEO schema markup." }
    ],
    certifications: [
      { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta (Coursera)" },
      { name: "freeCodeCamp Responsive Web Design Certification", issuer: "freeCodeCamp" }
    ],
    interviewTopics: [
      { category: "Web Core", topics: ["Explain how CSS Specificity is calculated and how to avoid `!important`", "What is the difference between `defer` and `async` script attributes?", "How does the Critical Rendering Path work (DOM -> CSSOM -> Render Tree -> Layout -> Paint)?", "How do you prevent Cumulative Layout Shift (CLS) on images and fonts?"] }
    ],
    relatedRoles: ["UI Developer", "Frontend Developer", "UI/UX Designer", "UX Engineer"]
  },

  {
    id: "ui-developer",
    careerFamily: "WEB / UI",
    roleName: "UI Developer",
    slug: "ui-developer",
    badge: "High Demand",
    shortDescription: "Translates Figma designs into pixel-perfect, accessible, animated frontend components and design systems.",
    description: "A UI Developer bridges the world of UI/UX design and frontend engineering. They specialize in transforming complex Figma/Adobe XD designs into pixel-perfect, responsive, accessible (WCAG), and beautifully animated web component libraries.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "CS/IT"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹17 LPA", senior: "₹18 - ₹36+ LPA" },
    responsibilities: [
      "Translate Figma/Sketch design files into pixel-perfect React/Vue/Web Components.",
      "Build and maintain reusable Design Systems, component libraries, and Storybook documentation.",
      "Implement smooth micro-interactions and animations using Framer Motion and CSS keyframes.",
      "Enforce Web Content Accessibility Guidelines (WCAG 2.1 AA/AAA) and ARIA accessibility standards.",
      "Ensure seamless responsive behavior and cross-browser visual fidelity across all screen sizes."
    ],
    prerequisites: [
      { name: "Advanced CSS & Modern Styling", desc: "CSS custom properties, CSS Grid, modern layout techniques, animations.", required: true },
      { name: "JavaScript & Component Frameworks", desc: "React, Vue, or modern Web Components.", required: true },
      { name: "Design Tool Literacy", desc: "Navigating Figma (Auto Layout, Design Tokens, Components, Variants).", required: true },
      { name: "Web Accessibility (a11y)", desc: "Semantic HTML, ARIA roles, keyboard navigation, contrast ratios.", required: true }
    ],
    technologies: [
      { name: "React / Vue Component Architecture", category: "Framework", priority: "MUST LEARN", description: "Reusable components, props, hooks, composables, compound components." },
      { name: "Design Systems & Storybook", category: "Design System", priority: "MUST LEARN", description: "Design tokens (colors, typography, spacing), component states in Storybook." },
      { name: "Advanced CSS / Tailwind CSS / Styled-Components", category: "Styling", priority: "MUST LEARN", description: "Utility-first styling, CSS-in-JS, theme toggles, container queries." },
      { name: "Web Animations (Framer Motion / GSAP)", category: "Motion", priority: "MUST LEARN", description: "Layout animations, gesture animations, page transitions, scroll triggers." },
      { name: "Web Accessibility (WCAG 2.1 & ARIA)", category: "Accessibility", priority: "MUST LEARN", description: "Screen reader compatibility, keyboard focus management, ARIA live regions." },
      { name: "Figma to Code Workflow", category: "Design Tools", priority: "MUST LEARN", description: "Inspecting design tokens, typography scales, SVG export, Auto Layout." },
      { name: "Headless UI & Radix UI", category: "UI Primitives", priority: "HIGH PRIORITY", description: "Unstyled, accessible UI primitives (Dialogs, Popovers, Dropdowns)." }
    ],
    tools: [
      { name: "Figma", priority: "MUST LEARN", purpose: "Design inspection and token extraction." },
      { name: "Storybook", priority: "MUST LEARN", purpose: "Component-driven development and visual documentation." },
      { name: "VS Code & Framer Motion", priority: "MUST LEARN", purpose: "UI component and motion coding." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Figma Tokens & Advanced Modern CSS", topics: ["Understanding Figma: Auto Layout, Component Variants, Design Tokens (Tokens Studio)", "Modern CSS: Container Queries (`@container`), `:has()` selector, CSS Subgrid", "Building a custom CSS Design Token theme system with CSS Custom Properties"], milestone: "Convert a complex Figma dashboard design into a responsive CSS theme system." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "React Component Library in Storybook", topics: ["Building Atomic Design components: Buttons, Inputs, Badges, Modals, Tooltips", "Setting up Storybook for isolated component development and visual state testing", "Building Compound Component patterns in React (e.g. `<Accordion.Item>`)"], milestone: "Publish a 15-component UI library documented with live interactive states in Storybook." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Headless UI (Radix / Ark UI)", topics: ["Building accessible UI components using Radix UI / Headless UI primitives", "Customizing unstyled dialogs, dropdowns, tabs, and popovers with Tailwind CSS"], milestone: "Build an accessible modal and multi-level dropdown menu using Radix UI." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Micro-Interactions & Framer Motion", topics: ["Framer Motion: `motion.div`, `animate`, `transition`, `variants`", "Layout animations (`layoutId`), shared element transitions, gestures (drag, hover, tap)", "Building interactive drag-and-drop Kanban boards and animated drawer menus"], milestone: "Create a fluid animated UI with smooth layout transitions and drag interactions." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "WCAG Accessibility & Design System NPM Package", topics: ["WCAG 2.1 AA Compliance: Keyboard traps, focus rings, ARIA labels, contrast checks with Axe", "Packaging and publishing the Design System as a private/public NPM package", "Automating visual regression tests with Chromatic"], milestone: "Publish a fully accessible, WCAG-compliant design system library to NPM." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production UI Components", topics: ["Enterprise Design System & Storybook Documentation Portal", "Interactive FinTech Analytics Dashboard with Micro-Interactions", "SaaS Component Library with Dark/Light/Custom Theme Engine"], milestone: "Ship 3 comprehensive UI development projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "UI Component Showcase & Portfolio", topics: ["Interactive portfolio showcasing Framer Motion animations and live component demos", "Live Storybook deployment hosted on Chromatic/Vercel", "GitHub repositories demonstrating clean component code"], milestone: "A visually stunning portfolio showcasing design system prowess." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "UI Coding & a11y Interviews", topics: ["Live coding: Build an accessible Dropdown or Autocomplete component from scratch in 30 minutes", "How do you ensure an interactive modal is accessible to screen readers (focus trap, Esc key, ARIA)?", "Explain how CSS Container Queries differ from Media Queries", "Difference between CSS transforms/opacity animations and animating top/left/width (GPU acceleration)"], milestone: "Ace UI engineering live coding and accessibility rounds." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["UI Developer resume highlighting Design Systems, Storybook, and Framer Motion", "Applying to product tech companies and design-forward agencies", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior UI Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "Accessible Component Library with Radix UI & Tailwind", tech: ["React", "Radix UI", "Tailwind CSS", "Storybook", "TypeScript"], description: "Suite of 12 accessible UI primitives including Modals, Dropdowns, Tabs, and Toast notifications with Storybook docs." },
      { tier: "Intermediate", title: "Interactive FinTech Crypto Dashboard with Framer Motion", tech: ["React", "Framer Motion", "Recharts", "Tailwind CSS", "Dark Mode"], description: "Responsive analytics dashboard with smooth layout transitions, animated chart tooltips, and theme customizer." },
      { tier: "Production / Capstone", title: "Enterprise Design System NPM Package with Chromatic Visual CI", tech: ["React", "TypeScript", "Storybook", "NPM Package", "Chromatic", "WCAG 2.1"], description: "Published enterprise design system with design tokens, compound components, 100% keyboard accessibility, and automated visual regression." }
    ],
    certifications: [
      { name: "Meta Front-End Developer Certificate", issuer: "Meta" },
      { name: "IAAP Web Accessibility Specialist (WAS) Foundation", issuer: "IAAP" }
    ],
    interviewTopics: [
      { category: "UI Engineering", topics: ["How do you create a focus trap inside an accessible modal dialog?", "Why are CSS `transform` and `opacity` properties GPU-accelerated while `height`/`width` cause layout reflows?", "Explain the Compound Component pattern in React with an example (e.g. Tabs)", "How do Container Queries enable true modular component responsiveness?"] }
    ],
    relatedRoles: ["Frontend Developer", "Web Developer", "UX Engineer", "UI/UX Designer"]
  },

  {
    id: "ui-ux-designer",
    careerFamily: "WEB / UI",
    roleName: "UI/UX Designer",
    slug: "ui-ux-designer",
    badge: "High Demand",
    shortDescription: "Conducts user research, information architecture, wireframing, prototyping, and high-fidelity visual design.",
    description: "A UI/UX Designer crafts intuitive, engaging, and user-centered digital experiences. They conduct user research, create user personas, map customer journey flows, design wireframes, and build high-fidelity interactive prototypes in Figma.",
    targetAudience: ["BCA", "B.Tech", "B.Des", "B.E.", "MCA", "All Tech Disciplines"],
    salaryRange: { entry: "₹4.5 - ₹8 LPA", mid: "₹9 - ₹18 LPA", senior: "₹19 - ₹38+ LPA" },
    responsibilities: [
      "Conduct user research, stakeholder interviews, usability testing, and heuristic evaluations.",
      "Create User Personas, Empathy Maps, Information Architecture (IA), and User Journey Maps.",
      "Design low-fidelity wireframes, high-fidelity UI mockups, and interactive clickable prototypes in Figma.",
      "Build and maintain cohesive Design Systems (typography scales, color palettes, component variants).",
      "Collaborate with developers to ensure accurate design implementation and design QA."
    ],
    prerequisites: [
      { name: "Visual Design Sense", desc: "Understanding typography, color theory, layout grids, spacing, visual hierarchy.", required: true },
      { name: "Empathy & User Psychology", desc: "Understanding user behavior, cognitive load, intuitive interaction design.", required: true },
      { name: "Figma Proficiency", desc: "Navigating frames, vectors, Auto Layout, components.", required: true },
      { name: "Basic Web Literacy", desc: "Understanding how designs are converted into HTML/CSS code.", required: true }
    ],
    technologies: [
      { name: "Figma Mastery", category: "Design Tool", priority: "MUST LEARN", description: "Auto Layout 5.0, Component Variants, Interactive Components, Variables, Design Tokens." },
      { name: "UX Research Methodologies", category: "UX Research", priority: "MUST LEARN", description: "User interviews, surveys, card sorting, usability testing, heuristic evaluation." },
      { name: "Information Architecture (IA) & User Flows", category: "UX Core", priority: "MUST LEARN", description: "Sitemaps, user journey mapping, task flows, wireframing." },
      { name: "Visual Design & Typography Systems", category: "Visual UI", priority: "MUST LEARN", description: "8pt grid system, modular typography scales, color contrast (WCAG), whitespace." },
      { name: "Interactive Prototyping & Micro-Interactions", category: "Prototyping", priority: "MUST LEARN", description: "Smart Animate, interactive components, realistic click-through prototypes." },
      { name: "Design Systems in Figma", category: "Design System", priority: "MUST LEARN", description: "Building centralized component libraries with dark/light mode token variables." },
      { name: "Design Handoff & Developer Collaboration", category: "Handoff", priority: "HIGH PRIORITY", description: "Figma Dev Mode, design specs, asset export, design QA reviews." }
    ],
    tools: [
      { name: "Figma", priority: "MUST LEARN", purpose: "Industry-standard UI/UX design and prototyping tool." },
      { name: "Miro / FigJam", priority: "MUST LEARN", purpose: "User journey mapping, card sorting, and brainstorming." },
      { name: "Maze / Useberry", priority: "HIGH PRIORITY", purpose: "Unmoderated remote usability testing." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "UX Research & Visual Design Fundamentals", topics: ["The Design Thinking Process: Empathize, Define, Ideate, Prototype, Test", "Visual Design Principles: Visual Hierarchy, 8-Point Grid System, Typography Scales, Color Harmony", "Creating User Personas, Empathy Maps, and User Journey Maps in FigJam"], milestone: "Conduct user interviews and create 2 validated User Personas with a journey map." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Information Architecture & Figma Mastery", topics: ["Information Architecture (IA), Card Sorting, and Sitemap creation", "Figma Core: Auto Layout, Component Variants, Constraints, Responsive resizing", "Designing Low-Fidelity Wireframes to validate user task flows"], milestone: "Build complete wireframes and user flow for a mobile marketplace application." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Design Systems in Figma", topics: ["Setting up Figma Variables (Colors, Spacing, Radii, Typography)", "Building a reusable UI Component Library with states (Default, Hover, Pressed, Disabled)"], milestone: "Build a complete Design System in Figma supporting light and dark modes." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "High-Fidelity UI & Smart Prototyping", topics: ["Designing High-Fidelity UI screens with modern aesthetics (Glassmorphism, clean cards, gradients)", "Figma Smart Animate: Micro-interactions, animated dropdowns, carousel transitions", "Building high-fidelity interactive prototypes with variables and conditionals"], milestone: "Build a fully interactive clickable Figma prototype with dynamic states and checkout." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Usability Testing & Developer Handoff", topics: ["Conducting Usability Testing sessions with Maze to identify friction points", "Heuristic Evaluation using Nielsen’s 10 Usability Heuristics", "Figma Dev Mode: Preparing design tokens, CSS inspection, and design handoff specifications"], milestone: "Run a 10-user usability test and iterate on design based on measured drop-offs." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "End-to-End UX Case Studies", topics: ["FinTech Personal Finance Mobile App UX Case Study", "Health & Telemedicine Web Platform Redesign", "SaaS B2B Productivity Tool Dashboard & Design System"], milestone: "Complete 3 comprehensive UX Case Studies." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "UX Portfolio Website", topics: ["Building a UX portfolio website on Framer / Webflow / Notion", "Writing detailed case studies detailing the Problem, Research, Wireframes, Iterations, and Final UI", "Publishing UI design shots on Dribbble and Behance"], milestone: "A professional UX design portfolio with 3 in-depth case studies." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Portfolio Review & Whiteboard Challenges", topics: ["Presenting a UX Case Study to interviewers (Problem, User Research, Wireframes, Outcome)", "Whiteboard Design Challenges: Solving a live design prompt in 45 minutes", "How do you handle developer pushback on complex UI animations?", "Explain Nielsen's Heuristic of 'Visibility of System Status' with an example"], milestone: "Ace portfolio review presentations and live whiteboard design challenges." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["UI/UX Designer resume and portfolio optimization", "Applying to product companies, design studios, and tech startups", "Mock design interviews"], milestone: "Secure employment as an Associate / Junior UI/UX Designer." }
    ],
    projects: [
      { tier: "Beginner", title: "Smart Home IoT Mobile App - UI Design & Clickable Prototype", tech: ["Figma", "Auto Layout", "Smart Animate", "Design System"], description: "High-fidelity mobile UI prototype with animated device toggle switches, thermostat slider, and dark mode." },
      { tier: "Intermediate", title: "Telehealth Doctor Consultation Platform - Full UX Case Study", tech: ["FigJam", "Figma", "Usability Testing", "Maze", "User Personas"], description: "Complete UX research case study: user interviews, sitemap, wireframes, usability test results, and final UI." },
      { tier: "Production / Capstone", title: "Enterprise Cloud Security SaaS Platform & Design System", tech: ["Figma Variables", "Design Tokens", "Dev Mode", "Framer", "Case Study"], description: "Comprehensive B2B SaaS design system with 50+ components, interactive dashboard screens, and developer specs." }
    ],
    certifications: [
      { name: "Google UX Design Professional Certificate", issuer: "Google (Coursera)" },
      { name: "Nielsen Norman Group (NN/g) UX Certification", issuer: "NN/g" }
    ],
    interviewTopics: [
      { category: "UX Principles & Design Thinking", topics: ["Walk through your step-by-step UX design process from initial problem to final prototype", "Explain Nielsen's 10 Usability Heuristics with real-world examples", "How do you use Figma Variables and Design Tokens to manage multi-brand design systems?", "How do you validate a design decision when quantitative data and user feedback conflict?"] }
    ],
    relatedRoles: ["UX Engineer", "UI Developer", "Web Developer", "Product Analyst"]
  },

  {
    id: "ux-engineer",
    careerFamily: "WEB / UI",
    roleName: "UX Engineer",
    slug: "ux-engineer",
    badge: "Specialized / High Pay",
    shortDescription: "The engineering bridge between UX designers and software developers — builds advanced interactive prototypes.",
    description: "A UX Engineer (Design Technologist / UI Engineer) is a software engineer who operates in the design space. They build functional, high-fidelity code prototypes, design system component architectures, complex web animations, and ensure accessible user experiences.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹5.5 - ₹10.5 LPA", mid: "₹11 - ₹22 LPA", senior: "₹23 - ₹48+ LPA" },
    responsibilities: [
      "Develop high-fidelity, functional web prototypes using React, Vue, TypeScript, and modern CSS.",
      "Architect and engineer scalable Design System component libraries and design token pipelines.",
      "Implement complex UI animations, gesture interactions, and 3D web experiences (Three.js / WebGL).",
      "Champion web accessibility (WCAG 2.1 AAA) across frontend codebases and design systems.",
      "Conduct rapid technical feasibility experiments to validate ambitious design concepts."
    ],
    prerequisites: [
      { name: "Strong Frontend Engineering", desc: "TypeScript, modern JavaScript, React/Vue, CSS architecture.", required: true },
      { name: "Deep Design Tool & Token Knowledge", desc: "Figma Tokens, Design Token pipelines (Style Dictionary).", required: true },
      { name: "Advanced Motion & Animation", desc: "Framer Motion, GSAP, CSS Keyframes, Canvas / WebGL.", required: true },
      { name: "Accessibility (a11y) Mastery", desc: "ARIA specifications, keyboard navigation, screen reader testing.", required: true }
    ],
    technologies: [
      { name: "React / Vue & TypeScript", category: "Framework", priority: "MUST LEARN", description: "Building complex interactive UI components with strict TypeScript types." },
      { name: "Design Token Architecture (Style Dictionary)", category: "Design Tokens", priority: "MUST LEARN", description: "Automating design token export from Figma to CSS, iOS Swift, and Android XML." },
      { name: "Advanced Web Animation (GSAP & Framer Motion)", category: "Motion", priority: "MUST LEARN", description: "ScrollTrigger, SVG morphing, layout spring physics, timeline sequences." },
      { name: "Web Accessibility (WCAG 2.1 & WAI-ARIA)", category: "Accessibility", priority: "MUST LEARN", description: "Accessible rich internet applications, automated axe testing, screen readers." },
      { name: "Functional Prototyping with Real Data", category: "Prototyping", priority: "MUST LEARN", description: "Building code prototypes that consume live APIs and simulate user interactions." },
      { name: "3D & Creative Web (Three.js / WebGL)", category: "Creative Tech", priority: "GOOD TO KNOW", description: "3D models, shaders, particle effects on the web." },
      { name: "Storybook & Component Testing", category: "Testing", priority: "HIGH PRIORITY", description: "Storybook interaction tests, accessibility addon, visual regression." }
    ],
    tools: [
      { name: "Figma & VS Code", priority: "MUST LEARN", purpose: "Design inspection and frontend code development." },
      { name: "Style Dictionary", priority: "MUST LEARN", purpose: "Automated multi-platform design token transformation." },
      { name: "Storybook", priority: "MUST LEARN", purpose: "Design system component development environment." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Design Token Pipelines & Style Dictionary", topics: ["Design Tokens: Global, Semantic, and Component-level tokens", "Building automated token build pipelines with Style Dictionary from Figma JSON to CSS/SCSS/JS", "Advanced CSS layout engineering with Subgrid, Container Queries, and CSS Houdini"], milestone: "Build an automated design token pipeline transforming Figma JSON into CSS variables." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Accessible Component Engineering", topics: ["Building headless, accessible UI components from scratch (Focus management, ARIA live regions)", "Building compound component architectures in React with TypeScript", "Automating accessibility testing with `@storybook/addon-a11y` and `axe-core`"], milestone: "Build an accessible combobox/autocomplete component with 100% keyboard and screen reader support." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Advanced Animation with GSAP & Framer Motion", topics: ["GSAP Timelines, ScrollTrigger, and SVG path morphing", "Framer Motion layout animations, gesture physics, and spring animations"], milestone: "Build an interactive product showcase with scroll-driven GSAP animations." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "High-Fidelity Code Prototypes with Real APIs", topics: ["Building functional code prototypes to test UX hypotheses with real user data", "Simulating complex state transitions, offline modes, and error recovery in code", "Conducting usability tests using live interactive code prototypes"], milestone: "Build a functional code prototype for an AI chat interface with streaming responses." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Creative Tech & 3D Web (Three.js)", topics: ["Introduction to 3D on the web: Three.js, React Three Fiber (R3F)", "Loading 3D models (GLTF), lighting, camera controls, and interactive 3D product customizers", "Performance optimization: 60fps animations, minimizing composite layers and paint cycles"], milestone: "Build a 3D interactive product customizer in React Three Fiber." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "UX Engineering Showcase Projects", topics: ["Multi-Brand Automated Design System & Token Engine", "Interactive 3D Web Configurator with React Three Fiber", "High-Fidelity Functional AI Workspace Prototype"], milestone: "Complete 3 state-of-the-art UX Engineering portfolio projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "UX Engineering Portfolio Website", topics: ["Interactive web portfolio showcasing creative web experiments, animations, and design tokens", "Live Storybook and prototype demo links", "Technical write-ups explaining the engineering behind UX interactions"], milestone: "A breathtaking interactive web portfolio demonstrating technical UX mastery." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Design Technology Interviews", topics: ["Live coding: Build an accessible accordion or date picker component from scratch", "How do you structure Design Tokens to support multiple sub-brands with dark/light themes?", "How do you optimize 60fps animations and prevent jank on low-power mobile devices?", "Explain the WAI-ARIA authoring practices for interactive comboboxes and modals"], milestone: "Ace technical UX Engineer / Design Technologist interview loops at Google, Apple, and Figma." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["UX Engineer resume highlighting design tokens, accessibility, and high-fidelity prototyping", "Applying to tier-1 tech companies, design tool makers, and innovative product teams", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior UX Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Multi-Brand Design Token Pipeline with Style Dictionary", tech: ["Style Dictionary", "Figma Tokens", "CSS Custom Properties", "TypeScript"], description: "Automated CI pipeline compiling Figma JSON tokens into CSS variables, SCSS maps, and TypeScript types." },
      { tier: "Intermediate", title: "Accessible Component System with Automated Axe Auditing", tech: ["React", "TypeScript", "Axe-Core", "Radix UI", "Storybook"], description: "Suite of accessible components tested with automated unit a11y tests and screen reader verification." },
      { tier: "Production / Capstone", title: "Interactive 3D Product Customizer & Animation Engine", tech: ["React", "React Three Fiber", "Three.js", "GSAP", "Tailwind CSS"], description: "Production 3D web experience with 60fps camera transitions, dynamic material customizer, and physics animations." }
    ],
    certifications: [
      { name: "IAAP Certified Professional in Accessibility Core Competencies (CPACC)", issuer: "IAAP" },
      { name: "Three.js Journey Certification", issuer: "Bruno Simon / Three.js" }
    ],
    interviewTopics: [
      { category: "UX Engineering & Design Systems", topics: ["How do you structure Global Tokens vs Alias/Semantic Tokens vs Component Tokens in a design system?", "Explain how to diagnose and eliminate animation jank using Chrome DevTools Performance Profiler", "How do you implement ARIA live regions for dynamically updating content?", "Explain how React Three Fiber reconciles 3D scenes inside the React virtual DOM tree"] }
    ],
    relatedRoles: ["UI Developer", "UI/UX Designer", "Frontend Developer", "Web Developer"]
  }
];

module.exports = webAndUIRoles;

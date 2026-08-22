/**
 * Specialized Career Roles (6 Roles)
 */

const specializedRoles = [
  {
    id: "blockchain-developer",
    careerFamily: "SPECIALIZED",
    roleName: "Blockchain Developer",
    slug: "blockchain-developer",
    badge: "Emerging Tech / High Pay",
    shortDescription: "Develops decentralized applications (dApps), smart contracts (Solidity/Rust), and Web3 protocols.",
    description: "A Blockchain Developer designs and builds decentralized applications (dApps), smart contracts (Solidity, Rust), DeFi protocols, and token standards (ERC-20, ERC-721). They understand cryptographic primitives, consensus mechanisms, EVM internals, and smart contract security auditing.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹13 LPA", mid: "₹14 - ₹28 LPA", senior: "₹30 - ₹70+ LPA" },
    responsibilities: [
      "Write, test, and deploy secure smart contracts on Ethereum, Polygon, or Solana using Solidity or Rust.",
      "Develop decentralized applications (dApps) connecting Web3 wallets (MetaMask) via Ethers.js or Viem.",
      "Conduct smart contract security audits, vulnerability assessments (reentrancy, front-running), and gas optimizations.",
      "Design tokenomics, staking mechanisms, decentralized governance (DAOs), and liquidity pools.",
      "Integrate decentralized storage (IPFS / Arweave) and decentralized oracles (Chainlink)."
    ],
    prerequisites: [
      { name: "Object-Oriented Programming", desc: "Proficiency in JavaScript/TypeScript, Python, C++, or Java.", required: true },
      { name: "Cryptography Basics", desc: "Public/Private key cryptography, SHA-256 hashing, digital signatures.", required: true },
      { name: "Web Development", desc: "React, Node.js, REST APIs, asynchronous programming.", required: true },
      { name: "Data Structures & Algorithms", desc: "Merkle Trees, Linked Lists, Hash Tables.", required: true }
    ],
    technologies: [
      { name: "Solidity & EVM Internals", category: "Language / Runtime", priority: "MUST LEARN", description: "Smart contract syntax, storage slots, memory vs calldata, gas calculation." },
      { name: "Hardhat / Foundry", category: "Development Framework", priority: "MUST LEARN", description: "Smart contract compiling, testing with Solidity/TypeScript, mainnet forking." },
      { name: "Web3 Frontend (Viem / Wagmi / Ethers.js)", category: "dApp Integration", priority: "MUST LEARN", description: "Connecting React dApps to wallets, reading contract state, sending transactions." },
      { name: "OpenZeppelin Contracts", category: "Standards", priority: "MUST LEARN", description: "ERC-20, ERC-721 (NFTs), ERC-1155, Ownable, ReentrancyGuard, AccessControl." },
      { name: "Smart Contract Security & Auditing", category: "Security", priority: "MUST LEARN", description: "Reentrancy, integer overflow, flash loan attacks, Slither static analysis." },
      { name: "Decentralized Oracles (Chainlink)", category: "Oracles", priority: "HIGH PRIORITY", description: "Price feeds, VRF (Verifiable Random Function), automated keepers." },
      { name: "Layer 2 Rollups & Scaling (Arbitrum / Optimism / Polygon)", category: "Scaling", priority: "HIGH PRIORITY", description: "Optimistic and ZK-rollups, bridging, gas optimization." },
      { name: "Rust & Solana Programming", category: "Alternative L1", priority: "GOOD TO KNOW", description: "Anchor framework, Solana account model, high-throughput programs." }
    ],
    tools: [
      { name: "Foundry / Hardhat", priority: "MUST LEARN", purpose: "Fast smart contract testing, fuzzing, and deployment." },
      { name: "MetaMask / Phantom", priority: "MUST LEARN", purpose: "Web3 wallet for transaction signing." },
      { name: "Slither & Mythril", priority: "HIGH PRIORITY", purpose: "Static analysis and vulnerability detection in smart contracts." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Cryptography & Blockchain Internals", topics: ["How Blockchain Works: Blocks, Hashing, Merkle Trees, Consensus (Proof of Work vs Proof of Stake)", "Ethereum Virtual Machine (EVM) architecture: Gas, State Trie, Transactions, Opcodes", "Cryptographic primitives: ECDSA signatures, Keccak-256, Public/Private key pairs"], milestone: "Build a minimal blockchain simulation in Python/TypeScript demonstrating Merkle tree proof verification." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Solidity & Smart Contract Development", topics: ["Solidity syntax: Data types, Mappings, Structs, Modifiers, Events, Custom Errors", "Contract inheritance and OpenZeppelin standards (ERC-20 Fungible, ERC-721 Non-Fungible)", "Memory vs Storage vs Calldata and Gas optimization techniques"], milestone: "Deploy a custom ERC-20 token and ERC-721 NFT collection with whitelist minting to Sepolia testnet." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Foundry & Hardhat Testing", topics: ["Writing robust unit and fuzz tests in Foundry / Hardhat", "Mainnet forking to test contracts against live Uniswap / Aave liquidity pools"], milestone: "Write 100% test coverage suite for a staking contract using Foundry fuzz tests." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Full-Stack dApp with Viem & Wagmi", topics: ["Connecting React frontends to Ethereum using Wagmi, Viem, and RainbowKit", "Handling wallet connection states, chain switching, and transaction receipt pending states", "Decentralized storage with IPFS / Pinata for NFT metadata"], milestone: "Build and host a full-stack Web3 dApp enabling users to mint and trade NFTs." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "DeFi Protocols & Security Auditing", topics: ["DeFi Building Blocks: Automated Market Makers (AMM / Uniswap V2 math), Lending pools", "Chainlink Oracles: Integrating live price feeds and Chainlink VRF for verifiable randomness", "Security Auditing: Slither static analysis, preventing Reentrancy, Flash Loan attack mitigation"], milestone: "Build a decentralized token swap AMM with liquidity pools and an automated audit report." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Web3 Protocols", topics: ["Decentralized Lending & Borrowing Protocol", "NFT Marketplace with Royalty Enforcement and Escrow", "Decentralized Autonomous Organization (DAO) with On-Chain Voting"], milestone: "Deploy 3 production-grade decentralized applications on Ethereum testnets." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Web3 Portfolio & Verified Contracts", topics: ["GitHub repository with Foundry test suites and clean Solidity code", "Verified contract code on Etherscan with green checkmarks", "Live dApp URLs hosted on IPFS/Vercel"], milestone: "A professional Web3 portfolio with verified smart contracts and working dApps." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Smart Contract Security & EVM Questions", topics: ["Explain a Reentrancy attack line-by-line and how the Checks-Effects-Interactions pattern fixes it", "What is the difference between `storage`, `memory`, and `calldata` in Solidity?", "How does an AMM calculate token prices using the constant product formula ($x \\times y = k$)?", "How do Layer 2 Optimistic Rollups differ from Zero-Knowledge (ZK) Rollups?"], milestone: "Ace technical Web3 smart contract and security audit interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Web3 Developer resume highlighting audited contracts, gas optimizations, and dApp links", "Applying to Web3 protocols, crypto funds, and decentralized tech firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Blockchain Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "Decentralized Crowdfunding Platform Smart Contract", tech: ["Solidity", "Hardhat", "OpenZeppelin", "Sepolia Testnet"], description: "Smart contract allowing creators to launch goal-driven campaigns with automated refunds if target is not met." },
      { tier: "Intermediate", title: "Full-Stack NFT Marketplace with Escrow & Royalties", tech: ["React", "Wagmi", "Viem", "Solidity", "IPFS", "Tailwind CSS"], description: "Full Web3 dApp with wallet authentication, IPFS image upload, listing fees, and instant on-chain escrow purchasing." },
      { tier: "Production / Capstone", title: "Decentralized AMM Token Exchange & Liquidity Pool", tech: ["Solidity", "Foundry", "Uniswap V2 Math", "Chainlink Oracles", "Slither"], description: "Production DeFi exchange implementing constant product formula, LP liquidity provider tokens, staking yield, and Slither audit." }
    ],
    certifications: [
      { name: "Certified Ethereum Developer (B9lab)", issuer: "B9lab" },
      { name: "Chainlink Smart Contract Developer Certification", issuer: "Chainlink" }
    ],
    interviewTopics: [
      { category: "Smart Contract Architecture", topics: ["Explain how a Reentrancy attack works and how `ReentrancyGuard` or Checks-Effects-Interactions prevents it", "Explain how storage slots work in the EVM and how packing variables saves gas", "What is the difference between `transfer()`, `send()`, and `call{value: ...}()`?", "How does Uniswap's constant product formula ($x \\times y = k$) determine slippage?"] }
    ],
    relatedRoles: ["Backend Developer", "Security Engineer", "Software Engineer", "Full Stack Developer"]
  },

  {
    id: "iot-developer",
    careerFamily: "SPECIALIZED",
    roleName: "IoT Developer",
    slug: "iot-developer",
    badge: "Hardware & Cloud",
    shortDescription: "Connects microcontrollers, sensors, edge devices, and cloud IoT platforms using MQTT and C++.",
    description: "An Internet of Things (IoT) Developer builds connected smart devices, sensor networks, and edge computing gateways. They program microcontrollers (ESP32, Raspberry Pi, Arduino) in C/C++ or MicroPython and connect them to Cloud IoT backends (AWS IoT Core, Azure IoT Hub) over MQTT.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "CS / ECE / EEE / IT"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹17 LPA", senior: "₹18 - ₹36+ LPA" },
    responsibilities: [
      "Program microcontrollers (ESP32, STM32, Raspberry Pi) in C/C++, Embedded C, or MicroPython.",
      "Interface analog and digital sensors, actuators, relays, and communication modules (I2C, SPI, UART).",
      "Implement lightweight IoT communication protocols: MQTT, CoAP, WebSockets, HTTP.",
      "Connect edge IoT hardware securely to Cloud platforms (AWS IoT Core, Azure IoT Hub) with X.509 certificates.",
      "Develop Over-The-Air (OTA) firmware update pipelines and edge data processing routines."
    ],
    prerequisites: [
      { name: "C / C++ Fundamentals", desc: "Pointers, memory management, bitwise operations, structs.", required: true },
      { name: "Basic Electronics & Hardware", desc: "Voltage, current, resistors, GPIO pins, breadboards, schematics.", required: true },
      { name: "Networking Fundamentals", desc: "IP addresses, Wi-Fi (802.11), Bluetooth BLE, TCP/UDP sockets.", required: true },
      { name: "Linux Basics", desc: "Command line, SSH connection to Raspberry Pi single-board computers.", required: true }
    ],
    technologies: [
      { name: "Embedded C / C++ & MicroPython", category: "Language", priority: "MUST LEARN", description: "Low-level hardware control, ISR interrupts, timers, low power sleep modes." },
      { name: "Microcontrollers (ESP32 / Raspberry Pi / STM32)", category: "Hardware Platforms", priority: "MUST LEARN", description: "Dual-core ESP32, Raspberry Pi Linux SBC, STM32 ARM Cortex-M." },
      { name: "Communication Protocols (I2C / SPI / UART / GPIO)", category: "Hardware Protocols", priority: "MUST LEARN", description: "Sensor communication buses, baud rates, register read/write." },
      { name: "IoT Networking Protocols (MQTT / CoAP / HTTP)", category: "IoT Protocols", priority: "MUST LEARN", description: "Publish-subscribe broker architecture (Mosquitto), QoS levels 0/1/2." },
      { name: "Cloud IoT Platforms (AWS IoT Core / Azure IoT Hub)", category: "Cloud IoT", priority: "MUST LEARN", description: "Device shadows, X.509 mutual TLS authentication, IoT rules engine." },
      { name: "OTA Firmware Updates & Device Management", category: "Firmware Ops", priority: "HIGH PRIORITY", description: "Secure remote firmware flashing over Wi-Fi, dual partition rollbacks." },
      { name: "Time-Series Data & Dashboards (InfluxDB / Grafana)", category: "Telemetry", priority: "HIGH PRIORITY", description: "Storing and visualizing sensor telemetry streams in real time." },
      { name: "Edge AI / TinyML", category: "Edge ML", priority: "GOOD TO KNOW", description: "Running lightweight TensorFlow Lite models directly on microcontrollers." }
    ],
    tools: [
      { name: "VS Code with PlatformIO / ESP-IDF", priority: "MUST LEARN", purpose: "Professional embedded and IoT development environment." },
      { name: "MQTT Explorer / Mosquitto", priority: "MUST LEARN", purpose: "Debugging MQTT topics, payloads, and broker traffic." },
      { name: "Oscilloscope / Logic Analyzer", priority: "HIGH PRIORITY", purpose: "Decoding I2C/SPI signal waveforms." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "C/C++ & Microcontroller GPIO", topics: ["Embedded C concepts: Bitwise manipulation, Pointers, Memory maps, Volatile keyword", "Hardware Interfacing: GPIO pins, Digital I/O, Analog-to-Digital Converters (ADC), PWM", "Connecting temperature (DHT22/BME280), ultrasonic, and motion sensors to ESP32"], milestone: "Build a multi-sensor weather monitor reading temperature, humidity, and pressure via I2C." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Hardware Protocols (I2C, SPI, UART) & FreeRTOS", topics: ["Serial protocols: I2C bus addressing, SPI master-slave communication, UART packet parsing", "FreeRTOS on ESP32: Creating concurrent tasks, Queues, Semaphores, Mutexes", "Interrupt Service Routines (ISR) and hardware timer callbacks"], milestone: "Build a multi-tasking FreeRTOS application reading sensors and updating an OLED display without delays." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "PlatformIO & MQTT Broker Setup", topics: ["Developing professional firmware with PlatformIO in VS Code", "Setting up an Eclipse Mosquitto MQTT broker on local network / Raspberry Pi"], milestone: "Configure an ESP32 publishing sensor telemetry to a local Mosquitto MQTT broker." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Cloud IoT Integration (AWS IoT Core)", topics: ["AWS IoT Core: Registering Things, generating X.509 device certificates and policies", "Secure MQTT over TLS (Port 8883), Device Shadows, and IoT SQL Rules Engine", "Routing telemetry to DynamoDB and triggering serverless AWS Lambda alerts"], milestone: "Connect an ESP32 to AWS IoT Core securely with mutual TLS and trigger SMS alerts on threshold breach." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "OTA Updates & Telemetry Dashboards", topics: ["Over-The-Air (OTA) firmware update implementation with dual-boot safety partitions", "Streaming IoT time-series telemetry to InfluxDB and building live Grafana dashboards", "Power optimization: ESP32 Deep Sleep modes and wake-up timers for battery-powered sensors"], milestone: "Deploy a solar-powered IoT node that sleeps for 10 minutes, wakes to publish data, and supports secure OTA updates." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production IoT Systems", topics: ["Smart Home Automation Gateway with MQTT & Web Dashboard", "Industrial Predictive Equipment Monitoring System", "Agricultural Smart Irrigation System with Cloud Control"], milestone: "Build 3 functional hardware-and-cloud IoT projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "IoT Portfolio & Hardware Videos", topics: ["GitHub repository with clean C++/PlatformIO code and hardware wiring schematics (Fritzing)", "Video demonstrations showcasing working hardware prototypes and live cloud dashboards", "Architecture documentation"], milestone: "A professional IoT Developer portfolio with downloadable code and video demos." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Embedded & IoT Technical Scenarios", topics: ["Explain the difference between I2C, SPI, and UART in speed, wire count, and topology", "How does MQTT Quality of Service (QoS 0, QoS 1, QoS 2) guarantee message delivery?", "How do you protect IoT devices against remote firmware tampering during an OTA update?", "Explain FreeRTOS Task scheduling and how a Mutex prevents shared memory corruption"], milestone: "Ace technical IoT, firmware, and cloud device connectivity interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["IoT Developer resume highlighting C++, FreeRTOS, MQTT, and AWS IoT Core", "Applying to smart device manufacturers, automotive EV companies, and industrial IoT firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior IoT Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "Smart Environmental Telemetry Station with OLED & MQTT", tech: ["ESP32", "C++", "I2C", "BME280 Sensor", "MQTT", "FreeRTOS"], description: "FreeRTOS-driven weather station monitoring environmental metrics, displaying on OLED, and publishing to MQTT." },
      { tier: "Intermediate", title: "Cloud-Connected Smart Energy Monitor with AWS IoT Core", tech: ["ESP32", "AWS IoT Core", "X.509 TLS", "DynamoDB", "Grafana", "C++"], description: "Current sensor monitoring appliance power consumption, streaming telemetry over TLS to AWS, with live Grafana metrics." },
      { tier: "Production / Capstone", title: "Industrial Asset Tracking Gateway with GPS, Deep Sleep & Remote OTA", tech: ["ESP32", "GPS Module", "AWS IoT", "OTA Updates", "InfluxDB", "PlatformIO"], description: "Production battery-operated tracking node featuring ultra-low power deep sleep, geo-fencing alerts, and remote OTA firmware updates." }
    ],
    certifications: [
      { name: "AWS Certified IoT – Specialty / Developer", issuer: "Amazon Web Services" },
      { name: "Embedded Systems & IoT Specialization", issuer: "Coursera / University of Colorado" }
    ],
    interviewTopics: [
      { category: "IoT & Embedded Protocols", topics: ["Compare I2C and SPI in terms of wire count, speed, master/slave addressing, and full/half duplex", "How does MQTT keep-alive ping prevent silent connection loss on unreliable cellular networks?", "What is the purpose of the `volatile` keyword in Embedded C when reading hardware registers?", "How do dual-partition flash memory layouts prevent bricking a device during a failed OTA update?"] }
    ],
    relatedRoles: ["Firmware Engineer", "Robotics Software Engineer", "Embedded Software Developer", "Cloud Engineer"]
  },

  {
    id: "game-developer",
    careerFamily: "SPECIALIZED",
    roleName: "Game Developer",
    slug: "game-developer",
    badge: "Creative Tech",
    shortDescription: "Builds 2D/3D games, gameplay mechanics, physics interactions, and graphics using Unity (C#) or Unreal (C++).",
    description: "A Game Developer designs, codes, and optimizes video games across PC, console, and mobile. They specialize in game engines (Unity, Unreal Engine, Godot), gameplay mechanics programming, physics simulation, artificial intelligence (state machines, navmeshes), audio, and graphics optimization.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "Computer Science"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹19 - ₹40+ LPA" },
    responsibilities: [
      "Develop core gameplay mechanics, player controller physics, combat systems, and camera systems in Unity (C#) or Unreal (C++).",
      "Implement game artificial intelligence (enemy behaviors, Finite State Machines, Behavior Trees, NavMesh pathfinding).",
      "Program UI systems, inventory management, skill trees, and audio management engines.",
      "Optimize frame rates, draw calls, asset memory footprint, and GPU shaders to maintain smooth 60fps.",
      "Implement multiplayer networking, client-side prediction, and server synchronization (Photon, Netcode, Unreal Replication)."
    ],
    prerequisites: [
      { name: "Strong Object-Oriented Programming", desc: "C# for Unity or C++ for Unreal Engine.", required: true },
      { name: "Mathematics & Physics for Games", desc: "Vectors, Dot/Cross products, Trigonometry, Quaternions (3D Rotations), Matrices.", required: true },
      { name: "Data Structures & Algorithms", desc: "Pathfinding algorithms (A*), Quadtrees/Octrees, Object Pooling.", required: true },
      { name: "Game Engine Literacy", desc: "Navigating 3D scene viewports, game objects, components, prefabs.", required: true }
    ],
    technologies: [
      { name: "Unity (C#) OR Unreal Engine (C++ / Blueprints)", category: "Game Engine Core", priority: "MUST LEARN", description: "Game loop (Update/FixedUpdate), component architecture, physics, collision detection." },
      { name: "Game Math (Vectors & Quaternions)", category: "Mathematics", priority: "MUST LEARN", description: "3D vectors, direction vectors, distance, Euler angles vs Quaternions." },
      { name: "Game AI & Pathfinding (NavMesh & Behavior Trees)", category: "Game AI", priority: "MUST LEARN", description: "A* pathfinding, NavMesh agents, State Machines, Behavior Trees." },
      { name: "Physics & Collision Detection", category: "Physics", priority: "MUST LEARN", description: "Rigidbodies, Colliders, Raycasting, physics materials, trigger events." },
      { name: "Game Optimization & Profiling", category: "Performance", priority: "MUST LEARN", description: "Draw call batching, Occlusion Culling, LOD (Level of Detail), Profiler analysis." },
      { name: "Object Pooling & Memory Management", category: "Design Patterns", priority: "HIGH PRIORITY", description: "Reusing spawned objects (bullets, particles) to eliminate garbage collection stutters." },
      { name: "Multiplayer Networking (Netcode / Photon)", category: "Multiplayer", priority: "HIGH PRIORITY", description: "Client-server architecture, state synchronization, RPCs." },
      { name: "Shaders & Visual Effects (Shader Graph / VFX Graph)", category: "Graphics", priority: "GOOD TO KNOW", description: "Custom surface shaders, vertex displacement, particle systems." }
    ],
    tools: [
      { name: "Unity / Unreal Engine", priority: "MUST LEARN", purpose: "Primary game development engines." },
      { name: "Visual Studio / Rider", priority: "MUST LEARN", purpose: "C# and C++ game scripting IDE." },
      { name: "Blender", priority: "GOOD TO KNOW", purpose: "3D asset inspection and simple modeling." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Game Math & Engine Fundamentals", topics: ["Game Engine Architecture: The Game Loop (`Awake`, `Start`, `Update`, `FixedUpdate`, `LateUpdate`)", "Game Mathematics: 2D/3D Vectors, Vector normalization, Dot Product for field-of-view, Cross Product", "Physics Engine: Rigidbodies, Colliders, Trigger volumes, and Raycasting"], milestone: "Build a responsive 3D third-person character controller with jumping, sprinting, and camera orbit." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Gameplay Systems & Design Patterns", topics: ["Game Design Patterns: Object Pooling (bullets/enemies), Observer Pattern for events, Singleton game managers", "Inventory & Item System with ScriptableObjects in Unity", "UI System: Health bars, HUD, interactive menus, and dialogue boxes"], milestone: "Build an Action-RPG combat arena with inventory, weapon switching, and health systems." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Game AI & NavMesh Pathfinding", topics: ["NavMesh baking, NavMesh Agent configuration, and dynamic obstacles", "Building Enemy AI using Finite State Machines (Patrol, Chase, Attack, Flee)"], milestone: "Create an AI enemy squad with patrol routes, hearing radius, and tactical combat behaviors." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Optimization & Shaders", topics: ["Performance Profiling: CPU/GPU frame time, identifying Garbage Collection allocation spikes", "Rendering Optimization: Static/Dynamic Batching, Occlusion Culling, Level of Detail (LOD)", "Visual Effects: Shader Graph for water, dissolve effects, and particle VFX graphs"], milestone: "Optimize a high-density 3D scene from 25fps to a stable 60fps on mobile hardware." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Multiplayer Networking & Polishing", topics: ["Multiplayer fundamentals: Client-Server architecture, RPCs, NetworkVariables", "Implementing multiplayer arena gameplay with Unity Netcode for GameObjects / Photon Fusion", "Game Juice: Screen shake, sound effects, hit-stop, camera lag for satisfying game feel"], milestone: "Build a 2-player networked multiplayer arena combat game." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Complete Playable Games", topics: ["3D Sci-Fi Wave-Based Survival Shooter", "2D Metroidvania Platformer with Boss Fights", "Multiplayer Cooperative Dungeon Crawler"], milestone: "Publish 3 fully polished, playable game builds on itch.io." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Game Developer Portfolio & Itch.io", topics: ["itch.io developer page with downloadable Windows/Mac builds and WebGL playable demos", "High-quality 60-second gameplay video trailers on YouTube", "GitHub repositories with clean, commented gameplay code"], milestone: "A professional Game Developer portfolio with playable itch.io builds." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Game Engine & Math Interviews", topics: ["Explain the difference between `Update()` and `FixedUpdate()` and why physics belongs in `FixedUpdate()`", "How do you determine whether an enemy is in front of or behind the player using the Dot Product?", "Why are Quaternions used for 3D rotations instead of Euler angles (Gimbal Lock)?", "Explain how Object Pooling prevents Garbage Collection frame drops in Unity"], milestone: "Ace technical game programming, math, and engine architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Studio Placement", topics: ["Game Developer resume emphasizing completed game titles and engine mastery", "Applying to gaming studios (Ubisoft, EA, Krafton, Rockstar, indie studios)", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Game Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "2D Physics-Based Platformer with Particle Juice", tech: ["Unity", "C#", "2D Physics", "Tilemaps", "Particle System"], description: "Complete 2D platformer with double jump, wall sliding, collectible coins, checkpoint system, and sound effects." },
      { tier: "Intermediate", title: "3D Survival Wave Shooter with Smart Enemy AI", tech: ["Unity / Unreal", "C# / C++", "NavMesh AI", "Object Pooling", "Shader Graph"], description: "Intense wave shooter featuring state machine AI enemies, procedural weapon recoil, bullet pooling, and dissolve death shaders." },
      { tier: "Production / Capstone", title: "Networked Multiplayer Arena Combat Game", tech: ["Unity", "Netcode for GameObjects", "C#", "Lobby API", "itch.io"], description: "Fully playable 4-player online deathmatch game with dedicated host matchmaking, synchronized health/projectiles, and scoreboard." }
    ],
    certifications: [
      { name: "Unity Certified Associate: Game Developer", issuer: "Unity Technologies" },
      { name: "Unreal Engine C++ Developer Certification", issuer: "Epic Games / Udemy" }
    ],
    interviewTopics: [
      { category: "Game Mathematics & Engine Internals", topics: ["What is Gimbal Lock and how do Quaternions avoid it?", "How does the Dot Product test if a player is within an enemy's field of view angle?", "Why must physics calculations (`Rigidbody.velocity`) always occur in `FixedUpdate()`?", "Explain how Object Pooling works and why `Instantiate()` and `Destroy()` are expensive during gameplay"] }
    ],
    relatedRoles: ["AR/VR Developer", "Software Engineer", "UI Developer", "Embedded Software Developer"]
  },

  {
    id: "ar-vr-developer",
    careerFamily: "SPECIALIZED",
    roleName: "AR/VR Developer",
    slug: "ar-vr-developer",
    badge: "Spatial Computing",
    shortDescription: "Builds immersive spatial computing applications, VR simulations, and AR experiences using OpenXR and Unity.",
    description: "An AR/VR Developer (Spatial Computing Engineer) creates immersive augmented reality (AR) and virtual reality (VR) applications for headsets (Meta Quest, Apple Vision Pro, HTC Vive) and mobile devices (ARKit, ARCore). They program spatial interactions, hand tracking, 3D UI, and physics simulations.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹5.5 - ₹10 LPA", mid: "₹11 - ₹22 LPA", senior: "₹23 - ₹50+ LPA" },
    responsibilities: [
      "Develop immersive VR and AR applications using Unity / Unreal Engine and OpenXR standards.",
      "Implement spatial interactions, hand tracking gestures, spatial audio, and ray interactor mechanics.",
      "Build mobile Augmented Reality experiences using Apple ARKit and Google ARCore (Plane detection, Image tracking).",
      "Design and engineer 3D spatial user interfaces (Spatial UI, Curved menus, Haptic feedback).",
      "Optimize spatial rendering performance to maintain high VR refresh rates (90fps - 120fps) to eliminate motion sickness."
    ],
    prerequisites: [
      { name: "Game Engine & 3D Programming", desc: "Proficiency in Unity (C#) or Unreal Engine (C++).", required: true },
      { name: "3D Mathematics", desc: "Vectors, Quaternions, Raycasting, Transform hierarchies.", required: true },
      { name: "Spatial Hardware Literacy", desc: "VR Headsets (Meta Quest), 6DoF tracking, controllers, hand tracking.", required: true },
      { name: "Performance Optimization", desc: "Low-draw-call rendering, single-pass stereo instancing.", required: true }
    ],
    technologies: [
      { name: "Unity XR Interaction Toolkit & OpenXR", category: "XR Core", priority: "MUST LEARN", description: "Cross-platform XR standard, XR Origin, Grab interactors, Teleportation." },
      { name: "Meta Quest SDK & Hand Tracking", category: "VR Headsets", priority: "MUST LEARN", description: "Meta XR Core SDK, hand tracking gestures, passthrough AR, spatial anchors." },
      { name: "ARCore (Android) & ARKit (iOS)", category: "Mobile AR", priority: "MUST LEARN", description: "Surface plane detection, point clouds, image target tracking, face meshes." },
      { name: "Spatial Audio (HRTF)", category: "Audio", priority: "HIGH PRIORITY", description: "3D positional audio acoustics, head-related transfer functions." },
      { name: "VR Performance & Single-Pass Stereo", category: "Performance", priority: "MUST LEARN", description: "Maintaining 90fps, foveated rendering, minimizing GPU fill rate." },
      { name: "Spatial UI & 3D Interaction Design", category: "Spatial UI", priority: "MUST LEARN", description: "World-space UI canvases, direct pinch interactions, curved menus." },
      { name: "Apple Vision Pro & visionOS Basics", category: "Spatial Computing", priority: "GOOD TO KNOW", description: "SwiftUI spatial volumes, RealityKit, eye-tracking + pinch input." }
    ],
    tools: [
      { name: "Unity with OpenXR", priority: "MUST LEARN", purpose: "Primary XR application development environment." },
      { name: "Meta Quest Developer Hub", priority: "MUST LEARN", purpose: "Deploying, profiling, and debugging on Meta Quest headsets." },
      { name: "Blender", priority: "HIGH PRIORITY", purpose: "Optimizing 3D models and reducing polygon counts for VR." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "XR Fundamentals & OpenXR Setup", topics: ["Spatial Computing concepts: 3DoF vs 6DoF (Degrees of Freedom), Inside-Out Tracking", "OpenXR architecture and setting up Unity XR Interaction Toolkit", "Configuring XR Origin, Headset Tracking, and Motion Controller inputs"], milestone: "Deploy a basic interactive VR room to a Meta Quest headset with teleportation and object grabbing." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "VR Interactions & Spatial Physics", topics: ["Direct and Ray Interactors: Grabbing objects, socket interactors, two-handed weapon handling", "Locomotion systems: Continuous smooth locomotion, snap turning, vignetting to prevent motion sickness", "Spatial Haptic Feedback and 3D positional audio"], milestone: "Build an interactive physics playground where users can grab tools, open drawers, and throw objects." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Hand Tracking & Passthrough (MR)", topics: ["Implementing Meta Quest Hand Tracking (Pinch gesture, Palm pose detection)", "Mixed Reality (MR) Passthrough: Blending virtual objects with real-world camera feeds", "Spatial Anchors: Pinning virtual holographic objects permanently in real rooms"], milestone: "Build a Mixed Reality tabletop game with real hand interactions and passthrough." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Mobile Augmented Reality (ARCore / ARKit)", topics: ["Setting up AR Foundation in Unity for iOS and Android", "Plane Detection: Spawning virtual objects on detected real-world floors and tables", "Image Tracking & Light Estimation for realistic holographic rendering"], milestone: "Build an AR furniture placement app that places true-to-scale 3D models on real floors." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "VR Optimization & Fixed Foveated Rendering", topics: ["Profiling VR on mobile chipsets (Snapdragon XR2): Draw call reduction, vertex counts", "Single-Pass Stereo Instanced Rendering, ASTC texture compression, Universal Render Pipeline (URP)", "Fixed Foveated Rendering (FFR) to boost GPU frame rates"], milestone: "Achieve a rock-solid 90fps performance on Meta Quest in a complex scene." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production XR Applications", topics: ["VR Medical Training Simulation with Hand Tracking", "Mobile AR Educational Astronomy Explorer", "Mixed Reality Spatial Collaborative Workspace"], milestone: "Complete 3 comprehensive AR/VR spatial computing projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Spatial Portfolio & Video Showcases", topics: ["YouTube video portfolio with Mixed Reality capture showcasing hand tracking and spatial UI", "GitHub repositories with clean OpenXR code and setup guides", "SideQuest / Meta App Lab demo submissions"], milestone: "A professional AR/VR portfolio with video demonstrations and downloadable builds." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Spatial Computing Technical Scenarios", topics: ["Why is maintaining 90+ fps critical in VR and how do you achieve it on mobile chipsets?", "Explain the difference between Single-Pass Stereo rendering and Multi-Pass rendering", "How does plane detection work in ARCore/ARKit using point clouds and SLAM?", "How do you design spatial UI to avoid neck fatigue and arm strain in VR?"], milestone: "Ace technical AR/VR, spatial computing, and computer vision interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Spatial Industry Hiring", topics: ["AR/VR Developer resume highlighting OpenXR, Meta Quest SDK, and performance optimization", "Applying to spatial computing startups, enterprise simulation firms, and tech giants (Meta, Apple, Qualcomm)", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior AR/VR Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "VR Interactive Physics Lab with OpenXR", tech: ["Unity", "OpenXR", "XR Interaction Toolkit", "C#", "Meta Quest"], description: "Immersive VR physics room with teleportation, snap turning, drawer interactions, and throwable physics objects." },
      { tier: "Intermediate", title: "Mobile AR Furniture Placement & Interior Design App", tech: ["Unity", "AR Foundation", "ARCore / ARKit", "C#", "Plane Detection"], description: "Mobile AR app detecting horizontal planes, placing realistic 3D furniture with touch rotation, scaling, and lighting estimation." },
      { tier: "Production / Capstone", title: "Mixed Reality Surgical Simulation with Hand Tracking & Passthrough", tech: ["Meta XR SDK", "Hand Tracking", "Passthrough MR", "Spatial UI", "Spatial Audio"], description: "High-precision medical training simulation controlled entirely with natural hand gestures, passthrough overlay, and 90fps optimization." }
    ],
    certifications: [
      { name: "Unity Certified Associate: VR Developer", issuer: "Unity Technologies" },
      { name: "Meta AR Developer Certificate", issuer: "Meta (Coursera)" }
    ],
    interviewTopics: [
      { category: "Spatial Computing & VR", topics: ["Explain how Simultaneous Localization and Mapping (SLAM) tracks a headset's position in 3D space", "What is Single-Pass Instanced Stereo Rendering and how does it halve CPU draw calls in VR?", "Explain how Spatial Anchors allow persistent virtual objects across multiple sessions in MR", "What techniques prevent VR motion sickness (Simulated Teleportation, Vignetting, high framerates)?"] }
    ],
    relatedRoles: ["Game Developer", "UI Developer", "Computer Vision Engineer", "Software Engineer"]
  },

  {
    id: "robotics-software-engineer",
    careerFamily: "SPECIALIZED",
    roleName: "Robotics Software Engineer",
    slug: "robotics-software-engineer",
    badge: "Specialized / High Pay",
    shortDescription: "Develops autonomous robot software, ROS2 nodes, motion planning, SLAM navigation, and sensor fusion.",
    description: "A Robotics Software Engineer writes the software that powers autonomous robots, autonomous mobile robots (AMRs), robotic arms, and self-driving vehicles. They develop in C++ and Python using the Robot Operating System (ROS 2), implementing SLAM localization, path planning, and sensor fusion.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Robotics / CS / ECE / Mechatronics"],
    salaryRange: { entry: "₹6 - ₹12 LPA", mid: "₹13 - ₹25 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Develop modular robotics nodes, publishers, and subscribers using ROS 2 (Robot Operating System) in C++ and Python.",
      "Implement SLAM (Simultaneous Localization and Mapping) algorithms for autonomous robot navigation in unknown environments.",
      "Develop global and local path planning algorithms (A*, Dijkstra, TEB Local Planner, MoveIt!).",
      "Process and fuse multi-sensor data: LiDAR point clouds, Depth Cameras, IMU, and wheel odometry using Kalman Filters.",
      "Simulate autonomous robotic systems in Gazebo and RViz before deploying to physical robot hardware."
    ],
    prerequisites: [
      { name: "Modern C++ (C++17/20) & Python", desc: "Pointers, OOP, memory management, multithreading, STL containers.", required: true },
      { name: "Linear Algebra & Kinematics", desc: "Matrices, coordinate transformations, forward/inverse kinematics.", required: true },
      { name: "Linux Mastery (Ubuntu)", desc: "Command line, system administration, build systems (CMake, colcon).", required: true },
      { name: "Basic Control Systems", desc: "PID controllers, feedback loops, state estimation.", required: true }
    ],
    technologies: [
      { name: "ROS 2 (Robot Operating System)", category: "Robotics Framework", priority: "MUST LEARN", description: "Nodes, Topics, Services, Actions, Parameters, DDS middleware, colcon build." },
      { name: "Modern C++ & Python for Robotics", category: "Language", priority: "MUST LEARN", description: "High-performance robotics algorithms, real-time loops, smart pointers." },
      { name: "SLAM & Navigation (Nav2 / Cartographer / RTAB-Map)", category: "Navigation", priority: "MUST LEARN", description: "LiDAR 2D/3D mapping, costmaps, obstacle avoidance, loop closure." },
      { name: "Sensor Fusion (Extended Kalman Filter - EKF)", category: "Estimation", priority: "MUST LEARN", description: "Fusing noisy IMU, wheel encoder odometry, and GPS for accurate localization." },
      { name: "Simulation & Visualization (Gazebo & RViz)", category: "Simulation", priority: "MUST LEARN", description: "URDF robot modeling, physics engines (ODE/Bullet), sensor plugins." },
      { name: "Motion Planning & Kinematics (MoveIt!)", category: "Manipulation", priority: "HIGH PRIORITY", description: "Inverse kinematics, collision-free trajectory planning for robotic arms." },
      { name: "Computer Vision for Robotics (OpenCV & Point Cloud Library - PCL)", category: "Perception", priority: "HIGH PRIORITY", description: "Object detection, depth estimation, point cloud filtering and segmentation." }
    ],
    tools: [
      { name: "Ubuntu Linux & ROS 2 (Humble / Iron)", priority: "MUST LEARN", purpose: "Primary robotics operating environment." },
      { name: "Gazebo & RViz", priority: "MUST LEARN", purpose: "3D physics simulation and real-time sensor visualization." },
      { name: "VS Code with CMake & Colcon", priority: "MUST LEARN", purpose: "Robotics C++ workspace development." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "ROS 2 Architecture & Modern C++", topics: ["ROS 2 Architecture: Computational Graph (Nodes, Topics, Services, Actions)", "Writing publisher and subscriber nodes in modern C++ and Python", "ROS 2 launch files, parameter servers, and colcon build systems"], milestone: "Build a ROS 2 multi-node system communicating sensor telemetry and velocity commands." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Robot Modeling (URDF) & Gazebo Simulation", topics: ["Creating Unified Robot Description Format (URDF/Xacro) models with joints and links", "Setting up Gazebo 3D physics simulation with simulated differential-drive motors", "Visualizing sensor transforms (TF2) and laser scans in RViz"], milestone: "Build and simulate a custom differential-drive mobile robot in Gazebo with LiDAR." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Sensor Fusion with Extended Kalman Filter (EKF)", topics: ["Robot State Publisher and TF2 coordinate frame transformations (`base_link`, `odom`, `map`)", "Fusing IMU and Wheel Odometry using `robot_localization` EKF node"], milestone: "Configure an EKF node yielding accurate robot odometry with zero drift." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "SLAM Mapping & Autonomous Navigation (Nav2)", topics: ["2D SLAM mapping with Cartographer / Slam Toolbox using LiDAR scans", "ROS 2 Nav2 Navigation Stack: Global Costmaps, Local Costmaps, Recovery Behaviors", "Autonomous waypoint navigation and dynamic obstacle avoidance"], milestone: "Have your simulated robot autonomously map an unknown building and navigate to waypoints." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Robotic Manipulation (MoveIt!) & Vision", topics: ["Robotic Arm Kinematics: Forward Kinematics, Inverse Kinematics, Jacobian matrices", "MoveIt! motion planning for 6-DoF robotic arms with collision avoidance", "Integrating OpenCV object detection to identify objects for pick-and-place routines"], milestone: "Build an autonomous pick-and-place robotic arm system guided by vision." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Autonomous Robotics Systems", topics: ["Autonomous Warehouse Mobile Robot (AMR) with Nav2", "Autonomous Drone Obstacle Avoidance Simulation", "Vision-Guided 6-DoF Robotic Arm Pick & Place"], milestone: "Complete 3 comprehensive autonomous robotics projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Robotics Portfolio & Simulation Videos", topics: ["GitHub repository with clean ROS 2 packages, Gazebo worlds, and URDF models", "Video recordings showcasing autonomous mapping, navigation, and manipulation in Gazebo/RViz", "Technical architecture documentation"], milestone: "A professional Robotics Engineer portfolio with downloadable ROS 2 packages." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Robotics Math & ROS 2 Architecture", topics: ["Explain the difference between a ROS 2 Service and a ROS 2 Action (when to use which?)", "How does an Extended Kalman Filter (EKF) linearize non-linear sensor models?", "Explain how the TF2 transform tree manages coordinate frames (`map -> odom -> base_link`)", "How does the A* algorithm differ from Dijkstra's algorithm in path planning?"], milestone: "Ace technical robotics math, ROS 2, and autonomous navigation interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Robotics Industry Hiring", topics: ["Robotics Software Engineer resume emphasizing ROS 2, C++, SLAM, and Nav2", "Applying to autonomous vehicle companies, warehouse robotics (Amazon, GreyOrange), and defense firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Robotics Software Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Custom Differential-Drive Robot URDF & Gazebo Physics Simulation", tech: ["ROS 2", "C++", "URDF/Xacro", "Gazebo", "RViz"], description: "Complete robot simulation package with differential drive controller, LiDAR plugin, and keyboard teleoperation." },
      { tier: "Intermediate", title: "Autonomous Warehouse Mobile Robot (AMR) with SLAM & Nav2", tech: ["ROS 2 Humble", "Nav2", "SLAM Toolbox", "EKF", "Costmaps"], description: "Simulated warehouse robot autonomously mapping complex aisles, calculating optimal routes, and avoiding dynamic obstacles." },
      { tier: "Production / Capstone", title: "Autonomous Vision-Guided Pick-and-Place Robotic Arm", tech: ["ROS 2", "MoveIt! 2", "OpenCV", "Inverse Kinematics", "C++"], description: "6-DoF robotic arm system detecting target objects via depth camera and executing collision-free trajectory pick-and-place cycles." }
    ],
    certifications: [
      { name: "ROS 2 for Beginners / Nav2 Specialist", issuer: "ConstructSim / ROS" },
      { name: "Modern Robotics Specialization", issuer: "Northwestern University (Coursera)" }
    ],
    interviewTopics: [
      { category: "Robotics Math & ROS 2", topics: ["Explain the TF2 coordinate transformation tree (`map` -> `odom` -> `base_link` -> `laser_frame`)", "What is the difference between a ROS 2 Service (blocking request/reply) and an Action (non-blocking goal with continuous feedback)?", "Explain how Particle Filter (AMCL) localization works using LiDAR beam models", "What is the difference between Forward Kinematics and Inverse Kinematics?"] }
    ],
    relatedRoles: ["Firmware Engineer", "IoT Developer", "Computer Vision Engineer", "Embedded Software Developer"]
  },

  {
    id: "firmware-engineer",
    careerFamily: "SPECIALIZED",
    roleName: "Firmware Engineer",
    slug: "firmware-engineer",
    badge: "Deep Systems / High Demand",
    shortDescription: "Writes low-level bare-metal and RTOS C/C++ firmware directly on microcontrollers and silicon hardware.",
    description: "A Firmware Engineer writes low-level software that runs directly on hardware microcontrollers and microprocessors. They write bare-metal C/C++, Real-Time Operating System (FreeRTOS, Zephyr) drivers, direct memory-mapped register configurations, bootloaders, and hardware communication buses.",
    targetAudience: ["B.Tech", "B.E.", "M.Tech", "ECE / EEE / CS / Embedded"],
    salaryRange: { entry: "₹5.5 - ₹11 LPA", mid: "₹12 - ₹23 LPA", senior: "₹25 - ₹52+ LPA" },
    responsibilities: [
      "Develop low-level bare-metal and RTOS firmware in Embedded C and C++ for ARM Cortex-M microcontrollers (STM32, NXP).",
      "Write custom device drivers for peripherals: Timers, UART, I2C, SPI, CAN bus, ADC, and DMA.",
      "Develop custom Bootloaders and secure Over-The-Air (OTA) firmware updating routines.",
      "Debug hardware using JTAG / SWD debuggers, Logic Analyzers, and Oscilloscopes.",
      "Optimize firmware for microsecond latency, ultra-low power consumption (nano-amps), and minimal memory footprints (KB)."
    ],
    prerequisites: [
      { name: "Low-Level Embedded C / C++", desc: "Pointers, bitwise operations, volatile keyword, memory-mapped I/O, structs.", required: true },
      { name: "Microcontroller Architecture", desc: "ARM Cortex-M core, registers, interrupt vector tables, flash/RAM layouts.", required: true },
      { name: "Hardware Schematics & Debugging", desc: "Reading datasheets, pinout diagrams, using multimeters and logic analyzers.", required: true },
      { name: "Computer Architecture", desc: "Assembly basics, stack vs heap, linker scripts, memory segments (.text, .data, .bss).", required: true }
    ],
    technologies: [
      { name: "Embedded C / Modern C++", category: "Language", priority: "MUST LEARN", description: "Direct register manipulation, bit masking, volatile keyword, fixed-width integers (uint32_t)." },
      { name: "ARM Cortex-M Microcontrollers (STM32 / NXP)", category: "Hardware", priority: "MUST LEARN", description: "STM32 HAL vs Bare-Metal register programming, clock tree configuration (RCC)." },
      { name: "Hardware Peripherals (Timers / PWM / ADC / DMA)", category: "Peripherals", priority: "MUST LEARN", description: "Direct Memory Access (DMA) for zero-CPU data transfers, hardware timers." },
      { name: "Real-Time Operating Systems (FreeRTOS / Zephyr)", category: "RTOS", priority: "MUST LEARN", description: "Preemptive scheduling, task priorities, semaphores, mutexes, message queues." },
      { name: "Communication Buses (CAN / SPI / I2C / UART)", category: "Buses", priority: "MUST LEARN", description: "Controller Area Network (CAN bus in automotive), high-speed SPI." },
      { name: "Bootloaders & Memory Layouts", category: "System", priority: "MUST LEARN", description: "Linker scripts (.ld), flash partitions, custom UART/CAN bootloaders." },
      { name: "Hardware Debugging (JTAG / SWD & Logic Analyzers)", category: "Debugging", priority: "MUST LEARN", description: "Single-stepping on hardware with ST-Link / J-Link, Saleae logic analyzer decoding." },
      { name: "Low-Power Optimization", category: "Power Management", priority: "HIGH PRIORITY", description: "Sleep, Stop, Standby modes, wake-on-interrupt, energy profiling." }
    ],
    tools: [
      { name: "STM32CubeIDE / Keil uVision / VS Code", priority: "MUST LEARN", purpose: "Primary firmware authoring and compilation IDE." },
      { name: "ST-Link / J-Link Debugger", priority: "MUST LEARN", purpose: "Hardware in-circuit debugging and flashing via SWD." },
      { name: "Saleae Logic Analyzer", priority: "MUST LEARN", purpose: "Sniffing and decoding I2C, SPI, UART, and CAN bus waveforms." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "ARM Cortex-M Register-Level C", topics: ["Cortex-M Architecture: Memory Map, Register Banks, Vector Table, Linker Scripts (.text, .data, .bss)", "Writing Bare-Metal C code without libraries: Memory-mapped I/O, bitwise operators, volatile pointers", "Configuring the Clock Tree (RCC) and driving GPIOs directly via register offsets"], milestone: "Write a bare-metal STM32 firmware from scratch that blinks an LED by directly writing to memory addresses." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Hardware Peripherals & Direct Memory Access (DMA)", topics: ["Configuring Hardware Timers (TIM) for precise microsecond delays and PWM outputs", "Analog-to-Digital Conversion (ADC) with Direct Memory Access (DMA) to stream sensor readings into RAM without CPU overhead", "Interrupt Service Routines (NVIC) and Priority levels"], milestone: "Build a high-speed audio sampler streaming ADC data into a circular RAM buffer via DMA." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Logic Analyzers & Hardware Debugging", topics: ["Using ST-Link SWD to set hardware breakpoints, inspect CPU registers, and step through code", "Using Saleae Logic Analyzer to capture and decode SPI and I2C packets"], milestone: "Diagnose and fix a timing glitch on an I2C sensor bus using a logic analyzer." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "FreeRTOS & Zephyr RTOS", topics: ["FreeRTOS Kernel: Preemptive vs Cooperative scheduling, Tick rate, Context switching", "Inter-Task Communication: Queues, Binary/Counting Semaphores, Mutexes with Priority Inheritance", "Managing task stack sizes and preventing Stack Overflow with watermark hooks"], milestone: "Build a multi-tasking FreeRTOS firmware running 4 real-time sensor and telemetry tasks." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Custom Bootloaders & CAN Bus", topics: ["Writing a Custom Bootloader: Vector table relocation (VTOR), jumping from Bootloader to Application space", "Flashing new firmware over UART / CAN bus", "Automotive CAN Bus: Configuring CAN bit timing, message filters, and sending telemetry packets"], milestone: "Write a custom UART bootloader that receives a new binary file, verifies CRC checksum, and flashes it to memory." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Firmware Systems", topics: ["Bare-Metal Custom Bootloader with CRC Verification", "Automotive CAN Bus Telemetry Node", "Ultra-Low Power FreeRTOS Environmental Data Logger"], milestone: "Complete 3 robust embedded firmware projects on physical microcontroller hardware." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Firmware Portfolio & Hardware Documentation", topics: ["GitHub repository with clean C code, modular drivers, and annotated memory map diagrams", "Detailed technical write-ups explaining peripheral clock configurations and timing", "Oscilloscope and Logic Analyzer waveform captures"], milestone: "A professional Firmware Engineer portfolio with verified hardware projects." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Firmware Deep Dive Interviews", topics: ["What is the purpose of the `volatile` keyword in Embedded C (give 3 distinct use cases)?", "Explain how Direct Memory Access (DMA) works and why it saves CPU clock cycles", "What happens during an interrupt: Vector table lookup, Context saving, ISR execution, Context restore", "How do you calculate CAN bus baud rate and bit timing segments (Sync_Seg, Prop_Seg, Phase_Seg1/2)?"], milestone: "Ace technical firmware engineering, memory map, and peripheral driver interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Firmware Industry Placement", topics: ["Firmware Engineer resume highlighting STM32, Bare-Metal C, FreeRTOS, and DMA", "Applying to semiconductor companies (TI, STMicroelectronics, NXP, Qualcomm), automotive EV firms, and aerospace", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Firmware Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Bare-Metal STM32 UART & Timer Driver from Scratch", tech: ["Embedded C", "ARM Cortex-M", "Bare-Metal Registers", "UART", "Timers"], description: "Written completely without HAL libraries by manipulating memory registers for clock config, timers, and non-blocking UART." },
      { tier: "Intermediate", title: "Multi-Sensor Telemetry Engine with FreeRTOS & DMA", tech: ["STM32", "FreeRTOS", "DMA", "I2C", "SPI", "Queues"], description: "Real-time firmware streaming multi-channel ADC and sensor data into FreeRTOS queues via DMA without CPU blocking." },
      { tier: "Production / Capstone", title: "Custom Dual-Bank Secure UART Bootloader with CRC32", tech: ["Cortex-M4", "Embedded C", "Bootloaders", "VTOR", "Flash Partitions", "CRC32"], description: "Production-grade microcontroller bootloader verifying binary checksums, managing dual flash banks, and executing seamless app jump." }
    ],
    certifications: [
      { name: "Arm Certified Engineer (Arm Accredited Engineer)", issuer: "Arm" },
      { name: "Mastering Microcontroller with Embedded Driver Development", issuer: "FastBit Embedded Brain Academy" }
    ],
    interviewTopics: [
      { category: "Low-Level Systems & Firmware", topics: ["Give 3 distinct real-world situations where the `volatile` keyword is mandatory in C", "Explain what happens during a Cortex-M hardware interrupt from trigger to return", "How does a custom bootloader relocate the Vector Table (`SCB->VTOR`) before jumping to the application entry point?", "What is Priority Inversion in an RTOS and how does Priority Inheritance solve it?"] }
    ],
    relatedRoles: ["Robotics Software Engineer", "Embedded Software Developer", "IoT Developer", "Systems Engineer"]
  }
];

module.exports = specializedRoles;

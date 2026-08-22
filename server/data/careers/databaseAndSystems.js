/**
 * Database & Systems Career Roles (6 Roles)
 */

const databaseAndSystemsRoles = [
  {
    id: "database-administrator",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "Database Administrator",
    slug: "database-administrator",
    badge: "High Demand",
    shortDescription: "Ensures database availability, integrity, backup/recovery, security, and performance tuning.",
    description: "A Database Administrator (DBA) is responsible for the overall health, performance, security, and availability of an organization's databases (PostgreSQL, Oracle, SQL Server, MySQL). They manage automated backups, disaster recovery, replication, index optimization, and access control.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "CS/IT"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹20 - ₹40+ LPA" },
    responsibilities: [
      "Install, configure, patch, and upgrade enterprise database engines (PostgreSQL, Oracle, SQL Server).",
      "Design and verify automated backup and disaster recovery (DR) strategies (RTO/RPO).",
      "Monitor database performance, server disk I/O, memory buffer pools, and slow query logs.",
      "Optimize slow SQL queries by analyzing execution plans (EXPLAIN ANALYZE) and creating composite indexes.",
      "Implement database security, role-based user access, and data encryption (TDE, SSL/TLS)."
    ],
    prerequisites: [
      { name: "Relational Database Fundamentals", desc: "SQL DDL/DML, ACID properties, Normalization (1NF, 2NF, 3NF), Primary/Foreign keys.", required: true },
      { name: "Linux & Windows OS Administration", desc: "File systems, storage partitions, memory management, CLI.", required: true },
      { name: "Basic Shell / Python Scripting", desc: "Writing automated backup and log rotation scripts.", required: true },
      { name: "Data Storage & Networking Basics", desc: "RAID arrays, SAN/NAS storage, TCP ports, connection pooling.", required: true }
    ],
    technologies: [
      { name: "Relational Databases (PostgreSQL / Oracle / SQL Server)", category: "RDBMS Core", priority: "MUST LEARN", description: "Architecture, memory structures (SGA/Buffer Pool), WAL logs, table spaces." },
      { name: "Advanced SQL & Query Optimization", category: "Performance", priority: "MUST LEARN", description: "EXPLAIN ANALYZE, execution plans, cost estimation, index types (B-Tree, GIN, Hash)." },
      { name: "Backup & Recovery (pg_dump / pg_basebackup / RMAN)", category: "Disaster Recovery", priority: "MUST LEARN", description: "Point-in-Time Recovery (PITR), logical vs physical backups, automated restore verification." },
      { name: "High Availability & Replication", category: "High Availability", priority: "MUST LEARN", description: "Primary-Standby streaming replication, failover, connection poolers (PgBouncer)." },
      { name: "Database Security & Hardening", category: "Security", priority: "HIGH PRIORITY", description: "User roles, permissions, SSL encryption, Transparent Data Encryption (TDE), auditing." },
      { name: "Linux Administration & Bash Scripting", category: "OS", priority: "HIGH PRIORITY", description: "Storage management (LVM), monitoring disk I/O with iostat, cron backup jobs." },
      { name: "NoSQL Database Basics (MongoDB / Redis)", category: "NoSQL", priority: "GOOD TO KNOW", description: "Sharding, replica sets, memory caching." },
      { name: "Cloud Databases (AWS RDS / Aurora / Azure SQL)", category: "Cloud Database", priority: "HIGH PRIORITY", description: "Multi-AZ deployments, read replicas, automated snapshots." }
    ],
    tools: [
      { name: "DBeaver / pgAdmin / SSMS", priority: "MUST LEARN", purpose: "Database administration interfaces." },
      { name: "PgBouncer", priority: "MUST LEARN", purpose: "PostgreSQL connection pooling." },
      { name: "Linux & Bash", priority: "MUST LEARN", purpose: "Server management and automated scripting." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Database Architecture & SQL", topics: ["RDBMS Architecture: Memory buffers, background writer, Write-Ahead Logging (WAL)", "Data Modeling, Normalization (1NF to 3NF), Foreign Keys, Constraints", "ACID Transactions and Concurrency Isolation Levels (Read Committed, Repeatable Read, Serializable)"], milestone: "Install PostgreSQL on Linux, configure custom memory parameters in postgresql.conf." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Query Optimization & Indexing", topics: ["Understanding EXPLAIN and EXPLAIN ANALYZE execution plans (Seq Scan, Index Scan, Bitmap Heap Scan)", "B-Tree, Hash, GIN, GiST, and Partial Indexes", "Identifying and fixing slow queries and table bloat with VACUUM"], milestone: "Optimize a query on a 10-million row table, reducing execution time from 5 seconds to 10ms." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Connection Pooling with PgBouncer", topics: ["Installing and configuring PgBouncer (Session vs Transaction pooling)", "Preventing connection starvation and managing connection spikes"], milestone: "Configure PgBouncer handling 1,000 concurrent client connections." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Backup & Point-in-Time Recovery (PITR)", topics: ["Logical backups (pg_dump) vs Physical binary backups (pg_basebackup)", "Continuous WAL archiving and configuring Point-In-Time Recovery (PITR)", "Simulating database corruption and executing a zero-data-loss recovery"], milestone: "Perform a successful PITR restore recovering a dropped table to a specific timestamp." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "High Availability & Replication", topics: ["Configuring Streaming Replication (Synchronous vs Asynchronous)", "Automated Failover with Patroni / keepalived", "Cloud database administration (AWS RDS Multi-AZ failover & Read Replicas)"], milestone: "Deploy a high-availability primary-standby PostgreSQL cluster with automated failover." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production DBA Operations", topics: ["Automated backup and verification scripts in Bash/Python", "Database security audit (CIS PostgreSQL Benchmark)", "Monitoring dashboards with Prometheus postgres_exporter and Grafana"], milestone: "Complete 3 comprehensive database administration projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "DBA Portfolio & Runbooks", topics: ["GitHub repository with automated backup scripts, configuration templates, and tuning guides", "Disaster recovery runbook documentation", "Query optimization case study write-ups"], milestone: "A professional DBA portfolio showcasing configuration automation and tuning." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "DBA Scenario Interviews", topics: ["What happens during a PostgreSQL VACUUM and why is autovacuum critical?", "Explain the difference between Synchronous and Asynchronous streaming replication", "How do you recover a database when the disk runs 100% full?", "Explain Database Isolation Levels and how Dirty Reads vs Phantom Reads are prevented"], milestone: "Ace technical DBA scenario and query tuning interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["DBA resume emphasizing uptime, recovery time (RTO), and query optimization", "Applying to banks, enterprises, and cloud MSPs", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Database Administrator." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Database Backup & S3 Archive Automation", tech: ["PostgreSQL", "Bash", "AWS CLI", "Cron", "Linux"], description: "Automated daily physical backup and WAL archiving script with S3 upload and retention rotation." },
      { tier: "Intermediate", title: "Query Performance Tuning & Index Optimization Lab", tech: ["PostgreSQL", "pg_stat_statements", "DBeaver", "Python Data Generator"], description: "Benchmarked performance optimization across 10 million simulated records with execution plan comparisons." },
      { tier: "Production / Capstone", title: "High-Availability PostgreSQL Cluster with Automated Failover", tech: ["PostgreSQL 16", "Patroni", "etcd", "PgBouncer", "HAProxy", "Docker Compose"], description: "Production HA cluster with 3 etcd nodes, Patroni leader election, PgBouncer connection pooling, and sub-10s failover." }
    ],
    certifications: [
      { name: "PostgreSQL Associate DBA", issuer: "PostgreSQL Guild" },
      { name: "AWS Certified Database – Specialty", issuer: "Amazon Web Services" }
    ],
    interviewTopics: [
      { category: "Database Internals", topics: ["Explain Write-Ahead Logging (WAL) and why it guarantees ACID durability", "What is Multi-Version Concurrency Control (MVCC) and how does it prevent read-write locks?", "How does a B-Tree index structure look on disk and how does it balance?", "Difference between a Clustered Index and a Non-Clustered Index"] }
    ],
    relatedRoles: ["Database Developer", "Data Engineer", "System Administrator", "Backend Developer"]
  },

  {
    id: "database-developer",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "Database Developer",
    slug: "database-developer",
    badge: "High Demand",
    shortDescription: "Writes complex stored procedures, triggers, views, ETL routines, and optimized database schemas.",
    description: "A Database Developer focuses on programming inside the database engine. They write complex stored procedures, triggers, functions, user-defined types (PL/SQL, T-SQL, PL/pgSQL), design normalized data models, and optimize transactional business logic.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹17 LPA", senior: "₹19 - ₹38+ LPA" },
    responsibilities: [
      "Write complex Stored Procedures, Functions, Packages, and Triggers in PL/SQL or T-SQL.",
      "Design normalized relational data schemas (3NF) ensuring data consistency and integrity.",
      "Optimize complex SQL queries, views, and data transformation scripts.",
      "Develop data migration and ETL loading pipelines between disparate data systems.",
      "Implement data validation rules, custom constraints, and audit logging within the database layer."
    ],
    prerequisites: [
      { name: "SQL Mastery", desc: "DDL, DML, DCL, complex joins, subqueries, aggregations.", required: true },
      { name: "Procedural Programming Concepts", desc: "Variables, loops, conditionals, exception handling, cursor loops.", required: true },
      { name: "Data Modeling", desc: "Entity-Relationship Diagrams (ERD), keys, normalization.", required: true },
      { name: "Git Version Control", desc: "Managing SQL migration scripts in Git.", required: true }
    ],
    technologies: [
      { name: "Advanced SQL & Dialects (PL/SQL / T-SQL / PL/pgSQL)", category: "Procedural SQL", priority: "MUST LEARN", description: "Stored procedures, functions, packages, cursors, exception handling." },
      { name: "Database Triggers & User-Defined Functions", category: "DB Programming", priority: "MUST LEARN", description: "Row-level vs Statement-level triggers, audit logging, calculated fields." },
      { name: "Schema Design & Normalization", category: "Data Modeling", priority: "MUST LEARN", description: "1NF, 2NF, 3NF, BCNF, dimensional modeling, surrogate vs natural keys." },
      { name: "Query Optimization & Indexing", category: "Performance", priority: "MUST LEARN", description: "Index tuning, query restructuring, preventing table scans." },
      { name: "Database Migrations (Flyway / Liquibase)", category: "DevOps", priority: "HIGH PRIORITY", description: "Version-controlled automated database migration scripts." },
      { name: "ETL & Data Transformation", category: "Data Pipelines", priority: "HIGH PRIORITY", description: "Bulk data ingestion, staging tables, data cleansing." },
      { name: "NoSQL & JSON in SQL (PostgreSQL JSONB)", category: "Hybrid Data", priority: "GOOD TO KNOW", description: "Querying and indexing semi-structured JSON data inside SQL." }
    ],
    tools: [
      { name: "DBeaver / Oracle SQL Developer / SSMS", priority: "MUST LEARN", purpose: "Primary SQL development and procedure debugging." },
      { name: "Flyway / Liquibase", priority: "HIGH PRIORITY", purpose: "Database schema migration management." },
      { name: "Git & GitHub", priority: "MUST LEARN", purpose: "Version control." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Schema Design & Advanced SQL", topics: ["Entity-Relationship (ER) modeling and Cardinality (1:1, 1:N, M:N)", "Normalization up to 3NF and avoiding data redundancy", "Advanced SQL: Window Functions, CTEs, Recursive Queries, Pivot/Unpivot"], milestone: "Design a complete ER diagram and SQL schema for an airline booking system." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Procedural SQL (PL/SQL / PL/pgSQL)", topics: ["Variables, Control structures (IF, CASE, LOOP, WHILE)", "Writing Stored Procedures and Functions with IN, OUT, INOUT parameters", "Cursors: Explicit vs Implicit cursors, Cursor FOR loops, Bulk Collect / Fetch"], milestone: "Write a stored procedure calculating monthly payroll with tax deductions and audit logging." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Database Migrations with Flyway", topics: ["Versioned SQL migration scripts (V1__init.sql, V2__add_index.sql)", "Integrating Flyway with Git and CI/CD pipelines"], milestone: "Set up version-controlled database migrations with Flyway." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Triggers & Advanced Query Tuning", topics: ["BEFORE vs AFTER vs INSTEAD OF Triggers", "Autonomous transactions and exception handling blocks", "Index Tuning: Composite indexes, covering indexes, and index selectivity"], milestone: "Build an automated audit logging system tracking all table updates using triggers." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "JSONB & Bulk ETL Processing", topics: ["PostgreSQL JSONB operators (->, ->>, @>, jsonb_build_object) and GIN indexes", "Bulk data loading (COPY commands, staging tables, batch commits)", "Materialized Views with automated refresh schedules"], milestone: "Build a high-performance ETL loading script processing 1 million CSV records." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Database Systems", topics: ["Banking Core Ledger System with Stored Procedures", "Inventory reservation system with row locking (SELECT ... FOR UPDATE)", "Automated database testing with pgTAP / tSQLt"], milestone: "Complete 3 robust database development projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Database Code Showcase", topics: ["GitHub repository with clean, commented SQL scripts and ER diagrams", "Flyway migration folders and benchmark reports", "Detailed documentation explaining business logic"], milestone: "A professional GitHub portfolio showcasing advanced SQL programming." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "SQL Live Coding & Stored Procedures", topics: ["Write a recursive CTE to traverse an employee organizational hierarchy tree", "Difference between a Function and a Stored Procedure", "How to prevent deadlocks when multiple transactions update the same rows", "When should you use a Materialized View vs a Standard View?"], milestone: "Ace technical database developer coding rounds." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Database Developer resume emphasizing complex stored procedures and optimization", "Applying to financial institutions, enterprise software companies, and ERP teams", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Database Developer." }
    ],
    projects: [
      { tier: "Beginner", title: "University Academic & Grade Management System", tech: ["PostgreSQL", "PL/pgSQL", "Views", "Triggers"], description: "Complete database backend with stored procedures calculating GPA, enforcing prerequisite checks, and generating report cards." },
      { tier: "Intermediate", title: "Banking Ledger & Atomic Transaction Processing System", tech: ["PL/SQL / PL/pgSQL", "ACID", "Row Locking", "Flyway", "Triggers"], description: "Double-entry accounting system with stored procedures executing atomic fund transfers with row-level locks and audit trails." },
      { tier: "Production / Capstone", title: "High-Volume E-Commerce Inventory & Order Processing Engine", tech: ["PostgreSQL", "PL/pgSQL", "JSONB", "GIN Indexes", "Materialized Views"], description: "Handles concurrent flash-sale inventory reservations with optimistic locking, JSONB product catalogs, and materialized analytics views." }
    ],
    certifications: [
      { name: "Oracle Database SQL Certified Associate", issuer: "Oracle" },
      { name: "Microsoft Certified: Azure Database Administrator Associate", issuer: "Microsoft" }
    ],
    interviewTopics: [
      { category: "Database Programming", topics: ["Explain Recursive Common Table Expressions (CTEs) with an example", "What is the difference between a Stored Procedure and a Function?", "How do you handle Deadlocks and how does `SELECT FOR UPDATE` prevent race conditions?", "Difference between a View and a Materialized View"] }
    ],
    relatedRoles: ["Database Administrator", "Backend Developer", "Data Engineer", "Data Analyst"]
  },

  {
    id: "system-administrator",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "System Administrator",
    slug: "system-administrator",
    badge: "High Demand",
    shortDescription: "Manages, configures, and maintains servers, operating systems, user directories, and backups.",
    description: "A System Administrator (SysAdmin) maintains the reliable operation of computer systems, Linux/Windows servers, virtualization platforms, Active Directory domains, and network services across an organization.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (CS/IT)"],
    salaryRange: { entry: "₹3.5 - ₹7 LPA", mid: "₹8 - ₹15 LPA", senior: "₹16 - ₹30+ LPA" },
    responsibilities: [
      "Install, configure, patch, and maintain Linux (Ubuntu, RHEL) and Windows Server systems.",
      "Manage Active Directory, user accounts, Group Policy Objects (GPO), and access rights.",
      "Configure virtualization clusters (VMware vSphere, Proxmox, Hyper-V).",
      "Implement server backup routines, disaster recovery plans, and disk storage management (RAID, LVM).",
      "Monitor server health (CPU, RAM, Disk, Network) and resolve hardware/OS incidents."
    ],
    prerequisites: [
      { name: "Operating System Basics", desc: "Installing OS, command line navigation in Linux and Windows.", required: true },
      { name: "Computer Networking", desc: "IP addresses, DNS, DHCP, Gateways, Subnets, Firewalls.", required: true },
      { name: "Hardware & Virtualization", desc: "CPUs, RAM, RAID configurations, Virtual Machines (VMs).", required: true },
      { name: "Scripting Basics", desc: "Bash or PowerShell for automation.", required: true }
    ],
    technologies: [
      { name: "Linux Server Administration (RHEL / Ubuntu)", category: "Linux", priority: "MUST LEARN", description: "Package managers (apt, dnf), systemd services, cron jobs, file permissions." },
      { name: "Windows Server & Active Directory", category: "Windows", priority: "MUST LEARN", description: "Domain Controllers, Active Directory Users & Computers, Group Policy (GPO), DNS, DHCP." },
      { name: "PowerShell & Bash Scripting", category: "Automation", priority: "MUST LEARN", description: "Automating user provisioning, server health checks, and scheduled maintenance." },
      { name: "Virtualization (VMware / Proxmox / Hyper-V)", category: "Virtualization", priority: "MUST LEARN", description: "VM creation, snapshots, virtual switches, storage pools." },
      { name: "Storage Management (RAID / LVM / ZFS)", category: "Storage", priority: "HIGH PRIORITY", description: "Disk partitioning, expanding LVM volumes, RAID 1/5/10 arrays." },
      { name: "Backup & Recovery (Veeam / Bacula)", category: "Backup", priority: "HIGH PRIORITY", description: "Server image backups, retention schedules, disaster recovery testing." },
      { name: "Server Monitoring (Nagios / Zabbix)", category: "Monitoring", priority: "HIGH PRIORITY", description: "SNMP monitoring, agent-based alerting, server uptime dashboards." },
      { name: "Cloud Fundamentals (AWS / Azure)", category: "Cloud", priority: "GOOD TO KNOW", description: "Hybrid cloud administration, virtual machines in the cloud." }
    ],
    tools: [
      { name: "PowerShell & Bash", priority: "MUST LEARN", purpose: "Command line automation." },
      { name: "Proxmox / VMware vSphere", priority: "MUST LEARN", purpose: "Virtual machine management." },
      { name: "Zabbix / PRTG", priority: "HIGH PRIORITY", purpose: "Infrastructure and server monitoring." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Linux & Windows OS Administration", topics: ["Linux CLI mastery: File permissions, Ownership (chmod, chown), User management", "Linux Systemd services, journalctl logs, and cron scheduling", "Windows Server installation and Server Manager navigation"], milestone: "Set up and secure a dual-boot or virtualized Linux and Windows Server lab." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Active Directory & Group Policies", topics: ["Promoting Windows Server to Domain Controller (AD DS)", "Creating Organizational Units (OUs), Users, and Security Groups", "Configuring Group Policy Objects (GPO) for password policies and desktop restrictions", "Configuring DNS and DHCP server roles"], milestone: "Build a functioning corporate Active Directory domain with 10 simulated users and GPOs." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Virtualization (Proxmox / Hyper-V)", topics: ["Setting up Proxmox VE or Hyper-V hypervisor", "Configuring VM templates, virtual networking, and storage pools"], milestone: "Deploy a 3-VM virtualized network environment with isolated subnets." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "PowerShell & Bash Automation", topics: ["PowerShell scripting: Active Directory module (New-ADUser, Get-ADGroupMember)", "Automated user onboarding from CSV file via PowerShell", "Bash scripts for automated system maintenance and log archiving"], milestone: "Write a PowerShell script that provisions 50 users into Active Directory from a CSV." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Storage, Backups & Monitoring", topics: ["Logical Volume Management (LVM): Creating, resizing, and extending volumes on Linux", "Configuring automated VM and server backups with Veeam", "Setting up Zabbix / Nagios for server CPU, RAM, and Disk space alerting"], milestone: "Configure Zabbix monitoring alerting to Discord/Telegram when disk space exceeds 85%." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production SysAdmin Labs", topics: ["Enterprise Active Directory domain with multi-site replication", "Linux Web and Mail Server hosting with Postfix and Nginx", "Disaster recovery bare-metal restore simulation"], milestone: "Complete 3 comprehensive enterprise system administration projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Documentation & Portfolio", topics: ["GitHub repository with PowerShell/Bash automation scripts", "Network diagrams and Active Directory architecture documentation", "Standard Operating Procedure (SOP) manuals"], milestone: "A professional SysAdmin portfolio showcasing automation scripts and SOPs." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "SysAdmin Technical Interviews", topics: ["How do you troubleshoot a server that cannot resolve domain names (DNS failure)?", "Explain how Group Policy Objects (GPO) precedence works (LSDOU: Local, Site, Domain, OU)", "How to expand an LVM partition on a live Linux server without rebooting", "Explain RAID 0, RAID 1, RAID 5, and RAID 10 differences and drive failure tolerances"], milestone: "Ace technical SysAdmin troubleshooting and scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning CompTIA Linux+ or Microsoft Server certification", "SysAdmin resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior System Administrator." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated User Onboarding & Audit Script via PowerShell", tech: ["PowerShell", "Active Directory", "Windows Server", "CSV"], description: "Automated script importing new employee records from CSV, generating secure passwords, creating mailboxes, and assigning GPO groups." },
      { tier: "Intermediate", title: "Virtual Enterprise Datacenter Lab with Proxmox", tech: ["Proxmox VE", "Linux", "Windows Server", "pfSense", "VLANs"], description: "Virtualized datacenter featuring isolated VLANs, pfSense firewall routing, Domain Controller, and web server." },
      { tier: "Production / Capstone", title: "Enterprise High-Availability Server Infrastructure & Monitoring Stack", tech: ["Ubuntu Server", "Zabbix", "LVM", "Nginx", "Bacula / Veeam", "Bash"], description: "Monitored multi-server Linux environment with LVM dynamic storage, automated offsite backups, and instant Zabbix alerting." }
    ],
    certifications: [
      { name: "CompTIA Linux+ (XK0-005)", issuer: "CompTIA" },
      { name: "Microsoft Certified: Windows Server Hybrid Administrator Associate", issuer: "Microsoft" }
    ],
    interviewTopics: [
      { category: "Systems & Active Directory", topics: ["Explain the order of Group Policy processing (LSDOU)", "How to troubleshoot a Linux server with 100% CPU usage using `top` and `kill`", "Difference between RAID 5 and RAID 10 in terms of performance and drive redundancy", "How does DHCP assignment work (DORA: Discover, Offer, Request, Acknowledge)?"] }
    ],
    relatedRoles: ["Network Administrator", "DevOps Engineer", "Cloud Engineer", "Database Administrator"]
  },

  {
    id: "network-administrator",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "Network Administrator",
    slug: "network-administrator",
    badge: "High Demand",
    shortDescription: "Configures and maintains routers, switches, firewalls, VLANs, Wi-Fi networks, and VPNs.",
    description: "A Network Administrator is responsible for the day-to-day operation, configuration, and troubleshooting of an organization's computer networks. They configure Cisco/Juniper switches and routers, setup VLANs, firewalls, Wi-Fi access points, and VPN tunnels.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "Diploma (CS/IT/ECE)"],
    salaryRange: { entry: "₹3.5 - ₹7 LPA", mid: "₹8 - ₹16 LPA", senior: "₹17 - ₹32+ LPA" },
    responsibilities: [
      "Configure and maintain network switches, routers, and firewalls (Cisco, Juniper, Fortinet).",
      "Design and implement VLANs, subnets, inter-VLAN routing, and Spanning Tree Protocol (STP).",
      "Configure site-to-site IPsec VPNs and client Remote Access VPNs.",
      "Monitor network traffic, bandwidth utilization, and latency using SNMP and Wireshark.",
      "Troubleshoot network connectivity issues, packet drops, and cable infrastructure."
    ],
    prerequisites: [
      { name: "Computer Networking Basics", desc: "OSI Model, TCP/IP, IP addressing, Subnetting, Ethernet cables.", required: true },
      { name: "Hardware & Cables", desc: "Cat6 cables, RJ-45 crimping, SFP optical modules, Patch panels.", required: true },
      { name: "Command Line Basics", desc: "Familiarity with CLI interfaces and basic terminal commands.", required: true },
      { name: "Logical Problem Solving", desc: "Systematic troubleshooting from physical layer up to application layer.", required: true }
    ],
    technologies: [
      { name: "Cisco IOS & CLI Configuration", category: "Network OS", priority: "MUST LEARN", description: "Switch and router command line configuration, show commands, running-config." },
      { name: "VLANs & Inter-VLAN Routing", category: "Switching", priority: "MUST LEARN", description: "802.1Q trunking, Access ports, Trunk ports, Router-on-a-Stick, Layer 3 Switches." },
      { name: "Routing Protocols (OSPF / EIGRP / BGP Basics)", category: "Routing", priority: "MUST LEARN", description: "Dynamic routing tables, link-state routing, path calculation." },
      { name: "Network Services (DHCP, DNS, NAT, ACLs)", category: "Core Services", priority: "MUST LEARN", description: "Configuring DHCP pools, Static/Dynamic NAT, Access Control Lists." },
      { name: "Spanning Tree Protocol (STP / RSTP)", category: "Switching", priority: "HIGH PRIORITY", description: "Preventing Layer 2 switching loops, Root Bridge election." },
      { name: "VPNs (IPsec / OpenVPN / WireGuard)", category: "Security", priority: "HIGH PRIORITY", description: "Site-to-Site tunnels, encryption, remote worker access." },
      { name: "Wireshark Packet Analysis", category: "Troubleshooting", priority: "HIGH PRIORITY", description: "Capturing and diagnosing packet latency, drops, and retransmissions." },
      { name: "Network Automation (Python & Netmiko)", category: "Automation", priority: "GOOD TO KNOW", description: "Automating bulk configuration changes across 50+ network switches." }
    ],
    tools: [
      { name: "Cisco Packet Tracer / GNS3 / EVE-NG", priority: "MUST LEARN", purpose: "Network simulation and lab topology design." },
      { name: "Wireshark", priority: "MUST LEARN", purpose: "Packet sniffing and network protocol troubleshooting." },
      { name: "PuTTY / SecureCRT", priority: "MUST LEARN", purpose: "SSH/Console terminal client for network devices." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "OSI Model & IP Subnetting", topics: ["OSI 7 Layers vs TCP/IP Protocol Stack", "Binary to Decimal conversion, IPv4 Subnetting & CIDR calculations", "Cisco CLI navigation (User EXEC, Privileged EXEC, Global Config mode)"], milestone: "Subnet an enterprise IP block (e.g. 192.168.1.0/24) into 4 departmental subnets." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "VLANs & Switch Configuration", topics: ["Creating VLANs, assigning Access Ports and Trunk Ports (802.1Q)", "Router-on-a-Stick and Layer 3 Switch Inter-VLAN routing", "Spanning Tree Protocol (STP/RSTP) configuration"], milestone: "Build a multi-VLAN enterprise campus network in Cisco Packet Tracer." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Packet Tracer / GNS3 Simulations", topics: ["Building complex multi-router network topologies in GNS3 / EVE-NG", "Configuring virtual Cisco IOS images"], milestone: "Design a complete corporate network topology with redundant gateways (HSRP)." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Routing Protocols (OSPF) & NAT", topics: ["Configuring single-area and multi-area OSPF routing", "Configuring NAT/PAT (Port Address Translation) for internet connectivity", "Standard and Extended Access Control Lists (ACLs) to filter traffic"], milestone: "Configure a multi-router OSPF network with internet NAT and ACL security rules." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "VPNs, Wireshark & Wireless", topics: ["Site-to-Site IPsec VPN tunnel configuration", "Enterprise Wireless LAN Controllers (WLC) and Access Points", "Wireshark packet analysis for network troubleshooting", "Python network automation basics with Netmiko"], milestone: "Establish an encrypted IPsec VPN tunnel connecting two simulated branch offices." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Network Designs", topics: ["Enterprise Campus Network Design Blueprint", "Automated switch configuration backup script in Python", "Network security audit and port security enforcement"], milestone: "Complete 3 comprehensive enterprise network design projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Network Topology Showcase", topics: ["GitHub repository with Packet Tracer (.pkt) / GNS3 lab files", "Detailed network topology diagrams with IP addressing tables", "Python network configuration automation scripts"], milestone: "A professional Network Administrator portfolio with downloadable lab files." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "CCNA Technical Scenarios", topics: ["Walk through how a packet travels from a host in VLAN 10 to a server in VLAN 20", "How does Spanning Tree Protocol (STP) choose the Root Bridge and block ports?", "Explain the difference between Static NAT, Dynamic NAT, and PAT", "How to troubleshoot a host that has an APIPA address (169.254.x.x)"], milestone: "Ace technical network administrator scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning Cisco Certified Network Associate (CCNA 200-301)", "Network Administrator resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Network Administrator." }
    ],
    projects: [
      { tier: "Beginner", title: "Multi-Department Corporate VLAN & Inter-VLAN Routing Lab", tech: ["Cisco Packet Tracer", "VLANs", "802.1Q", "Layer 3 Switch", "DHCP"], description: "Designs and configures 4 segmented departmental VLANs with Layer 3 inter-VLAN routing and automated DHCP pools." },
      { tier: "Intermediate", title: "Enterprise Multi-Branch OSPF & IPsec VPN Network", tech: ["GNS3 / Packet Tracer", "OSPF", "IPsec VPN", "NAT/PAT", "ACLs"], description: "Connects Headquarters with two regional branches using multi-area OSPF and encrypted IPsec site-to-site VPN tunnels." },
      { tier: "Production / Capstone", title: "Automated Multi-Device Network Configuration & Telemetry Tool", tech: ["Python", "Netmiko", "NAPALM", "Cisco IOS", "Wireshark"], description: "Python automation script connecting over SSH to 20+ switches to deploy standardized VLAN configs and backup running-configs." }
    ],
    certifications: [
      { name: "Cisco Certified Network Associate (CCNA 200-301)", issuer: "Cisco" },
      { name: "CompTIA Network+ (N10-008)", issuer: "CompTIA" }
    ],
    interviewTopics: [
      { category: "Routing & Switching", topics: ["Explain the difference between a Collision Domain and a Broadcast Domain", "How does ARP (Address Resolution Protocol) map IP addresses to MAC addresses?", "Explain OSPF neighbor states (Down, Init, 2-Way, ExStart, Exchange, Loading, Full)", "What happens when a switch receives a frame with an unknown destination MAC address?"] }
    ],
    relatedRoles: ["Network Engineer", "System Administrator", "Cybersecurity Analyst", "Cloud Engineer"]
  },

  {
    id: "network-engineer",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "Network Engineer",
    slug: "network-engineer",
    badge: "High Demand",
    shortDescription: "Architects enterprise WANs, BGP routing, Software-Defined Networking (SD-WAN), and datacenter networks.",
    description: "A Network Engineer designs, builds, and optimizes large-scale enterprise networks, wide area networks (WAN), BGP routing policies, datacenter spine-leaf fabrics, and modern Software-Defined Networking (SD-WAN) architectures.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science", "ECE"],
    salaryRange: { entry: "₹5 - ₹9.5 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹45+ LPA" },
    responsibilities: [
      "Design and implement enterprise WAN, BGP routing policies, and MPLS/SD-WAN networks.",
      "Architect high-throughput datacenter network fabrics (Spine-Leaf topology, VXLAN, EVPN).",
      "Implement advanced network security with Next-Gen Firewalls (Palo Alto, Fortinet) and VPNs.",
      "Automate network infrastructure testing and deployment using Python, Ansible, and REST APIs.",
      "Ensure high availability and sub-second failover using BFD, HSRP/VRRP, and load balancers."
    ],
    prerequisites: [
      { name: "Solid Networking Fundamentals", desc: "CCNA level knowledge: Subnetting, OSPF, VLANs, TCP/IP.", required: true },
      { name: "Linux & CLI Experience", desc: "Linux networking commands, routing tables, SSH.", required: true },
      { name: "Python Scripting", desc: "Automating network configuration tasks.", required: true },
      { name: "Analytical Troubleshooting", desc: "Resolving complex routing loops and latency bottlenecks.", required: true }
    ],
    technologies: [
      { name: "Border Gateway Protocol (BGP)", category: "Routing", priority: "MUST LEARN", description: "eBGP, iBGP, AS numbers, path attributes (AS_PATH, Local Pref, MED), route reflectors." },
      { name: "Datacenter Fabrics (Spine-Leaf & VXLAN)", category: "Datacenter", priority: "MUST LEARN", description: "Leaf-spine topology, EVPN-VXLAN network virtualization, overlay/underlay." },
      { name: "SD-WAN (Software-Defined WAN)", category: "WAN", priority: "MUST LEARN", description: "Cisco SD-WAN / Fortinet, centralized policy management, application routing." },
      { name: "Next-Gen Firewalls & Security (Palo Alto / Fortinet)", category: "Security", priority: "HIGH PRIORITY", description: "Zone-based policies, SSL decryption, App-ID, IPS signatures." },
      { name: "Network Automation (Ansible & Python / Nornir)", category: "Automation", priority: "HIGH PRIORITY", description: "Automated network provisioning, Jinja2 templates, Git-driven network pipelines." },
      { name: "High Availability & Redundancy (HSRP / VRRP / BFD)", category: "High Availability", priority: "HIGH PRIORITY", description: "First Hop Redundancy, Bidirectional Forwarding Detection for fast sub-50ms failover." },
      { name: "MPLS & Traffic Engineering", category: "Service Provider", priority: "GOOD TO KNOW", description: "Label distribution, LDP, MPLS Layer 3 VPNs." }
    ],
    tools: [
      { name: "GNS3 / EVE-NG", priority: "MUST LEARN", purpose: "Emulating complex multi-vendor network fabrics." },
      { name: "Ansible", priority: "MUST LEARN", purpose: "Automated network device configuration." },
      { name: "Wireshark", priority: "MUST LEARN", purpose: "Deep packet inspection and protocol decoding." },
      { name: "VS Code & Git", priority: "MUST LEARN", purpose: "Network as Code authoring." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Advanced OSPF & First Hop Redundancy", topics: ["Multi-Area OSPF: LSA Types (1-5), Stub & NSSA areas, Route Summarization", "First Hop Redundancy Protocols: HSRP and VRRP configuration and tuning", "Bidirectional Forwarding Detection (BFD) for sub-second failure detection"], milestone: "Build a high-availability dual-core campus network with sub-second failover in EVE-NG." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "BGP Routing Protocol Deep Dive", topics: ["eBGP vs iBGP peering, Autonomous Systems (AS)", "BGP Path Attributes: Weight, Local Preference, AS-Path Prepending, MED", "BGP Route Filtering with Route-Maps, Prefix-Lists, and Community strings", "BGP Route Reflectors for scaling iBGP meshes"], milestone: "Configure a multi-homed BGP enterprise network connected to two simulated ISPs." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "Network Automation with Ansible & Jinja2", topics: ["Writing Ansible playbooks for Cisco IOS and Arista devices", "Templating switch and router configurations with Jinja2", "Enforcing Git-based Network as Code version control"], milestone: "Deploy standardized OSPF and BGP configurations to 10 routers using Ansible." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Datacenter Spine-Leaf & VXLAN EVPN", topics: ["Modern Datacenter Architecture: Spine-Leaf topology vs Traditional 3-Tier", "Underlay routing vs Overlay networks", "VXLAN encapsulation and EVPN (Ethernet VPN) control plane"], milestone: "Build a virtualized 4-switch Datacenter Spine-Leaf fabric running EVPN-VXLAN." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "SD-WAN & Next-Gen Firewalls", topics: ["Software-Defined WAN (SD-WAN) Architecture: Control Plane (vSmart), Management (vManage), Data Plane", "Application-aware routing based on jitter, loss, and latency", "Configuring Next-Gen Firewall zone policies and SSL decryption"], milestone: "Design and test an SD-WAN topology with automated path switching upon latency degradation." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Enterprise Engineering Blueprints", topics: ["Global Enterprise Multi-Cloud Network Architecture", "Zero-Touch Provisioning (ZTP) pipeline for network switches", "Network monitoring and telemetry via SNMP and Streaming Telemetry (gNMI)"], milestone: "Deliver 3 comprehensive enterprise network engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "Network Engineering Portfolio", topics: ["GitHub repository with Ansible network playbooks and EVE-NG lab files", "Detailed network architecture blueprints and IP allocation plans", "Technical case studies on BGP traffic engineering"], milestone: "A professional Network Engineering portfolio showcasing BGP and SD-WAN." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Advanced Network Architecture Interviews", topics: ["BGP Best Path Selection algorithm step-by-step (Weight, Local Pref, Originate, AS-Path, Origin, MED...)", "Why is Spine-Leaf topology preferred over 3-tier architecture in modern datacenters?", "Explain how VXLAN encapsulates Layer 2 Ethernet frames inside Layer 3 UDP packets", "How does SD-WAN measure link health and execute policy-based steering?"], milestone: "Ace technical CCNP-level network architecture interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Certifications & Placement", topics: ["Earning Cisco Certified Network Professional (CCNP Enterprise)", "Network Engineer resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Network Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Multi-Homed Enterprise BGP Dual-ISP Peering Lab", tech: ["EVE-NG / GNS3", "BGP", "Route-Maps", "Prefix-Lists", "Cisco IOS"], description: "Simulates enterprise dual-homed internet connection with BGP route policies, local preference tuning, and AS-path prepending." },
      { tier: "Intermediate", title: "Automated Network Provisioning with Ansible & Jinja2", tech: ["Ansible", "Jinja2", "Python", "Cisco IOS", "Git"], description: "Network-as-Code pipeline generating and applying validated configurations across 15 switches and routers." },
      { tier: "Production / Capstone", title: "Datacenter Spine-Leaf Fabric with EVPN-VXLAN & SD-WAN Interconnect", tech: ["EVE-NG", "Arista / Cisco", "EVPN-VXLAN", "BGP Underlay", "SD-WAN"], description: "Complete modern datacenter fabric featuring redundant spine-leaf switches, EVPN-VXLAN multi-tenancy, and SD-WAN branch interconnect." }
    ],
    certifications: [
      { name: "Cisco Certified Network Professional (CCNP Enterprise)", issuer: "Cisco" },
      { name: "Juniper Networks Certified Associate / Specialist (JNCIA/JNCIS)", issuer: "Juniper" }
    ],
    interviewTopics: [
      { category: "BGP & Datacenter Fabrics", topics: ["Recite the BGP Best Path Selection algorithm in correct order", "Explain why iBGP requires a full mesh or Route Reflectors (Split Horizon rule)", "How does EVPN solve the ARP flooding problem in large Layer 2 datacenters?", "Difference between Underlay Network (OSPF/eBGP) and Overlay Network (VXLAN)"] }
    ],
    relatedRoles: ["Network Administrator", "Cloud Engineer", "System Administrator", "Cybersecurity Analyst"]
  },

  {
    id: "systems-engineer",
    careerFamily: "DATABASE & SYSTEMS",
    roleName: "Systems Engineer",
    slug: "systems-engineer",
    badge: "High Demand",
    shortDescription: "Integrates complex hardware, operating systems, storage, and networking into cohesive enterprise systems.",
    description: "A Systems Engineer designs, implements, integrates, and manages complex multidisciplinary IT systems. They combine operating systems, compute hardware, virtualization, storage architectures (SAN/NAS), networking, and automated infrastructure provisioning.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹5 - ₹9.5 LPA", mid: "₹10 - ₹20 LPA", senior: "₹22 - ₹45+ LPA" },
    responsibilities: [
      "Design, install, configure, and maintain enterprise server hardware and operating systems.",
      "Architect enterprise virtualization and storage solutions (VMware vSphere, SAN/NAS, iSCSI).",
      "Automate systems provisioning and patch management using Ansible, Puppet, or Terraform.",
      "Conduct performance benchmarking, stress testing, and capacity planning.",
      "Ensure high availability, data redundancy, and disaster recovery across hybrid infrastructures."
    ],
    prerequisites: [
      { name: "Operating Systems (Linux & Windows)", desc: "Kernel tuning, user management, process management, filesystems.", required: true },
      { name: "Computer Architecture & Hardware", desc: "RAID controllers, server motherboards, BIOS/UEFI, IPMI/iDRAC.", required: true },
      { name: "Networking Fundamentals", desc: "TCP/IP, VLANs, SAN storage protocols (iSCSI, Fibre Channel).", required: true },
      { name: "Scripting & Automation", desc: "Python, Bash, or PowerShell.", required: true }
    ],
    technologies: [
      { name: "Linux & Windows Enterprise OS", category: "OS Core", priority: "MUST LEARN", description: "RHEL, Ubuntu Server, Windows Server, systemd, active directory." },
      { name: "Enterprise Virtualization (VMware vSphere / KVM)", category: "Virtualization", priority: "MUST LEARN", description: "ESXi, vCenter, vMotion, High Availability (HA), Distributed Resource Scheduler (DRS)." },
      { name: "Storage Area Networks (SAN / NAS / iSCSI)", category: "Storage", priority: "MUST LEARN", description: "LUN provisioning, Fibre Channel, iSCSI targets, multipathing." },
      { name: "Automation & Config Management (Ansible / Terraform)", category: "Automation", priority: "MUST LEARN", description: "Infrastructure automation, declarative configuration management." },
      { name: "High Availability & Clustering (Pacemaker / Corosync)", category: "High Availability", priority: "HIGH PRIORITY", description: "Failover clustering, shared storage fencing (STONITH)." },
      { name: "Enterprise Monitoring (Prometheus / Grafana / Zabbix)", category: "Monitoring", priority: "HIGH PRIORITY", description: "Metrics collection, hardware health alerts, capacity planning." },
      { name: "Hybrid Cloud Integration", category: "Cloud", priority: "GOOD TO KNOW", description: "Connecting on-premise datacenter clusters with AWS/Azure." }
    ],
    tools: [
      { name: "VMware vSphere / Proxmox", priority: "MUST LEARN", purpose: "Enterprise virtualization management." },
      { name: "Ansible", priority: "MUST LEARN", purpose: "Automated systems configuration." },
      { name: "Linux CLI & PowerShell", priority: "MUST LEARN", purpose: "System administration and scripting." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Systems Hardware & OS Internals", topics: ["Server Hardware Architecture: RAID levels (0, 1, 5, 6, 10), IPMI/iDRAC remote management", "Linux OS Internals: Kernel tuning (sysctl), Memory management (HugePages, swap), I/O Schedulers", "Windows Server clustering and storage spaces"], milestone: "Configure a multi-disk RAID array with LVM and custom Linux kernel tuning." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Enterprise Virtualization (vSphere / Proxmox)", topics: ["VMware ESXi and vCenter Server deployment", "Configuring vSphere High Availability (HA) and DRS clusters", "vMotion live virtual machine migration without downtime"], milestone: "Deploy a high-availability 2-node virtualization cluster with live VM migration." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Storage Protocols (iSCSI & NFS)", topics: ["Setting up dedicated storage networks with TrueNAS / Open-E", "Configuring iSCSI initiators and targets with multipath I/O on Linux"], milestone: "Connect virtualized hypervisors to a dedicated iSCSI shared storage SAN." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Ansible Systems Automation", topics: ["Writing Ansible playbooks for automated server provisioning and patching", "Automating OS hardening (CIS benchmarks) across 20+ servers", "Managing system configurations dynamically via Git"], milestone: "Automate the complete provisioning and security hardening of a web cluster using Ansible." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Clustering & Disaster Recovery", topics: ["Linux High Availability clustering with Pacemaker and Corosync", "Shared storage fencing (STONITH) to prevent split-brain conditions", "Designing and testing Disaster Recovery (DR) plans with automated failover"], milestone: "Build a 2-node active-passive PostgreSQL cluster with automated Pacemaker failover." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Systems Engineering", topics: ["Enterprise Datacenter Virtualization Blueprint", "Automated Bare-Metal Provisioning Pipeline (PXE / Kickstart)", "Infrastructure Capacity Planning & Monitoring Stack"], milestone: "Complete 3 comprehensive systems engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Systems Engineering Portfolio", topics: ["GitHub repository with Ansible playbooks, Terraform scripts, and architecture diagrams", "Hardware sizing calculations and capacity planning reports", "Detailed technical runbooks"], milestone: "A professional Systems Engineer portfolio showcasing infrastructure automation." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Systems Engineering Whiteboarding", topics: ["How does VMware vSphere HA detect host failure and restart VMs?", "Explain how iSCSI multipathing prevents storage connection dropouts", "What is a split-brain scenario in clustering and how does STONITH/Fencing resolve it?", "Troubleshoot a system where disk write speeds have degraded by 80%"], milestone: "Ace technical systems engineering scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning Red Hat Certified System Administrator (RHCSA) or VMware VCP", "Systems Engineer resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Systems Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Linux OS Hardening & Provisioning with Ansible", tech: ["Ansible", "Ubuntu / RHEL", "CIS Benchmarks", "Bash", "Git"], description: "Ansible automation playbook configuring security baselines, SSH hardening, firewall rules, and automated updates." },
      { tier: "Intermediate", title: "Enterprise Virtualization & iSCSI SAN Storage Cluster", tech: ["Proxmox / VMware", "TrueNAS", "iSCSI", "Multipath I/O", "VLANs"], description: "High-availability virtualized infrastructure backed by dedicated TrueNAS iSCSI SAN with multi-path network redundancy." },
      { tier: "Production / Capstone", title: "High-Availability Failover Cluster with Pacemaker & DRBD Shared Storage", tech: ["Linux", "Pacemaker", "Corosync", "DRBD", "STONITH", "PostgreSQL"], description: "Active-passive high-availability database cluster with real-time block-level replication (DRBD) and automated sub-15s failover." }
    ],
    certifications: [
      { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat" },
      { name: "VMware Certified Professional – Data Center Virtualization (VCP-DCV)", issuer: "VMware" }
    ],
    interviewTopics: [
      { category: "Systems Architecture", topics: ["Explain how Linux memory management handles caching and the difference between Buffers and Cached memory", "What is STONITH (Shoot The Other Node In The Head) and why is it essential in high-availability clusters?", "How does vMotion migrate a running VM's memory without dropping active network connections?", "Difference between SAN (Storage Area Network) and NAS (Network Attached Storage)"] }
    ],
    relatedRoles: ["System Administrator", "DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"]
  }
];

module.exports = databaseAndSystemsRoles;

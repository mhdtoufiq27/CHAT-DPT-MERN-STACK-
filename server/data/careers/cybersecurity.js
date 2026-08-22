/**
 * Cybersecurity Career Roles (8 Roles)
 */

const cybersecurityRoles = [
  {
    id: "cybersecurity-analyst",
    careerFamily: "CYBERSECURITY",
    roleName: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    badge: "High Demand",
    shortDescription: "Protects enterprise systems, monitors threats, analyzes vulnerabilities, and responds to security incidents.",
    description: "A Cybersecurity Analyst is responsible for protecting an organization's computer networks, systems, and digital assets against cyberattacks, data breaches, and unauthorized access. They monitor network traffic, perform vulnerability assessments, implement security controls, and respond to incidents.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Cybersecurity", "CS/IT"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹20 - ₹40+ LPA" },
    responsibilities: [
      "Monitor security events, logs, and network traffic for suspicious activity and intrusions.",
      "Conduct regular vulnerability scans using Nessus or Qualys and assist in remediation.",
      "Analyze malware, phishing emails, and security alerts using threat intelligence feeds.",
      "Implement and maintain endpoint detection and response (EDR), firewalls, and antivirus solutions.",
      "Develop incident response plans, security policies, and user security awareness training."
    ],
    prerequisites: [
      { name: "Computer Networking", desc: "TCP/IP, OSI model, DNS, DHCP, Subnetting, Ports/Protocols, Firewalls.", required: true },
      { name: "Operating Systems (Linux & Windows)", desc: "Command line, Windows event logs, Linux syslogs, file permissions.", required: true },
      { name: "Basic Security Concepts", desc: "CIA Triad (Confidentiality, Integrity, Availability), Cryptography, Authentication.", required: true },
      { name: "Scripting Basics", desc: "Python or Bash for automating log analysis and scanning tasks.", required: true }
    ],
    technologies: [
      { name: "Networking & Protocols", category: "Core Networking", priority: "MUST LEARN", description: "Packet analysis, Wireshark, TCP/UDP, TLS/SSL, ARP, ICMP, DNS." },
      { name: "SIEM Systems (Splunk / Microsoft Sentinel)", category: "Monitoring", priority: "MUST LEARN", description: "Log ingestion, SPL queries, KQL queries, dashboard creation, correlation rules." },
      { name: "Vulnerability Management (Nessus / OpenVAS)", category: "Scanning", priority: "MUST LEARN", description: "Scanning networks, identifying CVEs, CVSS scoring, patch prioritization." },
      { name: "Endpoint Security & EDR (CrowdStrike / Defender)", category: "EDR", priority: "MUST LEARN", description: "Host-based monitoring, detecting behavioral anomalies, process trees." },
      { name: "Python / Bash for Security", category: "Scripting", priority: "HIGH PRIORITY", description: "Parsing logs, querying APIs, automating IP reputation lookups." },
      { name: "MITRE ATT&CK Framework", category: "Threat Framework", priority: "HIGH PRIORITY", description: "Mapping adversary Tactics, Techniques, and Procedures (TTPs)." },
      { name: "Firewalls & IDS/IPS (Snort / Suricata)", category: "Network Defense", priority: "HIGH PRIORITY", description: "Configuring packet inspection rules and intrusion detection." },
      { name: "Phishing & Email Security", category: "Email Defense", priority: "GOOD TO KNOW", description: "Analyzing email headers (SPF, DKIM, DMARC), sandbox detonation." },
      { name: "Incident Response Lifecycle (NIST / SANS)", category: "Incident Response", priority: "HIGH PRIORITY", description: "Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned." }
    ],
    tools: [
      { name: "Wireshark", priority: "MUST LEARN", purpose: "Deep packet inspection and network traffic analysis." },
      { name: "Splunk / Sentinel", priority: "MUST LEARN", purpose: "Security Information and Event Management (SIEM)." },
      { name: "Nmap & Nessus", priority: "MUST LEARN", purpose: "Network mapping and vulnerability scanning." },
      { name: "VirusTotal & AbuseIPDB", priority: "MUST LEARN", purpose: "Threat intelligence and indicator of compromise (IoC) verification." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Networking & Security Fundamentals", topics: ["OSI 7 Layers, TCP 3-Way Handshake, Port Numbers (22, 53, 80, 443, etc.)", "CIA Triad, Authentication vs Authorization, Symmetric vs Asymmetric Cryptography", "Linux & Windows CLI navigation, File permissions, and Registry basics"], milestone: "Capture and analyze a network packet stream with Wireshark to identify unencrypted traffic." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Port Scanning & Vulnerability Assessment", topics: ["Nmap scanning techniques (SYN scan, Service versioning, NSE scripts)", "Vulnerability scanners: Nessus and OpenVAS setup and scan configuration", "Understanding CVE database, CWE classifications, and CVSS v3.1 scoring"], milestone: "Conduct a full vulnerability audit on a simulated vulnerable VM (Metasploitable) and draft a remediation report." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "SIEM & Log Analysis (Splunk)", topics: ["Setting up Splunk Forwarders to ingest Windows Event Logs & Linux Syslogs", "Splunk Search Processing Language (SPL): search, stats, eval, where, table", "Creating alert correlation rules for brute-force login attempts"], milestone: "Build a Splunk security dashboard tracking failed SSH logins and anomalous outbound traffic." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Threat Detection & MITRE ATT&CK", topics: ["Mapping alerts to MITRE ATT&CK matrices (Initial Access -> Exfiltration)", "Analyzing malicious email headers, checking SPF, DKIM, and DMARC records", "Endpoint Detection & Response (EDR) process tree analysis", "Python scripting for automated IP and file hash reputation lookups"], milestone: "Write a Python script that ingests firewall logs and automatically checks suspicious IPs against AbuseIPDB." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Incident Response & Forensics Basics", topics: ["SANS/NIST Incident Response Steps (Containment, Eradication, Recovery)", "Live memory and disk acquisition basics (FTK Imager, Volatility)", "Investigating ransomware outbreaks and lateral movement"], milestone: "Complete an end-to-end incident response simulation on a compromised Windows domain." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Real-World Security Labs", topics: ["Building a home SOC lab with VirtualBox/Proxmox", "Configuring Suricata IDS rules to detect SQL injection and port scans", "Writing an enterprise security policy and incident response runbook"], milestone: "Complete 3 comprehensive cybersecurity lab projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Security Portfolio & Write-Ups", topics: ["Publishing vulnerability assessment and CTF write-ups on GitHub/Medium", "Documented SOC home lab network architecture diagrams", "TryHackMe / HackTheBox public profile badges"], milestone: "A published portfolio showcasing home lab builds and threat detection analysis." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "SOC & Security Scenario Interviews", topics: ["Walk through how you would respond to an alert indicating Cobalt Strike beaconing", "Explain the difference between a False Positive and a False Negative", "How does a SYN flood DDoS attack work and how to mitigate it?", "Explain how DNS tunneling is used for data exfiltration"], milestone: "Ace technical security analyst scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Career Launch", topics: ["Earning CompTIA Security+ or CySA+", "Cybersecurity Analyst resume highlighting lab experience and certifications", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Cybersecurity Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "Enterprise SOC Home Lab with Splunk & Sysmon", tech: ["Splunk", "Sysmon", "Windows Server", "Ubuntu", "VirtualBox"], description: "Multi-VM lab environment ingesting Sysmon telemetry into Splunk with custom SPL dashboards detecting brute-force attacks." },
      { tier: "Intermediate", title: "Automated Threat Intelligence & IP Reputation Scanner", tech: ["Python", "VirusTotal API", "AbuseIPDB API", "Shodan", "SQLite"], description: "Python automation tool analyzing firewall log files, querying threat intelligence APIs, and outputting prioritized threat alerts." },
      { tier: "Production / Capstone", title: "Intrusion Detection System with Suricata & Automated Alerting", tech: ["Suricata IDS", "Snort Rules", "ELK Stack", "Python", "Telegram Bot"], description: "Network intrusion detection system with custom signatures detecting port scans and SQL injections, sending instant alerts to Telegram." }
    ],
    certifications: [
      { name: "CompTIA Security+ (SY0-701)", issuer: "CompTIA" },
      { name: "Certified Threat Intelligence Analyst (CTIA) / CySA+", issuer: "EC-Council / CompTIA" }
    ],
    interviewTopics: [
      { category: "Threats & Defense", topics: ["Explain the 6 stages of the NIST Incident Response lifecycle", "What is the difference between a Vulnerability, a Threat, and a Risk?", "How does an attacker use Pass-the-Hash for lateral movement?", "Explain the difference between Symmetric (AES) and Asymmetric (RSA) encryption"] }
    ],
    relatedRoles: ["SOC Analyst", "Penetration Tester", "Security Engineer", "Digital Forensics Analyst"]
  },

  {
    id: "soc-analyst",
    careerFamily: "CYBERSECURITY",
    roleName: "SOC Analyst",
    slug: "soc-analyst",
    badge: "High Demand",
    shortDescription: "Operates in 24/7 Security Operations Centers, triaging alerts, hunting threats, and containing attacks.",
    description: "A Security Operations Center (SOC) Analyst (Tier 1 / Tier 2) monitors organizational IT environments round-the-clock. They triage incoming security alerts from SIEMs and EDRs, determine false vs true positives, perform initial containment of infected endpoints, and escalate critical incidents.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "B.Sc (CS/IT)"],
    salaryRange: { entry: "₹4 - ₹7.5 LPA", mid: "₹8 - ₹16 LPA", senior: "₹18 - ₹32+ LPA" },
    responsibilities: [
      "Monitor SIEM consoles (Splunk, Microsoft Sentinel, QRadar) for real-time security alerts.",
      "Triage alerts to distinguish legitimate business operations from genuine cyberattacks.",
      "Perform endpoint containment on compromised machines using EDR tools (CrowdStrike, SentinelOne).",
      "Analyze malicious email attachments and URLs using online sandboxes (Any.Run, Hybrid Analysis).",
      "Document incident tickets with clear root cause, IoCs, and recommended remediation steps."
    ],
    prerequisites: [
      { name: "Networking Basics", desc: "IP addresses, Ports, Protocols (HTTP, DNS, SSH, RDP, SMB), Wireshark.", required: true },
      { name: "Operating Systems Knowledge", desc: "Windows security event IDs (4624, 4625, 4688, 4720), Linux log files.", required: true },
      { name: "Basic Cybersecurity Principles", desc: "Malware types, phishing mechanisms, social engineering.", required: true },
      { name: "Ticketing & Documentation", desc: "Clear technical communication and adherence to SLAs.", required: true }
    ],
    technologies: [
      { name: "SIEM Platforms (Splunk / Sentinel / QRadar)", category: "SIEM", priority: "MUST LEARN", description: "Writing queries, analyzing log timelines, filtering noise, creating tickets." },
      { name: "EDR Tools (CrowdStrike / Defender / SentinelOne)", category: "EDR", priority: "MUST LEARN", description: "Isolating endpoints, inspecting process creation trees, killing malicious processes." },
      { name: "Windows Event Log Analysis", category: "OS Telemetry", priority: "MUST LEARN", description: "Security Event IDs for logons, privilege escalations, process execution, service installs." },
      { name: "Network Packet Analysis (Wireshark / Zeek)", category: "Network Analysis", priority: "MUST LEARN", description: "Detecting anomalous DNS requests, beaconing, and plaintext credential transfers." },
      { name: "Sandbox Detonation (Any.Run / VirusTotal)", category: "Malware Analysis", priority: "HIGH PRIORITY", description: "Analyzing behavioral malware execution in isolated virtual environments." },
      { name: "Email Security Analysis", category: "Email", priority: "HIGH PRIORITY", description: "Extracting headers, analyzing phishing campaigns, decoding obfuscated URLs." },
      { name: "SOAR Basics (Security Orchestration & Automation)", category: "Automation", priority: "GOOD TO KNOW", description: "Automated playbooks for blocking malicious IPs and locking accounts." },
      { name: "MITRE ATT&CK Mapping", category: "Threat Framework", priority: "HIGH PRIORITY", description: "Categorizing attack behavior across the MITRE matrix." }
    ],
    tools: [
      { name: "Splunk / Sentinel", priority: "MUST LEARN", purpose: "Primary SIEM dashboard." },
      { name: "Wireshark", priority: "MUST LEARN", purpose: "Packet capture and protocol analysis." },
      { name: "Any.Run / Hybrid Analysis", priority: "MUST LEARN", purpose: "Interactive malware detonation sandboxes." },
      { name: "CyberChef", priority: "HIGH PRIORITY", purpose: "Decoding Base64, Hex, and de-obfuscating malicious scripts." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-3", focus: "Windows Telemetry & Networking", topics: ["Core Windows Event IDs (4624 Logon, 4625 Failed Logon, 4688 Process Creation, 7045 Service Install)", "Linux Syslog structure and auth.log analysis", "TCP/IP, Common Ports, and Wireshark filter syntax"], milestone: "Identify suspicious PowerShell execution from Windows event logs." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 4-7", focus: "SIEM Querying & Alert Triage", topics: ["Splunk SPL & Microsoft Sentinel KQL query mastery", "Investigating Brute Force, Account Lockouts, and Privilege Escalation alerts", "Triage workflows: Differentiating False Positives from True Positives"], milestone: "Triage 20 simulated SOC alerts on TryHackMe / LetsDefend." },
      { step: 3, phase: "TOOLS", duration: "Week 8", focus: "CyberChef & Threat Intel Tools", topics: ["Decoding Base64, URL-encoded, and XOR obfuscated payloads with CyberChef", "Using VirusTotal, AbuseIPDB, Talos, and Shodan for IoC enrichment"], milestone: "De-obfuscate a malicious PowerShell dropper script using CyberChef." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 9-13", focus: "Phishing & EDR Investigation", topics: ["Deep-dive into Phishing Email Headers (Received hops, SPF/DKIM/DMARC pass/fail)", "Detonating suspicious attachments in Any.Run sandbox and tracking spawned processes", "EDR triage: Investigating parent-child process relationships (e.g. Word spawning cmd.exe)"], milestone: "Complete a full phishing investigation report with IoCs and remediation actions." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 14-17", focus: "Containment, Eradication & SOAR", topics: ["Network isolation of compromised endpoints via EDR", "Revoking compromised user sessions and resetting Kerberos tokens", "Understanding automated SOAR playbooks (Automated IP blocking on firewall)"], milestone: "Execute an end-to-end incident containment workflow for a ransomware infection." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 18-20", focus: "SOC Investigation Case Studies", topics: ["Building a multi-log SOC lab", "Documenting standard operating procedures (SOPs) for common alerts", "Threat hunting for Living-off-the-Land Binaries (LOLBins)"], milestone: "Publish 3 comprehensive SOC alert investigation write-ups." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 21", focus: "LetsDefend & TryHackMe Badges", topics: ["Verified LetsDefend SOC Analyst rank and TryHackMe Cyber Defense path badges", "GitHub repository with incident response runbooks and investigation templates", "LinkedIn profile optimization for SOC hiring"], milestone: "A professional SOC portfolio with public lab rankings and investigation reports." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 22-23", focus: "SOC Technical Scenarios", topics: ["What is your step-by-step process when you receive a Ransomware alert at 2 AM?", "Explain the difference between Windows Event ID 4624 Logon Type 2 (Interactive) and Logon Type 3 (Network)", "What are IoCs (Indicators of Compromise) vs IoAs (Indicators of Attack)?", "How do you investigate a suspicious PowerShell encoded command?"], milestone: "Pass technical SOC Tier-1 / Tier-2 scenario interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 24+", focus: "SOC Placement", topics: ["Resume targeting SOC Analyst L1 / Incident Responder roles", "Applying to MSSPs (Managed Security Service Providers) and corporate SOCs", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior SOC Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "Phishing Email Analysis & Sandbox Detonation Report", tech: ["Any.Run", "CyberChef", "VirusTotal", "Email Header Analysis"], description: "Full technical analysis of a real-world phishing campaign, detailing weaponized Excel macro, C2 domains, and remediation." },
      { tier: "Intermediate", title: "SOC Alert Triage & Sysmon Detection Lab", tech: ["Splunk", "Sysmon", "PowerShell", "MITRE ATT&CK"], description: "Configures custom Sysmon rules to detect LOLBins execution (certutil, mshta), generating actionable Splunk alerts." },
      { tier: "Production / Capstone", title: "Full-Cycle Ransomware Incident Response & Containment Case Study", tech: ["LetsDefend / Enterprise Lab", "EDR Simulation", "Splunk", "Wireshark"], description: "Complete documented investigation: initial access detection, lateral movement tracing, EDR host isolation, and executive briefing." }
    ],
    certifications: [
      { name: "Certified SOC Analyst (CSA)", issuer: "EC-Council" },
      { name: "CompTIA CySA+ (Cybersecurity Analyst)", issuer: "CompTIA" },
      { name: "Blue Team Level 1 (BTL1)", issuer: "Security Blue Team" }
    ],
    interviewTopics: [
      { category: "SOC Operations & Triage", topics: ["Explain the difference between Windows Logon Type 2, 3, and 10", "How do you differentiate a true brute-force attack from a legitimate user forgetting their password?", "What steps would you take if an EDR alerts that `calc.exe` spawned a network connection?", "Explain the difference between a False Positive and a True Positive with an example"] }
    ],
    relatedRoles: ["Cybersecurity Analyst", "Digital Forensics Analyst", "Penetration Tester", "Security Engineer"]
  },

  {
    id: "penetration-tester",
    careerFamily: "CYBERSECURITY",
    roleName: "Penetration Tester",
    slug: "penetration-tester",
    badge: "High Demand",
    shortDescription: "Conducts authorized simulated cyberattacks against networks, web apps, and systems to find vulnerabilities.",
    description: "A Penetration Tester (Ethical Hacker) evaluates the security posture of an organization by simulating real-world cyberattacks against web applications, internal/external networks, mobile apps, and cloud environments. They identify exploitable security flaws before malicious hackers can exploit them.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Cybersecurity", "CS/IT"],
    salaryRange: { entry: "₹5.5 - ₹10 LPA", mid: "₹11 - ₹22 LPA", senior: "₹24 - ₹48+ LPA" },
    responsibilities: [
      "Perform web application penetration testing based on OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR).",
      "Conduct network penetration testing against internal Active Directory domains and external perimeters.",
      "Identify, exploit, and document security vulnerabilities with proof-of-concept (PoC) exploits.",
      "Write comprehensive, professional penetration testing reports with risk ratings (CVSS) and remediation advice.",
      "Perform vulnerability validation and re-testing after development teams apply patches."
    ],
    prerequisites: [
      { name: "Deep Networking Knowledge", desc: "TCP/IP, Subnets, Routing, Protocols (HTTP, SMB, Kerberos, DNS, SSH).", required: true },
      { name: "Linux & Windows Systems", desc: "Command line proficiency, Windows Active Directory concepts, Linux permissions.", required: true },
      { name: "Web Application Basics", desc: "HTML, JavaScript, Cookies, Sessions, Headers, REST APIs, SQL.", required: true },
      { name: "Python / Bash Scripting", desc: "Writing custom exploit scripts and automating enumeration.", required: true }
    ],
    technologies: [
      { name: "Kali Linux / Parrot OS", category: "OS", priority: "MUST LEARN", description: "Industry-standard offensive security operating systems." },
      { name: "Burp Suite Professional / Community", category: "Web PenTesting", priority: "MUST LEARN", description: "Intercepting proxy, repeater, intruder, scanner, extensions." },
      { name: "OWASP Top 10 Vulnerabilities", category: "Web Security", priority: "MUST LEARN", description: "SQL Injection, XSS, IDOR, SSRF, Broken Access Control, Authentication flaws." },
      { name: "Network Enumeration & Scanning (Nmap)", category: "Network", priority: "MUST LEARN", description: "Port scanning, service enumeration, NSE vulnerability scripts." },
      { name: "Metasploit Framework", category: "Exploitation", priority: "MUST LEARN", description: "Exploitation modules, payloads (Meterpreter), listeners, encoders." },
      { name: "Active Directory Attacks (BloodHound / Mimikatz)", category: "Enterprise AD", priority: "HIGH PRIORITY", description: "Kerberoasting, AS-REP roasting, Pass-the-Hash, privilege escalation." },
      { name: "Privilege Escalation (Linux & Windows)", category: "Post-Exploitation", priority: "HIGH PRIORITY", description: "SUID binaries, sudo misconfigurations, unquoted service paths, token impersonation." },
      { name: "Python / Bash Exploit Scripting", category: "Automation", priority: "HIGH PRIORITY", description: "Custom exploit development and brute-forcing scripts." },
      { name: "Report Writing & CVSS Scoring", category: "Documentation", priority: "MUST LEARN", description: "Writing executive summaries and technical remediation steps." }
    ],
    tools: [
      { name: "Burp Suite", priority: "MUST LEARN", purpose: "Web application vulnerability discovery and exploitation." },
      { name: "Nmap", priority: "MUST LEARN", purpose: "Network port scanning and service fingerprinting." },
      { name: "Metasploit / msfconsole", priority: "MUST LEARN", purpose: "Exploit execution and payload generation." },
      { name: "BloodHound & Mimikatz", priority: "HIGH PRIORITY", purpose: "Active Directory path mapping and credential dumping." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Offensive Linux & Web Protocols", topics: ["Kali Linux tools and bash scripting", "HTTP Request/Response structure, Cookies, Session Tokens", "Port scanning, Service Enumeration, and Banner Grabbing with Nmap"], milestone: "Perform comprehensive network reconnaissance on target lab VMs." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-9", focus: "Burp Suite & OWASP Top 10", topics: ["Configuring Burp Suite as an intercepting browser proxy", "Exploiting SQL Injection (Union-based, Boolean, Time-based blind) & SQLMap", "Cross-Site Scripting (Reflected, Stored, DOM-based XSS)", "Insecure Direct Object References (IDOR) & Broken Access Control"], milestone: "Solve 30+ PortSwigger Web Security Academy labs." },
      { step: 3, phase: "TOOLS", duration: "Week 10", focus: "Metasploit & Exploitation Basics", topics: ["Searching and configuring Metasploit exploits and payloads", "Meterpreter commands: sysinfo, hashdump, shell, portfwd", "Generating reverse shell payloads with msfvenom"], milestone: "Successfully exploit a vulnerable application and establish a stable Meterpreter session." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 11-15", focus: "Privilege Escalation (Linux & Windows)", topics: ["Linux PrivEsc: SUID binaries, Sudo privileges (GTFOBins), Cron jobs, Capabilities", "Windows PrivEsc: Unquoted service paths, AlwaysInstallElevated, Token Impersonation (JuicyPotato)", "Automated enumeration scripts: LinPEAS and WinPEAS"], milestone: "Root 10 vulnerable machines on HackTheBox / TryHackMe." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 16-19", focus: "Active Directory Penetration Testing", topics: ["Active Directory Architecture: Domain Controllers, Kerberos, LDAP, Group Policies", "Kerberoasting and AS-REP Roasting to extract service account ticket hashes", "Active Directory attack graph mapping with BloodHound", "Pass-the-Hash and Pass-the-Ticket lateral movement"], milestone: "Compromise an entire multi-stage Active Directory lab from initial access to Domain Admin." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 20-22", focus: "Professional Penetration Testing Reports", topics: ["Writing executive summaries and detailed technical findings", "Calculating CVSS v3.1 vector scores", "Documenting concrete remediation recommendations for software engineers"], milestone: "Publish 3 professional penetration testing reports based on simulated client audits." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 23", focus: "HackTheBox / CTF Portfolio", topics: ["HackTheBox Pro Labs / Hacker rank profile", "GitHub repository with custom Python security tools and exploit PoCs", "Technical blog posts detailing ethical vulnerability disclosures"], milestone: "A professional penetration testing portfolio with live CTF rankings and sample reports." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 24-25", focus: "Technical Exploit Interviews", topics: ["Explain the difference between Reflected, Stored, and DOM-based XSS with code examples", "How does Kerberoasting work under the hood and how to detect/mitigate it?", "How would you bypass a WAF (Web Application Firewall) blocking SQLi payloads?", "Walk through your methodology when testing an API endpoint with no documentation"], milestone: "Ace technical penetration testing whiteboard and live practical assessments." },
      { step: 9, phase: "JOB READINESS", duration: "Week 26+", focus: "Certifications & Placements", topics: ["Preparing for eJPT (eLearnSecurity Junior Penetration Tester) or OSCP (OffSec)", "Penetration Tester resume highlighting methodologies and reporting skills", "Mock technical interviews"], milestone: "Secure employment as a Junior / Associate Penetration Tester." }
    ],
    projects: [
      { tier: "Beginner", title: "Web Vulnerability Assessment & Remediation Report", tech: ["Burp Suite", "OWASP Juice Shop", "SQLMap", "CVSS"], description: "Comprehensive security assessment of a modern web application covering XSS, SQLi, and IDOR with remediation guide." },
      { tier: "Intermediate", title: "Automated Multi-Target Subdomain & Port Recon Tool", tech: ["Python", "Nmap", "Sublist3r", "Requests", "Colorama"], description: "Custom Python tool performing automated subdomain enumeration, live HTTP probing, port scanning, and screenshot capture." },
      { tier: "Production / Capstone", title: "Enterprise Active Directory Compromise & Domain Takeover Lab", tech: ["Active Directory", "BloodHound", "Mimikatz", "Impacket", "Kerberoast"], description: "Full penetration test report documenting initial foothold, privilege escalation, Kerberoasting, and Domain Admin takeover." }
    ],
    certifications: [
      { name: "eJPT (eLearnSecurity Junior Penetration Tester)", issuer: "INE Security" },
      { name: "OSCP (Offensive Security Certified Professional)", issuer: "OffSec" },
      { name: "Certified Ethical Hacker (CEH Practical)", issuer: "EC-Council" }
    ],
    interviewTopics: [
      { category: "Web & Network Exploitation", topics: ["Explain Blind SQL Injection and how to extract data using boolean vs time delays", "How does Server-Side Request Forgery (SSRF) allow attackers to reach cloud metadata (169.254.169.254)?", "Explain how Kerberos ticket granting works (TGT vs TGS) and how Kerberoasting extracts hashes", "How to remediate IDOR (Insecure Direct Object Reference) vulnerabilities at the code level"] }
    ],
    relatedRoles: ["Ethical Hacker", "Cybersecurity Analyst", "Application Security Engineer", "Security Engineer"]
  },

  {
    id: "ethical-hacker",
    careerFamily: "CYBERSECURITY",
    roleName: "Ethical Hacker",
    slug: "ethical-hacker",
    badge: "High Demand",
    shortDescription: "Discovers zero-day vulnerabilities, participates in bug bounties, and performs red teaming assessments.",
    description: "An Ethical Hacker (White Hat Hacker) legally hacks into systems, applications, and IoT hardware to find security weaknesses before cybercriminals exploit them. They participate in bug bounty programs (HackerOne, Bugcrowd), perform red team simulations, and reverse-engineer software.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Cybersecurity"],
    salaryRange: { entry: "₹5 - ₹10 LPA", mid: "₹11 - ₹22 LPA", senior: "₹24 - ₹50+ LPA" },
    responsibilities: [
      "Find and responsibly disclose high-severity vulnerabilities via Bug Bounty programs.",
      "Perform red team adversary simulations mirroring advanced persistent threat (APT) actors.",
      "Conduct social engineering, phishing simulations, and physical security assessments.",
      "Reverse-engineer binary executables, firmware, and mobile applications to find security flaws.",
      "Develop custom proof-of-concept (PoC) exploits and automation scripts."
    ],
    prerequisites: [
      { name: "Linux & Scripting Mastery", desc: "Bash, Python, Linux system internals.", required: true },
      { name: "Deep Web & Network Protocols", desc: "Understanding HTTP, WebSocket, DNS, SMB, TLS at the byte level.", required: true },
      { name: "Offensive Mindset", desc: "Creative lateral thinking to bypass defensive filters.", required: true },
      { name: "Ethical & Legal Boundaries", desc: "Strict adherence to scopes, authorization, and responsible disclosure.", required: true }
    ],
    technologies: [
      { name: "Burp Suite & Proxy Extensions", category: "Web Hacking", priority: "MUST LEARN", description: "Advanced web application vulnerability discovery and manual request tampering." },
      { name: "Python / Go for Tooling", category: "Scripting", priority: "MUST LEARN", description: "Writing fast, concurrent reconnaissance and exploitation tools." },
      { name: "Bug Bounty Methodologies", category: "Recon & Scope", priority: "MUST LEARN", description: "Attack surface mapping, subdomain takeover, API fuzzing (FFUF, Amass)." },
      { name: "Reverse Engineering (Ghidra / IDA Free)", category: "Binary Analysis", priority: "HIGH PRIORITY", description: "Disassembling binaries, finding buffer overflows and logic flaws." },
      { name: "Red Team C2 Frameworks (Havoc / Mythic)", category: "Red Teaming", priority: "GOOD TO KNOW", description: "Command and control frameworks for adversary simulation." },
      { name: "Cloud Hacking (AWS / Azure Misconfigs)", category: "Cloud Security", priority: "HIGH PRIORITY", description: "S3 bucket exposure, IAM privilege escalation, SSRF to IMDSv2." },
      { name: "Mobile App Hacking (Frida / Objection)", category: "Mobile Security", priority: "GOOD TO KNOW", description: "SSL pinning bypass, dynamic method hooking on Android/iOS." }
    ],
    tools: [
      { name: "Burp Suite Pro", priority: "MUST LEARN", purpose: "Web vulnerability discovery." },
      { name: "FFUF / Gobuster", priority: "MUST LEARN", purpose: "High-speed directory and parameter fuzzing." },
      { name: "Ghidra", priority: "HIGH PRIORITY", purpose: "Reverse engineering executables." },
      { name: "Frida", priority: "GOOD TO KNOW", purpose: "Dynamic binary instrumentation for mobile apps." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Reconnaissance & Automation", topics: ["Asset Discovery: Subdomain enumeration (Amass, Subfinder, Assetfinder)", "Port scanning and service probing (Nmap, Naabu, HTTPX)", "Automating recon workflows with Bash and Python"], milestone: "Build a single-script reconnaissance pipeline that outputs live subdomains and open ports." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Web Exploitation & Fuzzing", topics: ["Directory and parameter fuzzing with FFUF", "Authentication bypass, OAuth flaws, and JWT manipulation", "Advanced SQL Injection, SSRF, and Cross-Site Request Forgery (CSRF)"], milestone: "Find and document 10 web vulnerabilities on test targets." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Burp Suite Extensions & Custom Tools", topics: ["Writing custom Python/Burp plugins", "Using Turbo Intruder for race conditions and rate-limit bypasses"], milestone: "Identify and exploit a Race Condition vulnerability using Turbo Intruder." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Cloud & API Security Testing", topics: ["REST and GraphQL API vulnerability testing (BOLA, BFLA)", "Cloud misconfiguration hunting: Open S3 buckets, AWS IAM privilege escalation paths", "Extracting cloud credentials via Server-Side Request Forgery (SSRF)"], milestone: "Exploit an SSRF vulnerability to extract simulated cloud IAM credentials." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Binary Reverse Engineering & Red Teaming", topics: ["Reverse engineering x86/x64 binaries with Ghidra", "Buffer overflow fundamentals (EIP overwrite, NOP sleds, shellcode)", "Red team adversary emulation basics"], milestone: "Develop a functional Stack Buffer Overflow exploit in a controlled lab." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Live Bug Bounty & Red Team Labs", topics: ["Participating in public Bug Bounty programs on HackerOne / Bugcrowd", "Writing clear, reproducible vulnerability reports", "Developing custom security tools in Go / Python"], milestone: "Submit valid vulnerability reports or earn Hall of Fame acknowledgments." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Bug Bounty Profile & GitHub", topics: ["Public HackerOne / Bugcrowd / CTF profile", "Open-source offensive security tools on GitHub", "Publishing technical vulnerability research blogs"], milestone: "A published portfolio showcasing responsible disclosures and tools." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Technical Red Team Q&A", topics: ["How to bypass modern Web Application Firewalls (WAF) using payload chunking", "Explain the difference between BOLA (Broken Object Level Authorization) and BFLA", "How to bypass SSL certificate pinning in mobile apps with Frida"], milestone: "Ace technical ethical hacking and red team interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Ethical Hacker resume highlighting bug bounty findings and security research", "Applying to consulting firms, red teams, and security agencies", "Mock technical interviews"], milestone: "Secure employment as an Ethical Hacker / Red Team Consultant." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated Multi-Engine Subdomain Takeover Scanner", tech: ["Go / Python", "DNS", "AWS S3 / GitHub Pages Fingerprints"], description: "Scans hundreds of target subdomains to identify dangling CNAME records vulnerable to subdomain takeover." },
      { tier: "Intermediate", title: "GraphQL & REST API Security Auditor", tech: ["Python", "Burp Suite", "GraphQL Introspection", "JWT"], description: "Tool testing for missing authentication, introspection leakage, BOLA flaws, and rate-limit vulnerabilities in APIs." },
      { tier: "Production / Capstone", title: "Custom Command & Control (C2) Agent & Payload Obfuscator", tech: ["Go / C", "TCP / HTTPS", "AES Encryption", "Process Injection"], description: "Adversary simulation tool demonstrating encrypted beaconing, in-memory execution, and bypass of signature detection." }
    ],
    certifications: [
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
      { name: "Offensive Security Certified Professional (OSCP)", issuer: "OffSec" }
    ],
    interviewTopics: [
      { category: "Offensive Security", topics: ["How does an attacker pivot through an internal network after compromising an initial host?", "What is the difference between Red Teaming and Penetration Testing?", "How does a Race Condition vulnerability occur and how can it be exploited in financial transactions?", "Explain how Server-Side Template Injection (SSTI) leads to Remote Code Execution (RCE)"] }
    ],
    relatedRoles: ["Penetration Tester", "Application Security Engineer", "Security Engineer", "Cybersecurity Analyst"]
  },

  {
    id: "security-engineer",
    careerFamily: "CYBERSECURITY",
    roleName: "Security Engineer",
    slug: "security-engineer",
    badge: "High Demand",
    shortDescription: "Designs, builds, and maintains defensive security infrastructure, encryption, and automated protection systems.",
    description: "A Security Engineer designs and implements the defensive security systems and tooling that protect an organization's digital architecture. They configure Next-Gen Firewalls, VPNs, SIEM infrastructure, secrets management, encryption keys (PKI), and automated vulnerability management pipelines.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹11 LPA", mid: "₹12 - ₹22 LPA", senior: "₹24 - ₹48+ LPA" },
    responsibilities: [
      "Architect and deploy enterprise defensive security tools (Firewalls, WAF, EDR, SIEM, IAM).",
      "Implement Public Key Infrastructure (PKI), TLS certificates, and secrets management (HashiCorp Vault).",
      "Automate security compliance scanning and patch deployment across infrastructure.",
      "Conduct threat modeling exercises (STRIDE) during software and infrastructure design phases.",
      "Collaborate with DevOps teams to embed security into CI/CD pipelines (DevSecOps)."
    ],
    prerequisites: [
      { name: "Linux & Systems Engineering", desc: "System administration, kernel security, networking, automation.", required: true },
      { name: "Networking & Cryptography", desc: "TCP/IP, TLS, IPSec, PKI, Symmetric/Asymmetric encryption, Hashing.", required: true },
      { name: "Infrastructure as Code & Cloud", desc: "Terraform, Docker, AWS/Azure basics.", required: true },
      { name: "Programming Skills", desc: "Python, Go, or Bash for building security automation tools.", required: true }
    ],
    technologies: [
      { name: "Enterprise Cryptography & PKI", category: "Cryptography", priority: "MUST LEARN", description: "TLS 1.3, X.509 certificates, RSA, ECC, AES-256, Certificate Authorities." },
      { name: "Secrets Management (HashiCorp Vault)", category: "Secrets", priority: "MUST LEARN", description: "Dynamic secrets, encryption-as-a-service, access policies." },
      { name: "Network Security & Firewalls (WAF, NGFW)", category: "Network Defense", priority: "MUST LEARN", description: "Configuring Cloudflare/AWS WAF, pfSense, Palo Alto NGFWs." },
      { name: "Identity & Access Management (IAM / Okta)", category: "IAM", priority: "MUST LEARN", description: "OAuth 2.0, OpenID Connect, SAML, SSO, MFA, Zero Trust Architecture." },
      { name: "DevSecOps & SAST/DAST Tooling", category: "Application Security", priority: "HIGH PRIORITY", description: "SonarQube, Snyk, Semgrep, Trivy integrated into CI/CD." },
      { name: "Threat Modeling (STRIDE Framework)", category: "Security Architecture", priority: "HIGH PRIORITY", description: "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege." },
      { name: "Terraform & Cloud Security", category: "IaC Security", priority: "HIGH PRIORITY", description: "Checkov, tfsec, policy-as-code with OPA (Open Policy Agent)." },
      { name: "Python / Go for Security Tooling", category: "Automation", priority: "HIGH PRIORITY", description: "Building custom security scanners and webhook alert handlers." }
    ],
    tools: [
      { name: "HashiCorp Vault", priority: "MUST LEARN", purpose: "Centralized secrets and encryption key management." },
      { name: "Wireshark & pfSense", priority: "MUST LEARN", purpose: "Network traffic inspection and firewall routing." },
      { name: "SonarQube & Trivy", priority: "HIGH PRIORITY", purpose: "Automated code and container vulnerability scanning." },
      { name: "Terraform & Git", priority: "MUST LEARN", purpose: "Automated infrastructure deployment." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Cryptography & PKI Architecture", topics: ["Symmetric (AES-GCM) vs Asymmetric (RSA/ECC) Cryptography", "Hashing algorithms (SHA-256, bcrypt, argon2) & Salt/Pepper", "Setting up a private Certificate Authority (CA) with OpenSSL and issuing X.509 certs"], milestone: "Build and manage a self-hosted PKI infrastructure issuing TLS certificates." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Secrets Management (HashiCorp Vault)", topics: ["HashiCorp Vault Architecture (Storage, Shamir's Secret Sharing, Unsealing)", "Configuring Key-Value engines and Dynamic Database Credentials", "Integrating Vault with applications via AppRole and Kubernetes auth"], milestone: "Deploy HashiCorp Vault to inject dynamic PostgreSQL credentials into a microservice." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Firewalls & Web Application Firewalls (WAF)", topics: ["Configuring pfSense / AWS WAF rules to block malicious traffic", "Mitigating SQL injection, XSS, and bot scrapers using WAF rate-limiting"], milestone: "Configure a WAF protecting a web app from simulated DDoS and injection attacks." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "DevSecOps & CI/CD Security", topics: ["Embedding Static Application Security Testing (SAST - Semgrep, SonarQube) in CI/CD", "Software Composition Analysis (SCA - Snyk) for vulnerable dependencies", "Container image vulnerability scanning with Trivy in GitHub Actions"], milestone: "Build an automated CI/CD pipeline that blocks PRs containing critical CVEs." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Zero Trust Architecture & Threat Modeling", topics: ["Zero Trust Principles: Never Trust, Always Verify", "Conducting STRIDE Threat Modeling on new system designs", "Policy-as-Code with Open Policy Agent (OPA) and Checkov for Terraform"], milestone: "Perform a complete STRIDE threat model on a cloud microservice architecture." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Security Engineering", topics: ["End-to-end DevSecOps pipeline with automated blocking", "Centralized secrets rotation system", "Automated compliance audit scripts"], milestone: "Ship 3 comprehensive security engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Security Architecture Portfolio", topics: ["GitHub repository with Terraform security modules and CI/CD security workflows", "Threat modeling documents and security architecture diagrams", "Technical security documentation"], milestone: "A professional GitHub portfolio showcasing defensive security architecture." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Security Engineering Design Scenarios", topics: ["Design a secure secrets management and key rotation architecture for a microservice platform", "Explain the STRIDE threat modeling framework with real-world examples", "How does Mutual TLS (mTLS) authenticate both client and server?", "How to enforce Least Privilege access across an enterprise cloud environment"], milestone: "Ace technical security engineering system design interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Placement", topics: ["Security Engineer resume emphasizing automated defense, DevSecOps, and PKI", "Applying to tech companies, banks, and cloud security firms", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Security Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated DevSecOps Pipeline with SAST & Container Scanning", tech: ["GitHub Actions", "Trivy", "Semgrep", "Docker", "Node.js"], description: "CI/CD pipeline scanning source code and Docker images for CVEs, generating automated SARIF security reports." },
      { tier: "Intermediate", title: "Enterprise Secrets Management with HashiCorp Vault", tech: ["HashiCorp Vault", "PostgreSQL", "Docker Compose", "Python", "AppRole"], description: "Configures Vault to provide ephemeral dynamic database credentials with automatic 1-hour revocation." },
      { tier: "Production / Capstone", title: "Zero-Trust Microservices Infrastructure with mTLS & Policy-as-Code", tech: ["Terraform", "Kubernetes", "Open Policy Agent (OPA)", "Checkov", "Cert-Manager"], description: "Zero-trust cloud infrastructure enforcing mTLS between microservices and blocking non-compliant Terraform via OPA policies." }
    ],
    certifications: [
      { name: "Certified Information Systems Security Professional (CISSP - Associate)", issuer: "ISC2" },
      { name: "CompTIA Security+ / CySA+", issuer: "CompTIA" }
    ],
    interviewTopics: [
      { category: "Defensive Architecture", topics: ["Explain how Public Key Infrastructure (PKI) validates trust chains via Certificate Authorities", "How does HashiCorp Vault protect data using Shamir's Secret Sharing algorithm?", "Explain the difference between Authentication (SAML/OIDC) and Authorization (OAuth2)", "How do you implement Defense in Depth across network, host, and application layers?"] }
    ],
    relatedRoles: ["Cloud Security Engineer", "Application Security Engineer", "Cybersecurity Analyst", "DevOps Engineer"]
  },

  {
    id: "cloud-security-engineer",
    careerFamily: "CYBERSECURITY",
    roleName: "Cloud Security Engineer",
    slug: "cloud-security-engineer",
    badge: "High Demand",
    shortDescription: "Secures multi-cloud environments, IAM policies, cloud posture management (CSPM), and containers.",
    description: "A Cloud Security Engineer specializes in defending cloud-native infrastructure, workloads, and data on AWS, Azure, or GCP. They implement Cloud Security Posture Management (CSPM), secure IAM role permissions, protect cloud storage, and monitor containerized Kubernetes environments for threats.",
    targetAudience: ["B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6.5 - ₹12 LPA", mid: "₹13 - ₹24 LPA", senior: "₹26 - ₹55+ LPA" },
    responsibilities: [
      "Design and enforce secure cloud IAM policies following the principle of least privilege.",
      "Implement Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWPP).",
      "Secure cloud storage (S3 bucket policies, KMS encryption, access points).",
      "Monitor cloud audit logs (AWS CloudTrail, GuardDuty) for anomalous behavior and account takeover.",
      "Automate security compliance auditing with tools like Prowler, ScoutSuite, and Checkov."
    ],
    prerequisites: [
      { name: "Cloud Computing Mastery", desc: "Deep knowledge of AWS, Azure, or GCP services (VPC, EC2, IAM, S3).", required: true },
      { name: "Networking & Security", desc: "Subnetting, Firewalls, KMS encryption, TLS certificates.", required: true },
      { name: "Infrastructure as Code", desc: "Terraform for provisioning cloud infrastructure.", required: true },
      { name: "Python / Bash Scripting", desc: "Automating cloud security audits and remediation.", required: true }
    ],
    technologies: [
      { name: "AWS Security Services (or Azure/GCP)", category: "Cloud Security Core", priority: "MUST LEARN", description: "IAM, KMS, GuardDuty, Security Hub, WAF, Shield, CloudTrail, Config." },
      { name: "Cloud Security Posture Management (Prowler / ScoutSuite)", category: "CSPM", priority: "MUST LEARN", description: "Auditing cloud configurations against CIS benchmarks." },
      { name: "KMS & Data Encryption", category: "Data Protection", priority: "MUST LEARN", description: "Customer Managed Keys (CMK), envelope encryption, key rotation policies." },
      { name: "IAM & Least Privilege Automation", category: "IAM", priority: "MUST LEARN", description: "Service Control Policies (SCPs), IAM Permission Boundaries, Access Analyzer." },
      { name: "Terraform Security (tfsec / Checkov)", category: "IaC Security", priority: "HIGH PRIORITY", description: "Static analysis of Terraform code to detect misconfigurations before deployment." },
      { name: "Container Security (Trivy / Falco)", category: "Container Security", priority: "HIGH PRIORITY", description: "Runtime threat detection in Kubernetes and container image scanning." },
      { name: "Cloud Incident Response", category: "Incident Response", priority: "HIGH PRIORITY", description: "Investigating compromised AWS credentials and isolating EC2 instances." }
    ],
    tools: [
      { name: "Prowler / ScoutSuite", priority: "MUST LEARN", purpose: "Automated cloud security posture assessment against CIS benchmarks." },
      { name: "Checkov", priority: "MUST LEARN", purpose: "Preventing cloud security misconfigurations in Terraform code." },
      { name: "AWS Console & CLI", priority: "MUST LEARN", purpose: "Managing cloud security configurations." },
      { name: "Docker", priority: "MUST LEARN", purpose: "Containerization." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Cloud IAM & Least Privilege", topics: ["IAM Users, Groups, Roles, Policies (JSON structure)", "IAM Evaluation Logic: Explicit Deny, SCPs, Permission Boundaries, Resource Policies", "Enforcing Multi-Factor Authentication (MFA) and eliminating root account usage"], milestone: "Build a multi-tier IAM policy structure with strict least-privilege boundaries." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Cloud Data Encryption & KMS", topics: ["Envelope Encryption: Master Keys (KMS CMK) vs Data Keys (DEK)", "S3 Security: Bucket Policies, Origin Access Control (OAC), Block Public Access", "Automating TLS certificate management with AWS ACM"], milestone: "Configure an encrypted, private S3 data lake with automatic key rotation via KMS." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "CSPM Auditing with Prowler", topics: ["Running automated cloud security assessments using Prowler against CIS AWS Foundations Benchmark", "Triaging security findings and generating remediation plans"], milestone: "Audit an AWS environment with Prowler and remediate all High and Critical findings." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Cloud Threat Detection & Logging", topics: ["Enabling and analyzing AWS CloudTrail and VPC Flow Logs", "Configuring AWS GuardDuty for ML-based threat and anomaly detection", "Automated incident alerts to Slack/Teams using AWS EventBridge and Lambda"], milestone: "Build an automated threat detection pipeline alerting on unauthorized IAM role creation." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Shift-Left IaC Security & Kubernetes", topics: ["Embedding Checkov and tfsec into CI/CD pipelines to block misconfigured Terraform", "Runtime threat detection in Kubernetes using Falco", "Defending against Cloud Metadata SSRF attacks (IMDSv2 enforcement)"], milestone: "Build a CI/CD pipeline that blocks any Terraform code exposing open S3 buckets or ports." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Production Cloud Security Systems", topics: ["Automated EC2 instance quarantine pipeline for compromised hosts", "Multi-account AWS Organizations security baseline via Terraform", "Automated compliance reporting (SOC2/CIS)"], milestone: "Complete 3 comprehensive cloud security engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Cloud Security Showcase", topics: ["GitHub repository with hardened Terraform modules and security audit scripts", "CIS benchmark remediation case study documentation", "Architecture diagrams showing secure cloud landing zones"], milestone: "A professional GitHub portfolio showcasing cloud security automation." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Cloud Security Scenarios", topics: ["How do you investigate and remediate a leaked AWS Access Key and Secret Key?", "Explain how IMDSv2 protects EC2 instances from SSRF attacks compared to IMDSv1", "What is the difference between an S3 Bucket Policy and an IAM User Policy?", "How does AWS GuardDuty detect compromised EC2 instances and crypto-mining?"], milestone: "Ace technical cloud security engineering interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Certifications & Placement", topics: ["Earning AWS Certified Security – Specialty (SCS-C02)", "Cloud Security Engineer resume optimization", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Cloud Security Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Automated CIS Benchmark Cloud Security Auditor", tech: ["Prowler", "AWS CLI", "Python", "Boto3"], description: "Automated script running Prowler against AWS accounts, generating executive PDF compliance reports." },
      { tier: "Intermediate", title: "Automated Incident Response & EC2 Quarantine System", tech: ["AWS GuardDuty", "EventBridge", "AWS Lambda", "Security Groups", "Python"], description: "Automatically isolates compromised EC2 instances by attaching a quarantine security group and snapshotting disks upon GuardDuty alert." },
      { tier: "Production / Capstone", title: "Hardened Multi-Account AWS Cloud Landing Zone with Shift-Left Security", tech: ["Terraform", "AWS Organizations", "Checkov", "KMS", "GuardDuty", "GitHub Actions"], description: "Production Terraform landing zone with centralized logging, SCPs, Checkov pre-commit checks, and automated compliance auditing." }
    ],
    certifications: [
      { name: "AWS Certified Security – Specialty (SCS-C02)", issuer: "Amazon Web Services" },
      { name: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)", issuer: "Microsoft" }
    ],
    interviewTopics: [
      { category: "Cloud Security Architecture", topics: ["How does AWS evaluate IAM permissions when both an SCP and an IAM policy are present?", "How does Envelope Encryption work in AWS KMS and why is it faster than direct master key encryption?", "Why is IMDSv2 mandatory for securing cloud workloads against SSRF exploits?", "How to detect and prevent data exfiltration from private S3 buckets using VPC Endpoints"] }
    ],
    relatedRoles: ["Security Engineer", "Cloud Engineer", "DevOps Engineer", "Cybersecurity Analyst"]
  },

  {
    id: "application-security-engineer",
    careerFamily: "CYBERSECURITY",
    roleName: "Application Security Engineer",
    slug: "application-security-engineer",
    badge: "High Demand",
    shortDescription: "Embeds security into the software development lifecycle (SDLC), code reviews, and threat modeling.",
    description: "An Application Security (AppSec) Engineer works closely with software developers and DevOps teams to ensure that web, mobile, and API codebases are designed, built, and deployed securely. They conduct secure code reviews, implement SAST/DAST/SCA tooling, perform threat modeling, and fix vulnerabilities.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Computer Science"],
    salaryRange: { entry: "₹6 - ₹11.5 LPA", mid: "₹12 - ₹23 LPA", senior: "₹25 - ₹50+ LPA" },
    responsibilities: [
      "Perform manual and automated secure code reviews in JavaScript/TypeScript, Python, and Java.",
      "Integrate SAST (Semgrep, SonarQube), DAST (OWASP ZAP), and SCA (Snyk) into CI/CD pipelines.",
      "Conduct threat modeling exercises (STRIDE) during software architectural design.",
      "Advise software engineers on remediating complex OWASP Top 10 vulnerabilities.",
      "Establish secure coding guidelines, dependency management policies, and security champions programs."
    ],
    prerequisites: [
      { name: "Software Development Experience", desc: "Solid coding skills in JavaScript/TypeScript, Python, or Java.", required: true },
      { name: "Web & API Security Fundamentals", desc: "Deep understanding of OWASP Top 10 vulnerabilities and secure coding practices.", required: true },
      { name: "CI/CD & DevOps Basics", desc: "Understanding GitHub Actions or GitLab CI workflows.", required: true },
      { name: "Git Version Control", desc: "Managing repositories, branches, and code reviews.", required: true }
    ],
    technologies: [
      { name: "Secure Code Review (Python / JS / Java)", category: "Code Analysis", priority: "MUST LEARN", description: "Identifying security vulnerabilities in source code before deployment." },
      { name: "SAST Tools (Semgrep / SonarQube)", category: "Static Analysis", priority: "MUST LEARN", description: "Writing custom Semgrep rules to detect insecure coding patterns." },
      { name: "DAST Tools (OWASP ZAP / Burp Suite)", category: "Dynamic Analysis", priority: "MUST LEARN", description: "Automated vulnerability scanning against live running web applications." },
      { name: "Software Composition Analysis (Snyk / Dependabot)", category: "SCA", priority: "MUST LEARN", description: "Tracking vulnerable third-party dependencies and transitive libraries." },
      { name: "OWASP Top 10 & API Security Top 10", category: "Vulnerabilities", priority: "MUST LEARN", description: "SQLi, XSS, CSRF, SSRF, BOLA, Mass Assignment, Insecure Deserialization." },
      { name: "Threat Modeling (STRIDE / PASTA)", category: "Threat Modeling", priority: "HIGH PRIORITY", description: "Identifying architectural security risks before writing code." },
      { name: "Authentication Security (JWT / OAuth2 / OIDC)", category: "Auth Security", priority: "HIGH PRIORITY", description: "Secure token signing, rotation, CSRF defense, and session management." },
      { name: "Secret Scanning (TruffleHog / GitGuardian)", category: "Secret Detection", priority: "HIGH PRIORITY", description: "Preventing hardcoded API keys and credentials from entering Git." }
    ],
    tools: [
      { name: "Semgrep", priority: "MUST LEARN", purpose: "Fast, customizable static code analysis." },
      { name: "OWASP ZAP", priority: "MUST LEARN", purpose: "Dynamic web application security scanning." },
      { name: "Snyk / Dependabot", priority: "MUST LEARN", purpose: "Dependency vulnerability management." },
      { name: "Burp Suite", priority: "HIGH PRIORITY", purpose: "Manual application security inspection." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Secure Coding & OWASP Top 10", topics: ["Root causes of Injection flaws (SQLi, Command Injection) and parameterized queries", "Cross-Site Scripting (XSS) defense: Context-aware output encoding & Content Security Policy (CSP)", "Authentication flaws: Password hashing (Argon2/bcrypt), MFA, and secure session management"], milestone: "Refactor a deliberately vulnerable web application to remediate all OWASP Top 10 flaws." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Static Code Analysis (SAST) with Semgrep", topics: ["How SAST tools parse Abstract Syntax Trees (ASTs)", "Writing custom Semgrep rules to catch company-specific insecure coding patterns", "Eliminating false positives and tuning scanner sensitivity"], milestone: "Write 5 custom Semgrep rules detecting hardcoded credentials and raw SQL queries." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "DAST Scanning with OWASP ZAP", topics: ["Configuring OWASP ZAP automated baseline scans in CI/CD", "Authenticating ZAP scans to test protected application routes"], milestone: "Integrate OWASP ZAP into a GitHub Actions workflow to scan pull requests automatically." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Software Supply Chain Security (SCA)", topics: ["Software Bill of Materials (SBOM) generation (CycloneDX / SPDX)", "Managing vulnerable dependencies with Snyk and automated fix PRs", "Pre-commit secret scanning with TruffleHog to stop secret leakage"], milestone: "Establish a complete Software Supply Chain security pipeline with SBOM generation." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Threat Modeling & API Security", topics: ["Conducting STRIDE threat modeling sessions on new product architecture", "API Security Top 10 (Broken Object Level Authorization - BOLA, Mass Assignment)", "Designing secure authorization middleware in Node.js / Python"], milestone: "Complete a threat modeling document and secure architecture review for a fintech API." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Complete DevSecOps Systems", topics: ["Building an automated AppSec pipeline covering SAST, DAST, SCA, and Secret Scanning", "Creating secure developer starter kits and coding guidelines", "Security metric tracking (Mean Time to Remediate - MTTR)"], milestone: "Ship 3 comprehensive application security engineering projects." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "AppSec Portfolio & Semgrep Rules", topics: ["GitHub repository showcasing custom Semgrep rules and CI/CD security workflows", "Threat modeling case study documents", "Secure code review guides for developers"], milestone: "A professional GitHub portfolio demonstrating application security automation." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Secure Code Review Interviews", topics: ["Given a snippet of vulnerable code (Java/JS/Python), identify the vulnerability and rewrite it securely", "How to defend against Server-Side Request Forgery (SSRF) when making external HTTP calls", "How does Content Security Policy (CSP) mitigate XSS and what are common bypasses?", "Explain how JWT tokens can be securely signed and stored without XSS vulnerability"], milestone: "Ace live secure code review and threat modeling interview rounds." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "AppSec Placement", topics: ["Application Security Engineer resume highlighting secure code review and pipeline automation", "Applying to tech companies, fintechs, and SaaS startups", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Application Security Engineer." }
    ],
    projects: [
      { tier: "Beginner", title: "Custom Semgrep Security Ruleset for Node.js / Python", tech: ["Semgrep", "YAML", "Python", "JavaScript", "GitHub Actions"], description: "Custom ruleset detecting insecure direct object references, raw SQL concatenations, and weak crypto in code." },
      { tier: "Intermediate", title: "Automated DevSecOps Security Gate in GitHub Actions", tech: ["GitHub Actions", "Semgrep", "OWASP ZAP", "TruffleHog", "Snyk"], description: "Comprehensive CI/CD pipeline executing SAST, DAST, Secret Scanning, and Dependency auditing on every commit." },
      { tier: "Production / Capstone", title: "Secure FinTech Payment API with Threat Model & Strict Authorization", tech: ["FastAPI", "PostgreSQL", "JWT", "Semgrep", "STRIDE", "Docker"], description: "Production API built with secure coding best practices, complete STRIDE threat model, BOLA prevention, and automated security testing." }
    ],
    certifications: [
      { name: "Certified Application Security Engineer (CASE)", issuer: "EC-Council" },
      { name: "CompTIA Security+", issuer: "CompTIA" }
    ],
    interviewTopics: [
      { category: "Application Security & Code Review", topics: ["Show how to fix an SQL Injection vulnerability using prepared statements vs ORMs", "How to properly implement CSRF protection with SameSite cookies and Anti-CSRF tokens", "What is BOLA (Broken Object Level Authorization) and how do you enforce ownership checks at the middleware level?", "Explain how Mass Assignment vulnerabilities occur and how DTOs/Pydantic schemas prevent them"] }
    ],
    relatedRoles: ["Penetration Tester", "Security Engineer", "Backend Developer", "Software Engineer"]
  },

  {
    id: "digital-forensics-analyst",
    careerFamily: "CYBERSECURITY",
    roleName: "Digital Forensics Analyst",
    slug: "digital-forensics-analyst",
    badge: "Specialized",
    shortDescription: "Investigates digital evidence, memory dumps, disk images, and recovers data for cybercrime investigations.",
    description: "A Digital Forensics Analyst recovers, preserves, analyzes, and presents digital evidence from computers, mobile phones, servers, and networks following a cyber incident, data breach, or legal investigation. They maintain strict chain of custody and reconstruct timelines of adversary activities.",
    targetAudience: ["BCA", "B.Tech", "B.E.", "MCA", "M.Tech", "Cybersecurity", "Forensics"],
    salaryRange: { entry: "₹4.5 - ₹8.5 LPA", mid: "₹9 - ₹18 LPA", senior: "₹20 - ₹38+ LPA" },
    responsibilities: [
      "Acquire forensically sound disk images and volatile RAM dumps without altering digital evidence.",
      "Maintain legal Chain of Custody documentation for all hardware and digital artifacts.",
      "Perform timeline analysis of attacker activity using Windows Registry, Event Logs, Prefetch, and Shimcache.",
      "Analyze volatile memory using Volatility to detect injected DLLs, unlinked processes, and hidden rootkits.",
      "Author court-admissible forensic investigation reports explaining technical findings clearly."
    ],
    prerequisites: [
      { name: "Operating System Internals", desc: "File systems (NTFS, FAT32, EXT4), Windows Registry, memory structures.", required: true },
      { name: "Networking Fundamentals", desc: "Packet inspection, connection logs, IP routing.", required: true },
      { name: "Legal & Forensic Principles", desc: "Chain of custody, evidence integrity (MD5/SHA256 hashing), write blockers.", required: true },
      { name: "Scripting Basics", desc: "Python or PowerShell for parsing artifact outputs.", required: true }
    ],
    technologies: [
      { name: "Forensic Imaging (FTK Imager / dd)", category: "Acquisition", priority: "MUST LEARN", description: "Creating bit-by-bit physical and logical forensic disk images with verification hashes." },
      { name: "Memory Forensics (Volatility 3)", category: "Memory Analysis", priority: "MUST LEARN", description: "Extracting process lists, network connections, DLLs, and injected code from RAM dumps." },
      { name: "Windows Forensic Artifacts", category: "OS Artifacts", priority: "MUST LEARN", description: "Registry hives, Prefetch (.pf), Shimcache, Amcache, Shellbags, LNK files, USN Journal." },
      { name: "Timeline Analysis (Autopsy / Plaso / log2timeline)", category: "Timeline", priority: "MUST LEARN", description: "Super-timeline generation correlating filesystem and event log timestamps." },
      { name: "Browser & Email Forensics", category: "Application Artifacts", priority: "HIGH PRIORITY", description: "SQLite databases, cache, cookies, download history, email PST/MBOX parsing." },
      { name: "Network Forensics (Wireshark / NetworkMiner)", category: "Network Evidence", priority: "HIGH PRIORITY", description: "Carving files and credentials from captured PCAP streams." },
      { name: "Malware Triage Basics", category: "Malware", priority: "GOOD TO KNOW", description: "Static analysis of suspicious executables (PE headers, strings, hashes)." }
    ],
    tools: [
      { name: "FTK Imager", priority: "MUST LEARN", purpose: "Forensic disk imaging and RAM capture." },
      { name: "Autopsy", priority: "MUST LEARN", purpose: "Comprehensive open-source digital forensic platform." },
      { name: "Volatility 3", priority: "MUST LEARN", purpose: "Volatile memory analysis framework." },
      { name: "Eric Zimmerman's Tools (EZ Tools)", priority: "MUST LEARN", purpose: "High-speed parsing of Windows Registry, Prefetch, and Shellbags." }
    ],
    roadmap: [
      { step: 1, phase: "FOUNDATION", duration: "Weeks 1-4", focus: "Evidence Acquisition & File Systems", topics: ["Chain of Custody, Write Blockers, and Evidence Integrity (MD5/SHA-256)", "File Systems Architecture: NTFS (MFT, $LogFile, $UsnJrnl) vs FAT32 vs EXT4", "Creating raw (E01 / DD) disk images using FTK Imager and dd"], milestone: "Create and hash-verify a forensic disk image of a flash drive." },
      { step: 2, phase: "CORE SKILLS", duration: "Weeks 5-8", focus: "Windows Artifact Analysis with EZ Tools", topics: ["Prefetch files (.pf) & Amcache to prove program execution", "Shellbags and LNK files to prove folder access and USB insertion", "Parsing Windows Registry hives (SYSTEM, SOFTWARE, NTUSER.DAT) for user activity"], milestone: "Reconstruct a user's USB activity and executable launch history from an image." },
      { step: 3, phase: "TOOLS", duration: "Week 9", focus: "Autopsy Forensic Suite", topics: ["Creating an Autopsy case and running ingest modules (Keyword Search, Hash Lookup)", "Analyzing extracted web browser history, downloaded files, and deleted items"], milestone: "Process a disk image in Autopsy and export a forensic report of findings." },
      { step: 4, phase: "INTERMEDIATE SKILLS", duration: "Weeks 10-14", focus: "Memory Forensics with Volatility 3", topics: ["Acquiring RAM dumps using DumpIt and FTK Imager", "Volatility plugins: windows.pslist, windows.pstree, windows.netscan, windows.malfind", "Detecting process hollowing and code injection in memory"], milestone: "Analyze a memory dump with Volatility to identify a stealthy injected trojan process." },
      { step: 5, phase: "ADVANCED SKILLS", duration: "Weeks 15-18", focus: "Super-Timeline Analysis & Anti-Forensics", topics: ["Generating Super-Timelines using Plaso (log2timeline)", "Detecting anti-forensics techniques (Timestomping, Log clearing, Secure deletion)", "Mobile forensics basics (Android/iOS backup extraction)"], milestone: "Construct a chronological incident timeline proving the exact time of an attacker's data theft." },
      { step: 6, phase: "PROJECTS", duration: "Weeks 19-21", focus: "Forensic Investigation Case Studies", topics: ["Insider threat data exfiltration investigation", "Ransomware intrusion timeline reconstruction", "Writing court-ready forensic expert witness reports"], milestone: "Complete 3 comprehensive forensic investigation reports." },
      { step: 7, phase: "PORTFOLIO", duration: "Week 22", focus: "Case Study Portfolio", topics: ["Publishing anonymized forensic case study write-ups on GitHub", "Documenting step-by-step artifact extraction procedures", "Sharing Python artifact parsing scripts"], milestone: "A professional Digital Forensics portfolio showcasing real-world investigation reports." },
      { step: 8, phase: "INTERVIEW PREPARATION", duration: "Weeks 23-24", focus: "Forensic Technical Scenarios", topics: ["How do you prove that a specific USB drive was plugged into a Windows laptop?", "What does Windows Prefetch tell you about an executable that ran 3 days ago?", "How does Volatility detect injected code in memory using `malfind`?", "Explain how Timestomping works and how the $MFT $STANDARD_INFORMATION vs $FILE_NAME attributes expose it"], milestone: "Pass technical digital forensics scenario and artifact parsing interviews." },
      { step: 9, phase: "JOB READINESS", duration: "Week 25+", focus: "Career Launch", topics: ["Digital Forensics resume highlighting artifact expertise and evidence integrity", "Applying to incident response consulting firms (Mandiant, CrowdStrike), law enforcement, and corporate security", "Mock technical interviews"], milestone: "Secure employment as an Associate / Junior Digital Forensics Analyst." }
    ],
    projects: [
      { tier: "Beginner", title: "USB Insertion & Data Exfiltration Forensic Reconstruction", tech: ["EZ Tools", "Registry Viewer", "FTK Imager", "Excel"], description: "Forensic investigation proving an employee copied confidential data to an unauthorized USB drive using Shellbags and Registry." },
      { tier: "Intermediate", title: "Volatile Memory Forensic Analysis of Injected Malware", tech: ["Volatility 3", "Python", "FTK Imager", "CyberChef"], description: "Extracts memory dumps, identifies unlinked malicious DLLs, extracts injected shellcode, and de-obfuscates C2 IP addresses." },
      { tier: "Production / Capstone", title: "Enterprise Breach Root Cause Analysis & Super-Timeline", tech: ["Autopsy", "Plaso (log2timeline)", "Volatility 3", "Wireshark"], description: "Full end-to-end incident investigation: initial phishing email execution, lateral movement, credential dumping, and exfiltration timeline." }
    ],
    certifications: [
      { name: "Certified Computer Forensics Examiner (CCFE)", issuer: "IACIS" },
      { name: "Certified Forensic Computer Examiner (CFCE)", issuer: "IACIS" },
      { name: "CompTIA CySA+ / Security+", issuer: "CompTIA" }
    ],
    interviewTopics: [
      { category: "Forensic Artifacts", topics: ["Explain how to prove program execution using Prefetch, Amcache, and Shimcache", "How do you detect that an attacker wiped the Windows Security event log?", "What is the Master File Table ($MFT) and how does it store resident vs non-resident file data?", "How do you maintain Chain of Custody and ensure evidence integrity in court?"] }
    ],
    relatedRoles: ["SOC Analyst", "Cybersecurity Analyst", "Incident Responder", "Security Engineer"]
  }
];

module.exports = cybersecurityRoles;

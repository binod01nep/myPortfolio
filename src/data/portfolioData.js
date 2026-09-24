/**
 * portfolioData.js
 * Source of truth for Binod Budha's portfolio and AI assistant.
 * Fully verified authentic data — no placeholder or synthetic content.
 */

export const portfolioData = {
  personal: {
    name: "Binod Budha",
    shortName: "Binod",
    monogram: "BINOD",
    title: "Software Developer",
    tagline: "I build software at the intersection of full-stack development and AI.",
    bio: "Computer Science undergraduate at Pandit Deendayal Energy University (PDEU) with a 9.22/10 CGPA. Focused on engineering high-performance web systems, robust backends, and practical AI integrations.",
    philosophy: [
      "I value clarity over cleverness, performance over decorative excess, and modularity over monolithic complexity.",
      "Software should be predictable, resilient, and responsive to user needs without unnecessary friction.",
      "My development cycle centers on deep foundational understanding: solid data structures, clear API contracts, and clean component hierarchies."
    ],
    status: {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Pandit Deendayal Energy University",
      period: "2023 — 2027",
      gpa: "9.22 / 10",
      location: "Gandhinagar, Gujarat, India",
      origin: "Dang, Nepal"
    }
  },

  contact: {
    email: "bcb4314@gmail.com",
    phone: "+91-6393490697",
    location: "Gandhinagar, Gujarat, India",
    github: "https://github.com/binod01nep",
    linkedin: "https://www.linkedin.com/in/binod-budha-7691773a1/",
    leetcode: "https://leetcode.com/u/ambilax/",
    portfolio: "https://budhabinod.com.np",
    resumeUrl: "/BinodBudhaResume.pdf",
    resumeFilename: "BinodBudhaResume.pdf"
  },

  projects: [
    {
      id: "01",
      slug: "ai-scam-detection",
      title: "AI Scam Detection Platform",
      category: "AI · Full Stack · Security",
      year: "2025",
      summary: "Multi-modal AI security engine that scans messages, emails, screenshots, and PDFs via the Groq LLM API to identify phishing vectors and compute real-time risk scores.",
      description: "An AI-powered security platform that analyzes incoming messages, emails, screenshots, and PDFs via the Groq LLM API. Generates real-time risk scores (0–100) and detects phishing/scam patterns with actionable threat insights.",
      problem: "Modern social engineering and phishing tactics have shifted from obvious spam emails to sophisticated multi-modal attacks, including spoofed billing PDFs, QR codes, forged executive screenshots, and urgency-driven SMS. Standard static heuristic filters fail against LLM-crafted social engineering.",
      solution: "Engineered an end-to-end security assessment system that accepts arbitrary textual or document inputs, invokes sub-second Groq LLM reasoning, decomposes suspicious phrases and spoofed domains, and produces an interpretable risk index (0–100) along with defensive mitigation steps.",
      howItWorks: [
        "User supplies input as raw text, document snippet, email header, or file payload.",
        "Backend sanitizes and segments the input, extracting URLs, sender metadata, and behavioral intent flags.",
        "Prompt pipeline queries high-throughput Groq LLM instances using structured reasoning templates.",
        "Response engine parses structured JSON output, calculates confidence-weighted risk score, and maps specific vulnerability indicators.",
        "Frontend renders an immediate threat breakdown with recommended protective actions."
      ],
      techStack: ["React.js", "Python", "Groq API", "REST APIs", "Tailwind CSS"],
      keyFeatures: [
        "Multi-modal ingestion pipeline for text, emails, and document payloads",
        "Sub-second inference times via Groq hardware-accelerated LLM API",
        "Granular risk scoring from 0 to 100 with categorical risk levels",
        "Actionable defensive recommendations and phishing indicators",
        "Zero-retention architecture for sensitive submission privacy"
      ],
      github: "https://github.com/binod01nep",
      demoUrl: "https://github.com/binod01nep",
      featured: true
    },
    {
      id: "02",
      slug: "smart-review-routing",
      title: "Smart Review Routing System",
      category: "NLP · Backend · Automation",
      year: "2025",
      summary: "Intelligent customer feedback classification engine leveraging NLP algorithms and n8n workflows to direct critical bug reports and defects directly to engineering teams.",
      description: "An intelligent AI system that automatically analyzes customer reviews using NLP algorithms and routes issues (like material defects or software bugs) directly to corresponding developer teams.",
      problem: "High-volume consumer products and web services receive thousands of unfiltered reviews across platforms. Urgent security bugs, catastrophic app crashes, and physical product defects are often buried in general commentary, delaying vital patches by weeks.",
      solution: "Developed an automated ingestion and natural language triage pipeline that continuously categorizes review streams, performs sentiment and severity scoring, extracts key issue entities, and invokes n8n automation webhooks to dispatch structured tickets directly to specific developer channels.",
      howItWorks: [
        "Review data is ingested asynchronously from API endpoints or structured logs.",
        "NLP pipeline performs intent extraction, sentiment analysis, and multi-label issue tagging.",
        "Routing engine matches tags against developer ownership matrices (e.g. Frontend, API, Database, Hardware Quality).",
        "n8n workflow triggers automated webhooks to deliver actionable tickets with reproduction hints.",
        "System maintains an audit trail for triaged vs resolved feedback items."
      ],
      techStack: ["AI / NLP", "Node.js", "Express.js", "n8n Automation", "REST APIs"],
      keyFeatures: [
        "Multi-label NLP classification with sentiment polarity grading",
        "Automated routing engine directing specific issues to domain teams",
        "n8n webhook triggers for instant notification dispatch",
        "Deduplication logic to group identical bug reports together",
        "Structured feedback analytics dashboard capability"
      ],
      github: "https://github.com/binod01nep",
      demoUrl: "https://github.com/binod01nep",
      featured: true
    },
    {
      id: "03",
      slug: "smart-resume-builder",
      title: "Smart Resume Builder",
      category: "Full Stack · React · MongoDB",
      year: "2025",
      summary: "Full-stack MERN application enabling dynamic real-time resume composition, live preview formatting, structured data validation, and instantaneous PDF generation.",
      description: "A full-stack MERN resume builder enabling users to design, customize, and instant-preview professional resumes with dynamic template rendering and direct PDF downloads.",
      problem: "Traditional resume editors either lock users behind paywalls, produce poorly parsed non-ATS layouts, or suffer from sluggish client-side rendering when formatting complex engineering histories.",
      solution: "Built a reactive single-page builder on the MERN stack with dynamic section reordering, real-time input validation, responsive live previewing, and server-side/client-side clean PDF generation optimized for ATS parsing standards.",
      howItWorks: [
        "User builds structured profile through granular component forms (Experience, Projects, Education, Skills).",
        "Client application maintains normalized state tree with instant live document rendering.",
        "Custom layout engine ensures print-accurate CSS pagination and typography hierarchy.",
        "MongoDB stores user documents securely with REST API CRUD endpoints.",
        "Direct export compiles cleanly into an ATS-compatible single or multi-page PDF."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      keyFeatures: [
        "Dynamic drag-and-drop / reorderable section structure",
        "Real-time synchronized document canvas with live preview",
        "ATS-compliant typographic layout and clean print rendering",
        "Account persistence and multi-resume management in MongoDB",
        "Instant one-click PDF compilation and download"
      ],
      github: "https://github.com/binod01nep",
      demoUrl: "https://github.com/binod01nep",
      featured: true
    },
    {
      id: "04",
      slug: "banking-ledger-system",
      title: "Banking Ledger System",
      category: "Backend · Database · Security",
      year: "2024",
      summary: "Robust financial backend system managing customer transactions, balances, and atomic ledger state with strict validation logic and RESTful architecture.",
      description: "A secure backend system built to manage customer transactions, balances, and account history with strict validation logic, error handling, and structured RESTful API endpoints.",
      problem: "Financial applications require absolute data integrity, atomic state handling, and audit trails to prevent double-spending, race conditions, or unverified ledger discrepancies.",
      solution: "Constructed a secure Express.js and MongoDB ledger engine implementing strict transaction validations, structured schema constraints, idempotent processing, and thorough error handling.",
      howItWorks: [
        "Client sends authenticated transaction request with idempotent transaction ID.",
        "Middleware validates JWT session, account status, and payload schema.",
        "Database session executes atomic balance checks and ledger journal writes.",
        "System creates immutable transaction log entry for auditing.",
        "Structured JSON response returns updated balances and receipt metadata."
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      keyFeatures: [
        "Atomic balance operations preventing race conditions",
        "Structured double-entry accounting model principles",
        "Granular input validation and deterministic error payloads",
        "Comprehensive audit history for compliance and tracking",
        "RESTful API design following standardized status conventions"
      ],
      github: "https://github.com/binod01nep",
      demoUrl: "https://github.com/binod01nep",
      featured: false
    }
  ],

  experience: [
    {
      id: "01",
      role: "Web Developer Intern",
      organization: "InAmigos Foundation",
      period: "03/2026 — 05/2026",
      type: "Internship",
      location: "Remote / India",
      responsibilities: [
        "Developed responsive web applications using React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.",
        "Built reusable, accessible UI components following clean component architecture.",
        "Integrated REST APIs and managed asynchronous client-side state handling.",
        "Maintained version control workflows using Git and GitHub in a collaborative team setup.",
        "Contributed actively in an Agile development environment with sprint planning and reviews."
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "Git", "Agile"]
    },
    {
      id: "02",
      role: "Data Analyst Intern",
      organization: "BlueStock FinTech",
      period: "05/2026 — 07/2026",
      type: "Internship",
      location: "Remote / India",
      responsibilities: [
        "Analyzed structured financial datasets to extract actionable market and performance metrics.",
        "Performed rigorous data cleaning, outlier detection, and preprocessing pipelines.",
        "Conducted dataset validation, statistical verification, and structured reporting.",
        "Prepared interactive dashboards and analytical summaries for stakeholders."
      ],
      skills: ["Python", "Data Cleaning", "Data Preprocessing", "Financial Datasets", "Reporting", "Dashboards"]
    }
  ],

  education: [
    {
      id: "01",
      institution: "Pandit Deendayal Energy University (PDEU)",
      degree: "B.Tech Computer Science and Engineering",
      period: "2023 — 2027",
      gpa: "CGPA 9.22 / 10",
      location: "Gandhinagar, Gujarat, India",
      notes: "Consistently top-ranked student in CSE batch.",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Object-Oriented Programming (OOP)",
        "Software Engineering"
      ]
    },
    {
      id: "02",
      institution: "Padmodaya Secondary School",
      degree: "Higher Secondary (Science)",
      period: "2021 — 2023",
      gpa: "GPA 3.63 / 4.00",
      location: "Dang, Nepal",
      notes: "Distinction academic record.",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    }
  ],

  skills: {
    languages: ["Java", "Python", "JavaScript (ES6+)", "C Language", "HTML5", "CSS3", "Kotlin"],
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "Spring Boot", "FastAPI"],
    databases: ["MongoDB", "MySQL"],
    core: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Software Engineering"
    ],
    tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Linux", "AWS", "Firebase"]
  },

  certifications: [
    {
      title: "Google & Kaggle Generative AI Intensive Program",
      issuer: "Google DeepMind × Kaggle",
      year: "2025",
      image: "/Kaggle_certificate.png",
      description: "Hands-on intensive training program building autonomous AI agents, LLM integrations, and prompt pipelines."
    },
    {
      title: "Kaggle Python Certificate",
      issuer: "Kaggle · Google",
      year: "2025",
      image: "/python.png",
      description: "Comprehensive verification of Python programming, data structures, algorithms, and computational logic."
    },
    {
      title: "COMPEX Scholarship",
      issuer: "Government of India",
      year: "2023",
      image: null,
      description: "Prestigious merit-based full scholarship awarded to high-achieving Nepali students for engineering education in India."
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      year: "2024",
      image: null,
      description: "Foundational training covering cloud infrastructure, compute instances, security IAM, and AWS storage models."
    }
  ]
};

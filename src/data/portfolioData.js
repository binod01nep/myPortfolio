/**
 * portfolioData.js
 * Hardcoded knowledge base for Binod Budha's AI Portfolio Assistant.
 * All chat responses are generated from this data — no external API needed.
 */

export const portfolioData = {
  // ─── Personal Info ────────────────────────────────────────────────────────
  name: "Binod Budha",
  nickname: "Binod",
  role: "MERN Stack Developer & CS Undergraduate",
  tagline: "Building scalable web apps, AI integrations & smart backend systems.",
  bio: "I'm Binod Budha, a Computer Science student at Pandit Deendayal Energy University (PDEU) in Gandhinagar, Gujarat. I specialize in scalable MERN stack web applications, RESTful APIs, and AI/ML integrations including Groq API and NLP review routing. I'm consistently top-ranked at PDEU with a GPA of 9.22 / 10.0.",
  availability: "Open to full-time roles, engineering internships, and collaborative software projects.",

  // ─── Location ─────────────────────────────────────────────────────────────
  location: {
    current: "Gandhinagar, Gujarat, India",
    origin: "Dang, Nepal",
    timezone: "IST (UTC+5:30)",
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    email: "bcb4314@gmail.com",
    phone: "+91-6393490697",
    portfolio: "https://budhabinod.com.np",
  },

  // ─── Social Links ─────────────────────────────────────────────────────────
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/binod01nep",
      subtitle: "View Projects & Code",
      icon: "github",
      color: "slate",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/binod-budha-7691773a1/",
      subtitle: "Connect with Binod",
      icon: "linkedin",
      color: "cyan",
    },
    {
      platform: "Portfolio",
      url: "https://budhabinod.com.np",
      subtitle: "Visit Full Website",
      icon: "globe",
      color: "emerald",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/ambilax/",
      subtitle: "Problem Solving",
      icon: "leetcode",
      color: "amber",
    },
    {
      platform: "Email",
      url: "mailto:bcb4314@gmail.com",
      subtitle: "Send a Message",
      icon: "mail",
      color: "rose",
    },
  ],

  // ─── Resume ───────────────────────────────────────────────────────────────
  resume: {
    url: "/BinodBudhaResume.pdf",
    label: "Binod Budha – Resume",
    filename: "BinodBudhaResume.pdf",
  },

  // ─── Education ────────────────────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gandhinagar, Gujarat",
      period: "2023 – 2027",
      gpa: "9.22 / 10.0",
      highlight: "Consistently top-ranked student in CSE batch",
      status: "Currently Pursuing",
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Padmodaya Secondary School",
      location: "Dang, Nepal",
      period: "2021 – 2023",
      gpa: "3.63 / 4.00",
      highlight: "Distinction academic record",
      status: "Completed",
    },
  ],

  // ─── Skills ───────────────────────────────────────────────────────────────
  skills: {
    languages: ["Java", "JavaScript (ES6+)", "Python", "C Language", "HTML5", "CSS3", "Kotlin"],
    frontend: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Spring Boot", "FastAPI"],
    databases: ["MongoDB", "MySQL"],
    aiml: ["Groq API", "NLP", "n8n (Workflow Automation)", "Prompt Engineering"],
    cloud: ["AWS", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Linux"],
  },

  // ─── Projects ─────────────────────────────────────────────────────────────
  projects: [
    {
      title: "Scam Detection AI Platform",
      category: "AI / Security Platform",
      description:
        "An AI-powered security platform that analyzes incoming messages, emails, screenshots, and PDFs via the Groq LLM API. Generates real-time risk scores (0–100) and detects phishing/scam patterns with actionable threat insights.",
      tech: ["React.js", "Python", "Groq API", "REST API"],
      github: "https://github.com/binod01nep",
      demo: "https://github.com/binod01nep",
      color: "emerald",
    },
    {
      title: "Smart Review & Routing System",
      category: "AI Product Review Automation",
      description:
        "An intelligent AI system that automatically analyzes customer reviews using NLP algorithms and routes issues (like material defects or software bugs) directly to corresponding developer teams.",
      tech: ["AI / NLP", "Node.js", "Express.js", "n8n"],
      github: "https://github.com/binod01nep",
      demo: "https://github.com/binod01nep",
      color: "cyan",
    },
    {
      title: "Banking Ledger System",
      category: "Banking Backend Application",
      description:
        "A secure backend system built to manage customer transactions, balances, and account history with strict validation logic, error handling, and structured RESTful API endpoints.",
      tech: ["Express.js", "MongoDB", "Node.js", "REST API"],
      github: "https://github.com/binod01nep",
      demo: "https://github.com/binod01nep",
      color: "blue",
    },
    {
      title: "Smart Resume Builder",
      category: "Full Stack Web Application",
      description:
        "A full-stack MERN resume builder enabling users to design, customize, and instant-preview professional resumes with dynamic template rendering and direct PDF downloads.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/binod01nep",
      demo: "https://github.com/binod01nep",
      color: "purple",
    },
  ],

  // ─── Achievements ─────────────────────────────────────────────────────────
  achievements: [
    {
      title: "COMPEX Scholarship",
      organization: "Government of India",
      year: "2023",
      description:
        "Prestigious merit-based full scholarship awarded to high-achieving Nepali students for engineering education in India.",
    },
    {
      title: "Top Rank – Academic Excellence",
      organization: "PDEU",
      year: "2023 – Present",
      description: "Maintained a GPA of 9.22 / 10.00 across all CSE semesters, consistently top-ranked.",
    },
    {
      title: "GenAI Intensive Agent Program",
      organization: "Google DeepMind × Kaggle",
      year: "2025",
      description:
        "Hands-on intensive training program building autonomous AI agents and LLM integrations with Google DeepMind.",
    },
  ],

  // ─── Languages Spoken ─────────────────────────────────────────────────────
  languagesSpoken: ["Nepali (Native)", "English (Fluent)", "Hindi (Fluent)"],

  // ─── Experience ───────────────────────────────────────────────────────────
  experience: [
    {
      role: "MERN Stack Developer (Academic Projects)",
      type: "Academic / Self-directed",
      period: "2023 – Present",
      description:
        "Built multiple production-quality projects including AI security platforms, backend banking systems, and intelligent review routing using MERN stack.",
    },
    {
      role: "GenAI Agent Developer",
      type: "Training Program",
      period: "2025",
      description:
        "Completed Google DeepMind × Kaggle GenAI Intensive Program, building LLM-based autonomous agents and AI workflows.",
    },
  ],

  // ─── Open Source ──────────────────────────────────────────────────────────
  openSource: {
    github: "https://github.com/binod01nep",
    description:
      "Binod actively contributes on GitHub, sharing project repositories, tools, and utilities built during his learning journey.",
  },
};

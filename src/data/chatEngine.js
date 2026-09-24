/**
 * chatEngine.js
 * Offline keyword-matching assistant engine using verified authentic data.
 */

import { portfolioData as d } from "./portfolioData";

const intentMap = [
  {
    intent: "resume",
    keywords: ["resume", "cv", "download resume", "pdf", "curriculum vitae", "resumé", "download"],
  },
  {
    intent: "contact",
    keywords: ["contact", "email", "phone", "reach", "hire", "collaborate", "hiring", "touch", "call"],
  },
  {
    intent: "github",
    keywords: ["github", "repo", "repository", "source code", "open source"],
  },
  {
    intent: "linkedin",
    keywords: ["linkedin", "profile", "connect"],
  },
  {
    intent: "projects",
    keywords: ["project", "work", "built", "build", "scam", "review", "routing", "ledger", "case study", "portfolio"],
  },
  {
    intent: "skills",
    keywords: ["skill", "stack", "tech", "languages", "frontend", "backend", "database", "java", "python", "javascript", "react", "node"],
  },
  {
    intent: "experience",
    keywords: ["experience", "internship", "inamigos", "bluestock", "job", "work experience", "career"],
  },
  {
    intent: "education",
    keywords: ["education", "study", "university", "college", "pdeu", "gpa", "degree", "school", "pandit"],
  },
  {
    intent: "about",
    keywords: ["who are you", "about", "bio", "introduce", "binod", "background", "philosophy", "what do you build"],
  },
  {
    intent: "greeting",
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "sup"],
  },
];

export function detectIntent(input) {
  const lower = input.toLowerCase().trim();

  for (const entry of intentMap) {
    for (const kw of entry.keywords) {
      if (kw.length <= 4) {
        const regex = new RegExp(`(?<![a-z])${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z])`, 'i');
        if (regex.test(lower)) return entry.intent;
      } else {
        if (lower.includes(kw)) return entry.intent;
      }
    }
  }
  return "unknown";
}

export function generateResponse(input) {
  const intent = detectIntent(input);

  switch (intent) {
    case "greeting":
      return {
        text: `Hello. I am Binod Budha's portfolio assistant. You can ask me about his work, technical skills, academic background, internships, or how to contact him.`,
      };

    case "about":
      return {
        text: `${d.personal.name} is a ${d.personal.title} and CS undergraduate at ${d.personal.status.institution} (CGPA: ${d.personal.status.gpa}).\n\n${d.personal.tagline}\n\nKey focus areas: Scalable MERN web systems, REST APIs, and practical AI integrations with Groq & NLP.`,
      };

    case "skills":
      return {
        text: `Technical Stack Overview:\n\n• Languages: ${d.skills.languages.join(", ")}\n• Frontend: ${d.skills.frontend.join(", ")}\n• Backend: ${d.skills.backend.join(", ")}\n• Databases: ${d.skills.databases.join(", ")}\n• Core CS: ${d.skills.core.slice(0, 4).join(", ")}\n• Tools: ${d.skills.tools.slice(0, 5).join(", ")}`,
      };

    case "projects":
      return {
        text: `Featured Technical Projects:\n\n1. AI Scam Detection Platform (AI · Groq · Full Stack)\n2. Smart Review Routing System (NLP · Express · n8n)\n3. Smart Resume Builder (MERN · PDF Engine)\n4. Banking Ledger System (Node · MongoDB · Ledger)\n\nYou can explore dedicated technical case studies on the /work page.`,
        action: { label: "View All Work", link: "/work" }
      };

    case "experience":
      return {
        text: `Internship Experience:\n\n• Web Developer Intern — InAmigos Foundation (03/2026 — 05/2026)\n  React.js, Tailwind CSS, REST APIs, Git, Agile.\n\n• Data Analyst Intern — BlueStock FinTech (05/2026 — 07/2026)\n  Financial dataset analysis, preprocessing, validation, dashboards.`,
        action: { label: "View Experience", link: "/experience" }
      };

    case "education":
      return {
        text: `Education:\n\n• B.Tech in Computer Science & Engineering\n  Pandit Deendayal Energy University (PDEU), Gandhinagar (2023 — 2027)\n  CGPA: 9.22 / 10.0 (Batch Top Rank)\n\n• Higher Secondary (Science)\n  Padmodaya Secondary School, Dang, Nepal (2021 — 2023)\n  GPA: 3.63 / 4.00 (Distinction)`,
      };

    case "resume":
      return {
        text: `Binod's verified resume is available for direct download.`,
        action: { label: "Download Resume (PDF)", url: d.contact.resumeUrl, external: true }
      };

    case "contact":
      return {
        text: `Contact Information:\n\n• Email: ${d.contact.email}\n• Phone: ${d.contact.phone}\n• Location: ${d.contact.location}\n• GitHub: ${d.contact.github}\n• LinkedIn: ${d.contact.linkedin}`,
        action: { label: "Go to Contact Page", link: "/contact" }
      };

    case "github":
      return {
        text: `GitHub Profile: ${d.contact.github}\nContains source repositories for AI security systems, review routing pipelines, and full-stack applications.`,
        action: { label: "Open GitHub Profile", url: d.contact.github, external: true }
      };

    case "linkedin":
      return {
        text: `LinkedIn Profile: ${d.contact.linkedin}`,
        action: { label: "Open LinkedIn Profile", url: d.contact.linkedin, external: true }
      };

    default:
      return {
        text: `I can assist with queries about:\n• About Binod\n• Skills and tech stack\n• Featured projects & case studies\n• Work experience & internships\n• Education & achievements\n• Contact channels & Resume`,
      };
  }
}

export const presetQuestions = [
  "Who are you?",
  "What do you build?",
  "What are your skills?",
  "Tell me about your projects.",
  "Show me your experience.",
  "How can I contact you?",
  "Download resume"
];

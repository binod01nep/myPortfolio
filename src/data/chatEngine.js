/**
 * chatEngine.js
 * Keyword-matching engine that maps user input to intent categories
 * and generates human-like responses from portfolioData.
 * No external API — 100% offline.
 */

import { portfolioData as d } from "./portfolioData";

// ─── Intent Maps ────────────────────────────────────────────────────────────
const intentMap = [
  {
    intent: "greeting",
    keywords: ["hello", "hi", "hey", "greet", "good morning", "good afternoon", "good evening", "sup", "howdy"],
  },
  {
    intent: "about",
    keywords: ["about", "who", "binod", "tell me", "introduce", "background", "person", "yourself"],
  },
  {
    intent: "skills",
    keywords: [
      "skill", "stack", "tech", "technology", "technologies", "language", "coding",
      "java", "python", "javascript", "react", "node", "express", "spring",
      "mongodb", "mysql", "tailwind", "html", "css", "kotlin", "fastapi",
      "aws", "firebase", "git", "vs code", "postman", "linux", "backend",
      "frontend", "database", "cloud", "tools", "framework", "library",
      "what does he know", "proficient", "expertise",
    ],
  },
  {
    intent: "projects",
    keywords: [
      "project", "built", "build", "made", "created", "portfolio", "work",
      "application", "app", "system", "platform", "software", "demo",
      "scam", "resume builder", "banking", "review", "routing",
    ],
  },
  {
    intent: "education",
    keywords: [
      "education", "study", "studying", "university", "college", "degree",
      "gpa", "grade", "pdeu", "pandit", "academic", "school", "qualification",
      "undergraduate", "btech", "b.tech", "computer science", "cse",
    ],
  },
  {
    intent: "experience",
    keywords: [
      "experience", "work experience", "worked", "internship", "job",
      "professional", "career", "employment", "position", "role",
    ],
  },
  {
    intent: "resume",
    keywords: ["resume", "cv", "download", "pdf", "curriculum vitae", "resumé"],
  },
  {
    intent: "contact",
    keywords: [
      "contact", "hire", "hiring", "work together", "collaborate", "collaboration",
      "freelance", "internship", "opportunity", "reach", "get in touch",
      "recruit", "recruiter", "offer", "available", "availability",
    ],
  },
  {
    intent: "github",
    keywords: ["github", "repository", "repo", "open source", "code", "source code"],
  },
  {
    intent: "linkedin",
    keywords: ["linkedin", "connect", "professional network", "profile"],
  },
  {
    intent: "social",
    keywords: ["social", "links", "profiles", "where to find", "find binod", "portfolio site", "website"],
  },
  {
    intent: "email",
    keywords: ["email", "mail", "gmail", "send email", "send message"],
  },
  {
    intent: "phone",
    keywords: ["phone", "number", "call", "mobile", "telephone", "whatsapp"],
  },
  {
    intent: "location",
    keywords: ["location", "where", "city", "country", "based", "live", "india", "gujarat", "gandhinagar", "nepal"],
  },
  {
    intent: "achievements",
    keywords: [
      "achievement", "award", "scholarship", "compex", "honor", "honour",
      "recognition", "certificate", "kaggle", "google deepmind", "genai",
      "hackathon", "competition", "rank",
    ],
  },
  {
    intent: "openSource",
    keywords: ["open source", "contribution", "contribute", "github projects"],
  },
];

// ─── Detect Intent ───────────────────────────────────────────────────────────
export function detectIntent(input) {
  const lower = input.toLowerCase().trim();

  for (const entry of intentMap) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) {
        return entry.intent;
      }
    }
  }
  return "unknown";
}

// ─── Generate Response ───────────────────────────────────────────────────────
export function generateResponse(input) {
  const intent = detectIntent(input);

  switch (intent) {
    case "greeting":
      return {
        type: "text",
        content: `Hey there! 👋 I'm Binod's AI Portfolio Assistant. I can answer questions about his skills, projects, education, experience, and contact info.\n\nWhat would you like to know?`,
      };

    case "about":
      return {
        type: "text",
        content: `👨‍💻 **About Binod Budha**\n\n${d.bio}\n\n🎯 **Role:** ${d.role}\n📍 **Location:** ${d.location.current}\n✅ **Status:** ${d.availability}`,
      };

    case "skills":
      return {
        type: "skills",
        content: `Here's a full breakdown of Binod's technical skills:`,
        skills: d.skills,
      };

    case "projects":
      return {
        type: "projects",
        content: `Here are Binod's featured projects 🚀`,
        projects: d.projects,
      };

    case "education":
      return {
        type: "text",
        content:
          `🎓 **Education**\n\n` +
          d.education
            .map(
              (edu) =>
                `**${edu.degree}**\n` +
                `🏛️ ${edu.institution}\n` +
                `📍 ${edu.location}\n` +
                `📅 ${edu.period} · GPA: ${edu.gpa}\n` +
                `⭐ ${edu.highlight}`
            )
            .join("\n\n"),
      };

    case "experience":
      return {
        type: "text",
        content:
          `💼 **Experience**\n\n` +
          d.experience
            .map(
              (exp) =>
                `**${exp.role}**\n` +
                `🏷️ ${exp.type} · ${exp.period}\n` +
                `${exp.description}`
            )
            .join("\n\n") +
          `\n\n📌 Binod is currently seeking full-time roles and engineering internships.`,
      };

    case "resume":
      return {
        type: "resume",
        content: `You can download Binod's latest resume here 👇`,
        resume: d.resume,
      };

    case "contact":
      return {
        type: "contact",
        content: `Let's connect! 🤝\n\nBinod is open to full-time roles, internships, freelance projects, and collaborations. Reach him through any of these channels:`,
        contact: d.contact,
        social: d.social,
        resume: d.resume,
      };

    case "github":
      return {
        type: "social",
        content: `Here's Binod's GitHub profile 🐙`,
        links: d.social.filter((s) => s.platform === "GitHub"),
      };

    case "linkedin":
      return {
        type: "social",
        content: `Here's Binod's LinkedIn profile 💼`,
        links: d.social.filter((s) => s.platform === "LinkedIn"),
      };

    case "social":
      return {
        type: "social",
        content: `Here are all of Binod's social profiles and links 🔗`,
        links: d.social,
      };

    case "email":
      return {
        type: "text",
        content: `📧 **Email Binod directly:**\n\n${d.contact.email}\n\nYou can click below to open your email client:`,
        action: { label: "Send Email ↗", url: `mailto:${d.contact.email}` },
      };

    case "phone":
      return {
        type: "text",
        content: `📞 **Phone / WhatsApp:**\n\n${d.contact.phone}\n\nLocated in Gandhinagar, Gujarat, India (IST timezone).`,
      };

    case "location":
      return {
        type: "text",
        content: `📍 **Location:**\n\nBinod is currently based in **${d.location.current}**, originally from **${d.location.origin}**.\n\n🕐 Timezone: ${d.location.timezone}`,
      };

    case "achievements":
      return {
        type: "text",
        content:
          `🏆 **Achievements & Honors**\n\n` +
          d.achievements
            .map(
              (a) =>
                `⭐ **${a.title}** (${a.year})\n` +
                `🏛️ ${a.organization}\n` +
                `${a.description}`
            )
            .join("\n\n"),
      };

    case "openSource":
      return {
        type: "social",
        content: `🌍 Binod actively contributes to open source on GitHub. You can explore all his repositories here:`,
        links: d.social.filter((s) => s.platform === "GitHub"),
      };

    default:
      return {
        type: "unknown",
        content: `Sorry, I don't have that information yet. 🤔\n\nTry asking about:\n• **Projects** – What has Binod built?\n• **Skills** – What technologies does he know?\n• **Education** – Where is he studying?\n• **Resume** – Download his CV\n• **Contact** – How to hire Binod\n• **GitHub** – View his code`,
      };
  }
}

// ─── Suggestion Chips ─────────────────────────────────────────────────────
export const suggestions = [
  { label: "Tell me about Binod", query: "tell me about binod" },
  { label: "⚙️ Skills", query: "skills" },
  { label: "🚀 Projects", query: "projects" },
  { label: "🎓 Education", query: "education" },
  { label: "💼 Experience", query: "experience" },
  { label: "🛠️ Tech Stack", query: "tech stack" },
  { label: "📄 Resume", query: "resume" },
  { label: "📩 Contact", query: "contact" },
  { label: "🐙 GitHub", query: "github" },
  { label: "💼 LinkedIn", query: "linkedin" },
  { label: "🏆 Achievements", query: "achievements" },
  { label: "⬇️ Download Resume", query: "download resume" },
  { label: "🤝 Hire Binod", query: "hire" },
  { label: "📧 Email", query: "email" },
  { label: "📞 Phone", query: "phone" },
  { label: "📍 Location", query: "location" },
  { label: "🌍 Open Source", query: "open source" },
  { label: "🔗 Social Links", query: "social links" },
];

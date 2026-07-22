import React from 'react';
import { Briefcase, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: "Scam Detection AI Platform",
    category: "AI / Security Platform",
    tech: ["React.js", "Python", "Groq API", "REST API"],
    description: "An AI-powered security platform that analyzes incoming messages, emails, screenshots, and PDFs via the Groq LLM API. Generates real-time risk scores (0–100) and detects phishing/scam patterns with actionable threat insights.",
    github: "https://github.com/binod01nep",
    link: "https://github.com/binod01nep",
    featured: true,
    borderColor: "hover:border-emerald-500/40"
  },
  {
    title: "Smart Review & Routing System",
    category: "AI Product Review Automation",
    tech: ["AI / NLP", "Node.js", "Express.js", "n8n"],
    description: "An intelligent AI system that automatically analyzes customer reviews using NLP algorithms and routes issues (like material defects or software bugs) directly to corresponding developer teams.",
    github: "https://github.com/binod01nep",
    link: "https://github.com/binod01nep",
    featured: true,
    borderColor: "hover:border-cyan-500/40"
  },
  {
    title: "Banking Ledger System",
    category: "Banking Backend Application",
    tech: ["Express.js", "MongoDB", "Node.js", "REST API"],
    description: "A secure backend system built to manage customer transactions, balances, and account history with strict validation logic, error handling, and structured RESTful API endpoints.",
    github: "https://github.com/binod01nep",
    link: "https://github.com/binod01nep",
    featured: true,
    borderColor: "hover:border-blue-500/40"
  },
  {
    title: "Smart Resume Builder",
    category: "Full Stack Web Application",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: "A full-stack MERN resume builder enabling users to design, customize, and instant-preview professional resumes with dynamic template rendering and direct PDF downloads.",
    github: "https://github.com/binod01nep",
    link: "https://github.com/binod01nep",
    featured: true,
    borderColor: "hover:border-purple-500/40"
  }
];

const Project = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <section id="projects" className="scroll-mt-24">
      
      {/* Section Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
        isLight ? 'bg-blue-100 border border-blue-300 text-blue-800' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
      }`}>
        <Briefcase className="w-3.5 h-3.5" />
        <span>03 · Projects Portfolio</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h3>
          <p className={`text-xs font-mono mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Real-world software systems, AI security tools, and backend platforms built by me
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              glass-card rounded-2xl p-5 border ${project.borderColor}
              transition duration-200 flex flex-col justify-between group
            `}
          >
            {/* Top Folder Header */}
            <div>
              <div className={`flex items-center justify-between text-xs font-mono mb-3 pb-2.5 border-b ${
                isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-400'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                  <span className={`text-[11px] ${isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>Project 0{index + 1}</span>
                </div>
                <span className={`text-[9px] px-2 py-0.5 rounded border ${
                  isLight ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className={`text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition mb-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {project.title}
              </h4>

              <p className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {project.description}
              </p>
            </div>

            {/* Bottom Badges & Actions */}
            <div className={`flex flex-col gap-3 pt-3 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-950 border-white/10 text-slate-300'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-mono transition ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <i className="ri-github-fill text-base"></i>
                  <span>GitHub Repository ↗</span>
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Project;

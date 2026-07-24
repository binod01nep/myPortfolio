/**
 * ResponseRenderer.jsx
 * Renders rich response content based on the response type from chatEngine.
 * Handles: text, projects, skills, social, resume, contact, unknown.
 */
import React from 'react';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Render markdown-lite: **bold**, URLs as links, and newlines */
const RenderText = ({ content }) => {
  const parts = content.split('\n');

  // Parse a single line: handles **bold** and auto-linked URLs
  const parseLine = (line) => {
    // Split by URLs first
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlParts = line.split(urlRegex);

    return urlParts.map((part, idx) => {
      if (urlRegex.test(part)) {
        // Reset regex lastIndex
        urlRegex.lastIndex = 0;
        return (
          <a
            key={idx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-link"
          >
            {part}
          </a>
        );
      }
      // Parse **bold** within non-URL segments
      urlRegex.lastIndex = 0;
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((seg, j) =>
        seg.startsWith('**') && seg.endsWith('**') ? (
          <strong key={`${idx}-${j}`}>{seg.slice(2, -2)}</strong>
        ) : (
          <span key={`${idx}-${j}`}>{seg}</span>
        )
      );
    });
  };

  return (
    <div className="chat-text-content">
      {parts.map((line, i) => (
        <React.Fragment key={i}>
          {parseLine(line)}
          {i < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

// ─── Project Cards ───────────────────────────────────────────────────────────
const ProjectCards = ({ projects }) => (
  <div className="chat-projects-grid">
    {projects.map((p, i) => (
      <div key={i} className={`chat-project-card chat-project-card--${p.color}`}>
        <div className="chat-project-header">
          <span className="chat-project-category">{p.category}</span>
        </div>
        <h4 className="chat-project-title">{p.title}</h4>
        <p className="chat-project-desc">{p.description}</p>
        <div className="chat-project-tech">
          {p.tech.map((t, idx) => (
            <span key={idx} className="chat-tech-badge">{t}</span>
          ))}
        </div>
        <div className="chat-project-actions">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-btn chat-btn--outline"
          >
            <svg className="chat-btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-btn chat-btn--primary"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    ))}
  </div>
);

// ─── Skills Cards ────────────────────────────────────────────────────────────
const SkillsCard = ({ skills }) => {
  const categories = [
    { label: '💻 Languages', items: skills.languages },
    { label: '🎨 Frontend', items: skills.frontend },
    { label: '⚙️ Backend', items: skills.backend },
    { label: '🗄️ Databases', items: skills.databases },
    { label: '🤖 AI / ML', items: skills.aiml },
    { label: '☁️ Cloud', items: skills.cloud },
    { label: '🛠️ Tools', items: skills.tools },
  ];

  return (
    <div className="chat-skills-grid">
      {categories.map((cat, i) => (
        <div key={i} className="chat-skill-category">
          <div className="chat-skill-label">{cat.label}</div>
          <div className="chat-skill-items">
            {cat.items.map((item, j) => (
              <span key={j} className="chat-skill-badge">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Social Link Cards ───────────────────────────────────────────────────────
const SocialCards = ({ links }) => {
  const iconMap = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="chat-social-icon">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="chat-social-icon">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chat-social-icon">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    leetcode: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="chat-social-icon">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636c-1.005-1.006-2.412-1.507-3.85-1.507s-2.845.501-3.85 1.507l-4.321 4.382c-1.006 1.005-1.536 2.378-1.536 3.82 0 1.443.53 2.816 1.536 3.821l4.333 4.364c1.005 1.006 2.412 1.507 3.85 1.507s2.845-.501 3.85-1.507l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z"/>
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chat-social-icon">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  };

  const colorMap = {
    slate: '#94a3b8',
    cyan: '#22d3ee',
    emerald: '#10b981',
    amber: '#f59e0b',
    rose: '#f43f5e',
  };

  return (
    <div className="chat-social-cards">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-social-card"
          style={{ '--accent': colorMap[link.color] || '#10b981' }}
        >
          <div className="chat-social-icon-wrap" style={{ color: colorMap[link.color] || '#10b981' }}>
            {iconMap[link.icon] || <span>🔗</span>}
          </div>
          <div className="chat-social-info">
            <span className="chat-social-name">{link.platform}</span>
            <span className="chat-social-subtitle">{link.subtitle}</span>
          </div>
          <svg className="chat-social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      ))}
    </div>
  );
};

// ─── Resume Card ─────────────────────────────────────────────────────────────
const ResumeCard = ({ resume }) => (
  <div className="chat-resume-card">
    <div className="chat-resume-icon">📄</div>
    <div className="chat-resume-info">
      <span className="chat-resume-name">Binod Budha – Resume</span>
      <span className="chat-resume-sub">PDF · Latest Version</span>
    </div>
    <a
      href={resume.url}
      download={resume.filename}
      className="chat-btn chat-btn--primary chat-btn--resume"
    >
      ⬇ Download
    </a>
  </div>
);

// ─── Contact Action Buttons ───────────────────────────────────────────────────
const ContactActions = ({ contact, social, resume }) => {
  const actions = [
    {
      label: '📧 Email',
      url: `mailto:${contact.email}`,
      cls: 'chat-btn--emerald',
    },
    {
      label: '💼 LinkedIn',
      url: social.find((s) => s.platform === 'LinkedIn')?.url || '#',
      cls: 'chat-btn--cyan',
    },
    {
      label: '🐙 GitHub',
      url: social.find((s) => s.platform === 'GitHub')?.url || '#',
      cls: 'chat-btn--slate',
    },
    {
      label: '📄 Resume',
      url: resume.url,
      download: resume.filename,
      cls: 'chat-btn--amber',
    },
  ];

  return (
    <div className="chat-contact-actions">
      {actions.map((a, i) => (
        <a
          key={i}
          href={a.url}
          target={a.download ? '_self' : '_blank'}
          rel="noopener noreferrer"
          download={a.download}
          className={`chat-btn ${a.cls}`}
        >
          {a.label}
        </a>
      ))}
    </div>
  );
};

// ─── Main Renderer ───────────────────────────────────────────────────────────
const ResponseRenderer = ({ response }) => {
  return (
    <div className="chat-response">
      {/* Always render text content */}
      {response.content && <RenderText content={response.content} />}

      {/* Optional action link */}
      {response.action && (
        <a
          href={response.action.url}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-btn chat-btn--primary chat-btn--sm"
          style={{ marginTop: 8, display: 'inline-flex' }}
        >
          {response.action.label}
        </a>
      )}

      {/* Rich content based on type */}
      {response.type === 'projects' && response.projects && (
        <ProjectCards projects={response.projects} />
      )}
      {response.type === 'skills' && response.skills && (
        <SkillsCard skills={response.skills} />
      )}
      {response.type === 'social' && response.links && (
        <SocialCards links={response.links} />
      )}
      {response.type === 'resume' && response.resume && (
        <ResumeCard resume={response.resume} />
      )}
      {response.type === 'contact' && (
        <ContactActions
          contact={response.contact}
          social={response.social}
          resume={response.resume}
        />
      )}
    </div>
  );
};

export default ResponseRenderer;

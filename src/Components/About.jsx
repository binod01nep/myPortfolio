import React from 'react';
import { User, Sparkles, Code2, Database, Layout, Server, Wrench, GraduationCap, Trophy, Cpu } from 'lucide-react';

const About = ({ theme }) => {
  const isLight = theme === 'light';

  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gandhinagar, Gujarat",
      period: "2023 – 2027",
      gpa: "GPA 9.22 / 10.0",
      highlight: "Consistently top-ranked student in CSE"
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Padmodaya Secondary School",
      location: "Dang, Nepal",
      period: "2021 – 2023",
      gpa: "GPA 3.63 / 4.00",
      highlight: "Distinction academic record"
    }
  ];

  const achievements = [
    {
      title: "COMPEX Scholarship",
      organization: "Govt. of India",
      year: "2023",
      description: "Prestigious merit-based full scholarship awarded to high-achieving Nepali students for engineering."
    },
    {
      title: "Top Rank Academic Excellence",
      organization: "PDEU",
      year: "2023 – Present",
      description: "Maintained a GPA of 9.22 / 10.00 across all CSE semesters."
    },
    {
      title: "GenAI Intensive Agent Program",
      organization: "Google DeepMind × Kaggle",
      year: "2025",
      description: "Hands-on intensive training program building autonomous AI agents & LLM integrations."
    }
  ];

  const languagesSpoken = ["Nepali (Native)", "English (Fluent)", "Hindi (Fluent)"];

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      items: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: "OOP / Core" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "ML & Scripting" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "ES6+ Full Stack" },
        { name: "C Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: "Data Structures" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Semantic Markup" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Responsive Layouts" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Layout,
      items: [
        { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Hooks & SPA" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: "Modern UI Design" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      items: [
        { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Runtime" },
        { name: "Express JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: "REST API", isDarkLogo: true }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      items: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "NoSQL DB" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Relational Queries" }
      ]
    },
    {
      title: "AI, ML & Automation",
      icon: Cpu,
      items: [
        { name: "Groq API", logo: "https://groq.com/wp-content/uploads/2024/03/Groq_Logo_300x300.png", level: "Ultra-fast LLMs" },
        { name: "NLP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Text Processing" },
        { name: "n8n", logo: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png", level: "Workflow Automation" },
        { name: "Prompt Eng.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "LLM Agents" }
      ]
    },
    {
      title: "Cloud & Dev Tools",
      icon: Wrench,
      items: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: "Cloud Hosting" },
        { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Version Control" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: "API Testing" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "IDE" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      
      {/* ABOUT ME HERO SECTION */}
      <section id="about" className="pt-2 scroll-mt-24">
        
        {/* Section badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
          isLight ? 'bg-emerald-100 border border-emerald-300 text-emerald-800' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        }`}>
          <User className="w-3.5 h-3.5" />
          <span>01 · About Me</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          MERN Stack Developer & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
            CS Undergraduate @ PDEU
          </span>
        </h2>

        {/* Compact Bio & Highlights */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Bio */}
          <div className={`xl:col-span-8 glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between gap-2.5 text-xs sm:text-sm leading-relaxed ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            <div className="flex flex-col gap-2">
              <p>
                I am <strong className={isLight ? 'text-slate-900' : 'text-white'}>Binod Budha</strong>, a Computer Science student at <span className="text-emerald-600 dark:text-emerald-400 font-medium">Pandit Deendayal Energy University (PDEU)</span> in Gandhinagar, Gujarat.
              </p>
              <p>
                I specialize in scalable MERN stack web applications, RESTful APIs, and AI/ML integrations (including Groq API & NLP review routing). I am consistently top-ranked at PDEU with a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">GPA of 9.22 / 10.0</strong>.
              </p>
            </div>

            {/* Languages Spoken Badges (Single Line) */}
            <div className={`mt-1 pt-2.5 border-t flex flex-row items-center gap-2 text-xs font-mono overflow-x-auto whitespace-nowrap scrollbar-none ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <span className={`shrink-0 text-[11px] font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>LANGUAGES SPOKEN:</span>
              <div className="flex items-center gap-2 shrink-0">
                {languagesSpoken.map((lang, idx) => (
                  <span key={idx} className={`px-2.5 py-0.5 rounded-full text-[11px] whitespace-nowrap shrink-0 ${
                    isLight ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-slate-900 border border-white/10 text-emerald-300'
                  }`}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className={`xl:col-span-4 glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between ${
            isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-900/60 border-white/10'
          }`}>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>QUICK SNAPSHOT</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className={`p-2.5 rounded-xl border flex flex-col ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-white/5'
                }`}>
                  <span className="text-slate-400 text-[10px]">CURRENT GPA</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">9.22 / 10.0</span>
                </div>
                <div className={`p-2.5 rounded-xl border flex flex-col ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-white/5'
                }`}>
                  <span className="text-slate-400 text-[10px]">SCHOLARSHIP</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs truncate">COMPEX Award</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-xl border flex flex-col text-xs font-mono ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-white/5'
              }`}>
                <span className="text-slate-400 text-[10px]">AVAILABILITY</span>
                <span className={`font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>Open for Internships & Full-Time</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* EDUCATION & EXPERIENCE DUAL SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Education */}
        <div className="glass-card p-5 rounded-2xl border flex flex-col gap-4">
          <div className={`flex items-center gap-2 text-sm font-mono font-bold border-b pb-2.5 ${
            isLight ? 'text-slate-900 border-slate-200' : 'text-white border-white/10'
          }`}>
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Education</span>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((item, idx) => (
              <div key={idx} className={`p-3.5 rounded-xl border flex flex-col gap-1 text-xs ${
                isLight ? 'bg-white/80 border-slate-200' : 'bg-slate-950/60 border-white/5'
              }`}>
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-medium">
                  <span>{item.period}</span>
                  <span className={`px-2 py-0.5 rounded border ${
                    isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-emerald-500/10 border-emerald-500/20'
                  }`}>{item.gpa}</span>
                </div>
                <h4 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.degree}</h4>
                <p className={`font-mono ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{item.institution}</p>
                <p className={`text-[11px] italic mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>★ {item.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Achievements */}
        <div className="glass-card p-5 rounded-2xl border flex flex-col gap-4">
          <div className={`flex items-center gap-2 text-sm font-mono font-bold border-b pb-2.5 ${
            isLight ? 'text-slate-900 border-slate-200' : 'text-white border-white/10'
          }`}>
            <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Honors & Experience</span>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            {achievements.map((item, idx) => (
              <div key={idx} className={`p-3 rounded-xl border flex flex-col gap-1 ${
                isLight ? 'bg-white/80 border-slate-200' : 'bg-slate-950/60 border-white/5'
              }`}>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-amber-600 dark:text-amber-300 font-bold">★ {item.title}</span>
                  <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>{item.year}</span>
                </div>
                <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24">
        
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
          isLight ? 'bg-cyan-100 border border-cyan-300 text-cyan-800' : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
        }`}>
          <Code2 className="w-3.5 h-3.5" />
          <span>02 · Skills & Stack</span>
        </div>

        <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-6 ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          Skills & <span className="text-emerald-600 dark:text-emerald-400">Tools Stack</span>
        </h3>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            
            return (
              <div 
                key={catIdx}
                className="glass-card rounded-2xl p-4 border transition duration-200 flex flex-col gap-3"
              >
                {/* Category Header */}
                <div className={`flex items-center justify-between border-b pb-2 ${
                  isLight ? 'border-slate-200' : 'border-white/10'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${
                      isLight ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      <CategoryIcon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className={`text-xs font-mono font-bold ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {category.title}
                    </h4>
                  </div>
                </div>

                {/* Items */}
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`p-2 rounded-xl border transition flex items-center gap-2 ${
                        isLight ? 'bg-white border-slate-200 hover:border-emerald-400' : 'bg-slate-950/80 border-white/5 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg p-1 flex items-center justify-center shrink-0 ${
                        item.isDarkLogo ? 'bg-slate-800' : (isLight ? 'bg-slate-100' : 'bg-slate-900')
                      }`}>
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className={`text-[11px] font-semibold truncate ${
                          isLight ? 'text-slate-800' : 'text-slate-200'
                        }`}>
                          {item.name}
                        </span>
                        <span className={`text-[9px] font-mono truncate ${
                          isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};

export default About;

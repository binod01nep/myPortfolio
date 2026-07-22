import React, { useState } from 'react';
import { 
  Folder, 
  User, 
  Code2, 
  Briefcase, 
  Award, 
  Mail, 
  FileText, 
  MapPin, 
  GraduationCap, 
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About & Background', num: '01', icon: User },
    { id: 'skills', label: 'Skills & Tech Stack', num: '02', icon: Code2 },
    { id: 'projects', label: 'Projects Built', num: '03', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', num: '04', icon: Award },
    { id: 'connect', label: "Let's Connect", num: '05', icon: Mail },
  ];

  const isLight = theme === 'light';

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between transition-colors ${
        isLight ? 'bg-white/95 border-slate-200 text-slate-900 shadow-xs' : 'bg-[#0b0f17]/95 border-white/10 text-white'
      }`}>
        {/* Mobile Social Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="https://github.com/binod01nep"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-lg transition ${
              isLight ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title="GitHub Profile"
          >
            <i className="ri-github-fill text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/binod-budha-7691773a1/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-lg transition ${
              isLight ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10'
            }`}
            title="LinkedIn Profile"
          >
            <i className="ri-linkedin-box-fill text-lg"></i>
          </a>
          <a
            href="https://leetcode.com/u/ambilax/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-lg transition ${
              isLight ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' : 'text-slate-400 hover:text-amber-400 hover:bg-amber-500/10'
            }`}
            title="LeetCode Profile (AmBiLax)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636c-1.005-1.006-2.412-1.507-3.85-1.507s-2.845.501-3.85 1.507l-4.321 4.382c-1.006 1.005-1.536 2.378-1.536 3.82 0 1.443.53 2.816 1.536 3.821l4.333 4.364c1.005 1.006 2.412 1.507 3.85 1.507s2.845-.501 3.85-1.507l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z"/>
            </svg>
          </a>
          <a
            href="mailto:bcb4314@gmail.com"
            className={`p-1.5 rounded-lg transition ${
              isLight ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50' : 'text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10'
            }`}
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Action Controls (Theme Toggle + Menu Toggle) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition active:scale-95 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200' : 'bg-slate-900 border-white/15 text-slate-200 hover:bg-slate-800'
            }`}
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-xl border transition active:scale-95 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200' : 'bg-slate-900 border-white/15 text-slate-200 hover:bg-slate-800'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-emerald-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Main Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-40
        w-80 sm:w-88 xl:w-96
        p-4 lg:p-5
        flex flex-col gap-4
        backdrop-blur-xl border-r
        transition-all duration-300 ease-in-out
        overflow-y-auto custom-scrollbar
        ${isLight 
          ? 'bg-white/95 lg:bg-white/90 border-slate-200 text-slate-800' 
          : 'bg-[#0b0f17]/95 lg:bg-[#0b0f17]/85 border-white/10 text-slate-100'}
        ${mobileOpen ? 'translate-x-0 pt-20' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* LINKEDIN-STYLE PROFILE BANNER CARD */}
        <div className={`relative rounded-2xl border overflow-hidden backdrop-blur-md transition-colors ${
          isLight ? 'bg-white border-slate-200 shadow-md' : 'bg-slate-900/60 border-white/10 shadow-xl'
        }`}>
          
          {/* Top Banner Cover Image Space with bg.png */}
          <div className={`relative h-24 sm:h-28 w-full overflow-hidden border-b ${
            isLight ? 'bg-slate-200 border-slate-200' : 'bg-slate-950 border-white/10'
          }`}>
            <img
              src="/bg.png"
              alt="Cover Background"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />
            
            {/* Watermark badge */}
            <div className="absolute top-2 right-3 font-mono text-[10px] text-emerald-300 bg-black/60 px-2 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-xs">
              MERN & AI
            </div>
          </div>

          {/* Profile Card Body */}
          <div className="p-4 pt-0">
            
            {/* Centered Photo & Online Status (Overlapping Banner) */}
            <div className="flex flex-col items-center text-center">
              <div className="relative -mt-12 sm:-mt-14 mb-3 group">
                <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-0.5 ${
                  isLight ? 'bg-white' : 'bg-slate-950'
                }`}>
                  <img
                    src="/image.png"
                    alt="Binod Budha"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-300"
                  />
                </div>
                {/* Live Status Badge */}
                <div className={`absolute -bottom-1 -right-1 border rounded-full px-2 py-0.5 flex items-center gap-1 ${
                  isLight ? 'bg-white border-emerald-500/50 shadow-sm' : 'bg-slate-900/95 border-emerald-500/40'
                }`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
                </div>
              </div>

              {/* Name & Title */}
              <h1 className={`text-xl font-bold tracking-tight flex items-center gap-1.5 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Binod Budha
                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
              </h1>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 flex items-center gap-1 font-medium">
                <Code2 className="w-3.5 h-3.5" />
                MERN Stack & CS Undergrad
              </p>

              {/* Sub details */}
              <div className={`mt-3 w-full pt-2.5 border-t flex flex-col gap-1.5 text-[11px] text-left font-mono ${
                isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
              }`}>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">PDEU, Gandhinagar (GPA 9.22)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Gandhinagar, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Social Media Links & Resume */}
            <div className={`mt-4 pt-3 border-t flex flex-col gap-2.5 ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <div className={`flex items-center justify-around p-1.5 rounded-xl border ${
                isLight ? 'bg-slate-100/90 border-slate-200' : 'bg-slate-950/60 border-white/5'
              }`}>
                <a
                  href="https://github.com/binod01nep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition ${
                    isLight ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                  title="GitHub Profile"
                >
                  <i className="ri-github-fill text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/binod-budha-7691773a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition ${
                    isLight ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                  title="LinkedIn Profile"
                >
                  <i className="ri-linkedin-box-fill text-lg"></i>
                </a>
                <a
                  href="https://leetcode.com/u/ambilax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-lg transition ${
                    isLight ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' : 'text-slate-400 hover:text-amber-400 hover:bg-amber-500/10'
                  }`}
                  title="LeetCode Profile (AmBiLax)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636c-1.005-1.006-2.412-1.507-3.85-1.507s-2.845.501-3.85 1.507l-4.321 4.382c-1.006 1.005-1.536 2.378-1.536 3.82 0 1.443.53 2.816 1.536 3.821l4.333 4.364c1.005 1.006 2.412 1.507 3.85 1.507s2.845-.501 3.85-1.507l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z"/>
                  </svg>
                </a>
                <a
                  href="mailto:bcb4314@gmail.com"
                  className={`p-1.5 rounded-lg transition ${
                    isLight ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50' : 'text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10'
                  }`}
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Download Resume Button */}
              <a
                href="/BinodBudhaResume.pdf"
                download
                className="w-full py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-mono font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 transition transform active:scale-95 border border-emerald-400/30"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
                <ExternalLink className="w-3 h-3 opacity-70 ml-auto" />
              </a>
            </div>

          </div>
        </div>

        {/* NAVIGATION LINKS SECTION */}
        <div className="flex flex-col gap-1.5">
          <div className={`px-2 flex items-center justify-between text-[11px] font-mono ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}>
            <span>NAVIGATION</span>
            <span className="text-[10px] font-mono">5 sections</span>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-all duration-200 group border
                    ${isActive 
                      ? (isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold shadow-xs' : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold shadow-sm') 
                      : (isLight ? 'bg-slate-100/60 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300' : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 hover:border-white/10')}
                  `}
                >
                  <div className="flex items-center gap-2">
                    <Folder className={`w-3.5 h-3.5 transition ${
                      isActive ? 'text-emerald-500 fill-emerald-500/20' : (isLight ? 'text-amber-500/80 group-hover:text-amber-600' : 'text-amber-400/70 group-hover:text-amber-400')
                    }`} />
                    <span className={isLight && !isActive ? 'text-slate-700' : ''}>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className={`text-[9px] ${
                      isActive ? 'text-emerald-600 font-bold' : (isLight ? 'text-slate-400' : 'text-slate-400')
                    }`}>
                      {item.num}
                    </span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${
                      isActive ? 'text-emerald-500 translate-x-0.5' : (isLight ? 'text-slate-400 opacity-0 group-hover:opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100')
                    }`} />
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* FOOTER BADGE IN SIDEBAR */}
        <div className={`mt-auto pt-3 border-t text-center ${
          isLight ? 'border-slate-200' : 'border-white/10'
        }`}>
          <p className={`text-[10px] font-mono ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Designed & Built by <span className="text-emerald-600 font-semibold">Binod Budha</span>
          </p>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;

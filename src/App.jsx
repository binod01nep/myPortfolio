import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Project from './Components/Project';
import Certificates from './Components/Certificates';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import ChatAssistant from './Components/ChatAssistant/ChatAssistant';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Sync theme class on body element
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  // Highlight active sidebar menu item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'certificates', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative selection:bg-emerald-500/30 ${theme === 'light' ? 'bg-slate-50 text-slate-900 selection:text-emerald-800' : 'bg-[#080a0f] text-slate-100 selection:text-emerald-200'}`}>
      
      {/* Background Mesh Glow */}
      <div className="bg-ambient-glow" />

      {/* STICKY THEME TOGGLE BUTTON (Desktop only, mobile handled in mobile bar) */}
      <div className="hidden lg:block fixed top-6 right-8 z-50">
        <button
          onClick={toggleTheme}
          className={`p-2.5 sm:px-3.5 sm:py-2 rounded-full border transition-all duration-300 flex items-center gap-2 shadow-lg backdrop-blur-md ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-300 text-amber-600 hover:bg-slate-100 hover:border-amber-400' 
              : 'bg-slate-900/90 border-white/15 text-emerald-400 hover:bg-slate-800 hover:border-emerald-400/50'
          }`}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span className="hidden sm:inline font-mono text-xs text-slate-200 font-medium">Light</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline font-mono text-xs text-slate-800 font-semibold">Dark</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* Left Fixed Folder Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />

        {/* Right Scrollable Content Area */}
        <main className="flex-1 lg:ml-80 xl:ml-96 px-4 sm:px-8 lg:px-12 pt-16 lg:pt-10 max-w-7xl w-full flex flex-col gap-20">
          
          {/* About & Skills Section */}
          <About theme={theme} />

          {/* Projects Section */}
          <Project theme={theme} />

          {/* Certificates Section */}
          <Certificates theme={theme} />

          {/* Contact Section */}
          <Connect theme={theme} />

          {/* Footer */}
          <Footer theme={theme} />

        </main>
      </div>

      {/* Floating AI Portfolio Chat Assistant */}
      <ChatAssistant theme={theme} />

    </div>
  );
};

export default App;
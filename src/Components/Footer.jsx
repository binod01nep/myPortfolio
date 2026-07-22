import React from 'react';
import { ArrowUp, Folder } from 'lucide-react';

const Footer = ({ theme }) => {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`mt-20 pt-6 pb-12 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono transition-colors ${
      isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
    }`}>
      
      <div className="flex items-center gap-2">
        <Folder className="w-4 h-4 text-amber-500 fill-amber-500/20" />
        <span>© {new Date().getFullYear()} Binod Budha. All rights reserved.</span>
      </div>

      <button
        onClick={scrollToTop}
        className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
          isLight ? 'bg-white border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700' : 'bg-slate-900 border-white/10 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400'
        }`}
      >
        <span>Back to Top</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>

    </footer>
  );
};

export default Footer;

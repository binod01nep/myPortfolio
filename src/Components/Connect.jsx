import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Phone, ExternalLink, Globe } from 'lucide-react';

const Connect = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isLight = theme === 'light';

  const email = "bcb4314@gmail.com";
  const phone = "+91-6393490697";
  const website = "budhabinod.com.np";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="connect" className="scroll-mt-24 pb-12">
      
      {/* Section Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
        isLight ? 'bg-emerald-100 border border-emerald-300 text-emerald-800' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
      }`}>
        <Mail className="w-3.5 h-3.5" />
        <span>05 · Contact & Connect</span>
      </div>

      <div className={`glass-card rounded-2xl p-5 sm:p-8 border relative overflow-hidden ${
        isLight ? 'bg-gradient-to-br from-white via-slate-50 to-white border-slate-200 shadow-md' : 'bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 border-white/10'
      }`}>
        
        {/* Glow backdrop accent */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Let's Connect & <span className="text-emerald-600 dark:text-emerald-400">Build</span>
              </h3>
              <p className={`text-xs font-sans mt-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Open to full-time roles, engineering internships, and collaborative software projects.
              </p>
            </div>

            {/* Direct Channel Badges */}
            <div className="flex flex-col gap-2.5">
              
              {/* Email Box */}
              <div className={`p-3 rounded-xl border flex items-center justify-between gap-2 text-xs ${
                isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-950/80 border-white/10'
              }`}>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono text-slate-400">EMAIL</span>
                    <span className={`font-mono font-semibold truncate text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition flex items-center gap-1 shrink-0 ${
                    isLight ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50' : 'bg-slate-800 border-white/10 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Box */}
              <div className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-950/80 border-white/10'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-slate-400">PHONE</span>
                    <span className={`font-mono font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{phone}</span>
                  </div>
                </div>
                <a href={`tel:${phone}`} className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline">Call ↗</a>
              </div>

            </div>

            {/* Social Network Cards Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="https://github.com/binod01nep"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition flex items-center justify-between group ${
                  isLight ? 'bg-white border-slate-200 hover:border-slate-400' : 'bg-slate-950/60 border-white/10 hover:border-slate-400/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className={`ri-github-fill text-base ${isLight ? 'text-slate-800' : 'text-slate-300'}`}></i>
                  <span className={`font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>GitHub</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/binod-budha-7691773a1/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition flex items-center justify-between group ${
                  isLight ? 'bg-white border-slate-200 hover:border-cyan-400' : 'bg-slate-950/60 border-white/10 hover:border-cyan-400/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className="ri-linkedin-box-fill text-base text-cyan-600 dark:text-cyan-400"></i>
                  <span className={`font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>LinkedIn</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-500" />
              </a>

              <a
                href="https://leetcode.com/u/ambilax/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition flex items-center justify-between group ${
                  isLight ? 'bg-white border-slate-200 hover:border-amber-400' : 'bg-slate-950/60 border-white/10 hover:border-amber-400/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-amber-500 shrink-0" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636c-1.005-1.006-2.412-1.507-3.85-1.507s-2.845.501-3.85 1.507l-4.321 4.382c-1.006 1.005-1.536 2.378-1.536 3.82 0 1.443.53 2.816 1.536 3.821l4.333 4.364c1.005 1.006 2.412 1.507 3.85 1.507s2.845-.501 3.85-1.507l2.609-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z"/>
                  </svg>
                  <span className={`font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>LeetCode</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-500" />
              </a>

              <a
                href="https://budhabinod.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition flex items-center justify-between group ${
                  isLight ? 'bg-white border-slate-200 hover:border-emerald-400' : 'bg-slate-950/60 border-white/10 hover:border-emerald-400/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className={`font-semibold text-[11px] ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>Website</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <form onSubmit={handleFormSubmit} className={`flex flex-col gap-3 p-4 rounded-xl border ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-950/70 border-white/10'
          }`}>
            <h4 className={`text-xs font-mono font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Send a Direct Message
            </h4>

            <div className="flex flex-col gap-1 text-xs font-mono">
              <label className={isLight ? 'text-[10px] text-slate-500' : 'text-[10px] text-slate-400'}>NAME</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className={`px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 ${
                  isLight ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400' : 'bg-slate-900 border-white/10 text-white placeholder:text-slate-600'
                }`}
              />
            </div>

            <div className="flex flex-col gap-1 text-xs font-mono">
              <label className={isLight ? 'text-[10px] text-slate-500' : 'text-[10px] text-slate-400'}>EMAIL</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className={`px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 ${
                  isLight ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400' : 'bg-slate-900 border-white/10 text-white placeholder:text-slate-600'
                }`}
              />
            </div>

            <div className="flex flex-col gap-1 text-xs font-mono">
              <label className={isLight ? 'text-[10px] text-slate-500' : 'text-[10px] text-slate-400'}>MESSAGE</label>
              <textarea
                rows={3}
                required
                placeholder="Let's build something..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-emerald-500 resize-none ${
                  isLight ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400' : 'bg-slate-900 border-white/10 text-white placeholder:text-slate-600'
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-lg transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{formSubmitted ? "Opening Mail App..." : "Send Message"}</span>
            </button>
          </form>

        </div>

      </div>

    </section>
  );
};

export default Connect;

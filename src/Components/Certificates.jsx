import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, CheckCircle, X } from 'lucide-react';

const Certificates = ({ theme }) => {
  const [expandedCert, setExpandedCert] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const isLight = theme === 'light';

  const certificates = [
    {
      id: 1,
      title: "Kaggle Python Certificate",
      issuer: "Kaggle · Google",
      year: "2025",
      image: "/python.png",
      skills: ["Python Programming", "Data Structures", "Functions & Logic"]
    },
    {
      id: 2,
      title: "5-Day GenAI Intensive — Agent Program",
      issuer: "Google DeepMind · Kaggle",
      year: "2025",
      image: "/Kaggle_certificate.png",
      skills: ["LLMs & GenAI", "Agentic Workflows", "Prompt Engineering"]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCert(prev => (prev === id ? null : id));
  };

  return (
    <section id="certificates" className="scroll-mt-24">
      
      {/* Section Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
        isLight ? 'bg-amber-100 border border-amber-300 text-amber-800' : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
      }`}>
        <Award className="w-3.5 h-3.5" />
        <span>04 · Certificates & Credentials</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Honors & <span className="text-emerald-600 dark:text-emerald-400">Certifications</span>
          </h3>
          <p className={`text-xs font-mono mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Verified credentials from Kaggle & Google DeepMind
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert) => {
          const isExpanded = expandedCert === cert.id;

          return (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-4 border transition-all duration-300 flex flex-col gap-3 group"
            >
              {/* Details Row */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1 text-[11px]">
                    <CheckCircle className="w-3 h-3" />
                    {cert.issuer}
                  </span>
                  <span className={isLight ? 'text-slate-500 text-[10px]' : 'text-slate-400 text-[10px]'}>{cert.year}</span>
                </div>

                <h4 className={`text-sm font-bold group-hover:text-amber-600 dark:group-hover:text-amber-300 transition ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  {cert.title}
                </h4>

                <div className="flex flex-wrap gap-1 mt-0.5">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                        isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-950 border-white/5 text-slate-400'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand / Collapse Toggle Button */}
              <button
                onClick={() => toggleExpand(cert.id)}
                className={`w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-[11px] font-mono font-semibold border transition-all duration-200 ${
                  isExpanded
                    ? (isLight
                        ? 'bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/15')
                    : (isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-amber-300'
                        : 'bg-slate-900/60 border-white/5 text-slate-400 hover:bg-slate-800 hover:border-amber-500/30')
                }`}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>Hide Certificate</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </>
                )}
              </button>

              {/* Collapsible Certificate Image */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`relative rounded-xl overflow-hidden border cursor-pointer ${
                    isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-white/10'
                  }`}
                  onClick={() => setSelectedCert(cert)}
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 hover:bg-slate-950/40 transition duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-mono font-bold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/20">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Full-screen Modal Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 flex items-center justify-center"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={`relative max-w-3xl w-full border rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col gap-3 ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-white/20'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between border-b pb-2 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <h4 className={`text-sm font-mono font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                <Award className="w-4 h-4 text-amber-500" />
                {selectedCert.title}
              </h4>
              <button
                onClick={() => setSelectedCert(null)}
                className={`p-1 rounded-lg transition ${isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-white/10 text-slate-400'}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certificates;

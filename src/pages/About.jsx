import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../Components/SectionHeader";

export default function About() {
  const { personal, contact } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-10">
      
      {/* ─── Header ───────────────────────────────────────────────────────── */}
      <section>
        <SectionHeader
          number="01"
          title="About"
          description="Brief introduction and technical focus."
        />

        <div className="max-w-3xl flex flex-col gap-6">
          <p className="text-base sm:text-lg text-[#ededed] font-normal leading-relaxed">
            I am <strong className="font-semibold text-white">{personal.name}</strong>, a Software Developer and Computer Science undergraduate at Pandit Deendayal Energy University (PDEU) with a 9.22/10 CGPA.
          </p>

          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            I build software at the intersection of full-stack engineering and AI. My work focuses on responsive web applications, secure REST APIs, and practical LLM/NLP integrations with clean code and minimal dependencies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1f1f1f]">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#525252]">LOCATION</span>
              <span className="text-xs text-[#ededed]">{personal.status.location}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#525252]">EDUCATION</span>
              <span className="text-xs text-[#ededed]">PDEU (2023 — 2027)</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#525252]">HONORS</span>
              <span className="text-xs text-[#ededed]">COMPEX Scholarship</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/work"
              className="px-4 py-2 bg-[#ededed] hover:bg-white text-[#0a0a0a] font-mono text-xs font-semibold tracking-wide transition-colors"
            >
              View Work →
            </Link>

            <a
              href={contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#2e2e2e] hover:border-[#525252] text-[#a1a1aa] hover:text-white font-mono text-xs tracking-wide transition-colors"
            >
              Download Resume ↗
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

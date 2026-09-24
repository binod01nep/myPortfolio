import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const { personal, contact } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-14">
      
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11px] text-[#71717a] tracking-widest uppercase flex items-center gap-2">
            <span>SOFTWARE DEVELOPER</span>
            <span className="text-[#3a3a3a]">/</span>
            <span className="text-[#a1a1aa]">CS UNDERGRADUATE</span>
          </div>

          {/* Large Editorial Two-Tone Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.92] flex flex-col select-none">
            <span className="text-white">Binod</span>
            <span className="text-[#71717a]">Budha.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] font-normal leading-relaxed max-w-xl mt-1">
            {personal.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl pt-4 border-t border-[#1a1a1a]">
          <div className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            <p>
              Computer Science undergraduate at{" "}
              <span className="text-[#ededed]">Pandit Deendayal Energy University (PDEU)</span>,
              Gandhinagar.
            </p>
          </div>

          <div className="flex flex-col gap-1 font-mono text-xs text-[#71717a] justify-center">
            <div className="flex items-center justify-between py-0.5 border-b border-[#1a1a1a]">
              <span>BATCH</span>
              <span className="text-[#ededed]">{personal.status.period}</span>
            </div>
            <div className="flex items-center justify-between py-0.5 border-b border-[#1a1a1a]">
              <span>ACADEMICS</span>
              <span className="text-[#ededed]">CGPA {personal.status.gpa}</span>
            </div>
          </div>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            to="/work"
            className="px-5 py-2 bg-[#ededed] hover:bg-white text-[#0a0a0a] font-mono text-xs font-semibold tracking-wide transition-colors"
          >
            View Work →
          </Link>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-[#2e2e2e] hover:border-[#525252] text-[#a1a1aa] hover:text-white font-mono text-xs tracking-wide transition-colors"
          >
            Download Resume ↗
          </a>
        </div>
      </section>

    </div>
  );
}

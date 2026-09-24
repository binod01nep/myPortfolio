import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1f1f1f] bg-[#0a0a0a] mt-24 py-12 text-xs text-[#71717a]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left: Identity & Availability */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-mono text-[#ededed]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ededed] inline-block animate-pulse"></span>
            <span>{portfolioData.personal.name}</span>
            <span className="text-[#525252]">/</span>
            <span className="text-[#a1a1aa]">{portfolioData.personal.status.period}</span>
          </div>
          <p className="text-[#888888] max-w-sm">
            Available for full-time engineering roles, internships & collaborative software projects.
          </p>
        </div>

        {/* Right: Direct Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ededed] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ededed] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={portfolioData.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ededed] transition-colors"
          >
            LeetCode ↗
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="hover:text-[#ededed] transition-colors"
          >
            Email ↗
          </a>
          <a
            href={portfolioData.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            Resume (PDF) ↗
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between text-[#525252] font-mono text-[11px]">
        <span>Designed & engineered with minimalism and precision.</span>
        <span className="mt-2 sm:mt-0">© {currentYear} {portfolioData.personal.name}</span>
      </div>
    </footer>
  );
}

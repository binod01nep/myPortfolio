import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function SkillGroup() {
  const { skills } = portfolioData;

  const categories = [
    { name: "LANGUAGES", items: skills.languages },
    { name: "FRONTEND", items: skills.frontend },
    { name: "BACKEND", items: skills.backend },
    { name: "DATABASES", items: skills.databases },
    { name: "CORE CS", items: skills.core },
    { name: "TOOLS & CLOUD", items: skills.tools },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
      {categories.map((cat, i) => (
        <div key={i} className="flex flex-col">
          {/* Category Header */}
          <div className="font-mono text-xs font-semibold tracking-wider text-[#a1a1aa] pb-2 border-b border-[#242424] mb-3">
            {cat.name}
          </div>

          {/* Skill List */}
          <ul className="space-y-1.5">
            {cat.items.map((skill, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-[#888888] hover:text-[#ededed] transition-colors flex items-center justify-between group"
              >
                <span>{skill}</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-[10px] text-[#525252] transition-opacity">
                  ·
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

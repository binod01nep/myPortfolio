import React from "react";

export default function ExperienceItem({ item }) {
  return (
    <div className="py-6 border-b border-[#1f1f1f] last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-[#ededed]">
            {item.role}
          </h3>
          <p className="text-xs font-mono text-[#a1a1aa]">
            {item.organization}
            {item.location && <span className="text-[#525252]"> · {item.location}</span>}
          </p>
        </div>

        <div className="font-mono text-xs text-[#71717a] mt-1 sm:mt-0">
          {item.period}
        </div>
      </div>

      {item.responsibilities && item.responsibilities.length > 0 && (
        <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#888888] leading-relaxed">
          {item.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-[#525252] font-mono text-xs mt-0.5">—</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      )}

      {item.skills && item.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
          {item.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-[#121212] border border-[#222222] text-[#888888]"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

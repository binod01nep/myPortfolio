import React from "react";

export default function SectionHeader({ number, title, description, badge }) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-[#71717a] uppercase tracking-wider">
          {number && <span className="text-[#a1a1aa] font-semibold">{number}</span>}
          {number && <span>/</span>}
          <span>{badge || title}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 pb-4 border-b border-[#242424]">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#ededed]">
          {title}
        </h2>
        {description && (
          <p className="text-xs sm:text-sm font-normal text-[#888888] max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

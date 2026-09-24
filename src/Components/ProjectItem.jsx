import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem({ project, index }) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="group border-b border-[#1f1f1f] hover:border-[#333333] transition-colors py-8 first:pt-2">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-3">
        {/* Left: Index + Title + Category */}
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-[#71717a] group-hover:text-[#ededed] transition-colors">
            {project.id || formattedIndex}
          </span>
          <div>
            <Link
              to={`/work/${project.slug}`}
              className="text-lg sm:text-xl font-medium text-[#ededed] group-hover:text-white transition-all inline-flex items-center gap-2"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                {project.title}
              </span>
              <span className="font-mono text-xs text-[#71717a] group-hover:text-[#ededed] transition-colors">
                →
              </span>
            </Link>
            <p className="text-xs font-mono text-[#71717a] mt-0.5">
              {project.category}
            </p>
          </div>
        </div>

        {/* Right: Year / Case Study CTA */}
        <div className="flex items-center gap-3 font-mono text-xs self-start md:self-auto">
          <span className="text-[#525252]">{project.year}</span>
          <Link
            to={`/work/${project.slug}`}
            className="text-[#a1a1aa] hover:text-white px-2.5 py-1 border border-[#262626] hover:border-[#525252] transition-colors"
          >
            Case Study
          </Link>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-3xl mb-4 pl-0 md:pl-8">
        {project.summary || project.description}
      </p>

      {/* Tech Stack Metadata + Action Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 pl-0 md:pl-8">
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-[#141414] border border-[#242424] text-[#a1a1aa]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#ededed] transition-colors"
            >
              GitHub ↗
            </a>
          )}
          <Link
            to={`/work/${project.slug}`}
            className="text-[#ededed] hover:text-white transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

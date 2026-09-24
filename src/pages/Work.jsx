import React from "react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../Components/SectionHeader";
import ProjectList from "../Components/ProjectList";

export default function Work() {
  const { projects } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-10">
      <SectionHeader
        number="01"
        title="Engineering Projects"
        description="A catalog of software systems, AI pipelines, and full-stack tools. Click on any project to view its technical case study."
      />

      <ProjectList projects={projects} />

      <div className="mt-6 pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#71717a]">
        <div>
          <span>Looking for source code? Explore my repositories directly on </span>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ededed] hover:underline"
          >
            GitHub ↗
          </a>
        </div>
        <span>Total: {projects.length} documented systems</span>
      </div>
    </div>
  );
}

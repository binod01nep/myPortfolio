import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = portfolioData.projects.find((p) => p.slug === projectId);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next/prev project for clean navigation
  const currentIndex = portfolioData.projects.findIndex((p) => p.slug === projectId);
  const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];
  const prevProject =
    portfolioData.projects[
      (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length
    ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-10">
      
      {/* ─── Breadcrumbs & Navigation ─────────────────────────────────────── */}
      <div className="flex items-center justify-between font-mono text-xs text-[#71717a] border-b border-[#1f1f1f] pb-3">
        <Link
          to="/work"
          className="hover:text-[#ededed] transition-colors inline-flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Back to all projects</span>
        </Link>
        <span>Case Study / {project.id}</span>
      </div>

      {/* ─── Title & Metadata ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3">
        <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest">
          {project.category} · {project.year}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#ededed]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mt-1">
          {project.summary}
        </p>

        {/* Links bar */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#1f1f1f] font-mono text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#ededed] hover:bg-white text-[#0a0a0a] font-semibold transition-colors"
            >
              GitHub Repository ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#2e2e2e] hover:border-[#525252] text-[#a1a1aa] hover:text-white transition-colors"
            >
              Live Demo / Docs ↗
            </a>
          )}
        </div>
      </div>

      {/* ─── Technical Specifications Table ──────────────────────────────── */}
      <div className="border border-[#1f1f1f] bg-[#121212]/40 p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div>
          <span className="text-[#525252] uppercase block mb-1">DOMAIN</span>
          <span className="text-[#ededed]">{project.category}</span>
        </div>
        <div>
          <span className="text-[#525252] uppercase block mb-1">TIMELINE</span>
          <span className="text-[#ededed]">{project.year}</span>
        </div>
        <div>
          <span className="text-[#525252] uppercase block mb-1">STATUS</span>
          <span className="text-[#ededed]">Completed / Open Source</span>
        </div>
      </div>

      {/* ─── Problem & Context ────────────────────────────────────────────── */}
      <section className="space-y-3 pt-2 border-t border-[#1f1f1f]">
        <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
          01 / THE PROBLEM
        </div>
        <h2 className="text-lg font-medium text-[#ededed]">Challenge & Context</h2>
        <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-3xl">
          {project.problem}
        </p>
      </section>

      {/* ─── Solution & Architecture ──────────────────────────────────────── */}
      <section className="space-y-3 pt-2 border-t border-[#1f1f1f]">
        <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
          02 / THE SOLUTION
        </div>
        <h2 className="text-lg font-medium text-[#ededed]">Engineering Approach</h2>
        <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-3xl">
          {project.solution}
        </p>
      </section>

      {/* ─── How It Works ─────────────────────────────────────────────────── */}
      {project.howItWorks && (
        <section className="space-y-4 pt-2 border-t border-[#1f1f1f]">
          <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
            03 / ARCHITECTURE & EXECUTION
          </div>
          <h2 className="text-lg font-medium text-[#ededed]">System Execution Pipeline</h2>
          
          <div className="space-y-3">
            {project.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-[#1a1a1a] bg-[#0f0f0f] flex items-start gap-3.5"
              >
                <span className="font-mono text-xs text-[#71717a] mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Key Features ─────────────────────────────────────────────────── */}
      {project.keyFeatures && (
        <section className="space-y-3 pt-2 border-t border-[#1f1f1f]">
          <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
            04 / KEY CAPABILITIES
          </div>
          <h2 className="text-lg font-medium text-[#ededed]">Technical Highlights</h2>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#888888]">
                <span className="font-mono text-xs text-[#525252] mt-0.5">+</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Technology Stack ─────────────────────────────────────────────── */}
      <section className="space-y-3 pt-2 border-t border-[#1f1f1f]">
        <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
          05 / TECH STACK
        </div>
        <h2 className="text-lg font-medium text-[#ededed]">Technologies & Libraries</h2>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[#141414] border border-[#242424] text-[#ededed]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ─── Next / Prev Project Navigation ───────────────────────────────── */}
      <div className="mt-6 pt-6 border-t border-[#1f1f1f] flex items-center justify-between font-mono text-xs text-[#71717a]">
        <Link
          to={`/work/${prevProject.slug}`}
          className="hover:text-[#ededed] transition-colors inline-flex items-center gap-1"
        >
          <span>←</span>
          <span>{prevProject.title}</span>
        </Link>
        <Link
          to={`/work/${nextProject.slug}`}
          className="hover:text-[#ededed] transition-colors inline-flex items-center gap-1"
        >
          <span>{nextProject.title}</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
}

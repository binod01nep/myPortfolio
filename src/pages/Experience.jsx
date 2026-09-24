import React from "react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../Components/SectionHeader";
import ExperienceItem from "../Components/ExperienceItem";
import SkillGroup from "../Components/SkillGroup";

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-14">
      
      {/* ─── Work Experience Timeline ──────────────────────────────────────── */}
      <section>
        <SectionHeader
          number="01"
          title="Work Experience"
          description="Technical internships and industry roles."
        />

        <div className="space-y-2">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ─── Education Timeline ───────────────────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] pt-10">
        <SectionHeader
          number="02"
          title="Education History"
          description="Formal academic degrees and foundational coursework."
        />

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="py-5 border-b border-[#1f1f1f] last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#ededed]">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-[#a1a1aa]">
                    {edu.institution} · <span className="text-[#ededed] font-medium">{edu.gpa}</span>
                  </p>
                </div>

                <div className="font-mono text-xs text-[#71717a]">
                  {edu.period} · {edu.location}
                </div>
              </div>

              {edu.notes && (
                <p className="text-xs text-[#71717a] font-mono mt-1">
                  ★ {edu.notes}
                </p>
              )}

              {edu.coursework && (
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  <span className="text-[#525252] mr-1">Focus areas:</span>
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#141414] border border-[#242424] text-[#888888]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Skills Stack ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] pt-10">
        <SectionHeader
          number="03"
          title="Technical Stack"
          description="Categorized languages, frameworks, databases, and engineering tools."
        />

        <SkillGroup />
      </section>

      {/* ─── Certifications ───────────────────────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] pt-10">
        <SectionHeader
          number="04"
          title="Certifications & Honors"
          description="Verified credentials and merit awards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 border border-[#1f1f1f] bg-[#121212]/30 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#71717a]">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
                <h4 className="text-sm font-medium text-[#ededed] mt-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed mt-1">
                  {cert.description}
                </p>
              </div>

              {cert.image && (
                <div className="pt-2 border-t border-[#1a1a1a]">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#a1a1aa] hover:text-white inline-flex items-center gap-1"
                  >
                    <span>View certificate asset</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Resume Download Banner ───────────────────────────────────────── */}
      <div className="p-5 border border-[#242424] bg-[#0f0f0f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div>
          <span className="text-[#ededed] font-medium block">Looking for a complete PDF summary?</span>
          <span className="text-[#71717a]">Download Binod Budha's verified resume.</span>
        </div>
        <a
          href={portfolioData.contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#ededed] hover:bg-white text-[#0a0a0a] font-semibold transition-colors"
        >
          Download Resume (PDF) ↗
        </a>
      </div>

    </div>
  );
}

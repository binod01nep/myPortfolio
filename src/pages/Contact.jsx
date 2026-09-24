import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../Components/SectionHeader";

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-10 pb-16 animate-fade-in flex flex-col gap-10">
      <SectionHeader
        number="01"
        title="Contact & Channels"
        description="Let's build something together. Open for full-time roles, internships, and engineering collaborations."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
              DIRECT CHANNELS
            </span>
            <p className="text-sm text-[#888888] leading-relaxed">
              I'm actively interested in software engineering, full-stack web development, and AI engineering opportunities. Feel free to reach out directly via email or social links.
            </p>
          </div>

          {/* Email Block */}
          <div className="p-4 border border-[#1f1f1f] bg-[#121212]/40 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717a]">PRIMARY EMAIL</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[#a1a1aa] hover:text-white px-2 py-0.5 border border-[#2a2a2a] hover:border-[#444444] transition-colors cursor-pointer"
              >
                {copied ? "COPIED ✓" : "COPY EMAIL"}
              </button>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-base sm:text-lg font-mono font-medium text-[#ededed] hover:underline"
            >
              {contact.email}
            </a>
          </div>

          {/* Phone & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3.5 border border-[#1f1f1f] bg-[#121212]/20 flex flex-col gap-1">
              <span className="text-[#525252]">PHONE</span>
              <a href={`tel:${contact.phone}`} className="text-[#ededed] hover:underline">
                {contact.phone}
              </a>
            </div>

            <div className="p-3.5 border border-[#1f1f1f] bg-[#121212]/20 flex flex-col gap-1">
              <span className="text-[#525252]">LOCATION</span>
              <span className="text-[#ededed]">{contact.location}</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="text-[#71717a] uppercase tracking-wider mb-1">
              PROFILES & NETWORKS
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#1f1f1f] bg-[#121212]/30 hover:border-[#3a3a3a] text-[#ededed] flex items-center justify-between transition-colors"
              >
                <span>GitHub</span>
                <span className="text-[#71717a]">↗</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#1f1f1f] bg-[#121212]/30 hover:border-[#3a3a3a] text-[#ededed] flex items-center justify-between transition-colors"
              >
                <span>LinkedIn</span>
                <span className="text-[#71717a]">↗</span>
              </a>

              <a
                href={contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#1f1f1f] bg-[#121212]/30 hover:border-[#3a3a3a] text-[#ededed] flex items-center justify-between transition-colors"
              >
                <span>LeetCode</span>
                <span className="text-[#71717a]">↗</span>
              </a>

              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#1f1f1f] bg-[#121212]/30 hover:border-[#3a3a3a] text-[#ededed] flex items-center justify-between transition-colors"
              >
                <span>Resume (PDF)</span>
                <span className="text-[#71717a]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="md:col-span-6 border border-[#1f1f1f] bg-[#121212]/30 p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-medium text-[#ededed]">Send a Message</h3>
            <p className="text-xs text-[#71717a]">
              Direct dispatch via mail client.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5 font-mono text-xs">
            <div className="flex flex-col gap-1">
              <label className="text-[#71717a]">YOUR NAME</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Name"
                className="bg-[#0e0e0e] border border-[#242424] focus:border-[#525252] text-[#ededed] px-3 py-2 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#71717a]">YOUR EMAIL</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="email@domain.com"
                className="bg-[#0e0e0e] border border-[#242424] focus:border-[#525252] text-[#ededed] px-3 py-2 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#71717a]">MESSAGE</label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your project, role, or inquiry..."
                className="bg-[#0e0e0e] border border-[#242424] focus:border-[#525252] text-[#ededed] px-3 py-2 outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-1 py-2.5 bg-[#ededed] hover:bg-white text-[#0a0a0a] font-semibold tracking-wide transition-colors cursor-pointer"
            >
              {submitted ? "Launching Mail Client..." : "Dispatch Message →"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

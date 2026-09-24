import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          to="/"
          className="font-mono text-sm tracking-wider font-semibold text-[#ededed] hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          {portfolioData.personal.monogram}
          <span className="text-[#71717a] ml-1.5 text-xs font-normal">/ 01</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive
                    ? "text-[#ffffff] font-semibold border-b border-[#ededed]"
                    : "text-[#888888] hover:text-[#ededed]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={portfolioData.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#a1a1aa] hover:text-white px-3 py-1.5 border border-[#2e2e2e] hover:border-[#525252] transition-colors"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xs font-mono px-2.5 py-1.5 border border-[#2e2e2e] text-[#ededed] hover:bg-[#181818] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#1f1f1f] bg-[#0d0d0d] px-6 py-4 flex flex-col space-y-3 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-1.5 transition-colors ${
                  isActive ? "text-[#ffffff] font-medium" : "text-[#888888] hover:text-[#ededed]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={portfolioData.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="pt-2 text-xs font-mono text-[#a1a1aa] hover:text-white flex items-center justify-between border-t border-[#1f1f1f]"
          >
            <span>Download Resume</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}

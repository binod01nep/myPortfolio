import React from 'react';

const projects = [
  {
    title: "Banking Ledger System",
    tech: "Express.js & MongoDB",
    category: "Banking Application",
    description:
      "A secure backend system to manage customer transactions, balances, and account history with proper validation and REST APIs.",
    link: "#"
  },
  {
    title: "Smart Review & Routing System",
    tech: "AI, NLP, Node.js",
    category: "Product Review Automation",
    description:
      "An AI-based system that analyzes customer reviews and automatically routes issues like material defects or service complaints to the respective developer teams.",
    link: "#"
  },
  {
    title: "Smart Resume Builder",
    tech: "MERN Stack",
    category: "Web Application",
    description:
      "A full-stack resume builder that allows users to create, edit, and download professional resumes with real-time previews.",
    link: "#"
  }
];

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black text-white dotted-bg
                 px-4 sm:px-8 md:px-16 py-16"
    >

      {/* Heading */}
      <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-12">
        Projects <span className="text-green-500">I</span> Have Built
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-black
              border border-white/10
              rounded-xl
              p-6
              hover:border-blue-500/40
              hover:shadow-xl
              hover:shadow-blue-900/20
              transition-all duration-300
            "
          >
            <h2 className="text-xl sm:text-2xl font-light mb-3">
              {project.title}
            </h2>

            <p className="font-mono text-sky-400 text-sm sm:text-base">
              - {project.tech}
            </p>

            <p className="font-mono text-yellow-500 text-sm sm:text-base">
              - {project.category}
            </p>

            <p className="text-sm text-white/70 mt-4 leading-relaxed">
              {project.description}
            </p>

            <a
              href={project.link}
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Project;

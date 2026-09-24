import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, limit }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="w-full flex flex-col">
      {displayProjects.map((project, idx) => (
        <ProjectItem key={project.slug || idx} project={project} index={idx} />
      ))}
    </div>
  );
}

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center lg:py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 lg:py-20 italic hover:not-italic subpixel-antialiased ">
        My Projects
      </h1>
      <div className="container mx-auto py-16 px-16 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-4 ">
          <ProjectCard
            src="/Ecommerce.png"
            title="Ecommerce website"
            description="something"
          />
          <ProjectCard
            src="/Ecommerce.png"
            title="Ecommerce website"
            description="something"
          />
          <ProjectCard
            src="/Ecommerce.png"
            title="Ecommerce website"
            description="something"
          />
          <ProjectCard
            src="/Ecommerce.png"
            title="Ecommerce website"
            description="something"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

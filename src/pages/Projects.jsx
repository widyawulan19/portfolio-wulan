import React, { useState } from "react";
import dataProject from "../Data/DataProject";
import ProjectModal from "./ProjectModal";
import { IoArrowForwardOutline,IoLogoGithub } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="project-container">
      <div className="project-text">
        <h5>PROJECTS</h5>
        <h3>Selected Projects</h3>
        <p>A collection of projects focused on solving real-world problems through clean and functional web applications.</p>
      </div>
      

      <div className="project-content">
        {dataProject.map((item) => {
          const { id, title, overview, stack, img } = item;

          return (
            <div
              key={id}
              className="box-img"
              
            >
              <img src={img} alt={title} />

              <div className="text">
                <h4>{title}</h4>
                <p>{overview?.description}</p>
              </div>

              <div className="stack-box">
                <label>Stack :</label>
                <div className="stack-tags">
                  {stack?.map((tech, i) => (
                    <button key={i}>{tech}</button>
                  ))}
                </div>
              </div>

              <div className="project-action">
                <button onClick={() => window.open(item.linkLive, "_blank")}>
                  View Live <IoArrowForwardOutline/> 
                </button>
                <button onClick={() => window.open(item.linkCode, "_blank")}>
                  Source Code <IoLogoGithub/> 
                </button>
                <button onClick={() => setSelectedProject(item)}>Explore This Project <MdOutlineDocumentScanner/> </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal
          data={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
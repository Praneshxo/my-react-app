import React from 'react';
import ProjectCard from './ProjectCard';
import myWorks from '../data/MyWorks.json'; // Import your project data
import '../Home.css'; 

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <center>
        <h1 className='myw'>My Works</h1>
      </center>
      <div className="mypro">
        {myWorks.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
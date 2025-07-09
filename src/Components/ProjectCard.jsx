import React from 'react';
import '../Home.css'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">
        <div className={`project-card-${project.id}`}>
          <img src={project.thumbnail} alt={project.name} className={project.name.replace(/\s/g, '')} />
          <h3>{project.name}</h3>
          {/* You might add a short description or a "View Details" button here */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
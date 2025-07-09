// src/components/TechStack.jsx
import React from 'react';
import '../Home.css'; 

const TechStack = () => {
  const technologies = [
    { name: "React", icon: "path/to/react-icon.png" },
    { name: "Node.js", icon: "path/to/nodejs-icon.png" },
    { name: "Express.js", icon: "path/to/express-icon.png" },
    { name: "MongoDB", icon: "path/to/mongodb-icon.png" },
    { name: "JavaScript", icon: "path/to/javascript-icon.png" },
    { name: "HTML5", icon: "path/to/html5-icon.png" },
    { name: "CSS3", icon: "path/to/css3-icon.png" },
    { name: "Git", icon: "path/to/git-icon.png" },
    { name: "TypeScript", icon: "path/to/typescript-icon.png" },
    { name: "Python", icon: "path/to/python-icon.png" },
    // Add more as needed
  ];

  return (
    <section id="skills" className="tech-stack-section">
      <h2 className="section-title">My Skills & Tech Stack</h2>
      <div className="tech-icons-container">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-icon-item">
            {/* You can use img tags for icons or SVGs directly */}
            {/* <img src={tech.icon} alt={tech.name} /> */}
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
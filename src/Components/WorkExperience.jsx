// src/components/WorkExperience.jsx
import React from 'react';
import '../Home.css'; 

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "InnovateTech Solutions",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Led the migration of legacy systems to modern tech stacks, resulting in a 30% performance improvement."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      duration: "Sept 2019 - Dec 2021",
      description: "Built responsive user interfaces for various client projects using React and Styled Components. Collaborated with UI/UX designers to translate wireframes into interactive web experiences."
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.title} at {exp.company}</h3>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
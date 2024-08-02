import React, { useState } from 'react';
import { projects } from '../components/data/data';
import { FaGithub } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';
import '../components/Style/work.css';

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="work-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="project-container">
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                      <FaGithub className="link-icon" />
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                      <MdPreview className="link-icon" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Work;

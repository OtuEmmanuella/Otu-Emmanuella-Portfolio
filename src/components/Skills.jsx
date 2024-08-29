import React from 'react';
import '../components/Style/skills.css';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import NextImg from '../assets/nextjs.png';
import TypeScript from '../assets/typescript.png';


const Skills = () => {
  const skills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JAVASCRIPT', icon: JavaScript },
    { name: 'REACT', icon: ReactImg },
    { name: 'GITHUB', icon: GitHub },
    { name: 'TAILWIND', icon: Tailwind },
    { name: 'FIREBASE', icon: FireBase },
    { name: 'NEXT', icon: NextImg },
    { name: 'TYPESCRIPT', icon: TypeScript },
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">These are the technologies I've worked with</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
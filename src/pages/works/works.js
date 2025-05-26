import React from "react";
import { Link } from "react-router-dom";
import "./works.css";
import NavBar from "../../components/NavBar/Navbar";
import portfolioData from "../../data/portfolioData.json";

function Works() {
  return (
    <div className="works-container">
      <NavBar />
      
      {/* Cybersecurity Section */}
      <section className="works-section" id="cybersecurity">
        <h2>{portfolioData.cybersecurity.title}</h2>
        <div className="tools-grid">
          {portfolioData.cybersecurity.tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <h3>{tool.title}</h3>
              <ul>
                {tool.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Projects Section */}
      <section className="works-section" id="development">
        <h2>{portfolioData.development.title}</h2>
        <div className="projects-grid">
          {portfolioData.development.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="works-section" id="design">
        <h2>{portfolioData.design.title}</h2>
        <div className="design-grid">
          {portfolioData.design.designs.map((design, index) => (
            <Link 
              to={design.portfolioLink} 
              key={index} 
              className="design-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{design.title}</h3>
              <p>{design.description}</p>
              <div className="design-tools">
                {design.tools.map((tool, toolIndex) => (
                  <span key={toolIndex}>{tool}</span>
                ))}
              </div>
              <div className="design-categories">
                <h4>Portfolio Includes:</h4>
                <ul>
                  {design.categories.map((category, categoryIndex) => (
                    <li key={categoryIndex}>{category}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Works;

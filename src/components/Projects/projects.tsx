import React from "react";
import './projects.scss';
import '../../styles/global.scss';
import urlShortener from '../../assets/url_shortener1.png';
import portfolio from '../../assets/portfolio1.png';
import '../content/content.scss';

function AppProjects() {
    const handleButtonClick = (url:any) => {
      window.open(url, "_blank");
    };
  
    const projects = [
      {
        title: "URL Shortener",
        image: urlShortener,
        description: "A URL shortener site makes long web links shorter, more manageable links.",
        githubUrl: "https://github.com/hilaitzhak/URL_Shortener",
        demoUrl: "https://url-shortener.hilaitzhak.com",
      },
      {
        title: "Portfolio",
        image: portfolio,
        description: "This portfolio showcases my professional skills and qualifications.",
        githubUrl: "https://github.com/hilaitzhak/Portfolio",
        demoUrl: "https://portfolio.hilaitzhak.com/",
      }
    ];
  
    return (
      <section id="projects">
        <div className="projects-wrapper section-container">
          <h1 className="section-title">Project<span className="pink-title section-title">s</span>
          </h1>
          <div className="all-projects-container">
            {projects.map((project, index) => (
              <div className="project-container" key={index}>
                <div className="project-img-container">
                  <img className="project-img" src={project.image} alt={project.title} />
                </div>
                <h2 className="project-subtitle">{project.title}</h2>
                <p className="project-para">{project.description}</p>
                <div className="btn-container">
                  <button
                    className="btn btn-color-1 project-btn" onClick={() => handleButtonClick(project.githubUrl)}>Github</button>
                  <button className="btn btn-color-2 project-btn" onClick={() => handleButtonClick(project.demoUrl)}>Demo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default AppProjects;
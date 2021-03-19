import React from 'react';

const ProjectCard = ({ id, name, logo, gif, description, github, demo, technologies }) => {

  return (
    <div className="project-card" id={ id }>
        <img className="project-card-img" src={logo} alt="logo"/>
        <div className="project-card-top">
          <img src={gif} className="project-gif" alt="gif"/>
          <h1>{name}</h1>
        </div>
        <div className="project-card-middle">
          <p>{description}</p>
        </div>
        <div className="project-card-buttons">
          <button id="demo-button" onClick={() => { window.open(demo, "_blank") }}>
            Demo
          </button>
          <button id="code-button" onClick={() => { window.open(github, "_blank") }}>
            {'< Code />'}
          </button>
        </div>
        <div className="project-card-stats">
          {technologies.map(tech => (
            <p>{tech}</p>
          ))}
        </div>
    </div>
  )
}

export default ProjectCard;
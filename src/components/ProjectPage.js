import React from 'react';
import { projects } from '../components/Projects';

const ProjectPage = (props) => {
    const index = props.match.params.id - 1;
    const project = projects[index];
    const github = project.github;
    const demo = project.demo;
    const logo = project.logo;
    
    return (
        <>
            <div className="project-container">
                <img className="project-img" src={ logo } alt="img"/><br/>
                <div className="technologies-container">
                    { project.technologies.map(tech => 
                        <div className="tech-div" key={tech}>
                            <p key={tech}>
                                {tech}
                            </p>
                        </div>
                    )}
                </div>
                <div className="proj-btns">
                    <button onClick={ props.history.goBack }>
                        Back
                    </button>
                    <button onClick={() => { window.open(demo, "_blank") }}>
                        Test Me!    
                    </button>
                    <button onClick={() => { window.open(github, "_blank") }}>
                        Code    
                    </button>
                </div>
                <p>
                    { project.description }
                </p>
            </div>
        </>
    )
}

export default ProjectPage
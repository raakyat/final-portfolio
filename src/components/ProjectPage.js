import React from 'react';
import { projects } from '../components/Projects'
import parse from 'html-react-parser';

const ProjectPage = (props) => {
    const index = props.match.params.id - 1;
    const project = projects[index]
    const github = project.github
    
    return (
        <>
            <div className="project-container">
                <img className="project-img" src={ project.logo } alt="img"/><br/>
                {parse(
                    project.demo
                )}
                <div className="proj-btns">
                    <button onClick={ props.history.goBack }>
                        Back
                    </button>
                    <h3>
                        Stack:
                    </h3>
                    <button onClick={() => { window.open(github, "_blank") }}>
                        Code    
                    </button>
                </div>
                <div className="technologies-container">
                    { project.technologies.map(tech => 
                        <div className="tech-div" key={tech}>
                            <p key={tech}>
                                {tech}
                            </p>
                        </div>
                    )}
                </div><br/>
                <p>
                    { project.description }
                </p>
            </div>
        </>
    )
}

export default ProjectPage
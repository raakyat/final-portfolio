import React from 'react';
import { projects } from '../components/Projects'
import ProjectCard from '../components/ProjectCard';


const ProjectsPage = () => {

    return (
        <>
            <h1>Projects</h1>
            <h3>Take a look at some of my favorite creations!</h3><br/>
            <div className="project-cards">
                { projects.map(project => <ProjectCard key={ project.id } { ...project } />) }
            </div><br/><br/>
        </>
    )
}
export default ProjectsPage;
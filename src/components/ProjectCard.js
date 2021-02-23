import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  const { id, name, logo, description, github, demo, technologies } = props

  return (
    <div className="project-card" id={ id }>
        <Link to={ '/projects/' + id }><img src={ logo } id={ id } alt={ name }/><br/></Link>
    </div>
  )
}

export default ProjectCard;
import React from 'react'

function ProjectCard({src, link, title, description}) {
  return (
    <a href={link}>
        <img src={src} alt='${title} Logo'/>
        <h3>{title}</h3>
        <p>{description}</p>
    </a> 
  );
}

export default ProjectCard
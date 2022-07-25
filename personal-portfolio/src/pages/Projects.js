import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectLists';

import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {
          ProjectList.map((project, i) => {
            return <ProjectItem id={i} name={project.name} image={project.image}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects
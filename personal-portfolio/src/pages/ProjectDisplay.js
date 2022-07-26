import React from 'react';
// import { Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectLists';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {

  const {id} = useParams();
  const project = ProjectList[id];

  return (
    <div className='project'>
      <h1>
        {project.name}
      </h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href='https://github.com/lebiruh?tab=repositories' target='_blank' rel='noreferrer'>
        <GitHubIcon />
      </a>
    </div>
  )
}

export default ProjectDisplay
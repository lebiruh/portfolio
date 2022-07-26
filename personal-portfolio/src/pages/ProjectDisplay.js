import React from 'react';
import { Link } from '@mui/material';
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
      <Link to='https://github.com/lebiruh?tab=repositories'>
        <GitHubIcon link='https://github.com/lebiruh?tab=repositories' />
      </Link>
    </div>
  )
}

export default ProjectDisplay
import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// import { Link } from '@mui/material';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Biruh</h2>
        <div className='prompt'>
          <p>
            I am a software developer and former civil Engineer dedicated to solving real-world problems and designing creative solutions. 
            {/* I now enjoy applying that same passion to solving problems through code. */}
          </p>
          <Link to={'/email'}>
            <EmailIcon />
          </Link>        
          <a href='https://linkedin.com/in/biruh-tesfa-mengesha' rel='noreferrer' target='_blank'>
            <LinkedInIcon />
          </a>
          <a href='https://github.com/lebiruh' rel='noreferrer' target='_blank'>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Yarn
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, TypeScript, Python, Java
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
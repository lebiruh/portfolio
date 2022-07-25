import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Biruh</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating.
          </p>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
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
import React from 'react';
// import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://yahoo.com' rel='noreferrer' target='_blank'>
          <EmailIcon />
        </a>
        <a href='https://linkedin.com/in/biruh-tesfa-56979b237' rel='noreferrer' target='_blank'>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/lebiruh' rel='noreferrer' target='_blank'>
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Biruh Tesfa</p>
    </div>
  )
}

export default Footer
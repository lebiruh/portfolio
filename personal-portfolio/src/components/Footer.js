import React from 'react';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to='*'>
          <EmailIcon />
        </Link>
        <Link to='*'>
          <LinkedInIcon />
        </Link>
        <Link to='*'>
          <GitHubIcon />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Biruh Tesfa</p>
    </div>
  )
}

export default Footer
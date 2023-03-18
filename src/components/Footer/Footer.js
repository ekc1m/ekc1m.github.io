import resumeData from '../../utils/resumeData';
import { Typography } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
        <div className="footer_left">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
        </div>
        <div className='footer_right'>
        <Typography className='footer_copyright'>
        Designed and developed by <a href='/' target='_blank'>Micke Simolin</a>
        <br />
        </Typography>
        </div>
        </div>
    );
};

export default Footer;

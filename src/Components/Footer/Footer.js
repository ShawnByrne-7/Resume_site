import React from 'react'
import './Footer.css'
import Typography from '@mui/material/Typography'
import resumeData from '../../Utils/resumeData'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer_left'>
          <Typography className='footer_name'>{resumeData.name}</Typography>
       </div>
       <div className='footer_right'>
          <Typography className='footer_copyright'>
            Designed and Devloped by Shawn Byrne
            <br />
            Clone Idea from {""}
            <a href='https://themeforest.net/user/travoline' target="_blank">
              Travonline
            </a>
          </Typography>
       </div>
    </div>
  )
}

export default Footer
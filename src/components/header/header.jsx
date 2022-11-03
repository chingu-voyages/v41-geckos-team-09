import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import { Box, Select } from '@chakra-ui/react'

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

export default function Header({ currentView, handleViewChange }) {
  //sharebutton urls
const facebookURL = 'https://www.facebook.com/';
const whatsAppURL = 'https://www.whatsapp.com/';
// const emailURL = ''

  return (
    <Box className='dFlex'>
      <a id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></a>
      <Box className='nav'>
        <ul className='links'>
          <li><a className='custom-headerLink' href='#Timeline' onClick={() => handleViewChange('Timeline')}>Timeline View</a></li>
          <li><a className='custom-headerLink' href='#Stack' onClick={() => handleViewChange('Stack')}>Stack View</a></li>
          {/* <li><a className='custom-headerLink' href='#'>Share</a></li>  */}
          {/* dynamically render Trip Name when user names file */}
          <li><a className='hidden' href='#'>Trip Name</a></li>
          <li className='shareIcon'>
            {/* Email share button currently NOT functional */}
            <EmailShareButton><EmailIcon size={45} borderRadius={15} /></EmailShareButton>
          </li>
          <li className='shareIcon'>
            <FacebookShareButton url={facebookURL}><FacebookIcon size={45} borderRadius={15} /></FacebookShareButton>
          </li>
          <li className='shareIcon'>
            <WhatsappShareButton url={whatsAppURL}><WhatsappIcon size={45} borderRadius={15} /></WhatsappShareButton>
          </li>
        </ul>

        {/* <Box className='custom-select'> */}
        <Box>
          {/* <Select className='menu'> */}
          <Select placeholder='My Trip'>
            <option value='#'>Timeline View</option>
            <option value='#'>Stack View</option>
            <option value='#'>Share</option>
          </Select>
        </Box>
      </Box>

    </Box>
  )
}
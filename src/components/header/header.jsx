import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import ToggleMode from '../toggle'


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
    <header className='dFlex'>
      <a id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></a>
      <div className='nav'>
        <ul className='links'>
          <li><a className='custom-headerLink' href='#Timeline' onClick={() => handleViewChange('Timeline')}>Timeline View</a></li>
          <li><a className='custom-headerLink' href='#Board' onClick={() => handleViewChange('Board')}>Stack View</a></li>
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

        <div className='custom-select'>
          <select className='menu'>
            <option value='' selected='selected'>My Trip</option>

            <option value='#'>Timeline View</option>
            <option value='#'>Stack View</option>
            <option value='#'>Share</option>
          </select>
        </div>
        <Box><ToggleMode mt="md">color mode</ToggleMode></Box>

      </div>

    </header>
  )
}
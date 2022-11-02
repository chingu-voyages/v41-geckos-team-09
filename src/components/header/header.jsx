import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo-1.png';

import {
  // EmailShareButton,
  // FacebookSharebutton,
  // WhatsappShareButton,

  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

import Share from '../share/Share'

export default function Header({ currentView, handleViewChange }) {
  return (
    <header className='dFlex'>
      <a id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></a>
      <div className='nav'>
        <ul className='links'>
          <li><a className='custom-headerLink' href='#Timeline' onClick={() => handleViewChange('Timeline')}>Timeline View</a></li>
          <li><a className='custom-headerLink' href='#Stack' onClick={() => handleViewChange('Stack')}>Stack View</a></li>
          {/* <li><a className='custom-headerLink' href='#'>Share</a></li>  */}
          {/* dynamically render Trip Name when user names file */}
          <li><a className='hidden' href='#'>Trip Name</a></li>
          <li className='shareIcon'><EmailIcon size={45} borderRadius={15} /></li>
          <li className='shareIcon'><FacebookIcon size={45} borderRadius={15} /></li>
          <li className='shareIcon'><WhatsappIcon size={45} borderRadius={15} /></li>
        </ul>

        <div className='custom-select'>
          <select className='menu'>
            <option value='' selected='selected'>My Trip</option>

            <option value='#'>Timeline View</option>
            <option value='#'>Stack View</option>
            <option value='#'>Share</option>
          </select>
        </div>
      </div>

    </header>
  )
}
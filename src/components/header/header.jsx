import React from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import { Box } from '@chakra-ui/react'
 
export default function Header({currentView, handleViewChange}) {
  return (
    <header className='dFlex'>
      <a id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></a>
      <Box className='nav'>
        <ul className='links'>
          <li><a className='custom-headerLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}>Welcome View</a></li>
          <li><a className='custom-headerLink' href='#Board' onClick={() => handleViewChange('Board')}>Board View</a></li>
          <li><a className='custom-headerLink' href='#'>Share</a></li>
          {/* dynamially render Trip Name when user names file */}
          {/* <li><a className='hidden' href='#'>Trip Name</a></li> */}
        </ul>

        {/* <div className='custom-select'>
          <select className='menu'>
            <option value='' selected='selected'>My Trip</option>

            <option value='#'>Wecome View</option>
            <option value='#'>Board View</option>
            <option value='#'>Share</option>
          </select>
        </div> */}
      </Box>
    </header>
  )
}
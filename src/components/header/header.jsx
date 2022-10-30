import React from 'react'
import './header.css'
import logo from '../../images/logo-1.png'

export default function Header({currentView, handleViewChange}) {
  return (
    <header className='dFlex'>
      <img className='header-logo' src={logo} alt='travel logo' />
      <div className='nav'>
        <ul className='links'>
          <li><a href='#Timeline' onClick={() => handleViewChange('Timeline')}>Timeline View</a></li>
          <li><a href='#Stack' onClick={() => handleViewChange('Stack')}>Stack View</a></li>
          <li><a href='#'>Share</a></li>
          {/* dynamially render Trip Name when user names file */}
          <li><a className='hidden' href='#'>Trip Name</a></li>
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
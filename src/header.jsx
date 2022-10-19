import React from 'react'
import './header.css'
import logo from './logo-1.png'

export default function Header() {
  return (
    <header className='dFlex'>
      <img className='header-logo' src={logo} alt='travel logo' />
      <div className='nav'>
        <ul className='links'>
          <li><a className="custom-link-header" href='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 1</a></li>
          <li><a className="custom-link-header" href='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 2</a></li>
          <li><a className="custom-link-header" href='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 3</a></li>
          <li><a className="custom-link-header" href='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 4</a></li>
        </ul>

        <div className='custom-select'>
        <select className='menu'>
          <option value='' selected='selected'>Menu</option>

          <option value='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 1</option>
          <option value='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 2</option>
          <option value='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 3</option>
          <option value='https://github.com/chingu-voyages/v41-geckos-team-09'>Link 4</option>
        </select>
        </div>
      </div>

    </header>
  )
}
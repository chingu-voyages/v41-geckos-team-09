import React from 'react'
import './welcome.css'
import howTo from '../../images/how-to-1.png';
import bus from '../../images/landing-img.png'


export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className='welcome-top-section'>
        <img className='bus' alt='initial instructions' src={bus} />
        <h1 className='welcome-heading'>Plan your next trip with ease using Travel 2 It</h1>

        <p className='welcome-blurb'>Your one stop shop to keep everything organized. Easily share your plans with family and friends.</p>
      </div>
      <br />
      <br />
      <div>
        <h2 className='instructions-heading'>How does Travel 2 It work?</h2>
        <p className='instructions-text'>Stay organized while planning your trip by creating editable stacks and cards. Each stack can hold as many cards as necessary. Edit card information with places to visit or other potential plans. Unsure of the order? Simply rearrange cards OR stacks by dragging and dropping them into the desired location.</p>
        <br/>
        <p className='instructions-text'>Dark & Light Mode available! Share with family and friends through Email, Facebook or Whatsapp!</p>
        <br/>
        <p className='instructions-text'>Vivamus egestas magna turpis, a tincidunt nisi maximus quis. Aenean sed suscipit erat, in fermentum ex. Pellentesque egestas pellentesque augue in porttitor. Nullam nibh dui, molestie sed nisl vel, commodo ullamcorper arcu. Aenean at tincidunt ante. Morbi blandit turpis vel elementum varius. Sed nec accumsan enim. Duis semper vehicula tincidunt. Phasellus tristique nisi vel condimentum tincidunt.</p>
        <br/>
        <img className='instructions-img' alt='initial instructions' src={howTo} />
        <br/>
        <h2 className='instructions-heading'>Click Board View to start planning!</h2>
      </div>
    </div>
  )
}
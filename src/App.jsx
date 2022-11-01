import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header.jsx'
import Stack from './components/stack/stack.jsx'
import Card from './components/card/card.jsx'
import Timeline from './components/timeline/timeline.jsx'
import { CardLogic, TripLogic, StackLogic } from './TripLogic.js'

import Draggable from 'react-draggable';

let trip = new TripLogic();
trip.addStack("Stack One");

function App() {

  return (
    <div className="App">

      <Header />
    
        <span>
            <Card title="Test" />
        </span>
      <Timeline />

      <Footer />

    </div>
  )
}

export default App

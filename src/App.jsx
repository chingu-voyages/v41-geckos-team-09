import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header.jsx'
import Stack from './components/stack/stack.jsx'
import Card from './components/card/card.jsx'
import Timeline from './components/timeline/timeline.jsx'
import CardLogic from './TripLogic'

import Draggable from 'react-draggable';



function App() {

  return (
    <div className="App">

      <Header />

      <Card title="Test" />

      <Timeline />

      <Footer />

    </div>
  )
}

export default App

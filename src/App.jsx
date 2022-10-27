import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header.jsx'
import Stack from './components/stack/stack.jsx'
import Timeline from './components/timeline/timeline.jsx'

import Draggable from 'react-draggable';


function App() {

  return (
    <div className="App">

      <Header />

      <Draggable>
        <div className="box">
          <div>Move me around!</div>
        </div>
      </Draggable>

      <Timeline />

      <Footer />

    </div>
  )
}

export default App

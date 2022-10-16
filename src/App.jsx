import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header'
import Stack from './components/stack/stack'

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

      <Stack />

      <Footer />

    </div>
  )
}

export default App

import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header.jsx'
import Stack from './components/stack/stack.jsx'
import Timeline from './components/timeline/timeline.jsx'

import Draggable from 'react-draggable';

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  )
}

export default App

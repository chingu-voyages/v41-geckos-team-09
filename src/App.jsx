import Footer from './components/footer/footer.jsx'
import './App.css'
import Header from './components/header/header'
// import Board from './components/board/board'
import React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div className="App">

        <Header />

        {/* <Board /> */}

        <Footer />

      </div>
    </ChakraProvider>
  )
}

export default App

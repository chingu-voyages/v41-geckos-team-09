import { useState } from 'react';
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
const [currentView, setCurrentView] = useState('Timeline');

const renderView = () => {
  if (currentView === 'Timeline') {
    return <Timeline />;
  }
  if (currentView === 'Stack') {
    return <Stack />;
  }
};

  const handleViewChange = (link) => setCurrentView(link);


  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div className="App">

        <Header currentView={currentView} handleViewChange={handleViewChange}/>
        {renderView()}

        {/* <Draggable>
          <div className="box">
            <div>Move me around!</div>
          </div>
        </Draggable> */}

        {/* <Stack />
        <Timeline /> */}

        <Footer />

      </div>
    </ChakraProvider>
  )
}

export default App

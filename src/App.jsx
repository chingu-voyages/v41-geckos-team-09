import { useState } from 'react';
import Footer from './components/footer/footer.jsx';
import './App.css';
import Header from './components/header/header.jsx';
import Stack from './components/stack/stack.jsx';
import Timeline from './components/timeline/timeline.jsx';
import Welcome from './components/welcome/welcome.jsx';

import Draggable from 'react-draggable';

import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';


function App() {
const [currentView, setCurrentView] = useState('Welcome');

const renderView = () => {
  if (currentView === 'Welcome') {
    return <Welcome />;
  }
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

        <Footer />

      </div>
    </ChakraProvider>
  )
}

export default App

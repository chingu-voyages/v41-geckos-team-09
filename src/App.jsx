import { React, useState } from 'react';
import Footer from './components/footer/footer.jsx';
import './App.css';
import Header from './components/header/header.jsx';
import Board from './components/board/board.jsx';
import Welcome from './components/welcome/welcome.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/theme'
import ToggleMode from './components/toggle.jsx';

function App() {
const [currentView, setCurrentView] = useState('Welcome');

const renderView = () => {
  if (currentView === 'Welcome') {
    return <Welcome />;
  }
  if (currentView === 'Board') {
    return <Board />;
  }
};

  const handleViewChange = (link) => setCurrentView(link);


  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div className="App">

        <Header currentView={currentView} handleViewChange={handleViewChange}/>
        {renderView()}
        <ToggleMode display="block" mt="md">Click me!</ToggleMode>
        <Footer />

      </div>
    </ChakraProvider>
  )
}

export default App

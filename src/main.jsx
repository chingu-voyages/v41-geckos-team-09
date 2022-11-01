import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/theme'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
)

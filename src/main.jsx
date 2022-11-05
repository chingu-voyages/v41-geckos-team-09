import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/theme'
import { ChakraProvider } from '@chakra-ui/react'
// import '@fontsource/merriweather/400.css'
// import '@fontsource/oswald/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <ChakraProvider theme = {theme}>
        <ChakraProvider resetCSS theme = {theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
)

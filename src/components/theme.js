// theme.js

// 1. import `extendTheme` function
import { 
  // DarkMode,
  extendTheme,
  // LightMode,
  // theme as base,
  // withDefaultColorScheme,
  // withDefaultVariant,
} from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const button = {
  size:'md',
  height:'48px',
  width:'200px',
  border:'2px',
  borderColor:'green.500'
}

const stackHeading = {
  size: 'lg',
  padding: '80px',
  margin: '20px',
  bgColor: '#AAAAAA'
}

const fonts = {
  Heading: 'Oswald',
  Text: 'Merriweather'
}

// 3. extend the theme
const theme = extendTheme({ 
  config, 
  button, 
  stackHeading, 
  fonts
})

export default theme
// theme.js

// 1. import `extendTheme` function
import { 
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const button = {
  size: 'xs',
  bgColor: '#AAAAAA'
}

const stackHeading = {
  size: 'lg',
  padding: '80px',
  margin: '20px',
  bgColor: '#AAAAAA'
}



// 3. extend the theme
const theme = extendTheme({ 
  config, 
  button, 
  stackHeading, 
})

export default theme
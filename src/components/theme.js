// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const button = {
  size: 'xs',
  bg: '#aaaaaa'
}

// 3. extend the theme
const theme = extendTheme({ config, button })

export default theme
// theme.js

// 1. import `extendTheme` function
import { 
  DarkMode,
  extendTheme,
  LightMode,
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

// RANGE OF COLOURS
// https://gka.github.io/palettes/#/20|s|8f67a4|fef62b,38d6ff|1|1

// blue "#17233b": '#010f26', '#0c1930', '#17233b', '#222d46', '#2c3751', '#37415c', '#424c67', '#4d5773', '#59637f', '#656e8b', '#707a98', '#7c86a4', '#8992b1', '#959fbe', '#a2abcb', '#aeb8d8', '#bbc5e5', '#c8d2f3', '#d6e0fe', '#e4eeff'

// red "#da075e": '#580000', '#650009', '#720016', '#80001f', '#8e0028', '#9d0032', '#ab003c', '#ba0046', '#c90051', '#d7065c', '#e31a65', '#ee2c6d', '#f83975', '#ff4a82', '#ff6093', '#ff72a3', '#ff82b1', '#ff92bf', '#ffa0cd', '#ffaeda'

// green "#00be00": '#002700', '#003100', '#003b00', '#004600', '#005000', '#005b00', '#006600', '#007200', '#007d00', '#008900', '#009500', '#00a100', '#00ad00', '#00ba00', '#18c610', '#33d124', '#45dd33', '#54e93f', '#63f54c', '#81ff66'

// lavender "##8f67a4": '#25043a', '#300e44', '#3b194f', '#46235a', '#512d65', '#5c3770', '#68427c', '#734d88', '#7f5894', '#8b63a0', '#976fac', '#a47ab9', '#b086c5', '#bd92d2', '#c99edf', '#d6abec', '#e4b7f9', '#f1c5ff', '#fdd4ff', '#ffe6ff'

// yellow fef62b: '#291400', '#2f1f00', '#322c00', '#383700', '#404200', '#494e00', '#535900', '#5e6400', '#6a6f00', '#767b00', '#838600', '#909200', '#9d9e00', '#abaa00', '#b8b600', '#c6c300', '#d4cf00', '#e2dc01', '#f0e912', '#fef62b'

// LIGHT AND DARK SIMPLE COLOUR AND PAIRS
// // Light
// blue 3377DB
// green 79D55C
// yellow FFF72A
// red D8085E
// lavender D9AFE5
// // Dark
// blue 3377DB
// green 44B82F
// yellow E7CD06
// red D8085E
// lavender 8F67A5
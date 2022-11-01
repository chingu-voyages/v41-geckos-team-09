import React from 'react'
import './welcome.css'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import { Heading } from '@chakra-ui/react'

export default function Welcome() {
  return (
    <div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Heading>Welcome to Travel To It</Heading>
      <p>Landing Page instructions will go here. Users will click on logo to return to this page.</p>
    </div>
  )
  }
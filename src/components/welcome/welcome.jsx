import React from 'react'
import { Box, Heading, Text} from '@chakra-ui/react'
import theme from '../theme'

export default function Welcome() {
  return (

    <Box 
    w={'80%'}
    m={'20px'} 
    p={'20px'}
    bg={'inherit'} 
    >
      <Heading textColor={'#1779EA'}> Welcome to Travel To It</Heading>
      <Text>Landing Page instructions will go here. Users will click on logo to return to this page.</Text>
    </Box>
  )
}
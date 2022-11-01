import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Welcome() {
  return (
    <Box padding={'8px'} alignContent={'center'}>
      <Heading textColor={'#1779EA'}> Welcome to Travel To It</Heading>
      <Text>Landing Page instructions will go here. Users will click on logo to return to this page.</Text>
    </Box>
  )
}
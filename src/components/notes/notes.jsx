import React from 'react'
import { Box, Textarea, Flex, Heading } from '@chakra-ui/react'


export default function Notes() {
  return (
    <Flex >
      <Box>
      <Heading>Notes</Heading>
      <Textarea borderColor={'#DB095B'}>Write some notes</Textarea>
      </Box>
    </Flex>
  )
}
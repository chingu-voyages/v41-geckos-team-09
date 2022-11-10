import React from 'react'
import { Box, Textarea, Flex, Heading } from '@chakra-ui/react'


export default function Notes() {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    // setValue(inputValue)
  }
  return (
    <>
    <Flex >
      <Box>
      <Heading>Notes</Heading>
      <Textarea transition="height none" 
        borderColor={'#DB095B'} 
        // value={value}
        onChange={handleInputChange}
        minH="unset"
        overflow="hidden"
        value={value}
        resize="none"
        w={"900px"}
        h={"200px"}
        placeholder='Write some notes'></Textarea>
      </Box>
    </Flex>
    </>
  )
}
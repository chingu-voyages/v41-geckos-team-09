import React from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import { Box, Flex, Spacer, Link, useColorMode } from '@chakra-ui/react'
import ToggleMode from '../toggle.jsx';
import theme from '../theme'

export default function Header({currentView, handleViewChange}) {
  return (
    <header>
      {/* bg={'#FAFAFA'} */}
      <Flex >
        <Box><Link id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></Link></Box>
        <Spacer />
        <Box p={'1em'}><Link _hover={{ fontSize:'xl', color: '#1978E4' }}  href='#Welcome' onClick={() => handleViewChange('Welcome')}>Welcome View</Link></Box>
        <Spacer />
        <Box p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#1978E4' }} href='#Board' onClick={() => handleViewChange('Board')}>Board View</Link></Box>
        <Spacer />
        <Box p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#1978E4' }} href='#'>Share</Link></Box>
        <Spacer />
        <Box><ToggleMode mt="md">Click me!</ToggleMode></Box>
      </Flex>
    </header>
  )
}
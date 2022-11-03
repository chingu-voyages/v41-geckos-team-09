import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import { Box, Flex, Spacer, Link, Select} from '@chakra-ui/react'
// import ToggleMode from '../toggle.jsx'
// import theme from '../theme'

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

export default function Header({ currentView, handleViewChange }) {
  //sharebutton urls
const facebookURL = 'https://www.facebook.com/';
const whatsAppURL = 'https://www.whatsapp.com/';
// const emailURL = ''

  return (
    <Flex >
      <Box><Link id='logoLink' href='#Welcome' onClick={() => handleViewChange('Welcome')}><img className='header-logo' src={logo} alt='travel logo' /></Link></Box>
      <Spacer />
      <Box p={'1em'}><Link _hover={{ fontSize:'xl', color: '#aa5d89' }}  href='#Welcome' onClick={() => handleViewChange('Welcome')}>Welcome View</Link></Box>
      <Spacer />
      <Box p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#aa5d89' }} href='#Board' onClick={() => handleViewChange('Board')}>Board View</Link></Box>
      <Spacer />
      <Box p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#aa5d89' }} href='#'>Share</Link></Box>
      <Spacer />
      {/* <Box><ToggleMode mt="md">color mode</ToggleMode></Box>
          <Spacer /> */}
      <Box className='shareIcon'>
        {/* Email share button currently NOT functional */}
        <EmailShareButton><EmailIcon size={45} borderRadius={15} />
        </EmailShareButton>
      </Box>
      <Spacer />
      <Box className='shareIcon'>
        <FacebookShareButton url={facebookURL}><FacebookIcon size={45} borderRadius={15} /></FacebookShareButton>
      </Box>
      <Spacer />
      <Box className='shareIcon'>
        <WhatsappShareButton url={whatsAppURL}><WhatsappIcon size={45} borderRadius={15} /></WhatsappShareButton>
      </Box>
      <Spacer />
      <Box m={'17px'} size={45} borderRadius={15}>
        {/* <Select className='menu'> */}
        <Select placeholder='My Trip'>
          <option value='#'>Timeline View</option>
          <option value='#'>Stack View</option>
          <option value='#'>Share</option>
        </Select>
      </Box>
    </Flex>
  )
}
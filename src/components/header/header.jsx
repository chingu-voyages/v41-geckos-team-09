import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo-1.png';
import { Box, Flex, Spacer, Link, Select } from '@chakra-ui/react'
import ToggleMode from '../toggle'
import theme from '../theme'

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
      <Box mt={'17px'} p={'1em'}><Link _hover={{ fontSize:'xl', color: '#aa5d89' }}  href='#Welcome' onClick={() => handleViewChange('Welcome')}>Welcome View</Link></Box>
      <Spacer />
      <Box mt={'17px'} p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#aa5d89' }} href='#Board' onClick={() => handleViewChange('Board')}>Board View</Link></Box>
      <Spacer />
      <Box mt={'17px'} p={'1em'} ><Link _hover={{ fontSize:'xl', color: '#aa5d89' }} href='#'>Share</Link></Box>
      <Spacer />
      {/* <Box><ToggleMode mt="md">color mode</ToggleMode></Box>
          <Spacer /> */}
      <Box className='shareIcon' mt={'17px'}>
        {/* Email share button currently NOT functional */}
        <EmailShareButton><EmailIcon size={45} borderRadius={15} />
        </EmailShareButton>
      </Box>
      <Spacer />
      <Box className='shareIcon' mt={'17px'}>
        <FacebookShareButton url={facebookURL}><FacebookIcon size={45} borderRadius={15} /></FacebookShareButton>
      </Box>
      <Spacer />
      <Box className='shareIcon' mt={'17px'}>
        <WhatsappShareButton url={whatsAppURL}><WhatsappIcon size={45} borderRadius={15} /></WhatsappShareButton>
      </Box>
      <Spacer />
      <Box >
        {/* <Select className='menu'> */}
        <Select textColor={'#FAF9F9'} placeholder='My Trip' mt={'17px'} h={10} borderRadius={10} border={'none'} bgColor={'#1679ea'}>
          <option value='#'>Timeline View</option>
          <option value='#'>Stack View</option>
          <option value='#'>Share</option>
        </Select>
      </Box>
      <Spacer/>
      <Box><ToggleMode mt="md">color mode</ToggleMode></Box>
    </Flex>
  )
}
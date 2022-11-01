import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    )
}

export default ToggleMode
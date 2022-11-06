import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Box, Flex, Spacer, Input } from '@chakra-ui/react'
import { DragHandleIcon, DeleteIcon } from '@chakra-ui/icons'

export default function Card(props){

    const [name , setName] = React.useState(props.card.content)
    const isDragDisabled = props.card.id === ''

    const handleChangeFunc = async(e,id)=>{
        console.log('value ', e.target.value, document.getElementById(props.card.id));
        setName(e.target.value)
        await  localStorage.setItem(id, e.target.value)
    }

    useEffect(()=>{
     let temp =  localStorage.getItem(props.card.id)
    setName(temp)
    },[])

    return (
      <Draggable
        draggableId={props.card.id}
        index={props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Flex borderRadius={'sm'} m='.15em'>
          <Box 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            aria-roledescription="Press space bar to lift the card"
          >
            <DragHandleIcon p='.1em'/><Spacer />
          </Box>
          <Box m={ .5 } >
            <Input  focusBorderColor='#DA0A5B' size='sm' bg="AFAFAF" id={props.card.id} 
            value={name}
            onChange={(e)=>handleChangeFunc(e,props.card.id)}
          />
          </Box>
          <Box><DeleteIcon pt='.1em'/></Box>
          </Flex>
        )}
      </Draggable>
    )
}
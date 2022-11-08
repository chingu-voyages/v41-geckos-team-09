import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Box, Flex, Spacer, Textarea, Button } from '@chakra-ui/react'
import { DragHandleIcon, DeleteIcon } from '@chakra-ui/icons'
import localforage, { removeItem } from 'localforage'
import { useState } from 'react'


export default function Card(props){

    const [name , setName] = React.useState(props.card.content)
    const isDragDisabled = props.card.id === ''

    const DeleteClickFunc = async(card) =>{
      console.log('you tried to delete ', card)

      let initialData = await localforage.getItem('initialData')

      console.log('initial data ', initialData)
      delete initialData.cards[card]
     // console.log('intitla data ', initialData.cards)

      let stackOrder = {}
      initialData.stackOrder.forEach((stack, idx)=>{
        //console.log('stack ', stack)
        let cardIds = []
        cardIds = initialData.stacks[stack].cardIds.filter((cardId)=>{
          return cardId != card
        })

        console.log('cardIds ', cardIds)

        initialData.stacks[stack].cardIds = cardIds
        
        //console.log(initialData.stacks[stack])
      })
      console.log('initial Data ', initialData)

      await localforage.setItem('initialData', initialData)

      props.check(true)

    }

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
          <Flex m='.15em'>
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
            <Textarea  borderRadius='none' focusBorderColor='#DA0A5B' size='sm' bg="AFAFAF" id={props.card.id} 
            value={name} placeholder={''}
            onChange={(e)=>handleChangeFunc(e,props.card.id)}
          /><Spacer />
          </Box>
          <Button borderRadius='none' mt='3px' size='xs' bg='#E7CD06' color='#291400' onClick={()=>DeleteClickFunc(props.card.id)}><DeleteIcon/></Button>
          </Flex>
        )}
      </Draggable>
    )
}
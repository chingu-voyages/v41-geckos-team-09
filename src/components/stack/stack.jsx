import React from 'react'
import Card from '../card/card'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { chakra, Box, Button, Spacer, Flex } from '@chakra-ui/react'
import localforage from 'localforage'
import { useState } from 'react'
// import { theme, button } from '../theme'

const CardList = chakra(Box, {
    baseStyle: {
      background: "#AAAAAA",
      border: ".01em solid",
      minHeight:"200px",
    },
  })

function InnerList(props) {
    const shouldComponentUpdate = (nextProps) => {
        if(nextProps.cards === props.cards) {
            return false;
        }
        return true;
    }
    return props.cards.map((card,index) => (
            <Card key={card.id} card={card} index={index} />
    ));
}

export default function Stack(props){


    const AddClickFunc = async(data) =>{
        props.check(true)
        //props.setLocalData(true)
        let initialData = await localforage.getItem('initialData')

        let length = Object.keys(initialData.cards).length;
        
        let obj = {
            card :{
                "id": `card-${length+1}`,
                "content": "New Task"
            }
        }

        obj[`card-${length+1}`] = obj['card']
        delete obj['card']

        initialData = {...initialData, cards : {...initialData.cards , ...obj } }

        let cardId = `card-${length+1}`
        initialData.stacks[data.stack.id].cardIds.push(cardId)


        await localforage.setItem('initialData',initialData)

     //   initialData = {...initialData, stacks : {...initialData.stacks , {...[data.stack.id] : {}}}}
    }

    return (
        <Draggable draggableId={props.stack.id} index={props.index}>
            {(provided) => (
                <Box minW={'220px'}
                p='.4em'
                display={'flex'}
                flexDirection={'column'}
                {...provided.draggableProps} ref={provided.innerRef}>
                    <Flex
                        flexDirection={'column'}
                        {...provided.dragHandleProps}>
                        <Box
                            border={'1px'} 
                            borderRadius={'2px'}
                            p='.4em'>
                                {props.stack.title}</Box>
                    <Droppable droppableId={props.stack.id} type="card">
                    {(provided, snapshot) => (
                        <CardList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                            <InnerList cards={props.cards} />
                        {provided.placeholder}
                        </CardList>
                    )}
                    </Droppable>
                    <Spacer />
                        <Button 
                            p='.2em'
                            variant="solid"
                            size="xs"
                            bg="#DB095B"
                            color="white"
                            textAlign="center"
                            border="none" 
                            borderRadius="2px"
                            onClick={()=>AddClickFunc(props)}>Add card</Button>
                    </Flex>
                </Box>
            )}
        </Draggable>
    )
  }
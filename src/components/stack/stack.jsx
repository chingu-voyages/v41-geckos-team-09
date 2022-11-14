import React from 'react'
import Card from '../card/card'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { chakra, Box, Button, Spacer, Flex, Input } from '@chakra-ui/react'
import localforage from 'localforage'
import { useState } from 'react'
import { useEffect } from 'react'
import { DragHandleIcon, DeleteIcon } from '@chakra-ui/icons'
import { generatePath } from 'react-router-dom'
import initialData from '../initial-data'
// import { theme, button } from '../theme'
import { v4 } from 'uuid'

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
            <Card check={props.check} key={card.id} card={card} index={index} editable={true} />
    ));
}

export default function Stack(props){

    const [name , setName] = React.useState()

    const AddClickFunc = async(data) =>{
        props.check(true)
        // props.setLocalData(true)
        let initialData = await localforage.getItem('initialData')

        // let length = Object.keys(initialData.cards).length;
        
        let someId = v4()

        let obj = {
            card :{
                "id": someId,
                "content": "New Task"
            }
        }


        obj[someId] = obj['card']
        delete obj['card']

        initialData = {...initialData, cards : {...initialData.cards , ...obj } }

        // let cardId = someId
        initialData.stacks[data.stack.id].cardIds.push(someId)


        await localforage.setItem('initialData',initialData)

        
     //   initialData = {...initialData, stacks : {...initialData.stacks , {...[data.stack.id] : {}}}}
    }

    const handleDeleteFunc = async(data)=>{
        let initialData = await localforage.getItem('initialData')

        setTimeout(async()=>{
            let stackOrder = initialData.stackOrder.filter((stack)=>{
                return stack != data.stack.id
             })
     
             initialData.stackOrder = stackOrder
             delete initialData.stacks[data.stack.id]

             await localforage.setItem('initialData',initialData)
             props.check(true)
        },500)
    }

    const handleStackNameChange = async(e,data)=>{
        setName(e.target.value)
        let initialData = await localforage.getItem('initialData');
        initialData.stacks[data.id].title = e.target.value
        await localforage.setItem('initialData',initialData)
        props.check(true)
    }

    useEffect(()=>{
       getName();
    },[])

    const getName = async() =>{
        let data = await localforage.getItem('initialData');
        console.log('props, ', props, data)
        setName(data.stacks[props.stack.id].title)
    }

    return (
        <Draggable draggableId={props.stack.id} index={props.index}>
            {(provided) => (
                <Box minW={'220px'}
                pr='.4em'
                display={'flex'}
                flexDirection={'column'}
                {...provided.draggableProps} ref={provided.innerRef}>
                    <Flex
                        flexDirection={'column'}
                        {...provided.dragHandleProps}>
                        <Flex
                            bg='grey'
                            p='.3em'
                        >
                            <DragHandleIcon p='.1em'/>
                            {console.log('props ', props)}
                            <Input
                                size={'sm'}
                                borderRadius='none'
                                borderColor='grey'
                                border='2px solid'
                                focusBorderColor='#DA0A5B'
                                bg='darkgrey'
                                fontSize='lg'
                                value={name}
                                onChange={(e)=>handleStackNameChange(e,props.stack)}
                                color='black'
                                fontWeight={'bold'}/>
                          
                        </Flex>
                        <Droppable droppableId={props.stack.id} type="card">
                        {(provided, snapshot) => (
                            <CardList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            >
                                <InnerList check={props.check} cards={props.cards} />
                            {provided.placeholder}
                            </CardList>
                        )}
                        </Droppable>
                        <Button 
                            p='.2em'
                            variant="solid"
                            size="xs"
                            bg="#DB095B"
                            color="white"
                            textAlign="center"
                            border="none" 
                            borderRadius="none"
                            onClick={()=>AddClickFunc(props)}>Add card
                        </Button>
                    </Flex>
                    <Button onClick={()=>handleDeleteFunc(props)}  mt='3px' borderRadius='none' size='xs' bg='#E7CD06' color='#291400'><DeleteIcon/>- Delete this stack</Button>
                </Box>
            )}
        </Draggable>
    )
  }
/* https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd */

import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from '../initial-data'
import Stack from '../stack/stack'
import { Box, Button, Flex, Spacer, VStack, Heading } from '@chakra-ui/react'
import localforage from 'localforage'
import { useEffect } from 'react'
import { useState } from 'react'

// import theme from '../theme'

function InnerList(props) {
    const {stack, cardMap, index , check} = props;
    const cards = stack.cardIds.map(cardId => cardMap[cardId]);
    return <Stack stack={stack} check={check} cards={cards} index={index} />;
  }

export default function Board(props) {

  const [state, setState] = React.useState(initialData)
  const [disable, setDisable]= React.useState(false)

  const check = (value) =>{
    if(value) {
        setTimeout(async()=>{
          let data = await localforage.getItem('initialData');
          let stackOrder, cards, stacks;
          stackOrder = data.stackOrder;
          cards = data.cards;
          stacks = data.stacks;
          setState({...state, cards : cards, stackOrder : stackOrder,  stacks : stacks});
        },500)
    }
  }

 React.useEffect(()=>{
   onLoad();
 },[])

 const onLoad = async()=>{
  let data = await localforage.getItem('initialData');
  if(data){
    setState(data);
  }
  else{
    await localforage.setItem('initialData', initialData)
    setState(initialData)
  }
  // localforage.removeItem('initialData');

 }

  const onDragStart = (start, provided) => {
    provided.announce(`You have lifted the card in position ${start.source.index + 1}`,
    );
  };

  const onDragUpdate = (update, provided) => {
    const message = update.destination 
      ? `You have moved the card to position ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;
  
      provided.announce(message);
  };

  const onDragEnd = async(result, provided) => {
    const message = result.destination
        ? `You have moved the card from position
          ${result.source.index + 1} to ${result.destination.index + 1}`
          : `The card has been returned to its starting position of
            ${result.source.index + 1}`;

    provided.announce(message);

    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'stack') {
      const newStackOrder = Array.from(state.stackOrder);
      newStackOrder.splice(source.index, 1);
      newStackOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        stackOrder: newStackOrder,
      };
      await localforage.setItem('initialData',newState)
      setState(newState);
      return;
    }

    const start = state.stacks[source.droppableId]
    const finish = state.stacks[destination.droppableId]

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds)
      newCardIds.splice(source.index, 1)
      newCardIds.splice(destination.index, 0, draggableId)

      const newStack = {
        ...start,
        cardIds: newCardIds
      }


      const newState = {
        ...state,
        stacks: {
          ...state.stacks,
          [newStack.id]: newStacks
        }
      }

     setState(newState)
      await localforage.setItem('initialData',newState)
      return
    }

    // Moving from one list to another
    const startCardIds = Array.from(start.cardIds)
    startCardIds.splice(source.index, 1)
    const newStart = {
      ...start,
      cardIds: startCardIds
    }

    const finishCardIds = Array.from(finish.cardIds)
    finishCardIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      cardIds: finishCardIds
    }

    const newState = {
      ...state,
      stacks: {
        ...state.stacks,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
    }
    
  
  }

    await localforage.setItem('initialData',newState)

    setState(newState)

  }

  const AddNewStackFunc = async()=>{
    setDisable(true)
    setTimeout(async()=>{    
    let initialData = await localforage.getItem('initialData');
    console.log('initial Data ', initialData)

    let createdStacks = await localforage.getItem('totalStacks')
    console.log('ceated Stacks ', createdStacks);

    if(!createdStacks) {
      await localforage.setItem('totalStacks',4)
      createdStacks = 3}
    
    console.log('created stacks after', createdStacks)

      initialData.stackOrder.push(`stack-${createdStacks+1}`)
  
      let obj = {
        stack :{
          id : 'stack-'+(createdStacks+1),
          title:'New Stack',
          cardIds: []
        }
    }
  
      obj[`stack-${createdStacks+1}`] = obj['stack']
      delete obj['stack']
  
      initialData.stacks = {...initialData.stacks , ...obj }
  
      await localforage.setItem('initialData',initialData);
      check(true)
      setDisable(false)
    },700)
  }
  
    return (
      <>
      <VStack>
        <Flex
          m='1em'
          justifyContent="center"
        >
          <Button 
              p='.2em'
              mr='.5em'
              variant="solid"
              size="xs"
              bg="#DB095B"
              color="white"
              textAlign="center"
              border="none" 
              borderRadius="none"
              disabled={disable}
              onClick={()=>AddNewStackFunc(props)}
              >
              New stack
          </Button>
          <DragDropContext 
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-stacks"
            direction="horizontal"
            type="stack"
            >
              {provided => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  display="flex"
                  //  alignItems="center" 
                  justifyContent="center">
                  {state.stackOrder.map((stackId, index) => {
                    const stack = state.stacks[stackId]
                    /* eslint-disable no-unused-vars */
                    const cards = stack.cardIds.map(
                      cardId => state.cards[cardId]
                    );
                    /* eslint-enable no-unused-vars */
                    return (
                      <>
                      <InnerList 
                        key={stack.id} 
                        check={check}
                        stack={stack} 
                        cardMap={state.cards} 
                        index={index} 
                      />
                      </>
                    );
                  })}
                  {provided.placeholder}
                </Box>
              )}
          </Droppable>
        </DragDropContext>
        </Flex>
        <Flex bg='lightgrey' w='100%' p='4em'>
          <Box>
            <Box>
              <Heading>LIST COMPONENTS</Heading>
            </Box>
            <Spacer />
            <Box>
              <p>Some list title here</p>
              <p>
                some list makers here?
              </p>
            </Box>
          </Box>
        </Flex>
      </VStack>
      </>
    )
}


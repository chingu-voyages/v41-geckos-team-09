/* https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd */

import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from '../initial-data'
import Stack from '../stack/stack'
import { Box } from '@chakra-ui/react'
import localforage from 'localforage'
import { useEffect } from 'react'
import { useState } from 'react'

function InnerList(props) {
    const {stack, cardMap, index , localData, check} = props;
    const cards = stack.cardIds.map(cardId => cardMap[cardId]);
    return <Stack stack={stack} localData={localData} check={check} cards={cards} index={index} />;
  }

export default function Board(props) {
  
  console.log('props ', props)

  const [state, setState] = React.useState(initialData)
  const [localData, setLocalData] = useState({
    refresh : false,
    check: false,
  })
 // state= initialData

  const check = (value) =>{
    console.log('value is here ', value)
    if(value) {
      setLocalData({
        ...localData, refresh : true
      })
    }
  }

 React.useEffect(()=>{
   onLoad();
 },[])


 React.useEffect(()=>{
  if(localData.refresh == true){
    console.log('here ')
    Onload2();
    setLocalData({
      ...localData, refresh : false
    })
  }
 },[localData.refresh === true])

const Onload2 = async()=>{
  console.log('called ')
  let data = await localforage.getItem('initialData');
  setLocalData({...localData, refresh: true})
  
  setState({...data})
  
 }

 console.log('local data ', localData)


 const onLoad = async()=>{
  let data = await localforage.getItem('initialData');
  console.log('data');
  if(data){
    setState(data);
  }
  else{
    await localforage.setItem('initialData', initialData)
    setState(initialData)
  }
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
      console.log('newState ', newState)
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

      console.log('new Stack ', newStack)


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

    console.log('new State here', newState)
    setState(newState)

  }
  
    return (
      <>
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
                 display="flex" alignItems="center" justifyContent="center">
                {state.stackOrder.map((stackId, index) => {
                  const stack = state.stacks[stackId]
                   /* eslint-disable no-unused-vars */
                   const cards = stack.cardIds.map(
                    cardId => state.cards[cardId]
                  );
                  /* eslint-enable no-unused-vars */
                  return (
                    <>
                    {console.log('stack Order ', state.stackOrder)}
                    <InnerList 
                      key={stack.id} 
                      check={check}
                      localData={localData}
                      setLocalData={setLocalData}
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
      </>
    )
}


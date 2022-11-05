import React from 'react'
import Card from '../card/card'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { chakra, Box, Button } from '@chakra-ui/react'
// import stackHeading from '../theme'
import localforage from 'localforage'
import { useState } from 'react'
// import { theme, button } from '../theme'

const CardList = chakra(Box, {
    baseStyle: {
      background: "#AAAAAA",
      border: ".01em solid",
      h:"200px",
    },
  })

// class InnerList extends React.Component {
//     shouldComponentUpdate(nextProps) {
//         if(nextProps.cards === props.cards) {
//             return false;
//         }
//         return true;
//     }
//     render() {
//         return props.cards.map((card,index) => (
//             <Card key={card.id} card={card} index={index} />
//         ));
//     }
// }



// should use useEffect()??
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

    console.log('props ===> ', props)

    const [newAdd, setNewAdd] = useState(false)

    const AddClickFunc = async(data) =>{
        setNewAdd(true)
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
        setNewAdd(false)

    }

    return (
        <Draggable draggableId={props.stack.id} index={props.index}>
            {(provided) => (
                <Box minW={'220px'}
                m={'8px'} 
                p={'2px'}
                border={'1px'} 
                bg={'inherit'} 
                borderRadius={'2px'}
                display={'flex'}
                flexDirection={'column'}
                {...provided.draggableProps} ref={provided.innerRef}>
                    <stackHeading 
                    
                        {...provided.dragHandleProps}>
                        <Box p='6px'>{props.stack.title}</Box>
                        <Button 
                          variant="solid"
                          size="xs"
                          colorScheme="green"
                          textAlign="center"
                          border="none" 
                          borderRadius="2px"
                          onClick={()=>AddClickFunc(props)}>Add card</Button>
                    </stackHeading>
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
                </Box>
            )}
        </Draggable>
    )
  }
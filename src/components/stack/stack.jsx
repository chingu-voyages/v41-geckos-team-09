import React from 'react'
import Card from '../card/card'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { chakra, Box, Heading } from '@chakra-ui/react'
import stackHeading from '../theme'

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
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

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.cards === this.props.cards) {
            return false;
        }
        return true;
    }
    render() {
        return this.props.cards.map((card,index) => (
            <Card key={card.id} card={card} index={index} />
        ));
    }
}
export default class Stack extends React.Component {
  render() {
    return (
        <Draggable draggableId={this.props.stack.id} index={this.props.index}>
            {(provided) => (
                <Box minW={'220px'}
                m={'8px'} 
                border={'1px'} 
                bg={'inherit'} 
                borderRadius={'2px'}
                display={'flex'}
                flexDirection={'column'}
                {...provided.draggableProps} ref={provided.innerRef}>
                    {/* <Heading
                    padding={'8px'}
                    color={'inherit'}
                    {...provided.dragHandleProps}>
                        {this.props.stack.title}
                    </Heading> */}
                    <stackHeading
                        {...provided.dragHandleProps}>
                        {this.props.stack.title}
                    </stackHeading>
                    <Droppable droppableId={this.props.stack.id} type="card">
                    {(provided, snapshot) => (
                        <CardList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                            <InnerList cards={this.props.cards} />
                        {provided.placeholder}
                        </CardList>
                    )}
                    </Droppable>
                </Box>
            )}
        </Draggable>
    )
  }
}
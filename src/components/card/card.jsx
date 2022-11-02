import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Box } from '@chakra-ui/react'

export default class Card extends React.Component {
  render() {
    const isDragDisabled = this.props.card.id === ''
    return (
      <Draggable
        draggableId={this.props.card.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (

          <Box bg='#DA0A5B' textColor='#FAFAFA' px={ 4 } m={ .5 } borderRadius='sm'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          aria-roledescription="Press space bar to lift the card"
        >
          {this.props.card.content}
          </Box>
        )}
      </Draggable>
    )
  }
}
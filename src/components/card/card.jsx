import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { Box } from '@chakra-ui/react'

// const Container = styled.div`
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   padding: 8px;
//   margin-bottom: 8px;
//   color: inherit;
//   transition: background-color 0.2s ease;
//   background-color: ${props =>
//     props.isDragDisabled
//       ? 'lightgrey'
//       : props.isDragging
//         ? '#DC125F'
//         : '#1779EA'};
// `

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
          // <Container
          //   {...provided.draggableProps}
          //   {...provided.dragHandleProps}
          //   ref={provided.innerRef}
          //   isDragging={snapshot.isDragging}
          //   aria-roledescription="Press space bar to lift the card"
          // >
          //   {this.props.card.content}
          // </Container>
          <Box bg='#DA0A5B' textColor='#ffffff' px={ 4 } m={ .5 } borderRadius='sm'
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
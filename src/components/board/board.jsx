/* https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd */

import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import initialData from '../initial-data'
import Stack from '../stack/stack'

const Container = styled.div`
  display:flex;
`

class InnerList extends React.PureComponent {
  render() {
    const {stack, cardMap, index } = this.props;
    const cards = stack.cardIds.map(cardId => cardMap[cardId]);
    return <Stack stack={stack} cards={cards} index={index} />;
  }
}

export default class Board extends React.Component {
  state = initialData

  onDragStart = (start, provided) => {
    provided.announce(`You have lifted the card in position ${start.source.index + 1}`,
    );
  };

  onDragUpdate = (update, provided) => {
    const message = update.destination 
      ? `You have moved the card to position ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;
  
      provided.announce(message);
  };

  onDragEnd = (result, provided) => {
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
      const newStackOrder = Array.from(this.state.stackOrder);
      newStackOrder.splice(source.index, 1);
      newStackOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        stackOrder: newstackOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.stacks[source.droppableId]
    const finish = this.state.stacks[destination.droppableId]

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds)
      newCardIds.splice(source.index, 1)
      newCardIds.splice(destination.index, 0, draggableId)

      const newStack = {
        ...start,
        cardIds: newCardIds
      }

      const newState = {
        ...this.state,
        stacks: {
          ...this.state.stacks,
          [newStack.id]: newStacks
        }
      }

      this.setState(newState)
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
      ...this.state,
      stacks: {
        ...this.state.stacks,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext 
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="all-stacks"
          direction="horizontal"
          type="stack"
          >
            {provided => (
              <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.stackOrder.map((stackId, index) => {
                  const stack = this.state.stacks[stackId]
                   /* eslint-disable no-unused-vars */
                   const cards = stack.cardIds.map(
                    cardId => this.state.cards[cardId]
                  );
                  /* eslint-enable no-unused-vars */
                  return (
                    <InnerList 
                      key={stack.id} 
                      stack={stack} 
                      cardMap={this.state.cards} 
                      index={index} 
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
        </Droppable>
      </DragDropContext>
    )
  }
}

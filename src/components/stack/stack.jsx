import React from 'react'
import styled from 'styled-components'
import Card from '../card/card'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid darkgrey;
  background-color: inherit;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
  color:inherit;
`
const CardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'darkgrey' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`
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
                <Container {...provided.draggableProps} ref={provided.innerRef}>
                    <Title{...provided.dragHandleProps}>
                        {this.props.stack.title}
                    </Title>
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
                </Container>
            )}
        </Draggable>
    )
  }
}
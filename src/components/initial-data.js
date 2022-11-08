const initialData = {
    cards: {
      'card-1': { id: 'card-1', content: 'Enter a task' },
      'card-2': { id: 'card-2', content: 'Enter a another task' },
      'card-3': { id: 'card-3', content: 'Other task' },
      'card-4': { id: 'card-4', content: 'Other task here' }
    },
    stacks: {
      'stack-1': {
        id: 'stack-1',
        title: 'Travel day',
        cardIds: ['card-1', 'card-2', 'card-3', 'card-4']
      },
      'stack-2': {
        id: 'stack-2',
        title: 'Museum day',
        cardIds: []
      },
      'stack-3': {
        id: 'stack-3',
        title: 'Rest day',
        cardIds: []
      }
    },
    // Facilitate reordering of the stacks
    stackOrder: ['stack-1', 'stack-2', 'stack-3']
  }
  
  export default initialData
const initialData = {
    cards: {
      'card-1': { id: 'card-1', content: 'Take out the garbage' },
      'card-2': { id: 'card-2', content: 'Watch my favorite show' },
      'card-3': { id: 'card-3', content: 'Charge my phone' },
      'card-4': { id: 'card-4', content: 'Cook dinner' }
    },
    stacks: {
      'stack-1': {
        id: 'stack-1',
        title: 'To do',
        cardIds: ['card-1', 'card-2', 'card-3', 'card-4']
      },
      'stack-2': {
        id: 'stack-2',
        title: 'In progress',
        cardIds: []
      },
      'stack-3': {
        id: 'stack-3',
        title: 'Done',
        cardIds: []
      }
    },
    // Facilitate reordering of the stacks
    stackOrder: ['stack-1', 'stack-2', 'stack-3']
  }
  
  export default initialData
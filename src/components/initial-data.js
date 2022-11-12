const initialData = {
    cards: {
      'c': { id: 'c', content: 'Enter a list item' }
    },
    stacks: {
      's': {
        id: 's',
        title: 'Enter an event title',
        cardIds: ['c']
      }
    },
    // Facilitate reordering of the stacks
    stackOrder: ['s']
  }
  
  export default initialData